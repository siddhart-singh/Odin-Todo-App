"use strict";

import { createEl } from "./elementCreator";

export function generateFormOption(optionsList, parentEl) {
  optionsList.forEach((option) => {
    console.log(option);
    createEl("option", [], parentEl, option, {
      value: `${option.toLowerCase()}`,
    });
  });
}
