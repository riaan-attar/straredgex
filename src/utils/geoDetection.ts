/**
 * Multi-method India vs Global Geo & Currency Detection
 * 
 * 1. Method 1: Timezone Detection (Instant, Synchronous, 0ms)
 *    - Intl.DateTimeFormat().resolvedOptions().timeZone (Asia/Kolkata, Asia/Calcutta)
 *    - Timezone Offset (-330 minutes / UTC+5:30)
 * 
 * 2. Method 2: Browser Locale & Language (Instant, Synchronous, 0ms)
 *    - navigator.languages & navigator.language (en-IN, hi-IN, hi, mr, ta, te, gu, etc.)
 * 
 * 3. Method 3: Lightweight Free Geolocation API (Async Fallback & Verification)
 *    - Lightweight endpoint (api.country.is / freeipapi.com) with timeout
 */

export type CurrencyType = 'INR' | 'USD';

export interface DetectionResult {
  country: string;
  isIndia: boolean;
  currency: CurrencyType;
  method: 'url_param' | 'storage' | 'timezone' | 'locale' | 'api' | 'default';
}

const STORAGE_KEY = 'straredgex_user_currency';
const COUNTRY_STORAGE_KEY = 'straredgex_user_country';

/**
 * Check if URL contains query parameter overrides (e.g. ?currency=INR or ?country=IN)
 */
export function getUrlOverride(): { currency?: CurrencyType; isIndia?: boolean } | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const params = new URLSearchParams(window.location.search);
    const currencyParam = params.get('currency')?.toUpperCase();
    const countryParam = params.get('country')?.toUpperCase() || params.get('geo')?.toUpperCase();

    if (currencyParam === 'INR' || countryParam === 'IN') {
      return { currency: 'INR', isIndia: true };
    }
    if (currencyParam === 'USD' || (countryParam && countryParam !== 'IN')) {
      return { currency: 'USD', isIndia: false };
    }
  } catch (e) {
    console.warn('Failed to parse URL params for currency override', e);
  }
  return null;
}

/**
 * Method 1: Instant Timezone check (Synchronous)
 * Checks for Indian Standard Time (IST) via IANA timezone and UTC offset.
 */
export function isIndianTimezone(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    // Check IANA Timezone identifier
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone) {
      const tzLower = timeZone.toLowerCase();
      if (
        tzLower === 'asia/kolkata' ||
        tzLower === 'asia/calcutta' ||
        tzLower === 'ist' ||
        tzLower.includes('kolkata') ||
        tzLower.includes('calcutta')
      ) {
        return true;
      }
    }

    // Check UTC offset (-330 minutes = UTC+05:30)
    const offsetMinutes = new Date().getTimezoneOffset();
    if (offsetMinutes === -330) {
      return true;
    }
  } catch (e) {
    console.warn('Timezone detection error:', e);
  }

  return false;
}

/**
 * Method 2: Browser Locale and Language check (Synchronous)
 * Checks browser accepted languages and locale strings.
 */
export function isIndianLocale(): boolean {
  if (typeof navigator === 'undefined') return false;

  try {
    const languages: readonly string[] = navigator.languages || [navigator.language];
    const indianLangCodes = [
      'en-in', 'hi', 'hi-in', 'ta', 'ta-in', 'te', 'te-in', 
      'mr', 'mr-in', 'gu', 'gu-in', 'bn-in', 'kn', 'kn-in', 
      'ml', 'ml-in', 'pa', 'pa-in', 'ur-in', 'or-in', 'as-in'
    ];

    for (const lang of languages) {
      if (!lang) continue;
      const normalized = lang.toLowerCase();
      if (indianLangCodes.some(code => normalized === code || normalized.startsWith(code))) {
        return true;
      }
      if (normalized.endsWith('-in')) {
        return true;
      }
    }
  } catch (e) {
    console.warn('Locale detection error:', e);
  }

  return false;
}

/**
 * Fast synchronous check combining URL overrides, stored preferences, Timezone, and Locale.
 */
export function detectInstantCountry(): DetectionResult {
  // 1. URL Override has highest priority for testing / direct links
  const urlOverride = getUrlOverride();
  if (urlOverride && urlOverride.currency) {
    return {
      country: urlOverride.isIndia ? 'IN' : 'GLOBAL',
      isIndia: !!urlOverride.isIndia,
      currency: urlOverride.currency,
      method: 'url_param',
    };
  }

  // 2. Saved user preference in localStorage
  if (typeof localStorage !== 'undefined') {
    try {
      const savedCurrency = localStorage.getItem(STORAGE_KEY);
      if (savedCurrency === 'INR' || savedCurrency === 'USD') {
        return {
          country: savedCurrency === 'INR' ? 'IN' : 'GLOBAL',
          isIndia: savedCurrency === 'INR',
          currency: savedCurrency as CurrencyType,
          method: 'storage',
        };
      }
    } catch (e) {
      // Ignore storage access errors
    }
  }

  // 3. Method 1: Timezone Detection
  if (isIndianTimezone()) {
    return {
      country: 'IN',
      isIndia: true,
      currency: 'INR',
      method: 'timezone',
    };
  }

  // 4. Method 2: Browser Locale Detection
  if (isIndianLocale()) {
    return {
      country: 'IN',
      isIndia: true,
      currency: 'INR',
      method: 'locale',
    };
  }

  // Default to Global (USD)
  return {
    country: 'GLOBAL',
    isIndia: false,
    currency: 'USD',
    method: 'default',
  };
}

/**
 * Method 3: Lightweight Async Geolocation API
 * Fetches country code in background with quick timeout.
 */
export async function fetchCountryFromAPI(timeoutMs = 2500): Promise<string | null> {
  const fetchWithTimeout = async (url: string): Promise<any> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  };

  // Endpoint 1: api.country.is (Extremely fast, minimal JSON {"country": "IN", "ip": "..."})
  try {
    const data = await fetchWithTimeout('https://api.country.is');
    if (data && data.country && typeof data.country === 'string') {
      return data.country.toUpperCase();
    }
  } catch {
    // Fallback to next endpoint
  }

  // Endpoint 2: freeipapi.com
  try {
    const data = await fetchWithTimeout('https://freeipapi.com/api/json');
    if (data && data.countryCode && typeof data.countryCode === 'string') {
      return data.countryCode.toUpperCase();
    }
  } catch {
    // Fallback to next endpoint
  }

  // Endpoint 3: ipapi.co
  try {
    const data = await fetchWithTimeout('https://ipapi.co/json/');
    if (data && data.country_code && typeof data.country_code === 'string') {
      return data.country_code.toUpperCase();
    }
  } catch {
    // All endpoints failed or timed out
  }

  return null;
}

/**
 * Persist user preference to localStorage
 */
export function saveCurrencyPreference(currency: CurrencyType): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, currency);
    localStorage.setItem(COUNTRY_STORAGE_KEY, currency === 'INR' ? 'IN' : 'GLOBAL');
  } catch (e) {
    console.warn('Failed to save currency preference', e);
  }
}
