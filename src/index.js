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

import { createTaskObject } from "./util/taskMethods";

import { homepageGenerator } from "./homepage";

import { createProjectsNavElements } from "./todoProject";

import { todayGenerator } from "./today";

import contentReset from "./util/contentReset";

import getUserInputs from "./util/userInputsGetter";
import {
  collapseBtn,
  createProject,
  displayProjectPrompt,
  closeProjectPrompt,
} from "./dom";

import "./input.css";
import { doc } from "prettier";
import { set, sub } from "date-fns";
import taskGenerator from "./generateTask";

const taskArray = [];
const tagSet = new Set();
const prioritySet = new Set();
const projectNameSet = new Set();

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
  let tasks, form;
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
    tasks = document.querySelector(".tasks");
    form = document.querySelector(".content-form");
  });

  content.addEventListener("click", (e) => {
    let formData;
    form.addEventListener("submit", (event) => {
      formData = new FormData(event.target);
      if (
        e.target.closest(".todo-form-btns") &&
        e.target.closest(".todo-form-btns").type == "submit"
      )
        taskArray.push(createTaskObject(getUserInputs(formData)));
      event.preventDefault();
    });
  });
});
