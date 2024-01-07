"use strict";

import { createEl } from "./util/elementCreator";

export function createProjectsNavElements(projectList) {
  const projectElements = [];
  projectList.forEach((project) => {
    projectElements.push(createEl("button", ["navBtn"], "", project));
  });
  return projectElements;
}
