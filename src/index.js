import { AnalyticsBrowser } from "@segment/analytics-next";
import GTM from "@segment/analytics.js-integration-google-tag-manager";

// Any analytics calls are buffered until it is done loading.
const analytics = new AnalyticsBrowser();

const trackBtn = document.getElementById("track");
const loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", () => {
  loadBtn.disabled = true;

  const writeKey = document.getElementById("writeKey").value;
  // Include any integrations in the `classicIntegrations` array.
  analytics.load({
    writeKey,
    classicIntegrations: [GTM],
  });
});

trackBtn.addEventListener("click", () => {
  analytics.track("Test Event");
});
