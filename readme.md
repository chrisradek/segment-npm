## Import integrations via NPM modules

`@segment/analytics-next` version 1.47.0 introduces a new field to the load` method to support importing integrations directly.

Integrations are available to use directly via NPM. Here's a list of device-mode integrations:
https://github.com/segmentio/analytics.js-integrations/tree/master/integrations

## Using settings from app.segment.com

To consume an integration, simply import it and pass it to the `classicIntegrations` array on the `load()` method:

```js
import GTM from "@segment/analytics.js-integration-google-tag-manager";

const analytics = new AnalyticsBrowser();
analytics.load({
  writeKey,
  classicIntegrations: [GTM],
});
```

This strategy will still use the destination settings defined in app.segment.com to configure the integration.

The library will continue to fetch any integrations defined by the source that aren't included in the `classicIntegrations` array. If a destination is later removed from the source through app.segment.com, then it will be ignored.

## Defining settings in code

It is also possible to specify the integration settings in code. When doing this, the integration settings you define will be merged with the remote destination settings. If there aren't any remote destination settings (the destination is not defined in app.segment.com) the integration will still be used.

```js
import GTM from "@segment/analytics.js-integration-google-tag-manager";

const analytics = new AnalyticsBrowser();
analytics.load(
  {
    writeKey,
    classicIntegrations: [GTM],
  },
  {
    integrations: {
      // Alternatively can pass the name of the integration directly ("Google Tag Manager")
      [GTM.prototype.name]: {
        environment: "dev",
      },
    },
  }
);
```

## Steps to run this sample

1. npm install
2. npm run build
3. npm start
4. open `localhost:8080` in browser
