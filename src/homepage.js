+"use strict";

import "./input.css";
import { createEl } from "./util/elementCreator";
import createSVG from "./util/svgCreator";

export function homepageGenerator() {
  const nav = createEl("nav", ["nav"]);
  const userIcon = createEl("div", ["userIcon"], nav);
  const userIconSvg = createSVG(
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 20",
    },
    {
      d: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z",
    },
    ["userIconSvg"],
    userIcon,
  );

  const navSectionContainerTodo = createEl("div", ["navSectionContainer"], nav);
  const navBtnToday = createEl(
    "button",
    ["navBtn"],
    navSectionContainerTodo,
    "Today",
  );

  const navSectionContainerProjects = createEl(
    "div",
    ["navSectionContainer"],
    nav,
  );
  const projectsContainerHeader = createEl(
    "div",
    ["navSectionContainerHeader"],
    navSectionContainerProjects,
  );
  const projectsContainerHeaderHeading = createEl(
    "h2",
    ["navSectionContainerHeading"],
    projectsContainerHeader,
    "Projects",
  );
  const projectsContainerHeaderAddBtn = createEl(
    "button",
    ["navSectionContainerBtn", "navSectionContainerAddBtn", "projectAddBtn"],
    projectsContainerHeader,
  );
  createSVG(
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 20",
    },
    {
      d: "M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z",
    },
    ["navSectionContainerBtnSvg"],
    projectsContainerHeaderAddBtn,
  );

  const projectsContainerHeaderCollapseBtn = createEl(
    "button",
    [
      "navSectionContainerBtn",
      "navSectionContainerCollapseBtn",
      "projectCollapseBtn",
    ],
    projectsContainerHeader,
  );
  createSVG(
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 16 10",
    },
    {
      d: "M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z",
    },
    ["navSectionContainerBtnSvg"],
    projectsContainerHeaderCollapseBtn,
  );

  const projectsContent = createEl(
    "div",
    ["navSectionContainerContentContainer", "projectContentContainer"],
    navSectionContainerProjects,
  );

  const addProjectForm = createEl("form", ["addProjectForm"], projectsContent);
  const addProjectInput = createEl(
    "input",
    ["addProjectFormInput"],
    addProjectForm,
    "",
    {
      placeholder: "Project Name",
      type: "text",
      name: "projectName",
    },
  );
  createEl("button", ["addProjectFormBtn", "addBtn"], addProjectForm, "+");
  createEl("button", ["addProjectFormBtn", "cancelBtn"], addProjectForm, "-");

  const navSectionContainerlabels = createEl(
    "div",
    ["navSectionContainer"],
    nav,
  );

  const projectListContainer = createEl(
    "div",
    ["projectListContainer", "navSectionContainerContentContainer"],
    projectsContent,
  );
  const labelsContainerHeader = createEl(
    "div",
    ["navSectionContainerHeader"],
    navSectionContainerlabels,
  );
  const labelsContainerHeaderHeading = createEl(
    "h2",
    ["navSectionContainerHeading"],
    labelsContainerHeader,
    "Labels",
  );
  const labelsContainerHeaderAddBtn = createEl(
    "button",
    ["navSectionContainerBtn", "navSectionContainerAddBtn"],
    labelsContainerHeader,
  );
  createSVG(
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 20 20",
    },
    {
      d: "M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z",
    },
    ["navSectionContainerBtnSvg"],
    labelsContainerHeaderAddBtn,
  );

  const labelsContainerHeaderCollapseBtn = createEl(
    "button",
    [
      "navSectionContainerBtn",
      "navSectionContainerCollapseBtn",
      "labelCollapseBtn",
    ],
    labelsContainerHeader,
  );
  createSVG(
    {
      "aria-hidden": "true",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      viewBox: "0 0 16 10",
    },
    {
      d: "M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z",
    },
    ["navSectionContainerBtnSvg"],
    labelsContainerHeaderCollapseBtn,
  );

  const labelsContent = createEl(
    "div",
    ["labelsContentContainer"],
    navSectionContainerlabels,
  );

  const content = createEl("div", ["content"]);

  return [nav, content];
}
