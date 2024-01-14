"use strict";

export default function setDefaultProjectOption(parentEl, currentTab) {
  if (!parentEl) {
    return -1;
  }
  [...parentEl.children].forEach((option) => {
    if (option.innerText == currentTab) {
      option.setAttribute("selected", "true");
    } else {
      option.removeAttribute("selected");
    }
  });
}
