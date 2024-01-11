"use strict";

import taskGenerator from "../generateTask";

export function createTaskObject(userInput) {
  return { ...userInput, element: taskGenerator(userInput) };
}
