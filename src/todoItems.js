"use strict";

export function CreateTask(properities = [], methods = []) {
  const state = { modifyAttributes };
  return Object.assign(
    state,
    ...properities,
    ...methods.map((method) => method(state)),
  );
}

function modifyAttributes(properities = [], methods = []) {
  return Object.assign(
    this,
    ...properities,
    ...methods.map((method) => method(state)),
  );
}

export function setTaskTitle(title) {
  return { title: title };
}

export function setTaskDescription(description) {
  return { description: description };
}

export function setTaskDueDate(dueDate) {
  return { dueDate: dueDate };
}

export function setTaskPriority(priority) {
  return { priority: priority };
}

export function setTaskLabel(label = []) {
  return { label: label };
}

export function setProjectName(projectName) {
  return { projectName: projectName };
}
