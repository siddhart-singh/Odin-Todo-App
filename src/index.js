"use strict";

import {
  CreateTask,
  setTaskTitle,
  setTaskDescription,
  setTaskDueDate,
  setTaskPriority,
  setProjectName,
} from "./todoItems";

import { createEl } from "./util/elementCreator";

import { addItems, removeItems } from "./util/setFunctions";

import { createTaskObject } from "./util/taskMethods";

import { homepageGenerator } from "./homepage";

import { createProjectsNavElements } from "./todoProject";

import { contentGenerator, contentPageGenerator } from "./generateContent";

import { generateFormOption } from "./util/generateFormOptions";

import { generateLabel, generateProject } from "./util/generateNavElements";

import { elementReset, navOptionReset } from "./util/elementReset";
import getTaskElements from "./util/getTaskElemets";
import getUserInputs from "./util/userInputsGetter";
import {
  collapseBtn,
  createProject,
  displayProjectPrompt,
  closeProjectPrompt,
} from "./dom";

import displayElements from "./util/displayElements";
import setDefaultProjectOption from "./util/setDefaultProjectOption";
import "./input.css";
import { doc } from "prettier";
import { add, set, sub } from "date-fns";
import taskGenerator from "./generateTask";
import displayNavForm from "./util/displayNavForm";
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
  const projectAddBtns = document.querySelectorAll(
    ".navSectionContainerAddBtn",
  );
  const projectContentContainer = document.querySelector(
    ".projectContentContainer",
  );
  const projectFormText = document.querySelector(".addProjectFormInput");
  const projectListContent = document.querySelector(".projectListContainer");
  const labelListContent = document.querySelector(".labelsContentContainer");
  const todayPage = document.querySelector(".today");
  const content = document.querySelector("#content");

  const projectForm = document.querySelector(".addProjectForm");
  const projectFormExpander = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectNameInput");
  const projectAddBtn = document.querySelector(".projectAddBtn");
  const projectCancelBtn = document.querySelector(".projectCancelBtn");

  const labelForm = document.querySelector(".addLabelForm");
  const labelFormExpander = document.querySelector(".addLabelBtn");
  const labelInput = document.querySelector(".labelNameInput");
  const labelAddBtn = document.querySelector(".labelAddBtn");
  const labelCancelBtn = document.querySelector(".labelCancelBtn");

  let currentTab = "today";

  collapseBtn(projectCollapseBtn);
  collapseBtn(labelCollapseBtn);

  displayNavForm(projectFormExpander, projectForm);
  displayNavForm(labelFormExpander, labelForm);

  projectForm.addEventListener("submit", (e) => {
    const projectFormOption = document.getElementById("project");
    const formData = new FormData(e.target);
    e.preventDefault();
    projectForm.reset();

    displayNavOptionals(
      formData,
      "projectName",
      projectNameSet,
      projectListContent,
      "projectListContainer",
      generateProject,
    );
    const defaultElementAttributes = {
      value: "today",
    };
    displayFormOptionals(
      projectFormOption,
      "form-details-tags",
      "Today",
      defaultElementAttributes,
      projectNameSet,
    );
    setDefaultProjectOption(document.querySelector("#project"), currentTab);
  });

  labelForm.addEventListener("submit", (e) => {
    const tagFormOption = document.getElementById("tag");
    const formData = new FormData(e.target);
    e.preventDefault();
    labelForm.reset();

    displayNavOptionals(
      formData,
      "labelName",
      tagSet,
      labelListContent,
      "labelsContentContainer",
      generateLabel,
    );
    const defaultElementAttributes = {
      value: "no-value",
      disabled: true,
      selected: true,
    };
    displayFormOptionals(
      tagFormOption,
      "form-details-tags",
      "Tags",
      defaultElementAttributes,
      tagSet,
    );
  });

  // console.log(tagSet, projectNameSet);

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
      currentTab = e.target.textContent;
      elementReset(content, ["content"]);
      const contentPage = contentPageGenerator(
        currentTab,
        projectNameSet,
        tagSet,
      );
      displayElements(content, contentPage);

      setDefaultProjectOption(document.querySelector("#project"), currentTab);
      const form = document.querySelector(".content-form");
      const taskContainer = document.querySelector(".tasks");
      displayElements(taskContainer, getTaskElements(taskArray, currentTab));

      form.addEventListener("submit", (event) => {
        const formData = new FormData(form);
        taskArray.push(
          createTaskObject(
            getUserInputs(formData, [
              "name",
              "description",
              "date",
              "priority",
              "tag",
              "project",
            ]),
          ),
        );
        const domEl = getTaskElements(taskArray, currentTab);
        console.log(domEl);
        elementReset(taskContainer, ["tasks"]);
        displayElements(taskContainer, domEl);
        event.preventDefault();
        form.reset();
      });
    }
  });
});

function displayNavOptionals(
  formData,
  inputName,
  set,
  parentEl,
  parentElClass,
  generatorFn,
) {
  const inputValue = [
    getUserInputs(formData, [`${inputName}`])[`${inputName}`],
  ];
  addItems(set, inputValue);
  elementReset(parentEl, [`${parentElClass}`]);
  set.forEach((item) => {
    displayElements(parentEl, generatorFn(item));
  });
}

function displayFormOptionals(
  parentEl,
  parentElClass,
  firstOption,
  firstOptionAttributes,
  set,
) {
  if (parentEl) {
    elementReset(parentEl, [`${parentElClass}`]);
    generateFormOption(set, parentEl, firstOption, firstOptionAttributes);
  }
}
