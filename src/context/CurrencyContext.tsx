import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  type CurrencyType,
  detectInstantCountry,
  fetchCountryFromAPI,
  getUrlOverride,
  saveCurrencyPreference,
} from '../utils/geoDetection';

export interface StatMetric {
  prefix?: string;
  target: number;
  decimals?: number;
  suffix?: string;
  title: string;
  description: string;
}

export interface CurrencyContextType {
  currency: CurrencyType;
  isIndia: boolean;
  detectionMethod: string;
  setCurrency: (c: CurrencyType) => void;
  toggleCurrency: () => void;
  adSpendStat: StatMetric;
  cpaReductionStat: StatMetric;
  roasStat: StatMetric;
  faqMinSpendText: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Synchronous initial detection ensures NO layout flash or delayed metric shift
  const [detectionState, setDetectionState] = useState(() => detectInstantCountry());

  const isIndia = detectionState.currency === 'INR';

  // Background API Verification
  useEffect(() => {
    // If user explicitly provided URL override or saved storage, don't let API override
    const urlOverride = getUrlOverride();
    if (urlOverride) return;

    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem('straredgex_user_currency');
        if (saved) return;
      } catch (e) {
        // Ignore
      }
    }

    // Call lightweight async Geolocation API
    let isMounted = true;
    fetchCountryFromAPI().then((apiCountry) => {
      if (!isMounted || !apiCountry) return;

      const isCountryIndia = apiCountry === 'IN';
      const targetCurrency: CurrencyType = isCountryIndia ? 'INR' : 'USD';

      // Update if API differs or confirms
      setDetectionState((prev) => {
        if (prev.currency !== targetCurrency && prev.method !== 'storage' && prev.method !== 'url_param') {
          return {
            country: apiCountry,
            isIndia: isCountryIndia,
            currency: targetCurrency,
            method: 'api',
          };
        }
        return prev;
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const setCurrency = (newCurrency: CurrencyType) => {
    saveCurrencyPreference(newCurrency);
    setDetectionState({
      country: newCurrency === 'INR' ? 'IN' : 'GLOBAL',
      isIndia: newCurrency === 'INR',
      currency: newCurrency,
      method: 'storage',
    });
  };

  const toggleCurrency = () => {
    const nextCurrency: CurrencyType = isIndia ? 'USD' : 'INR';
    setCurrency(nextCurrency);
  };

  // Dynamic statistics configurations
  const adSpendStat: StatMetric = isIndia
    ? {
        prefix: '₹',
        target: 1,
        suffix: 'Cr+',
        title: 'Ad Spend Managed',
        description: 'Aggressively optimized across Google and Meta platforms.',
      }
    : {
        prefix: '$',
        target: 1,
        suffix: 'Mn+',
        title: 'Ad Spend Managed',
        description: 'Aggressively optimized across Google and Meta platforms.',
      };

  const cpaReductionStat: StatMetric = {
    target: 40,
    suffix: '%',
    title: 'Average CPA Reduction',
    description: 'Our custom landing pages drastically reduce cost per acquisition.',
  };

  const roasStat: StatMetric = {
    target: 3.5,
    decimals: 1,
    suffix: 'x',
    title: 'Average ROAS',
    description: 'Measured across our top-tier performance portfolio.',
  };

  const faqMinSpendText = isIndia ? '₹50k' : '$50k';

  return (
    <CurrencyContext.Provider
      value={{
        currency: detectionState.currency,
        isIndia,
        detectionMethod: detectionState.method,
        setCurrency,
        toggleCurrency,
        adSpendStat,
        cpaReductionStat,
        roasStat,
        faqMinSpendText,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
export default CurrencyContext;
