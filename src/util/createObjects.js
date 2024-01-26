"use strict";

import taskGenerator from "../generateTask";

export function createTaskObject(userInput) {
  return { ...userInput, element: taskGenerator(userInput) };
}

export function createDeleteTaskObject(values = []) {
  return { undoBtn: values[0], taskEl: values[1], clearTaskId: values[2] };
}
