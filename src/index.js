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

import { contentGenerator, contentPageGenerator } from "./generateContent";

import elementReset from "./util/elementReset";
import getTaskElements from "./util/getTaskElemets";
import getUserInputs from "./util/userInputsGetter";
import {
  collapseBtn,
  createProject,
  displayProjectPrompt,
  closeProjectPrompt,
} from "./dom";

import displayElements from "./util/displayElements";

import "./input.css";
import { doc } from "prettier";
import { add, set, sub } from "date-fns";
import taskGenerator from "./generateTask";

const taskArray = [];
const tagSet = new Set();
const prioritySet = new Set();
const projectNameSet = new Set();

window.addEventListener("load", (e) => {
  const body = document.querySelector("body");
  body.classList.add("body");
  displayElements(body, homepageGenerator());

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
          addItems(projectNameSet, [name]);
          projectListContent.textContent = "";
          displayElements(
            projectListContent,
            createProjectsNavElements(projectNameSet),
          );
        }
      }
      closeProjectPrompt(projectForm);
    });
  });

  collapseBtn(projectCollapseBtn);
  collapseBtn(labelCollapseBtn);

  // todayPage.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   elementReset();
  //   displayElements(content,contentGenerator());
  //
  //   form = document.querySelector(".content-form");
  // });

  // content.addEventListener("click", (e) => {
  //   let formData;
  //   form.addEventListener("submit", (event) => {
  //     formData = new FormData(event.target);
  //     if (e.target.closest(".addTaskBtn")) {
  //       displayElements(tasks,taskArray[0].element);
  //       form.reset();
  //       event.preventDefault();
  //     }
  //   });
  // });

  window.addEventListener("click", (e) => {
    if (e.target.closest(".navBtn")) {
      const contentHeading = e.target.textContent;
      elementReset(content, ["content"]);
      const contentPage = contentPageGenerator(contentHeading);
      displayElements(content, contentPage);
      const form = document.querySelector(".content-form");
      const taskContainer = document.querySelector(".tasks");
      const addTaskBtn = document.querySelector(".addTaskBtn");

      form.addEventListener("submit", (event) => {
        const formData = new FormData(form);
        taskArray.push(createTaskObject(getUserInputs(formData)));
        const domEl = getTaskElements(taskArray);
        elementReset(taskContainer, ["tasks"]);
        displayElements(taskContainer, domEl);
        form.reset();
        event.preventDefault();
      });
    }
  });
});
