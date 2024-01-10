"use strict";

import taskGenerator from "../generateTask";

export function createTaskObject(userInput, taskElement) {
  return { ...userInput, element: taskGenerator(userInput) };
}
