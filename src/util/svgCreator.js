"use strict";

export default function createSVG(
  svgAttributes = {},
  pathAttributes = {},
  classes = [],
  parentEl,
) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );

  if (svgAttributes) {
    for (const [key, value] of Object.entries(svgAttributes)) {
      iconSvg.setAttribute(key, value);
    }
  }

  if (pathAttributes) {
    for (const [key, value] of Object.entries(pathAttributes)) {
      iconPath.setAttribute(key, value);
    }
  }

  iconSvg.appendChild(iconPath);

  if (classes.length != 0) iconSvg.classList.add(...classes);

  parentEl.appendChild(iconSvg);

  return iconSvg;
}
