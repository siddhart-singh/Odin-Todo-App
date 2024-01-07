"use strict";

import {
  CreateTask,
  setTaskTitle,
  setTaskDescription,
  setTaskDueDate,
  setTaskPriority,
  setProjectName,
} from "./todoItems";

import { addItems, removeItems } from "./util/setFunctions";

import { homepageGenerator } from "./homepage";

import {
  collapseBtn,
  createProject,
  displayProjectPrompt,
  closeProjectPrompt,
} from "./dom";

import "./input.css";
import { doc } from "prettier";

const task = [];
const label = new Set();
const priority = new Set();
const projectName = new Set();

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
  const projectForm = document.querySelector(".addProjectForm");
  const projectFormBtns = document.querySelectorAll(".addProjectFormBtn");
  const addProjectBtn = document.querySelector(".addBtn");
  const projectFormText = document.querySelector(".addProjectFormInput");

  projectAddBtn.addEventListener("click", (e) => {
    displayProjectPrompt(projectForm);
  });

  projectFormBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target == addProjectBtn) {
        const name = projectFormText.value;
        if (name.length != 0) {
          addItems(projectName, [name]);
          console.log(projectName);
        }
      }
      closeProjectPrompt(projectForm);
    });
  });

  collapseBtn(projectCollapseBtn);
  collapseBtn(labelCollapseBtn);
});
