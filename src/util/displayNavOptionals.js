"use strict";

import getUserInputs from "./userInputsGetter";
import { addItems } from "./setFunctions";
import { elementReset } from "./elementReset";
import displayElements from "./displayElements";

export default function displayNavOptionals(
  set,
  parentEl,
  parentElClass,
  generatorFn,
) {
  elementReset(parentEl, []);
  set.forEach((item) => {
    displayElements(parentEl, generatorFn(item));
  });
}
