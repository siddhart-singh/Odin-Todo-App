"use strict";

import { createEl } from "./util/elementCreator";

export function collapseBtn(btn) {
  if (btn.nodeName != "BUTTON") {
    return -1;
  }
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("collapseBtnRotate");
  });
}

export function createProject() {
  return createEl("button", ["navBtn"], "", "My Project");
}
