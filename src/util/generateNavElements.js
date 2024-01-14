"use strict";

import { createEl } from "./elementCreator";
import createSVG from "./svgCreator";

export function generateProject(projectName) {
  const div = createEl("div", ["project"]);
  const projectNameBtn = createEl("button", ["navBtn"], div, projectName);

  return [div];
}

export function generateLabel(labelName) {
  const div = createEl("div", ["label"]);
  const labelNameEl = createEl("p", ["labelTag"], div, labelName);

  const btn = createEl("button", ["labelDeleteBtn"], div);
  const labelDeleteBtnSVG = createSVG(
    {
      class: "labelDeleteBtnSvg",
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 20",
    },
    {
      d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z",
    },
    ["labelDeleteBtn"],
    btn,
  );
  return [div];
}
