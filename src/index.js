"use strict";

import {
  CreateTask,
  setTaskTitle,
  setTaskDescription,
  setTaskDueDate,
  setTaskPriority,
  setProjectName,
} from "./todoItems";

import { addLabel, removeLabel } from "./todoLabels";
import { addPriority, removePriority } from "./todoPriorities";

import { homepageGenerator } from "./homepage";

import "./input.css"

const task = [];
const label = new Set();
const priority = new Set();

window.addEventListener("load", (e) => {
  const body = document.querySelector("body");
  body.classList.add("body");
  body.append(...homepageGenerator());
});
