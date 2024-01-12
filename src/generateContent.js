"use strict";

import { createEl } from "./util/elementCreator";
import { generateFormOption } from "./util/generateFormOptions";

export function contentPageGenerator(contentHeadingText, projects, labels) {
  const contentHeader = createEl("header", ["content-header"]);
  const contentHeaderHeading = createEl(
    "h1",
    ["content-header-heading"],
    contentHeader,
    `${contentHeadingText}`,
  );

  const tasks = createEl("div", ["tasks"]);

  const contentContainer = createEl("section", ["contentContainer"]);

  contentContainer.append(formGenerator(projects, labels));

  return [contentHeader, tasks, contentContainer];
}

function formGenerator(projects, labels) {
  const contentForm = createEl("form", ["content-form"]);
  const todoDetails = createEl("div", ["todo-details"], contentForm);
  const todoDetailsName = createEl(
    "input",
    ["todo-details-name"],
    todoDetails,
    "",
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Task name",
      required: true,
    },
  );
  const todoDetailsDescription = createEl(
    "input",
    ["todo-details-description"],
    todoDetails,
    "",
    {
      type: "text",
      name: "description",
      id: "description",
      placeholder: "Description",
      required: true,
    },
  );

  const formOptionalsDiv = createEl("div", ["form-optionals"], todoDetails);
  const todoDetailsDate = createEl(
    "input",
    ["form-details-tags"],
    formOptionalsDiv,
    "",
    { type: "date", name: "date", id: "date", placeholder: "Today" },
  );
  const todoDetailsPriority = createEl(
    "select",
    ["form-details-tags"],
    formOptionalsDiv,
    "",
    { name: "priority", id: "priority" },
  );
  createEl("option", [], todoDetailsPriority, "Priority", {
    value: "no-value",
    disabled: true,
    selected: true,
  });
  const todoDetailsTags = createEl(
    "select",
    ["form-details-tags"],
    formOptionalsDiv,
    "",
    {
      name: "tag",
      id: "tag",
    },
  );
  createEl("option", [], todoDetailsTags, "Tags", {
    value: "no-value",
    disabled: true,
    selected: true,
  });
  generateFormOption(labels, todoDetailsTags);

  const formSubmit = createEl("div", ["form-submit"], contentForm);
  const todoDetailsProject = createEl(
    "select",
    ["form-details-tags"],
    formSubmit,
    "",
    {
      name: "project",
      id: "project",
    },
  );
  createEl("option", [], todoDetailsProject, "Today", {
    value: "today",
    selected: true,
  });

  generateFormOption(projects, todoDetailsProject);
  const formButtonContainer = createEl(
    "div",
    ["form-button-container"],
    formSubmit,
  );
  createEl("button", ["todo-form-btns"], formButtonContainer, "Clear", {
    type: "reset",
  });
  createEl(
    "button",
    ["todo-form-btns", "addTaskBtn"],
    formButtonContainer,
    "Add Task",
    {
      // type: "submit",
    },
  );

  return contentForm;
}
