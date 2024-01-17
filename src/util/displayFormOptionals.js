import { elementReset } from "./elementReset";
import { generateFormOption } from "./generateFormOptions";
export default function displayFormOptionals(
  parentEl,
  parentElClass,
  firstOption,
  firstOptionAttributes,
  set,
) {
  if (parentEl) {
    elementReset(parentEl, [`${parentElClass}`]);
    generateFormOption(set, parentEl, firstOption, firstOptionAttributes);
  }
}
