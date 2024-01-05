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

const task = [];
const label = new Set();
const priority = new Set();

homepageGenerator();
