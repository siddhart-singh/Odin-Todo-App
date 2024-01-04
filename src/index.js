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

const task = [];
const label = new Set();
const priority = new Set();
