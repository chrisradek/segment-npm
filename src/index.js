import { analytics, initialize } from "./dependency";

const trackBtn = document.getElementById("track");
const loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", () => {
  loadBtn.disabled = true;

  const writeKey = document.getElementById("writeKey").value;

  // this would normally be on page load instead of a click listener
  initialize(writeKey, () => {
    analytics.track("Page Call -- for APP");
  });

  analytics.track("Another track event down the line -- FOR APP");
});
