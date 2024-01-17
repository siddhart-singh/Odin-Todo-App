import { createEl } from "./elementCreator";
import "../input.css";

export default function generateWarning() {
  const warning = createEl("div", ["warning"]);
  const timer = createEl("div", ["timer"], warning);
  const undoWarningBtn = createEl(
    "button",
    ["undoWarningBtn"],
    warning,
    "UNDO",
  );

  setTimeout(() => {
    warning.classList.add("displayWarning");
  }, 150);

  return [warning];
}
