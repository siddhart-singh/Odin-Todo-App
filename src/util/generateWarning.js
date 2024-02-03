import { createEl } from "./elementCreator";
import { createCircleSVG } from "./svgCreator";
import "../input.css";

export default function generateWarning() {
  const warning = createEl("div", ["warning"]);
  const timer = createCircleSVG(
    { viewBox: "0 0 32 32" },
    {
      class: "circle",
      r: "15",
      cx: "16",
      cy: "16",
      fill: "transparent",
    },
    ["timer"],
    warning,
  );
  console.log(timer);
  const undoWarningBtn = createEl(
    "button",
    ["undoWarningBtn"],
    warning,
    "Undo",
  );

  setTimeout(() => {
    warning.classList.add("displayWarning");
  }, 150);

  return [warning];
}
