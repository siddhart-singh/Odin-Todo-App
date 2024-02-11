/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeProjectPrompt: () => (/* binding */ closeProjectPrompt),
/* harmony export */   collapseBtn: () => (/* binding */ collapseBtn),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   displayProjectPrompt: () => (/* binding */ displayProjectPrompt)
/* harmony export */ });
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");



function collapseBtn(btn) {
  if (btn.nodeName != "BUTTON") {
    return -1;
  }
  btn.addEventListener("click", function (e) {
    btn.classList.toggle("collapseBtnRotate");
  });
}
function createProject() {
  return (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["navBtn"], "", "My Project");
}
function displayProjectPrompt(e) {
  e.classList.add("displayProjectForm");
}
function closeProjectPrompt(e) {
  e.reset();
  e.classList.remove("displayProjectForm");
}

/***/ }),

/***/ "./src/generateContent.js":
/*!********************************!*\
  !*** ./src/generateContent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentPageGenerator: () => (/* binding */ contentPageGenerator)
/* harmony export */ });
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");
/* harmony import */ var _util_generateFormOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/generateFormOptions */ "./src/util/generateFormOptions.js");




function contentPageGenerator(currentTab, projects, labels, priorities) {
  var contentHeader = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("header", ["content-header"]);
  var contentHeaderHeading = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("h1", ["content-header-heading"], contentHeader, "".concat(currentTab));
  var tasks = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["tasks"]);
  var contentContainer = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("section", ["contentContainer"]);
  contentContainer.append(formGenerator(projects, labels, priorities, currentTab));
  return [contentHeader, tasks, contentContainer];
}
function formGenerator(projects, labels, priorities, currentTab) {
  var contentForm = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("form", ["content-form"]);
  var todoDetails = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["todo-details"], contentForm);
  var todoDetailsName = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("input", ["todo-details-name"], todoDetails, "", {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Task name",
    required: true
  });
  var todoDetailsDescription = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("input", ["todo-details-description"], todoDetails, "", {
    type: "text",
    name: "description",
    id: "description",
    placeholder: "Description",
    required: true
  });
  var formOptionalsDiv = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["form-optionals"], todoDetails);
  var todoDetailsDate = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("input", ["form-details-tags"], formOptionalsDiv, "", {
    type: "date",
    name: "date",
    id: "date",
    placeholder: "Today"
  });
  var todoDetailsPriority = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("select", ["form-details-tags"], formOptionalsDiv, "", {
    name: "priority",
    id: "priority"
  });
  (0,_util_generateFormOptions__WEBPACK_IMPORTED_MODULE_1__.generateFormOption)(priorities, todoDetailsPriority, "Priority", {
    value: "no-value",
    disabled: true,
    selected: true
  });
  var todoDetailsTags = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("select", ["form-details-tags"], formOptionalsDiv, "", {
    name: "tag",
    id: "tag"
  });
  (0,_util_generateFormOptions__WEBPACK_IMPORTED_MODULE_1__.generateFormOption)(labels, todoDetailsTags, "Tags", {
    value: "no-value",
    disabled: true,
    selected: true
  });
  var formSubmit = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["form-submit"], contentForm);
  var todoDetailsProject = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("select", ["form-details-tags"], formSubmit, "", {
    name: "project",
    id: "project"
  });
  (0,_util_generateFormOptions__WEBPACK_IMPORTED_MODULE_1__.generateFormOption)(projects, todoDetailsProject, "Today", {
    value: "today"
  });
  var formButtonContainer = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["form-button-container"], formSubmit);
  (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["todo-form-btns"], formButtonContainer, "Clear", {
    type: "reset"
  });
  (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["todo-form-btns", "addTaskBtn"], formButtonContainer, "Add Task", {
    // type: "submit",
  });
  return contentForm;
}

/***/ }),

/***/ "./src/generateTask.js":
/*!*****************************!*\
  !*** ./src/generateTask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskGenerator)
/* harmony export */ });
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");



function taskGenerator() {
  var userInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var task = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["task"]);
  var completeMarkerContainer = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["completeMarkerContainenr"], task);
  var completeMarker = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["completeMarker"], completeMarkerContainer);
  var taskContent = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["taskContent"], task);
  if (userInput.name.length != 0) {
    var taskHeading = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("h2", ["taskHeading"], taskContent, "".concat(userInput.name));
  }
  if (userInput.description.length != 0) {
    var taskDescription = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", ["taskDescription"], taskContent, "".concat(userInput.description));
  }
  var otherTags = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["otherTags"], taskContent);
  if (userInput.date.length != 0) {
    var taskDate = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("span", ["taskDate"], otherTags, "".concat(userInput.date));
  }
  if (userInput.priority) {
    var taskPriority = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("span", ["taskPriority"], otherTags, "".concat(userInput.priority));
  }
  if (userInput.tag) {
    var taskTag = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("span", ["taskTag"], otherTags, "".concat(userInput.tag));
  }
  var taskOptions = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["taskOptions"], task);
  var taskDeleteBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["taskDelete"], taskOptions, "Delete");
  var divider = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["divider"], task);
  return [task];
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homepageGenerator: () => (/* binding */ homepageGenerator)
/* harmony export */ });
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");
/* harmony import */ var _util_svgCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/svgCreator */ "./src/util/svgCreator.js");
+"use strict";



function homepageGenerator() {
  var nav = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("nav", ["nav"]);
  var userIcon = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["userIcon"], nav);
  var userIconSvg = (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, {
    d: "M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
  }, ["userIconSvg"], userIcon);
  var navSectionContainerTodo = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainer"], nav);
  var navBtnToday = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["navBtn", "today"], navSectionContainerTodo, "Today");
  var navSectionContainerProjects = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainer"], nav);
  var projectsContainerHeader = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainerHeader"], navSectionContainerProjects);
  var projectsContainerHeaderHeading = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("h2", ["navSectionContainerHeading"], projectsContainerHeader, "Projects");
  var projectsContainerHeaderAddBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["navSectionContainerBtn", "navSectionContainerAddBtn", "addProjectBtn"], projectsContainerHeader);
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, {
    d: "M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"
  }, ["navSectionContainerBtnSvg"], projectsContainerHeaderAddBtn);
  var projectsContainerHeaderCollapseBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["navSectionContainerBtn", "navSectionContainerCollapseBtn", "projectCollapseBtn"], projectsContainerHeader);
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 10"
  }, {
    d: "M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
  }, ["navSectionContainerBtnSvg"], projectsContainerHeaderCollapseBtn);
  var projectsContent = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainerContentContainer", "projectContentContainer"], navSectionContainerProjects);
  projectsContent.append(createNavInputs("addProjectForm", "projectNameInput", "Project name", "projectName", "project"));
  var navSectionContainerlabels = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainer"], nav);
  var projectListContainer = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["projectListContainer", "navSectionContainerContentContainer"], projectsContent);
  var labelsContainerHeader = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainerHeader"], navSectionContainerlabels);
  var labelsContainerHeaderHeading = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("h2", ["navSectionContainerHeading"], labelsContainerHeader, "Labels");
  var labelsContainerHeaderAddBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["navSectionContainerBtn", "navSectionContainerAddBtn", "addLabelBtn"], labelsContainerHeader);
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, {
    d: "M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"
  }, ["navSectionContainerBtnSvg"], labelsContainerHeaderAddBtn);
  var labelsContainerHeaderCollapseBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["navSectionContainerBtn", "navSectionContainerCollapseBtn", "labelCollapseBtn"], labelsContainerHeader);
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 10"
  }, {
    d: "M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
  }, ["navSectionContainerBtnSvg"], labelsContainerHeaderCollapseBtn);
  var labelsContent = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["navSectionContainerContentContainer", "projectContentContainer"], navSectionContainerlabels);
  labelsContent.append(createNavInputs("addLabelForm", "labeNameInput", "Label name", "labelName", "label"));
  var labelsContainer = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["labelsContentContainer"], labelsContent);
  var deleteTaskWarning = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["deletedTaskWarning"]);
  var content = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("div", ["content"], "", "", {
    id: "content"
  });
  return [nav, deleteTaskWarning, content];
}
function createNavInputs(formClass, inputClass, inputPlaceHolder, inputName, btnClass) {
  var addNavForm = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("form", ["".concat(formClass)]);
  var addNavInput = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("input", ["addNavFormInput", "hideVisibility", "".concat(inputClass)], addNavForm, "", {
    placeholder: "".concat(inputPlaceHolder),
    type: "text",
    name: "".concat(inputName)
  });
  var projectFormAddBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["addNavFormBtn", "hideVisibility", "".concat(btnClass, "addBtn")], addNavForm, "", {
    required: true,
    type: "submit"
  });
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "class": "w-6 h-6 ",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, {
    "fill-rule": "evenodd",
    d: "M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z",
    "clip-rule": "evenodd"
  }, ["addNavFormBtn"], projectFormAddBtn);
  var projectFormCancelBtn = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("button", ["addNavFormBtn", "hideVisibility", "".concat(btnClass, "cancelBtn")], addNavForm, "");
  (0,_util_svgCreator__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "class": "w-6 h-6 ",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, {
    "fill-rule": "evenodd",
    d: "M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z",
    "clip-rule": "evenodd"
  }, ["addNavFormBtn"], projectFormCancelBtn);
  return addNavForm;
}

/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTask: () => (/* binding */ CreateTask),
/* harmony export */   setProjectName: () => (/* binding */ setProjectName),
/* harmony export */   setTaskDescription: () => (/* binding */ setTaskDescription),
/* harmony export */   setTaskDueDate: () => (/* binding */ setTaskDueDate),
/* harmony export */   setTaskLabel: () => (/* binding */ setTaskLabel),
/* harmony export */   setTaskPriority: () => (/* binding */ setTaskPriority),
/* harmony export */   setTaskTitle: () => (/* binding */ setTaskTitle)
/* harmony export */ });


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CreateTask() {
  var properities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var state = {
    modifyAttributes: modifyAttributes
  };
  return Object.assign.apply(Object, [state].concat(_toConsumableArray(properities), _toConsumableArray(methods.map(function (method) {
    return method(state);
  }))));
}
function modifyAttributes() {
  var properities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.assign.apply(Object, [this].concat(_toConsumableArray(properities), _toConsumableArray(methods.map(function (method) {
    return method(state);
  }))));
}
function setTaskTitle(title) {
  return {
    title: title
  };
}
function setTaskDescription(description) {
  return {
    description: description
  };
}
function setTaskDueDate(dueDate) {
  return {
    dueDate: dueDate
  };
}
function setTaskPriority(priority) {
  return {
    priority: priority
  };
}
function setTaskLabel() {
  var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    label: label
  };
}
function setProjectName(projectName) {
  return {
    projectName: projectName
  };
}

/***/ }),

/***/ "./src/todoProject.js":
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectsNavElements: () => (/* binding */ createProjectsNavElements)
/* harmony export */ });
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");



function createProjectsNavElements(projectList) {
  var projectElements = [];
  projectList.forEach(function (project) {
    projectElements.push((0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["navBtn"], "", project));
  });
  return projectElements;
}

/***/ }),

/***/ "./src/util/createObjects.js":
/*!***********************************!*\
  !*** ./src/util/createObjects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDeleteTaskObject: () => (/* binding */ createDeleteTaskObject),
/* harmony export */   createTaskObject: () => (/* binding */ createTaskObject)
/* harmony export */ });
/* harmony import */ var _generateTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generateTask */ "./src/generateTask.js");


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function createTaskObject(userInput) {
  return _objectSpread(_objectSpread({}, userInput), {}, {
    element: (0,_generateTask__WEBPACK_IMPORTED_MODULE_0__["default"])(userInput)
  });
}
function createDeleteTaskObject() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    undoBtn: values[0],
    taskEl: values[1],
    clearTaskId: values[2]
  };
}

/***/ }),

/***/ "./src/util/displayElements.js":
/*!*************************************!*\
  !*** ./src/util/displayElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayElements)
/* harmony export */ });


function displayElements(parent) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  children.forEach(function (child) {
    parent.append(child);
  });
  return parent;
}

/***/ }),

/***/ "./src/util/displayFormOptionals.js":
/*!******************************************!*\
  !*** ./src/util/displayFormOptionals.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayFormOptionals)
/* harmony export */ });
/* harmony import */ var _elementReset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementReset */ "./src/util/elementReset.js");
/* harmony import */ var _generateFormOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateFormOptions */ "./src/util/generateFormOptions.js");


function displayFormOptionals(parentEl, parentElClass, firstOption, firstOptionAttributes, set) {
  if (parentEl) {
    (0,_elementReset__WEBPACK_IMPORTED_MODULE_0__.elementReset)(parentEl, ["".concat(parentElClass)]);
    (0,_generateFormOptions__WEBPACK_IMPORTED_MODULE_1__.generateFormOption)(set, parentEl, firstOption, firstOptionAttributes);
  }
}

/***/ }),

/***/ "./src/util/displayNavForm.js":
/*!************************************!*\
  !*** ./src/util/displayNavForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNavForm)
/* harmony export */ });


function displayNavForm(expandBtn, form) {
  expandBtn.addEventListener("click", function (e) {
    form.classList.toggle("displayProjectForm");
  });
}

/***/ }),

/***/ "./src/util/displayNavOptionals.js":
/*!*****************************************!*\
  !*** ./src/util/displayNavOptionals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNavOptionals)
/* harmony export */ });
/* harmony import */ var _userInputsGetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInputsGetter */ "./src/util/userInputsGetter.js");
/* harmony import */ var _setFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFunctions */ "./src/util/setFunctions.js");
/* harmony import */ var _elementReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementReset */ "./src/util/elementReset.js");
/* harmony import */ var _displayElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayElements */ "./src/util/displayElements.js");






function displayNavOptionals(set, parentEl, parentElClass, generatorFn) {
  (0,_elementReset__WEBPACK_IMPORTED_MODULE_2__.elementReset)(parentEl, []);
  set.forEach(function (item) {
    (0,_displayElements__WEBPACK_IMPORTED_MODULE_3__["default"])(parentEl, generatorFn(item));
  });
}

/***/ }),

/***/ "./src/util/elementCreator.js":
/*!************************************!*\
  !*** ./src/util/elementCreator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEl: () => (/* binding */ createEl)
/* harmony export */ });


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createEl(type) {
  var _el$classList;
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var parentEl = arguments.length > 2 ? arguments[2] : undefined;
  var content = arguments.length > 3 ? arguments[3] : undefined;
  var attributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var el = document.createElement(type);
  if (classes.length != 0) (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classes));
  el.textContent = content;
  if (attributes) {
    for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      el.setAttribute(key, value);
    }
  }
  if (parentEl instanceof Element) {
    parentEl.appendChild(el);
  }
  return el;
}

/***/ }),

/***/ "./src/util/elementReset.js":
/*!**********************************!*\
  !*** ./src/util/elementReset.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementReset: () => (/* binding */ elementReset),
/* harmony export */   navOptionReset: () => (/* binding */ navOptionReset)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function elementReset(element) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  element.innerText = "";
  if (classes.length != 0) {
    element.setAttribute.apply(element, ["class"].concat(_toConsumableArray(classes)));
  }
  return element;
}
function navOptionReset(element) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  element.innerText = "";
  element.setAttribute.apply(element, ["class"].concat(_toConsumableArray(classes)));
  return element;
}

/***/ }),

/***/ "./src/util/generateFormOptions.js":
/*!*****************************************!*\
  !*** ./src/util/generateFormOptions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFormOption: () => (/* binding */ generateFormOption)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/util/elementCreator.js");



function generateFormOption(optionsList, parentEl, firstChild, firstChildAttribute) {
  (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("option", [], parentEl, firstChild, firstChildAttribute);
  optionsList.forEach(function (option) {
    (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("option", [], parentEl, option, {
      value: "".concat(option.toLowerCase())
    });
  });
}

/***/ }),

/***/ "./src/util/generateNavElements.js":
/*!*****************************************!*\
  !*** ./src/util/generateNavElements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateLabel: () => (/* binding */ generateLabel),
/* harmony export */   generateProject: () => (/* binding */ generateProject)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/util/elementCreator.js");
/* harmony import */ var _svgCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgCreator */ "./src/util/svgCreator.js");




function generateProject(projectName) {
  var div = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["project"]);
  var projectNameBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["navBtn"], div, projectName);
  return [div];
}
function generateLabel(labelName) {
  var div = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["label"]);
  var labelNameEl = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("p", ["labelTag"], div, labelName);
  var btn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["labelDeleteBtn"], div);
  var labelDeleteBtnSVG = (0,_svgCreator__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "class": "labelDeleteBtnSvg",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, {
    d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
  }, ["labelDeleteBtn"], btn);
  return [div];
}

/***/ }),

/***/ "./src/util/generateWarning.js":
/*!*************************************!*\
  !*** ./src/util/generateWarning.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateWarning)
/* harmony export */ });
/* harmony import */ var _elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreator */ "./src/util/elementCreator.js");
/* harmony import */ var _svgCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgCreator */ "./src/util/svgCreator.js");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.css */ "./src/input.css");



function generateWarning() {
  var warning = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("div", ["warning"]);
  var timer = (0,_svgCreator__WEBPACK_IMPORTED_MODULE_1__.createCircleSVG)({
    viewBox: "0 0 32 32"
  }, {
    "class": "circle",
    r: "15",
    cx: "16",
    cy: "16",
    fill: "transparent"
  }, ["timer"], warning);
  console.log(timer);
  var undoWarningBtn = (0,_elementCreator__WEBPACK_IMPORTED_MODULE_0__.createEl)("button", ["undoWarningBtn"], warning, "Undo");
  setTimeout(function () {
    warning.classList.add("displayWarning");
  }, 150);
  return [warning];
}

/***/ }),

/***/ "./src/util/getTaskElemets.js":
/*!************************************!*\
  !*** ./src/util/getTaskElemets.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTaskElements)
/* harmony export */ });


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function getTaskElements(taskArray) {
  var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "today";
  var result = _toConsumableArray(taskArray).filter(function (task) {
    return task.project == filter.toLowerCase();
  }).map(function (task) {
    return task.element[0];
  });
  return result;
}

/***/ }),

/***/ "./src/util/removeWarning.js":
/*!***********************************!*\
  !*** ./src/util/removeWarning.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeWarning)
/* harmony export */ });
function removeWarning(element, time) {
  return setTimeout(function () {
    element.classList.add("removeWarning");
    setTimeout(function () {
      element.remove();
    }, 250);
  }, time);
}

/***/ }),

/***/ "./src/util/setDefaultProjectOption.js":
/*!*********************************************!*\
  !*** ./src/util/setDefaultProjectOption.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setDefaultProjectOption)
/* harmony export */ });


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function setDefaultProjectOption(parentEl, currentTab) {
  if (!parentEl) {
    return -1;
  }
  _toConsumableArray(parentEl.children).forEach(function (option) {
    if (option.innerText == currentTab) {
      option.setAttribute("selected", "true");
    } else {
      option.removeAttribute("selected");
    }
  });
}

/***/ }),

/***/ "./src/util/setFunctions.js":
/*!**********************************!*\
  !*** ./src/util/setFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItems: () => (/* binding */ addItems),
/* harmony export */   removeItems: () => (/* binding */ removeItems)
/* harmony export */ });


function addItems() {
  var setName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  items.forEach(function (item) {
    if (item.length != 0) {
      setName.add(item);
    }
  });
  return setName;
}
function removeItems() {
  var setName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  items.forEach(function (item) {
    setName["delete"](item);
  });
  return setName;
}

/***/ }),

/***/ "./src/util/svgCreator.js":
/*!********************************!*\
  !*** ./src/util/svgCreator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCircleSVG: () => (/* binding */ createCircleSVG),
/* harmony export */   "default": () => (/* binding */ createSVG)
/* harmony export */ });


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function createSVG() {
  var _iconSvg$classList;
  var svgAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pathAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var parentEl = arguments.length > 3 ? arguments[3] : undefined;
  var iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (svgAttributes) {
    for (var _i = 0, _Object$entries = Object.entries(svgAttributes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      iconSvg.setAttribute(key, value);
    }
  }
  if (pathAttributes) {
    for (var _i2 = 0, _Object$entries2 = Object.entries(pathAttributes); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];
      iconPath.setAttribute(_key, _value);
    }
  }
  iconSvg.appendChild(iconPath);
  if (classes.length != 0) (_iconSvg$classList = iconSvg.classList).add.apply(_iconSvg$classList, _toConsumableArray(classes));
  parentEl.appendChild(iconSvg);
  return iconSvg;
}
function createCircleSVG() {
  var _iconSvg$classList2;
  var svgAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var pathAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var parentEl = arguments.length > 3 ? arguments[3] : undefined;
  var iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var iconPath = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  if (svgAttributes) {
    for (var _i3 = 0, _Object$entries3 = Object.entries(svgAttributes); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];
      iconSvg.setAttribute(key, value);
    }
  }
  if (pathAttributes) {
    for (var _i4 = 0, _Object$entries4 = Object.entries(pathAttributes); _i4 < _Object$entries4.length; _i4++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
        _key2 = _Object$entries4$_i[0],
        _value2 = _Object$entries4$_i[1];
      iconPath.setAttribute(_key2, _value2);
    }
  }
  iconSvg.appendChild(iconPath);
  if (classes.length != 0) (_iconSvg$classList2 = iconSvg.classList).add.apply(_iconSvg$classList2, _toConsumableArray(classes));
  parentEl.appendChild(iconSvg);
  return iconSvg;
}

/***/ }),

/***/ "./src/util/toggleClasses.js":
/*!***********************************!*\
  !*** ./src/util/toggleClasses.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleClasses)
/* harmony export */ });
function toggleClasses(element, toggleClass) {
  element.classList.toggle(toggleClass);
}

/***/ }),

/***/ "./src/util/userInputsGetter.js":
/*!**************************************!*\
  !*** ./src/util/userInputsGetter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUserInputs)
/* harmony export */ });


function getUserInputs(formData) {
  var inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var returnObj = {};
  if (formData.get("name") == "") {
    return -1;
  }
  inputs.forEach(function (input) {
    returnObj["".concat(input)] = formData.get("".concat(input));
  });
  return returnObj;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/input.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/input.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.0 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.left-32 {
  left: 8rem;
}

.flex {
  display: flex;
}

.h-6 {
  height: 1.5rem;
}

.w-6 {
  width: 1.5rem;
}

.w-full {
  width: 100%;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.flex-col {
  flex-direction: column;
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

html,
body {
  box-sizing: border-box;
}

.body {
  margin: auto;
  display: flex;
  max-width: 1536px;
}

.nav {
  position: sticky;
  left: 0px;
  top: 0px;
  display: flex;
  max-height: 100%;
  min-height: 100vh;
  width: 20rem;
  flex-direction: column;
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  padding: 0.5rem;
}

.userIcon {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 1.25rem;
  padding-top: 1rem;
}

.userIconSvg {
  height: 2.25rem;
  width: 2.25rem;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {

  .userIconSvg {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity));
  }
}

.navSectionContainer {
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.navSectionContainer:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.navSectionContainerHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-right: 0.125rem;
}
.navBtn {
  width: 100%;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0.5rem;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.navBtn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.activeTab {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.navSectionContainerHeading {
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.navSectionContainerBtn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navSectionContainerBtn svg {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {

  .navSectionContainerBtn svg {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity));
  }
}

.navSectionContainerAddBtn {
  margin-left: auto;
}

.navSectionContainerCollapseBtn {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.collapseBtnRotate {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.navSectionContainerBtnSvg {
  height: 1rem;
  width: 1rem;
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

@media (prefers-color-scheme: dark) {

  .navSectionContainerBtnSvg {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity));
  }
}

.rotateSvgBtn {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.navSectionContainerContentContainer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
}

.projectListContainer {
  display: flex;
  height: 10rem;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.addProjectForm,
.addLabelForm {
  height: 0px;
  width: 16rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0px;
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.addProjectForm:focus-within,
.addLabelForm:focus-within {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.addProjectForm:hover,
.addLabelForm:hover {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.displayProjectForm {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  height: 2.25rem;
  gap: 0.25rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.addNavFormInput {
  grid-column: span 4 / span 4;
  width: 100%;
  background-color: transparent;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.addNavFormInput::-moz-placeholder {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.addNavFormInput::placeholder {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.addNavFormInput:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.addNavFormBtn {
  height: 1.25rem;
  width: 1.25rem;
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {

  .addNavFormBtn {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity));
  }
}

/* .labelsContentContainer {
  @apply;
} */

.label {
  display: flex;
  min-width: -moz-fit-content;
  min-width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.label:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

@media (prefers-color-scheme: dark) {

  .label:hover {
    --tw-text-opacity: 1;
    color: rgb(37 99 235 / var(--tw-text-opacity));
  }
}

.labelDeleteBtn {
  font-weight: 700;
}

.labelDeleteBtnSvg {
  height: 1.25rem;
  width: 1.25rem;
  color: inherit;
}

@media (prefers-color-scheme: dark) {

  .labelDeleteBtnSvg {
    color: inherit;
  }
}

.labelsContentContainer {
  display: flex;
  height: 10rem;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  overflow-y: auto;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.content {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: scroll;
  overflow-x: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.contentContainer {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.content-form {
  display: flex;
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  background-color: transparent;
  padding: 0.5rem;
}

.content-header {
  width: 100%;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 3rem;
}

.content-header-heading {
  margin-left: 11rem;
  margin-right: 11rem;
  border-bottom-width: 1px;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  padding-bottom: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.todo-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.todo-details-name {
  background-color: transparent;
  padding: 0px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
}

.todo-details-name::-moz-placeholder {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
}

.todo-details-name::placeholder {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
}

.todo-details-name:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.todo-details-description {
  background-color: transparent;
  padding: 0px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.todo-details-description::-moz-placeholder {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.todo-details-description::placeholder {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.todo-details-description:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.form-optionals {
  display: flex;
  gap: 0.75rem;
}

.form-details-tags {
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-border-opacity: 0.2;
  background-color: transparent;
  padding: 0.125rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  --tw-text-opacity: 0.55;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.form-submit {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
}

.form-button-container {
  display: flex;
  gap: 0.25rem;
}

.todo-form-btns {
  border-radius: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.todo-form-btns:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.deletedTaskWarning {
  position: absolute;
  right: 2.5rem;
  top: 1.25rem;
  z-index: 10;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
}

.warning {
  display: flex;
  --tw-translate-y: -1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  align-items: center;
  justify-content: space-between;
  gap: 0.125rem;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.warning:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.timer {
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 9999px;
}

.undoWarningBtn {
  border-radius: 9999px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.undoWarningBtn:hover {
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}

.tasks {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.task {
  display: grid;
  width: 100%;
  max-width: 768px;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-border-opacity: 0.3;
  padding: 0.5rem;
  grid-template-columns: auto 1fr auto;
}

.completeMarkerContainenr {
  padding-top: 0.25rem;
}

.completeMarker {
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border-width: 4px;
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
  background-color: transparent;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.completeMarker:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.completeMarkerChecked {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.displayWarning {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: 1;
}

.taskContent {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.taskHeading {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
}

.taskDescription {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.otherTags {
  margin-top: 0.125rem;
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}

.taskDate {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
  outline-style: solid;
  outline-width: 1px;
  outline-color: #16a34a;
}

.taskPriority {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
  outline-style: solid;
  outline-width: 1px;
  outline-color: #dc2626;
}

.taskTag {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(234 88 12 / var(--tw-text-opacity));
  outline-style: solid;
  outline-width: 1px;
  outline-color: #ea580c;
}

.taskDate,
.taskPriority,
.taskTag {
  border-radius: 9999px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 800;
}

.taskOptions {
  padding: 0.25rem;
}

.taskEdit,
.taskDelete {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 800;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.taskEdit:hover,
.taskDelete:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

.divider {
  position: absolute;
  bottom: -0.75rem;
  width: 100%;
  border-width: 1px;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  --tw-border-opacity: 0.1;
}

.hideNavSection {
  height: 0px;
}

.removeWarning {
  --tw-translate-y: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  opacity: 0;
}

.hideTask {
  display: none;
}

input {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-right: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.project {
  margin-bottom: 0.5rem;
  margin-right: 0.25rem;
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.circle {
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  stroke: #22c55e;
  stroke-dashoffset: 0;
  stroke-width: 10;
  stroke-dasharray: 300;
  animation: dash 5s linear alternate;
}
@keyframes dash {
  from {
    stroke-dashoffset: 300;
  }
  to {
    stroke-dashoffset: 200;
  }
}

.hideVisibility {
  visibility: collapse;
}

.wrapper {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.8;
  padding: 3rem;
}

.wrapper-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

.wrapperBtns {
  display: flex;
  gap: 0.5rem;
}

.wrapperDeleteBtn {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.wrapperDeleteBtn:hover {
  --tw-bg-opacity: 0.8;
}

.undoWrapperDeleteBtn {
  border-radius: 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 800;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.undoWrapperDeleteBtn:hover {
  --tw-bg-opacity: 0.8;
}
`, "",{"version":3,"sources":["webpack://./src/input.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n\nhtml,\nbody {\n  box-sizing: border-box;\n}\n\n.body {\n  @apply m-auto flex max-w-screen-2xl;\n}\n\n.nav {\n  @apply sticky left-0 top-0 flex max-h-full min-h-screen w-80  flex-col bg-gray-200 p-2;\n}\n\n.userIcon {\n  @apply px-3 pb-5 pt-4;\n}\n\n.userIconSvg {\n  @apply h-9 w-9 text-blue-600 dark:text-blue-600;\n}\n\n.navSectionContainer {\n  @apply mb-2 rounded-lg p-2 transition-all hover:bg-gray-300 hover:shadow;\n}\n\n.navSectionContainerHeader {\n  @apply flex items-center justify-between gap-2 pr-0.5;\n}\n.navBtn {\n  @apply w-full rounded-md bg-white p-2 text-left text-sm font-bold  text-blue-600 shadow-lg hover:bg-gray-50 hover:text-blue-800 hover:shadow-xl;\n}\n\n.activeTab {\n  @apply bg-blue-600  text-gray-50 shadow-sm transition-all;\n}\n.navSectionContainerHeading {\n  @apply font-bold text-blue-600;\n}\n\n.navSectionContainerBtn {\n  @apply flex items-center justify-center;\n}\n\n.navSectionContainerBtn svg {\n  @apply text-blue-600 dark:text-blue-600;\n}\n\n.navSectionContainerAddBtn {\n  @apply ml-auto;\n}\n\n.navSectionContainerCollapseBtn {\n  @apply transition-transform;\n}\n\n.collapseBtnRotate {\n  @apply -rotate-90;\n}\n\n.navSectionContainerBtnSvg {\n  @apply h-4 w-4 rotate-0 text-gray-800 transition-all dark:text-black;\n}\n\n.rotateSvgBtn {\n  @apply rotate-45;\n}\n\n.navSectionContainerContentContainer {\n  @apply flex  flex-col gap-1 overflow-hidden;\n}\n\n.projectListContainer {\n  @apply flex h-40 flex-col gap-1 overflow-y-auto transition-all;\n}\n\n.addProjectForm,\n.addLabelForm {\n  @apply h-0 w-64  bg-white p-0 shadow transition-all  focus-within:shadow-sm hover:shadow-md;\n}\n\n.displayProjectForm {\n  @apply my-2 flex h-9 gap-1 rounded-md p-2 transition-all;\n}\n\n.addNavFormInput {\n  @apply col-span-4 w-full bg-transparent text-sm font-bold text-blue-700 placeholder:text-sm placeholder:font-bold focus-visible:outline-none;\n}\n\n.addNavFormBtn {\n  @apply h-5 w-5 text-blue-600 dark:text-blue-600;\n}\n\n/* .labelsContentContainer {\n  @apply;\n} */\n\n.label {\n  @apply flex min-w-fit items-center justify-center gap-1.5 rounded-full bg-blue-600  px-3 py-1 text-xs font-bold tracking-wider text-gray-50 shadow transition-all hover:bg-gray-100 hover:text-blue-600 hover:shadow-md hover:dark:text-blue-600;\n}\n\n.labelDeleteBtn {\n  @apply font-bold;\n}\n\n.labelDeleteBtnSvg {\n  @apply h-5 w-5 text-inherit dark:text-inherit;\n}\n\n.labelsContentContainer {\n  @apply flex h-40 flex-wrap content-start items-start justify-start gap-2 overflow-y-auto transition-all;\n}\n\n.content {\n  @apply relative flex h-screen w-full flex-col items-start justify-start overflow-scroll overflow-x-hidden bg-gray-100 text-black;\n}\n\n.contentContainer {\n  @apply flex w-full items-center  justify-center px-14 py-4;\n}\n\n.content-form {\n  @apply flex w-full max-w-screen-md flex-col gap-2 rounded-lg border border-black border-opacity-20 bg-transparent p-2;\n}\n\n.content-header {\n  @apply w-full px-14  pt-12;\n}\n\n.content-header-heading {\n  @apply mx-44 border-b border-black border-opacity-20 pb-2 text-3xl font-bold text-blue-700;\n}\n\n.todo-details {\n  @apply flex flex-col gap-1;\n}\n\n.todo-details-name {\n  @apply bg-transparent  p-0 text-base font-bold placeholder:text-base placeholder:font-extrabold focus-visible:outline-none;\n}\n\n.todo-details-description {\n  @apply bg-transparent p-0 text-sm font-bold placeholder:text-sm placeholder:font-bold focus-visible:outline-none;\n}\n\n.form-optionals {\n  @apply flex gap-3;\n}\n\n.form-details-tags {\n  @apply rounded border  border-black border-opacity-20 bg-transparent p-0.5 text-sm font-semibold text-black text-opacity-55 outline-none;\n}\n\n.form-submit {\n  @apply flex justify-between gap-3;\n}\n\n.form-button-container {\n  @apply flex gap-1;\n}\n\n.todo-form-btns {\n  @apply rounded  px-3 py-1 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-600 hover:text-white;\n}\n\n.deletedTaskWarning {\n  @apply absolute right-10 top-5  z-10 flex flex-col-reverse gap-2;\n}\n\n.warning {\n  @apply flex -translate-y-5 items-center justify-between gap-0.5 rounded-full bg-gray-200 px-3 py-2 transition-all hover:bg-gray-300;\n}\n\n.timer {\n  @apply h-5 w-5 rounded-full;\n}\n\n.undoWarningBtn {\n  @apply rounded-full px-1 text-sm font-bold text-gray-700 transition-all hover:text-gray-950;\n}\n\n.tasks {\n  @apply flex w-full flex-col items-center justify-center gap-5 px-14 py-4;\n}\n\n.task {\n  @apply grid  w-full max-w-screen-md gap-2 rounded-lg border border-black  border-opacity-30 p-2;\n  grid-template-columns: auto 1fr auto;\n}\n\n.completeMarkerContainenr {\n  @apply pt-1;\n}\n\n.completeMarker {\n  @apply block h-4 w-4 rounded-full border-4 border-blue-600 bg-transparent ring-0 transition-all hover:ring-2;\n}\n\n.completeMarkerChecked {\n  @apply bg-blue-600;\n}\n\n.displayWarning {\n  @apply translate-y-0 opacity-100;\n}\n\n.taskContent {\n  @apply flex flex-col gap-0.5;\n}\n\n.taskHeading {\n  @apply text-base font-extrabold;\n}\n\n.taskDescription {\n  @apply text-sm font-bold;\n}\n\n.otherTags {\n  @apply mt-0.5 flex gap-2 text-sm font-semibold;\n}\n\n.taskDate {\n  @apply bg-green-100 text-green-600 outline outline-1 outline-green-600;\n}\n\n.taskPriority {\n  @apply bg-red-100 text-red-600 outline outline-1 outline-red-600;\n}\n\n.taskTag {\n  @apply bg-orange-100 text-orange-600 outline outline-1 outline-orange-600;\n}\n\n.taskDate,\n.taskPriority,\n.taskTag {\n  @apply rounded-full px-2 py-0.5  text-xs font-extrabold;\n}\n\n.taskOptions {\n  @apply p-1;\n}\n\n.taskEdit,\n.taskDelete {\n  @apply rounded  bg-gray-100 px-3 py-1 text-sm font-extrabold transition-all hover:bg-red-500 hover:text-gray-50;\n}\n\n.divider {\n  @apply absolute -bottom-3  w-full  border border-black border-opacity-10;\n}\n\n.hideNavSection {\n  @apply h-0;\n}\n\n.removeWarning {\n  @apply translate-y-5 opacity-0;\n}\n\n.hideTask {\n  @apply hidden;\n}\n\ninput {\n  @apply rounded bg-white  py-1 pr-2 text-black;\n}\n\n.project {\n  @apply mb-2 mr-1 shadow-2xl;\n}\n\n.circle {\n  @apply h-full w-full rounded-full stroke-green-500;\n  stroke-dashoffset: 0;\n  stroke-width: 10;\n  stroke-dasharray: 300;\n  animation: dash 5s linear alternate;\n}\n@keyframes dash {\n  from {\n    stroke-dashoffset: 300;\n  }\n  to {\n    stroke-dashoffset: 200;\n  }\n}\n\n.hideVisibility {\n  @apply collapse;\n}\n\n.wrapper {\n  @apply  absolute flex h-full w-full flex-col items-start justify-center gap-2 bg-black bg-opacity-80 p-12;\n}\n\n.wrapper-heading {\n  @apply text-2xl font-extrabold text-gray-50;\n}\n\n.wrapperBtns {\n  @apply flex gap-2;\n}\n\n.wrapperDeleteBtn {\n  @apply rounded bg-blue-600 px-3 py-1 text-base font-extrabold text-white hover:bg-opacity-80;\n}\n\n.undoWrapperDeleteBtn {\n  @apply rounded bg-red-600 px-3 py-1 text-base font-extrabold text-white hover:bg-opacity-80;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/input.css":
/*!***********************!*\
  !*** ./src/input.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/postcss-loader/dist/cjs.js!./input.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/input.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_input_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/prettier/standalone.mjs":
/*!**********************************************!*\
  !*** ./node_modules/prettier/standalone.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __debug: () => (/* binding */ ri),
/* harmony export */   check: () => (/* binding */ ei),
/* harmony export */   "default": () => (/* binding */ qc),
/* harmony export */   doc: () => (/* binding */ er),
/* harmony export */   format: () => (/* binding */ cu),
/* harmony export */   formatWithCursor: () => (/* binding */ au),
/* harmony export */   getSupportInfo: () => (/* binding */ ti),
/* harmony export */   util: () => (/* binding */ Qt),
/* harmony export */   version: () => (/* binding */ Du)
/* harmony export */ });
var lu=Object.create;var $e=Object.defineProperty;var fu=Object.getOwnPropertyDescriptor;var Fu=Object.getOwnPropertyNames;var pu=Object.getPrototypeOf,du=Object.prototype.hasOwnProperty;var mu=(e,t)=>()=>(e&&(t=e(e=0)),t);var Me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),We=(e,t)=>{for(var r in t)$e(e,r,{get:t[r],enumerable:!0})},nr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Fu(t))!du.call(e,o)&&o!==r&&$e(e,o,{get:()=>t[o],enumerable:!(n=fu(t,o))||n.enumerable});return e};var he=(e,t,r)=>(r=e!=null?lu(pu(e)):{},nr(t||!e||!e.__esModule?$e(r,"default",{value:e,enumerable:!0}):r,e)),Eu=e=>nr($e({},"__esModule",{value:!0}),e);var Cu=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var ht=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};var ce=(e,t,r)=>(Cu(e,t,"access private method"),r);var or=Me(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.default=ur;function ur(){}ur.prototype={diff:function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.callback;typeof n=="function"&&(o=n,n={}),this.options=n;var u=this;function i(F){return o?(setTimeout(function(){o(void 0,F)},0),!0):F}t=this.castInput(t),r=this.castInput(r),t=this.removeEmpty(this.tokenize(t)),r=this.removeEmpty(this.tokenize(r));var s=r.length,D=t.length,a=1,c=s+D;n.maxEditLength&&(c=Math.min(c,n.maxEditLength));var d=[{newPos:-1,components:[]}],f=this.extractCommon(d[0],r,t,0);if(d[0].newPos+1>=s&&f+1>=D)return i([{value:this.join(r),count:r.length}]);function p(){for(var F=-1*a;F<=a;F+=2){var m=void 0,E=d[F-1],C=d[F+1],g=(C?C.newPos:0)-F;E&&(d[F-1]=void 0);var h=E&&E.newPos+1<s,B=C&&0<=g&&g<D;if(!h&&!B){d[F]=void 0;continue}if(!h||B&&E.newPos<C.newPos?(m=yu(C),u.pushComponent(m.components,void 0,!0)):(m=E,m.newPos++,u.pushComponent(m.components,!0,void 0)),g=u.extractCommon(m,r,t,F),m.newPos+1>=s&&g+1>=D)return i(gu(u,m.components,r,t,u.useLongestToken));d[F]=m}a++}if(o)(function F(){setTimeout(function(){if(a>c)return o();p()||F()},0)})();else for(;a<=c;){var l=p();if(l)return l}},pushComponent:function(t,r,n){var o=t[t.length-1];o&&o.added===r&&o.removed===n?t[t.length-1]={count:o.count+1,added:r,removed:n}:t.push({count:1,added:r,removed:n})},extractCommon:function(t,r,n,o){for(var u=r.length,i=n.length,s=t.newPos,D=s-o,a=0;s+1<u&&D+1<i&&this.equals(r[s+1],n[D+1]);)s++,D++,a++;return a&&t.components.push({count:a}),t.newPos=s,D},equals:function(t,r){return this.options.comparator?this.options.comparator(t,r):t===r||this.options.ignoreCase&&t.toLowerCase()===r.toLowerCase()},removeEmpty:function(t){for(var r=[],n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r},castInput:function(t){return t},tokenize:function(t){return t.split("")},join:function(t){return t.join("")}};function gu(e,t,r,n,o){for(var u=0,i=t.length,s=0,D=0;u<i;u++){var a=t[u];if(a.removed){if(a.value=e.join(n.slice(D,D+a.count)),D+=a.count,u&&t[u-1].added){var d=t[u-1];t[u-1]=t[u],t[u]=d}}else{if(!a.added&&o){var c=r.slice(s,s+a.count);c=c.map(function(p,l){var F=n[D+l];return F.length>p.length?F:p}),a.value=e.join(c)}else a.value=e.join(r.slice(s,s+a.count));s+=a.count,a.added||(D+=a.count)}}var f=t[i-1];return i>1&&typeof f.value=="string"&&(f.added||f.removed)&&e.equals("",f.value)&&(t[i-2].value+=f.value,t.pop()),t}function yu(e){return{newPos:e.newPos,components:e.components.slice(0)}}});var ir=Me(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.diffArrays=_u;ye.arrayDiff=void 0;var Au=Bu(or());function Bu(e){return e&&e.__esModule?e:{default:e}}var ge=new Au.default;ye.arrayDiff=ge;ge.tokenize=function(e){return e.slice()};ge.join=ge.removeEmpty=function(e){return e};function _u(e,t,r){return ge.diff(e,t,r)}});var Pe=Me((ps,jr)=>{"use strict";var Yr=new Proxy(String,{get:()=>Yr});jr.exports=Yr});var Fn={};We(Fn,{default:()=>uo,shouldHighlight:()=>no});var no,uo,pn=mu(()=>{no=()=>!1,uo=String});var yn=Me(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.codeFrameColumns=gn;Ft.default=ao;var dn=(pn(),Eu(Fn)),mn=oo(Pe(),!0);function hn(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(hn=function(n){return n?r:t})(e)}function oo(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=hn(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}var jt;function io(e){if(e){var t;return(t=jt)!=null||(jt=new mn.default.constructor({enabled:!0,level:1})),jt}return mn.default}var En=!1;function so(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var Cn=/\r\n|[\n\r\u2028\u2029]/;function Do(e,t,r){let n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),{linesAbove:u=2,linesBelow:i=3}=r||{},s=n.line,D=n.column,a=o.line,c=o.column,d=Math.max(s-(u+1),0),f=Math.min(t.length,a+i);s===-1&&(d=0),a===-1&&(f=t.length);let p=a-s,l={};if(p)for(let F=0;F<=p;F++){let m=F+s;if(!D)l[m]=!0;else if(F===0){let E=t[m-1].length;l[m]=[D,E-D+1]}else if(F===p)l[m]=[0,c];else{let E=t[m-F].length;l[m]=[0,E]}}else D===c?D?l[s]=[D,0]:l[s]=!0:l[s]=[D,c-D];return{start:d,end:f,markerLines:l}}function gn(e,t,r={}){let n=(r.highlightCode||r.forceColor)&&(0,dn.shouldHighlight)(r),o=io(r.forceColor),u=so(o),i=(F,m)=>n?F(m):m,s=e.split(Cn),{start:D,end:a,markerLines:c}=Do(t,s,r),d=t.start&&typeof t.start.column=="number",f=String(a).length,l=(n?(0,dn.default)(e,r):e).split(Cn,a).slice(D,a).map((F,m)=>{let E=D+1+m,g=` ${` ${E}`.slice(-f)} |`,h=c[E],B=!c[E+1];if(h){let Z="";if(Array.isArray(h)){let $=F.slice(0,Math.max(h[0]-1,0)).replace(/[^\t]/g," "),Q=h[1]||1;Z=[`
 `,i(u.gutter,g.replace(/\d/g," "))," ",$,i(u.marker,"^").repeat(Q)].join(""),B&&r.message&&(Z+=" "+i(u.message,r.message))}return[i(u.marker,">"),i(u.gutter,g),F.length>0?` ${F}`:"",Z].join("")}else return` ${i(u.gutter,g)}${F.length>0?` ${F}`:""}`}).join(`
`);return r.message&&!d&&(l=`${" ".repeat(f+1)}${r.message}
${l}`),n?o.reset(l):l}function ao(e,t,r,n={}){if(!En){En=!0;let u="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";{let i=new Error(u);i.name="DeprecationWarning",console.warn(new Error(u))}}return r=Math.max(r,0),gn(e,{start:{column:r,line:t}},n)}});var tr={};We(tr,{__debug:()=>ri,check:()=>ei,doc:()=>er,format:()=>cu,formatWithCursor:()=>au,getSupportInfo:()=>ti,util:()=>Qt,version:()=>Du});var hu=(e,t,r,n)=>{if(!(e&&t==null))return t.replaceAll?t.replaceAll(r,n):r.global?t.replace(r,n):t.split(r).join(n)},ee=hu;var Kn=he(ir(),1);var M="string",j="array",W="cursor",T="indent",S="align",v="trim",_="group",k="fill",x="if-break",P="indent-if-break",L="line-suffix",I="line-suffix-boundary",A="line",O="label",b="break-parent",Ue=new Set([W,T,S,v,_,k,x,P,L,I,A,O,b]);function xu(e){if(typeof e=="string")return M;if(Array.isArray(e))return j;if(!e)return;let{type:t}=e;if(Ue.has(t))return t}var U=xu;var ku=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e);function bu(e){let t=e===null?"null":typeof e;if(t!=="string"&&t!=="object")return`Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;if(U(e))throw new Error("doc is valid.");let r=Object.prototype.toString.call(e);if(r!=="[object Object]")return`Unexpected doc '${r}'.`;let n=ku([...Ue].map(o=>`'${o}'`));return`Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`}var yt=class extends Error{name="InvalidDocError";constructor(t){super(bu(t)),this.doc=t}},q=yt;var sr={};function wu(e,t,r,n){let o=[e];for(;o.length>0;){let u=o.pop();if(u===sr){r(o.pop());continue}r&&o.push(u,sr);let i=U(u);if(!i)throw new q(u);if((t==null?void 0:t(u))!==!1)switch(i){case j:case k:{let s=i===j?u:u.parts;for(let D=s.length,a=D-1;a>=0;--a)o.push(s[a]);break}case x:o.push(u.flatContents,u.breakContents);break;case _:if(n&&u.expandedStates)for(let s=u.expandedStates.length,D=s-1;D>=0;--D)o.push(u.expandedStates[D]);else o.push(u.contents);break;case S:case T:case P:case O:case L:o.push(u.contents);break;case M:case W:case v:case I:case A:case b:break;default:throw new q(u)}}}var Ae=wu;var Dr=()=>{},z=Dr,ze=Dr;function ie(e){return z(e),{type:T,contents:e}}function oe(e,t){return z(t),{type:S,contents:t,n:e}}function At(e,t={}){return z(e),ze(t.expandedStates,!0),{type:_,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function ar(e){return oe(Number.NEGATIVE_INFINITY,e)}function cr(e){return oe({type:"root"},e)}function lr(e){return oe(-1,e)}function fr(e,t){return At(e[0],{...t,expandedStates:e})}function Ge(e){return ze(e),{type:k,parts:e}}function Fr(e,t="",r={}){return z(e),t!==""&&z(t),{type:x,breakContents:e,flatContents:t,groupId:r.groupId}}function pr(e,t){return z(e),{type:P,contents:e,groupId:t.groupId,negate:t.negate}}function Be(e){return z(e),{type:L,contents:e}}var dr={type:I},le={type:b},mr={type:v},_e={type:A,hard:!0},Bt={type:A,hard:!0,literal:!0},Ke={type:A},Er={type:A,soft:!0},G=[_e,le],He=[Bt,le],xe={type:W};function ke(e,t){z(e),ze(t);let r=[];for(let n=0;n<t.length;n++)n!==0&&r.push(e),r.push(t[n]);return r}function qe(e,t,r){z(e);let n=e;if(t>0){for(let o=0;o<Math.floor(t/r);++o)n=ie(n);n=oe(t%r,n),n=oe(Number.NEGATIVE_INFINITY,n)}return n}function Cr(e,t){return z(t),e?{type:O,label:e,contents:t}:t}var Ou=(e,t,r)=>{if(!(e&&t==null))return Array.isArray(t)||typeof t=="string"?t[r<0?t.length+r:r]:t.at(r)},y=Ou;function hr(e){let t=e.indexOf("\r");return t>=0?e.charAt(t+1)===`
`?"crlf":"cr":"lf"}function be(e){switch(e){case"cr":return"\r";case"crlf":return`\r
`;default:return`
`}}function _t(e,t){let r;switch(t){case`
`:r=/\n/g;break;case"\r":r=/\r/g;break;case`\r
`:r=/\r\n/g;break;default:throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)}let n=e.match(r);return n?n.length:0}function gr(e){return ee(!1,e,/\r\n?/g,`
`)}var yr=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;function Ar(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function Br(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9800&&e<=9811||e===9855||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}var _r=e=>!(Ar(e)||Br(e));var Nu=/[^\x20-\x7F]/;function Tu(e){if(!e)return 0;if(!Nu.test(e))return e.length;e=e.replace(yr(),"  ");let t=0;for(let r of e){let n=r.codePointAt(0);n<=31||n>=127&&n<=159||n>=768&&n<=879||(t+=_r(n)?1:2)}return t}var we=Tu;var br=e=>{if(Array.isArray(e))return e;if(e.type!==k)throw new Error(`Expect doc to be 'array' or '${k}'.`);return e.parts};function Ne(e,t){if(typeof e=="string")return t(e);let r=new Map;return n(e);function n(u){if(r.has(u))return r.get(u);let i=o(u);return r.set(u,i),i}function o(u){switch(U(u)){case j:return t(u.map(n));case k:return t({...u,parts:u.parts.map(n)});case x:return t({...u,breakContents:n(u.breakContents),flatContents:n(u.flatContents)});case _:{let{expandedStates:i,contents:s}=u;return i?(i=i.map(n),s=i[0]):s=n(s),t({...u,contents:s,expandedStates:i})}case S:case T:case P:case O:case L:return t({...u,contents:n(u.contents)});case M:case W:case v:case I:case A:case b:return t(u);default:throw new q(u)}}}function Je(e,t,r){let n=r,o=!1;function u(i){if(o)return!1;let s=t(i);s!==void 0&&(o=!0,n=s)}return Ae(e,u),n}function Su(e){if(e.type===_&&e.break||e.type===A&&e.hard||e.type===b)return!0}function wr(e){return Je(e,Su,!1)}function xr(e){if(e.length>0){let t=y(!1,e,-1);!t.expandedStates&&!t.break&&(t.break="propagated")}return null}function Or(e){let t=new Set,r=[];function n(u){if(u.type===b&&xr(r),u.type===_){if(r.push(u),t.has(u))return!1;t.add(u)}}function o(u){u.type===_&&r.pop().break&&xr(r)}Ae(e,n,o,!0)}function vu(e){return e.type===A&&!e.hard?e.soft?"":" ":e.type===x?e.flatContents:e}function Nr(e){return Ne(e,vu)}function kr(e){for(e=[...e];e.length>=2&&y(!1,e,-2).type===A&&y(!1,e,-1).type===b;)e.length-=2;if(e.length>0){let t=Oe(y(!1,e,-1));e[e.length-1]=t}return e}function Oe(e){switch(U(e)){case S:case T:case P:case _:case L:case O:{let t=Oe(e.contents);return{...e,contents:t}}case x:return{...e,breakContents:Oe(e.breakContents),flatContents:Oe(e.flatContents)};case k:return{...e,parts:kr(e.parts)};case j:return kr(e);case M:return e.replace(/[\n\r]*$/,"");case W:case v:case I:case A:case b:break;default:throw new q(e)}return e}function Xe(e){return Oe(Lu(e))}function Pu(e){switch(U(e)){case k:if(e.parts.every(t=>t===""))return"";break;case _:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===_&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case S:case T:case P:case L:if(!e.contents)return"";break;case x:if(!e.flatContents&&!e.breakContents)return"";break;case j:{let t=[];for(let r of e){if(!r)continue;let[n,...o]=Array.isArray(r)?r:[r];typeof n=="string"&&typeof y(!1,t,-1)=="string"?t[t.length-1]+=n:t.push(n),t.push(...o)}return t.length===0?"":t.length===1?t[0]:t}case M:case W:case v:case I:case A:case O:case b:break;default:throw new q(e)}return e}function Lu(e){return Ne(e,t=>Pu(t))}function Tr(e,t=He){return Ne(e,r=>typeof r=="string"?ke(t,r.split(`
`)):r)}function Iu(e){if(e.type===A)return!0}function Sr(e){return Je(e,Iu,!1)}function Ze(e,t){return e.type===O?{...e,contents:t(e.contents)}:t(e)}var R=Symbol("MODE_BREAK"),K=Symbol("MODE_FLAT"),Te=Symbol("cursor");function vr(){return{value:"",length:0,queue:[]}}function Ru(e,t){return xt(e,{type:"indent"},t)}function Yu(e,t,r){return t===Number.NEGATIVE_INFINITY?e.root||vr():t<0?xt(e,{type:"dedent"},r):t?t.type==="root"?{...e,root:e}:xt(e,{type:typeof t=="string"?"stringAlign":"numberAlign",n:t},r):e}function xt(e,t,r){let n=t.type==="dedent"?e.queue.slice(0,-1):[...e.queue,t],o="",u=0,i=0,s=0;for(let l of n)switch(l.type){case"indent":c(),r.useTabs?D(1):a(r.tabWidth);break;case"stringAlign":c(),o+=l.n,u+=l.n.length;break;case"numberAlign":i+=1,s+=l.n;break;default:throw new Error(`Unexpected type '${l.type}'`)}return f(),{...e,value:o,length:u,queue:n};function D(l){o+="	".repeat(l),u+=r.tabWidth*l}function a(l){o+=" ".repeat(l),u+=l}function c(){r.useTabs?d():f()}function d(){i>0&&D(i),p()}function f(){s>0&&a(s),p()}function p(){i=0,s=0}}function kt(e){let t=0,r=0,n=e.length;e:for(;n--;){let o=e[n];if(o===Te){r++;continue}for(let u=o.length-1;u>=0;u--){let i=o[u];if(i===" "||i==="	")t++;else{e[n]=o.slice(0,u+1);break e}}}if(t>0||r>0)for(e.length=n+1;r-- >0;)e.push(Te);return t}function Qe(e,t,r,n,o,u){if(r===Number.POSITIVE_INFINITY)return!0;let i=t.length,s=[e],D=[];for(;r>=0;){if(s.length===0){if(i===0)return!0;s.push(t[--i]);continue}let{mode:a,doc:c}=s.pop();switch(U(c)){case M:D.push(c),r-=we(c);break;case j:case k:{let d=br(c);for(let f=d.length-1;f>=0;f--)s.push({mode:a,doc:d[f]});break}case T:case S:case P:case O:s.push({mode:a,doc:c.contents});break;case v:r+=kt(D);break;case _:{if(u&&c.break)return!1;let d=c.break?R:a,f=c.expandedStates&&d===R?y(!1,c.expandedStates,-1):c.contents;s.push({mode:d,doc:f});break}case x:{let f=(c.groupId?o[c.groupId]||K:a)===R?c.breakContents:c.flatContents;f&&s.push({mode:a,doc:f});break}case A:if(a===R||c.hard)return!0;c.soft||(D.push(" "),r--);break;case L:n=!0;break;case I:if(n)return!1;break}}return!1}function fe(e,t){let r={},n=t.printWidth,o=be(t.endOfLine),u=0,i=[{ind:vr(),mode:R,doc:e}],s=[],D=!1,a=[],c=0;for(Or(e);i.length>0;){let{ind:f,mode:p,doc:l}=i.pop();switch(U(l)){case M:{let F=o!==`
`?ee(!1,l,`
`,o):l;s.push(F),i.length>0&&(u+=we(F));break}case j:for(let F=l.length-1;F>=0;F--)i.push({ind:f,mode:p,doc:l[F]});break;case W:if(c>=2)throw new Error("There are too many 'cursor' in doc.");s.push(Te),c++;break;case T:i.push({ind:Ru(f,t),mode:p,doc:l.contents});break;case S:i.push({ind:Yu(f,l.n,t),mode:p,doc:l.contents});break;case v:u-=kt(s);break;case _:switch(p){case K:if(!D){i.push({ind:f,mode:l.break?R:K,doc:l.contents});break}case R:{D=!1;let F={ind:f,mode:K,doc:l.contents},m=n-u,E=a.length>0;if(!l.break&&Qe(F,i,m,E,r))i.push(F);else if(l.expandedStates){let C=y(!1,l.expandedStates,-1);if(l.break){i.push({ind:f,mode:R,doc:C});break}else for(let g=1;g<l.expandedStates.length+1;g++)if(g>=l.expandedStates.length){i.push({ind:f,mode:R,doc:C});break}else{let h=l.expandedStates[g],B={ind:f,mode:K,doc:h};if(Qe(B,i,m,E,r)){i.push(B);break}}}else i.push({ind:f,mode:R,doc:l.contents});break}}l.id&&(r[l.id]=y(!1,i,-1).mode);break;case k:{let F=n-u,{parts:m}=l;if(m.length===0)break;let[E,C]=m,g={ind:f,mode:K,doc:E},h={ind:f,mode:R,doc:E},B=Qe(g,[],F,a.length>0,r,!0);if(m.length===1){B?i.push(g):i.push(h);break}let Z={ind:f,mode:K,doc:C},$={ind:f,mode:R,doc:C};if(m.length===2){B?i.push(Z,g):i.push($,h);break}m.splice(0,2);let Q={ind:f,mode:p,doc:Ge(m)},rr=m[0];Qe({ind:f,mode:K,doc:[E,C,rr]},[],F,a.length>0,r,!0)?i.push(Q,Z,g):B?i.push(Q,$,g):i.push(Q,$,h);break}case x:case P:{let F=l.groupId?r[l.groupId]:p;if(F===R){let m=l.type===x?l.breakContents:l.negate?l.contents:ie(l.contents);m&&i.push({ind:f,mode:p,doc:m})}if(F===K){let m=l.type===x?l.flatContents:l.negate?ie(l.contents):l.contents;m&&i.push({ind:f,mode:p,doc:m})}break}case L:a.push({ind:f,mode:p,doc:l.contents});break;case I:a.length>0&&i.push({ind:f,mode:p,doc:_e});break;case A:switch(p){case K:if(l.hard)D=!0;else{l.soft||(s.push(" "),u+=1);break}case R:if(a.length>0){i.push({ind:f,mode:p,doc:l},...a.reverse()),a.length=0;break}l.literal?f.root?(s.push(o,f.root.value),u=f.root.length):(s.push(o),u=0):(u-=kt(s),s.push(o+f.value),u=f.length);break}break;case O:i.push({ind:f,mode:p,doc:l.contents});break;case b:break;default:throw new q(l)}i.length===0&&a.length>0&&(i.push(...a.reverse()),a.length=0)}let d=s.indexOf(Te);if(d!==-1){let f=s.indexOf(Te,d+1),p=s.slice(0,d).join(""),l=s.slice(d+1,f).join(""),F=s.slice(f+1).join("");return{formatted:p+l+F,cursorNodeStart:p.length,cursorNodeText:l}}return{formatted:s.join("")}}function J(e){var t;if(!e)return"";if(Array.isArray(e)){let r=[];for(let n of e)if(Array.isArray(n))r.push(...J(n));else{let o=J(n);o!==""&&r.push(o)}return r}return e.type===x?{...e,breakContents:J(e.breakContents),flatContents:J(e.flatContents)}:e.type===_?{...e,contents:J(e.contents),expandedStates:(t=e.expandedStates)==null?void 0:t.map(J)}:e.type===k?{type:"fill",parts:e.parts.map(J)}:e.contents?{...e,contents:J(e.contents)}:e}function Pr(e){let t=Object.create(null),r=new Set;return n(J(e));function n(u,i,s){var D,a;if(typeof u=="string")return JSON.stringify(u);if(Array.isArray(u)){let c=u.map(n).filter(Boolean);return c.length===1?c[0]:`[${c.join(", ")}]`}if(u.type===A){let c=((D=s==null?void 0:s[i+1])==null?void 0:D.type)===b;return u.literal?c?"literalline":"literallineWithoutBreakParent":u.hard?c?"hardline":"hardlineWithoutBreakParent":u.soft?"softline":"line"}if(u.type===b)return((a=s==null?void 0:s[i-1])==null?void 0:a.type)===A&&s[i-1].hard?void 0:"breakParent";if(u.type===v)return"trim";if(u.type===T)return"indent("+n(u.contents)+")";if(u.type===S)return u.n===Number.NEGATIVE_INFINITY?"dedentToRoot("+n(u.contents)+")":u.n<0?"dedent("+n(u.contents)+")":u.n.type==="root"?"markAsRoot("+n(u.contents)+")":"align("+JSON.stringify(u.n)+", "+n(u.contents)+")";if(u.type===x)return"ifBreak("+n(u.breakContents)+(u.flatContents?", "+n(u.flatContents):"")+(u.groupId?(u.flatContents?"":', ""')+`, { groupId: ${o(u.groupId)} }`:"")+")";if(u.type===P){let c=[];u.negate&&c.push("negate: true"),u.groupId&&c.push(`groupId: ${o(u.groupId)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return`indentIfBreak(${n(u.contents)}${d})`}if(u.type===_){let c=[];u.break&&u.break!=="propagated"&&c.push("shouldBreak: true"),u.id&&c.push(`id: ${o(u.id)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return u.expandedStates?`conditionalGroup([${u.expandedStates.map(f=>n(f)).join(",")}]${d})`:`group(${n(u.contents)}${d})`}if(u.type===k)return`fill([${u.parts.map(c=>n(c)).join(", ")}])`;if(u.type===L)return"lineSuffix("+n(u.contents)+")";if(u.type===I)return"lineSuffixBoundary";if(u.type===O)return`label(${JSON.stringify(u.label)}, ${n(u.contents)})`;throw new Error("Unknown doc type "+u.type)}function o(u){if(typeof u!="symbol")return JSON.stringify(String(u));if(u in t)return t[u];let i=u.description||"symbol";for(let s=0;;s++){let D=i+(s>0?` #${s}`:"");if(!r.has(D))return r.add(D),t[u]=`Symbol.for(${JSON.stringify(D)})`}}}function ju(e,t,r=0){let n=0;for(let o=r;o<e.length;++o)e[o]==="	"?n=n+t-n%t:n++;return n}var Fe=ju;var Se=class extends Error{name="ConfigError"},ve=class extends Error{name="UndefinedParserError"};var Lr={cursorOffset:{category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:"Print (to stderr) where a cursor at the given position would move to after formatting.",cliCategory:"Editor"},endOfLine:{category:"Global",type:"choice",default:"lf",description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:`Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`}]},filepath:{category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{category:"Global",type:"choice",default:void 0,description:"Which parser to use.",exception:e=>typeof e=="string"||typeof e=="function",choices:[{value:"flow",description:"Flow"},{value:"babel",description:"JavaScript"},{value:"babel-flow",description:"Flow"},{value:"babel-ts",description:"TypeScript"},{value:"typescript",description:"TypeScript"},{value:"acorn",description:"JavaScript"},{value:"espree",description:"JavaScript"},{value:"meriyah",description:"JavaScript"},{value:"css",description:"CSS"},{value:"less",description:"Less"},{value:"scss",description:"SCSS"},{value:"json",description:"JSON"},{value:"json5",description:"JSON5"},{value:"json-stringify",description:"JSON.stringify"},{value:"graphql",description:"GraphQL"},{value:"markdown",description:"Markdown"},{value:"mdx",description:"MDX"},{value:"vue",description:"Vue"},{value:"yaml",description:"YAML"},{value:"glimmer",description:"Ember / Handlebars"},{value:"html",description:"HTML"},{value:"angular",description:"Angular"},{value:"lwc",description:"Lightning Web Components"}]},plugins:{type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>typeof e=="string"||typeof e=="object",cliName:"plugin",cliCategory:"Config"},printWidth:{category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:`Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,cliCategory:"Editor"},rangeStart:{category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:`Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,cliCategory:"Editor"},requirePragma:{category:"Special",type:"boolean",default:!1,description:`Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{category:"Global",type:"choice",default:"auto",description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}};function et({plugins:e=[],showDeprecated:t=!1}={}){let r=e.flatMap(o=>o.languages??[]),n=[];for(let o of $u(Object.assign({},...e.map(({options:u})=>u),Lr)))!t&&o.deprecated||(Array.isArray(o.choices)&&(t||(o.choices=o.choices.filter(u=>!u.deprecated)),o.name==="parser"&&(o.choices=[...o.choices,...Vu(o.choices,r,e)])),o.pluginDefaults=Object.fromEntries(e.filter(u=>{var i;return((i=u.defaultOptions)==null?void 0:i[o.name])!==void 0}).map(u=>[u.name,u.defaultOptions[o.name]])),n.push(o));return{languages:r,options:n}}function*Vu(e,t,r){let n=new Set(e.map(o=>o.value));for(let o of t)if(o.parsers){for(let u of o.parsers)if(!n.has(u)){n.add(u);let i=r.find(D=>D.parsers&&Object.prototype.hasOwnProperty.call(D.parsers,u)),s=o.name;i!=null&&i.name&&(s+=` (plugin: ${i.name})`),yield{value:u,description:s}}}}function $u(e){let t=[];for(let[r,n]of Object.entries(e)){let o={name:r,...n};Array.isArray(o.default)&&(o.default=y(!1,o.default,-1).value),t.push(o)}return t}var Mu=e=>String(e).split(/[/\\]/).pop();function Ir(e,t){if(!t)return;let r=Mu(t).toLowerCase();return e.find(n=>{var o,u;return((o=n.extensions)==null?void 0:o.some(i=>r.endsWith(i)))||((u=n.filenames)==null?void 0:u.some(i=>i.toLowerCase()===r))})}function Wu(e,t){if(t)return e.find(({name:r})=>r.toLowerCase()===t)??e.find(({aliases:r})=>r==null?void 0:r.includes(t))??e.find(({extensions:r})=>r==null?void 0:r.includes(`.${t}`))}function Uu(e,t){let r=e.plugins.flatMap(o=>o.languages??[]),n=Wu(r,t.language)??Ir(r,t.physicalFile)??Ir(r,t.file)??(t.physicalFile,void 0);return n==null?void 0:n.parsers[0]}var Rr=Uu;var te={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(e===null||typeof e!="object")return JSON.stringify(e);if(Array.isArray(e))return`[${e.map(r=>te.value(r)).join(", ")}]`;let t=Object.keys(e);return t.length===0?"{}":`{ ${t.map(r=>`${te.key(r)}: ${te.value(e[r])}`).join(", ")} }`},pair:({key:e,value:t})=>te.value({[e]:t})};var bt=he(Pe(),1),Vr=(e,t,{descriptor:r})=>{let n=[`${bt.default.yellow(typeof e=="string"?r.key(e):r.pair(e))} is deprecated`];return t&&n.push(`we now treat it as ${bt.default.blue(typeof t=="string"?r.key(t):r.pair(t))}`),n.join("; ")+"."};var se=he(Pe(),1);var tt=Symbol.for("vnopts.VALUE_NOT_EXIST"),pe=Symbol.for("vnopts.VALUE_UNCHANGED");var $r=" ".repeat(2),Wr=(e,t,r)=>{let{text:n,list:o}=r.normalizeExpectedResult(r.schemas[e].expected(r)),u=[];return n&&u.push(Mr(e,t,n,r.descriptor)),o&&u.push([Mr(e,t,o.title,r.descriptor)].concat(o.values.map(i=>Ur(i,r.loggerPrintWidth))).join(`
`)),zr(u,r.loggerPrintWidth)};function Mr(e,t,r,n){return[`Invalid ${se.default.red(n.key(e))} value.`,`Expected ${se.default.blue(r)},`,`but received ${t===tt?se.default.gray("nothing"):se.default.red(n.value(t))}.`].join(" ")}function Ur({text:e,list:t},r){let n=[];return e&&n.push(`- ${se.default.blue(e)}`),t&&n.push([`- ${se.default.blue(t.title)}:`].concat(t.values.map(o=>Ur(o,r-$r.length).replace(/^|\n/g,`$&${$r}`))).join(`
`)),zr(n,r)}function zr(e,t){if(e.length===1)return e[0];let[r,n]=e,[o,u]=e.map(i=>i.split(`
`,1)[0].length);return o>t&&o>u?n:r}var Nt=he(Pe(),1);var wt=[],Gr=[];function Ot(e,t){if(e===t)return 0;let r=e;e.length>t.length&&(e=t,t=r);let n=e.length,o=t.length;for(;n>0&&e.charCodeAt(~-n)===t.charCodeAt(~-o);)n--,o--;let u=0;for(;u<n&&e.charCodeAt(u)===t.charCodeAt(u);)u++;if(n-=u,o-=u,n===0)return o;let i,s,D,a,c=0,d=0;for(;c<n;)Gr[c]=e.charCodeAt(u+c),wt[c]=++c;for(;d<o;)for(i=t.charCodeAt(u+d),D=d++,s=d,c=0;c<n;c++)a=i===Gr[c]?D:D+1,D=wt[c],s=wt[c]=D>s?a>s?s+1:a:a>D?D+1:a;return s}var rt=(e,t,{descriptor:r,logger:n,schemas:o})=>{let u=[`Ignored unknown option ${Nt.default.yellow(r.pair({key:e,value:t}))}.`],i=Object.keys(o).sort().find(s=>Ot(e,s)<3);i&&u.push(`Did you mean ${Nt.default.blue(r.key(i))}?`),n.warn(u.join(" "))};var zu=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"];function Gu(e,t){let r=new e(t),n=Object.create(r);for(let o of zu)o in t&&(n[o]=Ku(t[o],r,w.prototype[o].length));return n}var w=class{static create(t){return Gu(this,t)}constructor(t){this.name=t.name}default(t){}expected(t){return"nothing"}validate(t,r){return!1}deprecated(t,r){return!1}forward(t,r){}redirect(t,r){}overlap(t,r,n){return t}preprocess(t,r){return t}postprocess(t,r){return pe}};function Ku(e,t,r){return typeof e=="function"?(...n)=>e(...n.slice(0,r-1),t,...n.slice(r-1)):()=>e}var nt=class extends w{constructor(t){super(t),this._sourceName=t.sourceName}expected(t){return t.schemas[this._sourceName].expected(t)}validate(t,r){return r.schemas[this._sourceName].validate(t,r)}redirect(t,r){return this._sourceName}};var ut=class extends w{expected(){return"anything"}validate(){return!0}};var ot=class extends w{constructor({valueSchema:t,name:r=t.name,...n}){super({...n,name:r}),this._valueSchema=t}expected(t){let{text:r,list:n}=t.normalizeExpectedResult(this._valueSchema.expected(t));return{text:r&&`an array of ${r}`,list:n&&{title:"an array of the following values",values:[{list:n}]}}}validate(t,r){if(!Array.isArray(t))return!1;let n=[];for(let o of t){let u=r.normalizeValidateResult(this._valueSchema.validate(o,r),o);u!==!0&&n.push(u.value)}return n.length===0?!0:{value:n}}deprecated(t,r){let n=[];for(let o of t){let u=r.normalizeDeprecatedResult(this._valueSchema.deprecated(o,r),o);u!==!1&&n.push(...u.map(({value:i})=>({value:[i]})))}return n}forward(t,r){let n=[];for(let o of t){let u=r.normalizeForwardResult(this._valueSchema.forward(o,r),o);n.push(...u.map(Kr))}return n}redirect(t,r){let n=[],o=[];for(let u of t){let i=r.normalizeRedirectResult(this._valueSchema.redirect(u,r),u);"remain"in i&&n.push(i.remain),o.push(...i.redirect.map(Kr))}return n.length===0?{redirect:o}:{redirect:o,remain:n}}overlap(t,r){return t.concat(r)}};function Kr({from:e,to:t}){return{from:[e],to:t}}var it=class extends w{expected(){return"true or false"}validate(t){return typeof t=="boolean"}};function qr(e,t){let r=Object.create(null);for(let n of e){let o=n[t];if(r[o])throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r[o]=n}return r}function Jr(e,t){let r=new Map;for(let n of e){let o=n[t];if(r.has(o))throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r.set(o,n)}return r}function Xr(){let e=Object.create(null);return t=>{let r=JSON.stringify(t);return e[r]?!0:(e[r]=!0,!1)}}function Zr(e,t){let r=[],n=[];for(let o of e)t(o)?r.push(o):n.push(o);return[r,n]}function Qr(e){return e===Math.floor(e)}function en(e,t){if(e===t)return 0;let r=typeof e,n=typeof t,o=["undefined","object","boolean","number","string"];return r!==n?o.indexOf(r)-o.indexOf(n):r!=="string"?Number(e)-Number(t):e.localeCompare(t)}function tn(e){return(...t)=>{let r=e(...t);return typeof r=="string"?new Error(r):r}}function Tt(e){return e===void 0?{}:e}function St(e){if(typeof e=="string")return{text:e};let{text:t,list:r}=e;return Hu((t||r)!==void 0,"Unexpected `expected` result, there should be at least one field."),r?{text:t,list:{title:r.title,values:r.values.map(St)}}:{text:t}}function vt(e,t){return e===!0?!0:e===!1?{value:t}:e}function Pt(e,t,r=!1){return e===!1?!1:e===!0?r?!0:[{value:t}]:"value"in e?[e]:e.length===0?!1:e}function Hr(e,t){return typeof e=="string"||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function st(e,t){return e===void 0?[]:Array.isArray(e)?e.map(r=>Hr(r,t)):[Hr(e,t)]}function Lt(e,t){let r=st(typeof e=="object"&&"redirect"in e?e.redirect:e,t);return r.length===0?{remain:t,redirect:r}:typeof e=="object"&&"remain"in e?{remain:e.remain,redirect:r}:{redirect:r}}function Hu(e,t){if(!e)throw new Error(t)}var Dt=class extends w{constructor(t){super(t),this._choices=Jr(t.choices.map(r=>r&&typeof r=="object"?r:{value:r}),"value")}expected({descriptor:t}){let r=Array.from(this._choices.keys()).map(i=>this._choices.get(i)).filter(({hidden:i})=>!i).map(i=>i.value).sort(en).map(t.value),n=r.slice(0,-2),o=r.slice(-2);return{text:n.concat(o.join(" or ")).join(", "),list:{title:"one of the following values",values:r}}}validate(t){return this._choices.has(t)}deprecated(t){let r=this._choices.get(t);return r&&r.deprecated?{value:t}:!1}forward(t){let r=this._choices.get(t);return r?r.forward:void 0}redirect(t){let r=this._choices.get(t);return r?r.redirect:void 0}};var at=class extends w{expected(){return"a number"}validate(t,r){return typeof t=="number"}};var ct=class extends at{expected(){return"an integer"}validate(t,r){return r.normalizeValidateResult(super.validate(t,r),t)===!0&&Qr(t)}};var Le=class extends w{expected(){return"a string"}validate(t){return typeof t=="string"}};var rn=te,nn=rt,un=Wr,on=Vr;var lt=class{constructor(t,r){let{logger:n=console,loggerPrintWidth:o=80,descriptor:u=rn,unknown:i=nn,invalid:s=un,deprecated:D=on,missing:a=()=>!1,required:c=()=>!1,preprocess:d=p=>p,postprocess:f=()=>pe}=r||{};this._utils={descriptor:u,logger:n||{warn:()=>{}},loggerPrintWidth:o,schemas:qr(t,"name"),normalizeDefaultResult:Tt,normalizeExpectedResult:St,normalizeDeprecatedResult:Pt,normalizeForwardResult:st,normalizeRedirectResult:Lt,normalizeValidateResult:vt},this._unknownHandler=i,this._invalidHandler=tn(s),this._deprecatedHandler=D,this._identifyMissing=(p,l)=>!(p in l)||a(p,l),this._identifyRequired=c,this._preprocess=d,this._postprocess=f,this.cleanHistory()}cleanHistory(){this._hasDeprecationWarned=Xr()}normalize(t){let r={},o=[this._preprocess(t,this._utils)],u=()=>{for(;o.length!==0;){let i=o.shift(),s=this._applyNormalization(i,r);o.push(...s)}};u();for(let i of Object.keys(this._utils.schemas)){let s=this._utils.schemas[i];if(!(i in r)){let D=Tt(s.default(this._utils));"value"in D&&o.push({[i]:D.value})}}u();for(let i of Object.keys(this._utils.schemas)){if(!(i in r))continue;let s=this._utils.schemas[i],D=r[i],a=s.postprocess(D,this._utils);a!==pe&&(this._applyValidation(a,i,s),r[i]=a)}return this._applyPostprocess(r),this._applyRequiredCheck(r),r}_applyNormalization(t,r){let n=[],{knownKeys:o,unknownKeys:u}=this._partitionOptionKeys(t);for(let i of o){let s=this._utils.schemas[i],D=s.preprocess(t[i],this._utils);this._applyValidation(D,i,s);let a=({from:p,to:l})=>{n.push(typeof l=="string"?{[l]:p}:{[l.key]:l.value})},c=({value:p,redirectTo:l})=>{let F=Pt(s.deprecated(p,this._utils),D,!0);if(F!==!1)if(F===!0)this._hasDeprecationWarned(i)||this._utils.logger.warn(this._deprecatedHandler(i,l,this._utils));else for(let{value:m}of F){let E={key:i,value:m};if(!this._hasDeprecationWarned(E)){let C=typeof l=="string"?{key:l,value:m}:l;this._utils.logger.warn(this._deprecatedHandler(E,C,this._utils))}}};st(s.forward(D,this._utils),D).forEach(a);let f=Lt(s.redirect(D,this._utils),D);if(f.redirect.forEach(a),"remain"in f){let p=f.remain;r[i]=i in r?s.overlap(r[i],p,this._utils):p,c({value:p})}for(let{from:p,to:l}of f.redirect)c({value:p,redirectTo:l})}for(let i of u){let s=t[i];this._applyUnknownHandler(i,s,r,(D,a)=>{n.push({[D]:a})})}return n}_applyRequiredCheck(t){for(let r of Object.keys(this._utils.schemas))if(this._identifyMissing(r,t)&&this._identifyRequired(r))throw this._invalidHandler(r,tt,this._utils)}_partitionOptionKeys(t){let[r,n]=Zr(Object.keys(t).filter(o=>!this._identifyMissing(o,t)),o=>o in this._utils.schemas);return{knownKeys:r,unknownKeys:n}}_applyValidation(t,r,n){let o=vt(n.validate(t,this._utils),t);if(o!==!0)throw this._invalidHandler(r,o.value,this._utils)}_applyUnknownHandler(t,r,n,o){let u=this._unknownHandler(t,r,this._utils);if(u)for(let i of Object.keys(u)){if(this._identifyMissing(i,u))continue;let s=u[i];i in this._utils.schemas?o(i,s):n[i]=s}}_applyPostprocess(t){let r=this._postprocess(t,this._utils);if(r!==pe){if(r.delete)for(let n of r.delete)delete t[n];if(r.override){let{knownKeys:n,unknownKeys:o}=this._partitionOptionKeys(r.override);for(let u of n){let i=r.override[u];this._applyValidation(i,u,this._utils.schemas[u]),t[u]=i}for(let u of o){let i=r.override[u];this._applyUnknownHandler(u,i,t,(s,D)=>{let a=this._utils.schemas[s];this._applyValidation(D,s,a),t[s]=D})}}}}};var It;function Ju(e,t,{logger:r=!1,isCLI:n=!1,passThrough:o=!1,FlagSchema:u,descriptor:i}={}){if(n){if(!u)throw new Error("'FlagSchema' option is required.");if(!i)throw new Error("'descriptor' option is required.")}else i=te;let s=o?Array.isArray(o)?(f,p)=>o.includes(f)?{[f]:p}:void 0:(f,p)=>({[f]:p}):(f,p,l)=>{let{_:F,...m}=l.schemas;return rt(f,p,{...l,schemas:m})},D=Xu(t,{isCLI:n,FlagSchema:u}),a=new lt(D,{logger:r,unknown:s,descriptor:i}),c=r!==!1;c&&It&&(a._hasDeprecationWarned=It);let d=a.normalize(e);return c&&(It=a._hasDeprecationWarned),d}function Xu(e,{isCLI:t,FlagSchema:r}){let n=[];t&&n.push(ut.create({name:"_"}));for(let o of e)n.push(Zu(o,{isCLI:t,optionInfos:e,FlagSchema:r})),o.alias&&t&&n.push(nt.create({name:o.alias,sourceName:o.name}));return n}function Zu(e,{isCLI:t,optionInfos:r,FlagSchema:n}){let{name:o}=e,u={name:o},i,s={};switch(e.type){case"int":i=ct,t&&(u.preprocess=Number);break;case"string":i=Le;break;case"choice":i=Dt,u.choices=e.choices.map(D=>D!=null&&D.redirect?{...D,redirect:{to:{key:e.name,value:D.redirect}}}:D);break;case"boolean":i=it;break;case"flag":i=n,u.flags=r.flatMap(D=>[D.alias,D.description&&D.name,D.oppositeDescription&&`no-${D.name}`].filter(Boolean));break;case"path":i=Le;break;default:throw new Error(`Unexpected type ${e.type}`)}if(e.exception?u.validate=(D,a,c)=>e.exception(D)||a.validate(D,c):u.validate=(D,a,c)=>D===void 0||a.validate(D,c),e.redirect&&(s.redirect=D=>D?{to:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(s.deprecated=!0),t&&!e.array){let D=u.preprocess||(a=>a);u.preprocess=(a,c,d)=>c.preprocess(D(Array.isArray(a)?y(!1,a,-1):a),d)}return e.array?ot.create({...t?{preprocess:D=>Array.isArray(D)?D:[D]}:{},...s,valueSchema:i.create(u)}):i.create({...u,...s})}var sn=Ju;function Rt(e,t){if(!t)throw new Error("parserName is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.parsers&&Object.prototype.hasOwnProperty.call(o.parsers,t))return o}let r=`Couldn't resolve parser "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function Dn(e,t){if(!t)throw new Error("astFormat is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.printers&&Object.prototype.hasOwnProperty.call(o.printers,t))return o}let r=`Couldn't find plugin for AST format "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function ft({plugins:e,parser:t}){let r=Rt(e,t);return Yt(r,t)}function Yt(e,t){let r=e.parsers[t];return typeof r=="function"?r():r}function an(e,t){let r=e.printers[t];return typeof r=="function"?r():r}var cn={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null};async function Qu(e,t={}){var d;let r={...e};if(!r.parser)if(r.filepath){if(r.parser=Rr(r,{physicalFile:r.filepath}),!r.parser)throw new ve(`No parser could be inferred for file "${r.filepath}".`)}else throw new ve("No parser and no file path given, couldn't infer a parser.");let n=et({plugins:e.plugins,showDeprecated:!0}).options,o={...cn,...Object.fromEntries(n.filter(f=>f.default!==void 0).map(f=>[f.name,f.default]))},u=Rt(r.plugins,r.parser),i=await Yt(u,r.parser);r.astFormat=i.astFormat,r.locEnd=i.locEnd,r.locStart=i.locStart;let s=(d=u.printers)!=null&&d[i.astFormat]?u:Dn(r.plugins,i.astFormat),D=await an(s,i.astFormat);r.printer=D;let a=s.defaultOptions?Object.fromEntries(Object.entries(s.defaultOptions).filter(([,f])=>f!==void 0)):{},c={...o,...a};for(let[f,p]of Object.entries(c))(r[f]===null||r[f]===void 0)&&(r[f]=p);return r.parser==="json"&&(r.trailingComma="none"),sn(r,n,{passThrough:Object.keys(cn),...t})}var re=Qu;var ln=new Set(["tokens","comments","parent","enclosingNode","precedingNode","followingNode"]),eo=e=>Object.keys(e).filter(t=>!ln.has(t));function to(e){return e?t=>e(t,ln):eo}var H=to;function ro(e,t){let{printer:{massageAstNode:r,getVisitorKeys:n}}=t;if(!r)return e;let o=H(n),u=r.ignoredProperties??new Set;return i(e);function i(s,D){if(!(s!==null&&typeof s=="object"))return s;if(Array.isArray(s))return s.map(f=>i(f,D)).filter(Boolean);let a={},c=new Set(o(s));for(let f in s)!Object.prototype.hasOwnProperty.call(s,f)||u.has(f)||(c.has(f)?a[f]=i(s[f],s):a[f]=s[f]);let d=r(s,a,D);if(d!==null)return d??a}}var fn=ro;var An=he(yn(),1);async function co(e,t){let r=await ft(t),n=r.preprocess?r.preprocess(e,t):e;t.originalText=n;let o;try{o=await r.parse(n,t,t)}catch(u){lo(u,e)}return{text:n,ast:o}}function lo(e,t){let{loc:r}=e;if(r){let n=(0,An.codeFrameColumns)(t,r,{highlightCode:!0});throw e.message+=`
`+n,e.codeFrame=n,e}throw e}var De=co;var Ie,$t,de,pt,Vt=class{constructor(t){ht(this,Ie);ht(this,de);this.stack=[t]}get key(){let{stack:t,siblings:r}=this;return y(!1,t,r===null?-2:-4)??null}get index(){return this.siblings===null?null:y(!1,this.stack,-2)}get node(){return y(!1,this.stack,-1)}get parent(){return this.getNode(1)}get grandparent(){return this.getNode(2)}get isInArray(){return this.siblings!==null}get siblings(){let{stack:t}=this,r=y(!1,t,-3);return Array.isArray(r)?r:null}get next(){let{siblings:t}=this;return t===null?null:t[this.index+1]}get previous(){let{siblings:t}=this;return t===null?null:t[this.index-1]}get isFirst(){return this.index===0}get isLast(){let{siblings:t,index:r}=this;return t!==null&&r===t.length-1}get isRoot(){return this.stack.length===1}get root(){return this.stack[0]}get ancestors(){return[...ce(this,de,pt).call(this)]}getName(){let{stack:t}=this,{length:r}=t;return r>1?y(!1,t,-2):null}getValue(){return y(!1,this.stack,-1)}getNode(t=0){let r=ce(this,Ie,$t).call(this,t);return r===-1?null:this.stack[r]}getParentNode(t=0){return this.getNode(t+1)}call(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{return t(this)}finally{n.length=o}}callParent(t,r=0){let n=ce(this,Ie,$t).call(this,r+1),o=this.stack.splice(n+1);try{return t(this)}finally{this.stack.push(...o)}}each(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{for(let i=0;i<u.length;++i)n.push(i,u[i]),t(this,i,u),n.length-=2}finally{n.length=o}}map(t,...r){let n=[];return this.each((o,u,i)=>{n[u]=t(o,u,i)},...r),n}match(...t){let r=this.stack.length-1,n=null,o=this.stack[r--];for(let u of t){if(o===void 0)return!1;let i=null;if(typeof n=="number"&&(i=n,n=this.stack[r--],o=this.stack[r--]),u&&!u(o,n,i))return!1;n=this.stack[r--],o=this.stack[r--]}return!0}findAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return r}hasAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return!0;return!1}};Ie=new WeakSet,$t=function(t){let{stack:r}=this;for(let n=r.length-1;n>=0;n-=2)if(!Array.isArray(r[n])&&--t<0)return n;return-1},de=new WeakSet,pt=function*(){let{stack:t}=this;for(let r=t.length-3;r>=0;r-=2){let n=t[r];Array.isArray(n)||(yield n)}};var Bn=Vt;var _n=new Proxy(()=>{},{get:()=>_n}),Re=_n;function me(e){return(t,r,n)=>{let o=!!(n!=null&&n.backwards);if(r===!1)return!1;let{length:u}=t,i=r;for(;i>=0&&i<u;){let s=t.charAt(i);if(e instanceof RegExp){if(!e.test(s))return i}else if(!e.includes(s))return i;o?i--:i++}return i===-1||i===u?i:!1}}var xn=me(/\s/),N=me(" 	"),dt=me(",; 	"),mt=me(/[^\n\r]/);function fo(e,t,r){let n=!!(r!=null&&r.backwards);if(t===!1)return!1;let o=e.charAt(t);if(n){if(e.charAt(t-1)==="\r"&&o===`
`)return t-2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t-1}else{if(o==="\r"&&e.charAt(t+1)===`
`)return t+2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t+1}return t}var Y=fo;function Fo(e,t,r={}){let n=N(e,r.backwards?t-1:t,r),o=Y(e,n,r);return n!==o}var V=Fo;function po(e){return Array.isArray(e)&&e.length>0}var Mt=po;function mo(e){return e!==null&&typeof e=="object"}var kn=mo;function*Wt(e,t){let{getVisitorKeys:r,filter:n=()=>!0}=t,o=u=>kn(u)&&n(u);for(let u of r(e)){let i=e[u];if(Array.isArray(i))for(let s of i)o(s)&&(yield s);else o(i)&&(yield i)}}function*bn(e,t){let r=[e];for(let n=0;n<r.length;n++){let o=r[n];for(let u of Wt(o,t))yield u,r.push(u)}}function Eo(e){let t=e.type||e.kind||"(unknown type)",r=String(e.name||e.id&&(typeof e.id=="object"?e.id.name:e.id)||e.key&&(typeof e.key=="object"?e.key.name:e.key)||e.value&&(typeof e.value=="object"?"":String(e.value))||e.operator||"");return r.length>20&&(r=r.slice(0,19)+"\u2026"),t+(r?" "+r:"")}function Ut(e,t){(e.comments??(e.comments=[])).push(t),t.printed=!1,t.nodeDescription=Eo(e)}function ne(e,t){t.leading=!0,t.trailing=!1,Ut(e,t)}function X(e,t,r){t.leading=!1,t.trailing=!1,r&&(t.marker=r),Ut(e,t)}function ue(e,t){t.leading=!1,t.trailing=!0,Ut(e,t)}var zt=new WeakMap;function Et(e,t){if(zt.has(e))return zt.get(e);let{printer:{getCommentChildNodes:r,canAttachComment:n,getVisitorKeys:o},locStart:u,locEnd:i}=t;if(!n)return[];let s=((r==null?void 0:r(e,t))??[...Wt(e,{getVisitorKeys:H(o)})]).flatMap(D=>n(D)?[D]:Et(D,t));return s.sort((D,a)=>u(D)-u(a)||i(D)-i(a)),zt.set(e,s),s}function On(e,t,r,n){let{locStart:o,locEnd:u}=r,i=o(t),s=u(t),D=Et(e,r),a,c,d=0,f=D.length;for(;d<f;){let p=d+f>>1,l=D[p],F=o(l),m=u(l);if(F<=i&&s<=m)return On(l,t,r,l);if(m<=i){a=l,d=p+1;continue}if(s<=F){c=l,f=p;continue}throw new Error("Comment location overlaps with node location")}if((n==null?void 0:n.type)==="TemplateLiteral"){let{quasis:p}=n,l=Kt(p,t,r);a&&Kt(p,a,r)!==l&&(a=null),c&&Kt(p,c,r)!==l&&(c=null)}return{enclosingNode:n,precedingNode:a,followingNode:c}}var Gt=()=>!1;function Nn(e,t){let{comments:r}=e;if(delete e.comments,!Mt(r)||!t.printer.canAttachComment)return;let n=[],{locStart:o,locEnd:u,printer:{experimentalFeatures:{avoidAstMutation:i=!1}={},handleComments:s={}},originalText:D}=t,{ownLine:a=Gt,endOfLine:c=Gt,remaining:d=Gt}=s,f=r.map((p,l)=>({...On(e,p,t),comment:p,text:D,options:t,ast:e,isLastComment:r.length-1===l}));for(let[p,l]of f.entries()){let{comment:F,precedingNode:m,enclosingNode:E,followingNode:C,text:g,options:h,ast:B,isLastComment:Z}=l;if(h.parser==="json"||h.parser==="json5"||h.parser==="__js_expression"||h.parser==="__ts_expression"||h.parser==="__vue_expression"||h.parser==="__vue_ts_expression"){if(o(F)-o(B)<=0){ne(B,F);continue}if(u(F)-u(B)>=0){ue(B,F);continue}}let $;if(i?$=[l]:(F.enclosingNode=E,F.precedingNode=m,F.followingNode=C,$=[F,g,h,B,Z]),Co(g,h,f,p))F.placement="ownLine",a(...$)||(C?ne(C,F):m?ue(m,F):E?X(E,F):X(B,F));else if(ho(g,h,f,p))F.placement="endOfLine",c(...$)||(m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F));else if(F.placement="remaining",!d(...$))if(m&&C){let Q=n.length;Q>0&&n[Q-1].followingNode!==C&&wn(n,h),n.push(l)}else m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F)}if(wn(n,t),!i)for(let p of r)delete p.precedingNode,delete p.enclosingNode,delete p.followingNode}var Tn=e=>!/[\S\n\u2028\u2029]/.test(e);function Co(e,t,r,n){let{comment:o,precedingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=i(o);if(u)for(let a=n-1;a>=0;a--){let{comment:c,precedingNode:d}=r[a];if(d!==u||!Tn(e.slice(s(c),D)))break;D=i(c)}return V(e,D,{backwards:!0})}function ho(e,t,r,n){let{comment:o,followingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=s(o);if(u)for(let a=n+1;a<r.length;a++){let{comment:c,followingNode:d}=r[a];if(d!==u||!Tn(e.slice(D,i(c))))break;D=s(c)}return V(e,D)}function wn(e,t){var s,D;let r=e.length;if(r===0)return;let{precedingNode:n,followingNode:o}=e[0],u=t.locStart(o),i;for(i=r;i>0;--i){let{comment:a,precedingNode:c,followingNode:d}=e[i-1];Re.strictEqual(c,n),Re.strictEqual(d,o);let f=t.originalText.slice(t.locEnd(a),u);if(((D=(s=t.printer).isGap)==null?void 0:D.call(s,f,t))??/^[\s(]*$/.test(f))u=t.locStart(a);else break}for(let[a,{comment:c}]of e.entries())a<i?ue(n,c):ne(o,c);for(let a of[n,o])a.comments&&a.comments.length>1&&a.comments.sort((c,d)=>t.locStart(c)-t.locStart(d));e.length=0}function Kt(e,t,r){let n=r.locStart(t)-1;for(let o=1;o<e.length;++o)if(n<r.locStart(e[o]))return o-1;return 0}function go(e,t){let r=t-1;r=N(e,r,{backwards:!0}),r=Y(e,r,{backwards:!0}),r=N(e,r,{backwards:!0});let n=Y(e,r,{backwards:!0});return r!==n}var Ye=go;function Sn(e,t){let r=e.node;return r.printed=!0,t.printer.printComment(e,t)}function yo(e,t){var c;let r=e.node,n=[Sn(e,t)],{printer:o,originalText:u,locStart:i,locEnd:s}=t;if((c=o.isBlockComment)==null?void 0:c.call(o,r)){let d=V(u,s(r))?V(u,i(r),{backwards:!0})?G:Ke:" ";n.push(d)}else n.push(G);let a=Y(u,N(u,s(r)));return a!==!1&&V(u,a)&&n.push(G),n}function Ao(e,t,r){var a;let n=e.node,o=Sn(e,t),{printer:u,originalText:i,locStart:s}=t,D=(a=u.isBlockComment)==null?void 0:a.call(u,n);if(r!=null&&r.hasLineSuffix&&!(r!=null&&r.isBlock)||V(i,s(n),{backwards:!0})){let c=Ye(i,s(n));return{doc:Be([G,c?G:"",o]),isBlock:D,hasLineSuffix:!0}}return!D||r!=null&&r.hasLineSuffix?{doc:[Be([" ",o]),le],isBlock:D,hasLineSuffix:!0}:{doc:[" ",o],isBlock:D,hasLineSuffix:!1}}function Bo(e,t){let r=e.node;if(!r)return{};let n=t[Symbol.for("printedComments")];if((r.comments||[]).filter(D=>!n.has(D)).length===0)return{leading:"",trailing:""};let u=[],i=[],s;return e.each(()=>{let D=e.node;if(n!=null&&n.has(D))return;let{leading:a,trailing:c}=D;a?u.push(yo(e,t)):c&&(s=Ao(e,t,s),i.push(s.doc))},"comments"),{leading:u,trailing:i}}function vn(e,t,r){let{leading:n,trailing:o}=Bo(e,r);return!n&&!o?t:Ze(t,u=>[n,u,o])}function Pn(e){let{[Symbol.for("comments")]:t,[Symbol.for("printedComments")]:r}=e;for(let n of t){if(!n.printed&&!r.has(n))throw new Error('Comment "'+n.value.trim()+'" was not printed. Please report this error!');delete n.printed}}async function Ln(e,t,r,n,o){let{embeddedLanguageFormatting:u,printer:{embed:i,hasPrettierIgnore:s=()=>!1,getVisitorKeys:D}}=r;if(!i||u!=="auto")return;if(i.length>2)throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");let a=H(i.getVisitorKeys??D),c=[];p();let d=e.stack;for(let{print:l,node:F,pathStack:m}of c)try{e.stack=m;let E=await l(f,t,e,r);E&&o.set(F,E)}catch(E){if(globalThis.PRETTIER_DEBUG)throw E}e.stack=d;function f(l,F){return _o(l,F,r,n)}function p(){let{node:l}=e;if(l===null||typeof l!="object"||s(e))return;for(let m of a(l))Array.isArray(l[m])?e.each(p,m):e.call(p,m);let F=i(e,r);if(F){if(typeof F=="function"){c.push({print:F,node:l,pathStack:[...e.stack]});return}o.set(l,F)}}}async function _o(e,t,r,n){let o=await re({...r,...t,parentParser:r.parser,originalText:e},{passThrough:!0}),{ast:u}=await De(e,o),i=await n(u,o);return Xe(i)}function xo(e){return()=>{}}var In=xo;function ko(e,t){let{originalText:r,[Symbol.for("comments")]:n,locStart:o,locEnd:u,[Symbol.for("printedComments")]:i}=t,{node:s}=e,D=o(s),a=u(s);for(let c of n)o(c)>=D&&u(c)<=a&&i.add(c);return r.slice(D,a)}var Rn=ko;async function je(e,t){({ast:e}=await Ht(e,t));let r=new Map,n=new Bn(e),o=In(t),u=new Map;await Ln(n,s,t,je,u);let i=await Yn(n,t,s,void 0,u);return Pn(t),i;function s(a,c){return a===void 0||a===n?D(c):Array.isArray(a)?n.call(()=>D(c),...a):n.call(()=>D(c),a)}function D(a){o(n);let c=n.node;if(c==null)return"";let d=c&&typeof c=="object"&&a===void 0;if(d&&r.has(c))return r.get(c);let f=Yn(n,t,s,a,u);return d&&r.set(c,f),f}}function Yn(e,t,r,n,o){var D;let{node:u}=e,{printer:i}=t,s;return(D=i.hasPrettierIgnore)!=null&&D.call(i,e)?s=Rn(e,t):o.has(u)?s=o.get(u):s=i.print(e,t,r,n),u===t.cursorNode&&(s=Ze(s,a=>[xe,a,xe])),i.printComment&&(!i.willPrintOwnComments||!i.willPrintOwnComments(e,t))&&(s=vn(e,s,t)),s}async function Ht(e,t){let r=e.comments??[];t[Symbol.for("comments")]=r,t[Symbol.for("tokens")]=e.tokens??[],t[Symbol.for("printedComments")]=new Set,Nn(e,t);let{printer:{preprocess:n}}=t;return e=n?await n(e,t):e,{ast:e,comments:r}}var bo=({parser:e})=>e==="json"||e==="json5"||e==="json-stringify";function wo(e,t){let r=[e.node,...e.parentNodes],n=new Set([t.node,...t.parentNodes]);return r.find(o=>$n.has(o.type)&&n.has(o))}function jn(e){let t=e.length-1;for(;;){let r=e[t];if((r==null?void 0:r.type)==="Program"||(r==null?void 0:r.type)==="File")t--;else break}return e.slice(0,t+1)}function Oo(e,t,{locStart:r,locEnd:n}){let o=e.node,u=t.node;if(o===u)return{startNode:o,endNode:u};let i=r(e.node);for(let D of jn(t.parentNodes))if(r(D)>=i)u=D;else break;let s=n(t.node);for(let D of jn(e.parentNodes)){if(n(D)<=s)o=D;else break;if(o===u)break}return{startNode:o,endNode:u}}function qt(e,t,r,n,o=[],u){let{locStart:i,locEnd:s}=r,D=i(e),a=s(e);if(!(t>a||t<D||u==="rangeEnd"&&t===D||u==="rangeStart"&&t===a)){for(let c of Et(e,r)){let d=qt(c,t,r,n,[e,...o],u);if(d)return d}if(!n||n(e,o[0]))return{node:e,parentNodes:o}}}function No(e,t){return t!=="DeclareExportDeclaration"&&e!=="TypeParameterDeclaration"&&(e==="Directive"||e==="TypeAlias"||e==="TSExportAssignment"||e.startsWith("Declare")||e.startsWith("TSDeclare")||e.endsWith("Statement")||e.endsWith("Declaration"))}var $n=new Set(["JsonRoot","ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral","UnaryExpression","TemplateLiteral"]),To=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function Vn(e,t,r){if(!t)return!1;switch(e.parser){case"flow":case"babel":case"babel-flow":case"babel-ts":case"typescript":case"acorn":case"espree":case"meriyah":case"__babel_estree":return No(t.type,r==null?void 0:r.type);case"json":case"json5":case"json-stringify":return $n.has(t.type);case"graphql":return To.has(t.kind);case"vue":return t.tag!=="root"}return!1}function Mn(e,t,r){let{rangeStart:n,rangeEnd:o,locStart:u,locEnd:i}=t;Re.ok(o>n);let s=e.slice(n,o).search(/\S/),D=s===-1;if(!D)for(n+=s;o>n&&!/\S/.test(e[o-1]);--o);let a=qt(r,n,t,(p,l)=>Vn(t,p,l),[],"rangeStart"),c=D?a:qt(r,o,t,p=>Vn(t,p),[],"rangeEnd");if(!a||!c)return{rangeStart:0,rangeEnd:0};let d,f;if(bo(t)){let p=wo(a,c);d=p,f=p}else({startNode:d,endNode:f}=Oo(a,c,t));return{rangeStart:Math.min(u(d),u(f)),rangeEnd:Math.max(i(d),i(f))}}function So(e,t){let{cursorOffset:r,locStart:n,locEnd:o}=t,u=H(t.printer.getVisitorKeys),i=D=>n(D)<=r&&o(D)>=r,s=e;for(let D of bn(e,{getVisitorKeys:u,filter:i}))s=D;return s}var Wn=So;var Hn="\uFEFF",Un=Symbol("cursor");async function qn(e,t,r=0){if(!e||e.trim().length===0)return{formatted:"",cursorOffset:-1,comments:[]};let{ast:n,text:o}=await De(e,t);t.cursorOffset>=0&&(t.cursorNode=Wn(n,t));let u=await je(n,t,r);r>0&&(u=qe([G,u],r,t.tabWidth));let i=fe(u,t);if(r>0){let D=i.formatted.trim();i.cursorNodeStart!==void 0&&(i.cursorNodeStart-=i.formatted.indexOf(D)),i.formatted=D+be(t.endOfLine)}let s=t[Symbol.for("comments")];if(t.cursorOffset>=0){let D,a,c,d,f;if(t.cursorNode&&i.cursorNodeText?(D=t.locStart(t.cursorNode),a=o.slice(D,t.locEnd(t.cursorNode)),c=t.cursorOffset-D,d=i.cursorNodeStart,f=i.cursorNodeText):(D=0,a=o,c=t.cursorOffset,d=0,f=i.formatted),a===f)return{formatted:i.formatted,cursorOffset:d+c,comments:s};let p=a.split("");p.splice(c,0,Un);let l=f.split(""),F=(0,Kn.diffArrays)(p,l),m=d;for(let E of F)if(E.removed){if(E.value.includes(Un))break}else m+=E.count;return{formatted:i.formatted,cursorOffset:m,comments:s}}return{formatted:i.formatted,cursorOffset:-1,comments:s}}async function vo(e,t){let{ast:r,text:n}=await De(e,t),{rangeStart:o,rangeEnd:u}=Mn(n,t,r),i=n.slice(o,u),s=Math.min(o,n.lastIndexOf(`
`,o)+1),D=n.slice(s,o).match(/^\s*/)[0],a=Fe(D,t.tabWidth),c=await qn(i,{...t,rangeStart:0,rangeEnd:Number.POSITIVE_INFINITY,cursorOffset:t.cursorOffset>o&&t.cursorOffset<=u?t.cursorOffset-o:-1,endOfLine:"lf"},a),d=c.formatted.trimEnd(),{cursorOffset:f}=t;f>u?f+=d.length-i.length:c.cursorOffset>=0&&(f=c.cursorOffset+o);let p=n.slice(0,o)+d+n.slice(u);if(t.endOfLine!=="lf"){let l=be(t.endOfLine);f>=0&&l===`\r
`&&(f+=_t(p.slice(0,f),`
`)),p=ee(!1,p,`
`,l)}return{formatted:p,cursorOffset:f,comments:c.comments}}function Jt(e,t,r){return typeof t!="number"||Number.isNaN(t)||t<0||t>e.length?r:t}function zn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o}=t;return r=Jt(e,r,-1),n=Jt(e,n,0),o=Jt(e,o,e.length),{...t,cursorOffset:r,rangeStart:n,rangeEnd:o}}function Jn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u}=zn(e,t),i=e.charAt(0)===Hn;if(i&&(e=e.slice(1),r--,n--,o--),u==="auto"&&(u=hr(e)),e.includes("\r")){let s=D=>_t(e.slice(0,Math.max(D,0)),`\r
`);r-=s(r),n-=s(n),o-=s(o),e=gr(e)}return{hasBOM:i,text:e,options:zn(e,{...t,cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u})}}async function Gn(e,t){let r=await ft(t);return!r.hasPragma||r.hasPragma(e)}async function Xt(e,t){let{hasBOM:r,text:n,options:o}=Jn(e,await re(t));if(o.rangeStart>=o.rangeEnd&&n!==""||o.requirePragma&&!await Gn(n,o))return{formatted:e,cursorOffset:t.cursorOffset,comments:[]};let u;return o.rangeStart>0||o.rangeEnd<n.length?u=await vo(n,o):(!o.requirePragma&&o.insertPragma&&o.printer.insertPragma&&!await Gn(n,o)&&(n=o.printer.insertPragma(n)),u=await qn(n,o)),r&&(u.formatted=Hn+u.formatted,u.cursorOffset>=0&&u.cursorOffset++),u}async function Xn(e,t,r){let{text:n,options:o}=Jn(e,await re(t)),u=await De(n,o);return r&&(r.preprocessForPrint&&(u.ast=await Ht(u.ast,o)),r.massage&&(u.ast=fn(u.ast,o))),u}async function Zn(e,t){t=await re(t);let r=await je(e,t);return fe(r,t)}async function Qn(e,t){let r=Pr(e),{formatted:n}=await Xt(r,{...t,parser:"__js_expression"});return n}async function eu(e,t){t=await re(t);let{ast:r}=await De(e,t);return je(r,t)}async function tu(e,t){return fe(e,await re(t))}var Qt={};We(Qt,{addDanglingComment:()=>X,addLeadingComment:()=>ne,addTrailingComment:()=>ue,getAlignmentSize:()=>Fe,getIndentSize:()=>nu,getMaxContinuousCount:()=>ru,getNextNonSpaceNonCommentCharacter:()=>iu,getNextNonSpaceNonCommentCharacterIndex:()=>Go,getStringWidth:()=>we,hasNewline:()=>V,hasNewlineInRange:()=>uu,hasSpaces:()=>ou,isNextLineEmpty:()=>Jo,isNextLineEmptyAfterIndex:()=>Ct,isPreviousLineEmpty:()=>Ho,makeString:()=>su,skip:()=>me,skipEverythingButNewLine:()=>mt,skipInlineComment:()=>Ee,skipNewline:()=>Y,skipSpaces:()=>N,skipToLineEnd:()=>dt,skipTrailingComment:()=>Ce,skipWhitespace:()=>xn});function Lo(e,t){if(t===!1)return!1;if(e.charAt(t)==="/"&&e.charAt(t+1)==="*"){for(let r=t+2;r<e.length;++r)if(e.charAt(r)==="*"&&e.charAt(r+1)==="/")return r+2}return t}var Ee=Lo;function Io(e,t){return t===!1?!1:e.charAt(t)==="/"&&e.charAt(t+1)==="/"?mt(e,t):t}var Ce=Io;function Ro(e,t){let r=null,n=t;for(;n!==r;)r=n,n=N(e,n),n=Ee(e,n),n=Ce(e,n),n=Y(e,n);return n}var Ve=Ro;function Yo(e,t){let r=null,n=t;for(;n!==r;)r=n,n=dt(e,n),n=Ee(e,n),n=N(e,n);return n=Ce(e,n),n=Y(e,n),n!==!1&&V(e,n)}var Ct=Yo;function Zt(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function jo(e,t){let r=e.match(new RegExp(`(${Zt(t)})+`,"g"));return r===null?0:r.reduce((n,o)=>Math.max(n,o.length/t.length),0)}var ru=jo;function Vo(e,t){let r=e.lastIndexOf(`
`);return r===-1?0:Fe(e.slice(r+1).match(/^[\t ]*/)[0],t)}var nu=Vo;function $o(e,t,r){for(let n=t;n<r;++n)if(e.charAt(n)===`
`)return!0;return!1}var uu=$o;function Mo(e,t,r={}){return N(e,r.backwards?t-1:t,r)!==t}var ou=Mo;function Wo(e,t){let r=Ve(e,t);return r===!1?"":e.charAt(r)}var iu=Wo;function Uo(e,t,r){let n=t==='"'?"'":'"',u=ee(!1,e,/\\(.)|(["'])/gs,(i,s,D)=>s===n?s:D===t?"\\"+D:D||(r&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s)?s:"\\"+s));return t+u+t}var su=Uo;function zo(e,t,r){return Ve(e,r(t))}function Go(e,t){return arguments.length===2||typeof t=="number"?Ve(e,t):zo(...arguments)}function Ko(e,t,r){return Ye(e,r(t))}function Ho(e,t){return arguments.length===2||typeof t=="number"?Ye(e,t):Ko(...arguments)}function qo(e,t,r){return Ct(e,r(t))}function Jo(e,t){return arguments.length===2||typeof t=="number"?Ct(e,t):qo(...arguments)}var er={};We(er,{builders:()=>Xo,printer:()=>Zo,utils:()=>Qo});var Xo={join:ke,line:Ke,softline:Er,hardline:G,literalline:He,group:At,conditionalGroup:fr,fill:Ge,lineSuffix:Be,lineSuffixBoundary:dr,cursor:xe,breakParent:le,ifBreak:Fr,trim:mr,indent:ie,indentIfBreak:pr,align:oe,addAlignmentToDoc:qe,markAsRoot:cr,dedentToRoot:ar,dedent:lr,hardlineWithoutBreakParent:_e,literallineWithoutBreakParent:Bt,label:Cr,concat:e=>e},Zo={printDocToString:fe},Qo={willBreak:wr,traverseDoc:Ae,findInDoc:Je,mapDoc:Ne,removeLines:Nr,stripTrailingHardline:Xe,replaceEndOfLine:Tr,canBreak:Sr};var Du="3.1.1";function ae(e,t=1){return async(...r)=>{let n=r[t]??{},o=n.plugins??[];return r[t]={...n,plugins:Array.isArray(o)?o:Object.values(o)},e(...r)}}var au=ae(Xt);async function cu(e,t){let{formatted:r}=await au(e,{...t,cursorOffset:-1});return r}async function ei(e,t){return await cu(e,t)===e}var ti=ae(et,0),ri={parse:ae(Xn),formatAST:ae(Zn),formatDoc:ae(Qn),printToDoc:ae(eu),printDocToString:ae(tu)};var qc=tr;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.css */ "./src/input.css");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _util_elementCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/elementCreator */ "./src/util/elementCreator.js");
/* harmony import */ var _util_setFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/setFunctions */ "./src/util/setFunctions.js");
/* harmony import */ var _util_createObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/createObjects */ "./src/util/createObjects.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoProject */ "./src/todoProject.js");
/* harmony import */ var _util_removeWarning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/removeWarning */ "./src/util/removeWarning.js");
/* harmony import */ var _generateContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generateContent */ "./src/generateContent.js");
/* harmony import */ var _util_generateWarning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/generateWarning */ "./src/util/generateWarning.js");
/* harmony import */ var _util_generateFormOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/generateFormOptions */ "./src/util/generateFormOptions.js");
/* harmony import */ var _util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/toggleClasses */ "./src/util/toggleClasses.js");
/* harmony import */ var _util_generateNavElements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/generateNavElements */ "./src/util/generateNavElements.js");
/* harmony import */ var _util_displayNavOptionals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util/displayNavOptionals */ "./src/util/displayNavOptionals.js");
/* harmony import */ var _util_elementReset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/elementReset */ "./src/util/elementReset.js");
/* harmony import */ var _util_getTaskElemets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./util/getTaskElemets */ "./src/util/getTaskElemets.js");
/* harmony import */ var _util_userInputsGetter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/userInputsGetter */ "./src/util/userInputsGetter.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _util_displayFormOptionals__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util/displayFormOptionals */ "./src/util/displayFormOptionals.js");
/* harmony import */ var _util_displayElements__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util/displayElements */ "./src/util/displayElements.js");
/* harmony import */ var _util_setDefaultProjectOption__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/setDefaultProjectOption */ "./src/util/setDefaultProjectOption.js");
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prettier */ "./node_modules/prettier/standalone.mjs");
/* harmony import */ var _generateTask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./generateTask */ "./src/generateTask.js");
/* harmony import */ var _util_displayNavForm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/displayNavForm */ "./src/util/displayNavForm.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


























var taskSet = new Set();
var completedtaskSet = new Set();
var tagSet = new Set();
var prioritySet = new Set();
var projectNameSet = new Set();
(0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.addItems)(prioritySet, ["Some Other Day", "Not Today", "Today", "In an Hour", "In 5 Minutes", "Right About Now", "Should've Done Yesterday"]);
window.addEventListener("load", function (e) {
  var body = document.querySelector("body");
  body.classList.add("body");
  (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(body, (0,_homepage__WEBPACK_IMPORTED_MODULE_5__.homepageGenerator)());

  // const addProjectBtn = document.querySelector(".");
  var navAddBtns = document.querySelectorAll(".navSectionContainerAddBtn");
  var projectContentContainer = document.querySelector(".projectContentContainer");
  var projectFormText = document.querySelector(".addProjectFormInput");
  var projectListContent = document.querySelector(".projectListContainer");
  var labelListContent = document.querySelector(".labelsContentContainer");
  var todayPage = document.querySelector(".today");
  var content = document.querySelector("#content");
  var projectForm = document.querySelector(".addProjectForm");
  var projectFormExpander = document.querySelector(".addProjectBtn");
  var projectCollapseBtn = document.querySelector(".projectCollapseBtn");
  var projectInput = document.querySelector(".projectNameInput");
  var projectAddBtn = document.querySelector(".projectAddBtn");
  var projectCancelBtn = document.querySelector(".projectCancelBtn");
  var labelForm = document.querySelector(".addLabelForm");
  var labelFormExpander = document.querySelector(".addLabelBtn");
  var labelCollapseBtn = document.querySelector(".labelCollapseBtn");
  var labelInput = document.querySelector(".labelNameInput");
  var labelAddBtn = document.querySelector(".labelAddBtn");
  var labelCancelBtn = document.querySelector(".labelCancelBtn");
  var deletedTaskWarning = document.querySelector(".deletedTaskWarning");
  var currentTab = "Today",
    warning,
    taskContainer;
  projectFormExpander.addEventListener("click", function (e) {
    e.preventDefault();
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(e.target.closest(".navSectionContainerBtnSvg"), "rotateSvgBtn");
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(projectForm, "displayProjectForm");
    _toConsumableArray(projectForm.children).forEach(function (el) {
      (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(el, ["hideVisibility"]);
    });
  });
  labelFormExpander.addEventListener("click", function (e) {
    e.preventDefault();
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(e.target.closest(".navSectionContainerBtnSvg"), "rotateSvgBtn");
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(labelForm, "displayProjectForm");
    _toConsumableArray(labelForm.children).forEach(function (el) {
      (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(el, ["hideVisibility"]);
    });
  });
  projectCollapseBtn.addEventListener("click", function (e) {
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(projectListContent, "hideNavSection");
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(projectCollapseBtn, "collapseBtnRotate");
  });
  labelCollapseBtn.addEventListener("click", function (e) {
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(labelListContent, "hideNavSection");
    (0,_util_toggleClasses__WEBPACK_IMPORTED_MODULE_11__["default"])(labelCollapseBtn, "collapseBtnRotate");
  });
  projectForm.addEventListener("submit", function (e) {
    var projectFormOption = document.getElementById("project");
    var formData = new FormData(e.target);
    e.preventDefault();
    projectForm.reset();
    (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.addItems)(projectNameSet, [(0,_util_userInputsGetter__WEBPACK_IMPORTED_MODULE_16__["default"])(formData, ["projectName"])["projectName"]]);
    (0,_util_displayNavOptionals__WEBPACK_IMPORTED_MODULE_13__["default"])(projectNameSet, projectListContent, "projectListContainer", _util_generateNavElements__WEBPACK_IMPORTED_MODULE_12__.generateProject);
    var defaultElementAttributes = {
      value: "today"
    };
    (0,_util_displayFormOptionals__WEBPACK_IMPORTED_MODULE_18__["default"])(projectFormOption, "form-details-tags", "Today", defaultElementAttributes, projectNameSet);
    (0,_util_setDefaultProjectOption__WEBPACK_IMPORTED_MODULE_20__["default"])(document.querySelector("#project"), currentTab);
  });
  labelForm.addEventListener("submit", function (e) {
    var tagFormOption = document.getElementById("tag");
    var formData = new FormData(e.target);
    e.preventDefault();
    labelForm.reset();
    (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.addItems)(tagSet, [(0,_util_userInputsGetter__WEBPACK_IMPORTED_MODULE_16__["default"])(formData, ["labelName"])["labelName"]]);
    (0,_util_displayNavOptionals__WEBPACK_IMPORTED_MODULE_13__["default"])(tagSet, labelListContent, "labelsContentContainer", _util_generateNavElements__WEBPACK_IMPORTED_MODULE_12__.generateLabel);
    var defaultElementAttributes = {
      value: "no-value",
      disabled: true,
      selected: true
    };
    (0,_util_displayFormOptionals__WEBPACK_IMPORTED_MODULE_18__["default"])(tagFormOption, "form-details-tags", "Tags", defaultElementAttributes, tagSet);
  });
  displayPage(currentTab, content, taskSet);
  window.addEventListener("click", function (e) {
    if (e.target.closest(".navBtn")) {
      currentTab = e.target.textContent;
      displayPage(currentTab, content, taskSet);
    }
    if (e.target.closest(".content-form")) {
      var form = document.querySelector(".content-form");
      taskContainer = document.querySelector(".tasks");
      form.addEventListener("submit", function (event) {
        event.stopPropagation();
        var formData = new FormData(form);
        var userInputs = (0,_util_userInputsGetter__WEBPACK_IMPORTED_MODULE_16__["default"])(formData, ["name", "description", "date", "priority", "tag", "project"]);
        if (userInputs != -1) {
          (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.addItems)(taskSet, [(0,_util_createObjects__WEBPACK_IMPORTED_MODULE_4__.createTaskObject)(userInputs)]);
          var currentProjectTask = (0,_util_getTaskElemets__WEBPACK_IMPORTED_MODULE_15__["default"])(taskSet, currentTab);
          (0,_util_elementReset__WEBPACK_IMPORTED_MODULE_14__.elementReset)(taskContainer, ["tasks"]);
          (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(taskContainer, currentProjectTask);
        }
        event.preventDefault();
        form.reset();
      });
    }
    if (e.target.closest(".completeMarker")) {
      var completeMarker = e.target;
      taskSet.forEach(function (task) {
        if (e.target.closest(".task") == task.element[0]) {
          completeMarker.classList.add("completeMarkerChecked");
          setTimeout(function () {
            task.element[0].classList.add("hideTask");
            completeMarker.classList.remove("completeMarkerChecked");
          }, 250);
          warning = (0,_util_generateWarning__WEBPACK_IMPORTED_MODULE_9__["default"])();
          var warningBtn = warning[0].querySelector(".undoWarningBtn");
          var clearTaskID = setTimeout(function () {
            (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.removeItems)(taskSet, [task]);
          }, 5000);
          (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.addItems)(completedtaskSet, [(0,_util_createObjects__WEBPACK_IMPORTED_MODULE_4__.createDeleteTaskObject)([warningBtn, task, clearTaskID])]);
          (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(deletedTaskWarning, warning);
          (0,_util_removeWarning__WEBPACK_IMPORTED_MODULE_7__["default"])(warning[0], 5000);
        }
      });
    }
    if (e.target.closest(".undoWarningBtn")) {
      var undoDomBtn = e.target.closest(".undoWarningBtn");
      _toConsumableArray(completedtaskSet).forEach(function (task) {
        if (task.undoBtn == undoDomBtn) {
          task.taskEl.element[0].classList.remove("hideTask");
          task.undoBtn.closest(".warning").classList.add("removeWarning");
          (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.removeItems)(completedtaskSet, [task]);
          clearTimeout(task.clearTaskId);
        }
      });
    }
    if (e.target.closest(".taskDelete")) {
      var taskDOM = e.target.closest(".task");
      _toConsumableArray(taskSet).forEach(function (task) {
        if (task.element[0] == taskDOM) {
          (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.removeItems)(taskSet, [task]);
        }
      });
      (0,_util_elementReset__WEBPACK_IMPORTED_MODULE_14__.elementReset)(taskContainer, ["tasks"]);
      (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(taskContainer, (0,_util_getTaskElemets__WEBPACK_IMPORTED_MODULE_15__["default"])(taskSet, currentTab));
    }
    if (e.target.closest(".labelDeleteBtn")) {
      var tagContent = e.target.closest(".label").textContent;
      var tagFormOption = document.getElementById("tag");
      (0,_util_setFunctions__WEBPACK_IMPORTED_MODULE_3__.removeItems)(tagSet, [tagContent]);
      _toConsumableArray(taskSet).forEach(function (task) {
        if (task.tag == tagContent) {
          task.tag = null;
          task.element[0].querySelector(".taskTag").remove();
        }
      });
      (0,_util_displayNavOptionals__WEBPACK_IMPORTED_MODULE_13__["default"])(tagSet, labelListContent, "labelsContentContainer", _util_generateNavElements__WEBPACK_IMPORTED_MODULE_12__.generateLabel);
      var defaultElementAttributes = {
        value: "no-value",
        disabled: true,
        selected: true
      };
      (0,_util_displayFormOptionals__WEBPACK_IMPORTED_MODULE_18__["default"])(tagFormOption, "form-details-tags", "Tags", defaultElementAttributes, tagSet);
    }
  });
});
function changeActiveTab(currentTab, navBtn) {
  navBtn.forEach(function (btn) {
    if (btn.textContent == currentTab) {
      btn.classList.add("activeTab");
    } else {
      btn.classList.remove("activeTab");
    }
  });
}
function displayPage(currentTab, content, taskSet) {
  var navBtn = document.querySelectorAll(".navBtn");
  changeActiveTab(currentTab, navBtn);
  (0,_util_elementReset__WEBPACK_IMPORTED_MODULE_14__.elementReset)(content, ["content"]);
  var contentPage = (0,_generateContent__WEBPACK_IMPORTED_MODULE_8__.contentPageGenerator)(currentTab, projectNameSet, tagSet, prioritySet);
  (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(content, contentPage);
  (0,_util_setDefaultProjectOption__WEBPACK_IMPORTED_MODULE_20__["default"])(document.querySelector("#project"), currentTab);
  var taskContainer = document.querySelector(".tasks");
  (0,_util_displayElements__WEBPACK_IMPORTED_MODULE_19__["default"])(taskContainer, (0,_util_getTaskElemets__WEBPACK_IMPORTED_MODULE_15__["default"])(taskSet, currentTab));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDakMsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFN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QUFDO0FBRUYsU0FBUzhDLGVBQWVBLENBQUNuVSxVQUFVLEVBQUVvVSxNQUFNLEVBQUU7RUFDM0NBLE1BQU0sQ0FBQzFMLE9BQU8sQ0FBQyxVQUFDeEosR0FBRyxFQUFLO0lBQ3RCLElBQUlBLEdBQUcsQ0FBQzROLFdBQVcsSUFBSTlNLFVBQVUsRUFBRTtNQUNqQ2QsR0FBRyxDQUFDSSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQyxNQUFNO01BQ0xSLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDTyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ25DO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTMlQsV0FBV0EsQ0FBQ3hULFVBQVUsRUFBRStFLE9BQU8sRUFBRW9NLE9BQU8sRUFBRTtFQUNqRCxJQUFNaUQsTUFBTSxHQUFHeEgsUUFBUSxDQUFDZ0YsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0VBQ25EdUMsZUFBZSxDQUFDblUsVUFBVSxFQUFFb1UsTUFBTSxDQUFDO0VBQ25DckosaUVBQVksQ0FBQ2hHLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQ2xDLElBQU1zUCxXQUFXLEdBQUd0VSxzRUFBb0IsQ0FDdENDLFVBQVUsRUFDVnVSLGNBQWMsRUFDZEYsTUFBTSxFQUNOQyxXQUNGLENBQUM7RUFDRDNHLGtFQUFlLENBQUM1RixPQUFPLEVBQUVzUCxXQUFXLENBQUM7RUFDckNsRiwwRUFBdUIsQ0FBQ3ZDLFFBQVEsQ0FBQzhFLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTFSLFVBQVUsQ0FBQztFQUN2RSxJQUFNK1MsYUFBYSxHQUFHbkcsUUFBUSxDQUFDOEUsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUN0RC9HLGtFQUFlLENBQUNvSSxhQUFhLEVBQUVqRSxpRUFBZSxDQUFDcUMsT0FBTyxFQUFFblIsVUFBVSxDQUFDLENBQUM7QUFDdEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZ2VuZXJhdGVDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZ2VuZXJhdGVUYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvY3JlYXRlT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZGlzcGxheUVsZW1lbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9kaXNwbGF5Rm9ybU9wdGlvbmFscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZGlzcGxheU5hdkZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2Rpc3BsYXlOYXZPcHRpb25hbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9lbGVtZW50UmVzZXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlRm9ybU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlTmF2RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlV2FybmluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZ2V0VGFza0VsZW1ldHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3JlbW92ZVdhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3NldERlZmF1bHRQcm9qZWN0T3B0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9zZXRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3N2Z0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3RvZ2dsZUNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3VzZXJJbnB1dHNHZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5wdXQuY3NzP2ZjYzIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3N0YW5kYWxvbmUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VCdG4oYnRuKSB7XG4gIGlmIChidG4ubm9kZU5hbWUgIT0gXCJCVVRUT05cIikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZUJ0blJvdGF0ZVwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICByZXR1cm4gY3JlYXRlRWwoXCJidXR0b25cIiwgW1wibmF2QnRuXCJdLCBcIlwiLCBcIk15IFByb2plY3RcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFByb21wdChlKSB7XG4gIGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlQcm9qZWN0Rm9ybVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdFByb21wdChlKSB7XG4gIGUucmVzZXQoKTtcbiAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVByb2plY3RGb3JtXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVGb3JtT3B0aW9uIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZUZvcm1PcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50UGFnZUdlbmVyYXRvcihjdXJyZW50VGFiLCBwcm9qZWN0cywgbGFiZWxzLCBwcmlvcml0aWVzKSB7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBjcmVhdGVFbChcImhlYWRlclwiLCBbXCJjb250ZW50LWhlYWRlclwiXSk7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXJIZWFkaW5nID0gY3JlYXRlRWwoXG4gICAgXCJoMVwiLFxuICAgIFtcImNvbnRlbnQtaGVhZGVyLWhlYWRpbmdcIl0sXG4gICAgY29udGVudEhlYWRlcixcbiAgICBgJHtjdXJyZW50VGFifWAsXG4gICk7XG5cbiAgY29uc3QgdGFza3MgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrc1wiXSk7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsKFwic2VjdGlvblwiLCBbXCJjb250ZW50Q29udGFpbmVyXCJdKTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICBmb3JtR2VuZXJhdG9yKHByb2plY3RzLCBsYWJlbHMsIHByaW9yaXRpZXMsIGN1cnJlbnRUYWIpLFxuICApO1xuXG4gIHJldHVybiBbY29udGVudEhlYWRlciwgdGFza3MsIGNvbnRlbnRDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKHByb2plY3RzLCBsYWJlbHMsIHByaW9yaXRpZXMsIGN1cnJlbnRUYWIpIHtcbiAgY29uc3QgY29udGVudEZvcm0gPSBjcmVhdGVFbChcImZvcm1cIiwgW1wiY29udGVudC1mb3JtXCJdKTtcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0b2RvLWRldGFpbHNcIl0sIGNvbnRlbnRGb3JtKTtcbiAgY29uc3QgdG9kb0RldGFpbHNOYW1lID0gY3JlYXRlRWwoXG4gICAgXCJpbnB1dFwiLFxuICAgIFtcInRvZG8tZGV0YWlscy1uYW1lXCJdLFxuICAgIHRvZG9EZXRhaWxzLFxuICAgIFwiXCIsXG4gICAge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlRhc2sgbmFtZVwiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgdG9kb0RldGFpbHNEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsKFxuICAgIFwiaW5wdXRcIixcbiAgICBbXCJ0b2RvLWRldGFpbHMtZGVzY3JpcHRpb25cIl0sXG4gICAgdG9kb0RldGFpbHMsXG4gICAgXCJcIixcbiAgICB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGlkOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBmb3JtT3B0aW9uYWxzRGl2ID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiZm9ybS1vcHRpb25hbHNcIl0sIHRvZG9EZXRhaWxzKTtcbiAgY29uc3QgdG9kb0RldGFpbHNEYXRlID0gY3JlYXRlRWwoXG4gICAgXCJpbnB1dFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImRhdGVcIiwgaWQ6IFwiZGF0ZVwiLCBwbGFjZWhvbGRlcjogXCJUb2RheVwiIH0sXG4gICk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzUHJpb3JpdHkgPSBjcmVhdGVFbChcbiAgICBcInNlbGVjdFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7IG5hbWU6IFwicHJpb3JpdHlcIiwgaWQ6IFwicHJpb3JpdHlcIiB9LFxuICApO1xuXG4gIGdlbmVyYXRlRm9ybU9wdGlvbihwcmlvcml0aWVzLCB0b2RvRGV0YWlsc1ByaW9yaXR5LCBcIlByaW9yaXR5XCIsIHtcbiAgICB2YWx1ZTogXCJuby12YWx1ZVwiLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHNlbGVjdGVkOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCB0b2RvRGV0YWlsc1RhZ3MgPSBjcmVhdGVFbChcbiAgICBcInNlbGVjdFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7XG4gICAgICBuYW1lOiBcInRhZ1wiLFxuICAgICAgaWQ6IFwidGFnXCIsXG4gICAgfSxcbiAgKTtcblxuICBnZW5lcmF0ZUZvcm1PcHRpb24obGFiZWxzLCB0b2RvRGV0YWlsc1RhZ3MsIFwiVGFnc1wiLCB7XG4gICAgdmFsdWU6IFwibm8tdmFsdWVcIixcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcImZvcm0tc3VibWl0XCJdLCBjb250ZW50Rm9ybSk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzUHJvamVjdCA9IGNyZWF0ZUVsKFxuICAgIFwic2VsZWN0XCIsXG4gICAgW1wiZm9ybS1kZXRhaWxzLXRhZ3NcIl0sXG4gICAgZm9ybVN1Ym1pdCxcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIG5hbWU6IFwicHJvamVjdFwiLFxuICAgICAgaWQ6IFwicHJvamVjdFwiLFxuICAgIH0sXG4gICk7XG4gIGdlbmVyYXRlRm9ybU9wdGlvbihwcm9qZWN0cywgdG9kb0RldGFpbHNQcm9qZWN0LCBcIlRvZGF5XCIsIHtcbiAgICB2YWx1ZTogXCJ0b2RheVwiLFxuICB9KTtcbiAgY29uc3QgZm9ybUJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wiZm9ybS1idXR0b24tY29udGFpbmVyXCJdLFxuICAgIGZvcm1TdWJtaXQsXG4gICk7XG5cbiAgY3JlYXRlRWwoXCJidXR0b25cIiwgW1widG9kby1mb3JtLWJ0bnNcIl0sIGZvcm1CdXR0b25Db250YWluZXIsIFwiQ2xlYXJcIiwge1xuICAgIHR5cGU6IFwicmVzZXRcIixcbiAgfSk7XG4gIGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1widG9kby1mb3JtLWJ0bnNcIiwgXCJhZGRUYXNrQnRuXCJdLFxuICAgIGZvcm1CdXR0b25Db250YWluZXIsXG4gICAgXCJBZGQgVGFza1wiLFxuICAgIHtcbiAgICAgIC8vIHR5cGU6IFwic3VibWl0XCIsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gY29udGVudEZvcm07XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3V0aWwvZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0dlbmVyYXRvcih1c2VySW5wdXQgPSB7fSkge1xuICBjb25zdCB0YXNrID0gY3JlYXRlRWwoXCJkaXZcIiwgW1widGFza1wiXSk7XG5cbiAgY29uc3QgY29tcGxldGVNYXJrZXJDb250YWluZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcImNvbXBsZXRlTWFya2VyQ29udGFpbmVuclwiXSxcbiAgICB0YXNrLFxuICApO1xuICBjb25zdCBjb21wbGV0ZU1hcmtlciA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiY29tcGxldGVNYXJrZXJcIl0sXG4gICAgY29tcGxldGVNYXJrZXJDb250YWluZXIsXG4gICk7XG5cbiAgY29uc3QgdGFza0NvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrQ29udGVudFwiXSwgdGFzayk7XG5cbiAgaWYgKHVzZXJJbnB1dC5uYW1lLmxlbmd0aCAhPSAwKSB7XG4gICAgY29uc3QgdGFza0hlYWRpbmcgPSBjcmVhdGVFbChcbiAgICAgIFwiaDJcIixcbiAgICAgIFtcInRhc2tIZWFkaW5nXCJdLFxuICAgICAgdGFza0NvbnRlbnQsXG4gICAgICBgJHt1c2VySW5wdXQubmFtZX1gLFxuICAgICk7XG4gIH1cblxuICBpZiAodXNlcklucHV0LmRlc2NyaXB0aW9uLmxlbmd0aCAhPSAwKSB7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlRWwoXG4gICAgICBcInBcIixcbiAgICAgIFtcInRhc2tEZXNjcmlwdGlvblwiXSxcbiAgICAgIHRhc2tDb250ZW50LFxuICAgICAgYCR7dXNlcklucHV0LmRlc2NyaXB0aW9ufWAsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG90aGVyVGFncyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcIm90aGVyVGFnc1wiXSwgdGFza0NvbnRlbnQpO1xuXG4gIGlmICh1c2VySW5wdXQuZGF0ZS5sZW5ndGggIT0gMCkge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gY3JlYXRlRWwoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFtcInRhc2tEYXRlXCJdLFxuICAgICAgb3RoZXJUYWdzLFxuICAgICAgYCR7dXNlcklucHV0LmRhdGV9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKHVzZXJJbnB1dC5wcmlvcml0eSkge1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZUVsKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBbXCJ0YXNrUHJpb3JpdHlcIl0sXG4gICAgICBvdGhlclRhZ3MsXG4gICAgICBgJHt1c2VySW5wdXQucHJpb3JpdHl9YCxcbiAgICApO1xuICB9XG4gIGlmICh1c2VySW5wdXQudGFnKSB7XG4gICAgY29uc3QgdGFza1RhZyA9IGNyZWF0ZUVsKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBbXCJ0YXNrVGFnXCJdLFxuICAgICAgb3RoZXJUYWdzLFxuICAgICAgYCR7dXNlcklucHV0LnRhZ31gLFxuICAgICk7XG4gIH1cbiAgY29uc3QgdGFza09wdGlvbnMgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrT3B0aW9uc1wiXSwgdGFzayk7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcInRhc2tEZWxldGVcIl0sXG4gICAgdGFza09wdGlvbnMsXG4gICAgXCJEZWxldGVcIixcbiAgKTtcblxuICBjb25zdCBkaXZpZGVyID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiZGl2aWRlclwiXSwgdGFzayk7XG5cbiAgcmV0dXJuIFt0YXNrXTtcbn1cbiIsIitcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNWRyBmcm9tIFwiLi91dGlsL3N2Z0NyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVwYWdlR2VuZXJhdG9yKCkge1xuICBjb25zdCBuYXYgPSBjcmVhdGVFbChcIm5hdlwiLCBbXCJuYXZcIl0pO1xuICBjb25zdCB1c2VySWNvbiA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInVzZXJJY29uXCJdLCBuYXYpO1xuICBjb25zdCB1c2VySWNvblN2ZyA9IGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZDogXCJNMTAgMGExMCAxMCAwIDEgMCAxMCAxMEExMC4wMTEgMTAuMDExIDAgMCAwIDEwIDBabTAgNWEzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZabTAgMTNhOC45NDkgOC45NDkgMCAwIDEtNC45NTEtMS40ODhBMy45ODcgMy45ODcgMCAwIDEgOSAxM2gyYTMuOTg3IDMuOTg3IDAgMCAxIDMuOTUxIDMuNTEyQTguOTQ5IDguOTQ5IDAgMCAxIDEwIDE4WlwiLFxuICAgIH0sXG4gICAgW1widXNlckljb25TdmdcIl0sXG4gICAgdXNlckljb24sXG4gICk7XG5cbiAgY29uc3QgbmF2U2VjdGlvbkNvbnRhaW5lclRvZG8gPSBjcmVhdGVFbChcImRpdlwiLCBbXCJuYXZTZWN0aW9uQ29udGFpbmVyXCJdLCBuYXYpO1xuICBjb25zdCBuYXZCdG5Ub2RheSA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wibmF2QnRuXCIsIFwidG9kYXlcIl0sXG4gICAgbmF2U2VjdGlvbkNvbnRhaW5lclRvZG8sXG4gICAgXCJUb2RheVwiLFxuICApO1xuXG4gIGNvbnN0IG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lclwiXSxcbiAgICBuYXYsXG4gICk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVySGVhZGVyID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVySGVhZGVyXCJdLFxuICAgIG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyxcbiAgKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJIZWFkZXJIZWFkaW5nID0gY3JlYXRlRWwoXG4gICAgXCJoMlwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJIZWFkaW5nXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyLFxuICAgIFwiUHJvamVjdHNcIixcbiAgKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJIZWFkZXJBZGRCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJCdG5cIiwgXCJuYXZTZWN0aW9uQ29udGFpbmVyQWRkQnRuXCIsIFwiYWRkUHJvamVjdEJ0blwiXSxcbiAgICBwcm9qZWN0c0NvbnRhaW5lckhlYWRlcixcbiAgKTtcbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk05LjU0Ni41YTkuNSA5LjUgMCAxIDAgOS41IDkuNSA5LjUxIDkuNTEgMCAwIDAtOS41LTkuNVpNMTMuNzg4IDExaC0zLjI0MnYzLjI0MmExIDEgMCAxIDEtMiAwVjExSDUuMzA0YTEgMSAwIDAgMSAwLTJoMy4yNDJWNS43NThhMSAxIDAgMCAxIDIgMFY5aDMuMjQyYTEgMSAwIDEgMSAwIDJaXCIsXG4gICAgfSxcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyQWRkQnRuLFxuICApO1xuXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcbiAgICAgIFwibmF2U2VjdGlvbkNvbnRhaW5lckJ0blwiLFxuICAgICAgXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29sbGFwc2VCdG5cIixcbiAgICAgIFwicHJvamVjdENvbGxhcHNlQnRuXCIsXG4gICAgXSxcbiAgICBwcm9qZWN0c0NvbnRhaW5lckhlYWRlcixcbiAgKTtcbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDEwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk0xNS40MzQgMS4yMzVBMiAyIDAgMCAwIDEzLjU4NiAwSDIuNDE0QTIgMiAwIDAgMCAxIDMuNDE0TDYuNTg2IDlhMiAyIDAgMCAwIDIuODI4IDBMMTUgMy40MTRhMiAyIDAgMCAwIC40MzQtMi4xNzlaXCIsXG4gICAgfSxcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4sXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNDb250ZW50ID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29udGVudENvbnRhaW5lclwiLCBcInByb2plY3RDb250ZW50Q29udGFpbmVyXCJdLFxuICAgIG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyxcbiAgKTtcblxuICBwcm9qZWN0c0NvbnRlbnQuYXBwZW5kKFxuICAgIGNyZWF0ZU5hdklucHV0cyhcbiAgICAgIFwiYWRkUHJvamVjdEZvcm1cIixcbiAgICAgIFwicHJvamVjdE5hbWVJbnB1dFwiLFxuICAgICAgXCJQcm9qZWN0IG5hbWVcIixcbiAgICAgIFwicHJvamVjdE5hbWVcIixcbiAgICAgIFwicHJvamVjdFwiLFxuICAgICksXG4gICk7XG5cbiAgY29uc3QgbmF2U2VjdGlvbkNvbnRhaW5lcmxhYmVscyA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lclwiXSxcbiAgICBuYXYsXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcInByb2plY3RMaXN0Q29udGFpbmVyXCIsIFwibmF2U2VjdGlvbkNvbnRhaW5lckNvbnRlbnRDb250YWluZXJcIl0sXG4gICAgcHJvamVjdHNDb250ZW50LFxuICApO1xuICBjb25zdCBsYWJlbHNDb250YWluZXJIZWFkZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJIZWFkZXJcIl0sXG4gICAgbmF2U2VjdGlvbkNvbnRhaW5lcmxhYmVscyxcbiAgKTtcbiAgY29uc3QgbGFiZWxzQ29udGFpbmVySGVhZGVySGVhZGluZyA9IGNyZWF0ZUVsKFxuICAgIFwiaDJcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVySGVhZGluZ1wiXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXIsXG4gICAgXCJMYWJlbHNcIixcbiAgKTtcbiAgY29uc3QgbGFiZWxzQ29udGFpbmVySGVhZGVyQWRkQnRuID0gY3JlYXRlRWwoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuXCIsIFwibmF2U2VjdGlvbkNvbnRhaW5lckFkZEJ0blwiLCBcImFkZExhYmVsQnRuXCJdLFxuICAgIGxhYmVsc0NvbnRhaW5lckhlYWRlcixcbiAgKTtcbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk05LjU0Ni41YTkuNSA5LjUgMCAxIDAgOS41IDkuNSA5LjUxIDkuNTEgMCAwIDAtOS41LTkuNVpNMTMuNzg4IDExaC0zLjI0MnYzLjI0MmExIDEgMCAxIDEtMiAwVjExSDUuMzA0YTEgMSAwIDAgMSAwLTJoMy4yNDJWNS43NThhMSAxIDAgMCAxIDIgMFY5aDMuMjQyYTEgMSAwIDEgMSAwIDJaXCIsXG4gICAgfSxcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCJdLFxuICAgIGxhYmVsc0NvbnRhaW5lckhlYWRlckFkZEJ0bixcbiAgKTtcblxuICBjb25zdCBsYWJlbHNDb250YWluZXJIZWFkZXJDb2xsYXBzZUJ0biA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1xuICAgICAgXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuXCIsXG4gICAgICBcIm5hdlNlY3Rpb25Db250YWluZXJDb2xsYXBzZUJ0blwiLFxuICAgICAgXCJsYWJlbENvbGxhcHNlQnRuXCIsXG4gICAgXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXIsXG4gICk7XG4gIGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAxNiAxMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZDogXCJNMTUuNDM0IDEuMjM1QTIgMiAwIDAgMCAxMy41ODYgMEgyLjQxNEEyIDIgMCAwIDAgMSAzLjQxNEw2LjU4NiA5YTIgMiAwIDAgMCAyLjgyOCAwTDE1IDMuNDE0YTIgMiAwIDAgMCAuNDM0LTIuMTc5WlwiLFxuICAgIH0sXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lckJ0blN2Z1wiXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXJDb2xsYXBzZUJ0bixcbiAgKTtcblxuICBjb25zdCBsYWJlbHNDb250ZW50ID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29udGVudENvbnRhaW5lclwiLCBcInByb2plY3RDb250ZW50Q29udGFpbmVyXCJdLFxuICAgIG5hdlNlY3Rpb25Db250YWluZXJsYWJlbHMsXG4gICk7XG5cbiAgbGFiZWxzQ29udGVudC5hcHBlbmQoXG4gICAgY3JlYXRlTmF2SW5wdXRzKFxuICAgICAgXCJhZGRMYWJlbEZvcm1cIixcbiAgICAgIFwibGFiZU5hbWVJbnB1dFwiLFxuICAgICAgXCJMYWJlbCBuYW1lXCIsXG4gICAgICBcImxhYmVsTmFtZVwiLFxuICAgICAgXCJsYWJlbFwiLFxuICAgICksXG4gICk7XG5cbiAgY29uc3QgbGFiZWxzQ29udGFpbmVyID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJsYWJlbHNDb250ZW50Q29udGFpbmVyXCJdLFxuICAgIGxhYmVsc0NvbnRlbnQsXG4gICk7XG5cbiAgY29uc3QgZGVsZXRlVGFza1dhcm5pbmcgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJkZWxldGVkVGFza1dhcm5pbmdcIl0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJjb250ZW50XCJdLCBcIlwiLCBcIlwiLCB7IGlkOiBcImNvbnRlbnRcIiB9KTtcblxuICByZXR1cm4gW25hdiwgZGVsZXRlVGFza1dhcm5pbmcsIGNvbnRlbnRdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZJbnB1dHMoXG4gIGZvcm1DbGFzcyxcbiAgaW5wdXRDbGFzcyxcbiAgaW5wdXRQbGFjZUhvbGRlcixcbiAgaW5wdXROYW1lLFxuICBidG5DbGFzcyxcbikge1xuICBjb25zdCBhZGROYXZGb3JtID0gY3JlYXRlRWwoXCJmb3JtXCIsIFtgJHtmb3JtQ2xhc3N9YF0pO1xuICBjb25zdCBhZGROYXZJbnB1dCA9IGNyZWF0ZUVsKFxuICAgIFwiaW5wdXRcIixcbiAgICBbXCJhZGROYXZGb3JtSW5wdXRcIiwgXCJoaWRlVmlzaWJpbGl0eVwiLCBgJHtpbnB1dENsYXNzfWBdLFxuICAgIGFkZE5hdkZvcm0sXG4gICAgXCJcIixcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogYCR7aW5wdXRQbGFjZUhvbGRlcn1gLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBuYW1lOiBgJHtpbnB1dE5hbWV9YCxcbiAgICB9LFxuICApO1xuICBjb25zdCBwcm9qZWN0Rm9ybUFkZEJ0biA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiYWRkTmF2Rm9ybUJ0blwiLCBcImhpZGVWaXNpYmlsaXR5XCIsIGAke2J0bkNsYXNzfWFkZEJ0bmBdLFxuICAgIGFkZE5hdkZvcm0sXG4gICAgXCJcIixcbiAgICB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgfSxcbiAgKTtcblxuICBjcmVhdGVTVkcoXG4gICAge1xuICAgICAgY2xhc3M6IFwidy02IGgtNiBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImZpbGwtcnVsZVwiOiBcImV2ZW5vZGRcIixcbiAgICAgIGQ6IFwiTTIgMTJhMTAgMTAgMCAxIDEgMjAgMCAxMCAxMCAwIDAgMS0yMCAwWm0xMS00LjJhMSAxIDAgMSAwLTIgMFYxMUg3LjhhMSAxIDAgMSAwIDAgMkgxMXYzLjJhMSAxIDAgMSAwIDIgMFYxM2gzLjJhMSAxIDAgMSAwIDAtMkgxM1Y3LjhaXCIsXG4gICAgICBcImNsaXAtcnVsZVwiOiBcImV2ZW5vZGRcIixcbiAgICB9LFxuICAgIFtcImFkZE5hdkZvcm1CdG5cIl0sXG4gICAgcHJvamVjdEZvcm1BZGRCdG4sXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdEZvcm1DYW5jZWxCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImFkZE5hdkZvcm1CdG5cIiwgXCJoaWRlVmlzaWJpbGl0eVwiLCBgJHtidG5DbGFzc31jYW5jZWxCdG5gXSxcbiAgICBhZGROYXZGb3JtLFxuICAgIFwiXCIsXG4gICk7XG5cbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInctNiBoLTYgXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gICAgICBkOiBcIk0yIDEyYTEwIDEwIDAgMSAxIDIwIDAgMTAgMTAgMCAwIDEtMjAgMFptNy43LTMuN2ExIDEgMCAwIDAtMS40IDEuNGwyLjMgMi4zLTIuMyAyLjNhMSAxIDAgMSAwIDEuNCAxLjRsMi4zLTIuMyAyLjMgMi4zYTEgMSAwIDAgMCAxLjQtMS40TDEzLjQgMTJsMi4zLTIuM2ExIDEgMCAwIDAtMS40LTEuNEwxMiAxMC42IDkuNyA4LjNaXCIsXG4gICAgICBcImNsaXAtcnVsZVwiOiBcImV2ZW5vZGRcIixcbiAgICB9LFxuICAgIFtcImFkZE5hdkZvcm1CdG5cIl0sXG4gICAgcHJvamVjdEZvcm1DYW5jZWxCdG4sXG4gICk7XG5cbiAgcmV0dXJuIGFkZE5hdkZvcm07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRhc2socHJvcGVyaXRpZXMgPSBbXSwgbWV0aG9kcyA9IFtdKSB7XG4gIGNvbnN0IHN0YXRlID0geyBtb2RpZnlBdHRyaWJ1dGVzIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHN0YXRlLFxuICAgIC4uLnByb3Blcml0aWVzLFxuICAgIC4uLm1ldGhvZHMubWFwKChtZXRob2QpID0+IG1ldGhvZChzdGF0ZSkpLFxuICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlBdHRyaWJ1dGVzKHByb3Blcml0aWVzID0gW10sIG1ldGhvZHMgPSBbXSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICB0aGlzLFxuICAgIC4uLnByb3Blcml0aWVzLFxuICAgIC4uLm1ldGhvZHMubWFwKChtZXRob2QpID0+IG1ldGhvZChzdGF0ZSkpLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza1RpdGxlKHRpdGxlKSB7XG4gIHJldHVybiB7IHRpdGxlOiB0aXRsZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza0Rlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza0R1ZURhdGUoZHVlRGF0ZSkge1xuICByZXR1cm4geyBkdWVEYXRlOiBkdWVEYXRlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXNrUHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgcmV0dXJuIHsgcHJpb3JpdHk6IHByaW9yaXR5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXNrTGFiZWwobGFiZWwgPSBbXSkge1xuICByZXR1cm4geyBsYWJlbDogbGFiZWwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XG4gIHJldHVybiB7IHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNOYXZFbGVtZW50cyhwcm9qZWN0TGlzdCkge1xuICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBbXTtcbiAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RFbGVtZW50cy5wdXNoKGNyZWF0ZUVsKFwiYnV0dG9uXCIsIFtcIm5hdkJ0blwiXSwgXCJcIiwgcHJvamVjdCkpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50cztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgdGFza0dlbmVyYXRvciBmcm9tIFwiLi4vZ2VuZXJhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrT2JqZWN0KHVzZXJJbnB1dCkge1xuICByZXR1cm4geyAuLi51c2VySW5wdXQsIGVsZW1lbnQ6IHRhc2tHZW5lcmF0b3IodXNlcklucHV0KSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVsZXRlVGFza09iamVjdCh2YWx1ZXMgPSBbXSkge1xuICByZXR1cm4geyB1bmRvQnRuOiB2YWx1ZXNbMF0sIHRhc2tFbDogdmFsdWVzWzFdLCBjbGVhclRhc2tJZDogdmFsdWVzWzJdIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlFbGVtZW50cyhwYXJlbnQsIGNoaWxkcmVuID0gW10pIHtcbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmVudDtcbn1cbiIsImltcG9ydCB7IGVsZW1lbnRSZXNldCB9IGZyb20gXCIuL2VsZW1lbnRSZXNldFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVGb3JtT3B0aW9uIH0gZnJvbSBcIi4vZ2VuZXJhdGVGb3JtT3B0aW9uc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUZvcm1PcHRpb25hbHMoXG4gIHBhcmVudEVsLFxuICBwYXJlbnRFbENsYXNzLFxuICBmaXJzdE9wdGlvbixcbiAgZmlyc3RPcHRpb25BdHRyaWJ1dGVzLFxuICBzZXQsXG4pIHtcbiAgaWYgKHBhcmVudEVsKSB7XG4gICAgZWxlbWVudFJlc2V0KHBhcmVudEVsLCBbYCR7cGFyZW50RWxDbGFzc31gXSk7XG4gICAgZ2VuZXJhdGVGb3JtT3B0aW9uKHNldCwgcGFyZW50RWwsIGZpcnN0T3B0aW9uLCBmaXJzdE9wdGlvbkF0dHJpYnV0ZXMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU5hdkZvcm0oZXhwYW5kQnRuLCBmb3JtKSB7XG4gIGV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5UHJvamVjdEZvcm1cIik7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBnZXRVc2VySW5wdXRzIGZyb20gXCIuL3VzZXJJbnB1dHNHZXR0ZXJcIjtcbmltcG9ydCB7IGFkZEl0ZW1zIH0gZnJvbSBcIi4vc2V0RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBlbGVtZW50UmVzZXQgfSBmcm9tIFwiLi9lbGVtZW50UmVzZXRcIjtcbmltcG9ydCBkaXNwbGF5RWxlbWVudHMgZnJvbSBcIi4vZGlzcGxheUVsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlOYXZPcHRpb25hbHMoXG4gIHNldCxcbiAgcGFyZW50RWwsXG4gIHBhcmVudEVsQ2xhc3MsXG4gIGdlbmVyYXRvckZuLFxuKSB7XG4gIGVsZW1lbnRSZXNldChwYXJlbnRFbCwgW10pO1xuICBzZXQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGRpc3BsYXlFbGVtZW50cyhwYXJlbnRFbCwgZ2VuZXJhdG9yRm4oaXRlbSkpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwoXG4gIHR5cGUsXG4gIGNsYXNzZXMgPSBbXSxcbiAgcGFyZW50RWwsXG4gIGNvbnRlbnQsXG4gIGF0dHJpYnV0ZXMgPSB7fSxcbikge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChjbGFzc2VzLmxlbmd0aCAhPSAwKSBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICBlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFyZW50RWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHJldHVybiBlbDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbGVtZW50UmVzZXQoZWxlbWVudCwgY2xhc3NlcyA9IFtdKSB7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgaWYgKGNsYXNzZXMubGVuZ3RoICE9IDApIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIC4uLmNsYXNzZXMpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2T3B0aW9uUmVzZXQoZWxlbWVudCwgY2xhc3NlcyA9IFtdKSB7XG4gIGVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAuLi5jbGFzc2VzKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi9lbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGb3JtT3B0aW9uKFxuICBvcHRpb25zTGlzdCxcbiAgcGFyZW50RWwsXG4gIGZpcnN0Q2hpbGQsXG4gIGZpcnN0Q2hpbGRBdHRyaWJ1dGUsXG4pIHtcbiAgY3JlYXRlRWwoXCJvcHRpb25cIiwgW10sIHBhcmVudEVsLCBmaXJzdENoaWxkLCBmaXJzdENoaWxkQXR0cmlidXRlKTtcblxuICBvcHRpb25zTGlzdC5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjcmVhdGVFbChcIm9wdGlvblwiLCBbXSwgcGFyZW50RWwsIG9wdGlvbiwge1xuICAgICAgdmFsdWU6IGAke29wdGlvbi50b0xvd2VyQ2FzZSgpfWAsXG4gICAgfSk7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCBjcmVhdGVTVkcgZnJvbSBcIi4vc3ZnQ3JlYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInByb2plY3RcIl0pO1xuICBjb25zdCBwcm9qZWN0TmFtZUJ0biA9IGNyZWF0ZUVsKFwiYnV0dG9uXCIsIFtcIm5hdkJ0blwiXSwgZGl2LCBwcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIFtkaXZdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMYWJlbChsYWJlbE5hbWUpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wibGFiZWxcIl0pO1xuICBjb25zdCBsYWJlbE5hbWVFbCA9IGNyZWF0ZUVsKFwicFwiLCBbXCJsYWJlbFRhZ1wiXSwgZGl2LCBsYWJlbE5hbWUpO1xuXG4gIGNvbnN0IGJ0biA9IGNyZWF0ZUVsKFwiYnV0dG9uXCIsIFtcImxhYmVsRGVsZXRlQnRuXCJdLCBkaXYpO1xuICBjb25zdCBsYWJlbERlbGV0ZUJ0blNWRyA9IGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBjbGFzczogXCJsYWJlbERlbGV0ZUJ0blN2Z1wiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGQ6IFwiTTEwIC41YTkuNSA5LjUgMCAxIDAgOS41IDkuNUE5LjUxIDkuNTEgMCAwIDAgMTAgLjVabTMuNzA3IDExLjc5M2ExIDEgMCAxIDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC0yLjI5MyAyLjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTRMOC41ODYgMTAgNi4yOTMgNy43MDdhMSAxIDAgMCAxIDEuNDE0LTEuNDE0TDEwIDguNTg2bDIuMjkzLTIuMjkzYTEgMSAwIDAgMSAxLjQxNCAxLjQxNEwxMS40MTQgMTBsMi4yOTMgMi4yOTNaXCIsXG4gICAgfSxcbiAgICBbXCJsYWJlbERlbGV0ZUJ0blwiXSxcbiAgICBidG4sXG4gICk7XG4gIHJldHVybiBbZGl2XTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZUNpcmNsZVNWRyB9IGZyb20gXCIuL3N2Z0NyZWF0b3JcIjtcbmltcG9ydCBcIi4uL2lucHV0LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVdhcm5pbmcoKSB7XG4gIGNvbnN0IHdhcm5pbmcgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ3YXJuaW5nXCJdKTtcbiAgY29uc3QgdGltZXIgPSBjcmVhdGVDaXJjbGVTVkcoXG4gICAgeyB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiIH0sXG4gICAge1xuICAgICAgY2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICByOiBcIjE1XCIsXG4gICAgICBjeDogXCIxNlwiLFxuICAgICAgY3k6IFwiMTZcIixcbiAgICAgIGZpbGw6IFwidHJhbnNwYXJlbnRcIixcbiAgICB9LFxuICAgIFtcInRpbWVyXCJdLFxuICAgIHdhcm5pbmcsXG4gICk7XG4gIGNvbnNvbGUubG9nKHRpbWVyKTtcbiAgY29uc3QgdW5kb1dhcm5pbmdCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcInVuZG9XYXJuaW5nQnRuXCJdLFxuICAgIHdhcm5pbmcsXG4gICAgXCJVbmRvXCIsXG4gICk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgd2FybmluZy5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVdhcm5pbmdcIik7XG4gIH0sIDE1MCk7XG5cbiAgcmV0dXJuIFt3YXJuaW5nXTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrRWxlbWVudHModGFza0FycmF5LCBmaWx0ZXIgPSBcInRvZGF5XCIpIHtcbiAgY29uc3QgcmVzdWx0ID0gWy4uLnRhc2tBcnJheV1cbiAgICAuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3QgPT0gZmlsdGVyLnRvTG93ZXJDYXNlKCkpXG4gICAgLm1hcCgodGFzaykgPT4gdGFzay5lbGVtZW50WzBdKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVdhcm5pbmcoZWxlbWVudCwgdGltZSkge1xuICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlV2FybmluZ1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSwgMjUwKTtcbiAgfSwgdGltZSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0RGVmYXVsdFByb2plY3RPcHRpb24ocGFyZW50RWwsIGN1cnJlbnRUYWIpIHtcbiAgaWYgKCFwYXJlbnRFbCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBbLi4ucGFyZW50RWwuY2hpbGRyZW5dLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGlmIChvcHRpb24uaW5uZXJUZXh0ID09IGN1cnJlbnRUYWIpIHtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtcyhzZXROYW1lID0gbmV3IFNldCgpLCBpdGVtcyA9IFtdKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5sZW5ndGggIT0gMCkge1xuICAgICAgc2V0TmFtZS5hZGQoaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNldE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtcyhzZXROYW1lID0gbmV3IFNldCgpLCBpdGVtcyA9IFtdKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBzZXROYW1lLmRlbGV0ZShpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBzZXROYW1lO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNWRyhcbiAgc3ZnQXR0cmlidXRlcyA9IHt9LFxuICBwYXRoQXR0cmlidXRlcyA9IHt9LFxuICBjbGFzc2VzID0gW10sXG4gIHBhcmVudEVsLFxuKSB7XG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwicGF0aFwiLFxuICApO1xuXG4gIGlmIChzdmdBdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3ZnQXR0cmlidXRlcykpIHtcbiAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXRoQXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBhdGhBdHRyaWJ1dGVzKSkge1xuICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xuXG4gIGlmIChjbGFzc2VzLmxlbmd0aCAhPSAwKSBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XG5cbiAgcmV0dXJuIGljb25Tdmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaXJjbGVTVkcoXG4gIHN2Z0F0dHJpYnV0ZXMgPSB7fSxcbiAgcGF0aEF0dHJpYnV0ZXMgPSB7fSxcbiAgY2xhc3NlcyA9IFtdLFxuICBwYXJlbnRFbCxcbikge1xuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcImNpcmNsZVwiLFxuICApO1xuXG4gIGlmIChzdmdBdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3ZnQXR0cmlidXRlcykpIHtcbiAgICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXRoQXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBhdGhBdHRyaWJ1dGVzKSkge1xuICAgICAgaWNvblBhdGguc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xuXG4gIGlmIChjbGFzc2VzLmxlbmd0aCAhPSAwKSBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG5cbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XG5cbiAgcmV0dXJuIGljb25Tdmc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKGVsZW1lbnQsIHRvZ2dsZUNsYXNzKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh0b2dnbGVDbGFzcyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VXNlcklucHV0cyhmb3JtRGF0YSwgaW5wdXRzID0gW10pIHtcbiAgY29uc3QgcmV0dXJuT2JqID0ge307XG4gIGlmIChmb3JtRGF0YS5nZXQoXCJuYW1lXCIpID09IFwiXCIpIHtcbiAgXG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIHJldHVybk9ialtgJHtpbnB1dH1gXSA9IGZvcm1EYXRhLmdldChgJHtpbnB1dH1gKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHVybk9iajtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxuISB0YWlsd2luZGNzcyB2My40LjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXG4qLy8qXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXG4qL1xuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIC1vLXRhYi1zaXplOiA0O1xuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IC8qIDQgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA3ICovXG59XG5cbi8qXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gXFxgaHRtbFxcYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgXFxgaHRtbFxcYCBlbGVtZW50LlxuKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxuKi9cblxuaHIge1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5kaWFsb2cge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXG4qL1xuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cbiovXG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0LTMyIHtcbiAgbGVmdDogOHJlbTtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaC02IHtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG5cbi53LTYge1xuICB3aWR0aDogMS41cmVtO1xufVxuXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJnLWJsYWNrIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZmlsdGVyIHtcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib2R5IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDE1MzZweDtcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMjByZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi51c2VySWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4udXNlckljb25Tdmcge1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIHdpZHRoOiAyLjI1cmVtO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC51c2VySWNvblN2ZyB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgfVxufVxuXG4ubmF2U2VjdGlvbkNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4ubmF2U2VjdGlvbkNvbnRhaW5lcjpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxcHggM3B4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAxcHggMnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjEyNXJlbTtcbn1cbi5uYXZCdG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgLS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDE1cHggLTNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCA2cHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuLm5hdkJ0bjpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAyNTAgMjUxIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzMCA2NCAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgLS10dy1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4xKSwgMCA4cHggMTBweCAtNnB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMjBweCAyNXB4IC01cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA4cHggMTBweCAtNnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbi5hY3RpdmVUYWIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI0OSAyNTAgMjUxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIC0tdHctc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxcHggMnB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG4ubmF2U2VjdGlvbkNvbnRhaW5lckhlYWRpbmcge1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJCdG4gc3ZnIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxuICAubmF2U2VjdGlvbkNvbnRhaW5lckJ0biBzdmcge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJBZGRCdG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJDb2xsYXBzZUJ0biB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uY29sbGFwc2VCdG5Sb3RhdGUge1xuICAtLXR3LXJvdGF0ZTogLTkwZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJCdG5Tdmcge1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICAtLXR3LXJvdGF0ZTogMGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLm5hdlNlY3Rpb25Db250YWluZXJCdG5Tdmcge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgfVxufVxuXG4ucm90YXRlU3ZnQnRuIHtcbiAgLS10dy1yb3RhdGU6IDQ1ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXJDb250ZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdExpc3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMjVyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uYWRkUHJvamVjdEZvcm0sXG4uYWRkTGFiZWxGb3JtIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxNnJlbTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmc6IDBweDtcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDNweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMXB4IDJweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uYWRkUHJvamVjdEZvcm06Zm9jdXMtd2l0aGluLFxuLmFkZExhYmVsRm9ybTpmb2N1cy13aXRoaW4ge1xuICAtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDJweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbi5hZGRQcm9qZWN0Rm9ybTpob3Zlcixcbi5hZGRMYWJlbEZvcm06aG92ZXIge1xuICAtLXR3LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKSwgMCAycHggNHB4IC0ycHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCA0cHggNnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cblxuLmRpc3BsYXlQcm9qZWN0Rm9ybSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIGdhcDogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi5hZGROYXZGb3JtSW5wdXQge1xuICBncmlkLWNvbHVtbjogc3BhbiA0IC8gc3BhbiA0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmFkZE5hdkZvcm1JbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkTmF2Rm9ybUlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWRkTmF2Rm9ybUlucHV0OmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5hZGROYXZGb3JtQnRuIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxuICAuYWRkTmF2Rm9ybUJ0biB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgfVxufVxuXG4vKiAubGFiZWxzQ29udGVudENvbnRhaW5lciB7XG4gIEBhcHBseTtcbn0gKi9cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjM3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNDkgMjUwIDI1MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICAtLXR3LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMC4xKSwgMCAxcHggMnB4IC0xcHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxcHggM3B4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAxcHggMnB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi5sYWJlbDpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MyAyNDQgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgLS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxuICAubGFiZWw6aG92ZXIge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1cblxuLmxhYmVsRGVsZXRlQnRuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxhYmVsRGVsZXRlQnRuU3ZnIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxuICAubGFiZWxEZWxldGVCdG5Tdmcge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi5sYWJlbHNDb250ZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuNXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMgMjQ0IDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmNvbnRlbnRDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRlbnQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbn1cblxuLmNvbnRlbnQtaGVhZGVyLWhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMTFyZW07XG4gIG1hcmdpbi1yaWdodDogMTFyZW07XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjI7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLnRvZG8tZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnRvZG8tZGV0YWlscy1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9kby1kZXRhaWxzLW5hbWU6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50b2RvLWRldGFpbHMtbmFtZTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50b2RvLWRldGFpbHMtbmFtZTpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4udG9kby1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b2RvLWRldGFpbHMtZGVzY3JpcHRpb246Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvZG8tZGV0YWlscy1kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvZG8tZGV0YWlscy1kZXNjcmlwdGlvbjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uZm9ybS1vcHRpb25hbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5mb3JtLWRldGFpbHMtdGFncyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigwIDAgMCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDAuMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuMTI1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYigwIDAgMCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMC41NTtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uZm9ybS1zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLmZvcm0tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnRvZG8tZm9ybS1idG5zIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYig1NSA2NSA4MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLnRvZG8tZm9ybS1idG5zOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uZGVsZXRlZFRhc2tXYXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMi41cmVtO1xuICB0b3A6IDEuMjVyZW07XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ud2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC0tdHctdHJhbnNsYXRlLXk6IC0xLjI1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuMTI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSAyMzEgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4ud2FybmluZzpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSAyMTMgMjE5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4udGltZXIge1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIHdpZHRoOiAxLjI1cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59XG5cbi51bmRvV2FybmluZ0J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi51bmRvV2FybmluZ0J0bjpob3ZlciB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMgNyAxOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4udGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS4yNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICBnYXA6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjM7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xufVxuXG4uY29tcGxldGVNYXJrZXJDb250YWluZW5yIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5jb21wbGV0ZU1hcmtlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFyZW07XG4gIHdpZHRoOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGJvcmRlci13aWR0aDogNHB4O1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMHB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uY29tcGxldGVNYXJrZXI6aG92ZXIge1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygycHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwICMwMDAwKTtcbn1cblxuLmNvbXBsZXRlTWFya2VyQ2hlY2tlZCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmRpc3BsYXlXYXJuaW5nIHtcbiAgLS10dy10cmFuc2xhdGUteTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRhc2tDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjEyNXJlbTtcbn1cblxuLnRhc2tIZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGFza0Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5vdGhlclRhZ3Mge1xuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFza0RhdGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAgMjUyIDIzMSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjIgMTYzIDc0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICBvdXRsaW5lLXdpZHRoOiAxcHg7XG4gIG91dGxpbmUtY29sb3I6ICMxNmEzNGE7XG59XG5cbi50YXNrUHJpb3JpdHkge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQgMjI2IDIyNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjIwIDM4IDM4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICBvdXRsaW5lLXdpZHRoOiAxcHg7XG4gIG91dGxpbmUtY29sb3I6ICNkYzI2MjY7XG59XG5cbi50YXNrVGFnIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDIzNyAyMTMgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS13aWR0aDogMXB4O1xuICBvdXRsaW5lLWNvbG9yOiAjZWE1ODBjO1xufVxuXG4udGFza0RhdGUsXG4udGFza1ByaW9yaXR5LFxuLnRhc2tUYWcge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjEyNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMTI1cmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGFza09wdGlvbnMge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuXG4udGFza0VkaXQsXG4udGFza0RlbGV0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MyAyNDQgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4udGFza0VkaXQ6aG92ZXIsXG4udGFza0RlbGV0ZTpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjQ5IDI1MCAyNTEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmRpdmlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTAuNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjE7XG59XG5cbi5oaWRlTmF2U2VjdGlvbiB7XG4gIGhlaWdodDogMHB4O1xufVxuXG4ucmVtb3ZlV2FybmluZyB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDEuMjVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaGlkZVRhc2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLnByb2plY3Qge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgLS10dy1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYigwIDAgMCAvIDAuMjUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDI1cHggNTBweCAtMTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuXG4uY2lyY2xlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBzdHJva2U6ICMyMmM1NWU7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBzdHJva2Utd2lkdGg6IDEwO1xuICBzdHJva2UtZGFzaGFycmF5OiAzMDA7XG4gIGFuaW1hdGlvbjogZGFzaCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xufVxuQGtleWZyYW1lcyBkYXNoIHtcbiAgZnJvbSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMDtcbiAgfVxuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwMDtcbiAgfVxufVxuXG4uaGlkZVZpc2liaWxpdHkge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbi53cmFwcGVyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI0OSAyNTAgMjUxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi53cmFwcGVyQnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4ud3JhcHBlckRlbGV0ZUJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLndyYXBwZXJEZWxldGVCdG46aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuODtcbn1cblxuLnVuZG9XcmFwcGVyRGVsZXRlQnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwIDM4IDM4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4udW5kb1dyYXBwZXJEZWxldGVCdG46aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDAuODtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2lucHV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLCtIQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVB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QkFBMkY7RUFBM0Ysa0JBQTJGO0VBQTNGLHVEQUEyRjtFQUEzRixxQkFBMkY7RUFBM0Ysc0JBQTJGO0VBQTNGLG9CQUEyRjtFQUEzRix1QkFBMkY7RUFBM0YsZUFBMkY7RUFBM0YsbUJBQTJGO0VBQTNGLGdCQUEyRjtFQUEzRixvQkFBMkY7RUFBM0Y7QUFBMkY7O0FBQTNGO0VBQUE7QUFBMkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuXFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuXFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvZHkge1xcbiAgQGFwcGx5IG0tYXV0byBmbGV4IG1heC13LXNjcmVlbi0yeGw7XFxufVxcblxcbi5uYXYge1xcbiAgQGFwcGx5IHN0aWNreSBsZWZ0LTAgdG9wLTAgZmxleCBtYXgtaC1mdWxsIG1pbi1oLXNjcmVlbiB3LTgwICBmbGV4LWNvbCBiZy1ncmF5LTIwMCBwLTI7XFxufVxcblxcbi51c2VySWNvbiB7XFxuICBAYXBwbHkgcHgtMyBwYi01IHB0LTQ7XFxufVxcblxcbi51c2VySWNvblN2ZyB7XFxuICBAYXBwbHkgaC05IHctOSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTYwMDtcXG59XFxuXFxuLm5hdlNlY3Rpb25Db250YWluZXIge1xcbiAgQGFwcGx5IG1iLTIgcm91bmRlZC1sZyBwLTIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6c2hhZG93O1xcbn1cXG5cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckhlYWRlciB7XFxuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHByLTAuNTtcXG59XFxuLm5hdkJ0biB7XFxuICBAYXBwbHkgdy1mdWxsIHJvdW5kZWQtbWQgYmctd2hpdGUgcC0yIHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC1ibHVlLTYwMCBzaGFkb3ctbGcgaG92ZXI6YmctZ3JheS01MCBob3Zlcjp0ZXh0LWJsdWUtODAwIGhvdmVyOnNoYWRvdy14bDtcXG59XFxuXFxuLmFjdGl2ZVRhYiB7XFxuICBAYXBwbHkgYmctYmx1ZS02MDAgIHRleHQtZ3JheS01MCBzaGFkb3ctc20gdHJhbnNpdGlvbi1hbGw7XFxufVxcbi5uYXZTZWN0aW9uQ29udGFpbmVySGVhZGluZyB7XFxuICBAYXBwbHkgZm9udC1ib2xkIHRleHQtYmx1ZS02MDA7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuIHtcXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcjtcXG59XFxuXFxuLm5hdlNlY3Rpb25Db250YWluZXJCdG4gc3ZnIHtcXG4gIEBhcHBseSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTYwMDtcXG59XFxuXFxuLm5hdlNlY3Rpb25Db250YWluZXJBZGRCdG4ge1xcbiAgQGFwcGx5IG1sLWF1dG87XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQ29sbGFwc2VCdG4ge1xcbiAgQGFwcGx5IHRyYW5zaXRpb24tdHJhbnNmb3JtO1xcbn1cXG5cXG4uY29sbGFwc2VCdG5Sb3RhdGUge1xcbiAgQGFwcGx5IC1yb3RhdGUtOTA7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnIHtcXG4gIEBhcHBseSBoLTQgdy00IHJvdGF0ZS0wIHRleHQtZ3JheS04MDAgdHJhbnNpdGlvbi1hbGwgZGFyazp0ZXh0LWJsYWNrO1xcbn1cXG5cXG4ucm90YXRlU3ZnQnRuIHtcXG4gIEBhcHBseSByb3RhdGUtNDU7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQ29udGVudENvbnRhaW5lciB7XFxuICBAYXBwbHkgZmxleCAgZmxleC1jb2wgZ2FwLTEgb3ZlcmZsb3ctaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdExpc3RDb250YWluZXIge1xcbiAgQGFwcGx5IGZsZXggaC00MCBmbGV4LWNvbCBnYXAtMSBvdmVyZmxvdy15LWF1dG8gdHJhbnNpdGlvbi1hbGw7XFxufVxcblxcbi5hZGRQcm9qZWN0Rm9ybSxcXG4uYWRkTGFiZWxGb3JtIHtcXG4gIEBhcHBseSBoLTAgdy02NCAgYmctd2hpdGUgcC0wIHNoYWRvdyB0cmFuc2l0aW9uLWFsbCAgZm9jdXMtd2l0aGluOnNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQ7XFxufVxcblxcbi5kaXNwbGF5UHJvamVjdEZvcm0ge1xcbiAgQGFwcGx5IG15LTIgZmxleCBoLTkgZ2FwLTEgcm91bmRlZC1tZCBwLTIgdHJhbnNpdGlvbi1hbGw7XFxufVxcblxcbi5hZGROYXZGb3JtSW5wdXQge1xcbiAgQGFwcGx5IGNvbC1zcGFuLTQgdy1mdWxsIGJnLXRyYW5zcGFyZW50IHRleHQtc20gZm9udC1ib2xkIHRleHQtYmx1ZS03MDAgcGxhY2Vob2xkZXI6dGV4dC1zbSBwbGFjZWhvbGRlcjpmb250LWJvbGQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmU7XFxufVxcblxcbi5hZGROYXZGb3JtQnRuIHtcXG4gIEBhcHBseSBoLTUgdy01IHRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LWJsdWUtNjAwO1xcbn1cXG5cXG4vKiAubGFiZWxzQ29udGVudENvbnRhaW5lciB7XFxuICBAYXBwbHk7XFxufSAqL1xcblxcbi5sYWJlbCB7XFxuICBAYXBwbHkgZmxleCBtaW4tdy1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLWJsdWUtNjAwICBweC0zIHB5LTEgdGV4dC14cyBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTUwIHNoYWRvdyB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGhvdmVyOnNoYWRvdy1tZCBob3ZlcjpkYXJrOnRleHQtYmx1ZS02MDA7XFxufVxcblxcbi5sYWJlbERlbGV0ZUJ0biB7XFxuICBAYXBwbHkgZm9udC1ib2xkO1xcbn1cXG5cXG4ubGFiZWxEZWxldGVCdG5Tdmcge1xcbiAgQGFwcGx5IGgtNSB3LTUgdGV4dC1pbmhlcml0IGRhcms6dGV4dC1pbmhlcml0O1xcbn1cXG5cXG4ubGFiZWxzQ29udGVudENvbnRhaW5lciB7XFxuICBAYXBwbHkgZmxleCBoLTQwIGZsZXgtd3JhcCBjb250ZW50LXN0YXJ0IGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgZ2FwLTIgb3ZlcmZsb3cteS1hdXRvIHRyYW5zaXRpb24tYWxsO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBAYXBwbHkgcmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1zdGFydCBvdmVyZmxvdy1zY3JvbGwgb3ZlcmZsb3cteC1oaWRkZW4gYmctZ3JheS0xMDAgdGV4dC1ibGFjaztcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgQGFwcGx5IGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciAganVzdGlmeS1jZW50ZXIgcHgtMTQgcHktNDtcXG59XFxuXFxuLmNvbnRlbnQtZm9ybSB7XFxuICBAYXBwbHkgZmxleCB3LWZ1bGwgbWF4LXctc2NyZWVuLW1kIGZsZXgtY29sIGdhcC0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ibGFjayBib3JkZXItb3BhY2l0eS0yMCBiZy10cmFuc3BhcmVudCBwLTI7XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICBAYXBwbHkgdy1mdWxsIHB4LTE0ICBwdC0xMjtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyLWhlYWRpbmcge1xcbiAgQGFwcGx5IG14LTQ0IGJvcmRlci1iIGJvcmRlci1ibGFjayBib3JkZXItb3BhY2l0eS0yMCBwYi0yIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNzAwO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC0xO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLW5hbWUge1xcbiAgQGFwcGx5IGJnLXRyYW5zcGFyZW50ICBwLTAgdGV4dC1iYXNlIGZvbnQtYm9sZCBwbGFjZWhvbGRlcjp0ZXh0LWJhc2UgcGxhY2Vob2xkZXI6Zm9udC1leHRyYWJvbGQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmU7XFxufVxcblxcbi50b2RvLWRldGFpbHMtZGVzY3JpcHRpb24ge1xcbiAgQGFwcGx5IGJnLXRyYW5zcGFyZW50IHAtMCB0ZXh0LXNtIGZvbnQtYm9sZCBwbGFjZWhvbGRlcjp0ZXh0LXNtIHBsYWNlaG9sZGVyOmZvbnQtYm9sZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZTtcXG59XFxuXFxuLmZvcm0tb3B0aW9uYWxzIHtcXG4gIEBhcHBseSBmbGV4IGdhcC0zO1xcbn1cXG5cXG4uZm9ybS1kZXRhaWxzLXRhZ3Mge1xcbiAgQGFwcGx5IHJvdW5kZWQgYm9yZGVyICBib3JkZXItYmxhY2sgYm9yZGVyLW9wYWNpdHktMjAgYmctdHJhbnNwYXJlbnQgcC0wLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTU1IG91dGxpbmUtbm9uZTtcXG59XFxuXFxuLmZvcm0tc3VibWl0IHtcXG4gIEBhcHBseSBmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtMztcXG59XFxuXFxuLmZvcm0tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBAYXBwbHkgZmxleCBnYXAtMTtcXG59XFxuXFxuLnRvZG8tZm9ybS1idG5zIHtcXG4gIEBhcHBseSByb3VuZGVkICBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZTtcXG59XFxuXFxuLmRlbGV0ZWRUYXNrV2FybmluZyB7XFxuICBAYXBwbHkgYWJzb2x1dGUgcmlnaHQtMTAgdG9wLTUgIHotMTAgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGdhcC0yO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBAYXBwbHkgZmxleCAtdHJhbnNsYXRlLXktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0wLjUgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIHB4LTMgcHktMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1ncmF5LTMwMDtcXG59XFxuXFxuLnRpbWVyIHtcXG4gIEBhcHBseSBoLTUgdy01IHJvdW5kZWQtZnVsbDtcXG59XFxuXFxuLnVuZG9XYXJuaW5nQnRuIHtcXG4gIEBhcHBseSByb3VuZGVkLWZ1bGwgcHgtMSB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtZ3JheS05NTA7XFxufVxcblxcbi50YXNrcyB7XFxuICBAYXBwbHkgZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC01IHB4LTE0IHB5LTQ7XFxufVxcblxcbi50YXNrIHtcXG4gIEBhcHBseSBncmlkICB3LWZ1bGwgbWF4LXctc2NyZWVuLW1kIGdhcC0yIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ibGFjayAgYm9yZGVyLW9wYWNpdHktMzAgcC0yO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXJDb250YWluZW5yIHtcXG4gIEBhcHBseSBwdC0xO1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXIge1xcbiAgQGFwcGx5IGJsb2NrIGgtNCB3LTQgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci1ibHVlLTYwMCBiZy10cmFuc3BhcmVudCByaW5nLTAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6cmluZy0yO1xcbn1cXG5cXG4uY29tcGxldGVNYXJrZXJDaGVja2VkIHtcXG4gIEBhcHBseSBiZy1ibHVlLTYwMDtcXG59XFxuXFxuLmRpc3BsYXlXYXJuaW5nIHtcXG4gIEBhcHBseSB0cmFuc2xhdGUteS0wIG9wYWNpdHktMTAwO1xcbn1cXG5cXG4udGFza0NvbnRlbnQge1xcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgZ2FwLTAuNTtcXG59XFxuXFxuLnRhc2tIZWFkaW5nIHtcXG4gIEBhcHBseSB0ZXh0LWJhc2UgZm9udC1leHRyYWJvbGQ7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgQGFwcGx5IHRleHQtc20gZm9udC1ib2xkO1xcbn1cXG5cXG4ub3RoZXJUYWdzIHtcXG4gIEBhcHBseSBtdC0wLjUgZmxleCBnYXAtMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQ7XFxufVxcblxcbi50YXNrRGF0ZSB7XFxuICBAYXBwbHkgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNjAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtZ3JlZW4tNjAwO1xcbn1cXG5cXG4udGFza1ByaW9yaXR5IHtcXG4gIEBhcHBseSBiZy1yZWQtMTAwIHRleHQtcmVkLTYwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLXJlZC02MDA7XFxufVxcblxcbi50YXNrVGFnIHtcXG4gIEBhcHBseSBiZy1vcmFuZ2UtMTAwIHRleHQtb3JhbmdlLTYwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLW9yYW5nZS02MDA7XFxufVxcblxcbi50YXNrRGF0ZSxcXG4udGFza1ByaW9yaXR5LFxcbi50YXNrVGFnIHtcXG4gIEBhcHBseSByb3VuZGVkLWZ1bGwgcHgtMiBweS0wLjUgIHRleHQteHMgZm9udC1leHRyYWJvbGQ7XFxufVxcblxcbi50YXNrT3B0aW9ucyB7XFxuICBAYXBwbHkgcC0xO1xcbn1cXG5cXG4udGFza0VkaXQsXFxuLnRhc2tEZWxldGUge1xcbiAgQGFwcGx5IHJvdW5kZWQgIGJnLWdyYXktMTAwIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtZXh0cmFib2xkIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6dGV4dC1ncmF5LTUwO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBAYXBwbHkgYWJzb2x1dGUgLWJvdHRvbS0zICB3LWZ1bGwgIGJvcmRlciBib3JkZXItYmxhY2sgYm9yZGVyLW9wYWNpdHktMTA7XFxufVxcblxcbi5oaWRlTmF2U2VjdGlvbiB7XFxuICBAYXBwbHkgaC0wO1xcbn1cXG5cXG4ucmVtb3ZlV2FybmluZyB7XFxuICBAYXBwbHkgdHJhbnNsYXRlLXktNSBvcGFjaXR5LTA7XFxufVxcblxcbi5oaWRlVGFzayB7XFxuICBAYXBwbHkgaGlkZGVuO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBAYXBwbHkgcm91bmRlZCBiZy13aGl0ZSAgcHktMSBwci0yIHRleHQtYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIEBhcHBseSBtYi0yIG1yLTEgc2hhZG93LTJ4bDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICBAYXBwbHkgaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgc3Ryb2tlLWdyZWVuLTUwMDtcXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMwMDtcXG4gIGFuaW1hdGlvbjogZGFzaCA1cyBsaW5lYXIgYWx0ZXJuYXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGRhc2gge1xcbiAgZnJvbSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7XFxuICB9XFxuICB0byB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDA7XFxuICB9XFxufVxcblxcbi5oaWRlVmlzaWJpbGl0eSB7XFxuICBAYXBwbHkgY29sbGFwc2U7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIEBhcHBseSAgYWJzb2x1dGUgZmxleCBoLWZ1bGwgdy1mdWxsIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGdhcC0yIGJnLWJsYWNrIGJnLW9wYWNpdHktODAgcC0xMjtcXG59XFxuXFxuLndyYXBwZXItaGVhZGluZyB7XFxuICBAYXBwbHkgdGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTUwO1xcbn1cXG5cXG4ud3JhcHBlckJ0bnMge1xcbiAgQGFwcGx5IGZsZXggZ2FwLTI7XFxufVxcblxcbi53cmFwcGVyRGVsZXRlQnRuIHtcXG4gIEBhcHBseSByb3VuZGVkIGJnLWJsdWUtNjAwIHB4LTMgcHktMSB0ZXh0LWJhc2UgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1vcGFjaXR5LTgwO1xcbn1cXG5cXG4udW5kb1dyYXBwZXJEZWxldGVCdG4ge1xcbiAgQGFwcGx5IHJvdW5kZWQgYmctcmVkLTYwMCBweC0zIHB5LTEgdGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS04MDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbHU9T2JqZWN0LmNyZWF0ZTt2YXIgJGU9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBmdT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBGdT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgcHU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGR1PU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIG11PShlLHQpPT4oKT0+KGUmJih0PWUoZT0wKSksdCk7dmFyIE1lPShlLHQpPT4oKT0+KHR8fGUoKHQ9e2V4cG9ydHM6e319KS5leHBvcnRzLHQpLHQuZXhwb3J0cyksV2U9KGUsdCk9Pntmb3IodmFyIHIgaW4gdCkkZShlLHIse2dldDp0W3JdLGVudW1lcmFibGU6ITB9KX0sbnI9KGUsdCxyLG4pPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBvIG9mIEZ1KHQpKSFkdS5jYWxsKGUsbykmJm8hPT1yJiYkZShlLG8se2dldDooKT0+dFtvXSxlbnVtZXJhYmxlOiEobj1mdSh0LG8pKXx8bi5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBoZT0oZSx0LHIpPT4ocj1lIT1udWxsP2x1KHB1KGUpKTp7fSxucih0fHwhZXx8IWUuX19lc01vZHVsZT8kZShyLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTpyLGUpKSxFdT1lPT5ucigkZSh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlKTt2YXIgQ3U9KGUsdCxyKT0+e2lmKCF0LmhhcyhlKSl0aHJvdyBUeXBlRXJyb3IoXCJDYW5ub3QgXCIrcil9O3ZhciBodD0oZSx0LHIpPT57aWYodC5oYXMoZSkpdGhyb3cgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKTt0IGluc3RhbmNlb2YgV2Vha1NldD90LmFkZChlKTp0LnNldChlLHIpfTt2YXIgY2U9KGUsdCxyKT0+KEN1KGUsdCxcImFjY2VzcyBwcml2YXRlIG1ldGhvZFwiKSxyKTt2YXIgb3I9TWUoZ3Q9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZ3QsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Z3QuZGVmYXVsdD11cjtmdW5jdGlvbiB1cigpe311ci5wcm90b3R5cGU9e2RpZmY6ZnVuY3Rpb24odCxyKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJmFyZ3VtZW50c1syXSE9PXZvaWQgMD9hcmd1bWVudHNbMl06e30sbz1uLmNhbGxiYWNrO3R5cGVvZiBuPT1cImZ1bmN0aW9uXCImJihvPW4sbj17fSksdGhpcy5vcHRpb25zPW47dmFyIHU9dGhpcztmdW5jdGlvbiBpKEYpe3JldHVybiBvPyhzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byh2b2lkIDAsRil9LDApLCEwKTpGfXQ9dGhpcy5jYXN0SW5wdXQodCkscj10aGlzLmNhc3RJbnB1dChyKSx0PXRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZSh0KSkscj10aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUocikpO3ZhciBzPXIubGVuZ3RoLEQ9dC5sZW5ndGgsYT0xLGM9cytEO24ubWF4RWRpdExlbmd0aCYmKGM9TWF0aC5taW4oYyxuLm1heEVkaXRMZW5ndGgpKTt2YXIgZD1be25ld1BvczotMSxjb21wb25lbnRzOltdfV0sZj10aGlzLmV4dHJhY3RDb21tb24oZFswXSxyLHQsMCk7aWYoZFswXS5uZXdQb3MrMT49cyYmZisxPj1EKXJldHVybiBpKFt7dmFsdWU6dGhpcy5qb2luKHIpLGNvdW50OnIubGVuZ3RofV0pO2Z1bmN0aW9uIHAoKXtmb3IodmFyIEY9LTEqYTtGPD1hO0YrPTIpe3ZhciBtPXZvaWQgMCxFPWRbRi0xXSxDPWRbRisxXSxnPShDP0MubmV3UG9zOjApLUY7RSYmKGRbRi0xXT12b2lkIDApO3ZhciBoPUUmJkUubmV3UG9zKzE8cyxCPUMmJjA8PWcmJmc8RDtpZighaCYmIUIpe2RbRl09dm9pZCAwO2NvbnRpbnVlfWlmKCFofHxCJiZFLm5ld1BvczxDLm5ld1Bvcz8obT15dShDKSx1LnB1c2hDb21wb25lbnQobS5jb21wb25lbnRzLHZvaWQgMCwhMCkpOihtPUUsbS5uZXdQb3MrKyx1LnB1c2hDb21wb25lbnQobS5jb21wb25lbnRzLCEwLHZvaWQgMCkpLGc9dS5leHRyYWN0Q29tbW9uKG0scix0LEYpLG0ubmV3UG9zKzE+PXMmJmcrMT49RClyZXR1cm4gaShndSh1LG0uY29tcG9uZW50cyxyLHQsdS51c2VMb25nZXN0VG9rZW4pKTtkW0ZdPW19YSsrfWlmKG8pKGZ1bmN0aW9uIEYoKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoYT5jKXJldHVybiBvKCk7cCgpfHxGKCl9LDApfSkoKTtlbHNlIGZvcig7YTw9Yzspe3ZhciBsPXAoKTtpZihsKXJldHVybiBsfX0scHVzaENvbXBvbmVudDpmdW5jdGlvbih0LHIsbil7dmFyIG89dFt0Lmxlbmd0aC0xXTtvJiZvLmFkZGVkPT09ciYmby5yZW1vdmVkPT09bj90W3QubGVuZ3RoLTFdPXtjb3VudDpvLmNvdW50KzEsYWRkZWQ6cixyZW1vdmVkOm59OnQucHVzaCh7Y291bnQ6MSxhZGRlZDpyLHJlbW92ZWQ6bn0pfSxleHRyYWN0Q29tbW9uOmZ1bmN0aW9uKHQscixuLG8pe2Zvcih2YXIgdT1yLmxlbmd0aCxpPW4ubGVuZ3RoLHM9dC5uZXdQb3MsRD1zLW8sYT0wO3MrMTx1JiZEKzE8aSYmdGhpcy5lcXVhbHMocltzKzFdLG5bRCsxXSk7KXMrKyxEKyssYSsrO3JldHVybiBhJiZ0LmNvbXBvbmVudHMucHVzaCh7Y291bnQ6YX0pLHQubmV3UG9zPXMsRH0sZXF1YWxzOmZ1bmN0aW9uKHQscil7cmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yP3RoaXMub3B0aW9ucy5jb21wYXJhdG9yKHQscik6dD09PXJ8fHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlJiZ0LnRvTG93ZXJDYXNlKCk9PT1yLnRvTG93ZXJDYXNlKCl9LHJlbW92ZUVtcHR5OmZ1bmN0aW9uKHQpe2Zvcih2YXIgcj1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXSYmci5wdXNoKHRbbl0pO3JldHVybiByfSxjYXN0SW5wdXQ6ZnVuY3Rpb24odCl7cmV0dXJuIHR9LHRva2VuaXplOmZ1bmN0aW9uKHQpe3JldHVybiB0LnNwbGl0KFwiXCIpfSxqb2luOmZ1bmN0aW9uKHQpe3JldHVybiB0LmpvaW4oXCJcIil9fTtmdW5jdGlvbiBndShlLHQscixuLG8pe2Zvcih2YXIgdT0wLGk9dC5sZW5ndGgscz0wLEQ9MDt1PGk7dSsrKXt2YXIgYT10W3VdO2lmKGEucmVtb3ZlZCl7aWYoYS52YWx1ZT1lLmpvaW4obi5zbGljZShELEQrYS5jb3VudCkpLEQrPWEuY291bnQsdSYmdFt1LTFdLmFkZGVkKXt2YXIgZD10W3UtMV07dFt1LTFdPXRbdV0sdFt1XT1kfX1lbHNle2lmKCFhLmFkZGVkJiZvKXt2YXIgYz1yLnNsaWNlKHMscythLmNvdW50KTtjPWMubWFwKGZ1bmN0aW9uKHAsbCl7dmFyIEY9bltEK2xdO3JldHVybiBGLmxlbmd0aD5wLmxlbmd0aD9GOnB9KSxhLnZhbHVlPWUuam9pbihjKX1lbHNlIGEudmFsdWU9ZS5qb2luKHIuc2xpY2UocyxzK2EuY291bnQpKTtzKz1hLmNvdW50LGEuYWRkZWR8fChEKz1hLmNvdW50KX19dmFyIGY9dFtpLTFdO3JldHVybiBpPjEmJnR5cGVvZiBmLnZhbHVlPT1cInN0cmluZ1wiJiYoZi5hZGRlZHx8Zi5yZW1vdmVkKSYmZS5lcXVhbHMoXCJcIixmLnZhbHVlKSYmKHRbaS0yXS52YWx1ZSs9Zi52YWx1ZSx0LnBvcCgpKSx0fWZ1bmN0aW9uIHl1KGUpe3JldHVybntuZXdQb3M6ZS5uZXdQb3MsY29tcG9uZW50czplLmNvbXBvbmVudHMuc2xpY2UoMCl9fX0pO3ZhciBpcj1NZSh5ZT0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh5ZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt5ZS5kaWZmQXJyYXlzPV91O3llLmFycmF5RGlmZj12b2lkIDA7dmFyIEF1PUJ1KG9yKCkpO2Z1bmN0aW9uIEJ1KGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgZ2U9bmV3IEF1LmRlZmF1bHQ7eWUuYXJyYXlEaWZmPWdlO2dlLnRva2VuaXplPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNsaWNlKCl9O2dlLmpvaW49Z2UucmVtb3ZlRW1wdHk9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9O2Z1bmN0aW9uIF91KGUsdCxyKXtyZXR1cm4gZ2UuZGlmZihlLHQscil9fSk7dmFyIFBlPU1lKChwcyxqcik9PntcInVzZSBzdHJpY3RcIjt2YXIgWXI9bmV3IFByb3h5KFN0cmluZyx7Z2V0OigpPT5Zcn0pO2pyLmV4cG9ydHM9WXJ9KTt2YXIgRm49e307V2UoRm4se2RlZmF1bHQ6KCk9PnVvLHNob3VsZEhpZ2hsaWdodDooKT0+bm99KTt2YXIgbm8sdW8scG49bXUoKCk9Pntubz0oKT0+ITEsdW89U3RyaW5nfSk7dmFyIHluPU1lKEZ0PT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KEZ0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO0Z0LmNvZGVGcmFtZUNvbHVtbnM9Z247RnQuZGVmYXVsdD1hbzt2YXIgZG49KHBuKCksRXUoRm4pKSxtbj1vbyhQZSgpLCEwKTtmdW5jdGlvbiBobihlKXtpZih0eXBlb2YgV2Vha01hcCE9XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciB0PW5ldyBXZWFrTWFwLHI9bmV3IFdlYWtNYXA7cmV0dXJuKGhuPWZ1bmN0aW9uKG4pe3JldHVybiBuP3I6dH0pKGUpfWZ1bmN0aW9uIG9vKGUsdCl7aWYoIXQmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTtpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwib2JqZWN0XCImJnR5cGVvZiBlIT1cImZ1bmN0aW9uXCIpcmV0dXJue2RlZmF1bHQ6ZX07dmFyIHI9aG4odCk7aWYociYmci5oYXMoZSkpcmV0dXJuIHIuZ2V0KGUpO3ZhciBuPXtfX3Byb3RvX186bnVsbH0sbz1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciB1IGluIGUpaWYodSE9PVwiZGVmYXVsdFwiJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx1KSl7dmFyIGk9bz9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdSk6bnVsbDtpJiYoaS5nZXR8fGkuc2V0KT9PYmplY3QuZGVmaW5lUHJvcGVydHkobix1LGkpOm5bdV09ZVt1XX1yZXR1cm4gbi5kZWZhdWx0PWUsciYmci5zZXQoZSxuKSxufXZhciBqdDtmdW5jdGlvbiBpbyhlKXtpZihlKXt2YXIgdDtyZXR1cm4odD1qdCkhPW51bGx8fChqdD1uZXcgbW4uZGVmYXVsdC5jb25zdHJ1Y3Rvcih7ZW5hYmxlZDohMCxsZXZlbDoxfSkpLGp0fXJldHVybiBtbi5kZWZhdWx0fXZhciBFbj0hMTtmdW5jdGlvbiBzbyhlKXtyZXR1cm57Z3V0dGVyOmUuZ3JleSxtYXJrZXI6ZS5yZWQuYm9sZCxtZXNzYWdlOmUucmVkLmJvbGR9fXZhciBDbj0vXFxyXFxufFtcXG5cXHJcXHUyMDI4XFx1MjAyOV0vO2Z1bmN0aW9uIERvKGUsdCxyKXtsZXQgbj1PYmplY3QuYXNzaWduKHtjb2x1bW46MCxsaW5lOi0xfSxlLnN0YXJ0KSxvPU9iamVjdC5hc3NpZ24oe30sbixlLmVuZCkse2xpbmVzQWJvdmU6dT0yLGxpbmVzQmVsb3c6aT0zfT1yfHx7fSxzPW4ubGluZSxEPW4uY29sdW1uLGE9by5saW5lLGM9by5jb2x1bW4sZD1NYXRoLm1heChzLSh1KzEpLDApLGY9TWF0aC5taW4odC5sZW5ndGgsYStpKTtzPT09LTEmJihkPTApLGE9PT0tMSYmKGY9dC5sZW5ndGgpO2xldCBwPWEtcyxsPXt9O2lmKHApZm9yKGxldCBGPTA7Rjw9cDtGKyspe2xldCBtPUYrcztpZighRClsW21dPSEwO2Vsc2UgaWYoRj09PTApe2xldCBFPXRbbS0xXS5sZW5ndGg7bFttXT1bRCxFLUQrMV19ZWxzZSBpZihGPT09cClsW21dPVswLGNdO2Vsc2V7bGV0IEU9dFttLUZdLmxlbmd0aDtsW21dPVswLEVdfX1lbHNlIEQ9PT1jP0Q/bFtzXT1bRCwwXTpsW3NdPSEwOmxbc109W0QsYy1EXTtyZXR1cm57c3RhcnQ6ZCxlbmQ6ZixtYXJrZXJMaW5lczpsfX1mdW5jdGlvbiBnbihlLHQscj17fSl7bGV0IG49KHIuaGlnaGxpZ2h0Q29kZXx8ci5mb3JjZUNvbG9yKSYmKDAsZG4uc2hvdWxkSGlnaGxpZ2h0KShyKSxvPWlvKHIuZm9yY2VDb2xvciksdT1zbyhvKSxpPShGLG0pPT5uP0YobSk6bSxzPWUuc3BsaXQoQ24pLHtzdGFydDpELGVuZDphLG1hcmtlckxpbmVzOmN9PURvKHQscyxyKSxkPXQuc3RhcnQmJnR5cGVvZiB0LnN0YXJ0LmNvbHVtbj09XCJudW1iZXJcIixmPVN0cmluZyhhKS5sZW5ndGgsbD0obj8oMCxkbi5kZWZhdWx0KShlLHIpOmUpLnNwbGl0KENuLGEpLnNsaWNlKEQsYSkubWFwKChGLG0pPT57bGV0IEU9RCsxK20sZz1gICR7YCAke0V9YC5zbGljZSgtZil9IHxgLGg9Y1tFXSxCPSFjW0UrMV07aWYoaCl7bGV0IFo9XCJcIjtpZihBcnJheS5pc0FycmF5KGgpKXtsZXQgJD1GLnNsaWNlKDAsTWF0aC5tYXgoaFswXS0xLDApKS5yZXBsYWNlKC9bXlxcdF0vZyxcIiBcIiksUT1oWzFdfHwxO1o9W2BcbiBgLGkodS5ndXR0ZXIsZy5yZXBsYWNlKC9cXGQvZyxcIiBcIikpLFwiIFwiLCQsaSh1Lm1hcmtlcixcIl5cIikucmVwZWF0KFEpXS5qb2luKFwiXCIpLEImJnIubWVzc2FnZSYmKForPVwiIFwiK2kodS5tZXNzYWdlLHIubWVzc2FnZSkpfXJldHVybltpKHUubWFya2VyLFwiPlwiKSxpKHUuZ3V0dGVyLGcpLEYubGVuZ3RoPjA/YCAke0Z9YDpcIlwiLFpdLmpvaW4oXCJcIil9ZWxzZSByZXR1cm5gICR7aSh1Lmd1dHRlcixnKX0ke0YubGVuZ3RoPjA/YCAke0Z9YDpcIlwifWB9KS5qb2luKGBcbmApO3JldHVybiByLm1lc3NhZ2UmJiFkJiYobD1gJHtcIiBcIi5yZXBlYXQoZisxKX0ke3IubWVzc2FnZX1cbiR7bH1gKSxuP28ucmVzZXQobCk6bH1mdW5jdGlvbiBhbyhlLHQscixuPXt9KXtpZighRW4pe0VuPSEwO2xldCB1PVwiUGFzc2luZyBsaW5lTnVtYmVyIGFuZCBjb2xOdW1iZXIgaXMgZGVwcmVjYXRlZCB0byBAYmFiZWwvY29kZS1mcmFtZS4gUGxlYXNlIHVzZSBgY29kZUZyYW1lQ29sdW1uc2AuXCI7e2xldCBpPW5ldyBFcnJvcih1KTtpLm5hbWU9XCJEZXByZWNhdGlvbldhcm5pbmdcIixjb25zb2xlLndhcm4obmV3IEVycm9yKHUpKX19cmV0dXJuIHI9TWF0aC5tYXgociwwKSxnbihlLHtzdGFydDp7Y29sdW1uOnIsbGluZTp0fX0sbil9fSk7dmFyIHRyPXt9O1dlKHRyLHtfX2RlYnVnOigpPT5yaSxjaGVjazooKT0+ZWksZG9jOigpPT5lcixmb3JtYXQ6KCk9PmN1LGZvcm1hdFdpdGhDdXJzb3I6KCk9PmF1LGdldFN1cHBvcnRJbmZvOigpPT50aSx1dGlsOigpPT5RdCx2ZXJzaW9uOigpPT5EdX0pO3ZhciBodT0oZSx0LHIsbik9PntpZighKGUmJnQ9PW51bGwpKXJldHVybiB0LnJlcGxhY2VBbGw/dC5yZXBsYWNlQWxsKHIsbik6ci5nbG9iYWw/dC5yZXBsYWNlKHIsbik6dC5zcGxpdChyKS5qb2luKG4pfSxlZT1odTt2YXIgS249aGUoaXIoKSwxKTt2YXIgTT1cInN0cmluZ1wiLGo9XCJhcnJheVwiLFc9XCJjdXJzb3JcIixUPVwiaW5kZW50XCIsUz1cImFsaWduXCIsdj1cInRyaW1cIixfPVwiZ3JvdXBcIixrPVwiZmlsbFwiLHg9XCJpZi1icmVha1wiLFA9XCJpbmRlbnQtaWYtYnJlYWtcIixMPVwibGluZS1zdWZmaXhcIixJPVwibGluZS1zdWZmaXgtYm91bmRhcnlcIixBPVwibGluZVwiLE89XCJsYWJlbFwiLGI9XCJicmVhay1wYXJlbnRcIixVZT1uZXcgU2V0KFtXLFQsUyx2LF8sayx4LFAsTCxJLEEsTyxiXSk7ZnVuY3Rpb24geHUoZSl7aWYodHlwZW9mIGU9PVwic3RyaW5nXCIpcmV0dXJuIE07aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gajtpZighZSlyZXR1cm47bGV0e3R5cGU6dH09ZTtpZihVZS5oYXModCkpcmV0dXJuIHR9dmFyIFU9eHU7dmFyIGt1PWU9Pm5ldyBJbnRsLkxpc3RGb3JtYXQoXCJlbi1VU1wiLHt0eXBlOlwiZGlzanVuY3Rpb25cIn0pLmZvcm1hdChlKTtmdW5jdGlvbiBidShlKXtsZXQgdD1lPT09bnVsbD9cIm51bGxcIjp0eXBlb2YgZTtpZih0IT09XCJzdHJpbmdcIiYmdCE9PVwib2JqZWN0XCIpcmV0dXJuYFVuZXhwZWN0ZWQgZG9jICcke3R9JywgXG5FeHBlY3RlZCBpdCB0byBiZSAnc3RyaW5nJyBvciAnb2JqZWN0Jy5gO2lmKFUoZSkpdGhyb3cgbmV3IEVycm9yKFwiZG9jIGlzIHZhbGlkLlwiKTtsZXQgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7aWYociE9PVwiW29iamVjdCBPYmplY3RdXCIpcmV0dXJuYFVuZXhwZWN0ZWQgZG9jICcke3J9Jy5gO2xldCBuPWt1KFsuLi5VZV0ubWFwKG89PmAnJHtvfSdgKSk7cmV0dXJuYFVuZXhwZWN0ZWQgZG9jLnR5cGUgJyR7ZS50eXBlfScuXG5FeHBlY3RlZCBpdCB0byBiZSAke259LmB9dmFyIHl0PWNsYXNzIGV4dGVuZHMgRXJyb3J7bmFtZT1cIkludmFsaWREb2NFcnJvclwiO2NvbnN0cnVjdG9yKHQpe3N1cGVyKGJ1KHQpKSx0aGlzLmRvYz10fX0scT15dDt2YXIgc3I9e307ZnVuY3Rpb24gd3UoZSx0LHIsbil7bGV0IG89W2VdO2Zvcig7by5sZW5ndGg+MDspe2xldCB1PW8ucG9wKCk7aWYodT09PXNyKXtyKG8ucG9wKCkpO2NvbnRpbnVlfXImJm8ucHVzaCh1LHNyKTtsZXQgaT1VKHUpO2lmKCFpKXRocm93IG5ldyBxKHUpO2lmKCh0PT1udWxsP3ZvaWQgMDp0KHUpKSE9PSExKXN3aXRjaChpKXtjYXNlIGo6Y2FzZSBrOntsZXQgcz1pPT09aj91OnUucGFydHM7Zm9yKGxldCBEPXMubGVuZ3RoLGE9RC0xO2E+PTA7LS1hKW8ucHVzaChzW2FdKTticmVha31jYXNlIHg6by5wdXNoKHUuZmxhdENvbnRlbnRzLHUuYnJlYWtDb250ZW50cyk7YnJlYWs7Y2FzZSBfOmlmKG4mJnUuZXhwYW5kZWRTdGF0ZXMpZm9yKGxldCBzPXUuZXhwYW5kZWRTdGF0ZXMubGVuZ3RoLEQ9cy0xO0Q+PTA7LS1EKW8ucHVzaCh1LmV4cGFuZGVkU3RhdGVzW0RdKTtlbHNlIG8ucHVzaCh1LmNvbnRlbnRzKTticmVhaztjYXNlIFM6Y2FzZSBUOmNhc2UgUDpjYXNlIE86Y2FzZSBMOm8ucHVzaCh1LmNvbnRlbnRzKTticmVhaztjYXNlIE06Y2FzZSBXOmNhc2UgdjpjYXNlIEk6Y2FzZSBBOmNhc2UgYjpicmVhaztkZWZhdWx0OnRocm93IG5ldyBxKHUpfX19dmFyIEFlPXd1O3ZhciBEcj0oKT0+e30sej1Ecix6ZT1EcjtmdW5jdGlvbiBpZShlKXtyZXR1cm4geihlKSx7dHlwZTpULGNvbnRlbnRzOmV9fWZ1bmN0aW9uIG9lKGUsdCl7cmV0dXJuIHoodCkse3R5cGU6Uyxjb250ZW50czp0LG46ZX19ZnVuY3Rpb24gQXQoZSx0PXt9KXtyZXR1cm4geihlKSx6ZSh0LmV4cGFuZGVkU3RhdGVzLCEwKSx7dHlwZTpfLGlkOnQuaWQsY29udGVudHM6ZSxicmVhazohIXQuc2hvdWxkQnJlYWssZXhwYW5kZWRTdGF0ZXM6dC5leHBhbmRlZFN0YXRlc319ZnVuY3Rpb24gYXIoZSl7cmV0dXJuIG9lKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxlKX1mdW5jdGlvbiBjcihlKXtyZXR1cm4gb2Uoe3R5cGU6XCJyb290XCJ9LGUpfWZ1bmN0aW9uIGxyKGUpe3JldHVybiBvZSgtMSxlKX1mdW5jdGlvbiBmcihlLHQpe3JldHVybiBBdChlWzBdLHsuLi50LGV4cGFuZGVkU3RhdGVzOmV9KX1mdW5jdGlvbiBHZShlKXtyZXR1cm4gemUoZSkse3R5cGU6ayxwYXJ0czplfX1mdW5jdGlvbiBGcihlLHQ9XCJcIixyPXt9KXtyZXR1cm4geihlKSx0IT09XCJcIiYmeih0KSx7dHlwZTp4LGJyZWFrQ29udGVudHM6ZSxmbGF0Q29udGVudHM6dCxncm91cElkOnIuZ3JvdXBJZH19ZnVuY3Rpb24gcHIoZSx0KXtyZXR1cm4geihlKSx7dHlwZTpQLGNvbnRlbnRzOmUsZ3JvdXBJZDp0Lmdyb3VwSWQsbmVnYXRlOnQubmVnYXRlfX1mdW5jdGlvbiBCZShlKXtyZXR1cm4geihlKSx7dHlwZTpMLGNvbnRlbnRzOmV9fXZhciBkcj17dHlwZTpJfSxsZT17dHlwZTpifSxtcj17dHlwZTp2fSxfZT17dHlwZTpBLGhhcmQ6ITB9LEJ0PXt0eXBlOkEsaGFyZDohMCxsaXRlcmFsOiEwfSxLZT17dHlwZTpBfSxFcj17dHlwZTpBLHNvZnQ6ITB9LEc9W19lLGxlXSxIZT1bQnQsbGVdLHhlPXt0eXBlOld9O2Z1bmN0aW9uIGtlKGUsdCl7eihlKSx6ZSh0KTtsZXQgcj1bXTtmb3IobGV0IG49MDtuPHQubGVuZ3RoO24rKyluIT09MCYmci5wdXNoKGUpLHIucHVzaCh0W25dKTtyZXR1cm4gcn1mdW5jdGlvbiBxZShlLHQscil7eihlKTtsZXQgbj1lO2lmKHQ+MCl7Zm9yKGxldCBvPTA7bzxNYXRoLmZsb29yKHQvcik7KytvKW49aWUobik7bj1vZSh0JXIsbiksbj1vZShOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksbil9cmV0dXJuIG59ZnVuY3Rpb24gQ3IoZSx0KXtyZXR1cm4geih0KSxlP3t0eXBlOk8sbGFiZWw6ZSxjb250ZW50czp0fTp0fXZhciBPdT0oZSx0LHIpPT57aWYoIShlJiZ0PT1udWxsKSlyZXR1cm4gQXJyYXkuaXNBcnJheSh0KXx8dHlwZW9mIHQ9PVwic3RyaW5nXCI/dFtyPDA/dC5sZW5ndGgrcjpyXTp0LmF0KHIpfSx5PU91O2Z1bmN0aW9uIGhyKGUpe2xldCB0PWUuaW5kZXhPZihcIlxcclwiKTtyZXR1cm4gdD49MD9lLmNoYXJBdCh0KzEpPT09YFxuYD9cImNybGZcIjpcImNyXCI6XCJsZlwifWZ1bmN0aW9uIGJlKGUpe3N3aXRjaChlKXtjYXNlXCJjclwiOnJldHVyblwiXFxyXCI7Y2FzZVwiY3JsZlwiOnJldHVybmBcXHJcbmA7ZGVmYXVsdDpyZXR1cm5gXG5gfX1mdW5jdGlvbiBfdChlLHQpe2xldCByO3N3aXRjaCh0KXtjYXNlYFxuYDpyPS9cXG4vZzticmVhaztjYXNlXCJcXHJcIjpyPS9cXHIvZzticmVhaztjYXNlYFxcclxuYDpyPS9cXHJcXG4vZzticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBcImVvbFwiICR7SlNPTi5zdHJpbmdpZnkodCl9LmApfWxldCBuPWUubWF0Y2gocik7cmV0dXJuIG4/bi5sZW5ndGg6MH1mdW5jdGlvbiBncihlKXtyZXR1cm4gZWUoITEsZSwvXFxyXFxuPy9nLGBcbmApfXZhciB5cj0oKT0+L1sjKjAtOV1cXHVGRTBGP1xcdTIwRTN8W1xceEE5XFx4QUVcXHUyMDNDXFx1MjA0OVxcdTIxMjJcXHUyMTM5XFx1MjE5NC1cXHUyMTk5XFx1MjFBOVxcdTIxQUFcXHUyMzFBXFx1MjMxQlxcdTIzMjhcXHUyM0NGXFx1MjNFRC1cXHUyM0VGXFx1MjNGMVxcdTIzRjJcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkJcXHUyNUZDXFx1MjVGRVxcdTI2MDAtXFx1MjYwNFxcdTI2MEVcXHUyNjExXFx1MjYxNFxcdTI2MTVcXHUyNjE4XFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5MlxcdTI2OTQtXFx1MjY5N1xcdTI2OTlcXHUyNjlCXFx1MjY5Q1xcdTI2QTBcXHUyNkE3XFx1MjZBQVxcdTI2QjBcXHUyNkIxXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDOFxcdTI2Q0ZcXHUyNkQxXFx1MjZFOVxcdTI2RjAtXFx1MjZGNVxcdTI2RjdcXHUyNkY4XFx1MjZGQVxcdTI3MDJcXHUyNzA4XFx1MjcwOVxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzU3XFx1Mjc2M1xcdTI3QTFcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldXFx1RkUwRj98W1xcdTI2MURcXHUyNzBDXFx1MjcwRF0oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHUyNzBBXFx1MjcwQl0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjY5M1xcdTI2QTFcXHUyNkFCXFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RkRcXHUyNzA1XFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjUwXXxcXHUyNkQzXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURDQTUpP3xcXHUyNkY5KD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHUyNzY0XFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1RDgzRFxcdUREMjV8XFx1RDgzRVxcdURFNzkpKT98XFx1RDgzQyg/OltcXHVEQzA0XFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdURFMDJcXHVERTM3XFx1REYyMVxcdURGMjQtXFx1REYyQ1xcdURGMzZcXHVERjdEXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFXFx1REY5RlxcdURGQ0RcXHVERkNFXFx1REZENC1cXHVERkRGXFx1REZGNVxcdURGRjddXFx1RkUwRj98W1xcdURGODVcXHVERkMyXFx1REZDN10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REZDNFxcdURGQ0FdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURGQ0JcXHVERkNDXSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdURDQ0ZcXHVERDhFXFx1REQ5MS1cXHVERDlBXFx1REUwMVxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTM2XFx1REUzOC1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjBcXHVERjJELVxcdURGMzVcXHVERjM3LVxcdURGNDNcXHVERjQ1LVxcdURGNEFcXHVERjRDLVxcdURGN0NcXHVERjdFLVxcdURGODRcXHVERjg2LVxcdURGOTNcXHVERkEwLVxcdURGQzFcXHVERkM1XFx1REZDNlxcdURGQzhcXHVERkM5XFx1REZDRi1cXHVERkQzXFx1REZFMC1cXHVERkYwXFx1REZGOC1cXHVERkZGXXxcXHVEREU2XFx1RDgzQ1tcXHVEREU4LVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjJcXHVEREY0XFx1RERGNi1cXHVEREZBXFx1RERGQ1xcdURERkRcXHVEREZGXXxcXHVEREU3XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERThcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRVxcdURERjAtXFx1RERGNVxcdURERjdcXHVEREZBLVxcdURERkZdfFxcdURERTlcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdfFxcdURERUFcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXXxcXHVEREVCXFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddfFxcdURERUNcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdfFxcdURERURcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV18XFx1RERFRVxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XXxcXHVEREVGXFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XXxcXHVEREYwXFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERGMVxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXXxcXHVEREYyXFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXXxcXHVEREYzXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdfFxcdURERjRcXHVEODNDXFx1RERGMnxcXHVEREY1XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdfFxcdURERjZcXHVEODNDXFx1RERFNnxcXHVEREY3XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ118XFx1RERGOFxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl18XFx1RERGOVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdfFxcdURERkFcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdfFxcdURERkJcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdfFxcdURERkNcXHVEODNDW1xcdURERUJcXHVEREY4XXxcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RERGRVxcdUQ4M0NbXFx1RERFQVxcdURERjldfFxcdURERkZcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ118XFx1REY0NCg/OlxcdTIwMERcXHVEODNEXFx1REZFQik/fFxcdURGNEIoPzpcXHUyMDBEXFx1RDgzRFxcdURGRTkpP3xcXHVERkMzKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVERkYzXFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1MjZBN1xcdUZFMEY/fFxcdUQ4M0NcXHVERjA4KSk/fFxcdURGRjQoPzpcXHUyMDBEXFx1MjYyMFxcdUZFMEY/fFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjJcXHVEQjQwKD86XFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0YpPyl8XFx1RDgzRCg/OltcXHVEQzNGXFx1RENGRFxcdURENDlcXHVERDRBXFx1REQ2RlxcdURENzBcXHVERDczXFx1REQ3Ni1cXHVERDc5XFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBXFx1REVDQlxcdURFQ0QtXFx1REVDRlxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUYwXFx1REVGM11cXHVGRTBGP3xbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3QVxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjRcXHVERUI1XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDMjVcXHVEQzI3LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQxXFx1REU0M1xcdURFNDRcXHVERTQ4LVxcdURFNEFcXHVERTgwLVxcdURFQTJcXHVERUE0LVxcdURFQjNcXHVERUI3LVxcdURFQkZcXHVERUMxLVxcdURFQzVcXHVERUQwLVxcdURFRDJcXHVERUQ1LVxcdURFRDdcXHVERURDLVxcdURFREZcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQ1xcdURGRTAtXFx1REZFQlxcdURGRjBdfFxcdURDMDgoPzpcXHUyMDBEXFx1MkIxQik/fFxcdURDMTUoPzpcXHUyMDBEXFx1RDgzRVxcdUREQkEpP3xcXHVEQzI2KD86XFx1MjAwRCg/OlxcdTJCMUJ8XFx1RDgzRFxcdUREMjUpKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNjkoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/W1xcdURDNjhcXHVEQzY5XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pP3xcXHVEQzY5XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2Rig/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERDc1KD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0RcXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFN0NcXHVERTgwLVxcdURFODhcXHVERTkwLVxcdURFQkRcXHVERUJGLVxcdURFQzJcXHVERUNFLVxcdURFREJcXHVERUUwLVxcdURFRThdfFxcdUREM0MoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/fFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFxcdUREQ0UoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/fFxcdURERDEoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdURERDFcXHUyMDBEXFx1RDgzRVxcdURERDIoPzpcXHUyMDBEXFx1RDgzRVxcdURERDIpP3xcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT8pKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpPykpP3xcXHVERUYxKD86XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pP3xcXHVERkZDKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSk/fFxcdURGRkQoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKT98XFx1REZGRSg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pP3xcXHVERkZGKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKT8pKT8pL2c7ZnVuY3Rpb24gQXIoZSl7cmV0dXJuIGU9PT0xMjI4OHx8ZT49NjUyODEmJmU8PTY1Mzc2fHxlPj02NTUwNCYmZTw9NjU1MTB9ZnVuY3Rpb24gQnIoZSl7cmV0dXJuIGU+PTQzNTImJmU8PTQ0NDd8fGU9PT04OTg2fHxlPT09ODk4N3x8ZT09PTkwMDF8fGU9PT05MDAyfHxlPj05MTkzJiZlPD05MTk2fHxlPT09OTIwMHx8ZT09PTkyMDN8fGU9PT05NzI1fHxlPT09OTcyNnx8ZT09PTk3NDh8fGU9PT05NzQ5fHxlPj05ODAwJiZlPD05ODExfHxlPT09OTg1NXx8ZT09PTk4NzV8fGU9PT05ODg5fHxlPT09OTg5OHx8ZT09PTk4OTl8fGU9PT05OTE3fHxlPT09OTkxOHx8ZT09PTk5MjR8fGU9PT05OTI1fHxlPT09OTkzNHx8ZT09PTk5NDB8fGU9PT05OTYyfHxlPT09OTk3MHx8ZT09PTk5NzF8fGU9PT05OTczfHxlPT09OTk3OHx8ZT09PTk5ODF8fGU9PT05OTg5fHxlPT09OTk5NHx8ZT09PTk5OTV8fGU9PT0xMDAyNHx8ZT09PTEwMDYwfHxlPT09MTAwNjJ8fGU+PTEwMDY3JiZlPD0xMDA2OXx8ZT09PTEwMDcxfHxlPj0xMDEzMyYmZTw9MTAxMzV8fGU9PT0xMDE2MHx8ZT09PTEwMTc1fHxlPT09MTEwMzV8fGU9PT0xMTAzNnx8ZT09PTExMDg4fHxlPT09MTEwOTN8fGU+PTExOTA0JiZlPD0xMTkyOXx8ZT49MTE5MzEmJmU8PTEyMDE5fHxlPj0xMjAzMiYmZTw9MTIyNDV8fGU+PTEyMjcyJiZlPD0xMjI4N3x8ZT49MTIyODkmJmU8PTEyMzUwfHxlPj0xMjM1MyYmZTw9MTI0Mzh8fGU+PTEyNDQxJiZlPD0xMjU0M3x8ZT49MTI1NDkmJmU8PTEyNTkxfHxlPj0xMjU5MyYmZTw9MTI2ODZ8fGU+PTEyNjg4JiZlPD0xMjc3MXx8ZT49MTI3ODMmJmU8PTEyODMwfHxlPj0xMjgzMiYmZTw9MTI4NzF8fGU+PTEyODgwJiZlPD0xOTkwM3x8ZT49MTk5NjgmJmU8PTQyMTI0fHxlPj00MjEyOCYmZTw9NDIxODJ8fGU+PTQzMzYwJiZlPD00MzM4OHx8ZT49NDQwMzImJmU8PTU1MjAzfHxlPj02Mzc0NCYmZTw9NjQyNTV8fGU+PTY1MDQwJiZlPD02NTA0OXx8ZT49NjUwNzImJmU8PTY1MTA2fHxlPj02NTEwOCYmZTw9NjUxMjZ8fGU+PTY1MTI4JiZlPD02NTEzMXx8ZT49OTQxNzYmJmU8PTk0MTgwfHxlPT09OTQxOTJ8fGU9PT05NDE5M3x8ZT49OTQyMDgmJmU8PTEwMDM0M3x8ZT49MTAwMzUyJiZlPD0xMDE1ODl8fGU+PTEwMTYzMiYmZTw9MTAxNjQwfHxlPj0xMTA1NzYmJmU8PTExMDU3OXx8ZT49MTEwNTgxJiZlPD0xMTA1ODd8fGU9PT0xMTA1ODl8fGU9PT0xMTA1OTB8fGU+PTExMDU5MiYmZTw9MTEwODgyfHxlPT09MTEwODk4fHxlPj0xMTA5MjgmJmU8PTExMDkzMHx8ZT09PTExMDkzM3x8ZT49MTEwOTQ4JiZlPD0xMTA5NTF8fGU+PTExMDk2MCYmZTw9MTExMzU1fHxlPT09MTI2OTgwfHxlPT09MTI3MTgzfHxlPT09MTI3Mzc0fHxlPj0xMjczNzcmJmU8PTEyNzM4Nnx8ZT49MTI3NDg4JiZlPD0xMjc0OTB8fGU+PTEyNzUwNCYmZTw9MTI3NTQ3fHxlPj0xMjc1NTImJmU8PTEyNzU2MHx8ZT09PTEyNzU2OHx8ZT09PTEyNzU2OXx8ZT49MTI3NTg0JiZlPD0xMjc1ODl8fGU+PTEyNzc0NCYmZTw9MTI3Nzc2fHxlPj0xMjc3ODkmJmU8PTEyNzc5N3x8ZT49MTI3Nzk5JiZlPD0xMjc4Njh8fGU+PTEyNzg3MCYmZTw9MTI3ODkxfHxlPj0xMjc5MDQmJmU8PTEyNzk0Nnx8ZT49MTI3OTUxJiZlPD0xMjc5NTV8fGU+PTEyNzk2OCYmZTw9MTI3OTg0fHxlPT09MTI3OTg4fHxlPj0xMjc5OTImJmU8PTEyODA2Mnx8ZT09PTEyODA2NHx8ZT49MTI4MDY2JiZlPD0xMjgyNTJ8fGU+PTEyODI1NSYmZTw9MTI4MzE3fHxlPj0xMjgzMzEmJmU8PTEyODMzNHx8ZT49MTI4MzM2JiZlPD0xMjgzNTl8fGU9PT0xMjgzNzh8fGU9PT0xMjg0MDV8fGU9PT0xMjg0MDZ8fGU9PT0xMjg0MjB8fGU+PTEyODUwNyYmZTw9MTI4NTkxfHxlPj0xMjg2NDAmJmU8PTEyODcwOXx8ZT09PTEyODcxNnx8ZT49MTI4NzIwJiZlPD0xMjg3MjJ8fGU+PTEyODcyNSYmZTw9MTI4NzI3fHxlPj0xMjg3MzImJmU8PTEyODczNXx8ZT09PTEyODc0N3x8ZT09PTEyODc0OHx8ZT49MTI4NzU2JiZlPD0xMjg3NjR8fGU+PTEyODk5MiYmZTw9MTI5MDAzfHxlPT09MTI5MDA4fHxlPj0xMjkyOTImJmU8PTEyOTMzOHx8ZT49MTI5MzQwJiZlPD0xMjkzNDl8fGU+PTEyOTM1MSYmZTw9MTI5NTM1fHxlPj0xMjk2NDgmJmU8PTEyOTY2MHx8ZT49MTI5NjY0JiZlPD0xMjk2NzJ8fGU+PTEyOTY4MCYmZTw9MTI5NzI1fHxlPj0xMjk3MjcmJmU8PTEyOTczM3x8ZT49MTI5NzQyJiZlPD0xMjk3NTV8fGU+PTEyOTc2MCYmZTw9MTI5NzY4fHxlPj0xMjk3NzYmJmU8PTEyOTc4NHx8ZT49MTMxMDcyJiZlPD0xOTY2MDV8fGU+PTE5NjYwOCYmZTw9MjYyMTQxfXZhciBfcj1lPT4hKEFyKGUpfHxCcihlKSk7dmFyIE51PS9bXlxceDIwLVxceDdGXS87ZnVuY3Rpb24gVHUoZSl7aWYoIWUpcmV0dXJuIDA7aWYoIU51LnRlc3QoZSkpcmV0dXJuIGUubGVuZ3RoO2U9ZS5yZXBsYWNlKHlyKCksXCIgIFwiKTtsZXQgdD0wO2ZvcihsZXQgciBvZiBlKXtsZXQgbj1yLmNvZGVQb2ludEF0KDApO248PTMxfHxuPj0xMjcmJm48PTE1OXx8bj49NzY4JiZuPD04Nzl8fCh0Kz1fcihuKT8xOjIpfXJldHVybiB0fXZhciB3ZT1UdTt2YXIgYnI9ZT0+e2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGU7aWYoZS50eXBlIT09ayl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdCBkb2MgdG8gYmUgJ2FycmF5JyBvciAnJHtrfScuYCk7cmV0dXJuIGUucGFydHN9O2Z1bmN0aW9uIE5lKGUsdCl7aWYodHlwZW9mIGU9PVwic3RyaW5nXCIpcmV0dXJuIHQoZSk7bGV0IHI9bmV3IE1hcDtyZXR1cm4gbihlKTtmdW5jdGlvbiBuKHUpe2lmKHIuaGFzKHUpKXJldHVybiByLmdldCh1KTtsZXQgaT1vKHUpO3JldHVybiByLnNldCh1LGkpLGl9ZnVuY3Rpb24gbyh1KXtzd2l0Y2goVSh1KSl7Y2FzZSBqOnJldHVybiB0KHUubWFwKG4pKTtjYXNlIGs6cmV0dXJuIHQoey4uLnUscGFydHM6dS5wYXJ0cy5tYXAobil9KTtjYXNlIHg6cmV0dXJuIHQoey4uLnUsYnJlYWtDb250ZW50czpuKHUuYnJlYWtDb250ZW50cyksZmxhdENvbnRlbnRzOm4odS5mbGF0Q29udGVudHMpfSk7Y2FzZSBfOntsZXR7ZXhwYW5kZWRTdGF0ZXM6aSxjb250ZW50czpzfT11O3JldHVybiBpPyhpPWkubWFwKG4pLHM9aVswXSk6cz1uKHMpLHQoey4uLnUsY29udGVudHM6cyxleHBhbmRlZFN0YXRlczppfSl9Y2FzZSBTOmNhc2UgVDpjYXNlIFA6Y2FzZSBPOmNhc2UgTDpyZXR1cm4gdCh7Li4udSxjb250ZW50czpuKHUuY29udGVudHMpfSk7Y2FzZSBNOmNhc2UgVzpjYXNlIHY6Y2FzZSBJOmNhc2UgQTpjYXNlIGI6cmV0dXJuIHQodSk7ZGVmYXVsdDp0aHJvdyBuZXcgcSh1KX19fWZ1bmN0aW9uIEplKGUsdCxyKXtsZXQgbj1yLG89ITE7ZnVuY3Rpb24gdShpKXtpZihvKXJldHVybiExO2xldCBzPXQoaSk7cyE9PXZvaWQgMCYmKG89ITAsbj1zKX1yZXR1cm4gQWUoZSx1KSxufWZ1bmN0aW9uIFN1KGUpe2lmKGUudHlwZT09PV8mJmUuYnJlYWt8fGUudHlwZT09PUEmJmUuaGFyZHx8ZS50eXBlPT09YilyZXR1cm4hMH1mdW5jdGlvbiB3cihlKXtyZXR1cm4gSmUoZSxTdSwhMSl9ZnVuY3Rpb24geHIoZSl7aWYoZS5sZW5ndGg+MCl7bGV0IHQ9eSghMSxlLC0xKTshdC5leHBhbmRlZFN0YXRlcyYmIXQuYnJlYWsmJih0LmJyZWFrPVwicHJvcGFnYXRlZFwiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBPcihlKXtsZXQgdD1uZXcgU2V0LHI9W107ZnVuY3Rpb24gbih1KXtpZih1LnR5cGU9PT1iJiZ4cihyKSx1LnR5cGU9PT1fKXtpZihyLnB1c2godSksdC5oYXModSkpcmV0dXJuITE7dC5hZGQodSl9fWZ1bmN0aW9uIG8odSl7dS50eXBlPT09XyYmci5wb3AoKS5icmVhayYmeHIocil9QWUoZSxuLG8sITApfWZ1bmN0aW9uIHZ1KGUpe3JldHVybiBlLnR5cGU9PT1BJiYhZS5oYXJkP2Uuc29mdD9cIlwiOlwiIFwiOmUudHlwZT09PXg/ZS5mbGF0Q29udGVudHM6ZX1mdW5jdGlvbiBOcihlKXtyZXR1cm4gTmUoZSx2dSl9ZnVuY3Rpb24ga3IoZSl7Zm9yKGU9Wy4uLmVdO2UubGVuZ3RoPj0yJiZ5KCExLGUsLTIpLnR5cGU9PT1BJiZ5KCExLGUsLTEpLnR5cGU9PT1iOyllLmxlbmd0aC09MjtpZihlLmxlbmd0aD4wKXtsZXQgdD1PZSh5KCExLGUsLTEpKTtlW2UubGVuZ3RoLTFdPXR9cmV0dXJuIGV9ZnVuY3Rpb24gT2UoZSl7c3dpdGNoKFUoZSkpe2Nhc2UgUzpjYXNlIFQ6Y2FzZSBQOmNhc2UgXzpjYXNlIEw6Y2FzZSBPOntsZXQgdD1PZShlLmNvbnRlbnRzKTtyZXR1cm57Li4uZSxjb250ZW50czp0fX1jYXNlIHg6cmV0dXJuey4uLmUsYnJlYWtDb250ZW50czpPZShlLmJyZWFrQ29udGVudHMpLGZsYXRDb250ZW50czpPZShlLmZsYXRDb250ZW50cyl9O2Nhc2UgazpyZXR1cm57Li4uZSxwYXJ0czprcihlLnBhcnRzKX07Y2FzZSBqOnJldHVybiBrcihlKTtjYXNlIE06cmV0dXJuIGUucmVwbGFjZSgvW1xcblxccl0qJC8sXCJcIik7Y2FzZSBXOmNhc2UgdjpjYXNlIEk6Y2FzZSBBOmNhc2UgYjpicmVhaztkZWZhdWx0OnRocm93IG5ldyBxKGUpfXJldHVybiBlfWZ1bmN0aW9uIFhlKGUpe3JldHVybiBPZShMdShlKSl9ZnVuY3Rpb24gUHUoZSl7c3dpdGNoKFUoZSkpe2Nhc2UgazppZihlLnBhcnRzLmV2ZXJ5KHQ9PnQ9PT1cIlwiKSlyZXR1cm5cIlwiO2JyZWFrO2Nhc2UgXzppZighZS5jb250ZW50cyYmIWUuaWQmJiFlLmJyZWFrJiYhZS5leHBhbmRlZFN0YXRlcylyZXR1cm5cIlwiO2lmKGUuY29udGVudHMudHlwZT09PV8mJmUuY29udGVudHMuaWQ9PT1lLmlkJiZlLmNvbnRlbnRzLmJyZWFrPT09ZS5icmVhayYmZS5jb250ZW50cy5leHBhbmRlZFN0YXRlcz09PWUuZXhwYW5kZWRTdGF0ZXMpcmV0dXJuIGUuY29udGVudHM7YnJlYWs7Y2FzZSBTOmNhc2UgVDpjYXNlIFA6Y2FzZSBMOmlmKCFlLmNvbnRlbnRzKXJldHVyblwiXCI7YnJlYWs7Y2FzZSB4OmlmKCFlLmZsYXRDb250ZW50cyYmIWUuYnJlYWtDb250ZW50cylyZXR1cm5cIlwiO2JyZWFrO2Nhc2Ugajp7bGV0IHQ9W107Zm9yKGxldCByIG9mIGUpe2lmKCFyKWNvbnRpbnVlO2xldFtuLC4uLm9dPUFycmF5LmlzQXJyYXkocik/cjpbcl07dHlwZW9mIG49PVwic3RyaW5nXCImJnR5cGVvZiB5KCExLHQsLTEpPT1cInN0cmluZ1wiP3RbdC5sZW5ndGgtMV0rPW46dC5wdXNoKG4pLHQucHVzaCguLi5vKX1yZXR1cm4gdC5sZW5ndGg9PT0wP1wiXCI6dC5sZW5ndGg9PT0xP3RbMF06dH1jYXNlIE06Y2FzZSBXOmNhc2UgdjpjYXNlIEk6Y2FzZSBBOmNhc2UgTzpjYXNlIGI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgcShlKX1yZXR1cm4gZX1mdW5jdGlvbiBMdShlKXtyZXR1cm4gTmUoZSx0PT5QdSh0KSl9ZnVuY3Rpb24gVHIoZSx0PUhlKXtyZXR1cm4gTmUoZSxyPT50eXBlb2Ygcj09XCJzdHJpbmdcIj9rZSh0LHIuc3BsaXQoYFxuYCkpOnIpfWZ1bmN0aW9uIEl1KGUpe2lmKGUudHlwZT09PUEpcmV0dXJuITB9ZnVuY3Rpb24gU3IoZSl7cmV0dXJuIEplKGUsSXUsITEpfWZ1bmN0aW9uIFplKGUsdCl7cmV0dXJuIGUudHlwZT09PU8/ey4uLmUsY29udGVudHM6dChlLmNvbnRlbnRzKX06dChlKX12YXIgUj1TeW1ib2woXCJNT0RFX0JSRUFLXCIpLEs9U3ltYm9sKFwiTU9ERV9GTEFUXCIpLFRlPVN5bWJvbChcImN1cnNvclwiKTtmdW5jdGlvbiB2cigpe3JldHVybnt2YWx1ZTpcIlwiLGxlbmd0aDowLHF1ZXVlOltdfX1mdW5jdGlvbiBSdShlLHQpe3JldHVybiB4dChlLHt0eXBlOlwiaW5kZW50XCJ9LHQpfWZ1bmN0aW9uIFl1KGUsdCxyKXtyZXR1cm4gdD09PU51bWJlci5ORUdBVElWRV9JTkZJTklUWT9lLnJvb3R8fHZyKCk6dDwwP3h0KGUse3R5cGU6XCJkZWRlbnRcIn0scik6dD90LnR5cGU9PT1cInJvb3RcIj97Li4uZSxyb290OmV9Onh0KGUse3R5cGU6dHlwZW9mIHQ9PVwic3RyaW5nXCI/XCJzdHJpbmdBbGlnblwiOlwibnVtYmVyQWxpZ25cIixuOnR9LHIpOmV9ZnVuY3Rpb24geHQoZSx0LHIpe2xldCBuPXQudHlwZT09PVwiZGVkZW50XCI/ZS5xdWV1ZS5zbGljZSgwLC0xKTpbLi4uZS5xdWV1ZSx0XSxvPVwiXCIsdT0wLGk9MCxzPTA7Zm9yKGxldCBsIG9mIG4pc3dpdGNoKGwudHlwZSl7Y2FzZVwiaW5kZW50XCI6YygpLHIudXNlVGFicz9EKDEpOmEoci50YWJXaWR0aCk7YnJlYWs7Y2FzZVwic3RyaW5nQWxpZ25cIjpjKCksbys9bC5uLHUrPWwubi5sZW5ndGg7YnJlYWs7Y2FzZVwibnVtYmVyQWxpZ25cIjppKz0xLHMrPWwubjticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB0eXBlICcke2wudHlwZX0nYCl9cmV0dXJuIGYoKSx7Li4uZSx2YWx1ZTpvLGxlbmd0aDp1LHF1ZXVlOm59O2Z1bmN0aW9uIEQobCl7bys9XCJcdFwiLnJlcGVhdChsKSx1Kz1yLnRhYldpZHRoKmx9ZnVuY3Rpb24gYShsKXtvKz1cIiBcIi5yZXBlYXQobCksdSs9bH1mdW5jdGlvbiBjKCl7ci51c2VUYWJzP2QoKTpmKCl9ZnVuY3Rpb24gZCgpe2k+MCYmRChpKSxwKCl9ZnVuY3Rpb24gZigpe3M+MCYmYShzKSxwKCl9ZnVuY3Rpb24gcCgpe2k9MCxzPTB9fWZ1bmN0aW9uIGt0KGUpe2xldCB0PTAscj0wLG49ZS5sZW5ndGg7ZTpmb3IoO24tLTspe2xldCBvPWVbbl07aWYobz09PVRlKXtyKys7Y29udGludWV9Zm9yKGxldCB1PW8ubGVuZ3RoLTE7dT49MDt1LS0pe2xldCBpPW9bdV07aWYoaT09PVwiIFwifHxpPT09XCJcdFwiKXQrKztlbHNle2Vbbl09by5zbGljZSgwLHUrMSk7YnJlYWsgZX19fWlmKHQ+MHx8cj4wKWZvcihlLmxlbmd0aD1uKzE7ci0tID4wOyllLnB1c2goVGUpO3JldHVybiB0fWZ1bmN0aW9uIFFlKGUsdCxyLG4sbyx1KXtpZihyPT09TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKXJldHVybiEwO2xldCBpPXQubGVuZ3RoLHM9W2VdLEQ9W107Zm9yKDtyPj0wOyl7aWYocy5sZW5ndGg9PT0wKXtpZihpPT09MClyZXR1cm4hMDtzLnB1c2godFstLWldKTtjb250aW51ZX1sZXR7bW9kZTphLGRvYzpjfT1zLnBvcCgpO3N3aXRjaChVKGMpKXtjYXNlIE06RC5wdXNoKGMpLHItPXdlKGMpO2JyZWFrO2Nhc2UgajpjYXNlIGs6e2xldCBkPWJyKGMpO2ZvcihsZXQgZj1kLmxlbmd0aC0xO2Y+PTA7Zi0tKXMucHVzaCh7bW9kZTphLGRvYzpkW2ZdfSk7YnJlYWt9Y2FzZSBUOmNhc2UgUzpjYXNlIFA6Y2FzZSBPOnMucHVzaCh7bW9kZTphLGRvYzpjLmNvbnRlbnRzfSk7YnJlYWs7Y2FzZSB2OnIrPWt0KEQpO2JyZWFrO2Nhc2UgXzp7aWYodSYmYy5icmVhaylyZXR1cm4hMTtsZXQgZD1jLmJyZWFrP1I6YSxmPWMuZXhwYW5kZWRTdGF0ZXMmJmQ9PT1SP3koITEsYy5leHBhbmRlZFN0YXRlcywtMSk6Yy5jb250ZW50cztzLnB1c2goe21vZGU6ZCxkb2M6Zn0pO2JyZWFrfWNhc2UgeDp7bGV0IGY9KGMuZ3JvdXBJZD9vW2MuZ3JvdXBJZF18fEs6YSk9PT1SP2MuYnJlYWtDb250ZW50czpjLmZsYXRDb250ZW50cztmJiZzLnB1c2goe21vZGU6YSxkb2M6Zn0pO2JyZWFrfWNhc2UgQTppZihhPT09Unx8Yy5oYXJkKXJldHVybiEwO2Muc29mdHx8KEQucHVzaChcIiBcIiksci0tKTticmVhaztjYXNlIEw6bj0hMDticmVhaztjYXNlIEk6aWYobilyZXR1cm4hMTticmVha319cmV0dXJuITF9ZnVuY3Rpb24gZmUoZSx0KXtsZXQgcj17fSxuPXQucHJpbnRXaWR0aCxvPWJlKHQuZW5kT2ZMaW5lKSx1PTAsaT1be2luZDp2cigpLG1vZGU6Uixkb2M6ZX1dLHM9W10sRD0hMSxhPVtdLGM9MDtmb3IoT3IoZSk7aS5sZW5ndGg+MDspe2xldHtpbmQ6Zixtb2RlOnAsZG9jOmx9PWkucG9wKCk7c3dpdGNoKFUobCkpe2Nhc2UgTTp7bGV0IEY9byE9PWBcbmA/ZWUoITEsbCxgXG5gLG8pOmw7cy5wdXNoKEYpLGkubGVuZ3RoPjAmJih1Kz13ZShGKSk7YnJlYWt9Y2FzZSBqOmZvcihsZXQgRj1sLmxlbmd0aC0xO0Y+PTA7Ri0tKWkucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzpsW0ZdfSk7YnJlYWs7Y2FzZSBXOmlmKGM+PTIpdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYXJlIHRvbyBtYW55ICdjdXJzb3InIGluIGRvYy5cIik7cy5wdXNoKFRlKSxjKys7YnJlYWs7Y2FzZSBUOmkucHVzaCh7aW5kOlJ1KGYsdCksbW9kZTpwLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWs7Y2FzZSBTOmkucHVzaCh7aW5kOll1KGYsbC5uLHQpLG1vZGU6cCxkb2M6bC5jb250ZW50c30pO2JyZWFrO2Nhc2Ugdjp1LT1rdChzKTticmVhaztjYXNlIF86c3dpdGNoKHApe2Nhc2UgSzppZighRCl7aS5wdXNoKHtpbmQ6Zixtb2RlOmwuYnJlYWs/UjpLLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWt9Y2FzZSBSOntEPSExO2xldCBGPXtpbmQ6Zixtb2RlOkssZG9jOmwuY29udGVudHN9LG09bi11LEU9YS5sZW5ndGg+MDtpZighbC5icmVhayYmUWUoRixpLG0sRSxyKSlpLnB1c2goRik7ZWxzZSBpZihsLmV4cGFuZGVkU3RhdGVzKXtsZXQgQz15KCExLGwuZXhwYW5kZWRTdGF0ZXMsLTEpO2lmKGwuYnJlYWspe2kucHVzaCh7aW5kOmYsbW9kZTpSLGRvYzpDfSk7YnJlYWt9ZWxzZSBmb3IobGV0IGc9MTtnPGwuZXhwYW5kZWRTdGF0ZXMubGVuZ3RoKzE7ZysrKWlmKGc+PWwuZXhwYW5kZWRTdGF0ZXMubGVuZ3RoKXtpLnB1c2goe2luZDpmLG1vZGU6Uixkb2M6Q30pO2JyZWFrfWVsc2V7bGV0IGg9bC5leHBhbmRlZFN0YXRlc1tnXSxCPXtpbmQ6Zixtb2RlOkssZG9jOmh9O2lmKFFlKEIsaSxtLEUscikpe2kucHVzaChCKTticmVha319fWVsc2UgaS5wdXNoKHtpbmQ6Zixtb2RlOlIsZG9jOmwuY29udGVudHN9KTticmVha319bC5pZCYmKHJbbC5pZF09eSghMSxpLC0xKS5tb2RlKTticmVhaztjYXNlIGs6e2xldCBGPW4tdSx7cGFydHM6bX09bDtpZihtLmxlbmd0aD09PTApYnJlYWs7bGV0W0UsQ109bSxnPXtpbmQ6Zixtb2RlOkssZG9jOkV9LGg9e2luZDpmLG1vZGU6Uixkb2M6RX0sQj1RZShnLFtdLEYsYS5sZW5ndGg+MCxyLCEwKTtpZihtLmxlbmd0aD09PTEpe0I/aS5wdXNoKGcpOmkucHVzaChoKTticmVha31sZXQgWj17aW5kOmYsbW9kZTpLLGRvYzpDfSwkPXtpbmQ6Zixtb2RlOlIsZG9jOkN9O2lmKG0ubGVuZ3RoPT09Mil7Qj9pLnB1c2goWixnKTppLnB1c2goJCxoKTticmVha31tLnNwbGljZSgwLDIpO2xldCBRPXtpbmQ6Zixtb2RlOnAsZG9jOkdlKG0pfSxycj1tWzBdO1FlKHtpbmQ6Zixtb2RlOkssZG9jOltFLEMscnJdfSxbXSxGLGEubGVuZ3RoPjAsciwhMCk/aS5wdXNoKFEsWixnKTpCP2kucHVzaChRLCQsZyk6aS5wdXNoKFEsJCxoKTticmVha31jYXNlIHg6Y2FzZSBQOntsZXQgRj1sLmdyb3VwSWQ/cltsLmdyb3VwSWRdOnA7aWYoRj09PVIpe2xldCBtPWwudHlwZT09PXg/bC5icmVha0NvbnRlbnRzOmwubmVnYXRlP2wuY29udGVudHM6aWUobC5jb250ZW50cyk7bSYmaS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOm19KX1pZihGPT09Syl7bGV0IG09bC50eXBlPT09eD9sLmZsYXRDb250ZW50czpsLm5lZ2F0ZT9pZShsLmNvbnRlbnRzKTpsLmNvbnRlbnRzO20mJmkucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzptfSl9YnJlYWt9Y2FzZSBMOmEucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWs7Y2FzZSBJOmEubGVuZ3RoPjAmJmkucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzpfZX0pO2JyZWFrO2Nhc2UgQTpzd2l0Y2gocCl7Y2FzZSBLOmlmKGwuaGFyZClEPSEwO2Vsc2V7bC5zb2Z0fHwocy5wdXNoKFwiIFwiKSx1Kz0xKTticmVha31jYXNlIFI6aWYoYS5sZW5ndGg+MCl7aS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOmx9LC4uLmEucmV2ZXJzZSgpKSxhLmxlbmd0aD0wO2JyZWFrfWwubGl0ZXJhbD9mLnJvb3Q/KHMucHVzaChvLGYucm9vdC52YWx1ZSksdT1mLnJvb3QubGVuZ3RoKToocy5wdXNoKG8pLHU9MCk6KHUtPWt0KHMpLHMucHVzaChvK2YudmFsdWUpLHU9Zi5sZW5ndGgpO2JyZWFrfWJyZWFrO2Nhc2UgTzppLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bC5jb250ZW50c30pO2JyZWFrO2Nhc2UgYjpicmVhaztkZWZhdWx0OnRocm93IG5ldyBxKGwpfWkubGVuZ3RoPT09MCYmYS5sZW5ndGg+MCYmKGkucHVzaCguLi5hLnJldmVyc2UoKSksYS5sZW5ndGg9MCl9bGV0IGQ9cy5pbmRleE9mKFRlKTtpZihkIT09LTEpe2xldCBmPXMuaW5kZXhPZihUZSxkKzEpLHA9cy5zbGljZSgwLGQpLmpvaW4oXCJcIiksbD1zLnNsaWNlKGQrMSxmKS5qb2luKFwiXCIpLEY9cy5zbGljZShmKzEpLmpvaW4oXCJcIik7cmV0dXJue2Zvcm1hdHRlZDpwK2wrRixjdXJzb3JOb2RlU3RhcnQ6cC5sZW5ndGgsY3Vyc29yTm9kZVRleHQ6bH19cmV0dXJue2Zvcm1hdHRlZDpzLmpvaW4oXCJcIil9fWZ1bmN0aW9uIEooZSl7dmFyIHQ7aWYoIWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpKXtsZXQgcj1bXTtmb3IobGV0IG4gb2YgZSlpZihBcnJheS5pc0FycmF5KG4pKXIucHVzaCguLi5KKG4pKTtlbHNle2xldCBvPUoobik7byE9PVwiXCImJnIucHVzaChvKX1yZXR1cm4gcn1yZXR1cm4gZS50eXBlPT09eD97Li4uZSxicmVha0NvbnRlbnRzOkooZS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6SihlLmZsYXRDb250ZW50cyl9OmUudHlwZT09PV8/ey4uLmUsY29udGVudHM6SihlLmNvbnRlbnRzKSxleHBhbmRlZFN0YXRlczoodD1lLmV4cGFuZGVkU3RhdGVzKT09bnVsbD92b2lkIDA6dC5tYXAoSil9OmUudHlwZT09PWs/e3R5cGU6XCJmaWxsXCIscGFydHM6ZS5wYXJ0cy5tYXAoSil9OmUuY29udGVudHM/ey4uLmUsY29udGVudHM6SihlLmNvbnRlbnRzKX06ZX1mdW5jdGlvbiBQcihlKXtsZXQgdD1PYmplY3QuY3JlYXRlKG51bGwpLHI9bmV3IFNldDtyZXR1cm4gbihKKGUpKTtmdW5jdGlvbiBuKHUsaSxzKXt2YXIgRCxhO2lmKHR5cGVvZiB1PT1cInN0cmluZ1wiKXJldHVybiBKU09OLnN0cmluZ2lmeSh1KTtpZihBcnJheS5pc0FycmF5KHUpKXtsZXQgYz11Lm1hcChuKS5maWx0ZXIoQm9vbGVhbik7cmV0dXJuIGMubGVuZ3RoPT09MT9jWzBdOmBbJHtjLmpvaW4oXCIsIFwiKX1dYH1pZih1LnR5cGU9PT1BKXtsZXQgYz0oKEQ9cz09bnVsbD92b2lkIDA6c1tpKzFdKT09bnVsbD92b2lkIDA6RC50eXBlKT09PWI7cmV0dXJuIHUubGl0ZXJhbD9jP1wibGl0ZXJhbGxpbmVcIjpcImxpdGVyYWxsaW5lV2l0aG91dEJyZWFrUGFyZW50XCI6dS5oYXJkP2M/XCJoYXJkbGluZVwiOlwiaGFyZGxpbmVXaXRob3V0QnJlYWtQYXJlbnRcIjp1LnNvZnQ/XCJzb2Z0bGluZVwiOlwibGluZVwifWlmKHUudHlwZT09PWIpcmV0dXJuKChhPXM9PW51bGw/dm9pZCAwOnNbaS0xXSk9PW51bGw/dm9pZCAwOmEudHlwZSk9PT1BJiZzW2ktMV0uaGFyZD92b2lkIDA6XCJicmVha1BhcmVudFwiO2lmKHUudHlwZT09PXYpcmV0dXJuXCJ0cmltXCI7aWYodS50eXBlPT09VClyZXR1cm5cImluZGVudChcIituKHUuY29udGVudHMpK1wiKVwiO2lmKHUudHlwZT09PVMpcmV0dXJuIHUubj09PU51bWJlci5ORUdBVElWRV9JTkZJTklUWT9cImRlZGVudFRvUm9vdChcIituKHUuY29udGVudHMpK1wiKVwiOnUubjwwP1wiZGVkZW50KFwiK24odS5jb250ZW50cykrXCIpXCI6dS5uLnR5cGU9PT1cInJvb3RcIj9cIm1hcmtBc1Jvb3QoXCIrbih1LmNvbnRlbnRzKStcIilcIjpcImFsaWduKFwiK0pTT04uc3RyaW5naWZ5KHUubikrXCIsIFwiK24odS5jb250ZW50cykrXCIpXCI7aWYodS50eXBlPT09eClyZXR1cm5cImlmQnJlYWsoXCIrbih1LmJyZWFrQ29udGVudHMpKyh1LmZsYXRDb250ZW50cz9cIiwgXCIrbih1LmZsYXRDb250ZW50cyk6XCJcIikrKHUuZ3JvdXBJZD8odS5mbGF0Q29udGVudHM/XCJcIjonLCBcIlwiJykrYCwgeyBncm91cElkOiAke28odS5ncm91cElkKX0gfWA6XCJcIikrXCIpXCI7aWYodS50eXBlPT09UCl7bGV0IGM9W107dS5uZWdhdGUmJmMucHVzaChcIm5lZ2F0ZTogdHJ1ZVwiKSx1Lmdyb3VwSWQmJmMucHVzaChgZ3JvdXBJZDogJHtvKHUuZ3JvdXBJZCl9YCk7bGV0IGQ9Yy5sZW5ndGg+MD9gLCB7ICR7Yy5qb2luKFwiLCBcIil9IH1gOlwiXCI7cmV0dXJuYGluZGVudElmQnJlYWsoJHtuKHUuY29udGVudHMpfSR7ZH0pYH1pZih1LnR5cGU9PT1fKXtsZXQgYz1bXTt1LmJyZWFrJiZ1LmJyZWFrIT09XCJwcm9wYWdhdGVkXCImJmMucHVzaChcInNob3VsZEJyZWFrOiB0cnVlXCIpLHUuaWQmJmMucHVzaChgaWQ6ICR7byh1LmlkKX1gKTtsZXQgZD1jLmxlbmd0aD4wP2AsIHsgJHtjLmpvaW4oXCIsIFwiKX0gfWA6XCJcIjtyZXR1cm4gdS5leHBhbmRlZFN0YXRlcz9gY29uZGl0aW9uYWxHcm91cChbJHt1LmV4cGFuZGVkU3RhdGVzLm1hcChmPT5uKGYpKS5qb2luKFwiLFwiKX1dJHtkfSlgOmBncm91cCgke24odS5jb250ZW50cyl9JHtkfSlgfWlmKHUudHlwZT09PWspcmV0dXJuYGZpbGwoWyR7dS5wYXJ0cy5tYXAoYz0+bihjKSkuam9pbihcIiwgXCIpfV0pYDtpZih1LnR5cGU9PT1MKXJldHVyblwibGluZVN1ZmZpeChcIituKHUuY29udGVudHMpK1wiKVwiO2lmKHUudHlwZT09PUkpcmV0dXJuXCJsaW5lU3VmZml4Qm91bmRhcnlcIjtpZih1LnR5cGU9PT1PKXJldHVybmBsYWJlbCgke0pTT04uc3RyaW5naWZ5KHUubGFiZWwpfSwgJHtuKHUuY29udGVudHMpfSlgO3Rocm93IG5ldyBFcnJvcihcIlVua25vd24gZG9jIHR5cGUgXCIrdS50eXBlKX1mdW5jdGlvbiBvKHUpe2lmKHR5cGVvZiB1IT1cInN5bWJvbFwiKXJldHVybiBKU09OLnN0cmluZ2lmeShTdHJpbmcodSkpO2lmKHUgaW4gdClyZXR1cm4gdFt1XTtsZXQgaT11LmRlc2NyaXB0aW9ufHxcInN5bWJvbFwiO2ZvcihsZXQgcz0wOztzKyspe2xldCBEPWkrKHM+MD9gICMke3N9YDpcIlwiKTtpZighci5oYXMoRCkpcmV0dXJuIHIuYWRkKEQpLHRbdV09YFN5bWJvbC5mb3IoJHtKU09OLnN0cmluZ2lmeShEKX0pYH19fWZ1bmN0aW9uIGp1KGUsdCxyPTApe2xldCBuPTA7Zm9yKGxldCBvPXI7bzxlLmxlbmd0aDsrK28pZVtvXT09PVwiXHRcIj9uPW4rdC1uJXQ6bisrO3JldHVybiBufXZhciBGZT1qdTt2YXIgU2U9Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiQ29uZmlnRXJyb3JcIn0sdmU9Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiVW5kZWZpbmVkUGFyc2VyRXJyb3JcIn07dmFyIExyPXtjdXJzb3JPZmZzZXQ6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJpbnRcIixkZWZhdWx0Oi0xLHJhbmdlOntzdGFydDotMSxlbmQ6MS8wLHN0ZXA6MX0sZGVzY3JpcHRpb246XCJQcmludCAodG8gc3RkZXJyKSB3aGVyZSBhIGN1cnNvciBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gd291bGQgbW92ZSB0byBhZnRlciBmb3JtYXR0aW5nLlwiLGNsaUNhdGVnb3J5OlwiRWRpdG9yXCJ9LGVuZE9mTGluZTp7Y2F0ZWdvcnk6XCJHbG9iYWxcIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcImxmXCIsZGVzY3JpcHRpb246XCJXaGljaCBlbmQgb2YgbGluZSBjaGFyYWN0ZXJzIHRvIGFwcGx5LlwiLGNob2ljZXM6W3t2YWx1ZTpcImxmXCIsZGVzY3JpcHRpb246XCJMaW5lIEZlZWQgb25seSAoXFxcXG4pLCBjb21tb24gb24gTGludXggYW5kIG1hY09TIGFzIHdlbGwgYXMgaW5zaWRlIGdpdCByZXBvc1wifSx7dmFsdWU6XCJjcmxmXCIsZGVzY3JpcHRpb246XCJDYXJyaWFnZSBSZXR1cm4gKyBMaW5lIEZlZWQgY2hhcmFjdGVycyAoXFxcXHJcXFxcbiksIGNvbW1vbiBvbiBXaW5kb3dzXCJ9LHt2YWx1ZTpcImNyXCIsZGVzY3JpcHRpb246XCJDYXJyaWFnZSBSZXR1cm4gY2hhcmFjdGVyIG9ubHkgKFxcXFxyKSwgdXNlZCB2ZXJ5IHJhcmVseVwifSx7dmFsdWU6XCJhdXRvXCIsZGVzY3JpcHRpb246YE1haW50YWluIGV4aXN0aW5nXG4obWl4ZWQgdmFsdWVzIHdpdGhpbiBvbmUgZmlsZSBhcmUgbm9ybWFsaXNlZCBieSBsb29raW5nIGF0IHdoYXQncyB1c2VkIGFmdGVyIHRoZSBmaXJzdCBsaW5lKWB9XX0sZmlsZXBhdGg6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJwYXRoXCIsZGVzY3JpcHRpb246XCJTcGVjaWZ5IHRoZSBpbnB1dCBmaWxlcGF0aC4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gZG8gcGFyc2VyIGluZmVyZW5jZS5cIixjbGlOYW1lOlwic3RkaW4tZmlsZXBhdGhcIixjbGlDYXRlZ29yeTpcIk90aGVyXCIsY2xpRGVzY3JpcHRpb246XCJQYXRoIHRvIHRoZSBmaWxlIHRvIHByZXRlbmQgdGhhdCBzdGRpbiBjb21lcyBmcm9tLlwifSxpbnNlcnRQcmFnbWE6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIkluc2VydCBAZm9ybWF0IHByYWdtYSBpbnRvIGZpbGUncyBmaXJzdCBkb2NibG9jayBjb21tZW50LlwiLGNsaUNhdGVnb3J5OlwiT3RoZXJcIn0scGFyc2VyOntjYXRlZ29yeTpcIkdsb2JhbFwiLHR5cGU6XCJjaG9pY2VcIixkZWZhdWx0OnZvaWQgMCxkZXNjcmlwdGlvbjpcIldoaWNoIHBhcnNlciB0byB1c2UuXCIsZXhjZXB0aW9uOmU9PnR5cGVvZiBlPT1cInN0cmluZ1wifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiLGNob2ljZXM6W3t2YWx1ZTpcImZsb3dcIixkZXNjcmlwdGlvbjpcIkZsb3dcIn0se3ZhbHVlOlwiYmFiZWxcIixkZXNjcmlwdGlvbjpcIkphdmFTY3JpcHRcIn0se3ZhbHVlOlwiYmFiZWwtZmxvd1wiLGRlc2NyaXB0aW9uOlwiRmxvd1wifSx7dmFsdWU6XCJiYWJlbC10c1wiLGRlc2NyaXB0aW9uOlwiVHlwZVNjcmlwdFwifSx7dmFsdWU6XCJ0eXBlc2NyaXB0XCIsZGVzY3JpcHRpb246XCJUeXBlU2NyaXB0XCJ9LHt2YWx1ZTpcImFjb3JuXCIsZGVzY3JpcHRpb246XCJKYXZhU2NyaXB0XCJ9LHt2YWx1ZTpcImVzcHJlZVwiLGRlc2NyaXB0aW9uOlwiSmF2YVNjcmlwdFwifSx7dmFsdWU6XCJtZXJpeWFoXCIsZGVzY3JpcHRpb246XCJKYXZhU2NyaXB0XCJ9LHt2YWx1ZTpcImNzc1wiLGRlc2NyaXB0aW9uOlwiQ1NTXCJ9LHt2YWx1ZTpcImxlc3NcIixkZXNjcmlwdGlvbjpcIkxlc3NcIn0se3ZhbHVlOlwic2Nzc1wiLGRlc2NyaXB0aW9uOlwiU0NTU1wifSx7dmFsdWU6XCJqc29uXCIsZGVzY3JpcHRpb246XCJKU09OXCJ9LHt2YWx1ZTpcImpzb241XCIsZGVzY3JpcHRpb246XCJKU09ONVwifSx7dmFsdWU6XCJqc29uLXN0cmluZ2lmeVwiLGRlc2NyaXB0aW9uOlwiSlNPTi5zdHJpbmdpZnlcIn0se3ZhbHVlOlwiZ3JhcGhxbFwiLGRlc2NyaXB0aW9uOlwiR3JhcGhRTFwifSx7dmFsdWU6XCJtYXJrZG93blwiLGRlc2NyaXB0aW9uOlwiTWFya2Rvd25cIn0se3ZhbHVlOlwibWR4XCIsZGVzY3JpcHRpb246XCJNRFhcIn0se3ZhbHVlOlwidnVlXCIsZGVzY3JpcHRpb246XCJWdWVcIn0se3ZhbHVlOlwieWFtbFwiLGRlc2NyaXB0aW9uOlwiWUFNTFwifSx7dmFsdWU6XCJnbGltbWVyXCIsZGVzY3JpcHRpb246XCJFbWJlciAvIEhhbmRsZWJhcnNcIn0se3ZhbHVlOlwiaHRtbFwiLGRlc2NyaXB0aW9uOlwiSFRNTFwifSx7dmFsdWU6XCJhbmd1bGFyXCIsZGVzY3JpcHRpb246XCJBbmd1bGFyXCJ9LHt2YWx1ZTpcImx3Y1wiLGRlc2NyaXB0aW9uOlwiTGlnaHRuaW5nIFdlYiBDb21wb25lbnRzXCJ9XX0scGx1Z2luczp7dHlwZTpcInBhdGhcIixhcnJheTohMCxkZWZhdWx0Olt7dmFsdWU6W119XSxjYXRlZ29yeTpcIkdsb2JhbFwiLGRlc2NyaXB0aW9uOlwiQWRkIGEgcGx1Z2luLiBNdWx0aXBsZSBwbHVnaW5zIGNhbiBiZSBwYXNzZWQgYXMgc2VwYXJhdGUgYC0tcGx1Z2luYHMuXCIsZXhjZXB0aW9uOmU9PnR5cGVvZiBlPT1cInN0cmluZ1wifHx0eXBlb2YgZT09XCJvYmplY3RcIixjbGlOYW1lOlwicGx1Z2luXCIsY2xpQ2F0ZWdvcnk6XCJDb25maWdcIn0scHJpbnRXaWR0aDp7Y2F0ZWdvcnk6XCJHbG9iYWxcIix0eXBlOlwiaW50XCIsZGVmYXVsdDo4MCxkZXNjcmlwdGlvbjpcIlRoZSBsaW5lIGxlbmd0aCB3aGVyZSBQcmV0dGllciB3aWxsIHRyeSB3cmFwLlwiLHJhbmdlOntzdGFydDowLGVuZDoxLzAsc3RlcDoxfX0scmFuZ2VFbmQ6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJpbnRcIixkZWZhdWx0OjEvMCxyYW5nZTp7c3RhcnQ6MCxlbmQ6MS8wLHN0ZXA6MX0sZGVzY3JpcHRpb246YEZvcm1hdCBjb2RlIGVuZGluZyBhdCBhIGdpdmVuIGNoYXJhY3RlciBvZmZzZXQgKGV4Y2x1c2l2ZSkuXG5UaGUgcmFuZ2Ugd2lsbCBleHRlbmQgZm9yd2FyZHMgdG8gdGhlIGVuZCBvZiB0aGUgc2VsZWN0ZWQgc3RhdGVtZW50LmAsY2xpQ2F0ZWdvcnk6XCJFZGl0b3JcIn0scmFuZ2VTdGFydDp7Y2F0ZWdvcnk6XCJTcGVjaWFsXCIsdHlwZTpcImludFwiLGRlZmF1bHQ6MCxyYW5nZTp7c3RhcnQ6MCxlbmQ6MS8wLHN0ZXA6MX0sZGVzY3JpcHRpb246YEZvcm1hdCBjb2RlIHN0YXJ0aW5nIGF0IGEgZ2l2ZW4gY2hhcmFjdGVyIG9mZnNldC5cblRoZSByYW5nZSB3aWxsIGV4dGVuZCBiYWNrd2FyZHMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBmaXJzdCBsaW5lIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGVkIHN0YXRlbWVudC5gLGNsaUNhdGVnb3J5OlwiRWRpdG9yXCJ9LHJlcXVpcmVQcmFnbWE6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpgUmVxdWlyZSBlaXRoZXIgJ0BwcmV0dGllcicgb3IgJ0Bmb3JtYXQnIHRvIGJlIHByZXNlbnQgaW4gdGhlIGZpbGUncyBmaXJzdCBkb2NibG9jayBjb21tZW50XG5pbiBvcmRlciBmb3IgaXQgdG8gYmUgZm9ybWF0dGVkLmAsY2xpQ2F0ZWdvcnk6XCJPdGhlclwifSx0YWJXaWR0aDp7dHlwZTpcImludFwiLGNhdGVnb3J5OlwiR2xvYmFsXCIsZGVmYXVsdDoyLGRlc2NyaXB0aW9uOlwiTnVtYmVyIG9mIHNwYWNlcyBwZXIgaW5kZW50YXRpb24gbGV2ZWwuXCIscmFuZ2U6e3N0YXJ0OjAsZW5kOjEvMCxzdGVwOjF9fSx1c2VUYWJzOntjYXRlZ29yeTpcIkdsb2JhbFwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIkluZGVudCB3aXRoIHRhYnMgaW5zdGVhZCBvZiBzcGFjZXMuXCJ9LGVtYmVkZGVkTGFuZ3VhZ2VGb3JtYXR0aW5nOntjYXRlZ29yeTpcIkdsb2JhbFwiLHR5cGU6XCJjaG9pY2VcIixkZWZhdWx0OlwiYXV0b1wiLGRlc2NyaXB0aW9uOlwiQ29udHJvbCBob3cgUHJldHRpZXIgZm9ybWF0cyBxdW90ZWQgY29kZSBlbWJlZGRlZCBpbiB0aGUgZmlsZS5cIixjaG9pY2VzOlt7dmFsdWU6XCJhdXRvXCIsZGVzY3JpcHRpb246XCJGb3JtYXQgZW1iZWRkZWQgY29kZSBpZiBQcmV0dGllciBjYW4gYXV0b21hdGljYWxseSBpZGVudGlmeSBpdC5cIn0se3ZhbHVlOlwib2ZmXCIsZGVzY3JpcHRpb246XCJOZXZlciBhdXRvbWF0aWNhbGx5IGZvcm1hdCBlbWJlZGRlZCBjb2RlLlwifV19fTtmdW5jdGlvbiBldCh7cGx1Z2luczplPVtdLHNob3dEZXByZWNhdGVkOnQ9ITF9PXt9KXtsZXQgcj1lLmZsYXRNYXAobz0+by5sYW5ndWFnZXM/P1tdKSxuPVtdO2ZvcihsZXQgbyBvZiAkdShPYmplY3QuYXNzaWduKHt9LC4uLmUubWFwKCh7b3B0aW9uczp1fSk9PnUpLExyKSkpIXQmJm8uZGVwcmVjYXRlZHx8KEFycmF5LmlzQXJyYXkoby5jaG9pY2VzKSYmKHR8fChvLmNob2ljZXM9by5jaG9pY2VzLmZpbHRlcih1PT4hdS5kZXByZWNhdGVkKSksby5uYW1lPT09XCJwYXJzZXJcIiYmKG8uY2hvaWNlcz1bLi4uby5jaG9pY2VzLC4uLlZ1KG8uY2hvaWNlcyxyLGUpXSkpLG8ucGx1Z2luRGVmYXVsdHM9T2JqZWN0LmZyb21FbnRyaWVzKGUuZmlsdGVyKHU9Pnt2YXIgaTtyZXR1cm4oKGk9dS5kZWZhdWx0T3B0aW9ucyk9PW51bGw/dm9pZCAwOmlbby5uYW1lXSkhPT12b2lkIDB9KS5tYXAodT0+W3UubmFtZSx1LmRlZmF1bHRPcHRpb25zW28ubmFtZV1dKSksbi5wdXNoKG8pKTtyZXR1cm57bGFuZ3VhZ2VzOnIsb3B0aW9uczpufX1mdW5jdGlvbipWdShlLHQscil7bGV0IG49bmV3IFNldChlLm1hcChvPT5vLnZhbHVlKSk7Zm9yKGxldCBvIG9mIHQpaWYoby5wYXJzZXJzKXtmb3IobGV0IHUgb2Ygby5wYXJzZXJzKWlmKCFuLmhhcyh1KSl7bi5hZGQodSk7bGV0IGk9ci5maW5kKEQ9PkQucGFyc2VycyYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEQucGFyc2Vycyx1KSkscz1vLm5hbWU7aSE9bnVsbCYmaS5uYW1lJiYocys9YCAocGx1Z2luOiAke2kubmFtZX0pYCkseWllbGR7dmFsdWU6dSxkZXNjcmlwdGlvbjpzfX19fWZ1bmN0aW9uICR1KGUpe2xldCB0PVtdO2ZvcihsZXRbcixuXW9mIE9iamVjdC5lbnRyaWVzKGUpKXtsZXQgbz17bmFtZTpyLC4uLm59O0FycmF5LmlzQXJyYXkoby5kZWZhdWx0KSYmKG8uZGVmYXVsdD15KCExLG8uZGVmYXVsdCwtMSkudmFsdWUpLHQucHVzaChvKX1yZXR1cm4gdH12YXIgTXU9ZT0+U3RyaW5nKGUpLnNwbGl0KC9bL1xcXFxdLykucG9wKCk7ZnVuY3Rpb24gSXIoZSx0KXtpZighdClyZXR1cm47bGV0IHI9TXUodCkudG9Mb3dlckNhc2UoKTtyZXR1cm4gZS5maW5kKG49Pnt2YXIgbyx1O3JldHVybigobz1uLmV4dGVuc2lvbnMpPT1udWxsP3ZvaWQgMDpvLnNvbWUoaT0+ci5lbmRzV2l0aChpKSkpfHwoKHU9bi5maWxlbmFtZXMpPT1udWxsP3ZvaWQgMDp1LnNvbWUoaT0+aS50b0xvd2VyQ2FzZSgpPT09cikpfSl9ZnVuY3Rpb24gV3UoZSx0KXtpZih0KXJldHVybiBlLmZpbmQoKHtuYW1lOnJ9KT0+ci50b0xvd2VyQ2FzZSgpPT09dCk/P2UuZmluZCgoe2FsaWFzZXM6cn0pPT5yPT1udWxsP3ZvaWQgMDpyLmluY2x1ZGVzKHQpKT8/ZS5maW5kKCh7ZXh0ZW5zaW9uczpyfSk9PnI9PW51bGw/dm9pZCAwOnIuaW5jbHVkZXMoYC4ke3R9YCkpfWZ1bmN0aW9uIFV1KGUsdCl7bGV0IHI9ZS5wbHVnaW5zLmZsYXRNYXAobz0+by5sYW5ndWFnZXM/P1tdKSxuPVd1KHIsdC5sYW5ndWFnZSk/P0lyKHIsdC5waHlzaWNhbEZpbGUpPz9JcihyLHQuZmlsZSk/Pyh0LnBoeXNpY2FsRmlsZSx2b2lkIDApO3JldHVybiBuPT1udWxsP3ZvaWQgMDpuLnBhcnNlcnNbMF19dmFyIFJyPVV1O3ZhciB0ZT17a2V5OmU9Pi9eWyRfYS16QS1aXVskX2EtekEtWjAtOV0qJC8udGVzdChlKT9lOkpTT04uc3RyaW5naWZ5KGUpLHZhbHVlKGUpe2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJvYmplY3RcIilyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSk7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm5gWyR7ZS5tYXAocj0+dGUudmFsdWUocikpLmpvaW4oXCIsIFwiKX1dYDtsZXQgdD1PYmplY3Qua2V5cyhlKTtyZXR1cm4gdC5sZW5ndGg9PT0wP1wie31cIjpgeyAke3QubWFwKHI9PmAke3RlLmtleShyKX06ICR7dGUudmFsdWUoZVtyXSl9YCkuam9pbihcIiwgXCIpfSB9YH0scGFpcjooe2tleTplLHZhbHVlOnR9KT0+dGUudmFsdWUoe1tlXTp0fSl9O3ZhciBidD1oZShQZSgpLDEpLFZyPShlLHQse2Rlc2NyaXB0b3I6cn0pPT57bGV0IG49W2Ake2J0LmRlZmF1bHQueWVsbG93KHR5cGVvZiBlPT1cInN0cmluZ1wiP3Iua2V5KGUpOnIucGFpcihlKSl9IGlzIGRlcHJlY2F0ZWRgXTtyZXR1cm4gdCYmbi5wdXNoKGB3ZSBub3cgdHJlYXQgaXQgYXMgJHtidC5kZWZhdWx0LmJsdWUodHlwZW9mIHQ9PVwic3RyaW5nXCI/ci5rZXkodCk6ci5wYWlyKHQpKX1gKSxuLmpvaW4oXCI7IFwiKStcIi5cIn07dmFyIHNlPWhlKFBlKCksMSk7dmFyIHR0PVN5bWJvbC5mb3IoXCJ2bm9wdHMuVkFMVUVfTk9UX0VYSVNUXCIpLHBlPVN5bWJvbC5mb3IoXCJ2bm9wdHMuVkFMVUVfVU5DSEFOR0VEXCIpO3ZhciAkcj1cIiBcIi5yZXBlYXQoMiksV3I9KGUsdCxyKT0+e2xldHt0ZXh0Om4sbGlzdDpvfT1yLm5vcm1hbGl6ZUV4cGVjdGVkUmVzdWx0KHIuc2NoZW1hc1tlXS5leHBlY3RlZChyKSksdT1bXTtyZXR1cm4gbiYmdS5wdXNoKE1yKGUsdCxuLHIuZGVzY3JpcHRvcikpLG8mJnUucHVzaChbTXIoZSx0LG8udGl0bGUsci5kZXNjcmlwdG9yKV0uY29uY2F0KG8udmFsdWVzLm1hcChpPT5VcihpLHIubG9nZ2VyUHJpbnRXaWR0aCkpKS5qb2luKGBcbmApKSx6cih1LHIubG9nZ2VyUHJpbnRXaWR0aCl9O2Z1bmN0aW9uIE1yKGUsdCxyLG4pe3JldHVybltgSW52YWxpZCAke3NlLmRlZmF1bHQucmVkKG4ua2V5KGUpKX0gdmFsdWUuYCxgRXhwZWN0ZWQgJHtzZS5kZWZhdWx0LmJsdWUocil9LGAsYGJ1dCByZWNlaXZlZCAke3Q9PT10dD9zZS5kZWZhdWx0LmdyYXkoXCJub3RoaW5nXCIpOnNlLmRlZmF1bHQucmVkKG4udmFsdWUodCkpfS5gXS5qb2luKFwiIFwiKX1mdW5jdGlvbiBVcih7dGV4dDplLGxpc3Q6dH0scil7bGV0IG49W107cmV0dXJuIGUmJm4ucHVzaChgLSAke3NlLmRlZmF1bHQuYmx1ZShlKX1gKSx0JiZuLnB1c2goW2AtICR7c2UuZGVmYXVsdC5ibHVlKHQudGl0bGUpfTpgXS5jb25jYXQodC52YWx1ZXMubWFwKG89PlVyKG8sci0kci5sZW5ndGgpLnJlcGxhY2UoL158XFxuL2csYCQmJHskcn1gKSkpLmpvaW4oYFxuYCkpLHpyKG4scil9ZnVuY3Rpb24genIoZSx0KXtpZihlLmxlbmd0aD09PTEpcmV0dXJuIGVbMF07bGV0W3Isbl09ZSxbbyx1XT1lLm1hcChpPT5pLnNwbGl0KGBcbmAsMSlbMF0ubGVuZ3RoKTtyZXR1cm4gbz50JiZvPnU/bjpyfXZhciBOdD1oZShQZSgpLDEpO3ZhciB3dD1bXSxHcj1bXTtmdW5jdGlvbiBPdChlLHQpe2lmKGU9PT10KXJldHVybiAwO2xldCByPWU7ZS5sZW5ndGg+dC5sZW5ndGgmJihlPXQsdD1yKTtsZXQgbj1lLmxlbmd0aCxvPXQubGVuZ3RoO2Zvcig7bj4wJiZlLmNoYXJDb2RlQXQofi1uKT09PXQuY2hhckNvZGVBdCh+LW8pOyluLS0sby0tO2xldCB1PTA7Zm9yKDt1PG4mJmUuY2hhckNvZGVBdCh1KT09PXQuY2hhckNvZGVBdCh1KTspdSsrO2lmKG4tPXUsby09dSxuPT09MClyZXR1cm4gbztsZXQgaSxzLEQsYSxjPTAsZD0wO2Zvcig7YzxuOylHcltjXT1lLmNoYXJDb2RlQXQodStjKSx3dFtjXT0rK2M7Zm9yKDtkPG87KWZvcihpPXQuY2hhckNvZGVBdCh1K2QpLEQ9ZCsrLHM9ZCxjPTA7YzxuO2MrKylhPWk9PT1HcltjXT9EOkQrMSxEPXd0W2NdLHM9d3RbY109RD5zP2E+cz9zKzE6YTphPkQ/RCsxOmE7cmV0dXJuIHN9dmFyIHJ0PShlLHQse2Rlc2NyaXB0b3I6cixsb2dnZXI6bixzY2hlbWFzOm99KT0+e2xldCB1PVtgSWdub3JlZCB1bmtub3duIG9wdGlvbiAke050LmRlZmF1bHQueWVsbG93KHIucGFpcih7a2V5OmUsdmFsdWU6dH0pKX0uYF0saT1PYmplY3Qua2V5cyhvKS5zb3J0KCkuZmluZChzPT5PdChlLHMpPDMpO2kmJnUucHVzaChgRGlkIHlvdSBtZWFuICR7TnQuZGVmYXVsdC5ibHVlKHIua2V5KGkpKX0/YCksbi53YXJuKHUuam9pbihcIiBcIikpfTt2YXIgenU9W1wiZGVmYXVsdFwiLFwiZXhwZWN0ZWRcIixcInZhbGlkYXRlXCIsXCJkZXByZWNhdGVkXCIsXCJmb3J3YXJkXCIsXCJyZWRpcmVjdFwiLFwib3ZlcmxhcFwiLFwicHJlcHJvY2Vzc1wiLFwicG9zdHByb2Nlc3NcIl07ZnVuY3Rpb24gR3UoZSx0KXtsZXQgcj1uZXcgZSh0KSxuPU9iamVjdC5jcmVhdGUocik7Zm9yKGxldCBvIG9mIHp1KW8gaW4gdCYmKG5bb109S3UodFtvXSxyLHcucHJvdG90eXBlW29dLmxlbmd0aCkpO3JldHVybiBufXZhciB3PWNsYXNze3N0YXRpYyBjcmVhdGUodCl7cmV0dXJuIEd1KHRoaXMsdCl9Y29uc3RydWN0b3IodCl7dGhpcy5uYW1lPXQubmFtZX1kZWZhdWx0KHQpe31leHBlY3RlZCh0KXtyZXR1cm5cIm5vdGhpbmdcIn12YWxpZGF0ZSh0LHIpe3JldHVybiExfWRlcHJlY2F0ZWQodCxyKXtyZXR1cm4hMX1mb3J3YXJkKHQscil7fXJlZGlyZWN0KHQscil7fW92ZXJsYXAodCxyLG4pe3JldHVybiB0fXByZXByb2Nlc3ModCxyKXtyZXR1cm4gdH1wb3N0cHJvY2Vzcyh0LHIpe3JldHVybiBwZX19O2Z1bmN0aW9uIEt1KGUsdCxyKXtyZXR1cm4gdHlwZW9mIGU9PVwiZnVuY3Rpb25cIj8oLi4ubik9PmUoLi4ubi5zbGljZSgwLHItMSksdCwuLi5uLnNsaWNlKHItMSkpOigpPT5lfXZhciBudD1jbGFzcyBleHRlbmRzIHd7Y29uc3RydWN0b3IodCl7c3VwZXIodCksdGhpcy5fc291cmNlTmFtZT10LnNvdXJjZU5hbWV9ZXhwZWN0ZWQodCl7cmV0dXJuIHQuc2NoZW1hc1t0aGlzLl9zb3VyY2VOYW1lXS5leHBlY3RlZCh0KX12YWxpZGF0ZSh0LHIpe3JldHVybiByLnNjaGVtYXNbdGhpcy5fc291cmNlTmFtZV0udmFsaWRhdGUodCxyKX1yZWRpcmVjdCh0LHIpe3JldHVybiB0aGlzLl9zb3VyY2VOYW1lfX07dmFyIHV0PWNsYXNzIGV4dGVuZHMgd3tleHBlY3RlZCgpe3JldHVyblwiYW55dGhpbmdcIn12YWxpZGF0ZSgpe3JldHVybiEwfX07dmFyIG90PWNsYXNzIGV4dGVuZHMgd3tjb25zdHJ1Y3Rvcih7dmFsdWVTY2hlbWE6dCxuYW1lOnI9dC5uYW1lLC4uLm59KXtzdXBlcih7Li4ubixuYW1lOnJ9KSx0aGlzLl92YWx1ZVNjaGVtYT10fWV4cGVjdGVkKHQpe2xldHt0ZXh0OnIsbGlzdDpufT10Lm5vcm1hbGl6ZUV4cGVjdGVkUmVzdWx0KHRoaXMuX3ZhbHVlU2NoZW1hLmV4cGVjdGVkKHQpKTtyZXR1cm57dGV4dDpyJiZgYW4gYXJyYXkgb2YgJHtyfWAsbGlzdDpuJiZ7dGl0bGU6XCJhbiBhcnJheSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlc1wiLHZhbHVlczpbe2xpc3Q6bn1dfX19dmFsaWRhdGUodCxyKXtpZighQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4hMTtsZXQgbj1bXTtmb3IobGV0IG8gb2YgdCl7bGV0IHU9ci5ub3JtYWxpemVWYWxpZGF0ZVJlc3VsdCh0aGlzLl92YWx1ZVNjaGVtYS52YWxpZGF0ZShvLHIpLG8pO3UhPT0hMCYmbi5wdXNoKHUudmFsdWUpfXJldHVybiBuLmxlbmd0aD09PTA/ITA6e3ZhbHVlOm59fWRlcHJlY2F0ZWQodCxyKXtsZXQgbj1bXTtmb3IobGV0IG8gb2YgdCl7bGV0IHU9ci5ub3JtYWxpemVEZXByZWNhdGVkUmVzdWx0KHRoaXMuX3ZhbHVlU2NoZW1hLmRlcHJlY2F0ZWQobyxyKSxvKTt1IT09ITEmJm4ucHVzaCguLi51Lm1hcCgoe3ZhbHVlOml9KT0+KHt2YWx1ZTpbaV19KSkpfXJldHVybiBufWZvcndhcmQodCxyKXtsZXQgbj1bXTtmb3IobGV0IG8gb2YgdCl7bGV0IHU9ci5ub3JtYWxpemVGb3J3YXJkUmVzdWx0KHRoaXMuX3ZhbHVlU2NoZW1hLmZvcndhcmQobyxyKSxvKTtuLnB1c2goLi4udS5tYXAoS3IpKX1yZXR1cm4gbn1yZWRpcmVjdCh0LHIpe2xldCBuPVtdLG89W107Zm9yKGxldCB1IG9mIHQpe2xldCBpPXIubm9ybWFsaXplUmVkaXJlY3RSZXN1bHQodGhpcy5fdmFsdWVTY2hlbWEucmVkaXJlY3QodSxyKSx1KTtcInJlbWFpblwiaW4gaSYmbi5wdXNoKGkucmVtYWluKSxvLnB1c2goLi4uaS5yZWRpcmVjdC5tYXAoS3IpKX1yZXR1cm4gbi5sZW5ndGg9PT0wP3tyZWRpcmVjdDpvfTp7cmVkaXJlY3Q6byxyZW1haW46bn19b3ZlcmxhcCh0LHIpe3JldHVybiB0LmNvbmNhdChyKX19O2Z1bmN0aW9uIEtyKHtmcm9tOmUsdG86dH0pe3JldHVybntmcm9tOltlXSx0bzp0fX12YXIgaXQ9Y2xhc3MgZXh0ZW5kcyB3e2V4cGVjdGVkKCl7cmV0dXJuXCJ0cnVlIG9yIGZhbHNlXCJ9dmFsaWRhdGUodCl7cmV0dXJuIHR5cGVvZiB0PT1cImJvb2xlYW5cIn19O2Z1bmN0aW9uIHFyKGUsdCl7bGV0IHI9T2JqZWN0LmNyZWF0ZShudWxsKTtmb3IobGV0IG4gb2YgZSl7bGV0IG89blt0XTtpZihyW29dKXRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlICR7dH0gJHtKU09OLnN0cmluZ2lmeShvKX1gKTtyW29dPW59cmV0dXJuIHJ9ZnVuY3Rpb24gSnIoZSx0KXtsZXQgcj1uZXcgTWFwO2ZvcihsZXQgbiBvZiBlKXtsZXQgbz1uW3RdO2lmKHIuaGFzKG8pKXRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlICR7dH0gJHtKU09OLnN0cmluZ2lmeShvKX1gKTtyLnNldChvLG4pfXJldHVybiByfWZ1bmN0aW9uIFhyKCl7bGV0IGU9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gdD0+e2xldCByPUpTT04uc3RyaW5naWZ5KHQpO3JldHVybiBlW3JdPyEwOihlW3JdPSEwLCExKX19ZnVuY3Rpb24gWnIoZSx0KXtsZXQgcj1bXSxuPVtdO2ZvcihsZXQgbyBvZiBlKXQobyk/ci5wdXNoKG8pOm4ucHVzaChvKTtyZXR1cm5bcixuXX1mdW5jdGlvbiBRcihlKXtyZXR1cm4gZT09PU1hdGguZmxvb3IoZSl9ZnVuY3Rpb24gZW4oZSx0KXtpZihlPT09dClyZXR1cm4gMDtsZXQgcj10eXBlb2YgZSxuPXR5cGVvZiB0LG89W1widW5kZWZpbmVkXCIsXCJvYmplY3RcIixcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCJdO3JldHVybiByIT09bj9vLmluZGV4T2Yociktby5pbmRleE9mKG4pOnIhPT1cInN0cmluZ1wiP051bWJlcihlKS1OdW1iZXIodCk6ZS5sb2NhbGVDb21wYXJlKHQpfWZ1bmN0aW9uIHRuKGUpe3JldHVybiguLi50KT0+e2xldCByPWUoLi4udCk7cmV0dXJuIHR5cGVvZiByPT1cInN0cmluZ1wiP25ldyBFcnJvcihyKTpyfX1mdW5jdGlvbiBUdChlKXtyZXR1cm4gZT09PXZvaWQgMD97fTplfWZ1bmN0aW9uIFN0KGUpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybnt0ZXh0OmV9O2xldHt0ZXh0OnQsbGlzdDpyfT1lO3JldHVybiBIdSgodHx8cikhPT12b2lkIDAsXCJVbmV4cGVjdGVkIGBleHBlY3RlZGAgcmVzdWx0LCB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3Qgb25lIGZpZWxkLlwiKSxyP3t0ZXh0OnQsbGlzdDp7dGl0bGU6ci50aXRsZSx2YWx1ZXM6ci52YWx1ZXMubWFwKFN0KX19Ont0ZXh0OnR9fWZ1bmN0aW9uIHZ0KGUsdCl7cmV0dXJuIGU9PT0hMD8hMDplPT09ITE/e3ZhbHVlOnR9OmV9ZnVuY3Rpb24gUHQoZSx0LHI9ITEpe3JldHVybiBlPT09ITE/ITE6ZT09PSEwP3I/ITA6W3t2YWx1ZTp0fV06XCJ2YWx1ZVwiaW4gZT9bZV06ZS5sZW5ndGg9PT0wPyExOmV9ZnVuY3Rpb24gSHIoZSx0KXtyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCJ8fFwia2V5XCJpbiBlP3tmcm9tOnQsdG86ZX06XCJmcm9tXCJpbiBlP3tmcm9tOmUuZnJvbSx0bzplLnRvfTp7ZnJvbTp0LHRvOmUudG99fWZ1bmN0aW9uIHN0KGUsdCl7cmV0dXJuIGU9PT12b2lkIDA/W106QXJyYXkuaXNBcnJheShlKT9lLm1hcChyPT5IcihyLHQpKTpbSHIoZSx0KV19ZnVuY3Rpb24gTHQoZSx0KXtsZXQgcj1zdCh0eXBlb2YgZT09XCJvYmplY3RcIiYmXCJyZWRpcmVjdFwiaW4gZT9lLnJlZGlyZWN0OmUsdCk7cmV0dXJuIHIubGVuZ3RoPT09MD97cmVtYWluOnQscmVkaXJlY3Q6cn06dHlwZW9mIGU9PVwib2JqZWN0XCImJlwicmVtYWluXCJpbiBlP3tyZW1haW46ZS5yZW1haW4scmVkaXJlY3Q6cn06e3JlZGlyZWN0OnJ9fWZ1bmN0aW9uIEh1KGUsdCl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKHQpfXZhciBEdD1jbGFzcyBleHRlbmRzIHd7Y29uc3RydWN0b3IodCl7c3VwZXIodCksdGhpcy5fY2hvaWNlcz1Kcih0LmNob2ljZXMubWFwKHI9PnImJnR5cGVvZiByPT1cIm9iamVjdFwiP3I6e3ZhbHVlOnJ9KSxcInZhbHVlXCIpfWV4cGVjdGVkKHtkZXNjcmlwdG9yOnR9KXtsZXQgcj1BcnJheS5mcm9tKHRoaXMuX2Nob2ljZXMua2V5cygpKS5tYXAoaT0+dGhpcy5fY2hvaWNlcy5nZXQoaSkpLmZpbHRlcigoe2hpZGRlbjppfSk9PiFpKS5tYXAoaT0+aS52YWx1ZSkuc29ydChlbikubWFwKHQudmFsdWUpLG49ci5zbGljZSgwLC0yKSxvPXIuc2xpY2UoLTIpO3JldHVybnt0ZXh0Om4uY29uY2F0KG8uam9pbihcIiBvciBcIikpLmpvaW4oXCIsIFwiKSxsaXN0Ont0aXRsZTpcIm9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlc1wiLHZhbHVlczpyfX19dmFsaWRhdGUodCl7cmV0dXJuIHRoaXMuX2Nob2ljZXMuaGFzKHQpfWRlcHJlY2F0ZWQodCl7bGV0IHI9dGhpcy5fY2hvaWNlcy5nZXQodCk7cmV0dXJuIHImJnIuZGVwcmVjYXRlZD97dmFsdWU6dH06ITF9Zm9yd2FyZCh0KXtsZXQgcj10aGlzLl9jaG9pY2VzLmdldCh0KTtyZXR1cm4gcj9yLmZvcndhcmQ6dm9pZCAwfXJlZGlyZWN0KHQpe2xldCByPXRoaXMuX2Nob2ljZXMuZ2V0KHQpO3JldHVybiByP3IucmVkaXJlY3Q6dm9pZCAwfX07dmFyIGF0PWNsYXNzIGV4dGVuZHMgd3tleHBlY3RlZCgpe3JldHVyblwiYSBudW1iZXJcIn12YWxpZGF0ZSh0LHIpe3JldHVybiB0eXBlb2YgdD09XCJudW1iZXJcIn19O3ZhciBjdD1jbGFzcyBleHRlbmRzIGF0e2V4cGVjdGVkKCl7cmV0dXJuXCJhbiBpbnRlZ2VyXCJ9dmFsaWRhdGUodCxyKXtyZXR1cm4gci5ub3JtYWxpemVWYWxpZGF0ZVJlc3VsdChzdXBlci52YWxpZGF0ZSh0LHIpLHQpPT09ITAmJlFyKHQpfX07dmFyIExlPWNsYXNzIGV4dGVuZHMgd3tleHBlY3RlZCgpe3JldHVyblwiYSBzdHJpbmdcIn12YWxpZGF0ZSh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwic3RyaW5nXCJ9fTt2YXIgcm49dGUsbm49cnQsdW49V3Isb249VnI7dmFyIGx0PWNsYXNze2NvbnN0cnVjdG9yKHQscil7bGV0e2xvZ2dlcjpuPWNvbnNvbGUsbG9nZ2VyUHJpbnRXaWR0aDpvPTgwLGRlc2NyaXB0b3I6dT1ybix1bmtub3duOmk9bm4saW52YWxpZDpzPXVuLGRlcHJlY2F0ZWQ6RD1vbixtaXNzaW5nOmE9KCk9PiExLHJlcXVpcmVkOmM9KCk9PiExLHByZXByb2Nlc3M6ZD1wPT5wLHBvc3Rwcm9jZXNzOmY9KCk9PnBlfT1yfHx7fTt0aGlzLl91dGlscz17ZGVzY3JpcHRvcjp1LGxvZ2dlcjpufHx7d2FybjooKT0+e319LGxvZ2dlclByaW50V2lkdGg6byxzY2hlbWFzOnFyKHQsXCJuYW1lXCIpLG5vcm1hbGl6ZURlZmF1bHRSZXN1bHQ6VHQsbm9ybWFsaXplRXhwZWN0ZWRSZXN1bHQ6U3Qsbm9ybWFsaXplRGVwcmVjYXRlZFJlc3VsdDpQdCxub3JtYWxpemVGb3J3YXJkUmVzdWx0OnN0LG5vcm1hbGl6ZVJlZGlyZWN0UmVzdWx0Okx0LG5vcm1hbGl6ZVZhbGlkYXRlUmVzdWx0OnZ0fSx0aGlzLl91bmtub3duSGFuZGxlcj1pLHRoaXMuX2ludmFsaWRIYW5kbGVyPXRuKHMpLHRoaXMuX2RlcHJlY2F0ZWRIYW5kbGVyPUQsdGhpcy5faWRlbnRpZnlNaXNzaW5nPShwLGwpPT4hKHAgaW4gbCl8fGEocCxsKSx0aGlzLl9pZGVudGlmeVJlcXVpcmVkPWMsdGhpcy5fcHJlcHJvY2Vzcz1kLHRoaXMuX3Bvc3Rwcm9jZXNzPWYsdGhpcy5jbGVhbkhpc3RvcnkoKX1jbGVhbkhpc3RvcnkoKXt0aGlzLl9oYXNEZXByZWNhdGlvbldhcm5lZD1YcigpfW5vcm1hbGl6ZSh0KXtsZXQgcj17fSxvPVt0aGlzLl9wcmVwcm9jZXNzKHQsdGhpcy5fdXRpbHMpXSx1PSgpPT57Zm9yKDtvLmxlbmd0aCE9PTA7KXtsZXQgaT1vLnNoaWZ0KCkscz10aGlzLl9hcHBseU5vcm1hbGl6YXRpb24oaSxyKTtvLnB1c2goLi4ucyl9fTt1KCk7Zm9yKGxldCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX3V0aWxzLnNjaGVtYXMpKXtsZXQgcz10aGlzLl91dGlscy5zY2hlbWFzW2ldO2lmKCEoaSBpbiByKSl7bGV0IEQ9VHQocy5kZWZhdWx0KHRoaXMuX3V0aWxzKSk7XCJ2YWx1ZVwiaW4gRCYmby5wdXNoKHtbaV06RC52YWx1ZX0pfX11KCk7Zm9yKGxldCBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX3V0aWxzLnNjaGVtYXMpKXtpZighKGkgaW4gcikpY29udGludWU7bGV0IHM9dGhpcy5fdXRpbHMuc2NoZW1hc1tpXSxEPXJbaV0sYT1zLnBvc3Rwcm9jZXNzKEQsdGhpcy5fdXRpbHMpO2EhPT1wZSYmKHRoaXMuX2FwcGx5VmFsaWRhdGlvbihhLGkscykscltpXT1hKX1yZXR1cm4gdGhpcy5fYXBwbHlQb3N0cHJvY2VzcyhyKSx0aGlzLl9hcHBseVJlcXVpcmVkQ2hlY2socikscn1fYXBwbHlOb3JtYWxpemF0aW9uKHQscil7bGV0IG49W10se2tub3duS2V5czpvLHVua25vd25LZXlzOnV9PXRoaXMuX3BhcnRpdGlvbk9wdGlvbktleXModCk7Zm9yKGxldCBpIG9mIG8pe2xldCBzPXRoaXMuX3V0aWxzLnNjaGVtYXNbaV0sRD1zLnByZXByb2Nlc3ModFtpXSx0aGlzLl91dGlscyk7dGhpcy5fYXBwbHlWYWxpZGF0aW9uKEQsaSxzKTtsZXQgYT0oe2Zyb206cCx0bzpsfSk9PntuLnB1c2godHlwZW9mIGw9PVwic3RyaW5nXCI/e1tsXTpwfTp7W2wua2V5XTpsLnZhbHVlfSl9LGM9KHt2YWx1ZTpwLHJlZGlyZWN0VG86bH0pPT57bGV0IEY9UHQocy5kZXByZWNhdGVkKHAsdGhpcy5fdXRpbHMpLEQsITApO2lmKEYhPT0hMSlpZihGPT09ITApdGhpcy5faGFzRGVwcmVjYXRpb25XYXJuZWQoaSl8fHRoaXMuX3V0aWxzLmxvZ2dlci53YXJuKHRoaXMuX2RlcHJlY2F0ZWRIYW5kbGVyKGksbCx0aGlzLl91dGlscykpO2Vsc2UgZm9yKGxldHt2YWx1ZTptfW9mIEYpe2xldCBFPXtrZXk6aSx2YWx1ZTptfTtpZighdGhpcy5faGFzRGVwcmVjYXRpb25XYXJuZWQoRSkpe2xldCBDPXR5cGVvZiBsPT1cInN0cmluZ1wiP3trZXk6bCx2YWx1ZTptfTpsO3RoaXMuX3V0aWxzLmxvZ2dlci53YXJuKHRoaXMuX2RlcHJlY2F0ZWRIYW5kbGVyKEUsQyx0aGlzLl91dGlscykpfX19O3N0KHMuZm9yd2FyZChELHRoaXMuX3V0aWxzKSxEKS5mb3JFYWNoKGEpO2xldCBmPUx0KHMucmVkaXJlY3QoRCx0aGlzLl91dGlscyksRCk7aWYoZi5yZWRpcmVjdC5mb3JFYWNoKGEpLFwicmVtYWluXCJpbiBmKXtsZXQgcD1mLnJlbWFpbjtyW2ldPWkgaW4gcj9zLm92ZXJsYXAocltpXSxwLHRoaXMuX3V0aWxzKTpwLGMoe3ZhbHVlOnB9KX1mb3IobGV0e2Zyb206cCx0bzpsfW9mIGYucmVkaXJlY3QpYyh7dmFsdWU6cCxyZWRpcmVjdFRvOmx9KX1mb3IobGV0IGkgb2YgdSl7bGV0IHM9dFtpXTt0aGlzLl9hcHBseVVua25vd25IYW5kbGVyKGkscyxyLChELGEpPT57bi5wdXNoKHtbRF06YX0pfSl9cmV0dXJuIG59X2FwcGx5UmVxdWlyZWRDaGVjayh0KXtmb3IobGV0IHIgb2YgT2JqZWN0LmtleXModGhpcy5fdXRpbHMuc2NoZW1hcykpaWYodGhpcy5faWRlbnRpZnlNaXNzaW5nKHIsdCkmJnRoaXMuX2lkZW50aWZ5UmVxdWlyZWQocikpdGhyb3cgdGhpcy5faW52YWxpZEhhbmRsZXIocix0dCx0aGlzLl91dGlscyl9X3BhcnRpdGlvbk9wdGlvbktleXModCl7bGV0W3Isbl09WnIoT2JqZWN0LmtleXModCkuZmlsdGVyKG89PiF0aGlzLl9pZGVudGlmeU1pc3Npbmcobyx0KSksbz0+byBpbiB0aGlzLl91dGlscy5zY2hlbWFzKTtyZXR1cm57a25vd25LZXlzOnIsdW5rbm93bktleXM6bn19X2FwcGx5VmFsaWRhdGlvbih0LHIsbil7bGV0IG89dnQobi52YWxpZGF0ZSh0LHRoaXMuX3V0aWxzKSx0KTtpZihvIT09ITApdGhyb3cgdGhpcy5faW52YWxpZEhhbmRsZXIocixvLnZhbHVlLHRoaXMuX3V0aWxzKX1fYXBwbHlVbmtub3duSGFuZGxlcih0LHIsbixvKXtsZXQgdT10aGlzLl91bmtub3duSGFuZGxlcih0LHIsdGhpcy5fdXRpbHMpO2lmKHUpZm9yKGxldCBpIG9mIE9iamVjdC5rZXlzKHUpKXtpZih0aGlzLl9pZGVudGlmeU1pc3NpbmcoaSx1KSljb250aW51ZTtsZXQgcz11W2ldO2kgaW4gdGhpcy5fdXRpbHMuc2NoZW1hcz9vKGkscyk6bltpXT1zfX1fYXBwbHlQb3N0cHJvY2Vzcyh0KXtsZXQgcj10aGlzLl9wb3N0cHJvY2Vzcyh0LHRoaXMuX3V0aWxzKTtpZihyIT09cGUpe2lmKHIuZGVsZXRlKWZvcihsZXQgbiBvZiByLmRlbGV0ZSlkZWxldGUgdFtuXTtpZihyLm92ZXJyaWRlKXtsZXR7a25vd25LZXlzOm4sdW5rbm93bktleXM6b309dGhpcy5fcGFydGl0aW9uT3B0aW9uS2V5cyhyLm92ZXJyaWRlKTtmb3IobGV0IHUgb2Ygbil7bGV0IGk9ci5vdmVycmlkZVt1XTt0aGlzLl9hcHBseVZhbGlkYXRpb24oaSx1LHRoaXMuX3V0aWxzLnNjaGVtYXNbdV0pLHRbdV09aX1mb3IobGV0IHUgb2Ygbyl7bGV0IGk9ci5vdmVycmlkZVt1XTt0aGlzLl9hcHBseVVua25vd25IYW5kbGVyKHUsaSx0LChzLEQpPT57bGV0IGE9dGhpcy5fdXRpbHMuc2NoZW1hc1tzXTt0aGlzLl9hcHBseVZhbGlkYXRpb24oRCxzLGEpLHRbc109RH0pfX19fX07dmFyIEl0O2Z1bmN0aW9uIEp1KGUsdCx7bG9nZ2VyOnI9ITEsaXNDTEk6bj0hMSxwYXNzVGhyb3VnaDpvPSExLEZsYWdTY2hlbWE6dSxkZXNjcmlwdG9yOml9PXt9KXtpZihuKXtpZighdSl0aHJvdyBuZXcgRXJyb3IoXCInRmxhZ1NjaGVtYScgb3B0aW9uIGlzIHJlcXVpcmVkLlwiKTtpZighaSl0aHJvdyBuZXcgRXJyb3IoXCInZGVzY3JpcHRvcicgb3B0aW9uIGlzIHJlcXVpcmVkLlwiKX1lbHNlIGk9dGU7bGV0IHM9bz9BcnJheS5pc0FycmF5KG8pPyhmLHApPT5vLmluY2x1ZGVzKGYpP3tbZl06cH06dm9pZCAwOihmLHApPT4oe1tmXTpwfSk6KGYscCxsKT0+e2xldHtfOkYsLi4ubX09bC5zY2hlbWFzO3JldHVybiBydChmLHAsey4uLmwsc2NoZW1hczptfSl9LEQ9WHUodCx7aXNDTEk6bixGbGFnU2NoZW1hOnV9KSxhPW5ldyBsdChELHtsb2dnZXI6cix1bmtub3duOnMsZGVzY3JpcHRvcjppfSksYz1yIT09ITE7YyYmSXQmJihhLl9oYXNEZXByZWNhdGlvbldhcm5lZD1JdCk7bGV0IGQ9YS5ub3JtYWxpemUoZSk7cmV0dXJuIGMmJihJdD1hLl9oYXNEZXByZWNhdGlvbldhcm5lZCksZH1mdW5jdGlvbiBYdShlLHtpc0NMSTp0LEZsYWdTY2hlbWE6cn0pe2xldCBuPVtdO3QmJm4ucHVzaCh1dC5jcmVhdGUoe25hbWU6XCJfXCJ9KSk7Zm9yKGxldCBvIG9mIGUpbi5wdXNoKFp1KG8se2lzQ0xJOnQsb3B0aW9uSW5mb3M6ZSxGbGFnU2NoZW1hOnJ9KSksby5hbGlhcyYmdCYmbi5wdXNoKG50LmNyZWF0ZSh7bmFtZTpvLmFsaWFzLHNvdXJjZU5hbWU6by5uYW1lfSkpO3JldHVybiBufWZ1bmN0aW9uIFp1KGUse2lzQ0xJOnQsb3B0aW9uSW5mb3M6cixGbGFnU2NoZW1hOm59KXtsZXR7bmFtZTpvfT1lLHU9e25hbWU6b30saSxzPXt9O3N3aXRjaChlLnR5cGUpe2Nhc2VcImludFwiOmk9Y3QsdCYmKHUucHJlcHJvY2Vzcz1OdW1iZXIpO2JyZWFrO2Nhc2VcInN0cmluZ1wiOmk9TGU7YnJlYWs7Y2FzZVwiY2hvaWNlXCI6aT1EdCx1LmNob2ljZXM9ZS5jaG9pY2VzLm1hcChEPT5EIT1udWxsJiZELnJlZGlyZWN0P3suLi5ELHJlZGlyZWN0Ont0bzp7a2V5OmUubmFtZSx2YWx1ZTpELnJlZGlyZWN0fX19OkQpO2JyZWFrO2Nhc2VcImJvb2xlYW5cIjppPWl0O2JyZWFrO2Nhc2VcImZsYWdcIjppPW4sdS5mbGFncz1yLmZsYXRNYXAoRD0+W0QuYWxpYXMsRC5kZXNjcmlwdGlvbiYmRC5uYW1lLEQub3Bwb3NpdGVEZXNjcmlwdGlvbiYmYG5vLSR7RC5uYW1lfWBdLmZpbHRlcihCb29sZWFuKSk7YnJlYWs7Y2FzZVwicGF0aFwiOmk9TGU7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSAke2UudHlwZX1gKX1pZihlLmV4Y2VwdGlvbj91LnZhbGlkYXRlPShELGEsYyk9PmUuZXhjZXB0aW9uKEQpfHxhLnZhbGlkYXRlKEQsYyk6dS52YWxpZGF0ZT0oRCxhLGMpPT5EPT09dm9pZCAwfHxhLnZhbGlkYXRlKEQsYyksZS5yZWRpcmVjdCYmKHMucmVkaXJlY3Q9RD0+RD97dG86e2tleTplLnJlZGlyZWN0Lm9wdGlvbix2YWx1ZTplLnJlZGlyZWN0LnZhbHVlfX06dm9pZCAwKSxlLmRlcHJlY2F0ZWQmJihzLmRlcHJlY2F0ZWQ9ITApLHQmJiFlLmFycmF5KXtsZXQgRD11LnByZXByb2Nlc3N8fChhPT5hKTt1LnByZXByb2Nlc3M9KGEsYyxkKT0+Yy5wcmVwcm9jZXNzKEQoQXJyYXkuaXNBcnJheShhKT95KCExLGEsLTEpOmEpLGQpfXJldHVybiBlLmFycmF5P290LmNyZWF0ZSh7Li4udD97cHJlcHJvY2VzczpEPT5BcnJheS5pc0FycmF5KEQpP0Q6W0RdfTp7fSwuLi5zLHZhbHVlU2NoZW1hOmkuY3JlYXRlKHUpfSk6aS5jcmVhdGUoey4uLnUsLi4uc30pfXZhciBzbj1KdTtmdW5jdGlvbiBSdChlLHQpe2lmKCF0KXRocm93IG5ldyBFcnJvcihcInBhcnNlck5hbWUgaXMgcmVxdWlyZWQuXCIpO2ZvcihsZXQgbj1lLmxlbmd0aC0xO24+PTA7bi0tKXtsZXQgbz1lW25dO2lmKG8ucGFyc2VycyYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8ucGFyc2Vycyx0KSlyZXR1cm4gb31sZXQgcj1gQ291bGRuJ3QgcmVzb2x2ZSBwYXJzZXIgXCIke3R9XCIuYDt0aHJvdyByKz1cIiBQbHVnaW5zIG11c3QgYmUgZXhwbGljaXRseSBhZGRlZCB0byB0aGUgc3RhbmRhbG9uZSBidW5kbGUuXCIsbmV3IFNlKHIpfWZ1bmN0aW9uIERuKGUsdCl7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiYXN0Rm9ybWF0IGlzIHJlcXVpcmVkLlwiKTtmb3IobGV0IG49ZS5sZW5ndGgtMTtuPj0wO24tLSl7bGV0IG89ZVtuXTtpZihvLnByaW50ZXJzJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoby5wcmludGVycyx0KSlyZXR1cm4gb31sZXQgcj1gQ291bGRuJ3QgZmluZCBwbHVnaW4gZm9yIEFTVCBmb3JtYXQgXCIke3R9XCIuYDt0aHJvdyByKz1cIiBQbHVnaW5zIG11c3QgYmUgZXhwbGljaXRseSBhZGRlZCB0byB0aGUgc3RhbmRhbG9uZSBidW5kbGUuXCIsbmV3IFNlKHIpfWZ1bmN0aW9uIGZ0KHtwbHVnaW5zOmUscGFyc2VyOnR9KXtsZXQgcj1SdChlLHQpO3JldHVybiBZdChyLHQpfWZ1bmN0aW9uIFl0KGUsdCl7bGV0IHI9ZS5wYXJzZXJzW3RdO3JldHVybiB0eXBlb2Ygcj09XCJmdW5jdGlvblwiP3IoKTpyfWZ1bmN0aW9uIGFuKGUsdCl7bGV0IHI9ZS5wcmludGVyc1t0XTtyZXR1cm4gdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKCk6cn12YXIgY249e2FzdEZvcm1hdDpcImVzdHJlZVwiLHByaW50ZXI6e30sb3JpZ2luYWxUZXh0OnZvaWQgMCxsb2NTdGFydDpudWxsLGxvY0VuZDpudWxsfTthc3luYyBmdW5jdGlvbiBRdShlLHQ9e30pe3ZhciBkO2xldCByPXsuLi5lfTtpZighci5wYXJzZXIpaWYoci5maWxlcGF0aCl7aWYoci5wYXJzZXI9UnIocix7cGh5c2ljYWxGaWxlOnIuZmlsZXBhdGh9KSwhci5wYXJzZXIpdGhyb3cgbmV3IHZlKGBObyBwYXJzZXIgY291bGQgYmUgaW5mZXJyZWQgZm9yIGZpbGUgXCIke3IuZmlsZXBhdGh9XCIuYCl9ZWxzZSB0aHJvdyBuZXcgdmUoXCJObyBwYXJzZXIgYW5kIG5vIGZpbGUgcGF0aCBnaXZlbiwgY291bGRuJ3QgaW5mZXIgYSBwYXJzZXIuXCIpO2xldCBuPWV0KHtwbHVnaW5zOmUucGx1Z2lucyxzaG93RGVwcmVjYXRlZDohMH0pLm9wdGlvbnMsbz17Li4uY24sLi4uT2JqZWN0LmZyb21FbnRyaWVzKG4uZmlsdGVyKGY9PmYuZGVmYXVsdCE9PXZvaWQgMCkubWFwKGY9PltmLm5hbWUsZi5kZWZhdWx0XSkpfSx1PVJ0KHIucGx1Z2lucyxyLnBhcnNlciksaT1hd2FpdCBZdCh1LHIucGFyc2VyKTtyLmFzdEZvcm1hdD1pLmFzdEZvcm1hdCxyLmxvY0VuZD1pLmxvY0VuZCxyLmxvY1N0YXJ0PWkubG9jU3RhcnQ7bGV0IHM9KGQ9dS5wcmludGVycykhPW51bGwmJmRbaS5hc3RGb3JtYXRdP3U6RG4oci5wbHVnaW5zLGkuYXN0Rm9ybWF0KSxEPWF3YWl0IGFuKHMsaS5hc3RGb3JtYXQpO3IucHJpbnRlcj1EO2xldCBhPXMuZGVmYXVsdE9wdGlvbnM/T2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKHMuZGVmYXVsdE9wdGlvbnMpLmZpbHRlcigoWyxmXSk9PmYhPT12b2lkIDApKTp7fSxjPXsuLi5vLC4uLmF9O2ZvcihsZXRbZixwXW9mIE9iamVjdC5lbnRyaWVzKGMpKShyW2ZdPT09bnVsbHx8cltmXT09PXZvaWQgMCkmJihyW2ZdPXApO3JldHVybiByLnBhcnNlcj09PVwianNvblwiJiYoci50cmFpbGluZ0NvbW1hPVwibm9uZVwiKSxzbihyLG4se3Bhc3NUaHJvdWdoOk9iamVjdC5rZXlzKGNuKSwuLi50fSl9dmFyIHJlPVF1O3ZhciBsbj1uZXcgU2V0KFtcInRva2Vuc1wiLFwiY29tbWVudHNcIixcInBhcmVudFwiLFwiZW5jbG9zaW5nTm9kZVwiLFwicHJlY2VkaW5nTm9kZVwiLFwiZm9sbG93aW5nTm9kZVwiXSksZW89ZT0+T2JqZWN0LmtleXMoZSkuZmlsdGVyKHQ9PiFsbi5oYXModCkpO2Z1bmN0aW9uIHRvKGUpe3JldHVybiBlP3Q9PmUodCxsbik6ZW99dmFyIEg9dG87ZnVuY3Rpb24gcm8oZSx0KXtsZXR7cHJpbnRlcjp7bWFzc2FnZUFzdE5vZGU6cixnZXRWaXNpdG9yS2V5czpufX09dDtpZighcilyZXR1cm4gZTtsZXQgbz1IKG4pLHU9ci5pZ25vcmVkUHJvcGVydGllcz8/bmV3IFNldDtyZXR1cm4gaShlKTtmdW5jdGlvbiBpKHMsRCl7aWYoIShzIT09bnVsbCYmdHlwZW9mIHM9PVwib2JqZWN0XCIpKXJldHVybiBzO2lmKEFycmF5LmlzQXJyYXkocykpcmV0dXJuIHMubWFwKGY9PmkoZixEKSkuZmlsdGVyKEJvb2xlYW4pO2xldCBhPXt9LGM9bmV3IFNldChvKHMpKTtmb3IobGV0IGYgaW4gcykhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsZil8fHUuaGFzKGYpfHwoYy5oYXMoZik/YVtmXT1pKHNbZl0scyk6YVtmXT1zW2ZdKTtsZXQgZD1yKHMsYSxEKTtpZihkIT09bnVsbClyZXR1cm4gZD8/YX19dmFyIGZuPXJvO3ZhciBBbj1oZSh5bigpLDEpO2FzeW5jIGZ1bmN0aW9uIGNvKGUsdCl7bGV0IHI9YXdhaXQgZnQodCksbj1yLnByZXByb2Nlc3M/ci5wcmVwcm9jZXNzKGUsdCk6ZTt0Lm9yaWdpbmFsVGV4dD1uO2xldCBvO3RyeXtvPWF3YWl0IHIucGFyc2Uobix0LHQpfWNhdGNoKHUpe2xvKHUsZSl9cmV0dXJue3RleHQ6bixhc3Q6b319ZnVuY3Rpb24gbG8oZSx0KXtsZXR7bG9jOnJ9PWU7aWYocil7bGV0IG49KDAsQW4uY29kZUZyYW1lQ29sdW1ucykodCxyLHtoaWdobGlnaHRDb2RlOiEwfSk7dGhyb3cgZS5tZXNzYWdlKz1gXG5gK24sZS5jb2RlRnJhbWU9bixlfXRocm93IGV9dmFyIERlPWNvO3ZhciBJZSwkdCxkZSxwdCxWdD1jbGFzc3tjb25zdHJ1Y3Rvcih0KXtodCh0aGlzLEllKTtodCh0aGlzLGRlKTt0aGlzLnN0YWNrPVt0XX1nZXQga2V5KCl7bGV0e3N0YWNrOnQsc2libGluZ3M6cn09dGhpcztyZXR1cm4geSghMSx0LHI9PT1udWxsPy0yOi00KT8/bnVsbH1nZXQgaW5kZXgoKXtyZXR1cm4gdGhpcy5zaWJsaW5ncz09PW51bGw/bnVsbDp5KCExLHRoaXMuc3RhY2ssLTIpfWdldCBub2RlKCl7cmV0dXJuIHkoITEsdGhpcy5zdGFjaywtMSl9Z2V0IHBhcmVudCgpe3JldHVybiB0aGlzLmdldE5vZGUoMSl9Z2V0IGdyYW5kcGFyZW50KCl7cmV0dXJuIHRoaXMuZ2V0Tm9kZSgyKX1nZXQgaXNJbkFycmF5KCl7cmV0dXJuIHRoaXMuc2libGluZ3MhPT1udWxsfWdldCBzaWJsaW5ncygpe2xldHtzdGFjazp0fT10aGlzLHI9eSghMSx0LC0zKTtyZXR1cm4gQXJyYXkuaXNBcnJheShyKT9yOm51bGx9Z2V0IG5leHQoKXtsZXR7c2libGluZ3M6dH09dGhpcztyZXR1cm4gdD09PW51bGw/bnVsbDp0W3RoaXMuaW5kZXgrMV19Z2V0IHByZXZpb3VzKCl7bGV0e3NpYmxpbmdzOnR9PXRoaXM7cmV0dXJuIHQ9PT1udWxsP251bGw6dFt0aGlzLmluZGV4LTFdfWdldCBpc0ZpcnN0KCl7cmV0dXJuIHRoaXMuaW5kZXg9PT0wfWdldCBpc0xhc3QoKXtsZXR7c2libGluZ3M6dCxpbmRleDpyfT10aGlzO3JldHVybiB0IT09bnVsbCYmcj09PXQubGVuZ3RoLTF9Z2V0IGlzUm9vdCgpe3JldHVybiB0aGlzLnN0YWNrLmxlbmd0aD09PTF9Z2V0IHJvb3QoKXtyZXR1cm4gdGhpcy5zdGFja1swXX1nZXQgYW5jZXN0b3JzKCl7cmV0dXJuWy4uLmNlKHRoaXMsZGUscHQpLmNhbGwodGhpcyldfWdldE5hbWUoKXtsZXR7c3RhY2s6dH09dGhpcyx7bGVuZ3RoOnJ9PXQ7cmV0dXJuIHI+MT95KCExLHQsLTIpOm51bGx9Z2V0VmFsdWUoKXtyZXR1cm4geSghMSx0aGlzLnN0YWNrLC0xKX1nZXROb2RlKHQ9MCl7bGV0IHI9Y2UodGhpcyxJZSwkdCkuY2FsbCh0aGlzLHQpO3JldHVybiByPT09LTE/bnVsbDp0aGlzLnN0YWNrW3JdfWdldFBhcmVudE5vZGUodD0wKXtyZXR1cm4gdGhpcy5nZXROb2RlKHQrMSl9Y2FsbCh0LC4uLnIpe2xldHtzdGFjazpufT10aGlzLHtsZW5ndGg6b309bix1PXkoITEsbiwtMSk7Zm9yKGxldCBpIG9mIHIpdT11W2ldLG4ucHVzaChpLHUpO3RyeXtyZXR1cm4gdCh0aGlzKX1maW5hbGx5e24ubGVuZ3RoPW99fWNhbGxQYXJlbnQodCxyPTApe2xldCBuPWNlKHRoaXMsSWUsJHQpLmNhbGwodGhpcyxyKzEpLG89dGhpcy5zdGFjay5zcGxpY2UobisxKTt0cnl7cmV0dXJuIHQodGhpcyl9ZmluYWxseXt0aGlzLnN0YWNrLnB1c2goLi4ubyl9fWVhY2godCwuLi5yKXtsZXR7c3RhY2s6bn09dGhpcyx7bGVuZ3RoOm99PW4sdT15KCExLG4sLTEpO2ZvcihsZXQgaSBvZiByKXU9dVtpXSxuLnB1c2goaSx1KTt0cnl7Zm9yKGxldCBpPTA7aTx1Lmxlbmd0aDsrK2kpbi5wdXNoKGksdVtpXSksdCh0aGlzLGksdSksbi5sZW5ndGgtPTJ9ZmluYWxseXtuLmxlbmd0aD1vfX1tYXAodCwuLi5yKXtsZXQgbj1bXTtyZXR1cm4gdGhpcy5lYWNoKChvLHUsaSk9PntuW3VdPXQobyx1LGkpfSwuLi5yKSxufW1hdGNoKC4uLnQpe2xldCByPXRoaXMuc3RhY2subGVuZ3RoLTEsbj1udWxsLG89dGhpcy5zdGFja1tyLS1dO2ZvcihsZXQgdSBvZiB0KXtpZihvPT09dm9pZCAwKXJldHVybiExO2xldCBpPW51bGw7aWYodHlwZW9mIG49PVwibnVtYmVyXCImJihpPW4sbj10aGlzLnN0YWNrW3ItLV0sbz10aGlzLnN0YWNrW3ItLV0pLHUmJiF1KG8sbixpKSlyZXR1cm4hMTtuPXRoaXMuc3RhY2tbci0tXSxvPXRoaXMuc3RhY2tbci0tXX1yZXR1cm4hMH1maW5kQW5jZXN0b3IodCl7Zm9yKGxldCByIG9mIGNlKHRoaXMsZGUscHQpLmNhbGwodGhpcykpaWYodChyKSlyZXR1cm4gcn1oYXNBbmNlc3Rvcih0KXtmb3IobGV0IHIgb2YgY2UodGhpcyxkZSxwdCkuY2FsbCh0aGlzKSlpZih0KHIpKXJldHVybiEwO3JldHVybiExfX07SWU9bmV3IFdlYWtTZXQsJHQ9ZnVuY3Rpb24odCl7bGV0e3N0YWNrOnJ9PXRoaXM7Zm9yKGxldCBuPXIubGVuZ3RoLTE7bj49MDtuLT0yKWlmKCFBcnJheS5pc0FycmF5KHJbbl0pJiYtLXQ8MClyZXR1cm4gbjtyZXR1cm4tMX0sZGU9bmV3IFdlYWtTZXQscHQ9ZnVuY3Rpb24qKCl7bGV0e3N0YWNrOnR9PXRoaXM7Zm9yKGxldCByPXQubGVuZ3RoLTM7cj49MDtyLT0yKXtsZXQgbj10W3JdO0FycmF5LmlzQXJyYXkobil8fCh5aWVsZCBuKX19O3ZhciBCbj1WdDt2YXIgX249bmV3IFByb3h5KCgpPT57fSx7Z2V0OigpPT5fbn0pLFJlPV9uO2Z1bmN0aW9uIG1lKGUpe3JldHVybih0LHIsbik9PntsZXQgbz0hIShuIT1udWxsJiZuLmJhY2t3YXJkcyk7aWYocj09PSExKXJldHVybiExO2xldHtsZW5ndGg6dX09dCxpPXI7Zm9yKDtpPj0wJiZpPHU7KXtsZXQgcz10LmNoYXJBdChpKTtpZihlIGluc3RhbmNlb2YgUmVnRXhwKXtpZighZS50ZXN0KHMpKXJldHVybiBpfWVsc2UgaWYoIWUuaW5jbHVkZXMocykpcmV0dXJuIGk7bz9pLS06aSsrfXJldHVybiBpPT09LTF8fGk9PT11P2k6ITF9fXZhciB4bj1tZSgvXFxzLyksTj1tZShcIiBcdFwiKSxkdD1tZShcIiw7IFx0XCIpLG10PW1lKC9bXlxcblxccl0vKTtmdW5jdGlvbiBmbyhlLHQscil7bGV0IG49ISEociE9bnVsbCYmci5iYWNrd2FyZHMpO2lmKHQ9PT0hMSlyZXR1cm4hMTtsZXQgbz1lLmNoYXJBdCh0KTtpZihuKXtpZihlLmNoYXJBdCh0LTEpPT09XCJcXHJcIiYmbz09PWBcbmApcmV0dXJuIHQtMjtpZihvPT09YFxuYHx8bz09PVwiXFxyXCJ8fG89PT1cIlxcdTIwMjhcInx8bz09PVwiXFx1MjAyOVwiKXJldHVybiB0LTF9ZWxzZXtpZihvPT09XCJcXHJcIiYmZS5jaGFyQXQodCsxKT09PWBcbmApcmV0dXJuIHQrMjtpZihvPT09YFxuYHx8bz09PVwiXFxyXCJ8fG89PT1cIlxcdTIwMjhcInx8bz09PVwiXFx1MjAyOVwiKXJldHVybiB0KzF9cmV0dXJuIHR9dmFyIFk9Zm87ZnVuY3Rpb24gRm8oZSx0LHI9e30pe2xldCBuPU4oZSxyLmJhY2t3YXJkcz90LTE6dCxyKSxvPVkoZSxuLHIpO3JldHVybiBuIT09b312YXIgVj1GbztmdW5jdGlvbiBwbyhlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKSYmZS5sZW5ndGg+MH12YXIgTXQ9cG87ZnVuY3Rpb24gbW8oZSl7cmV0dXJuIGUhPT1udWxsJiZ0eXBlb2YgZT09XCJvYmplY3RcIn12YXIga249bW87ZnVuY3Rpb24qV3QoZSx0KXtsZXR7Z2V0VmlzaXRvcktleXM6cixmaWx0ZXI6bj0oKT0+ITB9PXQsbz11PT5rbih1KSYmbih1KTtmb3IobGV0IHUgb2YgcihlKSl7bGV0IGk9ZVt1XTtpZihBcnJheS5pc0FycmF5KGkpKWZvcihsZXQgcyBvZiBpKW8ocykmJih5aWVsZCBzKTtlbHNlIG8oaSkmJih5aWVsZCBpKX19ZnVuY3Rpb24qYm4oZSx0KXtsZXQgcj1bZV07Zm9yKGxldCBuPTA7bjxyLmxlbmd0aDtuKyspe2xldCBvPXJbbl07Zm9yKGxldCB1IG9mIFd0KG8sdCkpeWllbGQgdSxyLnB1c2godSl9fWZ1bmN0aW9uIEVvKGUpe2xldCB0PWUudHlwZXx8ZS5raW5kfHxcIih1bmtub3duIHR5cGUpXCIscj1TdHJpbmcoZS5uYW1lfHxlLmlkJiYodHlwZW9mIGUuaWQ9PVwib2JqZWN0XCI/ZS5pZC5uYW1lOmUuaWQpfHxlLmtleSYmKHR5cGVvZiBlLmtleT09XCJvYmplY3RcIj9lLmtleS5uYW1lOmUua2V5KXx8ZS52YWx1ZSYmKHR5cGVvZiBlLnZhbHVlPT1cIm9iamVjdFwiP1wiXCI6U3RyaW5nKGUudmFsdWUpKXx8ZS5vcGVyYXRvcnx8XCJcIik7cmV0dXJuIHIubGVuZ3RoPjIwJiYocj1yLnNsaWNlKDAsMTkpK1wiXFx1MjAyNlwiKSx0KyhyP1wiIFwiK3I6XCJcIil9ZnVuY3Rpb24gVXQoZSx0KXsoZS5jb21tZW50cz8/KGUuY29tbWVudHM9W10pKS5wdXNoKHQpLHQucHJpbnRlZD0hMSx0Lm5vZGVEZXNjcmlwdGlvbj1FbyhlKX1mdW5jdGlvbiBuZShlLHQpe3QubGVhZGluZz0hMCx0LnRyYWlsaW5nPSExLFV0KGUsdCl9ZnVuY3Rpb24gWChlLHQscil7dC5sZWFkaW5nPSExLHQudHJhaWxpbmc9ITEsciYmKHQubWFya2VyPXIpLFV0KGUsdCl9ZnVuY3Rpb24gdWUoZSx0KXt0LmxlYWRpbmc9ITEsdC50cmFpbGluZz0hMCxVdChlLHQpfXZhciB6dD1uZXcgV2Vha01hcDtmdW5jdGlvbiBFdChlLHQpe2lmKHp0LmhhcyhlKSlyZXR1cm4genQuZ2V0KGUpO2xldHtwcmludGVyOntnZXRDb21tZW50Q2hpbGROb2RlczpyLGNhbkF0dGFjaENvbW1lbnQ6bixnZXRWaXNpdG9yS2V5czpvfSxsb2NTdGFydDp1LGxvY0VuZDppfT10O2lmKCFuKXJldHVybltdO2xldCBzPSgocj09bnVsbD92b2lkIDA6cihlLHQpKT8/Wy4uLld0KGUse2dldFZpc2l0b3JLZXlzOkgobyl9KV0pLmZsYXRNYXAoRD0+bihEKT9bRF06RXQoRCx0KSk7cmV0dXJuIHMuc29ydCgoRCxhKT0+dShEKS11KGEpfHxpKEQpLWkoYSkpLHp0LnNldChlLHMpLHN9ZnVuY3Rpb24gT24oZSx0LHIsbil7bGV0e2xvY1N0YXJ0Om8sbG9jRW5kOnV9PXIsaT1vKHQpLHM9dSh0KSxEPUV0KGUsciksYSxjLGQ9MCxmPUQubGVuZ3RoO2Zvcig7ZDxmOyl7bGV0IHA9ZCtmPj4xLGw9RFtwXSxGPW8obCksbT11KGwpO2lmKEY8PWkmJnM8PW0pcmV0dXJuIE9uKGwsdCxyLGwpO2lmKG08PWkpe2E9bCxkPXArMTtjb250aW51ZX1pZihzPD1GKXtjPWwsZj1wO2NvbnRpbnVlfXRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgbG9jYXRpb24gb3ZlcmxhcHMgd2l0aCBub2RlIGxvY2F0aW9uXCIpfWlmKChuPT1udWxsP3ZvaWQgMDpuLnR5cGUpPT09XCJUZW1wbGF0ZUxpdGVyYWxcIil7bGV0e3F1YXNpczpwfT1uLGw9S3QocCx0LHIpO2EmJkt0KHAsYSxyKSE9PWwmJihhPW51bGwpLGMmJkt0KHAsYyxyKSE9PWwmJihjPW51bGwpfXJldHVybntlbmNsb3NpbmdOb2RlOm4scHJlY2VkaW5nTm9kZTphLGZvbGxvd2luZ05vZGU6Y319dmFyIEd0PSgpPT4hMTtmdW5jdGlvbiBObihlLHQpe2xldHtjb21tZW50czpyfT1lO2lmKGRlbGV0ZSBlLmNvbW1lbnRzLCFNdChyKXx8IXQucHJpbnRlci5jYW5BdHRhY2hDb21tZW50KXJldHVybjtsZXQgbj1bXSx7bG9jU3RhcnQ6byxsb2NFbmQ6dSxwcmludGVyOntleHBlcmltZW50YWxGZWF0dXJlczp7YXZvaWRBc3RNdXRhdGlvbjppPSExfT17fSxoYW5kbGVDb21tZW50czpzPXt9fSxvcmlnaW5hbFRleHQ6RH09dCx7b3duTGluZTphPUd0LGVuZE9mTGluZTpjPUd0LHJlbWFpbmluZzpkPUd0fT1zLGY9ci5tYXAoKHAsbCk9Pih7Li4uT24oZSxwLHQpLGNvbW1lbnQ6cCx0ZXh0OkQsb3B0aW9uczp0LGFzdDplLGlzTGFzdENvbW1lbnQ6ci5sZW5ndGgtMT09PWx9KSk7Zm9yKGxldFtwLGxdb2YgZi5lbnRyaWVzKCkpe2xldHtjb21tZW50OkYscHJlY2VkaW5nTm9kZTptLGVuY2xvc2luZ05vZGU6RSxmb2xsb3dpbmdOb2RlOkMsdGV4dDpnLG9wdGlvbnM6aCxhc3Q6Qixpc0xhc3RDb21tZW50Olp9PWw7aWYoaC5wYXJzZXI9PT1cImpzb25cInx8aC5wYXJzZXI9PT1cImpzb241XCJ8fGgucGFyc2VyPT09XCJfX2pzX2V4cHJlc3Npb25cInx8aC5wYXJzZXI9PT1cIl9fdHNfZXhwcmVzc2lvblwifHxoLnBhcnNlcj09PVwiX192dWVfZXhwcmVzc2lvblwifHxoLnBhcnNlcj09PVwiX192dWVfdHNfZXhwcmVzc2lvblwiKXtpZihvKEYpLW8oQik8PTApe25lKEIsRik7Y29udGludWV9aWYodShGKS11KEIpPj0wKXt1ZShCLEYpO2NvbnRpbnVlfX1sZXQgJDtpZihpPyQ9W2xdOihGLmVuY2xvc2luZ05vZGU9RSxGLnByZWNlZGluZ05vZGU9bSxGLmZvbGxvd2luZ05vZGU9QywkPVtGLGcsaCxCLFpdKSxDbyhnLGgsZixwKSlGLnBsYWNlbWVudD1cIm93bkxpbmVcIixhKC4uLiQpfHwoQz9uZShDLEYpOm0/dWUobSxGKTpFP1goRSxGKTpYKEIsRikpO2Vsc2UgaWYoaG8oZyxoLGYscCkpRi5wbGFjZW1lbnQ9XCJlbmRPZkxpbmVcIixjKC4uLiQpfHwobT91ZShtLEYpOkM/bmUoQyxGKTpFP1goRSxGKTpYKEIsRikpO2Vsc2UgaWYoRi5wbGFjZW1lbnQ9XCJyZW1haW5pbmdcIiwhZCguLi4kKSlpZihtJiZDKXtsZXQgUT1uLmxlbmd0aDtRPjAmJm5bUS0xXS5mb2xsb3dpbmdOb2RlIT09QyYmd24obixoKSxuLnB1c2gobCl9ZWxzZSBtP3VlKG0sRik6Qz9uZShDLEYpOkU/WChFLEYpOlgoQixGKX1pZih3bihuLHQpLCFpKWZvcihsZXQgcCBvZiByKWRlbGV0ZSBwLnByZWNlZGluZ05vZGUsZGVsZXRlIHAuZW5jbG9zaW5nTm9kZSxkZWxldGUgcC5mb2xsb3dpbmdOb2RlfXZhciBUbj1lPT4hL1tcXFNcXG5cXHUyMDI4XFx1MjAyOV0vLnRlc3QoZSk7ZnVuY3Rpb24gQ28oZSx0LHIsbil7bGV0e2NvbW1lbnQ6byxwcmVjZWRpbmdOb2RlOnV9PXJbbl0se2xvY1N0YXJ0OmksbG9jRW5kOnN9PXQsRD1pKG8pO2lmKHUpZm9yKGxldCBhPW4tMTthPj0wO2EtLSl7bGV0e2NvbW1lbnQ6YyxwcmVjZWRpbmdOb2RlOmR9PXJbYV07aWYoZCE9PXV8fCFUbihlLnNsaWNlKHMoYyksRCkpKWJyZWFrO0Q9aShjKX1yZXR1cm4gVihlLEQse2JhY2t3YXJkczohMH0pfWZ1bmN0aW9uIGhvKGUsdCxyLG4pe2xldHtjb21tZW50Om8sZm9sbG93aW5nTm9kZTp1fT1yW25dLHtsb2NTdGFydDppLGxvY0VuZDpzfT10LEQ9cyhvKTtpZih1KWZvcihsZXQgYT1uKzE7YTxyLmxlbmd0aDthKyspe2xldHtjb21tZW50OmMsZm9sbG93aW5nTm9kZTpkfT1yW2FdO2lmKGQhPT11fHwhVG4oZS5zbGljZShELGkoYykpKSlicmVhaztEPXMoYyl9cmV0dXJuIFYoZSxEKX1mdW5jdGlvbiB3bihlLHQpe3ZhciBzLEQ7bGV0IHI9ZS5sZW5ndGg7aWYocj09PTApcmV0dXJuO2xldHtwcmVjZWRpbmdOb2RlOm4sZm9sbG93aW5nTm9kZTpvfT1lWzBdLHU9dC5sb2NTdGFydChvKSxpO2ZvcihpPXI7aT4wOy0taSl7bGV0e2NvbW1lbnQ6YSxwcmVjZWRpbmdOb2RlOmMsZm9sbG93aW5nTm9kZTpkfT1lW2ktMV07UmUuc3RyaWN0RXF1YWwoYyxuKSxSZS5zdHJpY3RFcXVhbChkLG8pO2xldCBmPXQub3JpZ2luYWxUZXh0LnNsaWNlKHQubG9jRW5kKGEpLHUpO2lmKCgoRD0ocz10LnByaW50ZXIpLmlzR2FwKT09bnVsbD92b2lkIDA6RC5jYWxsKHMsZix0KSk/Py9eW1xccyhdKiQvLnRlc3QoZikpdT10LmxvY1N0YXJ0KGEpO2Vsc2UgYnJlYWt9Zm9yKGxldFthLHtjb21tZW50OmN9XW9mIGUuZW50cmllcygpKWE8aT91ZShuLGMpOm5lKG8sYyk7Zm9yKGxldCBhIG9mW24sb10pYS5jb21tZW50cyYmYS5jb21tZW50cy5sZW5ndGg+MSYmYS5jb21tZW50cy5zb3J0KChjLGQpPT50LmxvY1N0YXJ0KGMpLXQubG9jU3RhcnQoZCkpO2UubGVuZ3RoPTB9ZnVuY3Rpb24gS3QoZSx0LHIpe2xldCBuPXIubG9jU3RhcnQodCktMTtmb3IobGV0IG89MTtvPGUubGVuZ3RoOysrbylpZihuPHIubG9jU3RhcnQoZVtvXSkpcmV0dXJuIG8tMTtyZXR1cm4gMH1mdW5jdGlvbiBnbyhlLHQpe2xldCByPXQtMTtyPU4oZSxyLHtiYWNrd2FyZHM6ITB9KSxyPVkoZSxyLHtiYWNrd2FyZHM6ITB9KSxyPU4oZSxyLHtiYWNrd2FyZHM6ITB9KTtsZXQgbj1ZKGUscix7YmFja3dhcmRzOiEwfSk7cmV0dXJuIHIhPT1ufXZhciBZZT1nbztmdW5jdGlvbiBTbihlLHQpe2xldCByPWUubm9kZTtyZXR1cm4gci5wcmludGVkPSEwLHQucHJpbnRlci5wcmludENvbW1lbnQoZSx0KX1mdW5jdGlvbiB5byhlLHQpe3ZhciBjO2xldCByPWUubm9kZSxuPVtTbihlLHQpXSx7cHJpbnRlcjpvLG9yaWdpbmFsVGV4dDp1LGxvY1N0YXJ0OmksbG9jRW5kOnN9PXQ7aWYoKGM9by5pc0Jsb2NrQ29tbWVudCk9PW51bGw/dm9pZCAwOmMuY2FsbChvLHIpKXtsZXQgZD1WKHUscyhyKSk/Vih1LGkocikse2JhY2t3YXJkczohMH0pP0c6S2U6XCIgXCI7bi5wdXNoKGQpfWVsc2Ugbi5wdXNoKEcpO2xldCBhPVkodSxOKHUscyhyKSkpO3JldHVybiBhIT09ITEmJlYodSxhKSYmbi5wdXNoKEcpLG59ZnVuY3Rpb24gQW8oZSx0LHIpe3ZhciBhO2xldCBuPWUubm9kZSxvPVNuKGUsdCkse3ByaW50ZXI6dSxvcmlnaW5hbFRleHQ6aSxsb2NTdGFydDpzfT10LEQ9KGE9dS5pc0Jsb2NrQ29tbWVudCk9PW51bGw/dm9pZCAwOmEuY2FsbCh1LG4pO2lmKHIhPW51bGwmJnIuaGFzTGluZVN1ZmZpeCYmIShyIT1udWxsJiZyLmlzQmxvY2spfHxWKGkscyhuKSx7YmFja3dhcmRzOiEwfSkpe2xldCBjPVllKGkscyhuKSk7cmV0dXJue2RvYzpCZShbRyxjP0c6XCJcIixvXSksaXNCbG9jazpELGhhc0xpbmVTdWZmaXg6ITB9fXJldHVybiFEfHxyIT1udWxsJiZyLmhhc0xpbmVTdWZmaXg/e2RvYzpbQmUoW1wiIFwiLG9dKSxsZV0saXNCbG9jazpELGhhc0xpbmVTdWZmaXg6ITB9Ontkb2M6W1wiIFwiLG9dLGlzQmxvY2s6RCxoYXNMaW5lU3VmZml4OiExfX1mdW5jdGlvbiBCbyhlLHQpe2xldCByPWUubm9kZTtpZighcilyZXR1cm57fTtsZXQgbj10W1N5bWJvbC5mb3IoXCJwcmludGVkQ29tbWVudHNcIildO2lmKChyLmNvbW1lbnRzfHxbXSkuZmlsdGVyKEQ9PiFuLmhhcyhEKSkubGVuZ3RoPT09MClyZXR1cm57bGVhZGluZzpcIlwiLHRyYWlsaW5nOlwiXCJ9O2xldCB1PVtdLGk9W10scztyZXR1cm4gZS5lYWNoKCgpPT57bGV0IEQ9ZS5ub2RlO2lmKG4hPW51bGwmJm4uaGFzKEQpKXJldHVybjtsZXR7bGVhZGluZzphLHRyYWlsaW5nOmN9PUQ7YT91LnB1c2goeW8oZSx0KSk6YyYmKHM9QW8oZSx0LHMpLGkucHVzaChzLmRvYykpfSxcImNvbW1lbnRzXCIpLHtsZWFkaW5nOnUsdHJhaWxpbmc6aX19ZnVuY3Rpb24gdm4oZSx0LHIpe2xldHtsZWFkaW5nOm4sdHJhaWxpbmc6b309Qm8oZSxyKTtyZXR1cm4hbiYmIW8/dDpaZSh0LHU9PltuLHUsb10pfWZ1bmN0aW9uIFBuKGUpe2xldHtbU3ltYm9sLmZvcihcImNvbW1lbnRzXCIpXTp0LFtTeW1ib2wuZm9yKFwicHJpbnRlZENvbW1lbnRzXCIpXTpyfT1lO2ZvcihsZXQgbiBvZiB0KXtpZighbi5wcmludGVkJiYhci5oYXMobikpdGhyb3cgbmV3IEVycm9yKCdDb21tZW50IFwiJytuLnZhbHVlLnRyaW0oKSsnXCIgd2FzIG5vdCBwcmludGVkLiBQbGVhc2UgcmVwb3J0IHRoaXMgZXJyb3IhJyk7ZGVsZXRlIG4ucHJpbnRlZH19YXN5bmMgZnVuY3Rpb24gTG4oZSx0LHIsbixvKXtsZXR7ZW1iZWRkZWRMYW5ndWFnZUZvcm1hdHRpbmc6dSxwcmludGVyOntlbWJlZDppLGhhc1ByZXR0aWVySWdub3JlOnM9KCk9PiExLGdldFZpc2l0b3JLZXlzOkR9fT1yO2lmKCFpfHx1IT09XCJhdXRvXCIpcmV0dXJuO2lmKGkubGVuZ3RoPjIpdGhyb3cgbmV3IEVycm9yKFwicHJpbnRlci5lbWJlZCBoYXMgdG9vIG1hbnkgcGFyYW1ldGVycy4gVGhlIEFQSSBjaGFuZ2VkIGluIFByZXR0aWVyIHYzLiBQbGVhc2UgdXBkYXRlIHlvdXIgcGx1Z2luLiBTZWUgaHR0cHM6Ly9wcmV0dGllci5pby9kb2NzL2VuL3BsdWdpbnMuaHRtbCNvcHRpb25hbC1lbWJlZFwiKTtsZXQgYT1IKGkuZ2V0VmlzaXRvcktleXM/P0QpLGM9W107cCgpO2xldCBkPWUuc3RhY2s7Zm9yKGxldHtwcmludDpsLG5vZGU6RixwYXRoU3RhY2s6bX1vZiBjKXRyeXtlLnN0YWNrPW07bGV0IEU9YXdhaXQgbChmLHQsZSxyKTtFJiZvLnNldChGLEUpfWNhdGNoKEUpe2lmKGdsb2JhbFRoaXMuUFJFVFRJRVJfREVCVUcpdGhyb3cgRX1lLnN0YWNrPWQ7ZnVuY3Rpb24gZihsLEYpe3JldHVybiBfbyhsLEYscixuKX1mdW5jdGlvbiBwKCl7bGV0e25vZGU6bH09ZTtpZihsPT09bnVsbHx8dHlwZW9mIGwhPVwib2JqZWN0XCJ8fHMoZSkpcmV0dXJuO2ZvcihsZXQgbSBvZiBhKGwpKUFycmF5LmlzQXJyYXkobFttXSk/ZS5lYWNoKHAsbSk6ZS5jYWxsKHAsbSk7bGV0IEY9aShlLHIpO2lmKEYpe2lmKHR5cGVvZiBGPT1cImZ1bmN0aW9uXCIpe2MucHVzaCh7cHJpbnQ6Rixub2RlOmwscGF0aFN0YWNrOlsuLi5lLnN0YWNrXX0pO3JldHVybn1vLnNldChsLEYpfX19YXN5bmMgZnVuY3Rpb24gX28oZSx0LHIsbil7bGV0IG89YXdhaXQgcmUoey4uLnIsLi4udCxwYXJlbnRQYXJzZXI6ci5wYXJzZXIsb3JpZ2luYWxUZXh0OmV9LHtwYXNzVGhyb3VnaDohMH0pLHthc3Q6dX09YXdhaXQgRGUoZSxvKSxpPWF3YWl0IG4odSxvKTtyZXR1cm4gWGUoaSl9ZnVuY3Rpb24geG8oZSl7cmV0dXJuKCk9Pnt9fXZhciBJbj14bztmdW5jdGlvbiBrbyhlLHQpe2xldHtvcmlnaW5hbFRleHQ6cixbU3ltYm9sLmZvcihcImNvbW1lbnRzXCIpXTpuLGxvY1N0YXJ0Om8sbG9jRW5kOnUsW1N5bWJvbC5mb3IoXCJwcmludGVkQ29tbWVudHNcIildOml9PXQse25vZGU6c309ZSxEPW8ocyksYT11KHMpO2ZvcihsZXQgYyBvZiBuKW8oYyk+PUQmJnUoYyk8PWEmJmkuYWRkKGMpO3JldHVybiByLnNsaWNlKEQsYSl9dmFyIFJuPWtvO2FzeW5jIGZ1bmN0aW9uIGplKGUsdCl7KHthc3Q6ZX09YXdhaXQgSHQoZSx0KSk7bGV0IHI9bmV3IE1hcCxuPW5ldyBCbihlKSxvPUluKHQpLHU9bmV3IE1hcDthd2FpdCBMbihuLHMsdCxqZSx1KTtsZXQgaT1hd2FpdCBZbihuLHQscyx2b2lkIDAsdSk7cmV0dXJuIFBuKHQpLGk7ZnVuY3Rpb24gcyhhLGMpe3JldHVybiBhPT09dm9pZCAwfHxhPT09bj9EKGMpOkFycmF5LmlzQXJyYXkoYSk/bi5jYWxsKCgpPT5EKGMpLC4uLmEpOm4uY2FsbCgoKT0+RChjKSxhKX1mdW5jdGlvbiBEKGEpe28obik7bGV0IGM9bi5ub2RlO2lmKGM9PW51bGwpcmV0dXJuXCJcIjtsZXQgZD1jJiZ0eXBlb2YgYz09XCJvYmplY3RcIiYmYT09PXZvaWQgMDtpZihkJiZyLmhhcyhjKSlyZXR1cm4gci5nZXQoYyk7bGV0IGY9WW4obix0LHMsYSx1KTtyZXR1cm4gZCYmci5zZXQoYyxmKSxmfX1mdW5jdGlvbiBZbihlLHQscixuLG8pe3ZhciBEO2xldHtub2RlOnV9PWUse3ByaW50ZXI6aX09dCxzO3JldHVybihEPWkuaGFzUHJldHRpZXJJZ25vcmUpIT1udWxsJiZELmNhbGwoaSxlKT9zPVJuKGUsdCk6by5oYXModSk/cz1vLmdldCh1KTpzPWkucHJpbnQoZSx0LHIsbiksdT09PXQuY3Vyc29yTm9kZSYmKHM9WmUocyxhPT5beGUsYSx4ZV0pKSxpLnByaW50Q29tbWVudCYmKCFpLndpbGxQcmludE93bkNvbW1lbnRzfHwhaS53aWxsUHJpbnRPd25Db21tZW50cyhlLHQpKSYmKHM9dm4oZSxzLHQpKSxzfWFzeW5jIGZ1bmN0aW9uIEh0KGUsdCl7bGV0IHI9ZS5jb21tZW50cz8/W107dFtTeW1ib2wuZm9yKFwiY29tbWVudHNcIildPXIsdFtTeW1ib2wuZm9yKFwidG9rZW5zXCIpXT1lLnRva2Vucz8/W10sdFtTeW1ib2wuZm9yKFwicHJpbnRlZENvbW1lbnRzXCIpXT1uZXcgU2V0LE5uKGUsdCk7bGV0e3ByaW50ZXI6e3ByZXByb2Nlc3M6bn19PXQ7cmV0dXJuIGU9bj9hd2FpdCBuKGUsdCk6ZSx7YXN0OmUsY29tbWVudHM6cn19dmFyIGJvPSh7cGFyc2VyOmV9KT0+ZT09PVwianNvblwifHxlPT09XCJqc29uNVwifHxlPT09XCJqc29uLXN0cmluZ2lmeVwiO2Z1bmN0aW9uIHdvKGUsdCl7bGV0IHI9W2Uubm9kZSwuLi5lLnBhcmVudE5vZGVzXSxuPW5ldyBTZXQoW3Qubm9kZSwuLi50LnBhcmVudE5vZGVzXSk7cmV0dXJuIHIuZmluZChvPT4kbi5oYXMoby50eXBlKSYmbi5oYXMobykpfWZ1bmN0aW9uIGpuKGUpe2xldCB0PWUubGVuZ3RoLTE7Zm9yKDs7KXtsZXQgcj1lW3RdO2lmKChyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJQcm9ncmFtXCJ8fChyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJGaWxlXCIpdC0tO2Vsc2UgYnJlYWt9cmV0dXJuIGUuc2xpY2UoMCx0KzEpfWZ1bmN0aW9uIE9vKGUsdCx7bG9jU3RhcnQ6cixsb2NFbmQ6bn0pe2xldCBvPWUubm9kZSx1PXQubm9kZTtpZihvPT09dSlyZXR1cm57c3RhcnROb2RlOm8sZW5kTm9kZTp1fTtsZXQgaT1yKGUubm9kZSk7Zm9yKGxldCBEIG9mIGpuKHQucGFyZW50Tm9kZXMpKWlmKHIoRCk+PWkpdT1EO2Vsc2UgYnJlYWs7bGV0IHM9bih0Lm5vZGUpO2ZvcihsZXQgRCBvZiBqbihlLnBhcmVudE5vZGVzKSl7aWYobihEKTw9cylvPUQ7ZWxzZSBicmVhaztpZihvPT09dSlicmVha31yZXR1cm57c3RhcnROb2RlOm8sZW5kTm9kZTp1fX1mdW5jdGlvbiBxdChlLHQscixuLG89W10sdSl7bGV0e2xvY1N0YXJ0OmksbG9jRW5kOnN9PXIsRD1pKGUpLGE9cyhlKTtpZighKHQ+YXx8dDxEfHx1PT09XCJyYW5nZUVuZFwiJiZ0PT09RHx8dT09PVwicmFuZ2VTdGFydFwiJiZ0PT09YSkpe2ZvcihsZXQgYyBvZiBFdChlLHIpKXtsZXQgZD1xdChjLHQscixuLFtlLC4uLm9dLHUpO2lmKGQpcmV0dXJuIGR9aWYoIW58fG4oZSxvWzBdKSlyZXR1cm57bm9kZTplLHBhcmVudE5vZGVzOm99fX1mdW5jdGlvbiBObyhlLHQpe3JldHVybiB0IT09XCJEZWNsYXJlRXhwb3J0RGVjbGFyYXRpb25cIiYmZSE9PVwiVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uXCImJihlPT09XCJEaXJlY3RpdmVcInx8ZT09PVwiVHlwZUFsaWFzXCJ8fGU9PT1cIlRTRXhwb3J0QXNzaWdubWVudFwifHxlLnN0YXJ0c1dpdGgoXCJEZWNsYXJlXCIpfHxlLnN0YXJ0c1dpdGgoXCJUU0RlY2xhcmVcIil8fGUuZW5kc1dpdGgoXCJTdGF0ZW1lbnRcIil8fGUuZW5kc1dpdGgoXCJEZWNsYXJhdGlvblwiKSl9dmFyICRuPW5ldyBTZXQoW1wiSnNvblJvb3RcIixcIk9iamVjdEV4cHJlc3Npb25cIixcIkFycmF5RXhwcmVzc2lvblwiLFwiU3RyaW5nTGl0ZXJhbFwiLFwiTnVtZXJpY0xpdGVyYWxcIixcIkJvb2xlYW5MaXRlcmFsXCIsXCJOdWxsTGl0ZXJhbFwiLFwiVW5hcnlFeHByZXNzaW9uXCIsXCJUZW1wbGF0ZUxpdGVyYWxcIl0pLFRvPW5ldyBTZXQoW1wiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJWYXJpYWJsZURlZmluaXRpb25cIixcIlR5cGVFeHRlbnNpb25EZWZpbml0aW9uXCIsXCJPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwiRmllbGREZWZpbml0aW9uXCIsXCJEaXJlY3RpdmVEZWZpbml0aW9uXCIsXCJFbnVtVHlwZURlZmluaXRpb25cIixcIkVudW1WYWx1ZURlZmluaXRpb25cIixcIklucHV0VmFsdWVEZWZpbml0aW9uXCIsXCJJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uXCIsXCJTY2hlbWFEZWZpbml0aW9uXCIsXCJPcGVyYXRpb25UeXBlRGVmaW5pdGlvblwiLFwiSW50ZXJmYWNlVHlwZURlZmluaXRpb25cIixcIlVuaW9uVHlwZURlZmluaXRpb25cIixcIlNjYWxhclR5cGVEZWZpbml0aW9uXCJdKTtmdW5jdGlvbiBWbihlLHQscil7aWYoIXQpcmV0dXJuITE7c3dpdGNoKGUucGFyc2VyKXtjYXNlXCJmbG93XCI6Y2FzZVwiYmFiZWxcIjpjYXNlXCJiYWJlbC1mbG93XCI6Y2FzZVwiYmFiZWwtdHNcIjpjYXNlXCJ0eXBlc2NyaXB0XCI6Y2FzZVwiYWNvcm5cIjpjYXNlXCJlc3ByZWVcIjpjYXNlXCJtZXJpeWFoXCI6Y2FzZVwiX19iYWJlbF9lc3RyZWVcIjpyZXR1cm4gTm8odC50eXBlLHI9PW51bGw/dm9pZCAwOnIudHlwZSk7Y2FzZVwianNvblwiOmNhc2VcImpzb241XCI6Y2FzZVwianNvbi1zdHJpbmdpZnlcIjpyZXR1cm4gJG4uaGFzKHQudHlwZSk7Y2FzZVwiZ3JhcGhxbFwiOnJldHVybiBUby5oYXModC5raW5kKTtjYXNlXCJ2dWVcIjpyZXR1cm4gdC50YWchPT1cInJvb3RcIn1yZXR1cm4hMX1mdW5jdGlvbiBNbihlLHQscil7bGV0e3JhbmdlU3RhcnQ6bixyYW5nZUVuZDpvLGxvY1N0YXJ0OnUsbG9jRW5kOml9PXQ7UmUub2sobz5uKTtsZXQgcz1lLnNsaWNlKG4sbykuc2VhcmNoKC9cXFMvKSxEPXM9PT0tMTtpZighRClmb3Iobis9cztvPm4mJiEvXFxTLy50ZXN0KGVbby0xXSk7LS1vKTtsZXQgYT1xdChyLG4sdCwocCxsKT0+Vm4odCxwLGwpLFtdLFwicmFuZ2VTdGFydFwiKSxjPUQ/YTpxdChyLG8sdCxwPT5Wbih0LHApLFtdLFwicmFuZ2VFbmRcIik7aWYoIWF8fCFjKXJldHVybntyYW5nZVN0YXJ0OjAscmFuZ2VFbmQ6MH07bGV0IGQsZjtpZihibyh0KSl7bGV0IHA9d28oYSxjKTtkPXAsZj1wfWVsc2Uoe3N0YXJ0Tm9kZTpkLGVuZE5vZGU6Zn09T28oYSxjLHQpKTtyZXR1cm57cmFuZ2VTdGFydDpNYXRoLm1pbih1KGQpLHUoZikpLHJhbmdlRW5kOk1hdGgubWF4KGkoZCksaShmKSl9fWZ1bmN0aW9uIFNvKGUsdCl7bGV0e2N1cnNvck9mZnNldDpyLGxvY1N0YXJ0Om4sbG9jRW5kOm99PXQsdT1IKHQucHJpbnRlci5nZXRWaXNpdG9yS2V5cyksaT1EPT5uKEQpPD1yJiZvKEQpPj1yLHM9ZTtmb3IobGV0IEQgb2YgYm4oZSx7Z2V0VmlzaXRvcktleXM6dSxmaWx0ZXI6aX0pKXM9RDtyZXR1cm4gc312YXIgV249U287dmFyIEhuPVwiXFx1RkVGRlwiLFVuPVN5bWJvbChcImN1cnNvclwiKTthc3luYyBmdW5jdGlvbiBxbihlLHQscj0wKXtpZighZXx8ZS50cmltKCkubGVuZ3RoPT09MClyZXR1cm57Zm9ybWF0dGVkOlwiXCIsY3Vyc29yT2Zmc2V0Oi0xLGNvbW1lbnRzOltdfTtsZXR7YXN0Om4sdGV4dDpvfT1hd2FpdCBEZShlLHQpO3QuY3Vyc29yT2Zmc2V0Pj0wJiYodC5jdXJzb3JOb2RlPVduKG4sdCkpO2xldCB1PWF3YWl0IGplKG4sdCxyKTtyPjAmJih1PXFlKFtHLHVdLHIsdC50YWJXaWR0aCkpO2xldCBpPWZlKHUsdCk7aWYocj4wKXtsZXQgRD1pLmZvcm1hdHRlZC50cmltKCk7aS5jdXJzb3JOb2RlU3RhcnQhPT12b2lkIDAmJihpLmN1cnNvck5vZGVTdGFydC09aS5mb3JtYXR0ZWQuaW5kZXhPZihEKSksaS5mb3JtYXR0ZWQ9RCtiZSh0LmVuZE9mTGluZSl9bGV0IHM9dFtTeW1ib2wuZm9yKFwiY29tbWVudHNcIildO2lmKHQuY3Vyc29yT2Zmc2V0Pj0wKXtsZXQgRCxhLGMsZCxmO2lmKHQuY3Vyc29yTm9kZSYmaS5jdXJzb3JOb2RlVGV4dD8oRD10LmxvY1N0YXJ0KHQuY3Vyc29yTm9kZSksYT1vLnNsaWNlKEQsdC5sb2NFbmQodC5jdXJzb3JOb2RlKSksYz10LmN1cnNvck9mZnNldC1ELGQ9aS5jdXJzb3JOb2RlU3RhcnQsZj1pLmN1cnNvck5vZGVUZXh0KTooRD0wLGE9byxjPXQuY3Vyc29yT2Zmc2V0LGQ9MCxmPWkuZm9ybWF0dGVkKSxhPT09ZilyZXR1cm57Zm9ybWF0dGVkOmkuZm9ybWF0dGVkLGN1cnNvck9mZnNldDpkK2MsY29tbWVudHM6c307bGV0IHA9YS5zcGxpdChcIlwiKTtwLnNwbGljZShjLDAsVW4pO2xldCBsPWYuc3BsaXQoXCJcIiksRj0oMCxLbi5kaWZmQXJyYXlzKShwLGwpLG09ZDtmb3IobGV0IEUgb2YgRilpZihFLnJlbW92ZWQpe2lmKEUudmFsdWUuaW5jbHVkZXMoVW4pKWJyZWFrfWVsc2UgbSs9RS5jb3VudDtyZXR1cm57Zm9ybWF0dGVkOmkuZm9ybWF0dGVkLGN1cnNvck9mZnNldDptLGNvbW1lbnRzOnN9fXJldHVybntmb3JtYXR0ZWQ6aS5mb3JtYXR0ZWQsY3Vyc29yT2Zmc2V0Oi0xLGNvbW1lbnRzOnN9fWFzeW5jIGZ1bmN0aW9uIHZvKGUsdCl7bGV0e2FzdDpyLHRleHQ6bn09YXdhaXQgRGUoZSx0KSx7cmFuZ2VTdGFydDpvLHJhbmdlRW5kOnV9PU1uKG4sdCxyKSxpPW4uc2xpY2Uobyx1KSxzPU1hdGgubWluKG8sbi5sYXN0SW5kZXhPZihgXG5gLG8pKzEpLEQ9bi5zbGljZShzLG8pLm1hdGNoKC9eXFxzKi8pWzBdLGE9RmUoRCx0LnRhYldpZHRoKSxjPWF3YWl0IHFuKGksey4uLnQscmFuZ2VTdGFydDowLHJhbmdlRW5kOk51bWJlci5QT1NJVElWRV9JTkZJTklUWSxjdXJzb3JPZmZzZXQ6dC5jdXJzb3JPZmZzZXQ+byYmdC5jdXJzb3JPZmZzZXQ8PXU/dC5jdXJzb3JPZmZzZXQtbzotMSxlbmRPZkxpbmU6XCJsZlwifSxhKSxkPWMuZm9ybWF0dGVkLnRyaW1FbmQoKSx7Y3Vyc29yT2Zmc2V0OmZ9PXQ7Zj51P2YrPWQubGVuZ3RoLWkubGVuZ3RoOmMuY3Vyc29yT2Zmc2V0Pj0wJiYoZj1jLmN1cnNvck9mZnNldCtvKTtsZXQgcD1uLnNsaWNlKDAsbykrZCtuLnNsaWNlKHUpO2lmKHQuZW5kT2ZMaW5lIT09XCJsZlwiKXtsZXQgbD1iZSh0LmVuZE9mTGluZSk7Zj49MCYmbD09PWBcXHJcbmAmJihmKz1fdChwLnNsaWNlKDAsZiksYFxuYCkpLHA9ZWUoITEscCxgXG5gLGwpfXJldHVybntmb3JtYXR0ZWQ6cCxjdXJzb3JPZmZzZXQ6Zixjb21tZW50czpjLmNvbW1lbnRzfX1mdW5jdGlvbiBKdChlLHQscil7cmV0dXJuIHR5cGVvZiB0IT1cIm51bWJlclwifHxOdW1iZXIuaXNOYU4odCl8fHQ8MHx8dD5lLmxlbmd0aD9yOnR9ZnVuY3Rpb24gem4oZSx0KXtsZXR7Y3Vyc29yT2Zmc2V0OnIscmFuZ2VTdGFydDpuLHJhbmdlRW5kOm99PXQ7cmV0dXJuIHI9SnQoZSxyLC0xKSxuPUp0KGUsbiwwKSxvPUp0KGUsbyxlLmxlbmd0aCksey4uLnQsY3Vyc29yT2Zmc2V0OnIscmFuZ2VTdGFydDpuLHJhbmdlRW5kOm99fWZ1bmN0aW9uIEpuKGUsdCl7bGV0e2N1cnNvck9mZnNldDpyLHJhbmdlU3RhcnQ6bixyYW5nZUVuZDpvLGVuZE9mTGluZTp1fT16bihlLHQpLGk9ZS5jaGFyQXQoMCk9PT1IbjtpZihpJiYoZT1lLnNsaWNlKDEpLHItLSxuLS0sby0tKSx1PT09XCJhdXRvXCImJih1PWhyKGUpKSxlLmluY2x1ZGVzKFwiXFxyXCIpKXtsZXQgcz1EPT5fdChlLnNsaWNlKDAsTWF0aC5tYXgoRCwwKSksYFxcclxuYCk7ci09cyhyKSxuLT1zKG4pLG8tPXMobyksZT1ncihlKX1yZXR1cm57aGFzQk9NOmksdGV4dDplLG9wdGlvbnM6em4oZSx7Li4udCxjdXJzb3JPZmZzZXQ6cixyYW5nZVN0YXJ0Om4scmFuZ2VFbmQ6byxlbmRPZkxpbmU6dX0pfX1hc3luYyBmdW5jdGlvbiBHbihlLHQpe2xldCByPWF3YWl0IGZ0KHQpO3JldHVybiFyLmhhc1ByYWdtYXx8ci5oYXNQcmFnbWEoZSl9YXN5bmMgZnVuY3Rpb24gWHQoZSx0KXtsZXR7aGFzQk9NOnIsdGV4dDpuLG9wdGlvbnM6b309Sm4oZSxhd2FpdCByZSh0KSk7aWYoby5yYW5nZVN0YXJ0Pj1vLnJhbmdlRW5kJiZuIT09XCJcInx8by5yZXF1aXJlUHJhZ21hJiYhYXdhaXQgR24obixvKSlyZXR1cm57Zm9ybWF0dGVkOmUsY3Vyc29yT2Zmc2V0OnQuY3Vyc29yT2Zmc2V0LGNvbW1lbnRzOltdfTtsZXQgdTtyZXR1cm4gby5yYW5nZVN0YXJ0PjB8fG8ucmFuZ2VFbmQ8bi5sZW5ndGg/dT1hd2FpdCB2byhuLG8pOighby5yZXF1aXJlUHJhZ21hJiZvLmluc2VydFByYWdtYSYmby5wcmludGVyLmluc2VydFByYWdtYSYmIWF3YWl0IEduKG4sbykmJihuPW8ucHJpbnRlci5pbnNlcnRQcmFnbWEobikpLHU9YXdhaXQgcW4obixvKSksciYmKHUuZm9ybWF0dGVkPUhuK3UuZm9ybWF0dGVkLHUuY3Vyc29yT2Zmc2V0Pj0wJiZ1LmN1cnNvck9mZnNldCsrKSx1fWFzeW5jIGZ1bmN0aW9uIFhuKGUsdCxyKXtsZXR7dGV4dDpuLG9wdGlvbnM6b309Sm4oZSxhd2FpdCByZSh0KSksdT1hd2FpdCBEZShuLG8pO3JldHVybiByJiYoci5wcmVwcm9jZXNzRm9yUHJpbnQmJih1LmFzdD1hd2FpdCBIdCh1LmFzdCxvKSksci5tYXNzYWdlJiYodS5hc3Q9Zm4odS5hc3QsbykpKSx1fWFzeW5jIGZ1bmN0aW9uIFpuKGUsdCl7dD1hd2FpdCByZSh0KTtsZXQgcj1hd2FpdCBqZShlLHQpO3JldHVybiBmZShyLHQpfWFzeW5jIGZ1bmN0aW9uIFFuKGUsdCl7bGV0IHI9UHIoZSkse2Zvcm1hdHRlZDpufT1hd2FpdCBYdChyLHsuLi50LHBhcnNlcjpcIl9fanNfZXhwcmVzc2lvblwifSk7cmV0dXJuIG59YXN5bmMgZnVuY3Rpb24gZXUoZSx0KXt0PWF3YWl0IHJlKHQpO2xldHthc3Q6cn09YXdhaXQgRGUoZSx0KTtyZXR1cm4gamUocix0KX1hc3luYyBmdW5jdGlvbiB0dShlLHQpe3JldHVybiBmZShlLGF3YWl0IHJlKHQpKX12YXIgUXQ9e307V2UoUXQse2FkZERhbmdsaW5nQ29tbWVudDooKT0+WCxhZGRMZWFkaW5nQ29tbWVudDooKT0+bmUsYWRkVHJhaWxpbmdDb21tZW50OigpPT51ZSxnZXRBbGlnbm1lbnRTaXplOigpPT5GZSxnZXRJbmRlbnRTaXplOigpPT5udSxnZXRNYXhDb250aW51b3VzQ291bnQ6KCk9PnJ1LGdldE5leHROb25TcGFjZU5vbkNvbW1lbnRDaGFyYWN0ZXI6KCk9Pml1LGdldE5leHROb25TcGFjZU5vbkNvbW1lbnRDaGFyYWN0ZXJJbmRleDooKT0+R28sZ2V0U3RyaW5nV2lkdGg6KCk9PndlLGhhc05ld2xpbmU6KCk9PlYsaGFzTmV3bGluZUluUmFuZ2U6KCk9PnV1LGhhc1NwYWNlczooKT0+b3UsaXNOZXh0TGluZUVtcHR5OigpPT5Kbyxpc05leHRMaW5lRW1wdHlBZnRlckluZGV4OigpPT5DdCxpc1ByZXZpb3VzTGluZUVtcHR5OigpPT5IbyxtYWtlU3RyaW5nOigpPT5zdSxza2lwOigpPT5tZSxza2lwRXZlcnl0aGluZ0J1dE5ld0xpbmU6KCk9Pm10LHNraXBJbmxpbmVDb21tZW50OigpPT5FZSxza2lwTmV3bGluZTooKT0+WSxza2lwU3BhY2VzOigpPT5OLHNraXBUb0xpbmVFbmQ6KCk9PmR0LHNraXBUcmFpbGluZ0NvbW1lbnQ6KCk9PkNlLHNraXBXaGl0ZXNwYWNlOigpPT54bn0pO2Z1bmN0aW9uIExvKGUsdCl7aWYodD09PSExKXJldHVybiExO2lmKGUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIipcIil7Zm9yKGxldCByPXQrMjtyPGUubGVuZ3RoOysrcilpZihlLmNoYXJBdChyKT09PVwiKlwiJiZlLmNoYXJBdChyKzEpPT09XCIvXCIpcmV0dXJuIHIrMn1yZXR1cm4gdH12YXIgRWU9TG87ZnVuY3Rpb24gSW8oZSx0KXtyZXR1cm4gdD09PSExPyExOmUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIi9cIj9tdChlLHQpOnR9dmFyIENlPUlvO2Z1bmN0aW9uIFJvKGUsdCl7bGV0IHI9bnVsbCxuPXQ7Zm9yKDtuIT09cjspcj1uLG49TihlLG4pLG49RWUoZSxuKSxuPUNlKGUsbiksbj1ZKGUsbik7cmV0dXJuIG59dmFyIFZlPVJvO2Z1bmN0aW9uIFlvKGUsdCl7bGV0IHI9bnVsbCxuPXQ7Zm9yKDtuIT09cjspcj1uLG49ZHQoZSxuKSxuPUVlKGUsbiksbj1OKGUsbik7cmV0dXJuIG49Q2UoZSxuKSxuPVkoZSxuKSxuIT09ITEmJlYoZSxuKX12YXIgQ3Q9WW87ZnVuY3Rpb24gWnQoZSl7aWYodHlwZW9mIGUhPVwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgc3RyaW5nXCIpO3JldHVybiBlLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoLy0vZyxcIlxcXFx4MmRcIil9ZnVuY3Rpb24gam8oZSx0KXtsZXQgcj1lLm1hdGNoKG5ldyBSZWdFeHAoYCgke1p0KHQpfSkrYCxcImdcIikpO3JldHVybiByPT09bnVsbD8wOnIucmVkdWNlKChuLG8pPT5NYXRoLm1heChuLG8ubGVuZ3RoL3QubGVuZ3RoKSwwKX12YXIgcnU9am87ZnVuY3Rpb24gVm8oZSx0KXtsZXQgcj1lLmxhc3RJbmRleE9mKGBcbmApO3JldHVybiByPT09LTE/MDpGZShlLnNsaWNlKHIrMSkubWF0Y2goL15bXFx0IF0qLylbMF0sdCl9dmFyIG51PVZvO2Z1bmN0aW9uICRvKGUsdCxyKXtmb3IobGV0IG49dDtuPHI7KytuKWlmKGUuY2hhckF0KG4pPT09YFxuYClyZXR1cm4hMDtyZXR1cm4hMX12YXIgdXU9JG87ZnVuY3Rpb24gTW8oZSx0LHI9e30pe3JldHVybiBOKGUsci5iYWNrd2FyZHM/dC0xOnQscikhPT10fXZhciBvdT1NbztmdW5jdGlvbiBXbyhlLHQpe2xldCByPVZlKGUsdCk7cmV0dXJuIHI9PT0hMT9cIlwiOmUuY2hhckF0KHIpfXZhciBpdT1XbztmdW5jdGlvbiBVbyhlLHQscil7bGV0IG49dD09PSdcIic/XCInXCI6J1wiJyx1PWVlKCExLGUsL1xcXFwoLil8KFtcIiddKS9ncywoaSxzLEQpPT5zPT09bj9zOkQ9PT10P1wiXFxcXFwiK0Q6RHx8KHImJi9eW15cXG5cXHJcIicwLTdcXFxcYmZucnQtdnhcXHUyMDI4XFx1MjAyOV0kLy50ZXN0KHMpP3M6XCJcXFxcXCIrcykpO3JldHVybiB0K3UrdH12YXIgc3U9VW87ZnVuY3Rpb24gem8oZSx0LHIpe3JldHVybiBWZShlLHIodCkpfWZ1bmN0aW9uIEdvKGUsdCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0yfHx0eXBlb2YgdD09XCJudW1iZXJcIj9WZShlLHQpOnpvKC4uLmFyZ3VtZW50cyl9ZnVuY3Rpb24gS28oZSx0LHIpe3JldHVybiBZZShlLHIodCkpfWZ1bmN0aW9uIEhvKGUsdCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0yfHx0eXBlb2YgdD09XCJudW1iZXJcIj9ZZShlLHQpOktvKC4uLmFyZ3VtZW50cyl9ZnVuY3Rpb24gcW8oZSx0LHIpe3JldHVybiBDdChlLHIodCkpfWZ1bmN0aW9uIEpvKGUsdCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0yfHx0eXBlb2YgdD09XCJudW1iZXJcIj9DdChlLHQpOnFvKC4uLmFyZ3VtZW50cyl9dmFyIGVyPXt9O1dlKGVyLHtidWlsZGVyczooKT0+WG8scHJpbnRlcjooKT0+Wm8sdXRpbHM6KCk9PlFvfSk7dmFyIFhvPXtqb2luOmtlLGxpbmU6S2Usc29mdGxpbmU6RXIsaGFyZGxpbmU6RyxsaXRlcmFsbGluZTpIZSxncm91cDpBdCxjb25kaXRpb25hbEdyb3VwOmZyLGZpbGw6R2UsbGluZVN1ZmZpeDpCZSxsaW5lU3VmZml4Qm91bmRhcnk6ZHIsY3Vyc29yOnhlLGJyZWFrUGFyZW50OmxlLGlmQnJlYWs6RnIsdHJpbTptcixpbmRlbnQ6aWUsaW5kZW50SWZCcmVhazpwcixhbGlnbjpvZSxhZGRBbGlnbm1lbnRUb0RvYzpxZSxtYXJrQXNSb290OmNyLGRlZGVudFRvUm9vdDphcixkZWRlbnQ6bHIsaGFyZGxpbmVXaXRob3V0QnJlYWtQYXJlbnQ6X2UsbGl0ZXJhbGxpbmVXaXRob3V0QnJlYWtQYXJlbnQ6QnQsbGFiZWw6Q3IsY29uY2F0OmU9PmV9LFpvPXtwcmludERvY1RvU3RyaW5nOmZlfSxRbz17d2lsbEJyZWFrOndyLHRyYXZlcnNlRG9jOkFlLGZpbmRJbkRvYzpKZSxtYXBEb2M6TmUscmVtb3ZlTGluZXM6TnIsc3RyaXBUcmFpbGluZ0hhcmRsaW5lOlhlLHJlcGxhY2VFbmRPZkxpbmU6VHIsY2FuQnJlYWs6U3J9O3ZhciBEdT1cIjMuMS4xXCI7ZnVuY3Rpb24gYWUoZSx0PTEpe3JldHVybiBhc3luYyguLi5yKT0+e2xldCBuPXJbdF0/P3t9LG89bi5wbHVnaW5zPz9bXTtyZXR1cm4gclt0XT17Li4ubixwbHVnaW5zOkFycmF5LmlzQXJyYXkobyk/bzpPYmplY3QudmFsdWVzKG8pfSxlKC4uLnIpfX12YXIgYXU9YWUoWHQpO2FzeW5jIGZ1bmN0aW9uIGN1KGUsdCl7bGV0e2Zvcm1hdHRlZDpyfT1hd2FpdCBhdShlLHsuLi50LGN1cnNvck9mZnNldDotMX0pO3JldHVybiByfWFzeW5jIGZ1bmN0aW9uIGVpKGUsdCl7cmV0dXJuIGF3YWl0IGN1KGUsdCk9PT1lfXZhciB0aT1hZShldCwwKSxyaT17cGFyc2U6YWUoWG4pLGZvcm1hdEFTVDphZShabiksZm9ybWF0RG9jOmFlKFFuKSxwcmludFRvRG9jOmFlKGV1KSxwcmludERvY1RvU3RyaW5nOmFlKHR1KX07dmFyIHFjPXRyO2V4cG9ydHtyaSBhcyBfX2RlYnVnLGVpIGFzIGNoZWNrLHFjIGFzIGRlZmF1bHQsZXIgYXMgZG9jLGN1IGFzIGZvcm1hdCxhdSBhcyBmb3JtYXRXaXRoQ3Vyc29yLHRpIGFzIGdldFN1cHBvcnRJbmZvLFF0IGFzIHV0aWwsRHUgYXMgdmVyc2lvbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcblxuaW1wb3J0IHtcbiAgQ3JlYXRlVGFzayxcbiAgc2V0VGFza1RpdGxlLFxuICBzZXRUYXNrRGVzY3JpcHRpb24sXG4gIHNldFRhc2tEdWVEYXRlLFxuICBzZXRUYXNrUHJpb3JpdHksXG4gIHNldFByb2plY3ROYW1lLFxufSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi91dGlsL2VsZW1lbnRDcmVhdG9yXCI7XG5cbmltcG9ydCB7IGFkZEl0ZW1zLCByZW1vdmVJdGVtcyB9IGZyb20gXCIuL3V0aWwvc2V0RnVuY3Rpb25zXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVRhc2tPYmplY3QsIGNyZWF0ZURlbGV0ZVRhc2tPYmplY3QgfSBmcm9tIFwiLi91dGlsL2NyZWF0ZU9iamVjdHNcIjtcblxuaW1wb3J0IHsgaG9tZXBhZ2VHZW5lcmF0b3IgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c05hdkVsZW1lbnRzIH0gZnJvbSBcIi4vdG9kb1Byb2plY3RcIjtcbmltcG9ydCByZW1vdmVXYXJuaW5nIGZyb20gXCIuL3V0aWwvcmVtb3ZlV2FybmluZ1wiO1xuaW1wb3J0IHsgY29udGVudEdlbmVyYXRvciwgY29udGVudFBhZ2VHZW5lcmF0b3IgfSBmcm9tIFwiLi9nZW5lcmF0ZUNvbnRlbnRcIjtcbmltcG9ydCBnZW5lcmF0ZVdhcm5pbmcgZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZVdhcm5pbmdcIjtcbmltcG9ydCB7IGdlbmVyYXRlRm9ybU9wdGlvbiB9IGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVGb3JtT3B0aW9uc1wiO1xuaW1wb3J0IHRvZ2dsZUNsYXNzZXMgZnJvbSBcIi4vdXRpbC90b2dnbGVDbGFzc2VzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUxhYmVsLCBnZW5lcmF0ZVByb2plY3QgfSBmcm9tIFwiLi91dGlsL2dlbmVyYXRlTmF2RWxlbWVudHNcIjtcbmltcG9ydCBkaXNwbGF5TmF2T3B0aW9uYWxzIGZyb20gXCIuL3V0aWwvZGlzcGxheU5hdk9wdGlvbmFsc1wiO1xuaW1wb3J0IHsgZWxlbWVudFJlc2V0LCBuYXZPcHRpb25SZXNldCB9IGZyb20gXCIuL3V0aWwvZWxlbWVudFJlc2V0XCI7XG5pbXBvcnQgZ2V0VGFza0VsZW1lbnRzIGZyb20gXCIuL3V0aWwvZ2V0VGFza0VsZW1ldHNcIjtcbmltcG9ydCBnZXRVc2VySW5wdXRzIGZyb20gXCIuL3V0aWwvdXNlcklucHV0c0dldHRlclwiO1xuaW1wb3J0IHtcbiAgY29sbGFwc2VCdG4sXG4gIGNyZWF0ZVByb2plY3QsXG4gIGRpc3BsYXlQcm9qZWN0UHJvbXB0LFxuICBjbG9zZVByb2plY3RQcm9tcHQsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IGRpc3BsYXlGb3JtT3B0aW9uYWxzIGZyb20gXCIuL3V0aWwvZGlzcGxheUZvcm1PcHRpb25hbHNcIjtcbmltcG9ydCBkaXNwbGF5RWxlbWVudHMgZnJvbSBcIi4vdXRpbC9kaXNwbGF5RWxlbWVudHNcIjtcbmltcG9ydCBzZXREZWZhdWx0UHJvamVjdE9wdGlvbiBmcm9tIFwiLi91dGlsL3NldERlZmF1bHRQcm9qZWN0T3B0aW9uXCI7XG5pbXBvcnQgXCIuL2lucHV0LmNzc1wiO1xuaW1wb3J0IHsgZG9jIH0gZnJvbSBcInByZXR0aWVyXCI7XG5pbXBvcnQgeyBhZGQsIHNldCwgc3ViIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgdGFza0dlbmVyYXRvciBmcm9tIFwiLi9nZW5lcmF0ZVRhc2tcIjtcbmltcG9ydCBkaXNwbGF5TmF2Rm9ybSBmcm9tIFwiLi91dGlsL2Rpc3BsYXlOYXZGb3JtXCI7XG5cbmNvbnN0IHRhc2tTZXQgPSBuZXcgU2V0KCk7XG5jb25zdCBjb21wbGV0ZWR0YXNrU2V0ID0gbmV3IFNldCgpO1xuY29uc3QgdGFnU2V0ID0gbmV3IFNldCgpO1xuY29uc3QgcHJpb3JpdHlTZXQgPSBuZXcgU2V0KCk7XG5jb25zdCBwcm9qZWN0TmFtZVNldCA9IG5ldyBTZXQoKTtcblxuYWRkSXRlbXMocHJpb3JpdHlTZXQsIFtcbiAgXCJTb21lIE90aGVyIERheVwiLFxuICBcIk5vdCBUb2RheVwiLFxuICBcIlRvZGF5XCIsXG4gIFwiSW4gYW4gSG91clwiLFxuICBcIkluIDUgTWludXRlc1wiLFxuICBcIlJpZ2h0IEFib3V0IE5vd1wiLFxuICBcIlNob3VsZCd2ZSBEb25lIFllc3RlcmRheVwiLFxuXSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGUpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5XCIpO1xuICBkaXNwbGF5RWxlbWVudHMoYm9keSwgaG9tZXBhZ2VHZW5lcmF0b3IoKSk7XG5cbiAgLy8gY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIpO1xuICBjb25zdCBuYXZBZGRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZTZWN0aW9uQ29udGFpbmVyQWRkQnRuXCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdENvbnRlbnRDb250YWluZXJcIixcbiAgKTtcbiAgY29uc3QgcHJvamVjdEZvcm1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0Rm9ybUlucHV0XCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RMaXN0Q29udGFpbmVyXCIpO1xuICBjb25zdCBsYWJlbExpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYWJlbHNDb250ZW50Q29udGFpbmVyXCIpO1xuICBjb25zdCB0b2RheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0Rm9ybVwiKTtcbiAgY29uc3QgcHJvamVjdEZvcm1FeHBhbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ0blwiKTtcbiAgY29uc3QgcHJvamVjdENvbGxhcHNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Q29sbGFwc2VCdG5cIik7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdE5hbWVJbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEFkZEJ0blwiKTtcbiAgY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENhbmNlbEJ0blwiKTtcblxuICBjb25zdCBsYWJlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZExhYmVsRm9ybVwiKTtcbiAgY29uc3QgbGFiZWxGb3JtRXhwYW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZExhYmVsQnRuXCIpO1xuICBjb25zdCBsYWJlbENvbGxhcHNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYWJlbENvbGxhcHNlQnRuXCIpO1xuICBjb25zdCBsYWJlbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYWJlbE5hbWVJbnB1dFwiKTtcbiAgY29uc3QgbGFiZWxBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVsQWRkQnRuXCIpO1xuICBjb25zdCBsYWJlbENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxDYW5jZWxCdG5cIik7XG5cbiAgY29uc3QgZGVsZXRlZFRhc2tXYXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGVkVGFza1dhcm5pbmdcIik7XG4gIGxldCBjdXJyZW50VGFiID0gXCJUb2RheVwiLFxuICAgIHdhcm5pbmcsXG4gICAgdGFza0NvbnRhaW5lcjtcblxuICBwcm9qZWN0Rm9ybUV4cGFuZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRvZ2dsZUNsYXNzZXMoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm5hdlNlY3Rpb25Db250YWluZXJCdG5TdmdcIiksXG4gICAgICBcInJvdGF0ZVN2Z0J0blwiLFxuICAgICk7XG4gICAgdG9nZ2xlQ2xhc3Nlcyhwcm9qZWN0Rm9ybSwgXCJkaXNwbGF5UHJvamVjdEZvcm1cIik7XG4gICAgWy4uLnByb2plY3RGb3JtLmNoaWxkcmVuXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgdG9nZ2xlQ2xhc3NlcyhlbCwgW1wiaGlkZVZpc2liaWxpdHlcIl0pO1xuICAgIH0pO1xuICB9KTtcblxuICBsYWJlbEZvcm1FeHBhbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlQ2xhc3NlcyhcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubmF2U2VjdGlvbkNvbnRhaW5lckJ0blN2Z1wiKSxcbiAgICAgIFwicm90YXRlU3ZnQnRuXCIsXG4gICAgKTtcbiAgICB0b2dnbGVDbGFzc2VzKGxhYmVsRm9ybSwgXCJkaXNwbGF5UHJvamVjdEZvcm1cIik7XG4gICAgWy4uLmxhYmVsRm9ybS5jaGlsZHJlbl0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRvZ2dsZUNsYXNzZXMoZWwsIFtcImhpZGVWaXNpYmlsaXR5XCJdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcHJvamVjdENvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzZXMocHJvamVjdExpc3RDb250ZW50LCBcImhpZGVOYXZTZWN0aW9uXCIpO1xuICAgIHRvZ2dsZUNsYXNzZXMocHJvamVjdENvbGxhcHNlQnRuLCBcImNvbGxhcHNlQnRuUm90YXRlXCIpO1xuICB9KTtcblxuICBsYWJlbENvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUNsYXNzZXMobGFiZWxMaXN0Q29udGVudCwgXCJoaWRlTmF2U2VjdGlvblwiKTtcbiAgICB0b2dnbGVDbGFzc2VzKGxhYmVsQ29sbGFwc2VCdG4sIFwiY29sbGFwc2VCdG5Sb3RhdGVcIik7XG4gIH0pO1xuXG4gIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybU9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG5cbiAgICBhZGRJdGVtcyhwcm9qZWN0TmFtZVNldCwgW1xuICAgICAgZ2V0VXNlcklucHV0cyhmb3JtRGF0YSwgW1wicHJvamVjdE5hbWVcIl0pW1wicHJvamVjdE5hbWVcIl0sXG4gICAgXSk7XG5cbiAgICBkaXNwbGF5TmF2T3B0aW9uYWxzKFxuICAgICAgcHJvamVjdE5hbWVTZXQsXG4gICAgICBwcm9qZWN0TGlzdENvbnRlbnQsXG4gICAgICBcInByb2plY3RMaXN0Q29udGFpbmVyXCIsXG4gICAgICBnZW5lcmF0ZVByb2plY3QsXG4gICAgKTtcbiAgICBjb25zdCBkZWZhdWx0RWxlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICB2YWx1ZTogXCJ0b2RheVwiLFxuICAgIH07XG4gICAgZGlzcGxheUZvcm1PcHRpb25hbHMoXG4gICAgICBwcm9qZWN0Rm9ybU9wdGlvbixcbiAgICAgIFwiZm9ybS1kZXRhaWxzLXRhZ3NcIixcbiAgICAgIFwiVG9kYXlcIixcbiAgICAgIGRlZmF1bHRFbGVtZW50QXR0cmlidXRlcyxcbiAgICAgIHByb2plY3ROYW1lU2V0LFxuICAgICk7XG4gICAgc2V0RGVmYXVsdFByb2plY3RPcHRpb24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0XCIpLCBjdXJyZW50VGFiKTtcbiAgfSk7XG5cbiAgbGFiZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YWdGb3JtT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWdcIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsYWJlbEZvcm0ucmVzZXQoKTtcblxuICAgIGFkZEl0ZW1zKHRhZ1NldCwgW2dldFVzZXJJbnB1dHMoZm9ybURhdGEsIFtgbGFiZWxOYW1lYF0pW2BsYWJlbE5hbWVgXV0pO1xuXG4gICAgZGlzcGxheU5hdk9wdGlvbmFscyhcbiAgICAgIHRhZ1NldCxcbiAgICAgIGxhYmVsTGlzdENvbnRlbnQsXG4gICAgICBcImxhYmVsc0NvbnRlbnRDb250YWluZXJcIixcbiAgICAgIGdlbmVyYXRlTGFiZWwsXG4gICAgKTtcbiAgICBjb25zdCBkZWZhdWx0RWxlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICB2YWx1ZTogXCJuby12YWx1ZVwiLFxuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9O1xuICAgIGRpc3BsYXlGb3JtT3B0aW9uYWxzKFxuICAgICAgdGFnRm9ybU9wdGlvbixcbiAgICAgIFwiZm9ybS1kZXRhaWxzLXRhZ3NcIixcbiAgICAgIFwiVGFnc1wiLFxuICAgICAgZGVmYXVsdEVsZW1lbnRBdHRyaWJ1dGVzLFxuICAgICAgdGFnU2V0LFxuICAgICk7XG4gIH0pO1xuXG4gIGRpc3BsYXlQYWdlKGN1cnJlbnRUYWIsIGNvbnRlbnQsIHRhc2tTZXQpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIubmF2QnRuXCIpKSB7XG4gICAgICBjdXJyZW50VGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICBkaXNwbGF5UGFnZShjdXJyZW50VGFiLCBjb250ZW50LCB0YXNrU2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5jb250ZW50LWZvcm1cIikpIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtZm9ybVwiKTtcbiAgICAgIHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dHMgPSBnZXRVc2VySW5wdXRzKGZvcm1EYXRhLCBbXG4gICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIFwicHJpb3JpdHlcIixcbiAgICAgICAgICBcInRhZ1wiLFxuICAgICAgICAgIFwicHJvamVjdFwiLFxuICAgICAgICBdKTtcbiAgICAgICAgaWYgKHVzZXJJbnB1dHMgIT0gLTEpIHtcbiAgICAgICAgICBhZGRJdGVtcyh0YXNrU2V0LCBbY3JlYXRlVGFza09iamVjdCh1c2VySW5wdXRzKV0pO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGFzayA9IGdldFRhc2tFbGVtZW50cyh0YXNrU2V0LCBjdXJyZW50VGFiKTtcbiAgICAgICAgICBlbGVtZW50UmVzZXQodGFza0NvbnRhaW5lciwgW1widGFza3NcIl0pO1xuICAgICAgICAgIGRpc3BsYXlFbGVtZW50cyh0YXNrQ29udGFpbmVyLCBjdXJyZW50UHJvamVjdFRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmNvbXBsZXRlTWFya2VyXCIpKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZU1hcmtlciA9IGUudGFyZ2V0O1xuICAgICAgdGFza1NldC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIikgPT0gdGFzay5lbGVtZW50WzBdKSB7XG4gICAgICAgICAgY29tcGxldGVNYXJrZXIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlTWFya2VyQ2hlY2tlZFwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRhc2suZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKFwiaGlkZVRhc2tcIik7XG4gICAgICAgICAgICBjb21wbGV0ZU1hcmtlci5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVNYXJrZXJDaGVja2VkXCIpO1xuICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgd2FybmluZyA9IGdlbmVyYXRlV2FybmluZygpO1xuICAgICAgICAgIGNvbnN0IHdhcm5pbmdCdG4gPSB3YXJuaW5nWzBdLnF1ZXJ5U2VsZWN0b3IoXCIudW5kb1dhcm5pbmdCdG5cIik7XG4gICAgICAgICAgY29uc3QgY2xlYXJUYXNrSUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUl0ZW1zKHRhc2tTZXQsIFt0YXNrXSk7XG4gICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgYWRkSXRlbXMoY29tcGxldGVkdGFza1NldCwgW1xuICAgICAgICAgICAgY3JlYXRlRGVsZXRlVGFza09iamVjdChbd2FybmluZ0J0biwgdGFzaywgY2xlYXJUYXNrSURdKSxcbiAgICAgICAgICBdKTtcblxuICAgICAgICAgIGRpc3BsYXlFbGVtZW50cyhkZWxldGVkVGFza1dhcm5pbmcsIHdhcm5pbmcpO1xuICAgICAgICAgIHJlbW92ZVdhcm5pbmcod2FybmluZ1swXSwgNTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnVuZG9XYXJuaW5nQnRuXCIpKSB7XG4gICAgICBjb25zdCB1bmRvRG9tQnRuID0gZS50YXJnZXQuY2xvc2VzdChcIi51bmRvV2FybmluZ0J0blwiKTtcbiAgICAgIFsuLi5jb21wbGV0ZWR0YXNrU2V0XS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnVuZG9CdG4gPT0gdW5kb0RvbUJ0bikge1xuICAgICAgICAgIHRhc2sudGFza0VsLmVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVUYXNrXCIpO1xuICAgICAgICAgIHRhc2sudW5kb0J0bi5jbG9zZXN0KFwiLndhcm5pbmdcIikuY2xhc3NMaXN0LmFkZChcInJlbW92ZVdhcm5pbmdcIik7XG4gICAgICAgICAgcmVtb3ZlSXRlbXMoY29tcGxldGVkdGFza1NldCwgW3Rhc2tdKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGFzay5jbGVhclRhc2tJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tEZWxldGVcIikpIHtcbiAgICAgIGNvbnN0IHRhc2tET00gPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIik7XG4gICAgICBbLi4udGFza1NldF0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5lbGVtZW50WzBdID09IHRhc2tET00pIHtcbiAgICAgICAgICByZW1vdmVJdGVtcyh0YXNrU2V0LCBbdGFza10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnRSZXNldCh0YXNrQ29udGFpbmVyLCBbXCJ0YXNrc1wiXSk7XG4gICAgICBkaXNwbGF5RWxlbWVudHModGFza0NvbnRhaW5lciwgZ2V0VGFza0VsZW1lbnRzKHRhc2tTZXQsIGN1cnJlbnRUYWIpKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5sYWJlbERlbGV0ZUJ0blwiKSkge1xuICAgICAgY29uc3QgdGFnQ29udGVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIubGFiZWxcIikudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB0YWdGb3JtT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWdcIik7XG4gICAgICByZW1vdmVJdGVtcyh0YWdTZXQsIFt0YWdDb250ZW50XSk7XG4gICAgICBbLi4udGFza1NldF0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay50YWcgPT0gdGFnQ29udGVudCkge1xuICAgICAgICAgIHRhc2sudGFnID0gbnVsbDtcbiAgICAgICAgICB0YXNrLmVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcihcIi50YXNrVGFnXCIpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRpc3BsYXlOYXZPcHRpb25hbHMoXG4gICAgICAgIHRhZ1NldCxcbiAgICAgICAgbGFiZWxMaXN0Q29udGVudCxcbiAgICAgICAgXCJsYWJlbHNDb250ZW50Q29udGFpbmVyXCIsXG4gICAgICAgIGdlbmVyYXRlTGFiZWwsXG4gICAgICApO1xuICAgICAgY29uc3QgZGVmYXVsdEVsZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB2YWx1ZTogXCJuby12YWx1ZVwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgICAgZGlzcGxheUZvcm1PcHRpb25hbHMoXG4gICAgICAgIHRhZ0Zvcm1PcHRpb24sXG4gICAgICAgIFwiZm9ybS1kZXRhaWxzLXRhZ3NcIixcbiAgICAgICAgXCJUYWdzXCIsXG4gICAgICAgIGRlZmF1bHRFbGVtZW50QXR0cmlidXRlcyxcbiAgICAgICAgdGFnU2V0LFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVRhYihjdXJyZW50VGFiLCBuYXZCdG4pIHtcbiAgbmF2QnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4udGV4dENvbnRlbnQgPT0gY3VycmVudFRhYikge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVUYWJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlVGFiXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlKGN1cnJlbnRUYWIsIGNvbnRlbnQsIHRhc2tTZXQpIHtcbiAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZCdG5cIik7XG4gIGNoYW5nZUFjdGl2ZVRhYihjdXJyZW50VGFiLCBuYXZCdG4pO1xuICBlbGVtZW50UmVzZXQoY29udGVudCwgW1wiY29udGVudFwiXSk7XG4gIGNvbnN0IGNvbnRlbnRQYWdlID0gY29udGVudFBhZ2VHZW5lcmF0b3IoXG4gICAgY3VycmVudFRhYixcbiAgICBwcm9qZWN0TmFtZVNldCxcbiAgICB0YWdTZXQsXG4gICAgcHJpb3JpdHlTZXQsXG4gICk7XG4gIGRpc3BsYXlFbGVtZW50cyhjb250ZW50LCBjb250ZW50UGFnZSk7XG4gIHNldERlZmF1bHRQcm9qZWN0T3B0aW9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKSwgY3VycmVudFRhYik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICBkaXNwbGF5RWxlbWVudHModGFza0NvbnRhaW5lciwgZ2V0VGFza0VsZW1lbnRzKHRhc2tTZXQsIGN1cnJlbnRUYWIpKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbCIsImNvbGxhcHNlQnRuIiwiYnRuIiwibm9kZU5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNyZWF0ZVByb2plY3QiLCJkaXNwbGF5UHJvamVjdFByb21wdCIsImFkZCIsImNsb3NlUHJvamVjdFByb21wdCIsInJlc2V0IiwicmVtb3ZlIiwiZ2VuZXJhdGVGb3JtT3B0aW9uIiwiY29udGVudFBhZ2VHZW5lcmF0b3IiLCJjdXJyZW50VGFiIiwicHJvamVjdHMiLCJsYWJlbHMiLCJwcmlvcml0aWVzIiwiY29udGVudEhlYWRlciIsImNvbnRlbnRIZWFkZXJIZWFkaW5nIiwiY29uY2F0IiwidGFza3MiLCJjb250ZW50Q29udGFpbmVyIiwiYXBwZW5kIiwiZm9ybUdlbmVyYXRvciIsImNvbnRlbnRGb3JtIiwidG9kb0RldGFpbHMiLCJ0b2RvRGV0YWlsc05hbWUiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInRvZG9EZXRhaWxzRGVzY3JpcHRpb24iLCJmb3JtT3B0aW9uYWxzRGl2IiwidG9kb0RldGFpbHNEYXRlIiwidG9kb0RldGFpbHNQcmlvcml0eSIsInZhbHVlIiwiZGlzYWJsZWQiLCJzZWxlY3RlZCIsInRvZG9EZXRhaWxzVGFncyIsImZvcm1TdWJtaXQiLCJ0b2RvRGV0YWlsc1Byb2plY3QiLCJmb3JtQnV0dG9uQ29udGFpbmVyIiwidGFza0dlbmVyYXRvciIsInVzZXJJbnB1dCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRhc2siLCJjb21wbGV0ZU1hcmtlckNvbnRhaW5lciIsImNvbXBsZXRlTWFya2VyIiwidGFza0NvbnRlbnQiLCJ0YXNrSGVhZGluZyIsImRlc2NyaXB0aW9uIiwidGFza0Rlc2NyaXB0aW9uIiwib3RoZXJUYWdzIiwiZGF0ZSIsInRhc2tEYXRlIiwicHJpb3JpdHkiLCJ0YXNrUHJpb3JpdHkiLCJ0YWciLCJ0YXNrVGFnIiwidGFza09wdGlvbnMiLCJ0YXNrRGVsZXRlQnRuIiwiZGl2aWRlciIsImNyZWF0ZVNWRyIsImhvbWVwYWdlR2VuZXJhdG9yIiwibmF2IiwidXNlckljb24iLCJ1c2VySWNvblN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJkIiwibmF2U2VjdGlvbkNvbnRhaW5lclRvZG8iLCJuYXZCdG5Ub2RheSIsIm5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyIsInByb2plY3RzQ29udGFpbmVySGVhZGVyIiwicHJvamVjdHNDb250YWluZXJIZWFkZXJIZWFkaW5nIiwicHJvamVjdHNDb250YWluZXJIZWFkZXJBZGRCdG4iLCJwcm9qZWN0c0NvbnRhaW5lckhlYWRlckNvbGxhcHNlQnRuIiwicHJvamVjdHNDb250ZW50IiwiY3JlYXRlTmF2SW5wdXRzIiwibmF2U2VjdGlvbkNvbnRhaW5lcmxhYmVscyIsInByb2plY3RMaXN0Q29udGFpbmVyIiwibGFiZWxzQ29udGFpbmVySGVhZGVyIiwibGFiZWxzQ29udGFpbmVySGVhZGVySGVhZGluZyIsImxhYmVsc0NvbnRhaW5lckhlYWRlckFkZEJ0biIsImxhYmVsc0NvbnRhaW5lckhlYWRlckNvbGxhcHNlQnRuIiwibGFiZWxzQ29udGVudCIsImxhYmVsc0NvbnRhaW5lciIsImRlbGV0ZVRhc2tXYXJuaW5nIiwiY29udGVudCIsImZvcm1DbGFzcyIsImlucHV0Q2xhc3MiLCJpbnB1dFBsYWNlSG9sZGVyIiwiaW5wdXROYW1lIiwiYnRuQ2xhc3MiLCJhZGROYXZGb3JtIiwiYWRkTmF2SW5wdXQiLCJwcm9qZWN0Rm9ybUFkZEJ0biIsInByb2plY3RGb3JtQ2FuY2VsQnRuIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImlzQXJyYXkiLCJsZW4iLCJpIiwiYXJyMiIsIkNyZWF0ZVRhc2siLCJwcm9wZXJpdGllcyIsIm1ldGhvZHMiLCJzdGF0ZSIsIm1vZGlmeUF0dHJpYnV0ZXMiLCJhc3NpZ24iLCJhcHBseSIsIm1hcCIsIm1ldGhvZCIsInNldFRhc2tUaXRsZSIsInRpdGxlIiwic2V0VGFza0Rlc2NyaXB0aW9uIiwic2V0VGFza0R1ZURhdGUiLCJkdWVEYXRlIiwic2V0VGFza1ByaW9yaXR5Iiwic2V0VGFza0xhYmVsIiwibGFiZWwiLCJzZXRQcm9qZWN0TmFtZSIsInByb2plY3ROYW1lIiwiY3JlYXRlUHJvamVjdHNOYXZFbGVtZW50cyIsInByb2plY3RMaXN0IiwicHJvamVjdEVsZW1lbnRzIiwiZm9yRWFjaCIsInByb2plY3QiLCJwdXNoIiwiX3R5cGVvZiIsIm93bktleXMiLCJyIiwidCIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJfdG9Qcm9wZXJ0eUtleSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJOdW1iZXIiLCJjcmVhdGVUYXNrT2JqZWN0IiwiZWxlbWVudCIsImNyZWF0ZURlbGV0ZVRhc2tPYmplY3QiLCJ2YWx1ZXMiLCJ1bmRvQnRuIiwidGFza0VsIiwiY2xlYXJUYXNrSWQiLCJkaXNwbGF5RWxlbWVudHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiZWxlbWVudFJlc2V0IiwiZGlzcGxheUZvcm1PcHRpb25hbHMiLCJwYXJlbnRFbCIsInBhcmVudEVsQ2xhc3MiLCJmaXJzdE9wdGlvbiIsImZpcnN0T3B0aW9uQXR0cmlidXRlcyIsInNldCIsImRpc3BsYXlOYXZGb3JtIiwiZXhwYW5kQnRuIiwiZm9ybSIsImdldFVzZXJJbnB1dHMiLCJhZGRJdGVtcyIsImRpc3BsYXlOYXZPcHRpb25hbHMiLCJnZW5lcmF0b3JGbiIsIml0ZW0iLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJsIiwidSIsImEiLCJmIiwibmV4dCIsImRvbmUiLCJfZWwkY2xhc3NMaXN0IiwiY2xhc3NlcyIsImF0dHJpYnV0ZXMiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwic2V0QXR0cmlidXRlIiwiRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW5uZXJUZXh0IiwibmF2T3B0aW9uUmVzZXQiLCJvcHRpb25zTGlzdCIsImZpcnN0Q2hpbGQiLCJmaXJzdENoaWxkQXR0cmlidXRlIiwib3B0aW9uIiwidG9Mb3dlckNhc2UiLCJnZW5lcmF0ZVByb2plY3QiLCJkaXYiLCJwcm9qZWN0TmFtZUJ0biIsImdlbmVyYXRlTGFiZWwiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVFbCIsImxhYmVsRGVsZXRlQnRuU1ZHIiwiY3JlYXRlQ2lyY2xlU1ZHIiwiZ2VuZXJhdGVXYXJuaW5nIiwid2FybmluZyIsInRpbWVyIiwiY3giLCJjeSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRvV2FybmluZ0J0biIsInNldFRpbWVvdXQiLCJnZXRUYXNrRWxlbWVudHMiLCJ0YXNrQXJyYXkiLCJyZXN1bHQiLCJyZW1vdmVXYXJuaW5nIiwidGltZSIsInNldERlZmF1bHRQcm9qZWN0T3B0aW9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0TmFtZSIsIlNldCIsIml0ZW1zIiwicmVtb3ZlSXRlbXMiLCJfaWNvblN2ZyRjbGFzc0xpc3QiLCJzdmdBdHRyaWJ1dGVzIiwicGF0aEF0dHJpYnV0ZXMiLCJpY29uU3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiaWNvblBhdGgiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIl9pY29uU3ZnJGNsYXNzTGlzdDIiLCJfaTMiLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsIl9pNCIsIl9PYmplY3QkZW50cmllczQiLCJfT2JqZWN0JGVudHJpZXM0JF9pIiwidG9nZ2xlQ2xhc3NlcyIsInRvZ2dsZUNsYXNzIiwiZm9ybURhdGEiLCJpbnB1dHMiLCJyZXR1cm5PYmoiLCJnZXQiLCJpbnB1dCIsImNvbnRlbnRHZW5lcmF0b3IiLCJkb2MiLCJzdWIiLCJ0YXNrU2V0IiwiY29tcGxldGVkdGFza1NldCIsInRhZ1NldCIsInByaW9yaXR5U2V0IiwicHJvamVjdE5hbWVTZXQiLCJ3aW5kb3ciLCJib2R5IiwicXVlcnlTZWxlY3RvciIsIm5hdkFkZEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJvamVjdENvbnRlbnRDb250YWluZXIiLCJwcm9qZWN0Rm9ybVRleHQiLCJwcm9qZWN0TGlzdENvbnRlbnQiLCJsYWJlbExpc3RDb250ZW50IiwidG9kYXlQYWdlIiwicHJvamVjdEZvcm0iLCJwcm9qZWN0Rm9ybUV4cGFuZGVyIiwicHJvamVjdENvbGxhcHNlQnRuIiwicHJvamVjdElucHV0IiwicHJvamVjdEFkZEJ0biIsInByb2plY3RDYW5jZWxCdG4iLCJsYWJlbEZvcm0iLCJsYWJlbEZvcm1FeHBhbmRlciIsImxhYmVsQ29sbGFwc2VCdG4iLCJsYWJlbElucHV0IiwibGFiZWxBZGRCdG4iLCJsYWJlbENhbmNlbEJ0biIsImRlbGV0ZWRUYXNrV2FybmluZyIsInRhc2tDb250YWluZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJwcm9qZWN0Rm9ybU9wdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiRm9ybURhdGEiLCJkZWZhdWx0RWxlbWVudEF0dHJpYnV0ZXMiLCJ0YWdGb3JtT3B0aW9uIiwiZGlzcGxheVBhZ2UiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInVzZXJJbnB1dHMiLCJjdXJyZW50UHJvamVjdFRhc2siLCJ3YXJuaW5nQnRuIiwiY2xlYXJUYXNrSUQiLCJ1bmRvRG9tQnRuIiwiY2xlYXJUaW1lb3V0IiwidGFza0RPTSIsInRhZ0NvbnRlbnQiLCJjaGFuZ2VBY3RpdmVUYWIiLCJuYXZCdG4iLCJjb250ZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=