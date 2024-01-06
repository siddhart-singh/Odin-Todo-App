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

import { collapseBtn, createProject } from "./dom";

import "./input.css";

const task = [];
const label = new Set();
const priority = new Set();

window.addEventListener("load", (e) => {
  const body = document.querySelector("body");
  body.classList.add("body");
  body.append(...homepageGenerator());

  // const addProjectBtn = document.querySelector(".");
  const projectCollapseBtn = document.querySelector(".projectCollapseBtn");
  const labelCollapseBtn = document.querySelector(".labelCollapseBtn");
  const projectAddBtn = document.querySelector(".projectAddBtn");
  const projectContentContainer = document.querySelector(
    ".projectContentContainer",
  );

  projectAddBtn.addEventListener("click", (e) => {
    projectContentContainer.append(createProject());
  });
  collapseBtn(projectCollapseBtn);
  collapseBtn(labelCollapseBtn);
});
