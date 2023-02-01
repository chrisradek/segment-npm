import * as facade from "@segment/facade";
import { foo } from "./dependency";
const trackBtn = document.getElementById("track");
const loadBtn = document.getElementById("load");

loadBtn.addEventListener("click", () => {
  loadBtn.disabled = true;

  const writeKey = document.getElementById("writeKey").value;
  segmentLoad(writeKey);
});

trackBtn.addEventListener("click", () => {
  analytics.track("Test Event");
});

// log just to get facade included
console.log(facade);
foo();
