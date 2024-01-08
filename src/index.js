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

import { createProjectsNavElements } from "./todoProject";

import { todayGenerator } from "./today";

import contentReset from "./util/contentReset";

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
  const projectListContent = document.querySelector(".projectListContainer");
  const todayPage = document.querySelector(".today");
  const content = document.querySelector("#content");
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
          projectListContent.textContent = "";
          projectListContent.append(...createProjectsNavElements(projectName));
        }
      }
      closeProjectPrompt(projectForm);
    });
  });

  collapseBtn(projectCollapseBtn);
  collapseBtn(labelCollapseBtn);

  todayPage.addEventListener("click", (e) => {
    e.preventDefault();
    contentReset();
    content.append(...todayGenerator());
  });
});
