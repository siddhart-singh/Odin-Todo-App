"use strict";

export default function getTaskElements(taskArray, filter = "today") {
  console.log(taskArray, filter);
  const result = taskArray
    .filter((task) => task.project == filter.toLowerCase())
    .map((task) => task.element[0]);
  return result;
}
