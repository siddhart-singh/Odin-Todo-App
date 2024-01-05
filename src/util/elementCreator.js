"use strict";

export function createEl(type, classes, parentEl, content, attributes = {}) {
  const el = document.createElement(type);
  el.classList.add(...classes);
  el.textContent = content;
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
  }

  if (parentEl instanceof Element) {
    parentEl.appendChild(el);
  }
  return el;
}
