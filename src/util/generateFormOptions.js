"use strict";

import { createEl } from "./elementCreator";

export function generateFormOption(optionsList, parentEl) {
  optionsList.forEach((option) => {
    console.log(parentEl);
    createEl("option", [], parentEl, option, {
      value: `${option.toLowerCase()}`,
    });
  });
}
