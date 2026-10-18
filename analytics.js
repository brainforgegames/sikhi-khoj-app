(function initialiseAnalytics() {
  const measurementId = window.SIKHI_KHOJ_CONFIG?.analyticsMeasurementId;
  const validMeasurementId = /^G-[A-Z0-9]+$/.test(measurementId || '');
  const noOp = Object.freeze({ event() {} });
  if (!validMeasurementId) {
    window.SIKHI_KHOJ_ANALYTICS = noOp;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    anonymize_ip: true
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.SIKHI_KHOJ_ANALYTICS = Object.freeze({
    event(name, parameters = {}) {
      window.gtag('event', name, parameters);
    }
  });
})();
