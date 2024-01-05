"use strict";

import "./input.css";
import { createEl } from "./util/elementCreator";

export function homepageGenerator() {
  const body = document.querySelector("body");
  body.classList.add("body");

  const nav = createEl("nav", ["nav"], body);
}
