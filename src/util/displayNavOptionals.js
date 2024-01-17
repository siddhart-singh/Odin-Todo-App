"use strict";

import getUserInputs from "./userInputsGetter";
import { addItems } from "./setFunctions";
import { elementReset } from "./elementReset";
import displayElements from "./displayElements";

export default function displayNavOptionals(
  formData,
  inputName,
  set,
  parentEl,
  parentElClass,
  generatorFn,
) {
  const inputValue = [
    getUserInputs(formData, [`${inputName}`])[`${inputName}`],
  ];
  addItems(set, inputValue);
  elementReset(parentEl, []);
  set.forEach((item) => {
    displayElements(parentEl, generatorFn(item));
  });
}
