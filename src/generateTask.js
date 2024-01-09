"use strict";

import { createEl } from "./util/elementCreator";

export default function taskGenerator() {
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
  const taskHeading = createEl("h2", ["taskHeading"], taskContent, "HELLO");
  const taskDescription = createEl(
    "p",
    ["taskDescription"],
    taskContent,
    "WORLD",
  );
  const otherTags = createEl("div", ["otherTags"], taskContent);
  const taskDate = createEl("span", ["taskDate"], otherTags, "Today");
  const taskPriority = createEl("span", ["taskPriority"], otherTags, "High");
  const taskTag = createEl("span", ["taskTag"], otherTags, "School");

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
