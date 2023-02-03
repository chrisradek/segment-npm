import { AnalyticsBrowser } from "@segment/analytics-next";
import facade from "@segment/facade";
import GTM from "@segment/analytics.js-integration-google-tag-manager";

// Any analytics calls are buffered until it is done loading.
export const analytics = (window.analytics = new AnalyticsBrowser());

export function initialize(writeKey, pageCall = () => {}) {
  // Include any integrations in the `classicIntegrations` array.
  // The integrations will use the source settings fetched by a.js.
  analytics.load({
    writeKey,
    classicIntegrations: [GTM],
  });

  // This example is the same as above except it illustrates overriding
  // settings for the integration.
  // These overrides are merged into the source settings fetched by a.js,
  // and can be used to add an integration without defining it through the app.
  // analytics.load(
  //   {
  //     writeKey,
  //     classicIntegrations: [GTM],
  //   },
  //   {
  //     integrations: {
  //       [GTM.prototype.name]: {
  //         environment: "dev",
  //       },
  //       "Google Tag Manager": {
  //         environment: "dev",
  //       },
  //     },
  //   }
  // );

  pageCall();
}

export function foo() {
  console.log(facade);
}
