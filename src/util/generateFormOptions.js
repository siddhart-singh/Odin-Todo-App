"use strict";

import { createEl } from "./elementCreator";

export function generateFormOption(
  optionsList,
  parentEl,
  firstChild,
  firstChildAttribute,
) {
  createEl("option", [], parentEl, firstChild, firstChildAttribute);

  optionsList.forEach((option) => {
    createEl("option", [], parentEl, option, {
      value: `${option.toLowerCase()}`,
    });
  });
}
