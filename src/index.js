"use strict";

import "./input.css";

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

import { createTaskObject, createDeleteTaskObject } from "./util/createObjects";

import { homepageGenerator } from "./homepage";

import { createProjectsNavElements } from "./todoProject";
import removeWarning from "./util/removeWarning";
import { contentGenerator, contentPageGenerator } from "./generateContent";
import generateWarning from "./util/generateWarning";
import { generateFormOption } from "./util/generateFormOptions";
import toggleClasses from "./util/toggleClasses";
import { generateLabel, generateProject } from "./util/generateNavElements";
import displayNavOptionals from "./util/displayNavOptionals";
import { elementReset, navOptionReset } from "./util/elementReset";
import getTaskElements from "./util/getTaskElemets";
import getUserInputs from "./util/userInputsGetter";
import {
  collapseBtn,
  createProject,
  displayProjectPrompt,
  closeProjectPrompt,
} from "./dom";
import displayFormOptionals from "./util/displayFormOptionals";
import displayElements from "./util/displayElements";
import setDefaultProjectOption from "./util/setDefaultProjectOption";
import "./input.css";
import { doc } from "prettier";
import { add, set, sub } from "date-fns";
import taskGenerator from "./generateTask";
import displayNavForm from "./util/displayNavForm";

const taskSet = new Set();
const completedtaskSet = new Set();
const tagSet = new Set();
const prioritySet = new Set();
const projectNameSet = new Set();

addItems(prioritySet, [
  "Some Other Day",
  "Not Today",
  "Today",
  "In an Hour",
  "In 5 Minutes",
  "Right About Now",
  "Should've Done Yesterday",
]);
window.addEventListener("load", (e) => {
  const body = document.querySelector("body");
  body.classList.add("body");
  displayElements(body, homepageGenerator());

  // const addProjectBtn = document.querySelector(".");
  const navAddBtns = document.querySelectorAll(".navSectionContainerAddBtn");
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
  const projectCollapseBtn = document.querySelector(".projectCollapseBtn");
  const projectInput = document.querySelector(".projectNameInput");
  const projectAddBtn = document.querySelector(".projectAddBtn");
  const projectCancelBtn = document.querySelector(".projectCancelBtn");

  const labelForm = document.querySelector(".addLabelForm");
  const labelFormExpander = document.querySelector(".addLabelBtn");
  const labelCollapseBtn = document.querySelector(".labelCollapseBtn");
  const labelInput = document.querySelector(".labelNameInput");
  const labelAddBtn = document.querySelector(".labelAddBtn");
  const labelCancelBtn = document.querySelector(".labelCancelBtn");

  const deletedTaskWarning = document.querySelector(".deletedTaskWarning");
  let currentTab = "today",
    warning,
    taskContainer;

  projectFormExpander.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClasses(projectForm, "displayProjectForm");
  });

  labelFormExpander.addEventListener("click", (e) => {
    e.preventDefault();
    toggleClasses(labelForm, "displayProjectForm");
  });

  projectCollapseBtn.addEventListener("click", (e) => {
    toggleClasses(projectListContent, "hideNavSection");
    toggleClasses(projectCollapseBtn, "collapseBtnRotate");
  });

  labelCollapseBtn.addEventListener("click", (e) => {
    toggleClasses(labelListContent, "hideNavSection");
    toggleClasses(labelCollapseBtn, "collapseBtnRotate");
  });

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

  window.addEventListener("click", (e) => {
    if (e.target.closest(".navBtn")) {
      currentTab = e.target.textContent;
      const navBtn = document.querySelectorAll(".navBtn");
      changeActiveTab(currentTab, navBtn);
      elementReset(content, ["content"]);
      const contentPage = contentPageGenerator(
        currentTab,
        projectNameSet,
        tagSet,
        prioritySet,
      );
      displayElements(content, contentPage);
      setDefaultProjectOption(document.querySelector("#project"), currentTab);
      const form = document.querySelector(".content-form");
      taskContainer = document.querySelector(".tasks");
      displayElements(taskContainer, getTaskElements(taskSet, currentTab));

      form.addEventListener("submit", (event) => {
        const formData = new FormData(form);
        addItems(taskSet, [
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
        ]);
        const currentProjectTask = getTaskElements(taskSet, currentTab);

        elementReset(taskContainer, ["tasks"]);
        displayElements(taskContainer, currentProjectTask);
        event.preventDefault();
        form.reset();
      });
    }

    if (e.target.closest(".completeMarker")) {
      const completeMarker = e.target;
      taskSet.forEach((task) => {
        if (e.target.closest(".task") == task.element[0]) {
          completeMarker.classList.add("completeMarkerChecked");
          setTimeout(() => {
            task.element[0].classList.add("hideTask");
            completeMarker.classList.remove("completeMarkerChecked");
          }, 500);
          warning = generateWarning();
          const warningBtn = warning[0].querySelector(".undoWarningBtn");
          const clearTaskID = setTimeout(() => {
            removeItems(taskSet, [task]);
          }, 5000);
          addItems(completedtaskSet, [
            createDeleteTaskObject([warningBtn, task, clearTaskID]),
          ]);
          console.log(completedtaskSet);

          displayElements(deletedTaskWarning, warning);
          removeWarning(warning[0], 5000);
        }
      });
    }

    if (e.target.closest(".undoWarningBtn")) {
      const undoDomBtn = e.target.closest(".undoWarningBtn");
      [...completedtaskSet].forEach((task) => {
        if (task.undoBtn == undoDomBtn) {
          task.taskEl.element[0].classList.remove("hideTask");
          task.undoBtn.closest(".warning").classList.add("removeWarning");
          removeItems(completedtaskSet, [task]);
          clearTimeout(task.clearTaskId);
        }
      });
    }

    if (e.target.closest(".taskDelete")) {
      const taskDOM = e.target.closest(".task");
      [...taskSet].forEach((task) => {
        if (task.element[0] == taskDOM) {
          removeItems(taskSet, [task]);
        }
      });
      elementReset(taskContainer, ["tasks"]);
      displayElements(taskContainer, getTaskElements(taskSet, currentTab));
    }
  });
});

function changeActiveTab(currentTab, navBtn) {
  navBtn.forEach((btn) => {
    if (btn.textContent == currentTab) {
      btn.classList.add("activeTab");
    } else {
      btn.classList.remove("activeTab");
    }
  });
}
