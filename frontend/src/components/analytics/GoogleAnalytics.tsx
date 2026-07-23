import Script from "next/script";
import { ANALYTICS } from "@/config/constants";

/**
 * Loads gtag.js once on every page via the root layout.
 * Skipped in development to avoid polluting analytics with local traffic.
 */
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const measurementId = ANALYTICS.googleMeasurementId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
