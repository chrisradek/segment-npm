import * as crypto from "crypto-js";

export function foo() {
  console.log("I do something");
  console.log(crypto.MD5("test"));
}
