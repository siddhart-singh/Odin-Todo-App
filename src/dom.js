"use strict";

export function collapseBtn(btn) {
  if (!btn) {
    return;
  }
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("collapseBtnRotate");
  });
}
