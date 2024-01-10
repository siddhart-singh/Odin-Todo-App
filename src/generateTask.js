"use strict";

import { createEl } from "./util/elementCreator";

export default function taskGenerator(userInput = {}) {
  const task = createEl("div", ["task"]);

  const completeMarkerContainer = createEl(
    "div",
    ["completeMarkerContainenr"],
    task,
  );
  const completeMarker = createEl(
    "span",
    ["completeMarker"],
    completeMarkerContainer,
  );

  const taskContent = createEl("div", ["taskContent"], task);
  const taskHeading = createEl(
    "h2",
    ["taskHeading"],
    taskContent,
    `${userInput.name}`,
  );
  const taskDescription = createEl(
    "p",
    ["taskDescription"],
    taskContent,
    `${userInput.description}`,
  );
  const otherTags = createEl("div", ["otherTags"], taskContent);
  const taskDate = createEl("span", ["taskDate"], otherTags, `${userInput.date}`);
  const taskPriority = createEl(
    "span",
    ["taskPriority"],
    otherTags,
    `${userInput.priority}`,
  );
  const taskTag = createEl("span", ["taskTag"], otherTags, `${userInput.tag}`);

  const taskOptions = createEl("div", ["taskOptions"], task);
  const taskEditBtn = createEl("button", ["taskEdit"], taskOptions, "Edit");
  const taskDeleteBtn = createEl(
    "button",
    ["taskDelete"],
    taskOptions,
    "Delete",
  );

  const divider = createEl("div", ["divider"], task);

  return [task];
}
