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
  var labelsContainerHeaderHeading = (0,_util_elementCreator__WEBPACK_IMPORTED_MODULE_1__.createEl)("h2", ["navSectionContainerHeading"], labelsContainerHeader, "Tags");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDakMsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxZQUFZLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxNQUFNLEtBQUssV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sV0FBVyxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLGFBQWEsTUFBTSxPQUFPLE1BQU0sV0FBVyxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFN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QUFDO0FBRUYsU0FBUzhDLGVBQWVBLENBQUNuVSxVQUFVLEVBQUVvVSxNQUFNLEVBQUU7RUFDM0NBLE1BQU0sQ0FBQzFMLE9BQU8sQ0FBQyxVQUFDeEosR0FBRyxFQUFLO0lBQ3RCLElBQUlBLEdBQUcsQ0FBQzROLFdBQVcsSUFBSTlNLFVBQVUsRUFBRTtNQUNqQ2QsR0FBRyxDQUFDSSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQyxNQUFNO01BQ0xSLEdBQUcsQ0FBQ0ksU0FBUyxDQUFDTyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ25DO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTMlQsV0FBV0EsQ0FBQ3hULFVBQVUsRUFBRStFLE9BQU8sRUFBRW9NLE9BQU8sRUFBRTtFQUNqRCxJQUFNaUQsTUFBTSxHQUFHeEgsUUFBUSxDQUFDZ0YsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0VBQ25EdUMsZUFBZSxDQUFDblUsVUFBVSxFQUFFb1UsTUFBTSxDQUFDO0VBQ25DckosaUVBQVksQ0FBQ2hHLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQ2xDLElBQU1zUCxXQUFXLEdBQUd0VSxzRUFBb0IsQ0FDdENDLFVBQVUsRUFDVnVSLGNBQWMsRUFDZEYsTUFBTSxFQUNOQyxXQUNGLENBQUM7RUFDRDNHLGtFQUFlLENBQUM1RixPQUFPLEVBQUVzUCxXQUFXLENBQUM7RUFDckNsRiwwRUFBdUIsQ0FBQ3ZDLFFBQVEsQ0FBQzhFLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTFSLFVBQVUsQ0FBQztFQUN2RSxJQUFNK1MsYUFBYSxHQUFHbkcsUUFBUSxDQUFDOEUsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUN0RC9HLGtFQUFlLENBQUNvSSxhQUFhLEVBQUVqRSxpRUFBZSxDQUFDcUMsT0FBTyxFQUFFblIsVUFBVSxDQUFDLENBQUM7QUFDdEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZ2VuZXJhdGVDb250ZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvZ2VuZXJhdGVUYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy90b2RvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvY3JlYXRlT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZGlzcGxheUVsZW1lbnRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9kaXNwbGF5Rm9ybU9wdGlvbmFscy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZGlzcGxheU5hdkZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2Rpc3BsYXlOYXZPcHRpb25hbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2VsZW1lbnRDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9lbGVtZW50UmVzZXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlRm9ybU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlTmF2RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL2dlbmVyYXRlV2FybmluZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vc3JjL3V0aWwvZ2V0VGFza0VsZW1ldHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3JlbW92ZVdhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3NldERlZmF1bHRQcm9qZWN0T3B0aW9uLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvdXRpbC9zZXRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3N2Z0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3RvZ2dsZUNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy91dGlsL3VzZXJJbnB1dHNHZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL3NyYy9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5wdXQuY3NzP2ZjYzIiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3N0YW5kYWxvbmUubWpzIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VCdG4oYnRuKSB7XG4gIGlmIChidG4ubm9kZU5hbWUgIT0gXCJCVVRUT05cIikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZUJ0blJvdGF0ZVwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICByZXR1cm4gY3JlYXRlRWwoXCJidXR0b25cIiwgW1wibmF2QnRuXCJdLCBcIlwiLCBcIk15IFByb2plY3RcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdFByb21wdChlKSB7XG4gIGUuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlQcm9qZWN0Rm9ybVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdFByb21wdChlKSB7XG4gIGUucmVzZXQoKTtcbiAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVByb2plY3RGb3JtXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVGb3JtT3B0aW9uIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZUZvcm1PcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50UGFnZUdlbmVyYXRvcihjdXJyZW50VGFiLCBwcm9qZWN0cywgbGFiZWxzLCBwcmlvcml0aWVzKSB7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBjcmVhdGVFbChcImhlYWRlclwiLCBbXCJjb250ZW50LWhlYWRlclwiXSk7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXJIZWFkaW5nID0gY3JlYXRlRWwoXG4gICAgXCJoMVwiLFxuICAgIFtcImNvbnRlbnQtaGVhZGVyLWhlYWRpbmdcIl0sXG4gICAgY29udGVudEhlYWRlcixcbiAgICBgJHtjdXJyZW50VGFifWAsXG4gICk7XG5cbiAgY29uc3QgdGFza3MgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrc1wiXSk7XG5cbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUVsKFwic2VjdGlvblwiLCBbXCJjb250ZW50Q29udGFpbmVyXCJdKTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChcbiAgICBmb3JtR2VuZXJhdG9yKHByb2plY3RzLCBsYWJlbHMsIHByaW9yaXRpZXMsIGN1cnJlbnRUYWIpLFxuICApO1xuXG4gIHJldHVybiBbY29udGVudEhlYWRlciwgdGFza3MsIGNvbnRlbnRDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiBmb3JtR2VuZXJhdG9yKHByb2plY3RzLCBsYWJlbHMsIHByaW9yaXRpZXMsIGN1cnJlbnRUYWIpIHtcbiAgY29uc3QgY29udGVudEZvcm0gPSBjcmVhdGVFbChcImZvcm1cIiwgW1wiY29udGVudC1mb3JtXCJdKTtcbiAgY29uc3QgdG9kb0RldGFpbHMgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0b2RvLWRldGFpbHNcIl0sIGNvbnRlbnRGb3JtKTtcbiAgY29uc3QgdG9kb0RldGFpbHNOYW1lID0gY3JlYXRlRWwoXG4gICAgXCJpbnB1dFwiLFxuICAgIFtcInRvZG8tZGV0YWlscy1uYW1lXCJdLFxuICAgIHRvZG9EZXRhaWxzLFxuICAgIFwiXCIsXG4gICAge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIGlkOiBcIm5hbWVcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlRhc2sgbmFtZVwiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgdG9kb0RldGFpbHNEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsKFxuICAgIFwiaW5wdXRcIixcbiAgICBbXCJ0b2RvLWRldGFpbHMtZGVzY3JpcHRpb25cIl0sXG4gICAgdG9kb0RldGFpbHMsXG4gICAgXCJcIixcbiAgICB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGlkOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBmb3JtT3B0aW9uYWxzRGl2ID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiZm9ybS1vcHRpb25hbHNcIl0sIHRvZG9EZXRhaWxzKTtcbiAgY29uc3QgdG9kb0RldGFpbHNEYXRlID0gY3JlYXRlRWwoXG4gICAgXCJpbnB1dFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcImRhdGVcIiwgaWQ6IFwiZGF0ZVwiLCBwbGFjZWhvbGRlcjogXCJUb2RheVwiIH0sXG4gICk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzUHJpb3JpdHkgPSBjcmVhdGVFbChcbiAgICBcInNlbGVjdFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7IG5hbWU6IFwicHJpb3JpdHlcIiwgaWQ6IFwicHJpb3JpdHlcIiB9LFxuICApO1xuXG4gIGdlbmVyYXRlRm9ybU9wdGlvbihwcmlvcml0aWVzLCB0b2RvRGV0YWlsc1ByaW9yaXR5LCBcIlByaW9yaXR5XCIsIHtcbiAgICB2YWx1ZTogXCJuby12YWx1ZVwiLFxuICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIHNlbGVjdGVkOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCB0b2RvRGV0YWlsc1RhZ3MgPSBjcmVhdGVFbChcbiAgICBcInNlbGVjdFwiLFxuICAgIFtcImZvcm0tZGV0YWlscy10YWdzXCJdLFxuICAgIGZvcm1PcHRpb25hbHNEaXYsXG4gICAgXCJcIixcbiAgICB7XG4gICAgICBuYW1lOiBcInRhZ1wiLFxuICAgICAgaWQ6IFwidGFnXCIsXG4gICAgfSxcbiAgKTtcblxuICBnZW5lcmF0ZUZvcm1PcHRpb24obGFiZWxzLCB0b2RvRGV0YWlsc1RhZ3MsIFwiVGFnc1wiLCB7XG4gICAgdmFsdWU6IFwibm8tdmFsdWVcIixcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcImZvcm0tc3VibWl0XCJdLCBjb250ZW50Rm9ybSk7XG4gIGNvbnN0IHRvZG9EZXRhaWxzUHJvamVjdCA9IGNyZWF0ZUVsKFxuICAgIFwic2VsZWN0XCIsXG4gICAgW1wiZm9ybS1kZXRhaWxzLXRhZ3NcIl0sXG4gICAgZm9ybVN1Ym1pdCxcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIG5hbWU6IFwicHJvamVjdFwiLFxuICAgICAgaWQ6IFwicHJvamVjdFwiLFxuICAgIH0sXG4gICk7XG4gIGdlbmVyYXRlRm9ybU9wdGlvbihwcm9qZWN0cywgdG9kb0RldGFpbHNQcm9qZWN0LCBcIlRvZGF5XCIsIHtcbiAgICB2YWx1ZTogXCJ0b2RheVwiLFxuICB9KTtcbiAgY29uc3QgZm9ybUJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wiZm9ybS1idXR0b24tY29udGFpbmVyXCJdLFxuICAgIGZvcm1TdWJtaXQsXG4gICk7XG5cbiAgY3JlYXRlRWwoXCJidXR0b25cIiwgW1widG9kby1mb3JtLWJ0bnNcIl0sIGZvcm1CdXR0b25Db250YWluZXIsIFwiQ2xlYXJcIiwge1xuICAgIHR5cGU6IFwicmVzZXRcIixcbiAgfSk7XG4gIGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1widG9kby1mb3JtLWJ0bnNcIiwgXCJhZGRUYXNrQnRuXCJdLFxuICAgIGZvcm1CdXR0b25Db250YWluZXIsXG4gICAgXCJBZGQgVGFza1wiLFxuICAgIHtcbiAgICAgIC8vIHR5cGU6IFwic3VibWl0XCIsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gY29udGVudEZvcm07XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3V0aWwvZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0dlbmVyYXRvcih1c2VySW5wdXQgPSB7fSkge1xuICBjb25zdCB0YXNrID0gY3JlYXRlRWwoXCJkaXZcIiwgW1widGFza1wiXSk7XG5cbiAgY29uc3QgY29tcGxldGVNYXJrZXJDb250YWluZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcImNvbXBsZXRlTWFya2VyQ29udGFpbmVuclwiXSxcbiAgICB0YXNrLFxuICApO1xuICBjb25zdCBjb21wbGV0ZU1hcmtlciA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wiY29tcGxldGVNYXJrZXJcIl0sXG4gICAgY29tcGxldGVNYXJrZXJDb250YWluZXIsXG4gICk7XG5cbiAgY29uc3QgdGFza0NvbnRlbnQgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrQ29udGVudFwiXSwgdGFzayk7XG5cbiAgaWYgKHVzZXJJbnB1dC5uYW1lLmxlbmd0aCAhPSAwKSB7XG4gICAgY29uc3QgdGFza0hlYWRpbmcgPSBjcmVhdGVFbChcbiAgICAgIFwiaDJcIixcbiAgICAgIFtcInRhc2tIZWFkaW5nXCJdLFxuICAgICAgdGFza0NvbnRlbnQsXG4gICAgICBgJHt1c2VySW5wdXQubmFtZX1gLFxuICAgICk7XG4gIH1cblxuICBpZiAodXNlcklucHV0LmRlc2NyaXB0aW9uLmxlbmd0aCAhPSAwKSB7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlRWwoXG4gICAgICBcInBcIixcbiAgICAgIFtcInRhc2tEZXNjcmlwdGlvblwiXSxcbiAgICAgIHRhc2tDb250ZW50LFxuICAgICAgYCR7dXNlcklucHV0LmRlc2NyaXB0aW9ufWAsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG90aGVyVGFncyA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcIm90aGVyVGFnc1wiXSwgdGFza0NvbnRlbnQpO1xuXG4gIGlmICh1c2VySW5wdXQuZGF0ZS5sZW5ndGggIT0gMCkge1xuICAgIGNvbnN0IHRhc2tEYXRlID0gY3JlYXRlRWwoXG4gICAgICBcInNwYW5cIixcbiAgICAgIFtcInRhc2tEYXRlXCJdLFxuICAgICAgb3RoZXJUYWdzLFxuICAgICAgYCR7dXNlcklucHV0LmRhdGV9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKHVzZXJJbnB1dC5wcmlvcml0eSkge1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZUVsKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBbXCJ0YXNrUHJpb3JpdHlcIl0sXG4gICAgICBvdGhlclRhZ3MsXG4gICAgICBgJHt1c2VySW5wdXQucHJpb3JpdHl9YCxcbiAgICApO1xuICB9XG4gIGlmICh1c2VySW5wdXQudGFnKSB7XG4gICAgY29uc3QgdGFza1RhZyA9IGNyZWF0ZUVsKFxuICAgICAgXCJzcGFuXCIsXG4gICAgICBbXCJ0YXNrVGFnXCJdLFxuICAgICAgb3RoZXJUYWdzLFxuICAgICAgYCR7dXNlcklucHV0LnRhZ31gLFxuICAgICk7XG4gIH1cbiAgY29uc3QgdGFza09wdGlvbnMgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJ0YXNrT3B0aW9uc1wiXSwgdGFzayk7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcInRhc2tEZWxldGVcIl0sXG4gICAgdGFza09wdGlvbnMsXG4gICAgXCJEZWxldGVcIixcbiAgKTtcblxuICBjb25zdCBkaXZpZGVyID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiZGl2aWRlclwiXSwgdGFzayk7XG5cbiAgcmV0dXJuIFt0YXNrXTtcbn1cbiIsIitcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNWRyBmcm9tIFwiLi91dGlsL3N2Z0NyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVwYWdlR2VuZXJhdG9yKCkge1xuICBjb25zdCBuYXYgPSBjcmVhdGVFbChcIm5hdlwiLCBbXCJuYXZcIl0pO1xuICBjb25zdCB1c2VySWNvbiA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcInVzZXJJY29uXCJdLCBuYXYpO1xuICBjb25zdCB1c2VySWNvblN2ZyA9IGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZDogXCJNMTAgMGExMCAxMCAwIDEgMCAxMCAxMEExMC4wMTEgMTAuMDExIDAgMCAwIDEwIDBabTAgNWEzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZabTAgMTNhOC45NDkgOC45NDkgMCAwIDEtNC45NTEtMS40ODhBMy45ODcgMy45ODcgMCAwIDEgOSAxM2gyYTMuOTg3IDMuOTg3IDAgMCAxIDMuOTUxIDMuNTEyQTguOTQ5IDguOTQ5IDAgMCAxIDEwIDE4WlwiLFxuICAgIH0sXG4gICAgW1widXNlckljb25TdmdcIl0sXG4gICAgdXNlckljb24sXG4gICk7XG5cbiAgY29uc3QgbmF2U2VjdGlvbkNvbnRhaW5lclRvZG8gPSBjcmVhdGVFbChcImRpdlwiLCBbXCJuYXZTZWN0aW9uQ29udGFpbmVyXCJdLCBuYXYpO1xuICBjb25zdCBuYXZCdG5Ub2RheSA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wibmF2QnRuXCIsIFwidG9kYXlcIl0sXG4gICAgbmF2U2VjdGlvbkNvbnRhaW5lclRvZG8sXG4gICAgXCJUb2RheVwiLFxuICApO1xuXG4gIGNvbnN0IG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lclwiXSxcbiAgICBuYXYsXG4gICk7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVySGVhZGVyID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVySGVhZGVyXCJdLFxuICAgIG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyxcbiAgKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJIZWFkZXJIZWFkaW5nID0gY3JlYXRlRWwoXG4gICAgXCJoMlwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJIZWFkaW5nXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyLFxuICAgIFwiUHJvamVjdHNcIixcbiAgKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXJIZWFkZXJBZGRCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJCdG5cIiwgXCJuYXZTZWN0aW9uQ29udGFpbmVyQWRkQnRuXCIsIFwiYWRkUHJvamVjdEJ0blwiXSxcbiAgICBwcm9qZWN0c0NvbnRhaW5lckhlYWRlcixcbiAgKTtcbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk05LjU0Ni41YTkuNSA5LjUgMCAxIDAgOS41IDkuNSA5LjUxIDkuNTEgMCAwIDAtOS41LTkuNVpNMTMuNzg4IDExaC0zLjI0MnYzLjI0MmExIDEgMCAxIDEtMiAwVjExSDUuMzA0YTEgMSAwIDAgMSAwLTJoMy4yNDJWNS43NThhMSAxIDAgMCAxIDIgMFY5aDMuMjQyYTEgMSAwIDEgMSAwIDJaXCIsXG4gICAgfSxcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyQWRkQnRuLFxuICApO1xuXG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcbiAgICAgIFwibmF2U2VjdGlvbkNvbnRhaW5lckJ0blwiLFxuICAgICAgXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29sbGFwc2VCdG5cIixcbiAgICAgIFwicHJvamVjdENvbGxhcHNlQnRuXCIsXG4gICAgXSxcbiAgICBwcm9qZWN0c0NvbnRhaW5lckhlYWRlcixcbiAgKTtcbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDE2IDEwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk0xNS40MzQgMS4yMzVBMiAyIDAgMCAwIDEzLjU4NiAwSDIuNDE0QTIgMiAwIDAgMCAxIDMuNDE0TDYuNTg2IDlhMiAyIDAgMCAwIDIuODI4IDBMMTUgMy40MTRhMiAyIDAgMCAwIC40MzQtMi4xNzlaXCIsXG4gICAgfSxcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCJdLFxuICAgIHByb2plY3RzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4sXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHNDb250ZW50ID0gY3JlYXRlRWwoXG4gICAgXCJkaXZcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29udGVudENvbnRhaW5lclwiLCBcInByb2plY3RDb250ZW50Q29udGFpbmVyXCJdLFxuICAgIG5hdlNlY3Rpb25Db250YWluZXJQcm9qZWN0cyxcbiAgKTtcblxuICBwcm9qZWN0c0NvbnRlbnQuYXBwZW5kKFxuICAgIGNyZWF0ZU5hdklucHV0cyhcbiAgICAgIFwiYWRkUHJvamVjdEZvcm1cIixcbiAgICAgIFwicHJvamVjdE5hbWVJbnB1dFwiLFxuICAgICAgXCJQcm9qZWN0IG5hbWVcIixcbiAgICAgIFwicHJvamVjdE5hbWVcIixcbiAgICAgIFwicHJvamVjdFwiLFxuICAgICksXG4gICk7XG5cbiAgY29uc3QgbmF2U2VjdGlvbkNvbnRhaW5lcmxhYmVscyA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lclwiXSxcbiAgICBuYXYsXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcInByb2plY3RMaXN0Q29udGFpbmVyXCIsIFwibmF2U2VjdGlvbkNvbnRhaW5lckNvbnRlbnRDb250YWluZXJcIl0sXG4gICAgcHJvamVjdHNDb250ZW50LFxuICApO1xuICBjb25zdCBsYWJlbHNDb250YWluZXJIZWFkZXIgPSBjcmVhdGVFbChcbiAgICBcImRpdlwiLFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJIZWFkZXJcIl0sXG4gICAgbmF2U2VjdGlvbkNvbnRhaW5lcmxhYmVscyxcbiAgKTtcbiAgY29uc3QgbGFiZWxzQ29udGFpbmVySGVhZGVySGVhZGluZyA9IGNyZWF0ZUVsKFxuICAgIFwiaDJcIixcbiAgICBbXCJuYXZTZWN0aW9uQ29udGFpbmVySGVhZGluZ1wiXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXIsXG4gICAgXCJUYWdzXCIsXG4gICk7XG4gIGNvbnN0IGxhYmVsc0NvbnRhaW5lckhlYWRlckFkZEJ0biA9IGNyZWF0ZUVsKFxuICAgIFwiYnV0dG9uXCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lckJ0blwiLCBcIm5hdlNlY3Rpb25Db250YWluZXJBZGRCdG5cIiwgXCJhZGRMYWJlbEJ0blwiXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXIsXG4gICk7XG4gIGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZDogXCJNOS41NDYuNWE5LjUgOS41IDAgMSAwIDkuNSA5LjUgOS41MSA5LjUxIDAgMCAwLTkuNS05LjVaTTEzLjc4OCAxMWgtMy4yNDJ2My4yNDJhMSAxIDAgMSAxLTIgMFYxMUg1LjMwNGExIDEgMCAwIDEgMC0yaDMuMjQyVjUuNzU4YTEgMSAwIDAgMSAyIDBWOWgzLjI0MmExIDEgMCAxIDEgMCAyWlwiLFxuICAgIH0sXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lckJ0blN2Z1wiXSxcbiAgICBsYWJlbHNDb250YWluZXJIZWFkZXJBZGRCdG4sXG4gICk7XG5cbiAgY29uc3QgbGFiZWxzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcbiAgICAgIFwibmF2U2VjdGlvbkNvbnRhaW5lckJ0blwiLFxuICAgICAgXCJuYXZTZWN0aW9uQ29udGFpbmVyQ29sbGFwc2VCdG5cIixcbiAgICAgIFwibGFiZWxDb2xsYXBzZUJ0blwiLFxuICAgIF0sXG4gICAgbGFiZWxzQ29udGFpbmVySGVhZGVyLFxuICApO1xuICBjcmVhdGVTVkcoXG4gICAge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMTYgMTBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGQ6IFwiTTE1LjQzNCAxLjIzNUEyIDIgMCAwIDAgMTMuNTg2IDBIMi40MTRBMiAyIDAgMCAwIDEgMy40MTRMNi41ODYgOWEyIDIgMCAwIDAgMi44MjggMEwxNSAzLjQxNGEyIDIgMCAwIDAgLjQzNC0yLjE3OVpcIixcbiAgICB9LFxuICAgIFtcIm5hdlNlY3Rpb25Db250YWluZXJCdG5TdmdcIl0sXG4gICAgbGFiZWxzQ29udGFpbmVySGVhZGVyQ29sbGFwc2VCdG4sXG4gICk7XG5cbiAgY29uc3QgbGFiZWxzQ29udGVudCA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibmF2U2VjdGlvbkNvbnRhaW5lckNvbnRlbnRDb250YWluZXJcIiwgXCJwcm9qZWN0Q29udGVudENvbnRhaW5lclwiXSxcbiAgICBuYXZTZWN0aW9uQ29udGFpbmVybGFiZWxzLFxuICApO1xuXG4gIGxhYmVsc0NvbnRlbnQuYXBwZW5kKFxuICAgIGNyZWF0ZU5hdklucHV0cyhcbiAgICAgIFwiYWRkTGFiZWxGb3JtXCIsXG4gICAgICBcImxhYmVOYW1lSW5wdXRcIixcbiAgICAgIFwiTGFiZWwgbmFtZVwiLFxuICAgICAgXCJsYWJlbE5hbWVcIixcbiAgICAgIFwibGFiZWxcIixcbiAgICApLFxuICApO1xuXG4gIGNvbnN0IGxhYmVsc0NvbnRhaW5lciA9IGNyZWF0ZUVsKFxuICAgIFwiZGl2XCIsXG4gICAgW1wibGFiZWxzQ29udGVudENvbnRhaW5lclwiXSxcbiAgICBsYWJlbHNDb250ZW50LFxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tXYXJuaW5nID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiZGVsZXRlZFRhc2tXYXJuaW5nXCJdKTtcblxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wiY29udGVudFwiXSwgXCJcIiwgXCJcIiwgeyBpZDogXCJjb250ZW50XCIgfSk7XG5cbiAgcmV0dXJuIFtuYXYsIGRlbGV0ZVRhc2tXYXJuaW5nLCBjb250ZW50XTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2SW5wdXRzKFxuICBmb3JtQ2xhc3MsXG4gIGlucHV0Q2xhc3MsXG4gIGlucHV0UGxhY2VIb2xkZXIsXG4gIGlucHV0TmFtZSxcbiAgYnRuQ2xhc3MsXG4pIHtcbiAgY29uc3QgYWRkTmF2Rm9ybSA9IGNyZWF0ZUVsKFwiZm9ybVwiLCBbYCR7Zm9ybUNsYXNzfWBdKTtcbiAgY29uc3QgYWRkTmF2SW5wdXQgPSBjcmVhdGVFbChcbiAgICBcImlucHV0XCIsXG4gICAgW1wiYWRkTmF2Rm9ybUlucHV0XCIsIFwiaGlkZVZpc2liaWxpdHlcIiwgYCR7aW5wdXRDbGFzc31gXSxcbiAgICBhZGROYXZGb3JtLFxuICAgIFwiXCIsXG4gICAge1xuICAgICAgcGxhY2Vob2xkZXI6IGAke2lucHV0UGxhY2VIb2xkZXJ9YCxcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgbmFtZTogYCR7aW5wdXROYW1lfWAsXG4gICAgfSxcbiAgKTtcbiAgY29uc3QgcHJvamVjdEZvcm1BZGRCdG4gPSBjcmVhdGVFbChcbiAgICBcImJ1dHRvblwiLFxuICAgIFtcImFkZE5hdkZvcm1CdG5cIiwgXCJoaWRlVmlzaWJpbGl0eVwiLCBgJHtidG5DbGFzc31hZGRCdG5gXSxcbiAgICBhZGROYXZGb3JtLFxuICAgIFwiXCIsXG4gICAge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIH0sXG4gICk7XG5cbiAgY3JlYXRlU1ZHKFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInctNiBoLTYgXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIGZpbGw6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gICAgICBkOiBcIk0yIDEyYTEwIDEwIDAgMSAxIDIwIDAgMTAgMTAgMCAwIDEtMjAgMFptMTEtNC4yYTEgMSAwIDEgMC0yIDBWMTFINy44YTEgMSAwIDEgMCAwIDJIMTF2My4yYTEgMSAwIDEgMCAyIDBWMTNoMy4yYTEgMSAwIDEgMCAwLTJIMTNWNy44WlwiLFxuICAgICAgXCJjbGlwLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gICAgfSxcbiAgICBbXCJhZGROYXZGb3JtQnRuXCJdLFxuICAgIHByb2plY3RGb3JtQWRkQnRuLFxuICApO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtQ2FuY2VsQnRuID0gY3JlYXRlRWwoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJhZGROYXZGb3JtQnRuXCIsIFwiaGlkZVZpc2liaWxpdHlcIiwgYCR7YnRuQ2xhc3N9Y2FuY2VsQnRuYF0sXG4gICAgYWRkTmF2Rm9ybSxcbiAgICBcIlwiLFxuICApO1xuXG4gIGNyZWF0ZVNWRyhcbiAgICB7XG4gICAgICBjbGFzczogXCJ3LTYgaC02IFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZmlsbC1ydWxlXCI6IFwiZXZlbm9kZFwiLFxuICAgICAgZDogXCJNMiAxMmExMCAxMCAwIDEgMSAyMCAwIDEwIDEwIDAgMCAxLTIwIDBabTcuNy0zLjdhMSAxIDAgMCAwLTEuNCAxLjRsMi4zIDIuMy0yLjMgMi4zYTEgMSAwIDEgMCAxLjQgMS40bDIuMy0yLjMgMi4zIDIuM2ExIDEgMCAwIDAgMS40LTEuNEwxMy40IDEybDIuMy0yLjNhMSAxIDAgMCAwLTEuNC0xLjRMMTIgMTAuNiA5LjcgOC4zWlwiLFxuICAgICAgXCJjbGlwLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gICAgfSxcbiAgICBbXCJhZGROYXZGb3JtQnRuXCJdLFxuICAgIHByb2plY3RGb3JtQ2FuY2VsQnRuLFxuICApO1xuXG4gIHJldHVybiBhZGROYXZGb3JtO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUYXNrKHByb3Blcml0aWVzID0gW10sIG1ldGhvZHMgPSBbXSkge1xuICBjb25zdCBzdGF0ZSA9IHsgbW9kaWZ5QXR0cmlidXRlcyB9O1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICBzdGF0ZSxcbiAgICAuLi5wcm9wZXJpdGllcyxcbiAgICAuLi5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiBtZXRob2Qoc3RhdGUpKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5QXR0cmlidXRlcyhwcm9wZXJpdGllcyA9IFtdLCBtZXRob2RzID0gW10pIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgdGhpcyxcbiAgICAuLi5wcm9wZXJpdGllcyxcbiAgICAuLi5tZXRob2RzLm1hcCgobWV0aG9kKSA9PiBtZXRob2Qoc3RhdGUpKSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tUaXRsZSh0aXRsZSkge1xuICByZXR1cm4geyB0aXRsZTogdGl0bGUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICByZXR1cm4geyBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tEdWVEYXRlKGR1ZURhdGUpIHtcbiAgcmV0dXJuIHsgZHVlRGF0ZTogZHVlRGF0ZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza1ByaW9yaXR5KHByaW9yaXR5KSB7XG4gIHJldHVybiB7IHByaW9yaXR5OiBwcmlvcml0eSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza0xhYmVsKGxhYmVsID0gW10pIHtcbiAgcmV0dXJuIHsgbGFiZWw6IGxhYmVsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xuICByZXR1cm4geyBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL3V0aWwvZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzTmF2RWxlbWVudHMocHJvamVjdExpc3QpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gW107XG4gIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0RWxlbWVudHMucHVzaChjcmVhdGVFbChcImJ1dHRvblwiLCBbXCJuYXZCdG5cIl0sIFwiXCIsIHByb2plY3QpKTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRhc2tHZW5lcmF0b3IgZnJvbSBcIi4uL2dlbmVyYXRlVGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza09iamVjdCh1c2VySW5wdXQpIHtcbiAgcmV0dXJuIHsgLi4udXNlcklucHV0LCBlbGVtZW50OiB0YXNrR2VuZXJhdG9yKHVzZXJJbnB1dCkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVRhc2tPYmplY3QodmFsdWVzID0gW10pIHtcbiAgcmV0dXJuIHsgdW5kb0J0bjogdmFsdWVzWzBdLCB0YXNrRWw6IHZhbHVlc1sxXSwgY2xlYXJUYXNrSWQ6IHZhbHVlc1syXSB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5RWxlbWVudHMocGFyZW50LCBjaGlsZHJlbiA9IFtdKSB7XG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgcGFyZW50LmFwcGVuZChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJlbnQ7XG59XG4iLCJpbXBvcnQgeyBlbGVtZW50UmVzZXQgfSBmcm9tIFwiLi9lbGVtZW50UmVzZXRcIjtcbmltcG9ydCB7IGdlbmVyYXRlRm9ybU9wdGlvbiB9IGZyb20gXCIuL2dlbmVyYXRlRm9ybU9wdGlvbnNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlGb3JtT3B0aW9uYWxzKFxuICBwYXJlbnRFbCxcbiAgcGFyZW50RWxDbGFzcyxcbiAgZmlyc3RPcHRpb24sXG4gIGZpcnN0T3B0aW9uQXR0cmlidXRlcyxcbiAgc2V0LFxuKSB7XG4gIGlmIChwYXJlbnRFbCkge1xuICAgIGVsZW1lbnRSZXNldChwYXJlbnRFbCwgW2Ake3BhcmVudEVsQ2xhc3N9YF0pO1xuICAgIGdlbmVyYXRlRm9ybU9wdGlvbihzZXQsIHBhcmVudEVsLCBmaXJzdE9wdGlvbiwgZmlyc3RPcHRpb25BdHRyaWJ1dGVzKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlOYXZGb3JtKGV4cGFuZEJ0biwgZm9ybSkge1xuICBleHBhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheVByb2plY3RGb3JtXCIpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZ2V0VXNlcklucHV0cyBmcm9tIFwiLi91c2VySW5wdXRzR2V0dGVyXCI7XG5pbXBvcnQgeyBhZGRJdGVtcyB9IGZyb20gXCIuL3NldEZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZWxlbWVudFJlc2V0IH0gZnJvbSBcIi4vZWxlbWVudFJlc2V0XCI7XG5pbXBvcnQgZGlzcGxheUVsZW1lbnRzIGZyb20gXCIuL2Rpc3BsYXlFbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TmF2T3B0aW9uYWxzKFxuICBzZXQsXG4gIHBhcmVudEVsLFxuICBwYXJlbnRFbENsYXNzLFxuICBnZW5lcmF0b3JGbixcbikge1xuICBlbGVtZW50UmVzZXQocGFyZW50RWwsIFtdKTtcbiAgc2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBkaXNwbGF5RWxlbWVudHMocGFyZW50RWwsIGdlbmVyYXRvckZuKGl0ZW0pKTtcbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKFxuICB0eXBlLFxuICBjbGFzc2VzID0gW10sXG4gIHBhcmVudEVsLFxuICBjb250ZW50LFxuICBhdHRyaWJ1dGVzID0ge30sXG4pIHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBpZiAoY2xhc3Nlcy5sZW5ndGggIT0gMCkgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmVudEVsIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuICByZXR1cm4gZWw7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZWxlbWVudFJlc2V0KGVsZW1lbnQsIGNsYXNzZXMgPSBbXSkge1xuICBlbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gIGlmIChjbGFzc2VzLmxlbmd0aCAhPSAwKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCAuLi5jbGFzc2VzKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdk9wdGlvblJlc2V0KGVsZW1lbnQsIGNsYXNzZXMgPSBbXSkge1xuICBlbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgLi4uY2xhc3Nlcyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRm9ybU9wdGlvbihcbiAgb3B0aW9uc0xpc3QsXG4gIHBhcmVudEVsLFxuICBmaXJzdENoaWxkLFxuICBmaXJzdENoaWxkQXR0cmlidXRlLFxuKSB7XG4gIGNyZWF0ZUVsKFwib3B0aW9uXCIsIFtdLCBwYXJlbnRFbCwgZmlyc3RDaGlsZCwgZmlyc3RDaGlsZEF0dHJpYnV0ZSk7XG5cbiAgb3B0aW9uc0xpc3QuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgY3JlYXRlRWwoXCJvcHRpb25cIiwgW10sIHBhcmVudEVsLCBvcHRpb24sIHtcbiAgICAgIHZhbHVlOiBgJHtvcHRpb24udG9Mb3dlckNhc2UoKX1gLFxuICAgIH0pO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgY3JlYXRlU1ZHIGZyb20gXCIuL3N2Z0NyZWF0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVFbChcImRpdlwiLCBbXCJwcm9qZWN0XCJdKTtcbiAgY29uc3QgcHJvamVjdE5hbWVCdG4gPSBjcmVhdGVFbChcImJ1dHRvblwiLCBbXCJuYXZCdG5cIl0sIGRpdiwgcHJvamVjdE5hbWUpO1xuXG4gIHJldHVybiBbZGl2XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTGFiZWwobGFiZWxOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsKFwiZGl2XCIsIFtcImxhYmVsXCJdKTtcbiAgY29uc3QgbGFiZWxOYW1lRWwgPSBjcmVhdGVFbChcInBcIiwgW1wibGFiZWxUYWdcIl0sIGRpdiwgbGFiZWxOYW1lKTtcblxuICBjb25zdCBidG4gPSBjcmVhdGVFbChcImJ1dHRvblwiLCBbXCJsYWJlbERlbGV0ZUJ0blwiXSwgZGl2KTtcbiAgY29uc3QgbGFiZWxEZWxldGVCdG5TVkcgPSBjcmVhdGVTVkcoXG4gICAge1xuICAgICAgY2xhc3M6IFwibGFiZWxEZWxldGVCdG5TdmdcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkOiBcIk0xMCAuNWE5LjUgOS41IDAgMSAwIDkuNSA5LjVBOS41MSA5LjUxIDAgMCAwIDEwIC41Wm0zLjcwNyAxMS43OTNhMSAxIDAgMSAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtMi4yOTMgMi4yOTNhMSAxIDAgMCAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDYuMjkzIDcuNzA3YTEgMSAwIDAgMSAxLjQxNC0xLjQxNEwxMCA4LjU4NmwyLjI5My0yLjI5M2ExIDEgMCAwIDEgMS40MTQgMS40MTRMMTEuNDE0IDEwbDIuMjkzIDIuMjkzWlwiLFxuICAgIH0sXG4gICAgW1wibGFiZWxEZWxldGVCdG5cIl0sXG4gICAgYnRuLFxuICApO1xuICByZXR1cm4gW2Rpdl07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gXCIuL2VsZW1lbnRDcmVhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVDaXJjbGVTVkcgfSBmcm9tIFwiLi9zdmdDcmVhdG9yXCI7XG5pbXBvcnQgXCIuLi9pbnB1dC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVXYXJuaW5nKCkge1xuICBjb25zdCB3YXJuaW5nID0gY3JlYXRlRWwoXCJkaXZcIiwgW1wid2FybmluZ1wiXSk7XG4gIGNvbnN0IHRpbWVyID0gY3JlYXRlQ2lyY2xlU1ZHKFxuICAgIHsgdmlld0JveDogXCIwIDAgMzIgMzJcIiB9LFxuICAgIHtcbiAgICAgIGNsYXNzOiBcImNpcmNsZVwiLFxuICAgICAgcjogXCIxNVwiLFxuICAgICAgY3g6IFwiMTZcIixcbiAgICAgIGN5OiBcIjE2XCIsXG4gICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgfSxcbiAgICBbXCJ0aW1lclwiXSxcbiAgICB3YXJuaW5nLFxuICApO1xuICBjb25zb2xlLmxvZyh0aW1lcik7XG4gIGNvbnN0IHVuZG9XYXJuaW5nQnRuID0gY3JlYXRlRWwoXG4gICAgXCJidXR0b25cIixcbiAgICBbXCJ1bmRvV2FybmluZ0J0blwiXSxcbiAgICB3YXJuaW5nLFxuICAgIFwiVW5kb1wiLFxuICApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHdhcm5pbmcuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlXYXJuaW5nXCIpO1xuICB9LCAxNTApO1xuXG4gIHJldHVybiBbd2FybmluZ107XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFza0VsZW1lbnRzKHRhc2tBcnJheSwgZmlsdGVyID0gXCJ0b2RheVwiKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFsuLi50YXNrQXJyYXldXG4gICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5wcm9qZWN0ID09IGZpbHRlci50b0xvd2VyQ2FzZSgpKVxuICAgIC5tYXAoKHRhc2spID0+IHRhc2suZWxlbWVudFswXSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVXYXJuaW5nKGVsZW1lbnQsIHRpbWUpIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbW92ZVdhcm5pbmdcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0sIDI1MCk7XG4gIH0sIHRpbWUpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldERlZmF1bHRQcm9qZWN0T3B0aW9uKHBhcmVudEVsLCBjdXJyZW50VGFiKSB7XG4gIGlmICghcGFyZW50RWwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgWy4uLnBhcmVudEVsLmNoaWxkcmVuXS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uLmlubmVyVGV4dCA9PSBjdXJyZW50VGFiKSB7XG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb24ucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbXMoc2V0TmFtZSA9IG5ldyBTZXQoKSwgaXRlbXMgPSBbXSkge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0ubGVuZ3RoICE9IDApIHtcbiAgICAgIHNldE5hbWUuYWRkKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZXROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbXMoc2V0TmFtZSA9IG5ldyBTZXQoKSwgaXRlbXMgPSBbXSkge1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgc2V0TmFtZS5kZWxldGUoaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gc2V0TmFtZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTVkcoXG4gIHN2Z0F0dHJpYnV0ZXMgPSB7fSxcbiAgcGF0aEF0dHJpYnV0ZXMgPSB7fSxcbiAgY2xhc3NlcyA9IFtdLFxuICBwYXJlbnRFbCxcbikge1xuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInBhdGhcIixcbiAgKTtcblxuICBpZiAoc3ZnQXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN2Z0F0dHJpYnV0ZXMpKSB7XG4gICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF0aEF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXRoQXR0cmlidXRlcykpIHtcbiAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICBpZiAoY2xhc3Nlcy5sZW5ndGggIT0gMCkgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKGljb25TdmcpO1xuXG4gIHJldHVybiBpY29uU3ZnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2lyY2xlU1ZHKFxuICBzdmdBdHRyaWJ1dGVzID0ge30sXG4gIHBhdGhBdHRyaWJ1dGVzID0ge30sXG4gIGNsYXNzZXMgPSBbXSxcbiAgcGFyZW50RWwsXG4pIHtcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgXCJjaXJjbGVcIixcbiAgKTtcblxuICBpZiAoc3ZnQXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN2Z0F0dHJpYnV0ZXMpKSB7XG4gICAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF0aEF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXRoQXR0cmlidXRlcykpIHtcbiAgICAgIGljb25QYXRoLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcblxuICBpZiAoY2xhc3Nlcy5sZW5ndGggIT0gMCkgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKGljb25TdmcpO1xuXG4gIHJldHVybiBpY29uU3ZnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NlcyhlbGVtZW50LCB0b2dnbGVDbGFzcykge1xuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodG9nZ2xlQ2xhc3MpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVzZXJJbnB1dHMoZm9ybURhdGEsIGlucHV0cyA9IFtdKSB7XG4gIGNvbnN0IHJldHVybk9iaiA9IHt9O1xuICBpZiAoZm9ybURhdGEuZ2V0KFwibmFtZVwiKSA9PSBcIlwiKSB7XG4gIFxuICAgIHJldHVybiAtMTtcbiAgfVxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICByZXR1cm5PYmpbYCR7aW5wdXR9YF0gPSBmb3JtRGF0YS5nZXQoYCR7aW5wdXR9YCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXR1cm5PYmo7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdC0zMiB7XG4gIGxlZnQ6IDhyZW07XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmgtNiB7XG4gIGhlaWdodDogMS41cmVtO1xufVxuXG4udy02IHtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cblxuLnctZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iZy1ibGFjayB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZpbHRlciB7XG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDIwcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjkgMjMxIDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4udXNlckljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnVzZXJJY29uU3ZnIHtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICB3aWR0aDogMi4yNXJlbTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxuICAudXNlckljb25Tdmcge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLm5hdlNlY3Rpb25Db250YWluZXI6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDNweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMXB4IDJweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVySGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4xMjVyZW07XG59XG4ubmF2QnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMTBweCAxNXB4IC0zcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggNnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5uYXZCdG46aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMjUwIDI1MSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzAgNjQgMTc1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIC0tdHctc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYigwIDAgMCAvIDAuMSksIDAgOHB4IDEwcHggLTZweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDIwcHggMjVweCAtNXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgOHB4IDEwcHggLTZweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuXG4uYWN0aXZlVGFiIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNDkgMjUwIDI1MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICAtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDJweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuLm5hdlNlY3Rpb25Db250YWluZXJIZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuIHN2ZyB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLm5hdlNlY3Rpb25Db250YWluZXJCdG4gc3ZnIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICB9XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQWRkQnRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQ29sbGFwc2VCdG4ge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmNvbGxhcHNlQnRuUm90YXRlIHtcbiAgLS10dy1yb3RhdGU6IC05MGRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgLS10dy1yb3RhdGU6IDBkZWc7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG4gIC5uYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1cblxuLnJvdGF0ZVN2Z0J0biB7XG4gIC0tdHctcm90YXRlOiA0NWRlZztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5cbi5uYXZTZWN0aW9uQ29udGFpbmVyQ29udGVudENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3RMaXN0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmFkZFByb2plY3RGb3JtLFxuLmFkZExhYmVsRm9ybSB7XG4gIGhlaWdodDogMHB4O1xuICB3aWR0aDogMTZyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAwLjEpLCAwIDFweCAycHggLTFweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmFkZFByb2plY3RGb3JtOmZvY3VzLXdpdGhpbixcbi5hZGRMYWJlbEZvcm06Zm9jdXMtd2l0aGluIHtcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAycHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuXG4uYWRkUHJvamVjdEZvcm06aG92ZXIsXG4uYWRkTGFiZWxGb3JtOmhvdmVyIHtcbiAgLS10dy1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMSksIDAgMnB4IDRweCAtMnB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgNHB4IDZweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbi5kaXNwbGF5UHJvamVjdEZvcm0ge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBnYXA6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uYWRkTmF2Rm9ybUlucHV0IHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNCAvIHNwYW4gNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5hZGROYXZGb3JtSW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFkZE5hdkZvcm1JbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFkZE5hdkZvcm1JbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uYWRkTmF2Rm9ybUJ0biB7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IDEuMjVyZW07XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLmFkZE5hdkZvcm1CdG4ge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIH1cbn1cblxuLyogLmxhYmVsc0NvbnRlbnRDb250YWluZXIge1xuICBAYXBwbHk7XG59ICovXG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC4zNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjQ5IDI1MCAyNTEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDNweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMXB4IDJweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4ubGFiZWw6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMgMjQ0IDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDRweCA2cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLmxhYmVsOmhvdmVyIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICB9XG59XG5cbi5sYWJlbERlbGV0ZUJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sYWJlbERlbGV0ZUJ0blN2ZyB7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgd2lkdGg6IDEuMjVyZW07XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbiAgLmxhYmVsRGVsZXRlQnRuU3ZnIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxufVxuXG4ubGFiZWxzQ29udGVudENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTByZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVyZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzIDI0NCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5jb250ZW50LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC4yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbi5jb250ZW50LWhlYWRlci1oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDExcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDExcmVtO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC4yO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDEuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi50b2RvLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMjVyZW07XG59XG5cbi50b2RvLWRldGFpbHMtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvZG8tZGV0YWlscy1uYW1lOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udG9kby1kZXRhaWxzLW5hbWU6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udG9kby1kZXRhaWxzLW5hbWU6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLnRvZG8tZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udG9kby1kZXRhaWxzLWRlc2NyaXB0aW9uOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b2RvLWRldGFpbHMtZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b2RvLWRldGFpbHMtZGVzY3JpcHRpb246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLmZvcm0tb3B0aW9uYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uZm9ybS1kZXRhaWxzLXRhZ3Mge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDAuNTU7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuLmZvcm0tc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5mb3JtLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMjVyZW07XG59XG5cbi50b2RvLWZvcm0tYnRucyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoNTUgNjUgODEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG5cbi50b2RvLWZvcm0tYnRuczpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmRlbGV0ZWRUYXNrV2FybmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIuNXJlbTtcbiAgdG9wOiAxLjI1cmVtO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLndhcm5pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtLXR3LXRyYW5zbGF0ZS15OiAtMS4yNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjEyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjkgMjMxIDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLndhcm5pbmc6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDkgMjEzIDIxOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLnRpbWVyIHtcbiAgaGVpZ2h0OiAxLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuXG4udW5kb1dhcm5pbmdCdG4ge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuXG4udW5kb1dhcm5pbmdCdG46aG92ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzIDcgMTggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLnRhc2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgZ2FwOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC4zO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcbn1cblxuLmNvbXBsZXRlTWFya2VyQ29udGFpbmVuciB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xufVxuXG4uY29tcGxldGVNYXJrZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xuICAtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDBweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLmNvbXBsZXRlTWFya2VyOmhvdmVyIHtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcik7XG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMnB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XG59XG5cbi5jb21wbGV0ZU1hcmtlckNoZWNrZWQge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5kaXNwbGF5V2FybmluZyB7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50YXNrQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4xMjVyZW07XG59XG5cbi50YXNrSGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRhc2tEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ub3RoZXJUYWdzIHtcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRhc2tEYXRlIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwIDI1MiAyMzEgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDIyIDE2MyA3NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS13aWR0aDogMXB4O1xuICBvdXRsaW5lLWNvbG9yOiAjMTZhMzRhO1xufVxuXG4udGFza1ByaW9yaXR5IHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0IDIyNiAyMjYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS13aWR0aDogMXB4O1xuICBvdXRsaW5lLWNvbG9yOiAjZGMyNjI2O1xufVxuXG4udGFza1RhZyB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyMzcgMjEzIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gIG91dGxpbmUtd2lkdGg6IDFweDtcbiAgb3V0bGluZS1jb2xvcjogI2VhNTgwYztcbn1cblxuLnRhc2tEYXRlLFxuLnRhc2tQcmlvcml0eSxcbi50YXNrVGFnIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjEyNXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRhc2tPcHRpb25zIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbn1cblxuLnRhc2tFZGl0LFxuLnRhc2tEZWxldGUge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMgMjQ0IDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cblxuLnRhc2tFZGl0OmhvdmVyLFxuLnRhc2tEZWxldGU6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI0OSAyNTAgMjUxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5kaXZpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC4xO1xufVxuXG4uaGlkZU5hdlNlY3Rpb24ge1xuICBoZWlnaHQ6IDBweDtcbn1cblxuLnJlbW92ZVdhcm5pbmcge1xuICAtLXR3LXRyYW5zbGF0ZS15OiAxLjI1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmhpZGVUYXNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5wcm9qZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2IoMCAwIDAgLyAwLjI1KTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyNXB4IDUwcHggLTEycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgc3Ryb2tlOiAjMjJjNTVlO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzAwO1xuICBhbmltYXRpb246IGRhc2ggNXMgbGluZWFyIGFsdGVybmF0ZTtcbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIGZyb20ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7XG4gIH1cbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDA7XG4gIH1cbn1cblxuLmhpZGVWaXNpYmlsaXR5IHtcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIC0tdHctYmctb3BhY2l0eTogMC44O1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG4ud3JhcHBlci1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNDkgMjUwIDI1MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4ud3JhcHBlckJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLndyYXBwZXJEZWxldGVCdG4ge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi53cmFwcGVyRGVsZXRlQnRuOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjg7XG59XG5cbi51bmRvV3JhcHBlckRlbGV0ZUJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLnVuZG9XcmFwcGVyRGVsZXRlQnRuOmhvdmVyIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnB1dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCwrSEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFk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QTJGO0VBQTNGLGtCQUEyRjtFQUEzRix1REFBMkY7RUFBM0YscUJBQTJGO0VBQTNGLHNCQUEyRjtFQUEzRixvQkFBMkY7RUFBM0YsdUJBQTJGO0VBQTNGLGVBQTJGO0VBQTNGLG1CQUEyRjtFQUEzRixnQkFBMkY7RUFBM0Ysb0JBQTJGO0VBQTNGO0FBQTJGOztBQUEzRjtFQUFBO0FBQTJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcblxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcblxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2R5IHtcXG4gIEBhcHBseSBtLWF1dG8gZmxleCBtYXgtdy1zY3JlZW4tMnhsO1xcbn1cXG5cXG4ubmF2IHtcXG4gIEBhcHBseSBzdGlja3kgbGVmdC0wIHRvcC0wIGZsZXggbWF4LWgtZnVsbCBtaW4taC1zY3JlZW4gdy04MCAgZmxleC1jb2wgYmctZ3JheS0yMDAgcC0yO1xcbn1cXG5cXG4udXNlckljb24ge1xcbiAgQGFwcGx5IHB4LTMgcGItNSBwdC00O1xcbn1cXG5cXG4udXNlckljb25Tdmcge1xcbiAgQGFwcGx5IGgtOSB3LTkgdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS02MDA7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyIHtcXG4gIEBhcHBseSBtYi0yIHJvdW5kZWQtbGcgcC0yIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOnNoYWRvdztcXG59XFxuXFxuLm5hdlNlY3Rpb25Db250YWluZXJIZWFkZXIge1xcbiAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiBwci0wLjU7XFxufVxcbi5uYXZCdG4ge1xcbiAgQGFwcGx5IHctZnVsbCByb3VuZGVkLW1kIGJnLXdoaXRlIHAtMiB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LWJvbGQgIHRleHQtYmx1ZS02MDAgc2hhZG93LWxnIGhvdmVyOmJnLWdyYXktNTAgaG92ZXI6dGV4dC1ibHVlLTgwMCBob3ZlcjpzaGFkb3cteGw7XFxufVxcblxcbi5hY3RpdmVUYWIge1xcbiAgQGFwcGx5IGJnLWJsdWUtNjAwICB0ZXh0LWdyYXktNTAgc2hhZG93LXNtIHRyYW5zaXRpb24tYWxsO1xcbn1cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckhlYWRpbmcge1xcbiAgQGFwcGx5IGZvbnQtYm9sZCB0ZXh0LWJsdWUtNjAwO1xcbn1cXG5cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckJ0biB7XFxuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXI7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuIHN2ZyB7XFxuICBAYXBwbHkgdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtYmx1ZS02MDA7XFxufVxcblxcbi5uYXZTZWN0aW9uQ29udGFpbmVyQWRkQnRuIHtcXG4gIEBhcHBseSBtbC1hdXRvO1xcbn1cXG5cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckNvbGxhcHNlQnRuIHtcXG4gIEBhcHBseSB0cmFuc2l0aW9uLXRyYW5zZm9ybTtcXG59XFxuXFxuLmNvbGxhcHNlQnRuUm90YXRlIHtcXG4gIEBhcHBseSAtcm90YXRlLTkwO1xcbn1cXG5cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckJ0blN2ZyB7XFxuICBAYXBwbHkgaC00IHctNCByb3RhdGUtMCB0ZXh0LWdyYXktODAwIHRyYW5zaXRpb24tYWxsIGRhcms6dGV4dC1ibGFjaztcXG59XFxuXFxuLnJvdGF0ZVN2Z0J0biB7XFxuICBAYXBwbHkgcm90YXRlLTQ1O1xcbn1cXG5cXG4ubmF2U2VjdGlvbkNvbnRhaW5lckNvbnRlbnRDb250YWluZXIge1xcbiAgQGFwcGx5IGZsZXggIGZsZXgtY29sIGdhcC0xIG92ZXJmbG93LWhpZGRlbjtcXG59XFxuXFxuLnByb2plY3RMaXN0Q29udGFpbmVyIHtcXG4gIEBhcHBseSBmbGV4IGgtNDAgZmxleC1jb2wgZ2FwLTEgb3ZlcmZsb3cteS1hdXRvIHRyYW5zaXRpb24tYWxsO1xcbn1cXG5cXG4uYWRkUHJvamVjdEZvcm0sXFxuLmFkZExhYmVsRm9ybSB7XFxuICBAYXBwbHkgaC0wIHctNjQgIGJnLXdoaXRlIHAtMCBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgIGZvY3VzLXdpdGhpbjpzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kO1xcbn1cXG5cXG4uZGlzcGxheVByb2plY3RGb3JtIHtcXG4gIEBhcHBseSBteS0yIGZsZXggaC05IGdhcC0xIHJvdW5kZWQtbWQgcC0yIHRyYW5zaXRpb24tYWxsO1xcbn1cXG5cXG4uYWRkTmF2Rm9ybUlucHV0IHtcXG4gIEBhcHBseSBjb2wtc3Bhbi00IHctZnVsbCBiZy10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNzAwIHBsYWNlaG9sZGVyOnRleHQtc20gcGxhY2Vob2xkZXI6Zm9udC1ib2xkIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lO1xcbn1cXG5cXG4uYWRkTmF2Rm9ybUJ0biB7XFxuICBAYXBwbHkgaC01IHctNSB0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTYwMDtcXG59XFxuXFxuLyogLmxhYmVsc0NvbnRlbnRDb250YWluZXIge1xcbiAgQGFwcGx5O1xcbn0gKi9cXG5cXG4ubGFiZWwge1xcbiAgQGFwcGx5IGZsZXggbWluLXctZml0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ibHVlLTYwMCAgcHgtMyBweS0xIHRleHQteHMgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHRleHQtZ3JheS01MCBzaGFkb3cgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBob3ZlcjpzaGFkb3ctbWQgaG92ZXI6ZGFyazp0ZXh0LWJsdWUtNjAwO1xcbn1cXG5cXG4ubGFiZWxEZWxldGVCdG4ge1xcbiAgQGFwcGx5IGZvbnQtYm9sZDtcXG59XFxuXFxuLmxhYmVsRGVsZXRlQnRuU3ZnIHtcXG4gIEBhcHBseSBoLTUgdy01IHRleHQtaW5oZXJpdCBkYXJrOnRleHQtaW5oZXJpdDtcXG59XFxuXFxuLmxhYmVsc0NvbnRlbnRDb250YWluZXIge1xcbiAgQGFwcGx5IGZsZXggaC00MCBmbGV4LXdyYXAgY29udGVudC1zdGFydCBpdGVtcy1zdGFydCBqdXN0aWZ5LXN0YXJ0IGdhcC0yIG92ZXJmbG93LXktYXV0byB0cmFuc2l0aW9uLWFsbDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgQGFwcGx5IHJlbGF0aXZlIGZsZXggaC1zY3JlZW4gdy1mdWxsIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktc3RhcnQgb3ZlcmZsb3ctc2Nyb2xsIG92ZXJmbG93LXgtaGlkZGVuIGJnLWdyYXktMTAwIHRleHQtYmxhY2s7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gIEBhcHBseSBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgIGp1c3RpZnktY2VudGVyIHB4LTE0IHB5LTQ7XFxufVxcblxcbi5jb250ZW50LWZvcm0ge1xcbiAgQGFwcGx5IGZsZXggdy1mdWxsIG1heC13LXNjcmVlbi1tZCBmbGV4LWNvbCBnYXAtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmxhY2sgYm9yZGVyLW9wYWNpdHktMjAgYmctdHJhbnNwYXJlbnQgcC0yO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgQGFwcGx5IHctZnVsbCBweC0xNCAgcHQtMTI7XFxufVxcblxcbi5jb250ZW50LWhlYWRlci1oZWFkaW5nIHtcXG4gIEBhcHBseSBteC00NCBib3JkZXItYiBib3JkZXItYmxhY2sgYm9yZGVyLW9wYWNpdHktMjAgcGItMiB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibHVlLTcwMDtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBAYXBwbHkgZmxleCBmbGV4LWNvbCBnYXAtMTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscy1uYW1lIHtcXG4gIEBhcHBseSBiZy10cmFuc3BhcmVudCAgcC0wIHRleHQtYmFzZSBmb250LWJvbGQgcGxhY2Vob2xkZXI6dGV4dC1iYXNlIHBsYWNlaG9sZGVyOmZvbnQtZXh0cmFib2xkIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG4gIEBhcHBseSBiZy10cmFuc3BhcmVudCBwLTAgdGV4dC1zbSBmb250LWJvbGQgcGxhY2Vob2xkZXI6dGV4dC1zbSBwbGFjZWhvbGRlcjpmb250LWJvbGQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmU7XFxufVxcblxcbi5mb3JtLW9wdGlvbmFscyB7XFxuICBAYXBwbHkgZmxleCBnYXAtMztcXG59XFxuXFxuLmZvcm0tZGV0YWlscy10YWdzIHtcXG4gIEBhcHBseSByb3VuZGVkIGJvcmRlciAgYm9yZGVyLWJsYWNrIGJvcmRlci1vcGFjaXR5LTIwIGJnLXRyYW5zcGFyZW50IHAtMC41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIHRleHQtb3BhY2l0eS01NSBvdXRsaW5lLW5vbmU7XFxufVxcblxcbi5mb3JtLXN1Ym1pdCB7XFxuICBAYXBwbHkgZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTM7XFxufVxcblxcbi5mb3JtLWJ1dHRvbi1jb250YWluZXIge1xcbiAgQGFwcGx5IGZsZXggZ2FwLTE7XFxufVxcblxcbi50b2RvLWZvcm0tYnRucyB7XFxuICBAYXBwbHkgcm91bmRlZCAgcHgtMyBweS0xIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLWJsdWUtNjAwIGhvdmVyOnRleHQtd2hpdGU7XFxufVxcblxcbi5kZWxldGVkVGFza1dhcm5pbmcge1xcbiAgQGFwcGx5IGFic29sdXRlIHJpZ2h0LTEwIHRvcC01ICB6LTEwIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBnYXAtMjtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgQGFwcGx5IGZsZXggLXRyYW5zbGF0ZS15LTUgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMC41IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTIwMCBweC0zIHB5LTIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctZ3JheS0zMDA7XFxufVxcblxcbi50aW1lciB7XFxuICBAYXBwbHkgaC01IHctNSByb3VuZGVkLWZ1bGw7XFxufVxcblxcbi51bmRvV2FybmluZ0J0biB7XFxuICBAYXBwbHkgcm91bmRlZC1mdWxsIHB4LTEgdGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0ZXh0LWdyYXktOTUwO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgQGFwcGx5IGZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNSBweC0xNCBweS00O1xcbn1cXG5cXG4udGFzayB7XFxuICBAYXBwbHkgZ3JpZCAgdy1mdWxsIG1heC13LXNjcmVlbi1tZCBnYXAtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItYmxhY2sgIGJvcmRlci1vcGFjaXR5LTMwIHAtMjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLmNvbXBsZXRlTWFya2VyQ29udGFpbmVuciB7XFxuICBAYXBwbHkgcHQtMTtcXG59XFxuXFxuLmNvbXBsZXRlTWFya2VyIHtcXG4gIEBhcHBseSBibG9jayBoLTQgdy00IHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItYmx1ZS02MDAgYmctdHJhbnNwYXJlbnQgcmluZy0wIHRyYW5zaXRpb24tYWxsIGhvdmVyOnJpbmctMjtcXG59XFxuXFxuLmNvbXBsZXRlTWFya2VyQ2hlY2tlZCB7XFxuICBAYXBwbHkgYmctYmx1ZS02MDA7XFxufVxcblxcbi5kaXNwbGF5V2FybmluZyB7XFxuICBAYXBwbHkgdHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMDtcXG59XFxuXFxuLnRhc2tDb250ZW50IHtcXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC0wLjU7XFxufVxcblxcbi50YXNrSGVhZGluZyB7XFxuICBAYXBwbHkgdGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkO1xcbn1cXG5cXG4udGFza0Rlc2NyaXB0aW9uIHtcXG4gIEBhcHBseSB0ZXh0LXNtIGZvbnQtYm9sZDtcXG59XFxuXFxuLm90aGVyVGFncyB7XFxuICBAYXBwbHkgbXQtMC41IGZsZXggZ2FwLTIgdGV4dC1zbSBmb250LXNlbWlib2xkO1xcbn1cXG5cXG4udGFza0RhdGUge1xcbiAgQGFwcGx5IGJnLWdyZWVuLTEwMCB0ZXh0LWdyZWVuLTYwMCBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLWdyZWVuLTYwMDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eSB7XFxuICBAYXBwbHkgYmctcmVkLTEwMCB0ZXh0LXJlZC02MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1yZWQtNjAwO1xcbn1cXG5cXG4udGFza1RhZyB7XFxuICBAYXBwbHkgYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS02MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1vcmFuZ2UtNjAwO1xcbn1cXG5cXG4udGFza0RhdGUsXFxuLnRhc2tQcmlvcml0eSxcXG4udGFza1RhZyB7XFxuICBAYXBwbHkgcm91bmRlZC1mdWxsIHB4LTIgcHktMC41ICB0ZXh0LXhzIGZvbnQtZXh0cmFib2xkO1xcbn1cXG5cXG4udGFza09wdGlvbnMge1xcbiAgQGFwcGx5IHAtMTtcXG59XFxuXFxuLnRhc2tFZGl0LFxcbi50YXNrRGVsZXRlIHtcXG4gIEBhcHBseSByb3VuZGVkICBiZy1ncmF5LTEwMCBweC0zIHB5LTEgdGV4dC1zbSBmb250LWV4dHJhYm9sZCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy1yZWQtNTAwIGhvdmVyOnRleHQtZ3JheS01MDtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgQGFwcGx5IGFic29sdXRlIC1ib3R0b20tMyAgdy1mdWxsICBib3JkZXIgYm9yZGVyLWJsYWNrIGJvcmRlci1vcGFjaXR5LTEwO1xcbn1cXG5cXG4uaGlkZU5hdlNlY3Rpb24ge1xcbiAgQGFwcGx5IGgtMDtcXG59XFxuXFxuLnJlbW92ZVdhcm5pbmcge1xcbiAgQGFwcGx5IHRyYW5zbGF0ZS15LTUgb3BhY2l0eS0wO1xcbn1cXG5cXG4uaGlkZVRhc2sge1xcbiAgQGFwcGx5IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQge1xcbiAgQGFwcGx5IHJvdW5kZWQgYmctd2hpdGUgIHB5LTEgcHItMiB0ZXh0LWJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBAYXBwbHkgbWItMiBtci0xIHNoYWRvdy0yeGw7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgQGFwcGx5IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC1mdWxsIHN0cm9rZS1ncmVlbi01MDA7XFxuICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gIHN0cm9rZS13aWR0aDogMTA7XFxuICBzdHJva2UtZGFzaGFycmF5OiAzMDA7XFxuICBhbmltYXRpb246IGRhc2ggNXMgbGluZWFyIGFsdGVybmF0ZTtcXG59XFxuQGtleWZyYW1lcyBkYXNoIHtcXG4gIGZyb20ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xcbiAgfVxcbn1cXG5cXG4uaGlkZVZpc2liaWxpdHkge1xcbiAgQGFwcGx5IGNvbGxhcHNlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBAYXBwbHkgIGFic29sdXRlIGZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBnYXAtMiBiZy1ibGFjayBiZy1vcGFjaXR5LTgwIHAtMTI7XFxufVxcblxcbi53cmFwcGVyLWhlYWRpbmcge1xcbiAgQGFwcGx5IHRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS01MDtcXG59XFxuXFxuLndyYXBwZXJCdG5zIHtcXG4gIEBhcHBseSBmbGV4IGdhcC0yO1xcbn1cXG5cXG4ud3JhcHBlckRlbGV0ZUJ0biB7XFxuICBAYXBwbHkgcm91bmRlZCBiZy1ibHVlLTYwMCBweC0zIHB5LTEgdGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS04MDtcXG59XFxuXFxuLnVuZG9XcmFwcGVyRGVsZXRlQnRuIHtcXG4gIEBhcHBseSByb3VuZGVkIGJnLXJlZC02MDAgcHgtMyBweS0xIHRleHQtYmFzZSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktODA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIGx1PU9iamVjdC5jcmVhdGU7dmFyICRlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgZnU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgRnU9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHB1PU9iamVjdC5nZXRQcm90b3R5cGVPZixkdT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBtdT0oZSx0KT0+KCk9PihlJiYodD1lKGU9MCkpLHQpO3ZhciBNZT0oZSx0KT0+KCk9Pih0fHxlKCh0PXtleHBvcnRzOnt9fSkuZXhwb3J0cyx0KSx0LmV4cG9ydHMpLFdlPShlLHQpPT57Zm9yKHZhciByIGluIHQpJGUoZSxyLHtnZXQ6dFtyXSxlbnVtZXJhYmxlOiEwfSl9LG5yPShlLHQscixuKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbyBvZiBGdSh0KSkhZHUuY2FsbChlLG8pJiZvIT09ciYmJGUoZSxvLHtnZXQ6KCk9PnRbb10sZW51bWVyYWJsZTohKG49ZnUodCxvKSl8fG4uZW51bWVyYWJsZX0pO3JldHVybiBlfTt2YXIgaGU9KGUsdCxyKT0+KHI9ZSE9bnVsbD9sdShwdShlKSk6e30sbnIodHx8IWV8fCFlLl9fZXNNb2R1bGU/JGUocixcImRlZmF1bHRcIix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwfSk6cixlKSksRXU9ZT0+bnIoJGUoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZSk7dmFyIEN1PShlLHQscik9PntpZighdC5oYXMoZSkpdGhyb3cgVHlwZUVycm9yKFwiQ2Fubm90IFwiK3IpfTt2YXIgaHQ9KGUsdCxyKT0+e2lmKHQuaGFzKGUpKXRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2VcIik7dCBpbnN0YW5jZW9mIFdlYWtTZXQ/dC5hZGQoZSk6dC5zZXQoZSxyKX07dmFyIGNlPShlLHQscik9PihDdShlLHQsXCJhY2Nlc3MgcHJpdmF0ZSBtZXRob2RcIikscik7dmFyIG9yPU1lKGd0PT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGd0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2d0LmRlZmF1bHQ9dXI7ZnVuY3Rpb24gdXIoKXt9dXIucHJvdG90eXBlPXtkaWZmOmZ1bmN0aW9uKHQscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOnt9LG89bi5jYWxsYmFjazt0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiYobz1uLG49e30pLHRoaXMub3B0aW9ucz1uO3ZhciB1PXRoaXM7ZnVuY3Rpb24gaShGKXtyZXR1cm4gbz8oc2V0VGltZW91dChmdW5jdGlvbigpe28odm9pZCAwLEYpfSwwKSwhMCk6Rn10PXRoaXMuY2FzdElucHV0KHQpLHI9dGhpcy5jYXN0SW5wdXQociksdD10aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUodCkpLHI9dGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKHIpKTt2YXIgcz1yLmxlbmd0aCxEPXQubGVuZ3RoLGE9MSxjPXMrRDtuLm1heEVkaXRMZW5ndGgmJihjPU1hdGgubWluKGMsbi5tYXhFZGl0TGVuZ3RoKSk7dmFyIGQ9W3tuZXdQb3M6LTEsY29tcG9uZW50czpbXX1dLGY9dGhpcy5leHRyYWN0Q29tbW9uKGRbMF0scix0LDApO2lmKGRbMF0ubmV3UG9zKzE+PXMmJmYrMT49RClyZXR1cm4gaShbe3ZhbHVlOnRoaXMuam9pbihyKSxjb3VudDpyLmxlbmd0aH1dKTtmdW5jdGlvbiBwKCl7Zm9yKHZhciBGPS0xKmE7Rjw9YTtGKz0yKXt2YXIgbT12b2lkIDAsRT1kW0YtMV0sQz1kW0YrMV0sZz0oQz9DLm5ld1BvczowKS1GO0UmJihkW0YtMV09dm9pZCAwKTt2YXIgaD1FJiZFLm5ld1BvcysxPHMsQj1DJiYwPD1nJiZnPEQ7aWYoIWgmJiFCKXtkW0ZdPXZvaWQgMDtjb250aW51ZX1pZighaHx8QiYmRS5uZXdQb3M8Qy5uZXdQb3M/KG09eXUoQyksdS5wdXNoQ29tcG9uZW50KG0uY29tcG9uZW50cyx2b2lkIDAsITApKToobT1FLG0ubmV3UG9zKyssdS5wdXNoQ29tcG9uZW50KG0uY29tcG9uZW50cywhMCx2b2lkIDApKSxnPXUuZXh0cmFjdENvbW1vbihtLHIsdCxGKSxtLm5ld1BvcysxPj1zJiZnKzE+PUQpcmV0dXJuIGkoZ3UodSxtLmNvbXBvbmVudHMscix0LHUudXNlTG9uZ2VzdFRva2VuKSk7ZFtGXT1tfWErK31pZihvKShmdW5jdGlvbiBGKCl7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKGE+YylyZXR1cm4gbygpO3AoKXx8RigpfSwwKX0pKCk7ZWxzZSBmb3IoO2E8PWM7KXt2YXIgbD1wKCk7aWYobClyZXR1cm4gbH19LHB1c2hDb21wb25lbnQ6ZnVuY3Rpb24odCxyLG4pe3ZhciBvPXRbdC5sZW5ndGgtMV07byYmby5hZGRlZD09PXImJm8ucmVtb3ZlZD09PW4/dFt0Lmxlbmd0aC0xXT17Y291bnQ6by5jb3VudCsxLGFkZGVkOnIscmVtb3ZlZDpufTp0LnB1c2goe2NvdW50OjEsYWRkZWQ6cixyZW1vdmVkOm59KX0sZXh0cmFjdENvbW1vbjpmdW5jdGlvbih0LHIsbixvKXtmb3IodmFyIHU9ci5sZW5ndGgsaT1uLmxlbmd0aCxzPXQubmV3UG9zLEQ9cy1vLGE9MDtzKzE8dSYmRCsxPGkmJnRoaXMuZXF1YWxzKHJbcysxXSxuW0QrMV0pOylzKyssRCsrLGErKztyZXR1cm4gYSYmdC5jb21wb25lbnRzLnB1c2goe2NvdW50OmF9KSx0Lm5ld1Bvcz1zLER9LGVxdWFsczpmdW5jdGlvbih0LHIpe3JldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcj90aGlzLm9wdGlvbnMuY29tcGFyYXRvcih0LHIpOnQ9PT1yfHx0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSYmdC50b0xvd2VyQ2FzZSgpPT09ci50b0xvd2VyQ2FzZSgpfSxyZW1vdmVFbXB0eTpmdW5jdGlvbih0KXtmb3IodmFyIHI9W10sbj0wO248dC5sZW5ndGg7bisrKXRbbl0mJnIucHVzaCh0W25dKTtyZXR1cm4gcn0sY2FzdElucHV0OmZ1bmN0aW9uKHQpe3JldHVybiB0fSx0b2tlbml6ZTpmdW5jdGlvbih0KXtyZXR1cm4gdC5zcGxpdChcIlwiKX0sam9pbjpmdW5jdGlvbih0KXtyZXR1cm4gdC5qb2luKFwiXCIpfX07ZnVuY3Rpb24gZ3UoZSx0LHIsbixvKXtmb3IodmFyIHU9MCxpPXQubGVuZ3RoLHM9MCxEPTA7dTxpO3UrKyl7dmFyIGE9dFt1XTtpZihhLnJlbW92ZWQpe2lmKGEudmFsdWU9ZS5qb2luKG4uc2xpY2UoRCxEK2EuY291bnQpKSxEKz1hLmNvdW50LHUmJnRbdS0xXS5hZGRlZCl7dmFyIGQ9dFt1LTFdO3RbdS0xXT10W3VdLHRbdV09ZH19ZWxzZXtpZighYS5hZGRlZCYmbyl7dmFyIGM9ci5zbGljZShzLHMrYS5jb3VudCk7Yz1jLm1hcChmdW5jdGlvbihwLGwpe3ZhciBGPW5bRCtsXTtyZXR1cm4gRi5sZW5ndGg+cC5sZW5ndGg/RjpwfSksYS52YWx1ZT1lLmpvaW4oYyl9ZWxzZSBhLnZhbHVlPWUuam9pbihyLnNsaWNlKHMscythLmNvdW50KSk7cys9YS5jb3VudCxhLmFkZGVkfHwoRCs9YS5jb3VudCl9fXZhciBmPXRbaS0xXTtyZXR1cm4gaT4xJiZ0eXBlb2YgZi52YWx1ZT09XCJzdHJpbmdcIiYmKGYuYWRkZWR8fGYucmVtb3ZlZCkmJmUuZXF1YWxzKFwiXCIsZi52YWx1ZSkmJih0W2ktMl0udmFsdWUrPWYudmFsdWUsdC5wb3AoKSksdH1mdW5jdGlvbiB5dShlKXtyZXR1cm57bmV3UG9zOmUubmV3UG9zLGNvbXBvbmVudHM6ZS5jb21wb25lbnRzLnNsaWNlKDApfX19KTt2YXIgaXI9TWUoeWU9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoeWUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7eWUuZGlmZkFycmF5cz1fdTt5ZS5hcnJheURpZmY9dm9pZCAwO3ZhciBBdT1CdShvcigpKTtmdW5jdGlvbiBCdShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGdlPW5ldyBBdS5kZWZhdWx0O3llLmFycmF5RGlmZj1nZTtnZS50b2tlbml6ZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5zbGljZSgpfTtnZS5qb2luPWdlLnJlbW92ZUVtcHR5PWZ1bmN0aW9uKGUpe3JldHVybiBlfTtmdW5jdGlvbiBfdShlLHQscil7cmV0dXJuIGdlLmRpZmYoZSx0LHIpfX0pO3ZhciBQZT1NZSgocHMsanIpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFlyPW5ldyBQcm94eShTdHJpbmcse2dldDooKT0+WXJ9KTtqci5leHBvcnRzPVlyfSk7dmFyIEZuPXt9O1dlKEZuLHtkZWZhdWx0OigpPT51byxzaG91bGRIaWdobGlnaHQ6KCk9Pm5vfSk7dmFyIG5vLHVvLHBuPW11KCgpPT57bm89KCk9PiExLHVvPVN0cmluZ30pO3ZhciB5bj1NZShGdD0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShGdCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtGdC5jb2RlRnJhbWVDb2x1bW5zPWduO0Z0LmRlZmF1bHQ9YW87dmFyIGRuPShwbigpLEV1KEZuKSksbW49b28oUGUoKSwhMCk7ZnVuY3Rpb24gaG4oZSl7aWYodHlwZW9mIFdlYWtNYXAhPVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgdD1uZXcgV2Vha01hcCxyPW5ldyBXZWFrTWFwO3JldHVybihobj1mdW5jdGlvbihuKXtyZXR1cm4gbj9yOnR9KShlKX1mdW5jdGlvbiBvbyhlLHQpe2lmKCF0JiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7aWYoZT09PW51bGx8fHR5cGVvZiBlIT1cIm9iamVjdFwiJiZ0eXBlb2YgZSE9XCJmdW5jdGlvblwiKXJldHVybntkZWZhdWx0OmV9O3ZhciByPWhuKHQpO2lmKHImJnIuaGFzKGUpKXJldHVybiByLmdldChlKTt2YXIgbj17X19wcm90b19fOm51bGx9LG89T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIgdSBpbiBlKWlmKHUhPT1cImRlZmF1bHRcIiYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdSkpe3ZhciBpPW8/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHUpOm51bGw7aSYmKGkuZ2V0fHxpLnNldCk/T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdSxpKTpuW3VdPWVbdV19cmV0dXJuIG4uZGVmYXVsdD1lLHImJnIuc2V0KGUsbiksbn12YXIganQ7ZnVuY3Rpb24gaW8oZSl7aWYoZSl7dmFyIHQ7cmV0dXJuKHQ9anQpIT1udWxsfHwoanQ9bmV3IG1uLmRlZmF1bHQuY29uc3RydWN0b3Ioe2VuYWJsZWQ6ITAsbGV2ZWw6MX0pKSxqdH1yZXR1cm4gbW4uZGVmYXVsdH12YXIgRW49ITE7ZnVuY3Rpb24gc28oZSl7cmV0dXJue2d1dHRlcjplLmdyZXksbWFya2VyOmUucmVkLmJvbGQsbWVzc2FnZTplLnJlZC5ib2xkfX12YXIgQ249L1xcclxcbnxbXFxuXFxyXFx1MjAyOFxcdTIwMjldLztmdW5jdGlvbiBEbyhlLHQscil7bGV0IG49T2JqZWN0LmFzc2lnbih7Y29sdW1uOjAsbGluZTotMX0sZS5zdGFydCksbz1PYmplY3QuYXNzaWduKHt9LG4sZS5lbmQpLHtsaW5lc0Fib3ZlOnU9MixsaW5lc0JlbG93Omk9M309cnx8e30scz1uLmxpbmUsRD1uLmNvbHVtbixhPW8ubGluZSxjPW8uY29sdW1uLGQ9TWF0aC5tYXgocy0odSsxKSwwKSxmPU1hdGgubWluKHQubGVuZ3RoLGEraSk7cz09PS0xJiYoZD0wKSxhPT09LTEmJihmPXQubGVuZ3RoKTtsZXQgcD1hLXMsbD17fTtpZihwKWZvcihsZXQgRj0wO0Y8PXA7RisrKXtsZXQgbT1GK3M7aWYoIUQpbFttXT0hMDtlbHNlIGlmKEY9PT0wKXtsZXQgRT10W20tMV0ubGVuZ3RoO2xbbV09W0QsRS1EKzFdfWVsc2UgaWYoRj09PXApbFttXT1bMCxjXTtlbHNle2xldCBFPXRbbS1GXS5sZW5ndGg7bFttXT1bMCxFXX19ZWxzZSBEPT09Yz9EP2xbc109W0QsMF06bFtzXT0hMDpsW3NdPVtELGMtRF07cmV0dXJue3N0YXJ0OmQsZW5kOmYsbWFya2VyTGluZXM6bH19ZnVuY3Rpb24gZ24oZSx0LHI9e30pe2xldCBuPShyLmhpZ2hsaWdodENvZGV8fHIuZm9yY2VDb2xvcikmJigwLGRuLnNob3VsZEhpZ2hsaWdodCkociksbz1pbyhyLmZvcmNlQ29sb3IpLHU9c28obyksaT0oRixtKT0+bj9GKG0pOm0scz1lLnNwbGl0KENuKSx7c3RhcnQ6RCxlbmQ6YSxtYXJrZXJMaW5lczpjfT1Ebyh0LHMsciksZD10LnN0YXJ0JiZ0eXBlb2YgdC5zdGFydC5jb2x1bW49PVwibnVtYmVyXCIsZj1TdHJpbmcoYSkubGVuZ3RoLGw9KG4/KDAsZG4uZGVmYXVsdCkoZSxyKTplKS5zcGxpdChDbixhKS5zbGljZShELGEpLm1hcCgoRixtKT0+e2xldCBFPUQrMSttLGc9YCAke2AgJHtFfWAuc2xpY2UoLWYpfSB8YCxoPWNbRV0sQj0hY1tFKzFdO2lmKGgpe2xldCBaPVwiXCI7aWYoQXJyYXkuaXNBcnJheShoKSl7bGV0ICQ9Ri5zbGljZSgwLE1hdGgubWF4KGhbMF0tMSwwKSkucmVwbGFjZSgvW15cXHRdL2csXCIgXCIpLFE9aFsxXXx8MTtaPVtgXG4gYCxpKHUuZ3V0dGVyLGcucmVwbGFjZSgvXFxkL2csXCIgXCIpKSxcIiBcIiwkLGkodS5tYXJrZXIsXCJeXCIpLnJlcGVhdChRKV0uam9pbihcIlwiKSxCJiZyLm1lc3NhZ2UmJihaKz1cIiBcIitpKHUubWVzc2FnZSxyLm1lc3NhZ2UpKX1yZXR1cm5baSh1Lm1hcmtlcixcIj5cIiksaSh1Lmd1dHRlcixnKSxGLmxlbmd0aD4wP2AgJHtGfWA6XCJcIixaXS5qb2luKFwiXCIpfWVsc2UgcmV0dXJuYCAke2kodS5ndXR0ZXIsZyl9JHtGLmxlbmd0aD4wP2AgJHtGfWA6XCJcIn1gfSkuam9pbihgXG5gKTtyZXR1cm4gci5tZXNzYWdlJiYhZCYmKGw9YCR7XCIgXCIucmVwZWF0KGYrMSl9JHtyLm1lc3NhZ2V9XG4ke2x9YCksbj9vLnJlc2V0KGwpOmx9ZnVuY3Rpb24gYW8oZSx0LHIsbj17fSl7aWYoIUVuKXtFbj0hMDtsZXQgdT1cIlBhc3NpbmcgbGluZU51bWJlciBhbmQgY29sTnVtYmVyIGlzIGRlcHJlY2F0ZWQgdG8gQGJhYmVsL2NvZGUtZnJhbWUuIFBsZWFzZSB1c2UgYGNvZGVGcmFtZUNvbHVtbnNgLlwiO3tsZXQgaT1uZXcgRXJyb3IodSk7aS5uYW1lPVwiRGVwcmVjYXRpb25XYXJuaW5nXCIsY29uc29sZS53YXJuKG5ldyBFcnJvcih1KSl9fXJldHVybiByPU1hdGgubWF4KHIsMCksZ24oZSx7c3RhcnQ6e2NvbHVtbjpyLGxpbmU6dH19LG4pfX0pO3ZhciB0cj17fTtXZSh0cix7X19kZWJ1ZzooKT0+cmksY2hlY2s6KCk9PmVpLGRvYzooKT0+ZXIsZm9ybWF0OigpPT5jdSxmb3JtYXRXaXRoQ3Vyc29yOigpPT5hdSxnZXRTdXBwb3J0SW5mbzooKT0+dGksdXRpbDooKT0+UXQsdmVyc2lvbjooKT0+RHV9KTt2YXIgaHU9KGUsdCxyLG4pPT57aWYoIShlJiZ0PT1udWxsKSlyZXR1cm4gdC5yZXBsYWNlQWxsP3QucmVwbGFjZUFsbChyLG4pOnIuZ2xvYmFsP3QucmVwbGFjZShyLG4pOnQuc3BsaXQocikuam9pbihuKX0sZWU9aHU7dmFyIEtuPWhlKGlyKCksMSk7dmFyIE09XCJzdHJpbmdcIixqPVwiYXJyYXlcIixXPVwiY3Vyc29yXCIsVD1cImluZGVudFwiLFM9XCJhbGlnblwiLHY9XCJ0cmltXCIsXz1cImdyb3VwXCIsaz1cImZpbGxcIix4PVwiaWYtYnJlYWtcIixQPVwiaW5kZW50LWlmLWJyZWFrXCIsTD1cImxpbmUtc3VmZml4XCIsST1cImxpbmUtc3VmZml4LWJvdW5kYXJ5XCIsQT1cImxpbmVcIixPPVwibGFiZWxcIixiPVwiYnJlYWstcGFyZW50XCIsVWU9bmV3IFNldChbVyxULFMsdixfLGsseCxQLEwsSSxBLE8sYl0pO2Z1bmN0aW9uIHh1KGUpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybiBNO2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGo7aWYoIWUpcmV0dXJuO2xldHt0eXBlOnR9PWU7aWYoVWUuaGFzKHQpKXJldHVybiB0fXZhciBVPXh1O3ZhciBrdT1lPT5uZXcgSW50bC5MaXN0Rm9ybWF0KFwiZW4tVVNcIix7dHlwZTpcImRpc2p1bmN0aW9uXCJ9KS5mb3JtYXQoZSk7ZnVuY3Rpb24gYnUoZSl7bGV0IHQ9ZT09PW51bGw/XCJudWxsXCI6dHlwZW9mIGU7aWYodCE9PVwic3RyaW5nXCImJnQhPT1cIm9iamVjdFwiKXJldHVybmBVbmV4cGVjdGVkIGRvYyAnJHt0fScsIFxuRXhwZWN0ZWQgaXQgdG8gYmUgJ3N0cmluZycgb3IgJ29iamVjdCcuYDtpZihVKGUpKXRocm93IG5ldyBFcnJvcihcImRvYyBpcyB2YWxpZC5cIik7bGV0IHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO2lmKHIhPT1cIltvYmplY3QgT2JqZWN0XVwiKXJldHVybmBVbmV4cGVjdGVkIGRvYyAnJHtyfScuYDtsZXQgbj1rdShbLi4uVWVdLm1hcChvPT5gJyR7b30nYCkpO3JldHVybmBVbmV4cGVjdGVkIGRvYy50eXBlICcke2UudHlwZX0nLlxuRXhwZWN0ZWQgaXQgdG8gYmUgJHtufS5gfXZhciB5dD1jbGFzcyBleHRlbmRzIEVycm9ye25hbWU9XCJJbnZhbGlkRG9jRXJyb3JcIjtjb25zdHJ1Y3Rvcih0KXtzdXBlcihidSh0KSksdGhpcy5kb2M9dH19LHE9eXQ7dmFyIHNyPXt9O2Z1bmN0aW9uIHd1KGUsdCxyLG4pe2xldCBvPVtlXTtmb3IoO28ubGVuZ3RoPjA7KXtsZXQgdT1vLnBvcCgpO2lmKHU9PT1zcil7cihvLnBvcCgpKTtjb250aW51ZX1yJiZvLnB1c2godSxzcik7bGV0IGk9VSh1KTtpZighaSl0aHJvdyBuZXcgcSh1KTtpZigodD09bnVsbD92b2lkIDA6dCh1KSkhPT0hMSlzd2l0Y2goaSl7Y2FzZSBqOmNhc2Ugazp7bGV0IHM9aT09PWo/dTp1LnBhcnRzO2ZvcihsZXQgRD1zLmxlbmd0aCxhPUQtMTthPj0wOy0tYSlvLnB1c2goc1thXSk7YnJlYWt9Y2FzZSB4Om8ucHVzaCh1LmZsYXRDb250ZW50cyx1LmJyZWFrQ29udGVudHMpO2JyZWFrO2Nhc2UgXzppZihuJiZ1LmV4cGFuZGVkU3RhdGVzKWZvcihsZXQgcz11LmV4cGFuZGVkU3RhdGVzLmxlbmd0aCxEPXMtMTtEPj0wOy0tRClvLnB1c2godS5leHBhbmRlZFN0YXRlc1tEXSk7ZWxzZSBvLnB1c2godS5jb250ZW50cyk7YnJlYWs7Y2FzZSBTOmNhc2UgVDpjYXNlIFA6Y2FzZSBPOmNhc2UgTDpvLnB1c2godS5jb250ZW50cyk7YnJlYWs7Y2FzZSBNOmNhc2UgVzpjYXNlIHY6Y2FzZSBJOmNhc2UgQTpjYXNlIGI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgcSh1KX19fXZhciBBZT13dTt2YXIgRHI9KCk9Pnt9LHo9RHIsemU9RHI7ZnVuY3Rpb24gaWUoZSl7cmV0dXJuIHooZSkse3R5cGU6VCxjb250ZW50czplfX1mdW5jdGlvbiBvZShlLHQpe3JldHVybiB6KHQpLHt0eXBlOlMsY29udGVudHM6dCxuOmV9fWZ1bmN0aW9uIEF0KGUsdD17fSl7cmV0dXJuIHooZSksemUodC5leHBhbmRlZFN0YXRlcywhMCkse3R5cGU6XyxpZDp0LmlkLGNvbnRlbnRzOmUsYnJlYWs6ISF0LnNob3VsZEJyZWFrLGV4cGFuZGVkU3RhdGVzOnQuZXhwYW5kZWRTdGF0ZXN9fWZ1bmN0aW9uIGFyKGUpe3JldHVybiBvZShOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksZSl9ZnVuY3Rpb24gY3IoZSl7cmV0dXJuIG9lKHt0eXBlOlwicm9vdFwifSxlKX1mdW5jdGlvbiBscihlKXtyZXR1cm4gb2UoLTEsZSl9ZnVuY3Rpb24gZnIoZSx0KXtyZXR1cm4gQXQoZVswXSx7Li4udCxleHBhbmRlZFN0YXRlczplfSl9ZnVuY3Rpb24gR2UoZSl7cmV0dXJuIHplKGUpLHt0eXBlOmsscGFydHM6ZX19ZnVuY3Rpb24gRnIoZSx0PVwiXCIscj17fSl7cmV0dXJuIHooZSksdCE9PVwiXCImJnoodCkse3R5cGU6eCxicmVha0NvbnRlbnRzOmUsZmxhdENvbnRlbnRzOnQsZ3JvdXBJZDpyLmdyb3VwSWR9fWZ1bmN0aW9uIHByKGUsdCl7cmV0dXJuIHooZSkse3R5cGU6UCxjb250ZW50czplLGdyb3VwSWQ6dC5ncm91cElkLG5lZ2F0ZTp0Lm5lZ2F0ZX19ZnVuY3Rpb24gQmUoZSl7cmV0dXJuIHooZSkse3R5cGU6TCxjb250ZW50czplfX12YXIgZHI9e3R5cGU6SX0sbGU9e3R5cGU6Yn0sbXI9e3R5cGU6dn0sX2U9e3R5cGU6QSxoYXJkOiEwfSxCdD17dHlwZTpBLGhhcmQ6ITAsbGl0ZXJhbDohMH0sS2U9e3R5cGU6QX0sRXI9e3R5cGU6QSxzb2Z0OiEwfSxHPVtfZSxsZV0sSGU9W0J0LGxlXSx4ZT17dHlwZTpXfTtmdW5jdGlvbiBrZShlLHQpe3ooZSksemUodCk7bGV0IHI9W107Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspbiE9PTAmJnIucHVzaChlKSxyLnB1c2godFtuXSk7cmV0dXJuIHJ9ZnVuY3Rpb24gcWUoZSx0LHIpe3ooZSk7bGV0IG49ZTtpZih0PjApe2ZvcihsZXQgbz0wO288TWF0aC5mbG9vcih0L3IpOysrbyluPWllKG4pO249b2UodCVyLG4pLG49b2UoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLG4pfXJldHVybiBufWZ1bmN0aW9uIENyKGUsdCl7cmV0dXJuIHoodCksZT97dHlwZTpPLGxhYmVsOmUsY29udGVudHM6dH06dH12YXIgT3U9KGUsdCxyKT0+e2lmKCEoZSYmdD09bnVsbCkpcmV0dXJuIEFycmF5LmlzQXJyYXkodCl8fHR5cGVvZiB0PT1cInN0cmluZ1wiP3RbcjwwP3QubGVuZ3RoK3I6cl06dC5hdChyKX0seT1PdTtmdW5jdGlvbiBocihlKXtsZXQgdD1lLmluZGV4T2YoXCJcXHJcIik7cmV0dXJuIHQ+PTA/ZS5jaGFyQXQodCsxKT09PWBcbmA/XCJjcmxmXCI6XCJjclwiOlwibGZcIn1mdW5jdGlvbiBiZShlKXtzd2l0Y2goZSl7Y2FzZVwiY3JcIjpyZXR1cm5cIlxcclwiO2Nhc2VcImNybGZcIjpyZXR1cm5gXFxyXG5gO2RlZmF1bHQ6cmV0dXJuYFxuYH19ZnVuY3Rpb24gX3QoZSx0KXtsZXQgcjtzd2l0Y2godCl7Y2FzZWBcbmA6cj0vXFxuL2c7YnJlYWs7Y2FzZVwiXFxyXCI6cj0vXFxyL2c7YnJlYWs7Y2FzZWBcXHJcbmA6cj0vXFxyXFxuL2c7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgXCJlb2xcIiAke0pTT04uc3RyaW5naWZ5KHQpfS5gKX1sZXQgbj1lLm1hdGNoKHIpO3JldHVybiBuP24ubGVuZ3RoOjB9ZnVuY3Rpb24gZ3IoZSl7cmV0dXJuIGVlKCExLGUsL1xcclxcbj8vZyxgXG5gKX12YXIgeXI9KCk9Pi9bIyowLTldXFx1RkUwRj9cXHUyMEUzfFtcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRUQtXFx1MjNFRlxcdTIzRjFcXHUyM0YyXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCXFx1MjVGQ1xcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTJcXHUyNjk0LVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBN1xcdTI2QUFcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RTlcXHUyNkYwLVxcdTI2RjVcXHUyNkY3XFx1MjZGOFxcdTI2RkFcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc1N1xcdTI3NjNcXHUyN0ExXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XVxcdUZFMEY/fFtcXHUyNjFEXFx1MjcwQ1xcdTI3MERdKD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1MjcwQVxcdTI3MEJdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI2OTNcXHUyNkExXFx1MjZBQlxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkZEXFx1MjcwNVxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkI1MF18XFx1MjZEM1xcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E1KT98XFx1MjZGOSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1Mjc2NFxcdUZFMEY/KD86XFx1MjAwRCg/OlxcdUQ4M0RcXHVERDI1fFxcdUQ4M0VcXHVERTc5KSk/fFxcdUQ4M0MoPzpbXFx1REMwNFxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERTAyXFx1REUzN1xcdURGMjFcXHVERjI0LVxcdURGMkNcXHVERjM2XFx1REY3RFxcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RVxcdURGOUZcXHVERkNEXFx1REZDRVxcdURGRDQtXFx1REZERlxcdURGRjVcXHVERkY3XVxcdUZFMEY/fFtcXHVERjg1XFx1REZDMlxcdURGQzddKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjQzXFx1REY0NS1cXHVERjRBXFx1REY0Qy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjVcXHVEREY3XFx1RERGQS1cXHVEREZGXXxcXHVEREU5XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXXxcXHVEREVBXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRFxcdURERjctXFx1RERGQV18XFx1RERFQlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XXxcXHVEREVDXFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXXxcXHVEREVEXFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdfFxcdURERUVcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV18XFx1RERFRlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV18XFx1RERGMFxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERjFcXHVEODNDW1xcdURERTYtXFx1RERFOFxcdURERUVcXHVEREYwXFx1RERGNy1cXHVEREZCXFx1RERGRV18XFx1RERGMlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl18XFx1RERGM1xcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXXxcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RERGNVxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXXxcXHVEREY2XFx1RDgzQ1xcdURERTZ8XFx1RERGN1xcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdfFxcdURERjhcXHVEODNDW1xcdURERTYtXFx1RERFQVxcdURERUMtXFx1RERGNFxcdURERjctXFx1RERGOVxcdURERkJcXHVEREZELVxcdURERkZdfFxcdURERjlcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXXxcXHVEREZBXFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXXxcXHVEREZCXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRVxcdURERjNcXHVEREZBXXxcXHVEREZDXFx1RDgzQ1tcXHVEREVCXFx1RERGOF18XFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdURERkVcXHVEODNDW1xcdURERUFcXHVEREY5XXxcXHVEREZGXFx1RDgzQ1tcXHVEREU2XFx1RERGMlxcdURERkNdfFxcdURGNDQoPzpcXHUyMDBEXFx1RDgzRFxcdURGRUIpP3xcXHVERjRCKD86XFx1MjAwRFxcdUQ4M0RcXHVERkU5KT98XFx1REZDMyg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT98XFx1REZGM1xcdUZFMEY/KD86XFx1MjAwRCg/OlxcdTI2QTdcXHVGRTBGP3xcXHVEODNDXFx1REYwOCkpP3xcXHVERkY0KD86XFx1MjAwRFxcdTI2MjBcXHVGRTBGP3xcXHVEQjQwXFx1REM2N1xcdURCNDBcXHVEQzYyXFx1REI0MCg/OlxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3fFxcdURDNzNcXHVEQjQwXFx1REM2M1xcdURCNDBcXHVEQzc0fFxcdURDNzdcXHVEQjQwXFx1REM2Q1xcdURCNDBcXHVEQzczKVxcdURCNDBcXHVEQzdGKT8pfFxcdUQ4M0QoPzpbXFx1REMzRlxcdURDRkRcXHVERDQ5XFx1REQ0QVxcdURENkZcXHVERDcwXFx1REQ3M1xcdURENzYtXFx1REQ3OVxcdUREODdcXHVERDhBLVxcdUREOERcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQVxcdURFQ0JcXHVERUNELVxcdURFQ0ZcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVGMFxcdURFRjNdXFx1RkUwRj98W1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDOEZcXHVEQzkxXFx1RENBQVxcdUREN0FcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURDNkVcXHVEQzcwXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0XFx1REVCNV0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REQ3NFxcdUREOTBdKD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REMwMC1cXHVEQzA3XFx1REMwOS1cXHVEQzE0XFx1REMxNi1cXHVEQzI1XFx1REMyNy1cXHVEQzNBXFx1REMzQy1cXHVEQzNFXFx1REM0MFxcdURDNDRcXHVEQzQ1XFx1REM1MS1cXHVEQzY1XFx1REM2QVxcdURDNzktXFx1REM3QlxcdURDN0QtXFx1REM4MFxcdURDODRcXHVEQzg4LVxcdURDOEVcXHVEQzkwXFx1REM5Mi1cXHVEQ0E5XFx1RENBQi1cXHVEQ0ZDXFx1RENGRi1cXHVERDNEXFx1REQ0Qi1cXHVERDRFXFx1REQ1MC1cXHVERDY3XFx1RERBNFxcdURERkItXFx1REUyRFxcdURFMkYtXFx1REUzNFxcdURFMzctXFx1REU0MVxcdURFNDNcXHVERTQ0XFx1REU0OC1cXHVERTRBXFx1REU4MC1cXHVERUEyXFx1REVBNC1cXHVERUIzXFx1REVCNy1cXHVERUJGXFx1REVDMS1cXHVERUM1XFx1REVEMC1cXHVERUQyXFx1REVENS1cXHVERUQ3XFx1REVEQy1cXHVERURGXFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkNcXHVERkUwLVxcdURGRUJcXHVERkYwXXxcXHVEQzA4KD86XFx1MjAwRFxcdTJCMUIpP3xcXHVEQzE1KD86XFx1MjAwRFxcdUQ4M0VcXHVEREJBKT98XFx1REMyNig/OlxcdTIwMEQoPzpcXHUyQjFCfFxcdUQ4M0RcXHVERDI1KSk/fFxcdURDM0IoPzpcXHUyMDBEXFx1Mjc0NFxcdUZFMEY/KT98XFx1REM0MVxcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEREU4XFx1RkUwRj8pP3xcXHVEQzY4KD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjh8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV1cXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pfFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXSkpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSkpKT98XFx1REZGRCg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pKSk/fFxcdURGRkUoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdKSkpPykpP3xcXHVEQzY5KD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1tcXHVEQzY4XFx1REM2OV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRCg/OltcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT98XFx1REM2OVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPykpfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXSkpfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pKSk/fFxcdURGRkUoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNkYoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1REQ3NSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1REUyRSg/OlxcdTIwMERcXHVEODNEXFx1RENBOCk/fFxcdURFMzUoPzpcXHUyMDBEXFx1RDgzRFxcdURDQUIpP3xcXHVERTM2KD86XFx1MjAwRFxcdUQ4M0NcXHVERjJCXFx1RkUwRj8pP3xcXHVERTQyKD86XFx1MjAwRFtcXHUyMTk0XFx1MjE5NV1cXHVGRTBGPyk/fFxcdURFQjYoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMEQoPzpbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98XFx1MjdBMVxcdUZFMEY/KSk/KXxcXHVEODNFKD86W1xcdUREMENcXHVERDBGXFx1REQxOC1cXHVERDFGXFx1REQzMC1cXHVERDM0XFx1REQzNlxcdURENzdcXHVEREI1XFx1RERCNlxcdUREQkJcXHVEREQyXFx1REREM1xcdURERDVcXHVERUMzLVxcdURFQzVcXHVERUYwXFx1REVGMi1cXHVERUY4XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVERDI2XFx1REQzNVxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENEXFx1RERDRlxcdURERDRcXHVEREQ2LVxcdURERERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98W1xcdUREREVcXHVERERGXSg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1REQwRFxcdUREMEVcXHVERDEwLVxcdUREMTdcXHVERDIwLVxcdUREMjVcXHVERDI3LVxcdUREMkZcXHVERDNBXFx1REQzRi1cXHVERDQ1XFx1REQ0Ny1cXHVERDc2XFx1REQ3OC1cXHVEREI0XFx1RERCN1xcdUREQkFcXHVEREJDLVxcdUREQ0NcXHVEREQwXFx1RERFMC1cXHVEREZGXFx1REU3MC1cXHVERTdDXFx1REU4MC1cXHVERTg4XFx1REU5MC1cXHVERUJEXFx1REVCRi1cXHVERUMyXFx1REVDRS1cXHVERURCXFx1REVFMC1cXHVERUU4XXxcXHVERDNDKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGP3xcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEREQxXFx1MjAwRFxcdUQ4M0VcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT98XFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/KSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KS9nO2Z1bmN0aW9uIEFyKGUpe3JldHVybiBlPT09MTIyODh8fGU+PTY1MjgxJiZlPD02NTM3Nnx8ZT49NjU1MDQmJmU8PTY1NTEwfWZ1bmN0aW9uIEJyKGUpe3JldHVybiBlPj00MzUyJiZlPD00NDQ3fHxlPT09ODk4Nnx8ZT09PTg5ODd8fGU9PT05MDAxfHxlPT09OTAwMnx8ZT49OTE5MyYmZTw9OTE5Nnx8ZT09PTkyMDB8fGU9PT05MjAzfHxlPT09OTcyNXx8ZT09PTk3MjZ8fGU9PT05NzQ4fHxlPT09OTc0OXx8ZT49OTgwMCYmZTw9OTgxMXx8ZT09PTk4NTV8fGU9PT05ODc1fHxlPT09OTg4OXx8ZT09PTk4OTh8fGU9PT05ODk5fHxlPT09OTkxN3x8ZT09PTk5MTh8fGU9PT05OTI0fHxlPT09OTkyNXx8ZT09PTk5MzR8fGU9PT05OTQwfHxlPT09OTk2Mnx8ZT09PTk5NzB8fGU9PT05OTcxfHxlPT09OTk3M3x8ZT09PTk5Nzh8fGU9PT05OTgxfHxlPT09OTk4OXx8ZT09PTk5OTR8fGU9PT05OTk1fHxlPT09MTAwMjR8fGU9PT0xMDA2MHx8ZT09PTEwMDYyfHxlPj0xMDA2NyYmZTw9MTAwNjl8fGU9PT0xMDA3MXx8ZT49MTAxMzMmJmU8PTEwMTM1fHxlPT09MTAxNjB8fGU9PT0xMDE3NXx8ZT09PTExMDM1fHxlPT09MTEwMzZ8fGU9PT0xMTA4OHx8ZT09PTExMDkzfHxlPj0xMTkwNCYmZTw9MTE5Mjl8fGU+PTExOTMxJiZlPD0xMjAxOXx8ZT49MTIwMzImJmU8PTEyMjQ1fHxlPj0xMjI3MiYmZTw9MTIyODd8fGU+PTEyMjg5JiZlPD0xMjM1MHx8ZT49MTIzNTMmJmU8PTEyNDM4fHxlPj0xMjQ0MSYmZTw9MTI1NDN8fGU+PTEyNTQ5JiZlPD0xMjU5MXx8ZT49MTI1OTMmJmU8PTEyNjg2fHxlPj0xMjY4OCYmZTw9MTI3NzF8fGU+PTEyNzgzJiZlPD0xMjgzMHx8ZT49MTI4MzImJmU8PTEyODcxfHxlPj0xMjg4MCYmZTw9MTk5MDN8fGU+PTE5OTY4JiZlPD00MjEyNHx8ZT49NDIxMjgmJmU8PTQyMTgyfHxlPj00MzM2MCYmZTw9NDMzODh8fGU+PTQ0MDMyJiZlPD01NTIwM3x8ZT49NjM3NDQmJmU8PTY0MjU1fHxlPj02NTA0MCYmZTw9NjUwNDl8fGU+PTY1MDcyJiZlPD02NTEwNnx8ZT49NjUxMDgmJmU8PTY1MTI2fHxlPj02NTEyOCYmZTw9NjUxMzF8fGU+PTk0MTc2JiZlPD05NDE4MHx8ZT09PTk0MTkyfHxlPT09OTQxOTN8fGU+PTk0MjA4JiZlPD0xMDAzNDN8fGU+PTEwMDM1MiYmZTw9MTAxNTg5fHxlPj0xMDE2MzImJmU8PTEwMTY0MHx8ZT49MTEwNTc2JiZlPD0xMTA1Nzl8fGU+PTExMDU4MSYmZTw9MTEwNTg3fHxlPT09MTEwNTg5fHxlPT09MTEwNTkwfHxlPj0xMTA1OTImJmU8PTExMDg4Mnx8ZT09PTExMDg5OHx8ZT49MTEwOTI4JiZlPD0xMTA5MzB8fGU9PT0xMTA5MzN8fGU+PTExMDk0OCYmZTw9MTEwOTUxfHxlPj0xMTA5NjAmJmU8PTExMTM1NXx8ZT09PTEyNjk4MHx8ZT09PTEyNzE4M3x8ZT09PTEyNzM3NHx8ZT49MTI3Mzc3JiZlPD0xMjczODZ8fGU+PTEyNzQ4OCYmZTw9MTI3NDkwfHxlPj0xMjc1MDQmJmU8PTEyNzU0N3x8ZT49MTI3NTUyJiZlPD0xMjc1NjB8fGU9PT0xMjc1Njh8fGU9PT0xMjc1Njl8fGU+PTEyNzU4NCYmZTw9MTI3NTg5fHxlPj0xMjc3NDQmJmU8PTEyNzc3Nnx8ZT49MTI3Nzg5JiZlPD0xMjc3OTd8fGU+PTEyNzc5OSYmZTw9MTI3ODY4fHxlPj0xMjc4NzAmJmU8PTEyNzg5MXx8ZT49MTI3OTA0JiZlPD0xMjc5NDZ8fGU+PTEyNzk1MSYmZTw9MTI3OTU1fHxlPj0xMjc5NjgmJmU8PTEyNzk4NHx8ZT09PTEyNzk4OHx8ZT49MTI3OTkyJiZlPD0xMjgwNjJ8fGU9PT0xMjgwNjR8fGU+PTEyODA2NiYmZTw9MTI4MjUyfHxlPj0xMjgyNTUmJmU8PTEyODMxN3x8ZT49MTI4MzMxJiZlPD0xMjgzMzR8fGU+PTEyODMzNiYmZTw9MTI4MzU5fHxlPT09MTI4Mzc4fHxlPT09MTI4NDA1fHxlPT09MTI4NDA2fHxlPT09MTI4NDIwfHxlPj0xMjg1MDcmJmU8PTEyODU5MXx8ZT49MTI4NjQwJiZlPD0xMjg3MDl8fGU9PT0xMjg3MTZ8fGU+PTEyODcyMCYmZTw9MTI4NzIyfHxlPj0xMjg3MjUmJmU8PTEyODcyN3x8ZT49MTI4NzMyJiZlPD0xMjg3MzV8fGU9PT0xMjg3NDd8fGU9PT0xMjg3NDh8fGU+PTEyODc1NiYmZTw9MTI4NzY0fHxlPj0xMjg5OTImJmU8PTEyOTAwM3x8ZT09PTEyOTAwOHx8ZT49MTI5MjkyJiZlPD0xMjkzMzh8fGU+PTEyOTM0MCYmZTw9MTI5MzQ5fHxlPj0xMjkzNTEmJmU8PTEyOTUzNXx8ZT49MTI5NjQ4JiZlPD0xMjk2NjB8fGU+PTEyOTY2NCYmZTw9MTI5NjcyfHxlPj0xMjk2ODAmJmU8PTEyOTcyNXx8ZT49MTI5NzI3JiZlPD0xMjk3MzN8fGU+PTEyOTc0MiYmZTw9MTI5NzU1fHxlPj0xMjk3NjAmJmU8PTEyOTc2OHx8ZT49MTI5Nzc2JiZlPD0xMjk3ODR8fGU+PTEzMTA3MiYmZTw9MTk2NjA1fHxlPj0xOTY2MDgmJmU8PTI2MjE0MX12YXIgX3I9ZT0+IShBcihlKXx8QnIoZSkpO3ZhciBOdT0vW15cXHgyMC1cXHg3Rl0vO2Z1bmN0aW9uIFR1KGUpe2lmKCFlKXJldHVybiAwO2lmKCFOdS50ZXN0KGUpKXJldHVybiBlLmxlbmd0aDtlPWUucmVwbGFjZSh5cigpLFwiICBcIik7bGV0IHQ9MDtmb3IobGV0IHIgb2YgZSl7bGV0IG49ci5jb2RlUG9pbnRBdCgwKTtuPD0zMXx8bj49MTI3JiZuPD0xNTl8fG4+PTc2OCYmbjw9ODc5fHwodCs9X3Iobik/MToyKX1yZXR1cm4gdH12YXIgd2U9VHU7dmFyIGJyPWU9PntpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlO2lmKGUudHlwZSE9PWspdGhyb3cgbmV3IEVycm9yKGBFeHBlY3QgZG9jIHRvIGJlICdhcnJheScgb3IgJyR7a30nLmApO3JldHVybiBlLnBhcnRzfTtmdW5jdGlvbiBOZShlLHQpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybiB0KGUpO2xldCByPW5ldyBNYXA7cmV0dXJuIG4oZSk7ZnVuY3Rpb24gbih1KXtpZihyLmhhcyh1KSlyZXR1cm4gci5nZXQodSk7bGV0IGk9byh1KTtyZXR1cm4gci5zZXQodSxpKSxpfWZ1bmN0aW9uIG8odSl7c3dpdGNoKFUodSkpe2Nhc2UgajpyZXR1cm4gdCh1Lm1hcChuKSk7Y2FzZSBrOnJldHVybiB0KHsuLi51LHBhcnRzOnUucGFydHMubWFwKG4pfSk7Y2FzZSB4OnJldHVybiB0KHsuLi51LGJyZWFrQ29udGVudHM6bih1LmJyZWFrQ29udGVudHMpLGZsYXRDb250ZW50czpuKHUuZmxhdENvbnRlbnRzKX0pO2Nhc2UgXzp7bGV0e2V4cGFuZGVkU3RhdGVzOmksY29udGVudHM6c309dTtyZXR1cm4gaT8oaT1pLm1hcChuKSxzPWlbMF0pOnM9bihzKSx0KHsuLi51LGNvbnRlbnRzOnMsZXhwYW5kZWRTdGF0ZXM6aX0pfWNhc2UgUzpjYXNlIFQ6Y2FzZSBQOmNhc2UgTzpjYXNlIEw6cmV0dXJuIHQoey4uLnUsY29udGVudHM6bih1LmNvbnRlbnRzKX0pO2Nhc2UgTTpjYXNlIFc6Y2FzZSB2OmNhc2UgSTpjYXNlIEE6Y2FzZSBiOnJldHVybiB0KHUpO2RlZmF1bHQ6dGhyb3cgbmV3IHEodSl9fX1mdW5jdGlvbiBKZShlLHQscil7bGV0IG49cixvPSExO2Z1bmN0aW9uIHUoaSl7aWYobylyZXR1cm4hMTtsZXQgcz10KGkpO3MhPT12b2lkIDAmJihvPSEwLG49cyl9cmV0dXJuIEFlKGUsdSksbn1mdW5jdGlvbiBTdShlKXtpZihlLnR5cGU9PT1fJiZlLmJyZWFrfHxlLnR5cGU9PT1BJiZlLmhhcmR8fGUudHlwZT09PWIpcmV0dXJuITB9ZnVuY3Rpb24gd3IoZSl7cmV0dXJuIEplKGUsU3UsITEpfWZ1bmN0aW9uIHhyKGUpe2lmKGUubGVuZ3RoPjApe2xldCB0PXkoITEsZSwtMSk7IXQuZXhwYW5kZWRTdGF0ZXMmJiF0LmJyZWFrJiYodC5icmVhaz1cInByb3BhZ2F0ZWRcIil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gT3IoZSl7bGV0IHQ9bmV3IFNldCxyPVtdO2Z1bmN0aW9uIG4odSl7aWYodS50eXBlPT09YiYmeHIociksdS50eXBlPT09Xyl7aWYoci5wdXNoKHUpLHQuaGFzKHUpKXJldHVybiExO3QuYWRkKHUpfX1mdW5jdGlvbiBvKHUpe3UudHlwZT09PV8mJnIucG9wKCkuYnJlYWsmJnhyKHIpfUFlKGUsbixvLCEwKX1mdW5jdGlvbiB2dShlKXtyZXR1cm4gZS50eXBlPT09QSYmIWUuaGFyZD9lLnNvZnQ/XCJcIjpcIiBcIjplLnR5cGU9PT14P2UuZmxhdENvbnRlbnRzOmV9ZnVuY3Rpb24gTnIoZSl7cmV0dXJuIE5lKGUsdnUpfWZ1bmN0aW9uIGtyKGUpe2ZvcihlPVsuLi5lXTtlLmxlbmd0aD49MiYmeSghMSxlLC0yKS50eXBlPT09QSYmeSghMSxlLC0xKS50eXBlPT09YjspZS5sZW5ndGgtPTI7aWYoZS5sZW5ndGg+MCl7bGV0IHQ9T2UoeSghMSxlLC0xKSk7ZVtlLmxlbmd0aC0xXT10fXJldHVybiBlfWZ1bmN0aW9uIE9lKGUpe3N3aXRjaChVKGUpKXtjYXNlIFM6Y2FzZSBUOmNhc2UgUDpjYXNlIF86Y2FzZSBMOmNhc2UgTzp7bGV0IHQ9T2UoZS5jb250ZW50cyk7cmV0dXJuey4uLmUsY29udGVudHM6dH19Y2FzZSB4OnJldHVybnsuLi5lLGJyZWFrQ29udGVudHM6T2UoZS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6T2UoZS5mbGF0Q29udGVudHMpfTtjYXNlIGs6cmV0dXJuey4uLmUscGFydHM6a3IoZS5wYXJ0cyl9O2Nhc2UgajpyZXR1cm4ga3IoZSk7Y2FzZSBNOnJldHVybiBlLnJlcGxhY2UoL1tcXG5cXHJdKiQvLFwiXCIpO2Nhc2UgVzpjYXNlIHY6Y2FzZSBJOmNhc2UgQTpjYXNlIGI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgcShlKX1yZXR1cm4gZX1mdW5jdGlvbiBYZShlKXtyZXR1cm4gT2UoTHUoZSkpfWZ1bmN0aW9uIFB1KGUpe3N3aXRjaChVKGUpKXtjYXNlIGs6aWYoZS5wYXJ0cy5ldmVyeSh0PT50PT09XCJcIikpcmV0dXJuXCJcIjticmVhaztjYXNlIF86aWYoIWUuY29udGVudHMmJiFlLmlkJiYhZS5icmVhayYmIWUuZXhwYW5kZWRTdGF0ZXMpcmV0dXJuXCJcIjtpZihlLmNvbnRlbnRzLnR5cGU9PT1fJiZlLmNvbnRlbnRzLmlkPT09ZS5pZCYmZS5jb250ZW50cy5icmVhaz09PWUuYnJlYWsmJmUuY29udGVudHMuZXhwYW5kZWRTdGF0ZXM9PT1lLmV4cGFuZGVkU3RhdGVzKXJldHVybiBlLmNvbnRlbnRzO2JyZWFrO2Nhc2UgUzpjYXNlIFQ6Y2FzZSBQOmNhc2UgTDppZighZS5jb250ZW50cylyZXR1cm5cIlwiO2JyZWFrO2Nhc2UgeDppZighZS5mbGF0Q29udGVudHMmJiFlLmJyZWFrQ29udGVudHMpcmV0dXJuXCJcIjticmVhaztjYXNlIGo6e2xldCB0PVtdO2ZvcihsZXQgciBvZiBlKXtpZighciljb250aW51ZTtsZXRbbiwuLi5vXT1BcnJheS5pc0FycmF5KHIpP3I6W3JdO3R5cGVvZiBuPT1cInN0cmluZ1wiJiZ0eXBlb2YgeSghMSx0LC0xKT09XCJzdHJpbmdcIj90W3QubGVuZ3RoLTFdKz1uOnQucHVzaChuKSx0LnB1c2goLi4ubyl9cmV0dXJuIHQubGVuZ3RoPT09MD9cIlwiOnQubGVuZ3RoPT09MT90WzBdOnR9Y2FzZSBNOmNhc2UgVzpjYXNlIHY6Y2FzZSBJOmNhc2UgQTpjYXNlIE86Y2FzZSBiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IHEoZSl9cmV0dXJuIGV9ZnVuY3Rpb24gTHUoZSl7cmV0dXJuIE5lKGUsdD0+UHUodCkpfWZ1bmN0aW9uIFRyKGUsdD1IZSl7cmV0dXJuIE5lKGUscj0+dHlwZW9mIHI9PVwic3RyaW5nXCI/a2UodCxyLnNwbGl0KGBcbmApKTpyKX1mdW5jdGlvbiBJdShlKXtpZihlLnR5cGU9PT1BKXJldHVybiEwfWZ1bmN0aW9uIFNyKGUpe3JldHVybiBKZShlLEl1LCExKX1mdW5jdGlvbiBaZShlLHQpe3JldHVybiBlLnR5cGU9PT1PP3suLi5lLGNvbnRlbnRzOnQoZS5jb250ZW50cyl9OnQoZSl9dmFyIFI9U3ltYm9sKFwiTU9ERV9CUkVBS1wiKSxLPVN5bWJvbChcIk1PREVfRkxBVFwiKSxUZT1TeW1ib2woXCJjdXJzb3JcIik7ZnVuY3Rpb24gdnIoKXtyZXR1cm57dmFsdWU6XCJcIixsZW5ndGg6MCxxdWV1ZTpbXX19ZnVuY3Rpb24gUnUoZSx0KXtyZXR1cm4geHQoZSx7dHlwZTpcImluZGVudFwifSx0KX1mdW5jdGlvbiBZdShlLHQscil7cmV0dXJuIHQ9PT1OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk/ZS5yb290fHx2cigpOnQ8MD94dChlLHt0eXBlOlwiZGVkZW50XCJ9LHIpOnQ/dC50eXBlPT09XCJyb290XCI/ey4uLmUscm9vdDplfTp4dChlLHt0eXBlOnR5cGVvZiB0PT1cInN0cmluZ1wiP1wic3RyaW5nQWxpZ25cIjpcIm51bWJlckFsaWduXCIsbjp0fSxyKTplfWZ1bmN0aW9uIHh0KGUsdCxyKXtsZXQgbj10LnR5cGU9PT1cImRlZGVudFwiP2UucXVldWUuc2xpY2UoMCwtMSk6Wy4uLmUucXVldWUsdF0sbz1cIlwiLHU9MCxpPTAscz0wO2ZvcihsZXQgbCBvZiBuKXN3aXRjaChsLnR5cGUpe2Nhc2VcImluZGVudFwiOmMoKSxyLnVzZVRhYnM/RCgxKTphKHIudGFiV2lkdGgpO2JyZWFrO2Nhc2VcInN0cmluZ0FsaWduXCI6YygpLG8rPWwubix1Kz1sLm4ubGVuZ3RoO2JyZWFrO2Nhc2VcIm51bWJlckFsaWduXCI6aSs9MSxzKz1sLm47YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSAnJHtsLnR5cGV9J2ApfXJldHVybiBmKCksey4uLmUsdmFsdWU6byxsZW5ndGg6dSxxdWV1ZTpufTtmdW5jdGlvbiBEKGwpe28rPVwiXHRcIi5yZXBlYXQobCksdSs9ci50YWJXaWR0aCpsfWZ1bmN0aW9uIGEobCl7bys9XCIgXCIucmVwZWF0KGwpLHUrPWx9ZnVuY3Rpb24gYygpe3IudXNlVGFicz9kKCk6ZigpfWZ1bmN0aW9uIGQoKXtpPjAmJkQoaSkscCgpfWZ1bmN0aW9uIGYoKXtzPjAmJmEocykscCgpfWZ1bmN0aW9uIHAoKXtpPTAscz0wfX1mdW5jdGlvbiBrdChlKXtsZXQgdD0wLHI9MCxuPWUubGVuZ3RoO2U6Zm9yKDtuLS07KXtsZXQgbz1lW25dO2lmKG89PT1UZSl7cisrO2NvbnRpbnVlfWZvcihsZXQgdT1vLmxlbmd0aC0xO3U+PTA7dS0tKXtsZXQgaT1vW3VdO2lmKGk9PT1cIiBcInx8aT09PVwiXHRcIil0Kys7ZWxzZXtlW25dPW8uc2xpY2UoMCx1KzEpO2JyZWFrIGV9fX1pZih0PjB8fHI+MClmb3IoZS5sZW5ndGg9bisxO3ItLSA+MDspZS5wdXNoKFRlKTtyZXR1cm4gdH1mdW5jdGlvbiBRZShlLHQscixuLG8sdSl7aWYocj09PU51bWJlci5QT1NJVElWRV9JTkZJTklUWSlyZXR1cm4hMDtsZXQgaT10Lmxlbmd0aCxzPVtlXSxEPVtdO2Zvcig7cj49MDspe2lmKHMubGVuZ3RoPT09MCl7aWYoaT09PTApcmV0dXJuITA7cy5wdXNoKHRbLS1pXSk7Y29udGludWV9bGV0e21vZGU6YSxkb2M6Y309cy5wb3AoKTtzd2l0Y2goVShjKSl7Y2FzZSBNOkQucHVzaChjKSxyLT13ZShjKTticmVhaztjYXNlIGo6Y2FzZSBrOntsZXQgZD1icihjKTtmb3IobGV0IGY9ZC5sZW5ndGgtMTtmPj0wO2YtLSlzLnB1c2goe21vZGU6YSxkb2M6ZFtmXX0pO2JyZWFrfWNhc2UgVDpjYXNlIFM6Y2FzZSBQOmNhc2UgTzpzLnB1c2goe21vZGU6YSxkb2M6Yy5jb250ZW50c30pO2JyZWFrO2Nhc2UgdjpyKz1rdChEKTticmVhaztjYXNlIF86e2lmKHUmJmMuYnJlYWspcmV0dXJuITE7bGV0IGQ9Yy5icmVhaz9SOmEsZj1jLmV4cGFuZGVkU3RhdGVzJiZkPT09Uj95KCExLGMuZXhwYW5kZWRTdGF0ZXMsLTEpOmMuY29udGVudHM7cy5wdXNoKHttb2RlOmQsZG9jOmZ9KTticmVha31jYXNlIHg6e2xldCBmPShjLmdyb3VwSWQ/b1tjLmdyb3VwSWRdfHxLOmEpPT09Uj9jLmJyZWFrQ29udGVudHM6Yy5mbGF0Q29udGVudHM7ZiYmcy5wdXNoKHttb2RlOmEsZG9jOmZ9KTticmVha31jYXNlIEE6aWYoYT09PVJ8fGMuaGFyZClyZXR1cm4hMDtjLnNvZnR8fChELnB1c2goXCIgXCIpLHItLSk7YnJlYWs7Y2FzZSBMOm49ITA7YnJlYWs7Y2FzZSBJOmlmKG4pcmV0dXJuITE7YnJlYWt9fXJldHVybiExfWZ1bmN0aW9uIGZlKGUsdCl7bGV0IHI9e30sbj10LnByaW50V2lkdGgsbz1iZSh0LmVuZE9mTGluZSksdT0wLGk9W3tpbmQ6dnIoKSxtb2RlOlIsZG9jOmV9XSxzPVtdLEQ9ITEsYT1bXSxjPTA7Zm9yKE9yKGUpO2kubGVuZ3RoPjA7KXtsZXR7aW5kOmYsbW9kZTpwLGRvYzpsfT1pLnBvcCgpO3N3aXRjaChVKGwpKXtjYXNlIE06e2xldCBGPW8hPT1gXG5gP2VlKCExLGwsYFxuYCxvKTpsO3MucHVzaChGKSxpLmxlbmd0aD4wJiYodSs9d2UoRikpO2JyZWFrfWNhc2Ugajpmb3IobGV0IEY9bC5sZW5ndGgtMTtGPj0wO0YtLSlpLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bFtGXX0pO2JyZWFrO2Nhc2UgVzppZihjPj0yKXRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSB0b28gbWFueSAnY3Vyc29yJyBpbiBkb2MuXCIpO3MucHVzaChUZSksYysrO2JyZWFrO2Nhc2UgVDppLnB1c2goe2luZDpSdShmLHQpLG1vZGU6cCxkb2M6bC5jb250ZW50c30pO2JyZWFrO2Nhc2UgUzppLnB1c2goe2luZDpZdShmLGwubix0KSxtb2RlOnAsZG9jOmwuY29udGVudHN9KTticmVhaztjYXNlIHY6dS09a3Qocyk7YnJlYWs7Y2FzZSBfOnN3aXRjaChwKXtjYXNlIEs6aWYoIUQpe2kucHVzaCh7aW5kOmYsbW9kZTpsLmJyZWFrP1I6Syxkb2M6bC5jb250ZW50c30pO2JyZWFrfWNhc2UgUjp7RD0hMTtsZXQgRj17aW5kOmYsbW9kZTpLLGRvYzpsLmNvbnRlbnRzfSxtPW4tdSxFPWEubGVuZ3RoPjA7aWYoIWwuYnJlYWsmJlFlKEYsaSxtLEUscikpaS5wdXNoKEYpO2Vsc2UgaWYobC5leHBhbmRlZFN0YXRlcyl7bGV0IEM9eSghMSxsLmV4cGFuZGVkU3RhdGVzLC0xKTtpZihsLmJyZWFrKXtpLnB1c2goe2luZDpmLG1vZGU6Uixkb2M6Q30pO2JyZWFrfWVsc2UgZm9yKGxldCBnPTE7ZzxsLmV4cGFuZGVkU3RhdGVzLmxlbmd0aCsxO2crKylpZihnPj1sLmV4cGFuZGVkU3RhdGVzLmxlbmd0aCl7aS5wdXNoKHtpbmQ6Zixtb2RlOlIsZG9jOkN9KTticmVha31lbHNle2xldCBoPWwuZXhwYW5kZWRTdGF0ZXNbZ10sQj17aW5kOmYsbW9kZTpLLGRvYzpofTtpZihRZShCLGksbSxFLHIpKXtpLnB1c2goQik7YnJlYWt9fX1lbHNlIGkucHVzaCh7aW5kOmYsbW9kZTpSLGRvYzpsLmNvbnRlbnRzfSk7YnJlYWt9fWwuaWQmJihyW2wuaWRdPXkoITEsaSwtMSkubW9kZSk7YnJlYWs7Y2FzZSBrOntsZXQgRj1uLXUse3BhcnRzOm19PWw7aWYobS5sZW5ndGg9PT0wKWJyZWFrO2xldFtFLENdPW0sZz17aW5kOmYsbW9kZTpLLGRvYzpFfSxoPXtpbmQ6Zixtb2RlOlIsZG9jOkV9LEI9UWUoZyxbXSxGLGEubGVuZ3RoPjAsciwhMCk7aWYobS5sZW5ndGg9PT0xKXtCP2kucHVzaChnKTppLnB1c2goaCk7YnJlYWt9bGV0IFo9e2luZDpmLG1vZGU6Syxkb2M6Q30sJD17aW5kOmYsbW9kZTpSLGRvYzpDfTtpZihtLmxlbmd0aD09PTIpe0I/aS5wdXNoKFosZyk6aS5wdXNoKCQsaCk7YnJlYWt9bS5zcGxpY2UoMCwyKTtsZXQgUT17aW5kOmYsbW9kZTpwLGRvYzpHZShtKX0scnI9bVswXTtRZSh7aW5kOmYsbW9kZTpLLGRvYzpbRSxDLHJyXX0sW10sRixhLmxlbmd0aD4wLHIsITApP2kucHVzaChRLFosZyk6Qj9pLnB1c2goUSwkLGcpOmkucHVzaChRLCQsaCk7YnJlYWt9Y2FzZSB4OmNhc2UgUDp7bGV0IEY9bC5ncm91cElkP3JbbC5ncm91cElkXTpwO2lmKEY9PT1SKXtsZXQgbT1sLnR5cGU9PT14P2wuYnJlYWtDb250ZW50czpsLm5lZ2F0ZT9sLmNvbnRlbnRzOmllKGwuY29udGVudHMpO20mJmkucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzptfSl9aWYoRj09PUspe2xldCBtPWwudHlwZT09PXg/bC5mbGF0Q29udGVudHM6bC5uZWdhdGU/aWUobC5jb250ZW50cyk6bC5jb250ZW50czttJiZpLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bX0pfWJyZWFrfWNhc2UgTDphLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6bC5jb250ZW50c30pO2JyZWFrO2Nhc2UgSTphLmxlbmd0aD4wJiZpLnB1c2goe2luZDpmLG1vZGU6cCxkb2M6X2V9KTticmVhaztjYXNlIEE6c3dpdGNoKHApe2Nhc2UgSzppZihsLmhhcmQpRD0hMDtlbHNle2wuc29mdHx8KHMucHVzaChcIiBcIiksdSs9MSk7YnJlYWt9Y2FzZSBSOmlmKGEubGVuZ3RoPjApe2kucHVzaCh7aW5kOmYsbW9kZTpwLGRvYzpsfSwuLi5hLnJldmVyc2UoKSksYS5sZW5ndGg9MDticmVha31sLmxpdGVyYWw/Zi5yb290PyhzLnB1c2gobyxmLnJvb3QudmFsdWUpLHU9Zi5yb290Lmxlbmd0aCk6KHMucHVzaChvKSx1PTApOih1LT1rdChzKSxzLnB1c2gobytmLnZhbHVlKSx1PWYubGVuZ3RoKTticmVha31icmVhaztjYXNlIE86aS5wdXNoKHtpbmQ6Zixtb2RlOnAsZG9jOmwuY29udGVudHN9KTticmVhaztjYXNlIGI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgcShsKX1pLmxlbmd0aD09PTAmJmEubGVuZ3RoPjAmJihpLnB1c2goLi4uYS5yZXZlcnNlKCkpLGEubGVuZ3RoPTApfWxldCBkPXMuaW5kZXhPZihUZSk7aWYoZCE9PS0xKXtsZXQgZj1zLmluZGV4T2YoVGUsZCsxKSxwPXMuc2xpY2UoMCxkKS5qb2luKFwiXCIpLGw9cy5zbGljZShkKzEsZikuam9pbihcIlwiKSxGPXMuc2xpY2UoZisxKS5qb2luKFwiXCIpO3JldHVybntmb3JtYXR0ZWQ6cCtsK0YsY3Vyc29yTm9kZVN0YXJ0OnAubGVuZ3RoLGN1cnNvck5vZGVUZXh0Omx9fXJldHVybntmb3JtYXR0ZWQ6cy5qb2luKFwiXCIpfX1mdW5jdGlvbiBKKGUpe3ZhciB0O2lmKCFlKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKSl7bGV0IHI9W107Zm9yKGxldCBuIG9mIGUpaWYoQXJyYXkuaXNBcnJheShuKSlyLnB1c2goLi4uSihuKSk7ZWxzZXtsZXQgbz1KKG4pO28hPT1cIlwiJiZyLnB1c2gobyl9cmV0dXJuIHJ9cmV0dXJuIGUudHlwZT09PXg/ey4uLmUsYnJlYWtDb250ZW50czpKKGUuYnJlYWtDb250ZW50cyksZmxhdENvbnRlbnRzOkooZS5mbGF0Q29udGVudHMpfTplLnR5cGU9PT1fP3suLi5lLGNvbnRlbnRzOkooZS5jb250ZW50cyksZXhwYW5kZWRTdGF0ZXM6KHQ9ZS5leHBhbmRlZFN0YXRlcyk9PW51bGw/dm9pZCAwOnQubWFwKEopfTplLnR5cGU9PT1rP3t0eXBlOlwiZmlsbFwiLHBhcnRzOmUucGFydHMubWFwKEopfTplLmNvbnRlbnRzP3suLi5lLGNvbnRlbnRzOkooZS5jb250ZW50cyl9OmV9ZnVuY3Rpb24gUHIoZSl7bGV0IHQ9T2JqZWN0LmNyZWF0ZShudWxsKSxyPW5ldyBTZXQ7cmV0dXJuIG4oSihlKSk7ZnVuY3Rpb24gbih1LGkscyl7dmFyIEQsYTtpZih0eXBlb2YgdT09XCJzdHJpbmdcIilyZXR1cm4gSlNPTi5zdHJpbmdpZnkodSk7aWYoQXJyYXkuaXNBcnJheSh1KSl7bGV0IGM9dS5tYXAobikuZmlsdGVyKEJvb2xlYW4pO3JldHVybiBjLmxlbmd0aD09PTE/Y1swXTpgWyR7Yy5qb2luKFwiLCBcIil9XWB9aWYodS50eXBlPT09QSl7bGV0IGM9KChEPXM9PW51bGw/dm9pZCAwOnNbaSsxXSk9PW51bGw/dm9pZCAwOkQudHlwZSk9PT1iO3JldHVybiB1LmxpdGVyYWw/Yz9cImxpdGVyYWxsaW5lXCI6XCJsaXRlcmFsbGluZVdpdGhvdXRCcmVha1BhcmVudFwiOnUuaGFyZD9jP1wiaGFyZGxpbmVcIjpcImhhcmRsaW5lV2l0aG91dEJyZWFrUGFyZW50XCI6dS5zb2Z0P1wic29mdGxpbmVcIjpcImxpbmVcIn1pZih1LnR5cGU9PT1iKXJldHVybigoYT1zPT1udWxsP3ZvaWQgMDpzW2ktMV0pPT1udWxsP3ZvaWQgMDphLnR5cGUpPT09QSYmc1tpLTFdLmhhcmQ/dm9pZCAwOlwiYnJlYWtQYXJlbnRcIjtpZih1LnR5cGU9PT12KXJldHVyblwidHJpbVwiO2lmKHUudHlwZT09PVQpcmV0dXJuXCJpbmRlbnQoXCIrbih1LmNvbnRlbnRzKStcIilcIjtpZih1LnR5cGU9PT1TKXJldHVybiB1Lm49PT1OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk/XCJkZWRlbnRUb1Jvb3QoXCIrbih1LmNvbnRlbnRzKStcIilcIjp1Lm48MD9cImRlZGVudChcIituKHUuY29udGVudHMpK1wiKVwiOnUubi50eXBlPT09XCJyb290XCI/XCJtYXJrQXNSb290KFwiK24odS5jb250ZW50cykrXCIpXCI6XCJhbGlnbihcIitKU09OLnN0cmluZ2lmeSh1Lm4pK1wiLCBcIituKHUuY29udGVudHMpK1wiKVwiO2lmKHUudHlwZT09PXgpcmV0dXJuXCJpZkJyZWFrKFwiK24odS5icmVha0NvbnRlbnRzKSsodS5mbGF0Q29udGVudHM/XCIsIFwiK24odS5mbGF0Q29udGVudHMpOlwiXCIpKyh1Lmdyb3VwSWQ/KHUuZmxhdENvbnRlbnRzP1wiXCI6JywgXCJcIicpK2AsIHsgZ3JvdXBJZDogJHtvKHUuZ3JvdXBJZCl9IH1gOlwiXCIpK1wiKVwiO2lmKHUudHlwZT09PVApe2xldCBjPVtdO3UubmVnYXRlJiZjLnB1c2goXCJuZWdhdGU6IHRydWVcIiksdS5ncm91cElkJiZjLnB1c2goYGdyb3VwSWQ6ICR7byh1Lmdyb3VwSWQpfWApO2xldCBkPWMubGVuZ3RoPjA/YCwgeyAke2Muam9pbihcIiwgXCIpfSB9YDpcIlwiO3JldHVybmBpbmRlbnRJZkJyZWFrKCR7bih1LmNvbnRlbnRzKX0ke2R9KWB9aWYodS50eXBlPT09Xyl7bGV0IGM9W107dS5icmVhayYmdS5icmVhayE9PVwicHJvcGFnYXRlZFwiJiZjLnB1c2goXCJzaG91bGRCcmVhazogdHJ1ZVwiKSx1LmlkJiZjLnB1c2goYGlkOiAke28odS5pZCl9YCk7bGV0IGQ9Yy5sZW5ndGg+MD9gLCB7ICR7Yy5qb2luKFwiLCBcIil9IH1gOlwiXCI7cmV0dXJuIHUuZXhwYW5kZWRTdGF0ZXM/YGNvbmRpdGlvbmFsR3JvdXAoWyR7dS5leHBhbmRlZFN0YXRlcy5tYXAoZj0+bihmKSkuam9pbihcIixcIil9XSR7ZH0pYDpgZ3JvdXAoJHtuKHUuY29udGVudHMpfSR7ZH0pYH1pZih1LnR5cGU9PT1rKXJldHVybmBmaWxsKFske3UucGFydHMubWFwKGM9Pm4oYykpLmpvaW4oXCIsIFwiKX1dKWA7aWYodS50eXBlPT09TClyZXR1cm5cImxpbmVTdWZmaXgoXCIrbih1LmNvbnRlbnRzKStcIilcIjtpZih1LnR5cGU9PT1JKXJldHVyblwibGluZVN1ZmZpeEJvdW5kYXJ5XCI7aWYodS50eXBlPT09TylyZXR1cm5gbGFiZWwoJHtKU09OLnN0cmluZ2lmeSh1LmxhYmVsKX0sICR7bih1LmNvbnRlbnRzKX0pYDt0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGRvYyB0eXBlIFwiK3UudHlwZSl9ZnVuY3Rpb24gbyh1KXtpZih0eXBlb2YgdSE9XCJzeW1ib2xcIilyZXR1cm4gSlNPTi5zdHJpbmdpZnkoU3RyaW5nKHUpKTtpZih1IGluIHQpcmV0dXJuIHRbdV07bGV0IGk9dS5kZXNjcmlwdGlvbnx8XCJzeW1ib2xcIjtmb3IobGV0IHM9MDs7cysrKXtsZXQgRD1pKyhzPjA/YCAjJHtzfWA6XCJcIik7aWYoIXIuaGFzKEQpKXJldHVybiByLmFkZChEKSx0W3VdPWBTeW1ib2wuZm9yKCR7SlNPTi5zdHJpbmdpZnkoRCl9KWB9fX1mdW5jdGlvbiBqdShlLHQscj0wKXtsZXQgbj0wO2ZvcihsZXQgbz1yO288ZS5sZW5ndGg7KytvKWVbb109PT1cIlx0XCI/bj1uK3QtbiV0Om4rKztyZXR1cm4gbn12YXIgRmU9anU7dmFyIFNlPWNsYXNzIGV4dGVuZHMgRXJyb3J7bmFtZT1cIkNvbmZpZ0Vycm9yXCJ9LHZlPWNsYXNzIGV4dGVuZHMgRXJyb3J7bmFtZT1cIlVuZGVmaW5lZFBhcnNlckVycm9yXCJ9O3ZhciBMcj17Y3Vyc29yT2Zmc2V0OntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwiaW50XCIsZGVmYXVsdDotMSxyYW5nZTp7c3RhcnQ6LTEsZW5kOjEvMCxzdGVwOjF9LGRlc2NyaXB0aW9uOlwiUHJpbnQgKHRvIHN0ZGVycikgd2hlcmUgYSBjdXJzb3IgYXQgdGhlIGdpdmVuIHBvc2l0aW9uIHdvdWxkIG1vdmUgdG8gYWZ0ZXIgZm9ybWF0dGluZy5cIixjbGlDYXRlZ29yeTpcIkVkaXRvclwifSxlbmRPZkxpbmU6e2NhdGVnb3J5OlwiR2xvYmFsXCIsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6XCJsZlwiLGRlc2NyaXB0aW9uOlwiV2hpY2ggZW5kIG9mIGxpbmUgY2hhcmFjdGVycyB0byBhcHBseS5cIixjaG9pY2VzOlt7dmFsdWU6XCJsZlwiLGRlc2NyaXB0aW9uOlwiTGluZSBGZWVkIG9ubHkgKFxcXFxuKSwgY29tbW9uIG9uIExpbnV4IGFuZCBtYWNPUyBhcyB3ZWxsIGFzIGluc2lkZSBnaXQgcmVwb3NcIn0se3ZhbHVlOlwiY3JsZlwiLGRlc2NyaXB0aW9uOlwiQ2FycmlhZ2UgUmV0dXJuICsgTGluZSBGZWVkIGNoYXJhY3RlcnMgKFxcXFxyXFxcXG4pLCBjb21tb24gb24gV2luZG93c1wifSx7dmFsdWU6XCJjclwiLGRlc2NyaXB0aW9uOlwiQ2FycmlhZ2UgUmV0dXJuIGNoYXJhY3RlciBvbmx5IChcXFxcciksIHVzZWQgdmVyeSByYXJlbHlcIn0se3ZhbHVlOlwiYXV0b1wiLGRlc2NyaXB0aW9uOmBNYWludGFpbiBleGlzdGluZ1xuKG1peGVkIHZhbHVlcyB3aXRoaW4gb25lIGZpbGUgYXJlIG5vcm1hbGlzZWQgYnkgbG9va2luZyBhdCB3aGF0J3MgdXNlZCBhZnRlciB0aGUgZmlyc3QgbGluZSlgfV19LGZpbGVwYXRoOntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwicGF0aFwiLGRlc2NyaXB0aW9uOlwiU3BlY2lmeSB0aGUgaW5wdXQgZmlsZXBhdGguIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGRvIHBhcnNlciBpbmZlcmVuY2UuXCIsY2xpTmFtZTpcInN0ZGluLWZpbGVwYXRoXCIsY2xpQ2F0ZWdvcnk6XCJPdGhlclwiLGNsaURlc2NyaXB0aW9uOlwiUGF0aCB0byB0aGUgZmlsZSB0byBwcmV0ZW5kIHRoYXQgc3RkaW4gY29tZXMgZnJvbS5cIn0saW5zZXJ0UHJhZ21hOntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJJbnNlcnQgQGZvcm1hdCBwcmFnbWEgaW50byBmaWxlJ3MgZmlyc3QgZG9jYmxvY2sgY29tbWVudC5cIixjbGlDYXRlZ29yeTpcIk90aGVyXCJ9LHBhcnNlcjp7Y2F0ZWdvcnk6XCJHbG9iYWxcIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDp2b2lkIDAsZGVzY3JpcHRpb246XCJXaGljaCBwYXJzZXIgdG8gdXNlLlwiLGV4Y2VwdGlvbjplPT50eXBlb2YgZT09XCJzdHJpbmdcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIixjaG9pY2VzOlt7dmFsdWU6XCJmbG93XCIsZGVzY3JpcHRpb246XCJGbG93XCJ9LHt2YWx1ZTpcImJhYmVsXCIsZGVzY3JpcHRpb246XCJKYXZhU2NyaXB0XCJ9LHt2YWx1ZTpcImJhYmVsLWZsb3dcIixkZXNjcmlwdGlvbjpcIkZsb3dcIn0se3ZhbHVlOlwiYmFiZWwtdHNcIixkZXNjcmlwdGlvbjpcIlR5cGVTY3JpcHRcIn0se3ZhbHVlOlwidHlwZXNjcmlwdFwiLGRlc2NyaXB0aW9uOlwiVHlwZVNjcmlwdFwifSx7dmFsdWU6XCJhY29yblwiLGRlc2NyaXB0aW9uOlwiSmF2YVNjcmlwdFwifSx7dmFsdWU6XCJlc3ByZWVcIixkZXNjcmlwdGlvbjpcIkphdmFTY3JpcHRcIn0se3ZhbHVlOlwibWVyaXlhaFwiLGRlc2NyaXB0aW9uOlwiSmF2YVNjcmlwdFwifSx7dmFsdWU6XCJjc3NcIixkZXNjcmlwdGlvbjpcIkNTU1wifSx7dmFsdWU6XCJsZXNzXCIsZGVzY3JpcHRpb246XCJMZXNzXCJ9LHt2YWx1ZTpcInNjc3NcIixkZXNjcmlwdGlvbjpcIlNDU1NcIn0se3ZhbHVlOlwianNvblwiLGRlc2NyaXB0aW9uOlwiSlNPTlwifSx7dmFsdWU6XCJqc29uNVwiLGRlc2NyaXB0aW9uOlwiSlNPTjVcIn0se3ZhbHVlOlwianNvbi1zdHJpbmdpZnlcIixkZXNjcmlwdGlvbjpcIkpTT04uc3RyaW5naWZ5XCJ9LHt2YWx1ZTpcImdyYXBocWxcIixkZXNjcmlwdGlvbjpcIkdyYXBoUUxcIn0se3ZhbHVlOlwibWFya2Rvd25cIixkZXNjcmlwdGlvbjpcIk1hcmtkb3duXCJ9LHt2YWx1ZTpcIm1keFwiLGRlc2NyaXB0aW9uOlwiTURYXCJ9LHt2YWx1ZTpcInZ1ZVwiLGRlc2NyaXB0aW9uOlwiVnVlXCJ9LHt2YWx1ZTpcInlhbWxcIixkZXNjcmlwdGlvbjpcIllBTUxcIn0se3ZhbHVlOlwiZ2xpbW1lclwiLGRlc2NyaXB0aW9uOlwiRW1iZXIgLyBIYW5kbGViYXJzXCJ9LHt2YWx1ZTpcImh0bWxcIixkZXNjcmlwdGlvbjpcIkhUTUxcIn0se3ZhbHVlOlwiYW5ndWxhclwiLGRlc2NyaXB0aW9uOlwiQW5ndWxhclwifSx7dmFsdWU6XCJsd2NcIixkZXNjcmlwdGlvbjpcIkxpZ2h0bmluZyBXZWIgQ29tcG9uZW50c1wifV19LHBsdWdpbnM6e3R5cGU6XCJwYXRoXCIsYXJyYXk6ITAsZGVmYXVsdDpbe3ZhbHVlOltdfV0sY2F0ZWdvcnk6XCJHbG9iYWxcIixkZXNjcmlwdGlvbjpcIkFkZCBhIHBsdWdpbi4gTXVsdGlwbGUgcGx1Z2lucyBjYW4gYmUgcGFzc2VkIGFzIHNlcGFyYXRlIGAtLXBsdWdpbmBzLlwiLGV4Y2VwdGlvbjplPT50eXBlb2YgZT09XCJzdHJpbmdcInx8dHlwZW9mIGU9PVwib2JqZWN0XCIsY2xpTmFtZTpcInBsdWdpblwiLGNsaUNhdGVnb3J5OlwiQ29uZmlnXCJ9LHByaW50V2lkdGg6e2NhdGVnb3J5OlwiR2xvYmFsXCIsdHlwZTpcImludFwiLGRlZmF1bHQ6ODAsZGVzY3JpcHRpb246XCJUaGUgbGluZSBsZW5ndGggd2hlcmUgUHJldHRpZXIgd2lsbCB0cnkgd3JhcC5cIixyYW5nZTp7c3RhcnQ6MCxlbmQ6MS8wLHN0ZXA6MX19LHJhbmdlRW5kOntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwiaW50XCIsZGVmYXVsdDoxLzAscmFuZ2U6e3N0YXJ0OjAsZW5kOjEvMCxzdGVwOjF9LGRlc2NyaXB0aW9uOmBGb3JtYXQgY29kZSBlbmRpbmcgYXQgYSBnaXZlbiBjaGFyYWN0ZXIgb2Zmc2V0IChleGNsdXNpdmUpLlxuVGhlIHJhbmdlIHdpbGwgZXh0ZW5kIGZvcndhcmRzIHRvIHRoZSBlbmQgb2YgdGhlIHNlbGVjdGVkIHN0YXRlbWVudC5gLGNsaUNhdGVnb3J5OlwiRWRpdG9yXCJ9LHJhbmdlU3RhcnQ6e2NhdGVnb3J5OlwiU3BlY2lhbFwiLHR5cGU6XCJpbnRcIixkZWZhdWx0OjAscmFuZ2U6e3N0YXJ0OjAsZW5kOjEvMCxzdGVwOjF9LGRlc2NyaXB0aW9uOmBGb3JtYXQgY29kZSBzdGFydGluZyBhdCBhIGdpdmVuIGNoYXJhY3RlciBvZmZzZXQuXG5UaGUgcmFuZ2Ugd2lsbCBleHRlbmQgYmFja3dhcmRzIHRvIHRoZSBzdGFydCBvZiB0aGUgZmlyc3QgbGluZSBjb250YWluaW5nIHRoZSBzZWxlY3RlZCBzdGF0ZW1lbnQuYCxjbGlDYXRlZ29yeTpcIkVkaXRvclwifSxyZXF1aXJlUHJhZ21hOntjYXRlZ29yeTpcIlNwZWNpYWxcIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246YFJlcXVpcmUgZWl0aGVyICdAcHJldHRpZXInIG9yICdAZm9ybWF0JyB0byBiZSBwcmVzZW50IGluIHRoZSBmaWxlJ3MgZmlyc3QgZG9jYmxvY2sgY29tbWVudFxuaW4gb3JkZXIgZm9yIGl0IHRvIGJlIGZvcm1hdHRlZC5gLGNsaUNhdGVnb3J5OlwiT3RoZXJcIn0sdGFiV2lkdGg6e3R5cGU6XCJpbnRcIixjYXRlZ29yeTpcIkdsb2JhbFwiLGRlZmF1bHQ6MixkZXNjcmlwdGlvbjpcIk51bWJlciBvZiBzcGFjZXMgcGVyIGluZGVudGF0aW9uIGxldmVsLlwiLHJhbmdlOntzdGFydDowLGVuZDoxLzAsc3RlcDoxfX0sdXNlVGFiczp7Y2F0ZWdvcnk6XCJHbG9iYWxcIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJJbmRlbnQgd2l0aCB0YWJzIGluc3RlYWQgb2Ygc3BhY2VzLlwifSxlbWJlZGRlZExhbmd1YWdlRm9ybWF0dGluZzp7Y2F0ZWdvcnk6XCJHbG9iYWxcIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcImF1dG9cIixkZXNjcmlwdGlvbjpcIkNvbnRyb2wgaG93IFByZXR0aWVyIGZvcm1hdHMgcXVvdGVkIGNvZGUgZW1iZWRkZWQgaW4gdGhlIGZpbGUuXCIsY2hvaWNlczpbe3ZhbHVlOlwiYXV0b1wiLGRlc2NyaXB0aW9uOlwiRm9ybWF0IGVtYmVkZGVkIGNvZGUgaWYgUHJldHRpZXIgY2FuIGF1dG9tYXRpY2FsbHkgaWRlbnRpZnkgaXQuXCJ9LHt2YWx1ZTpcIm9mZlwiLGRlc2NyaXB0aW9uOlwiTmV2ZXIgYXV0b21hdGljYWxseSBmb3JtYXQgZW1iZWRkZWQgY29kZS5cIn1dfX07ZnVuY3Rpb24gZXQoe3BsdWdpbnM6ZT1bXSxzaG93RGVwcmVjYXRlZDp0PSExfT17fSl7bGV0IHI9ZS5mbGF0TWFwKG89Pm8ubGFuZ3VhZ2VzPz9bXSksbj1bXTtmb3IobGV0IG8gb2YgJHUoT2JqZWN0LmFzc2lnbih7fSwuLi5lLm1hcCgoe29wdGlvbnM6dX0pPT51KSxMcikpKSF0JiZvLmRlcHJlY2F0ZWR8fChBcnJheS5pc0FycmF5KG8uY2hvaWNlcykmJih0fHwoby5jaG9pY2VzPW8uY2hvaWNlcy5maWx0ZXIodT0+IXUuZGVwcmVjYXRlZCkpLG8ubmFtZT09PVwicGFyc2VyXCImJihvLmNob2ljZXM9Wy4uLm8uY2hvaWNlcywuLi5WdShvLmNob2ljZXMscixlKV0pKSxvLnBsdWdpbkRlZmF1bHRzPU9iamVjdC5mcm9tRW50cmllcyhlLmZpbHRlcih1PT57dmFyIGk7cmV0dXJuKChpPXUuZGVmYXVsdE9wdGlvbnMpPT1udWxsP3ZvaWQgMDppW28ubmFtZV0pIT09dm9pZCAwfSkubWFwKHU9Plt1Lm5hbWUsdS5kZWZhdWx0T3B0aW9uc1tvLm5hbWVdXSkpLG4ucHVzaChvKSk7cmV0dXJue2xhbmd1YWdlczpyLG9wdGlvbnM6bn19ZnVuY3Rpb24qVnUoZSx0LHIpe2xldCBuPW5ldyBTZXQoZS5tYXAobz0+by52YWx1ZSkpO2ZvcihsZXQgbyBvZiB0KWlmKG8ucGFyc2Vycyl7Zm9yKGxldCB1IG9mIG8ucGFyc2VycylpZighbi5oYXModSkpe24uYWRkKHUpO2xldCBpPXIuZmluZChEPT5ELnBhcnNlcnMmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChELnBhcnNlcnMsdSkpLHM9by5uYW1lO2khPW51bGwmJmkubmFtZSYmKHMrPWAgKHBsdWdpbjogJHtpLm5hbWV9KWApLHlpZWxke3ZhbHVlOnUsZGVzY3JpcHRpb246c319fX1mdW5jdGlvbiAkdShlKXtsZXQgdD1bXTtmb3IobGV0W3Isbl1vZiBPYmplY3QuZW50cmllcyhlKSl7bGV0IG89e25hbWU6ciwuLi5ufTtBcnJheS5pc0FycmF5KG8uZGVmYXVsdCkmJihvLmRlZmF1bHQ9eSghMSxvLmRlZmF1bHQsLTEpLnZhbHVlKSx0LnB1c2gobyl9cmV0dXJuIHR9dmFyIE11PWU9PlN0cmluZyhlKS5zcGxpdCgvWy9cXFxcXS8pLnBvcCgpO2Z1bmN0aW9uIElyKGUsdCl7aWYoIXQpcmV0dXJuO2xldCByPU11KHQpLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGUuZmluZChuPT57dmFyIG8sdTtyZXR1cm4oKG89bi5leHRlbnNpb25zKT09bnVsbD92b2lkIDA6by5zb21lKGk9PnIuZW5kc1dpdGgoaSkpKXx8KCh1PW4uZmlsZW5hbWVzKT09bnVsbD92b2lkIDA6dS5zb21lKGk9PmkudG9Mb3dlckNhc2UoKT09PXIpKX0pfWZ1bmN0aW9uIFd1KGUsdCl7aWYodClyZXR1cm4gZS5maW5kKCh7bmFtZTpyfSk9PnIudG9Mb3dlckNhc2UoKT09PXQpPz9lLmZpbmQoKHthbGlhc2VzOnJ9KT0+cj09bnVsbD92b2lkIDA6ci5pbmNsdWRlcyh0KSk/P2UuZmluZCgoe2V4dGVuc2lvbnM6cn0pPT5yPT1udWxsP3ZvaWQgMDpyLmluY2x1ZGVzKGAuJHt0fWApKX1mdW5jdGlvbiBVdShlLHQpe2xldCByPWUucGx1Z2lucy5mbGF0TWFwKG89Pm8ubGFuZ3VhZ2VzPz9bXSksbj1XdShyLHQubGFuZ3VhZ2UpPz9JcihyLHQucGh5c2ljYWxGaWxlKT8/SXIocix0LmZpbGUpPz8odC5waHlzaWNhbEZpbGUsdm9pZCAwKTtyZXR1cm4gbj09bnVsbD92b2lkIDA6bi5wYXJzZXJzWzBdfXZhciBScj1VdTt2YXIgdGU9e2tleTplPT4vXlskX2EtekEtWl1bJF9hLXpBLVowLTldKiQvLnRlc3QoZSk/ZTpKU09OLnN0cmluZ2lmeShlKSx2YWx1ZShlKXtpZihlPT09bnVsbHx8dHlwZW9mIGUhPVwib2JqZWN0XCIpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpO2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuYFske2UubWFwKHI9PnRlLnZhbHVlKHIpKS5qb2luKFwiLCBcIil9XWA7bGV0IHQ9T2JqZWN0LmtleXMoZSk7cmV0dXJuIHQubGVuZ3RoPT09MD9cInt9XCI6YHsgJHt0Lm1hcChyPT5gJHt0ZS5rZXkocil9OiAke3RlLnZhbHVlKGVbcl0pfWApLmpvaW4oXCIsIFwiKX0gfWB9LHBhaXI6KHtrZXk6ZSx2YWx1ZTp0fSk9PnRlLnZhbHVlKHtbZV06dH0pfTt2YXIgYnQ9aGUoUGUoKSwxKSxWcj0oZSx0LHtkZXNjcmlwdG9yOnJ9KT0+e2xldCBuPVtgJHtidC5kZWZhdWx0LnllbGxvdyh0eXBlb2YgZT09XCJzdHJpbmdcIj9yLmtleShlKTpyLnBhaXIoZSkpfSBpcyBkZXByZWNhdGVkYF07cmV0dXJuIHQmJm4ucHVzaChgd2Ugbm93IHRyZWF0IGl0IGFzICR7YnQuZGVmYXVsdC5ibHVlKHR5cGVvZiB0PT1cInN0cmluZ1wiP3Iua2V5KHQpOnIucGFpcih0KSl9YCksbi5qb2luKFwiOyBcIikrXCIuXCJ9O3ZhciBzZT1oZShQZSgpLDEpO3ZhciB0dD1TeW1ib2wuZm9yKFwidm5vcHRzLlZBTFVFX05PVF9FWElTVFwiKSxwZT1TeW1ib2wuZm9yKFwidm5vcHRzLlZBTFVFX1VOQ0hBTkdFRFwiKTt2YXIgJHI9XCIgXCIucmVwZWF0KDIpLFdyPShlLHQscik9PntsZXR7dGV4dDpuLGxpc3Q6b309ci5ub3JtYWxpemVFeHBlY3RlZFJlc3VsdChyLnNjaGVtYXNbZV0uZXhwZWN0ZWQocikpLHU9W107cmV0dXJuIG4mJnUucHVzaChNcihlLHQsbixyLmRlc2NyaXB0b3IpKSxvJiZ1LnB1c2goW01yKGUsdCxvLnRpdGxlLHIuZGVzY3JpcHRvcildLmNvbmNhdChvLnZhbHVlcy5tYXAoaT0+VXIoaSxyLmxvZ2dlclByaW50V2lkdGgpKSkuam9pbihgXG5gKSksenIodSxyLmxvZ2dlclByaW50V2lkdGgpfTtmdW5jdGlvbiBNcihlLHQscixuKXtyZXR1cm5bYEludmFsaWQgJHtzZS5kZWZhdWx0LnJlZChuLmtleShlKSl9IHZhbHVlLmAsYEV4cGVjdGVkICR7c2UuZGVmYXVsdC5ibHVlKHIpfSxgLGBidXQgcmVjZWl2ZWQgJHt0PT09dHQ/c2UuZGVmYXVsdC5ncmF5KFwibm90aGluZ1wiKTpzZS5kZWZhdWx0LnJlZChuLnZhbHVlKHQpKX0uYF0uam9pbihcIiBcIil9ZnVuY3Rpb24gVXIoe3RleHQ6ZSxsaXN0OnR9LHIpe2xldCBuPVtdO3JldHVybiBlJiZuLnB1c2goYC0gJHtzZS5kZWZhdWx0LmJsdWUoZSl9YCksdCYmbi5wdXNoKFtgLSAke3NlLmRlZmF1bHQuYmx1ZSh0LnRpdGxlKX06YF0uY29uY2F0KHQudmFsdWVzLm1hcChvPT5VcihvLHItJHIubGVuZ3RoKS5yZXBsYWNlKC9efFxcbi9nLGAkJiR7JHJ9YCkpKS5qb2luKGBcbmApKSx6cihuLHIpfWZ1bmN0aW9uIHpyKGUsdCl7aWYoZS5sZW5ndGg9PT0xKXJldHVybiBlWzBdO2xldFtyLG5dPWUsW28sdV09ZS5tYXAoaT0+aS5zcGxpdChgXG5gLDEpWzBdLmxlbmd0aCk7cmV0dXJuIG8+dCYmbz51P246cn12YXIgTnQ9aGUoUGUoKSwxKTt2YXIgd3Q9W10sR3I9W107ZnVuY3Rpb24gT3QoZSx0KXtpZihlPT09dClyZXR1cm4gMDtsZXQgcj1lO2UubGVuZ3RoPnQubGVuZ3RoJiYoZT10LHQ9cik7bGV0IG49ZS5sZW5ndGgsbz10Lmxlbmd0aDtmb3IoO24+MCYmZS5jaGFyQ29kZUF0KH4tbik9PT10LmNoYXJDb2RlQXQofi1vKTspbi0tLG8tLTtsZXQgdT0wO2Zvcig7dTxuJiZlLmNoYXJDb2RlQXQodSk9PT10LmNoYXJDb2RlQXQodSk7KXUrKztpZihuLT11LG8tPXUsbj09PTApcmV0dXJuIG87bGV0IGkscyxELGEsYz0wLGQ9MDtmb3IoO2M8bjspR3JbY109ZS5jaGFyQ29kZUF0KHUrYyksd3RbY109KytjO2Zvcig7ZDxvOylmb3IoaT10LmNoYXJDb2RlQXQodStkKSxEPWQrKyxzPWQsYz0wO2M8bjtjKyspYT1pPT09R3JbY10/RDpEKzEsRD13dFtjXSxzPXd0W2NdPUQ+cz9hPnM/cysxOmE6YT5EP0QrMTphO3JldHVybiBzfXZhciBydD0oZSx0LHtkZXNjcmlwdG9yOnIsbG9nZ2VyOm4sc2NoZW1hczpvfSk9PntsZXQgdT1bYElnbm9yZWQgdW5rbm93biBvcHRpb24gJHtOdC5kZWZhdWx0LnllbGxvdyhyLnBhaXIoe2tleTplLHZhbHVlOnR9KSl9LmBdLGk9T2JqZWN0LmtleXMobykuc29ydCgpLmZpbmQocz0+T3QoZSxzKTwzKTtpJiZ1LnB1c2goYERpZCB5b3UgbWVhbiAke050LmRlZmF1bHQuYmx1ZShyLmtleShpKSl9P2ApLG4ud2Fybih1LmpvaW4oXCIgXCIpKX07dmFyIHp1PVtcImRlZmF1bHRcIixcImV4cGVjdGVkXCIsXCJ2YWxpZGF0ZVwiLFwiZGVwcmVjYXRlZFwiLFwiZm9yd2FyZFwiLFwicmVkaXJlY3RcIixcIm92ZXJsYXBcIixcInByZXByb2Nlc3NcIixcInBvc3Rwcm9jZXNzXCJdO2Z1bmN0aW9uIEd1KGUsdCl7bGV0IHI9bmV3IGUodCksbj1PYmplY3QuY3JlYXRlKHIpO2ZvcihsZXQgbyBvZiB6dSlvIGluIHQmJihuW29dPUt1KHRbb10scix3LnByb3RvdHlwZVtvXS5sZW5ndGgpKTtyZXR1cm4gbn12YXIgdz1jbGFzc3tzdGF0aWMgY3JlYXRlKHQpe3JldHVybiBHdSh0aGlzLHQpfWNvbnN0cnVjdG9yKHQpe3RoaXMubmFtZT10Lm5hbWV9ZGVmYXVsdCh0KXt9ZXhwZWN0ZWQodCl7cmV0dXJuXCJub3RoaW5nXCJ9dmFsaWRhdGUodCxyKXtyZXR1cm4hMX1kZXByZWNhdGVkKHQscil7cmV0dXJuITF9Zm9yd2FyZCh0LHIpe31yZWRpcmVjdCh0LHIpe31vdmVybGFwKHQscixuKXtyZXR1cm4gdH1wcmVwcm9jZXNzKHQscil7cmV0dXJuIHR9cG9zdHByb2Nlc3ModCxyKXtyZXR1cm4gcGV9fTtmdW5jdGlvbiBLdShlLHQscil7cmV0dXJuIHR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/KC4uLm4pPT5lKC4uLm4uc2xpY2UoMCxyLTEpLHQsLi4ubi5zbGljZShyLTEpKTooKT0+ZX12YXIgbnQ9Y2xhc3MgZXh0ZW5kcyB3e2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXMuX3NvdXJjZU5hbWU9dC5zb3VyY2VOYW1lfWV4cGVjdGVkKHQpe3JldHVybiB0LnNjaGVtYXNbdGhpcy5fc291cmNlTmFtZV0uZXhwZWN0ZWQodCl9dmFsaWRhdGUodCxyKXtyZXR1cm4gci5zY2hlbWFzW3RoaXMuX3NvdXJjZU5hbWVdLnZhbGlkYXRlKHQscil9cmVkaXJlY3QodCxyKXtyZXR1cm4gdGhpcy5fc291cmNlTmFtZX19O3ZhciB1dD1jbGFzcyBleHRlbmRzIHd7ZXhwZWN0ZWQoKXtyZXR1cm5cImFueXRoaW5nXCJ9dmFsaWRhdGUoKXtyZXR1cm4hMH19O3ZhciBvdD1jbGFzcyBleHRlbmRzIHd7Y29uc3RydWN0b3Ioe3ZhbHVlU2NoZW1hOnQsbmFtZTpyPXQubmFtZSwuLi5ufSl7c3VwZXIoey4uLm4sbmFtZTpyfSksdGhpcy5fdmFsdWVTY2hlbWE9dH1leHBlY3RlZCh0KXtsZXR7dGV4dDpyLGxpc3Q6bn09dC5ub3JtYWxpemVFeHBlY3RlZFJlc3VsdCh0aGlzLl92YWx1ZVNjaGVtYS5leHBlY3RlZCh0KSk7cmV0dXJue3RleHQ6ciYmYGFuIGFycmF5IG9mICR7cn1gLGxpc3Q6biYme3RpdGxlOlwiYW4gYXJyYXkgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXNcIix2YWx1ZXM6W3tsaXN0Om59XX19fXZhbGlkYXRlKHQscil7aWYoIUFycmF5LmlzQXJyYXkodCkpcmV0dXJuITE7bGV0IG49W107Zm9yKGxldCBvIG9mIHQpe2xldCB1PXIubm9ybWFsaXplVmFsaWRhdGVSZXN1bHQodGhpcy5fdmFsdWVTY2hlbWEudmFsaWRhdGUobyxyKSxvKTt1IT09ITAmJm4ucHVzaCh1LnZhbHVlKX1yZXR1cm4gbi5sZW5ndGg9PT0wPyEwOnt2YWx1ZTpufX1kZXByZWNhdGVkKHQscil7bGV0IG49W107Zm9yKGxldCBvIG9mIHQpe2xldCB1PXIubm9ybWFsaXplRGVwcmVjYXRlZFJlc3VsdCh0aGlzLl92YWx1ZVNjaGVtYS5kZXByZWNhdGVkKG8sciksbyk7dSE9PSExJiZuLnB1c2goLi4udS5tYXAoKHt2YWx1ZTppfSk9Pih7dmFsdWU6W2ldfSkpKX1yZXR1cm4gbn1mb3J3YXJkKHQscil7bGV0IG49W107Zm9yKGxldCBvIG9mIHQpe2xldCB1PXIubm9ybWFsaXplRm9yd2FyZFJlc3VsdCh0aGlzLl92YWx1ZVNjaGVtYS5mb3J3YXJkKG8sciksbyk7bi5wdXNoKC4uLnUubWFwKEtyKSl9cmV0dXJuIG59cmVkaXJlY3QodCxyKXtsZXQgbj1bXSxvPVtdO2ZvcihsZXQgdSBvZiB0KXtsZXQgaT1yLm5vcm1hbGl6ZVJlZGlyZWN0UmVzdWx0KHRoaXMuX3ZhbHVlU2NoZW1hLnJlZGlyZWN0KHUsciksdSk7XCJyZW1haW5cImluIGkmJm4ucHVzaChpLnJlbWFpbiksby5wdXNoKC4uLmkucmVkaXJlY3QubWFwKEtyKSl9cmV0dXJuIG4ubGVuZ3RoPT09MD97cmVkaXJlY3Q6b306e3JlZGlyZWN0Om8scmVtYWluOm59fW92ZXJsYXAodCxyKXtyZXR1cm4gdC5jb25jYXQocil9fTtmdW5jdGlvbiBLcih7ZnJvbTplLHRvOnR9KXtyZXR1cm57ZnJvbTpbZV0sdG86dH19dmFyIGl0PWNsYXNzIGV4dGVuZHMgd3tleHBlY3RlZCgpe3JldHVyblwidHJ1ZSBvciBmYWxzZVwifXZhbGlkYXRlKHQpe3JldHVybiB0eXBlb2YgdD09XCJib29sZWFuXCJ9fTtmdW5jdGlvbiBxcihlLHQpe2xldCByPU9iamVjdC5jcmVhdGUobnVsbCk7Zm9yKGxldCBuIG9mIGUpe2xldCBvPW5bdF07aWYocltvXSl0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSAke3R9ICR7SlNPTi5zdHJpbmdpZnkobyl9YCk7cltvXT1ufXJldHVybiByfWZ1bmN0aW9uIEpyKGUsdCl7bGV0IHI9bmV3IE1hcDtmb3IobGV0IG4gb2YgZSl7bGV0IG89blt0XTtpZihyLmhhcyhvKSl0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSAke3R9ICR7SlNPTi5zdHJpbmdpZnkobyl9YCk7ci5zZXQobyxuKX1yZXR1cm4gcn1mdW5jdGlvbiBYcigpe2xldCBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIHQ9PntsZXQgcj1KU09OLnN0cmluZ2lmeSh0KTtyZXR1cm4gZVtyXT8hMDooZVtyXT0hMCwhMSl9fWZ1bmN0aW9uIFpyKGUsdCl7bGV0IHI9W10sbj1bXTtmb3IobGV0IG8gb2YgZSl0KG8pP3IucHVzaChvKTpuLnB1c2gobyk7cmV0dXJuW3Isbl19ZnVuY3Rpb24gUXIoZSl7cmV0dXJuIGU9PT1NYXRoLmZsb29yKGUpfWZ1bmN0aW9uIGVuKGUsdCl7aWYoZT09PXQpcmV0dXJuIDA7bGV0IHI9dHlwZW9mIGUsbj10eXBlb2YgdCxvPVtcInVuZGVmaW5lZFwiLFwib2JqZWN0XCIsXCJib29sZWFuXCIsXCJudW1iZXJcIixcInN0cmluZ1wiXTtyZXR1cm4gciE9PW4/by5pbmRleE9mKHIpLW8uaW5kZXhPZihuKTpyIT09XCJzdHJpbmdcIj9OdW1iZXIoZSktTnVtYmVyKHQpOmUubG9jYWxlQ29tcGFyZSh0KX1mdW5jdGlvbiB0bihlKXtyZXR1cm4oLi4udCk9PntsZXQgcj1lKC4uLnQpO3JldHVybiB0eXBlb2Ygcj09XCJzdHJpbmdcIj9uZXcgRXJyb3Iocik6cn19ZnVuY3Rpb24gVHQoZSl7cmV0dXJuIGU9PT12b2lkIDA/e306ZX1mdW5jdGlvbiBTdChlKXtpZih0eXBlb2YgZT09XCJzdHJpbmdcIilyZXR1cm57dGV4dDplfTtsZXR7dGV4dDp0LGxpc3Q6cn09ZTtyZXR1cm4gSHUoKHR8fHIpIT09dm9pZCAwLFwiVW5leHBlY3RlZCBgZXhwZWN0ZWRgIHJlc3VsdCwgdGhlcmUgc2hvdWxkIGJlIGF0IGxlYXN0IG9uZSBmaWVsZC5cIikscj97dGV4dDp0LGxpc3Q6e3RpdGxlOnIudGl0bGUsdmFsdWVzOnIudmFsdWVzLm1hcChTdCl9fTp7dGV4dDp0fX1mdW5jdGlvbiB2dChlLHQpe3JldHVybiBlPT09ITA/ITA6ZT09PSExP3t2YWx1ZTp0fTplfWZ1bmN0aW9uIFB0KGUsdCxyPSExKXtyZXR1cm4gZT09PSExPyExOmU9PT0hMD9yPyEwOlt7dmFsdWU6dH1dOlwidmFsdWVcImluIGU/W2VdOmUubGVuZ3RoPT09MD8hMTplfWZ1bmN0aW9uIEhyKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wifHxcImtleVwiaW4gZT97ZnJvbTp0LHRvOmV9OlwiZnJvbVwiaW4gZT97ZnJvbTplLmZyb20sdG86ZS50b306e2Zyb206dCx0bzplLnRvfX1mdW5jdGlvbiBzdChlLHQpe3JldHVybiBlPT09dm9pZCAwP1tdOkFycmF5LmlzQXJyYXkoZSk/ZS5tYXAocj0+SHIocix0KSk6W0hyKGUsdCldfWZ1bmN0aW9uIEx0KGUsdCl7bGV0IHI9c3QodHlwZW9mIGU9PVwib2JqZWN0XCImJlwicmVkaXJlY3RcImluIGU/ZS5yZWRpcmVjdDplLHQpO3JldHVybiByLmxlbmd0aD09PTA/e3JlbWFpbjp0LHJlZGlyZWN0OnJ9OnR5cGVvZiBlPT1cIm9iamVjdFwiJiZcInJlbWFpblwiaW4gZT97cmVtYWluOmUucmVtYWluLHJlZGlyZWN0OnJ9OntyZWRpcmVjdDpyfX1mdW5jdGlvbiBIdShlLHQpe2lmKCFlKXRocm93IG5ldyBFcnJvcih0KX12YXIgRHQ9Y2xhc3MgZXh0ZW5kcyB3e2NvbnN0cnVjdG9yKHQpe3N1cGVyKHQpLHRoaXMuX2Nob2ljZXM9SnIodC5jaG9pY2VzLm1hcChyPT5yJiZ0eXBlb2Ygcj09XCJvYmplY3RcIj9yOnt2YWx1ZTpyfSksXCJ2YWx1ZVwiKX1leHBlY3RlZCh7ZGVzY3JpcHRvcjp0fSl7bGV0IHI9QXJyYXkuZnJvbSh0aGlzLl9jaG9pY2VzLmtleXMoKSkubWFwKGk9PnRoaXMuX2Nob2ljZXMuZ2V0KGkpKS5maWx0ZXIoKHtoaWRkZW46aX0pPT4haSkubWFwKGk9PmkudmFsdWUpLnNvcnQoZW4pLm1hcCh0LnZhbHVlKSxuPXIuc2xpY2UoMCwtMiksbz1yLnNsaWNlKC0yKTtyZXR1cm57dGV4dDpuLmNvbmNhdChvLmpvaW4oXCIgb3IgXCIpKS5qb2luKFwiLCBcIiksbGlzdDp7dGl0bGU6XCJvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXNcIix2YWx1ZXM6cn19fXZhbGlkYXRlKHQpe3JldHVybiB0aGlzLl9jaG9pY2VzLmhhcyh0KX1kZXByZWNhdGVkKHQpe2xldCByPXRoaXMuX2Nob2ljZXMuZ2V0KHQpO3JldHVybiByJiZyLmRlcHJlY2F0ZWQ/e3ZhbHVlOnR9OiExfWZvcndhcmQodCl7bGV0IHI9dGhpcy5fY2hvaWNlcy5nZXQodCk7cmV0dXJuIHI/ci5mb3J3YXJkOnZvaWQgMH1yZWRpcmVjdCh0KXtsZXQgcj10aGlzLl9jaG9pY2VzLmdldCh0KTtyZXR1cm4gcj9yLnJlZGlyZWN0OnZvaWQgMH19O3ZhciBhdD1jbGFzcyBleHRlbmRzIHd7ZXhwZWN0ZWQoKXtyZXR1cm5cImEgbnVtYmVyXCJ9dmFsaWRhdGUodCxyKXtyZXR1cm4gdHlwZW9mIHQ9PVwibnVtYmVyXCJ9fTt2YXIgY3Q9Y2xhc3MgZXh0ZW5kcyBhdHtleHBlY3RlZCgpe3JldHVyblwiYW4gaW50ZWdlclwifXZhbGlkYXRlKHQscil7cmV0dXJuIHIubm9ybWFsaXplVmFsaWRhdGVSZXN1bHQoc3VwZXIudmFsaWRhdGUodCxyKSx0KT09PSEwJiZRcih0KX19O3ZhciBMZT1jbGFzcyBleHRlbmRzIHd7ZXhwZWN0ZWQoKXtyZXR1cm5cImEgc3RyaW5nXCJ9dmFsaWRhdGUodCl7cmV0dXJuIHR5cGVvZiB0PT1cInN0cmluZ1wifX07dmFyIHJuPXRlLG5uPXJ0LHVuPVdyLG9uPVZyO3ZhciBsdD1jbGFzc3tjb25zdHJ1Y3Rvcih0LHIpe2xldHtsb2dnZXI6bj1jb25zb2xlLGxvZ2dlclByaW50V2lkdGg6bz04MCxkZXNjcmlwdG9yOnU9cm4sdW5rbm93bjppPW5uLGludmFsaWQ6cz11bixkZXByZWNhdGVkOkQ9b24sbWlzc2luZzphPSgpPT4hMSxyZXF1aXJlZDpjPSgpPT4hMSxwcmVwcm9jZXNzOmQ9cD0+cCxwb3N0cHJvY2VzczpmPSgpPT5wZX09cnx8e307dGhpcy5fdXRpbHM9e2Rlc2NyaXB0b3I6dSxsb2dnZXI6bnx8e3dhcm46KCk9Pnt9fSxsb2dnZXJQcmludFdpZHRoOm8sc2NoZW1hczpxcih0LFwibmFtZVwiKSxub3JtYWxpemVEZWZhdWx0UmVzdWx0OlR0LG5vcm1hbGl6ZUV4cGVjdGVkUmVzdWx0OlN0LG5vcm1hbGl6ZURlcHJlY2F0ZWRSZXN1bHQ6UHQsbm9ybWFsaXplRm9yd2FyZFJlc3VsdDpzdCxub3JtYWxpemVSZWRpcmVjdFJlc3VsdDpMdCxub3JtYWxpemVWYWxpZGF0ZVJlc3VsdDp2dH0sdGhpcy5fdW5rbm93bkhhbmRsZXI9aSx0aGlzLl9pbnZhbGlkSGFuZGxlcj10bihzKSx0aGlzLl9kZXByZWNhdGVkSGFuZGxlcj1ELHRoaXMuX2lkZW50aWZ5TWlzc2luZz0ocCxsKT0+IShwIGluIGwpfHxhKHAsbCksdGhpcy5faWRlbnRpZnlSZXF1aXJlZD1jLHRoaXMuX3ByZXByb2Nlc3M9ZCx0aGlzLl9wb3N0cHJvY2Vzcz1mLHRoaXMuY2xlYW5IaXN0b3J5KCl9Y2xlYW5IaXN0b3J5KCl7dGhpcy5faGFzRGVwcmVjYXRpb25XYXJuZWQ9WHIoKX1ub3JtYWxpemUodCl7bGV0IHI9e30sbz1bdGhpcy5fcHJlcHJvY2Vzcyh0LHRoaXMuX3V0aWxzKV0sdT0oKT0+e2Zvcig7by5sZW5ndGghPT0wOyl7bGV0IGk9by5zaGlmdCgpLHM9dGhpcy5fYXBwbHlOb3JtYWxpemF0aW9uKGkscik7by5wdXNoKC4uLnMpfX07dSgpO2ZvcihsZXQgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl91dGlscy5zY2hlbWFzKSl7bGV0IHM9dGhpcy5fdXRpbHMuc2NoZW1hc1tpXTtpZighKGkgaW4gcikpe2xldCBEPVR0KHMuZGVmYXVsdCh0aGlzLl91dGlscykpO1widmFsdWVcImluIEQmJm8ucHVzaCh7W2ldOkQudmFsdWV9KX19dSgpO2ZvcihsZXQgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl91dGlscy5zY2hlbWFzKSl7aWYoIShpIGluIHIpKWNvbnRpbnVlO2xldCBzPXRoaXMuX3V0aWxzLnNjaGVtYXNbaV0sRD1yW2ldLGE9cy5wb3N0cHJvY2VzcyhELHRoaXMuX3V0aWxzKTthIT09cGUmJih0aGlzLl9hcHBseVZhbGlkYXRpb24oYSxpLHMpLHJbaV09YSl9cmV0dXJuIHRoaXMuX2FwcGx5UG9zdHByb2Nlc3MociksdGhpcy5fYXBwbHlSZXF1aXJlZENoZWNrKHIpLHJ9X2FwcGx5Tm9ybWFsaXphdGlvbih0LHIpe2xldCBuPVtdLHtrbm93bktleXM6byx1bmtub3duS2V5czp1fT10aGlzLl9wYXJ0aXRpb25PcHRpb25LZXlzKHQpO2ZvcihsZXQgaSBvZiBvKXtsZXQgcz10aGlzLl91dGlscy5zY2hlbWFzW2ldLEQ9cy5wcmVwcm9jZXNzKHRbaV0sdGhpcy5fdXRpbHMpO3RoaXMuX2FwcGx5VmFsaWRhdGlvbihELGkscyk7bGV0IGE9KHtmcm9tOnAsdG86bH0pPT57bi5wdXNoKHR5cGVvZiBsPT1cInN0cmluZ1wiP3tbbF06cH06e1tsLmtleV06bC52YWx1ZX0pfSxjPSh7dmFsdWU6cCxyZWRpcmVjdFRvOmx9KT0+e2xldCBGPVB0KHMuZGVwcmVjYXRlZChwLHRoaXMuX3V0aWxzKSxELCEwKTtpZihGIT09ITEpaWYoRj09PSEwKXRoaXMuX2hhc0RlcHJlY2F0aW9uV2FybmVkKGkpfHx0aGlzLl91dGlscy5sb2dnZXIud2Fybih0aGlzLl9kZXByZWNhdGVkSGFuZGxlcihpLGwsdGhpcy5fdXRpbHMpKTtlbHNlIGZvcihsZXR7dmFsdWU6bX1vZiBGKXtsZXQgRT17a2V5OmksdmFsdWU6bX07aWYoIXRoaXMuX2hhc0RlcHJlY2F0aW9uV2FybmVkKEUpKXtsZXQgQz10eXBlb2YgbD09XCJzdHJpbmdcIj97a2V5OmwsdmFsdWU6bX06bDt0aGlzLl91dGlscy5sb2dnZXIud2Fybih0aGlzLl9kZXByZWNhdGVkSGFuZGxlcihFLEMsdGhpcy5fdXRpbHMpKX19fTtzdChzLmZvcndhcmQoRCx0aGlzLl91dGlscyksRCkuZm9yRWFjaChhKTtsZXQgZj1MdChzLnJlZGlyZWN0KEQsdGhpcy5fdXRpbHMpLEQpO2lmKGYucmVkaXJlY3QuZm9yRWFjaChhKSxcInJlbWFpblwiaW4gZil7bGV0IHA9Zi5yZW1haW47cltpXT1pIGluIHI/cy5vdmVybGFwKHJbaV0scCx0aGlzLl91dGlscyk6cCxjKHt2YWx1ZTpwfSl9Zm9yKGxldHtmcm9tOnAsdG86bH1vZiBmLnJlZGlyZWN0KWMoe3ZhbHVlOnAscmVkaXJlY3RUbzpsfSl9Zm9yKGxldCBpIG9mIHUpe2xldCBzPXRbaV07dGhpcy5fYXBwbHlVbmtub3duSGFuZGxlcihpLHMsciwoRCxhKT0+e24ucHVzaCh7W0RdOmF9KX0pfXJldHVybiBufV9hcHBseVJlcXVpcmVkQ2hlY2sodCl7Zm9yKGxldCByIG9mIE9iamVjdC5rZXlzKHRoaXMuX3V0aWxzLnNjaGVtYXMpKWlmKHRoaXMuX2lkZW50aWZ5TWlzc2luZyhyLHQpJiZ0aGlzLl9pZGVudGlmeVJlcXVpcmVkKHIpKXRocm93IHRoaXMuX2ludmFsaWRIYW5kbGVyKHIsdHQsdGhpcy5fdXRpbHMpfV9wYXJ0aXRpb25PcHRpb25LZXlzKHQpe2xldFtyLG5dPVpyKE9iamVjdC5rZXlzKHQpLmZpbHRlcihvPT4hdGhpcy5faWRlbnRpZnlNaXNzaW5nKG8sdCkpLG89Pm8gaW4gdGhpcy5fdXRpbHMuc2NoZW1hcyk7cmV0dXJue2tub3duS2V5czpyLHVua25vd25LZXlzOm59fV9hcHBseVZhbGlkYXRpb24odCxyLG4pe2xldCBvPXZ0KG4udmFsaWRhdGUodCx0aGlzLl91dGlscyksdCk7aWYobyE9PSEwKXRocm93IHRoaXMuX2ludmFsaWRIYW5kbGVyKHIsby52YWx1ZSx0aGlzLl91dGlscyl9X2FwcGx5VW5rbm93bkhhbmRsZXIodCxyLG4sbyl7bGV0IHU9dGhpcy5fdW5rbm93bkhhbmRsZXIodCxyLHRoaXMuX3V0aWxzKTtpZih1KWZvcihsZXQgaSBvZiBPYmplY3Qua2V5cyh1KSl7aWYodGhpcy5faWRlbnRpZnlNaXNzaW5nKGksdSkpY29udGludWU7bGV0IHM9dVtpXTtpIGluIHRoaXMuX3V0aWxzLnNjaGVtYXM/byhpLHMpOm5baV09c319X2FwcGx5UG9zdHByb2Nlc3ModCl7bGV0IHI9dGhpcy5fcG9zdHByb2Nlc3ModCx0aGlzLl91dGlscyk7aWYociE9PXBlKXtpZihyLmRlbGV0ZSlmb3IobGV0IG4gb2Ygci5kZWxldGUpZGVsZXRlIHRbbl07aWYoci5vdmVycmlkZSl7bGV0e2tub3duS2V5czpuLHVua25vd25LZXlzOm99PXRoaXMuX3BhcnRpdGlvbk9wdGlvbktleXMoci5vdmVycmlkZSk7Zm9yKGxldCB1IG9mIG4pe2xldCBpPXIub3ZlcnJpZGVbdV07dGhpcy5fYXBwbHlWYWxpZGF0aW9uKGksdSx0aGlzLl91dGlscy5zY2hlbWFzW3VdKSx0W3VdPWl9Zm9yKGxldCB1IG9mIG8pe2xldCBpPXIub3ZlcnJpZGVbdV07dGhpcy5fYXBwbHlVbmtub3duSGFuZGxlcih1LGksdCwocyxEKT0+e2xldCBhPXRoaXMuX3V0aWxzLnNjaGVtYXNbc107dGhpcy5fYXBwbHlWYWxpZGF0aW9uKEQscyxhKSx0W3NdPUR9KX19fX19O3ZhciBJdDtmdW5jdGlvbiBKdShlLHQse2xvZ2dlcjpyPSExLGlzQ0xJOm49ITEscGFzc1Rocm91Z2g6bz0hMSxGbGFnU2NoZW1hOnUsZGVzY3JpcHRvcjppfT17fSl7aWYobil7aWYoIXUpdGhyb3cgbmV3IEVycm9yKFwiJ0ZsYWdTY2hlbWEnIG9wdGlvbiBpcyByZXF1aXJlZC5cIik7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiJ2Rlc2NyaXB0b3InIG9wdGlvbiBpcyByZXF1aXJlZC5cIil9ZWxzZSBpPXRlO2xldCBzPW8/QXJyYXkuaXNBcnJheShvKT8oZixwKT0+by5pbmNsdWRlcyhmKT97W2ZdOnB9OnZvaWQgMDooZixwKT0+KHtbZl06cH0pOihmLHAsbCk9PntsZXR7XzpGLC4uLm19PWwuc2NoZW1hcztyZXR1cm4gcnQoZixwLHsuLi5sLHNjaGVtYXM6bX0pfSxEPVh1KHQse2lzQ0xJOm4sRmxhZ1NjaGVtYTp1fSksYT1uZXcgbHQoRCx7bG9nZ2VyOnIsdW5rbm93bjpzLGRlc2NyaXB0b3I6aX0pLGM9ciE9PSExO2MmJkl0JiYoYS5faGFzRGVwcmVjYXRpb25XYXJuZWQ9SXQpO2xldCBkPWEubm9ybWFsaXplKGUpO3JldHVybiBjJiYoSXQ9YS5faGFzRGVwcmVjYXRpb25XYXJuZWQpLGR9ZnVuY3Rpb24gWHUoZSx7aXNDTEk6dCxGbGFnU2NoZW1hOnJ9KXtsZXQgbj1bXTt0JiZuLnB1c2godXQuY3JlYXRlKHtuYW1lOlwiX1wifSkpO2ZvcihsZXQgbyBvZiBlKW4ucHVzaChadShvLHtpc0NMSTp0LG9wdGlvbkluZm9zOmUsRmxhZ1NjaGVtYTpyfSkpLG8uYWxpYXMmJnQmJm4ucHVzaChudC5jcmVhdGUoe25hbWU6by5hbGlhcyxzb3VyY2VOYW1lOm8ubmFtZX0pKTtyZXR1cm4gbn1mdW5jdGlvbiBadShlLHtpc0NMSTp0LG9wdGlvbkluZm9zOnIsRmxhZ1NjaGVtYTpufSl7bGV0e25hbWU6b309ZSx1PXtuYW1lOm99LGkscz17fTtzd2l0Y2goZS50eXBlKXtjYXNlXCJpbnRcIjppPWN0LHQmJih1LnByZXByb2Nlc3M9TnVtYmVyKTticmVhaztjYXNlXCJzdHJpbmdcIjppPUxlO2JyZWFrO2Nhc2VcImNob2ljZVwiOmk9RHQsdS5jaG9pY2VzPWUuY2hvaWNlcy5tYXAoRD0+RCE9bnVsbCYmRC5yZWRpcmVjdD97Li4uRCxyZWRpcmVjdDp7dG86e2tleTplLm5hbWUsdmFsdWU6RC5yZWRpcmVjdH19fTpEKTticmVhaztjYXNlXCJib29sZWFuXCI6aT1pdDticmVhaztjYXNlXCJmbGFnXCI6aT1uLHUuZmxhZ3M9ci5mbGF0TWFwKEQ9PltELmFsaWFzLEQuZGVzY3JpcHRpb24mJkQubmFtZSxELm9wcG9zaXRlRGVzY3JpcHRpb24mJmBuby0ke0QubmFtZX1gXS5maWx0ZXIoQm9vbGVhbikpO2JyZWFrO2Nhc2VcInBhdGhcIjppPUxlO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHR5cGUgJHtlLnR5cGV9YCl9aWYoZS5leGNlcHRpb24/dS52YWxpZGF0ZT0oRCxhLGMpPT5lLmV4Y2VwdGlvbihEKXx8YS52YWxpZGF0ZShELGMpOnUudmFsaWRhdGU9KEQsYSxjKT0+RD09PXZvaWQgMHx8YS52YWxpZGF0ZShELGMpLGUucmVkaXJlY3QmJihzLnJlZGlyZWN0PUQ9PkQ/e3RvOntrZXk6ZS5yZWRpcmVjdC5vcHRpb24sdmFsdWU6ZS5yZWRpcmVjdC52YWx1ZX19OnZvaWQgMCksZS5kZXByZWNhdGVkJiYocy5kZXByZWNhdGVkPSEwKSx0JiYhZS5hcnJheSl7bGV0IEQ9dS5wcmVwcm9jZXNzfHwoYT0+YSk7dS5wcmVwcm9jZXNzPShhLGMsZCk9PmMucHJlcHJvY2VzcyhEKEFycmF5LmlzQXJyYXkoYSk/eSghMSxhLC0xKTphKSxkKX1yZXR1cm4gZS5hcnJheT9vdC5jcmVhdGUoey4uLnQ/e3ByZXByb2Nlc3M6RD0+QXJyYXkuaXNBcnJheShEKT9EOltEXX06e30sLi4ucyx2YWx1ZVNjaGVtYTppLmNyZWF0ZSh1KX0pOmkuY3JlYXRlKHsuLi51LC4uLnN9KX12YXIgc249SnU7ZnVuY3Rpb24gUnQoZSx0KXtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJwYXJzZXJOYW1lIGlzIHJlcXVpcmVkLlwiKTtmb3IobGV0IG49ZS5sZW5ndGgtMTtuPj0wO24tLSl7bGV0IG89ZVtuXTtpZihvLnBhcnNlcnMmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLnBhcnNlcnMsdCkpcmV0dXJuIG99bGV0IHI9YENvdWxkbid0IHJlc29sdmUgcGFyc2VyIFwiJHt0fVwiLmA7dGhyb3cgcis9XCIgUGx1Z2lucyBtdXN0IGJlIGV4cGxpY2l0bHkgYWRkZWQgdG8gdGhlIHN0YW5kYWxvbmUgYnVuZGxlLlwiLG5ldyBTZShyKX1mdW5jdGlvbiBEbihlLHQpe2lmKCF0KXRocm93IG5ldyBFcnJvcihcImFzdEZvcm1hdCBpcyByZXF1aXJlZC5cIik7Zm9yKGxldCBuPWUubGVuZ3RoLTE7bj49MDtuLS0pe2xldCBvPWVbbl07aWYoby5wcmludGVycyYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8ucHJpbnRlcnMsdCkpcmV0dXJuIG99bGV0IHI9YENvdWxkbid0IGZpbmQgcGx1Z2luIGZvciBBU1QgZm9ybWF0IFwiJHt0fVwiLmA7dGhyb3cgcis9XCIgUGx1Z2lucyBtdXN0IGJlIGV4cGxpY2l0bHkgYWRkZWQgdG8gdGhlIHN0YW5kYWxvbmUgYnVuZGxlLlwiLG5ldyBTZShyKX1mdW5jdGlvbiBmdCh7cGx1Z2luczplLHBhcnNlcjp0fSl7bGV0IHI9UnQoZSx0KTtyZXR1cm4gWXQocix0KX1mdW5jdGlvbiBZdChlLHQpe2xldCByPWUucGFyc2Vyc1t0XTtyZXR1cm4gdHlwZW9mIHI9PVwiZnVuY3Rpb25cIj9yKCk6cn1mdW5jdGlvbiBhbihlLHQpe2xldCByPWUucHJpbnRlcnNbdF07cmV0dXJuIHR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cigpOnJ9dmFyIGNuPXthc3RGb3JtYXQ6XCJlc3RyZWVcIixwcmludGVyOnt9LG9yaWdpbmFsVGV4dDp2b2lkIDAsbG9jU3RhcnQ6bnVsbCxsb2NFbmQ6bnVsbH07YXN5bmMgZnVuY3Rpb24gUXUoZSx0PXt9KXt2YXIgZDtsZXQgcj17Li4uZX07aWYoIXIucGFyc2VyKWlmKHIuZmlsZXBhdGgpe2lmKHIucGFyc2VyPVJyKHIse3BoeXNpY2FsRmlsZTpyLmZpbGVwYXRofSksIXIucGFyc2VyKXRocm93IG5ldyB2ZShgTm8gcGFyc2VyIGNvdWxkIGJlIGluZmVycmVkIGZvciBmaWxlIFwiJHtyLmZpbGVwYXRofVwiLmApfWVsc2UgdGhyb3cgbmV3IHZlKFwiTm8gcGFyc2VyIGFuZCBubyBmaWxlIHBhdGggZ2l2ZW4sIGNvdWxkbid0IGluZmVyIGEgcGFyc2VyLlwiKTtsZXQgbj1ldCh7cGx1Z2luczplLnBsdWdpbnMsc2hvd0RlcHJlY2F0ZWQ6ITB9KS5vcHRpb25zLG89ey4uLmNuLC4uLk9iamVjdC5mcm9tRW50cmllcyhuLmZpbHRlcihmPT5mLmRlZmF1bHQhPT12b2lkIDApLm1hcChmPT5bZi5uYW1lLGYuZGVmYXVsdF0pKX0sdT1SdChyLnBsdWdpbnMsci5wYXJzZXIpLGk9YXdhaXQgWXQodSxyLnBhcnNlcik7ci5hc3RGb3JtYXQ9aS5hc3RGb3JtYXQsci5sb2NFbmQ9aS5sb2NFbmQsci5sb2NTdGFydD1pLmxvY1N0YXJ0O2xldCBzPShkPXUucHJpbnRlcnMpIT1udWxsJiZkW2kuYXN0Rm9ybWF0XT91OkRuKHIucGx1Z2lucyxpLmFzdEZvcm1hdCksRD1hd2FpdCBhbihzLGkuYXN0Rm9ybWF0KTtyLnByaW50ZXI9RDtsZXQgYT1zLmRlZmF1bHRPcHRpb25zP09iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhzLmRlZmF1bHRPcHRpb25zKS5maWx0ZXIoKFssZl0pPT5mIT09dm9pZCAwKSk6e30sYz17Li4ubywuLi5hfTtmb3IobGV0W2YscF1vZiBPYmplY3QuZW50cmllcyhjKSkocltmXT09PW51bGx8fHJbZl09PT12b2lkIDApJiYocltmXT1wKTtyZXR1cm4gci5wYXJzZXI9PT1cImpzb25cIiYmKHIudHJhaWxpbmdDb21tYT1cIm5vbmVcIiksc24ocixuLHtwYXNzVGhyb3VnaDpPYmplY3Qua2V5cyhjbiksLi4udH0pfXZhciByZT1RdTt2YXIgbG49bmV3IFNldChbXCJ0b2tlbnNcIixcImNvbW1lbnRzXCIsXCJwYXJlbnRcIixcImVuY2xvc2luZ05vZGVcIixcInByZWNlZGluZ05vZGVcIixcImZvbGxvd2luZ05vZGVcIl0pLGVvPWU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcih0PT4hbG4uaGFzKHQpKTtmdW5jdGlvbiB0byhlKXtyZXR1cm4gZT90PT5lKHQsbG4pOmVvfXZhciBIPXRvO2Z1bmN0aW9uIHJvKGUsdCl7bGV0e3ByaW50ZXI6e21hc3NhZ2VBc3ROb2RlOnIsZ2V0VmlzaXRvcktleXM6bn19PXQ7aWYoIXIpcmV0dXJuIGU7bGV0IG89SChuKSx1PXIuaWdub3JlZFByb3BlcnRpZXM/P25ldyBTZXQ7cmV0dXJuIGkoZSk7ZnVuY3Rpb24gaShzLEQpe2lmKCEocyE9PW51bGwmJnR5cGVvZiBzPT1cIm9iamVjdFwiKSlyZXR1cm4gcztpZihBcnJheS5pc0FycmF5KHMpKXJldHVybiBzLm1hcChmPT5pKGYsRCkpLmZpbHRlcihCb29sZWFuKTtsZXQgYT17fSxjPW5ldyBTZXQobyhzKSk7Zm9yKGxldCBmIGluIHMpIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLGYpfHx1LmhhcyhmKXx8KGMuaGFzKGYpP2FbZl09aShzW2ZdLHMpOmFbZl09c1tmXSk7bGV0IGQ9cihzLGEsRCk7aWYoZCE9PW51bGwpcmV0dXJuIGQ/P2F9fXZhciBmbj1ybzt2YXIgQW49aGUoeW4oKSwxKTthc3luYyBmdW5jdGlvbiBjbyhlLHQpe2xldCByPWF3YWl0IGZ0KHQpLG49ci5wcmVwcm9jZXNzP3IucHJlcHJvY2VzcyhlLHQpOmU7dC5vcmlnaW5hbFRleHQ9bjtsZXQgbzt0cnl7bz1hd2FpdCByLnBhcnNlKG4sdCx0KX1jYXRjaCh1KXtsbyh1LGUpfXJldHVybnt0ZXh0Om4sYXN0Om99fWZ1bmN0aW9uIGxvKGUsdCl7bGV0e2xvYzpyfT1lO2lmKHIpe2xldCBuPSgwLEFuLmNvZGVGcmFtZUNvbHVtbnMpKHQscix7aGlnaGxpZ2h0Q29kZTohMH0pO3Rocm93IGUubWVzc2FnZSs9YFxuYCtuLGUuY29kZUZyYW1lPW4sZX10aHJvdyBlfXZhciBEZT1jbzt2YXIgSWUsJHQsZGUscHQsVnQ9Y2xhc3N7Y29uc3RydWN0b3IodCl7aHQodGhpcyxJZSk7aHQodGhpcyxkZSk7dGhpcy5zdGFjaz1bdF19Z2V0IGtleSgpe2xldHtzdGFjazp0LHNpYmxpbmdzOnJ9PXRoaXM7cmV0dXJuIHkoITEsdCxyPT09bnVsbD8tMjotNCk/P251bGx9Z2V0IGluZGV4KCl7cmV0dXJuIHRoaXMuc2libGluZ3M9PT1udWxsP251bGw6eSghMSx0aGlzLnN0YWNrLC0yKX1nZXQgbm9kZSgpe3JldHVybiB5KCExLHRoaXMuc3RhY2ssLTEpfWdldCBwYXJlbnQoKXtyZXR1cm4gdGhpcy5nZXROb2RlKDEpfWdldCBncmFuZHBhcmVudCgpe3JldHVybiB0aGlzLmdldE5vZGUoMil9Z2V0IGlzSW5BcnJheSgpe3JldHVybiB0aGlzLnNpYmxpbmdzIT09bnVsbH1nZXQgc2libGluZ3MoKXtsZXR7c3RhY2s6dH09dGhpcyxyPXkoITEsdCwtMyk7cmV0dXJuIEFycmF5LmlzQXJyYXkocik/cjpudWxsfWdldCBuZXh0KCl7bGV0e3NpYmxpbmdzOnR9PXRoaXM7cmV0dXJuIHQ9PT1udWxsP251bGw6dFt0aGlzLmluZGV4KzFdfWdldCBwcmV2aW91cygpe2xldHtzaWJsaW5nczp0fT10aGlzO3JldHVybiB0PT09bnVsbD9udWxsOnRbdGhpcy5pbmRleC0xXX1nZXQgaXNGaXJzdCgpe3JldHVybiB0aGlzLmluZGV4PT09MH1nZXQgaXNMYXN0KCl7bGV0e3NpYmxpbmdzOnQsaW5kZXg6cn09dGhpcztyZXR1cm4gdCE9PW51bGwmJnI9PT10Lmxlbmd0aC0xfWdldCBpc1Jvb3QoKXtyZXR1cm4gdGhpcy5zdGFjay5sZW5ndGg9PT0xfWdldCByb290KCl7cmV0dXJuIHRoaXMuc3RhY2tbMF19Z2V0IGFuY2VzdG9ycygpe3JldHVyblsuLi5jZSh0aGlzLGRlLHB0KS5jYWxsKHRoaXMpXX1nZXROYW1lKCl7bGV0e3N0YWNrOnR9PXRoaXMse2xlbmd0aDpyfT10O3JldHVybiByPjE/eSghMSx0LC0yKTpudWxsfWdldFZhbHVlKCl7cmV0dXJuIHkoITEsdGhpcy5zdGFjaywtMSl9Z2V0Tm9kZSh0PTApe2xldCByPWNlKHRoaXMsSWUsJHQpLmNhbGwodGhpcyx0KTtyZXR1cm4gcj09PS0xP251bGw6dGhpcy5zdGFja1tyXX1nZXRQYXJlbnROb2RlKHQ9MCl7cmV0dXJuIHRoaXMuZ2V0Tm9kZSh0KzEpfWNhbGwodCwuLi5yKXtsZXR7c3RhY2s6bn09dGhpcyx7bGVuZ3RoOm99PW4sdT15KCExLG4sLTEpO2ZvcihsZXQgaSBvZiByKXU9dVtpXSxuLnB1c2goaSx1KTt0cnl7cmV0dXJuIHQodGhpcyl9ZmluYWxseXtuLmxlbmd0aD1vfX1jYWxsUGFyZW50KHQscj0wKXtsZXQgbj1jZSh0aGlzLEllLCR0KS5jYWxsKHRoaXMscisxKSxvPXRoaXMuc3RhY2suc3BsaWNlKG4rMSk7dHJ5e3JldHVybiB0KHRoaXMpfWZpbmFsbHl7dGhpcy5zdGFjay5wdXNoKC4uLm8pfX1lYWNoKHQsLi4ucil7bGV0e3N0YWNrOm59PXRoaXMse2xlbmd0aDpvfT1uLHU9eSghMSxuLC0xKTtmb3IobGV0IGkgb2Ygcil1PXVbaV0sbi5wdXNoKGksdSk7dHJ5e2ZvcihsZXQgaT0wO2k8dS5sZW5ndGg7KytpKW4ucHVzaChpLHVbaV0pLHQodGhpcyxpLHUpLG4ubGVuZ3RoLT0yfWZpbmFsbHl7bi5sZW5ndGg9b319bWFwKHQsLi4ucil7bGV0IG49W107cmV0dXJuIHRoaXMuZWFjaCgobyx1LGkpPT57blt1XT10KG8sdSxpKX0sLi4uciksbn1tYXRjaCguLi50KXtsZXQgcj10aGlzLnN0YWNrLmxlbmd0aC0xLG49bnVsbCxvPXRoaXMuc3RhY2tbci0tXTtmb3IobGV0IHUgb2YgdCl7aWYobz09PXZvaWQgMClyZXR1cm4hMTtsZXQgaT1udWxsO2lmKHR5cGVvZiBuPT1cIm51bWJlclwiJiYoaT1uLG49dGhpcy5zdGFja1tyLS1dLG89dGhpcy5zdGFja1tyLS1dKSx1JiYhdShvLG4saSkpcmV0dXJuITE7bj10aGlzLnN0YWNrW3ItLV0sbz10aGlzLnN0YWNrW3ItLV19cmV0dXJuITB9ZmluZEFuY2VzdG9yKHQpe2ZvcihsZXQgciBvZiBjZSh0aGlzLGRlLHB0KS5jYWxsKHRoaXMpKWlmKHQocikpcmV0dXJuIHJ9aGFzQW5jZXN0b3IodCl7Zm9yKGxldCByIG9mIGNlKHRoaXMsZGUscHQpLmNhbGwodGhpcykpaWYodChyKSlyZXR1cm4hMDtyZXR1cm4hMX19O0llPW5ldyBXZWFrU2V0LCR0PWZ1bmN0aW9uKHQpe2xldHtzdGFjazpyfT10aGlzO2ZvcihsZXQgbj1yLmxlbmd0aC0xO24+PTA7bi09MilpZighQXJyYXkuaXNBcnJheShyW25dKSYmLS10PDApcmV0dXJuIG47cmV0dXJuLTF9LGRlPW5ldyBXZWFrU2V0LHB0PWZ1bmN0aW9uKigpe2xldHtzdGFjazp0fT10aGlzO2ZvcihsZXQgcj10Lmxlbmd0aC0zO3I+PTA7ci09Mil7bGV0IG49dFtyXTtBcnJheS5pc0FycmF5KG4pfHwoeWllbGQgbil9fTt2YXIgQm49VnQ7dmFyIF9uPW5ldyBQcm94eSgoKT0+e30se2dldDooKT0+X259KSxSZT1fbjtmdW5jdGlvbiBtZShlKXtyZXR1cm4odCxyLG4pPT57bGV0IG89ISEobiE9bnVsbCYmbi5iYWNrd2FyZHMpO2lmKHI9PT0hMSlyZXR1cm4hMTtsZXR7bGVuZ3RoOnV9PXQsaT1yO2Zvcig7aT49MCYmaTx1Oyl7bGV0IHM9dC5jaGFyQXQoaSk7aWYoZSBpbnN0YW5jZW9mIFJlZ0V4cCl7aWYoIWUudGVzdChzKSlyZXR1cm4gaX1lbHNlIGlmKCFlLmluY2x1ZGVzKHMpKXJldHVybiBpO28/aS0tOmkrK31yZXR1cm4gaT09PS0xfHxpPT09dT9pOiExfX12YXIgeG49bWUoL1xccy8pLE49bWUoXCIgXHRcIiksZHQ9bWUoXCIsOyBcdFwiKSxtdD1tZSgvW15cXG5cXHJdLyk7ZnVuY3Rpb24gZm8oZSx0LHIpe2xldCBuPSEhKHIhPW51bGwmJnIuYmFja3dhcmRzKTtpZih0PT09ITEpcmV0dXJuITE7bGV0IG89ZS5jaGFyQXQodCk7aWYobil7aWYoZS5jaGFyQXQodC0xKT09PVwiXFxyXCImJm89PT1gXG5gKXJldHVybiB0LTI7aWYobz09PWBcbmB8fG89PT1cIlxcclwifHxvPT09XCJcXHUyMDI4XCJ8fG89PT1cIlxcdTIwMjlcIilyZXR1cm4gdC0xfWVsc2V7aWYobz09PVwiXFxyXCImJmUuY2hhckF0KHQrMSk9PT1gXG5gKXJldHVybiB0KzI7aWYobz09PWBcbmB8fG89PT1cIlxcclwifHxvPT09XCJcXHUyMDI4XCJ8fG89PT1cIlxcdTIwMjlcIilyZXR1cm4gdCsxfXJldHVybiB0fXZhciBZPWZvO2Z1bmN0aW9uIEZvKGUsdCxyPXt9KXtsZXQgbj1OKGUsci5iYWNrd2FyZHM/dC0xOnQsciksbz1ZKGUsbixyKTtyZXR1cm4gbiE9PW99dmFyIFY9Rm87ZnVuY3Rpb24gcG8oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSkmJmUubGVuZ3RoPjB9dmFyIE10PXBvO2Z1bmN0aW9uIG1vKGUpe3JldHVybiBlIT09bnVsbCYmdHlwZW9mIGU9PVwib2JqZWN0XCJ9dmFyIGtuPW1vO2Z1bmN0aW9uKld0KGUsdCl7bGV0e2dldFZpc2l0b3JLZXlzOnIsZmlsdGVyOm49KCk9PiEwfT10LG89dT0+a24odSkmJm4odSk7Zm9yKGxldCB1IG9mIHIoZSkpe2xldCBpPWVbdV07aWYoQXJyYXkuaXNBcnJheShpKSlmb3IobGV0IHMgb2YgaSlvKHMpJiYoeWllbGQgcyk7ZWxzZSBvKGkpJiYoeWllbGQgaSl9fWZ1bmN0aW9uKmJuKGUsdCl7bGV0IHI9W2VdO2ZvcihsZXQgbj0wO248ci5sZW5ndGg7bisrKXtsZXQgbz1yW25dO2ZvcihsZXQgdSBvZiBXdChvLHQpKXlpZWxkIHUsci5wdXNoKHUpfX1mdW5jdGlvbiBFbyhlKXtsZXQgdD1lLnR5cGV8fGUua2luZHx8XCIodW5rbm93biB0eXBlKVwiLHI9U3RyaW5nKGUubmFtZXx8ZS5pZCYmKHR5cGVvZiBlLmlkPT1cIm9iamVjdFwiP2UuaWQubmFtZTplLmlkKXx8ZS5rZXkmJih0eXBlb2YgZS5rZXk9PVwib2JqZWN0XCI/ZS5rZXkubmFtZTplLmtleSl8fGUudmFsdWUmJih0eXBlb2YgZS52YWx1ZT09XCJvYmplY3RcIj9cIlwiOlN0cmluZyhlLnZhbHVlKSl8fGUub3BlcmF0b3J8fFwiXCIpO3JldHVybiByLmxlbmd0aD4yMCYmKHI9ci5zbGljZSgwLDE5KStcIlxcdTIwMjZcIiksdCsocj9cIiBcIityOlwiXCIpfWZ1bmN0aW9uIFV0KGUsdCl7KGUuY29tbWVudHM/PyhlLmNvbW1lbnRzPVtdKSkucHVzaCh0KSx0LnByaW50ZWQ9ITEsdC5ub2RlRGVzY3JpcHRpb249RW8oZSl9ZnVuY3Rpb24gbmUoZSx0KXt0LmxlYWRpbmc9ITAsdC50cmFpbGluZz0hMSxVdChlLHQpfWZ1bmN0aW9uIFgoZSx0LHIpe3QubGVhZGluZz0hMSx0LnRyYWlsaW5nPSExLHImJih0Lm1hcmtlcj1yKSxVdChlLHQpfWZ1bmN0aW9uIHVlKGUsdCl7dC5sZWFkaW5nPSExLHQudHJhaWxpbmc9ITAsVXQoZSx0KX12YXIgenQ9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gRXQoZSx0KXtpZih6dC5oYXMoZSkpcmV0dXJuIHp0LmdldChlKTtsZXR7cHJpbnRlcjp7Z2V0Q29tbWVudENoaWxkTm9kZXM6cixjYW5BdHRhY2hDb21tZW50Om4sZ2V0VmlzaXRvcktleXM6b30sbG9jU3RhcnQ6dSxsb2NFbmQ6aX09dDtpZighbilyZXR1cm5bXTtsZXQgcz0oKHI9PW51bGw/dm9pZCAwOnIoZSx0KSk/P1suLi5XdChlLHtnZXRWaXNpdG9yS2V5czpIKG8pfSldKS5mbGF0TWFwKEQ9Pm4oRCk/W0RdOkV0KEQsdCkpO3JldHVybiBzLnNvcnQoKEQsYSk9PnUoRCktdShhKXx8aShEKS1pKGEpKSx6dC5zZXQoZSxzKSxzfWZ1bmN0aW9uIE9uKGUsdCxyLG4pe2xldHtsb2NTdGFydDpvLGxvY0VuZDp1fT1yLGk9byh0KSxzPXUodCksRD1FdChlLHIpLGEsYyxkPTAsZj1ELmxlbmd0aDtmb3IoO2Q8Zjspe2xldCBwPWQrZj4+MSxsPURbcF0sRj1vKGwpLG09dShsKTtpZihGPD1pJiZzPD1tKXJldHVybiBPbihsLHQscixsKTtpZihtPD1pKXthPWwsZD1wKzE7Y29udGludWV9aWYoczw9Ril7Yz1sLGY9cDtjb250aW51ZX10aHJvdyBuZXcgRXJyb3IoXCJDb21tZW50IGxvY2F0aW9uIG92ZXJsYXBzIHdpdGggbm9kZSBsb2NhdGlvblwiKX1pZigobj09bnVsbD92b2lkIDA6bi50eXBlKT09PVwiVGVtcGxhdGVMaXRlcmFsXCIpe2xldHtxdWFzaXM6cH09bixsPUt0KHAsdCxyKTthJiZLdChwLGEscikhPT1sJiYoYT1udWxsKSxjJiZLdChwLGMscikhPT1sJiYoYz1udWxsKX1yZXR1cm57ZW5jbG9zaW5nTm9kZTpuLHByZWNlZGluZ05vZGU6YSxmb2xsb3dpbmdOb2RlOmN9fXZhciBHdD0oKT0+ITE7ZnVuY3Rpb24gTm4oZSx0KXtsZXR7Y29tbWVudHM6cn09ZTtpZihkZWxldGUgZS5jb21tZW50cywhTXQocil8fCF0LnByaW50ZXIuY2FuQXR0YWNoQ29tbWVudClyZXR1cm47bGV0IG49W10se2xvY1N0YXJ0Om8sbG9jRW5kOnUscHJpbnRlcjp7ZXhwZXJpbWVudGFsRmVhdHVyZXM6e2F2b2lkQXN0TXV0YXRpb246aT0hMX09e30saGFuZGxlQ29tbWVudHM6cz17fX0sb3JpZ2luYWxUZXh0OkR9PXQse293bkxpbmU6YT1HdCxlbmRPZkxpbmU6Yz1HdCxyZW1haW5pbmc6ZD1HdH09cyxmPXIubWFwKChwLGwpPT4oey4uLk9uKGUscCx0KSxjb21tZW50OnAsdGV4dDpELG9wdGlvbnM6dCxhc3Q6ZSxpc0xhc3RDb21tZW50OnIubGVuZ3RoLTE9PT1sfSkpO2ZvcihsZXRbcCxsXW9mIGYuZW50cmllcygpKXtsZXR7Y29tbWVudDpGLHByZWNlZGluZ05vZGU6bSxlbmNsb3NpbmdOb2RlOkUsZm9sbG93aW5nTm9kZTpDLHRleHQ6ZyxvcHRpb25zOmgsYXN0OkIsaXNMYXN0Q29tbWVudDpafT1sO2lmKGgucGFyc2VyPT09XCJqc29uXCJ8fGgucGFyc2VyPT09XCJqc29uNVwifHxoLnBhcnNlcj09PVwiX19qc19leHByZXNzaW9uXCJ8fGgucGFyc2VyPT09XCJfX3RzX2V4cHJlc3Npb25cInx8aC5wYXJzZXI9PT1cIl9fdnVlX2V4cHJlc3Npb25cInx8aC5wYXJzZXI9PT1cIl9fdnVlX3RzX2V4cHJlc3Npb25cIil7aWYobyhGKS1vKEIpPD0wKXtuZShCLEYpO2NvbnRpbnVlfWlmKHUoRiktdShCKT49MCl7dWUoQixGKTtjb250aW51ZX19bGV0ICQ7aWYoaT8kPVtsXTooRi5lbmNsb3NpbmdOb2RlPUUsRi5wcmVjZWRpbmdOb2RlPW0sRi5mb2xsb3dpbmdOb2RlPUMsJD1bRixnLGgsQixaXSksQ28oZyxoLGYscCkpRi5wbGFjZW1lbnQ9XCJvd25MaW5lXCIsYSguLi4kKXx8KEM/bmUoQyxGKTptP3VlKG0sRik6RT9YKEUsRik6WChCLEYpKTtlbHNlIGlmKGhvKGcsaCxmLHApKUYucGxhY2VtZW50PVwiZW5kT2ZMaW5lXCIsYyguLi4kKXx8KG0/dWUobSxGKTpDP25lKEMsRik6RT9YKEUsRik6WChCLEYpKTtlbHNlIGlmKEYucGxhY2VtZW50PVwicmVtYWluaW5nXCIsIWQoLi4uJCkpaWYobSYmQyl7bGV0IFE9bi5sZW5ndGg7UT4wJiZuW1EtMV0uZm9sbG93aW5nTm9kZSE9PUMmJnduKG4saCksbi5wdXNoKGwpfWVsc2UgbT91ZShtLEYpOkM/bmUoQyxGKTpFP1goRSxGKTpYKEIsRil9aWYod24obix0KSwhaSlmb3IobGV0IHAgb2YgcilkZWxldGUgcC5wcmVjZWRpbmdOb2RlLGRlbGV0ZSBwLmVuY2xvc2luZ05vZGUsZGVsZXRlIHAuZm9sbG93aW5nTm9kZX12YXIgVG49ZT0+IS9bXFxTXFxuXFx1MjAyOFxcdTIwMjldLy50ZXN0KGUpO2Z1bmN0aW9uIENvKGUsdCxyLG4pe2xldHtjb21tZW50Om8scHJlY2VkaW5nTm9kZTp1fT1yW25dLHtsb2NTdGFydDppLGxvY0VuZDpzfT10LEQ9aShvKTtpZih1KWZvcihsZXQgYT1uLTE7YT49MDthLS0pe2xldHtjb21tZW50OmMscHJlY2VkaW5nTm9kZTpkfT1yW2FdO2lmKGQhPT11fHwhVG4oZS5zbGljZShzKGMpLEQpKSlicmVhaztEPWkoYyl9cmV0dXJuIFYoZSxELHtiYWNrd2FyZHM6ITB9KX1mdW5jdGlvbiBobyhlLHQscixuKXtsZXR7Y29tbWVudDpvLGZvbGxvd2luZ05vZGU6dX09cltuXSx7bG9jU3RhcnQ6aSxsb2NFbmQ6c309dCxEPXMobyk7aWYodSlmb3IobGV0IGE9bisxO2E8ci5sZW5ndGg7YSsrKXtsZXR7Y29tbWVudDpjLGZvbGxvd2luZ05vZGU6ZH09clthXTtpZihkIT09dXx8IVRuKGUuc2xpY2UoRCxpKGMpKSkpYnJlYWs7RD1zKGMpfXJldHVybiBWKGUsRCl9ZnVuY3Rpb24gd24oZSx0KXt2YXIgcyxEO2xldCByPWUubGVuZ3RoO2lmKHI9PT0wKXJldHVybjtsZXR7cHJlY2VkaW5nTm9kZTpuLGZvbGxvd2luZ05vZGU6b309ZVswXSx1PXQubG9jU3RhcnQobyksaTtmb3IoaT1yO2k+MDstLWkpe2xldHtjb21tZW50OmEscHJlY2VkaW5nTm9kZTpjLGZvbGxvd2luZ05vZGU6ZH09ZVtpLTFdO1JlLnN0cmljdEVxdWFsKGMsbiksUmUuc3RyaWN0RXF1YWwoZCxvKTtsZXQgZj10Lm9yaWdpbmFsVGV4dC5zbGljZSh0LmxvY0VuZChhKSx1KTtpZigoKEQ9KHM9dC5wcmludGVyKS5pc0dhcCk9PW51bGw/dm9pZCAwOkQuY2FsbChzLGYsdCkpPz8vXltcXHMoXSokLy50ZXN0KGYpKXU9dC5sb2NTdGFydChhKTtlbHNlIGJyZWFrfWZvcihsZXRbYSx7Y29tbWVudDpjfV1vZiBlLmVudHJpZXMoKSlhPGk/dWUobixjKTpuZShvLGMpO2ZvcihsZXQgYSBvZltuLG9dKWEuY29tbWVudHMmJmEuY29tbWVudHMubGVuZ3RoPjEmJmEuY29tbWVudHMuc29ydCgoYyxkKT0+dC5sb2NTdGFydChjKS10LmxvY1N0YXJ0KGQpKTtlLmxlbmd0aD0wfWZ1bmN0aW9uIEt0KGUsdCxyKXtsZXQgbj1yLmxvY1N0YXJ0KHQpLTE7Zm9yKGxldCBvPTE7bzxlLmxlbmd0aDsrK28paWYobjxyLmxvY1N0YXJ0KGVbb10pKXJldHVybiBvLTE7cmV0dXJuIDB9ZnVuY3Rpb24gZ28oZSx0KXtsZXQgcj10LTE7cj1OKGUscix7YmFja3dhcmRzOiEwfSkscj1ZKGUscix7YmFja3dhcmRzOiEwfSkscj1OKGUscix7YmFja3dhcmRzOiEwfSk7bGV0IG49WShlLHIse2JhY2t3YXJkczohMH0pO3JldHVybiByIT09bn12YXIgWWU9Z287ZnVuY3Rpb24gU24oZSx0KXtsZXQgcj1lLm5vZGU7cmV0dXJuIHIucHJpbnRlZD0hMCx0LnByaW50ZXIucHJpbnRDb21tZW50KGUsdCl9ZnVuY3Rpb24geW8oZSx0KXt2YXIgYztsZXQgcj1lLm5vZGUsbj1bU24oZSx0KV0se3ByaW50ZXI6byxvcmlnaW5hbFRleHQ6dSxsb2NTdGFydDppLGxvY0VuZDpzfT10O2lmKChjPW8uaXNCbG9ja0NvbW1lbnQpPT1udWxsP3ZvaWQgMDpjLmNhbGwobyxyKSl7bGV0IGQ9Vih1LHMocikpP1YodSxpKHIpLHtiYWNrd2FyZHM6ITB9KT9HOktlOlwiIFwiO24ucHVzaChkKX1lbHNlIG4ucHVzaChHKTtsZXQgYT1ZKHUsTih1LHMocikpKTtyZXR1cm4gYSE9PSExJiZWKHUsYSkmJm4ucHVzaChHKSxufWZ1bmN0aW9uIEFvKGUsdCxyKXt2YXIgYTtsZXQgbj1lLm5vZGUsbz1TbihlLHQpLHtwcmludGVyOnUsb3JpZ2luYWxUZXh0OmksbG9jU3RhcnQ6c309dCxEPShhPXUuaXNCbG9ja0NvbW1lbnQpPT1udWxsP3ZvaWQgMDphLmNhbGwodSxuKTtpZihyIT1udWxsJiZyLmhhc0xpbmVTdWZmaXgmJiEociE9bnVsbCYmci5pc0Jsb2NrKXx8VihpLHMobikse2JhY2t3YXJkczohMH0pKXtsZXQgYz1ZZShpLHMobikpO3JldHVybntkb2M6QmUoW0csYz9HOlwiXCIsb10pLGlzQmxvY2s6RCxoYXNMaW5lU3VmZml4OiEwfX1yZXR1cm4hRHx8ciE9bnVsbCYmci5oYXNMaW5lU3VmZml4P3tkb2M6W0JlKFtcIiBcIixvXSksbGVdLGlzQmxvY2s6RCxoYXNMaW5lU3VmZml4OiEwfTp7ZG9jOltcIiBcIixvXSxpc0Jsb2NrOkQsaGFzTGluZVN1ZmZpeDohMX19ZnVuY3Rpb24gQm8oZSx0KXtsZXQgcj1lLm5vZGU7aWYoIXIpcmV0dXJue307bGV0IG49dFtTeW1ib2wuZm9yKFwicHJpbnRlZENvbW1lbnRzXCIpXTtpZigoci5jb21tZW50c3x8W10pLmZpbHRlcihEPT4hbi5oYXMoRCkpLmxlbmd0aD09PTApcmV0dXJue2xlYWRpbmc6XCJcIix0cmFpbGluZzpcIlwifTtsZXQgdT1bXSxpPVtdLHM7cmV0dXJuIGUuZWFjaCgoKT0+e2xldCBEPWUubm9kZTtpZihuIT1udWxsJiZuLmhhcyhEKSlyZXR1cm47bGV0e2xlYWRpbmc6YSx0cmFpbGluZzpjfT1EO2E/dS5wdXNoKHlvKGUsdCkpOmMmJihzPUFvKGUsdCxzKSxpLnB1c2gocy5kb2MpKX0sXCJjb21tZW50c1wiKSx7bGVhZGluZzp1LHRyYWlsaW5nOml9fWZ1bmN0aW9uIHZuKGUsdCxyKXtsZXR7bGVhZGluZzpuLHRyYWlsaW5nOm99PUJvKGUscik7cmV0dXJuIW4mJiFvP3Q6WmUodCx1PT5bbix1LG9dKX1mdW5jdGlvbiBQbihlKXtsZXR7W1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV06dCxbU3ltYm9sLmZvcihcInByaW50ZWRDb21tZW50c1wiKV06cn09ZTtmb3IobGV0IG4gb2YgdCl7aWYoIW4ucHJpbnRlZCYmIXIuaGFzKG4pKXRocm93IG5ldyBFcnJvcignQ29tbWVudCBcIicrbi52YWx1ZS50cmltKCkrJ1wiIHdhcyBub3QgcHJpbnRlZC4gUGxlYXNlIHJlcG9ydCB0aGlzIGVycm9yIScpO2RlbGV0ZSBuLnByaW50ZWR9fWFzeW5jIGZ1bmN0aW9uIExuKGUsdCxyLG4sbyl7bGV0e2VtYmVkZGVkTGFuZ3VhZ2VGb3JtYXR0aW5nOnUscHJpbnRlcjp7ZW1iZWQ6aSxoYXNQcmV0dGllcklnbm9yZTpzPSgpPT4hMSxnZXRWaXNpdG9yS2V5czpEfX09cjtpZighaXx8dSE9PVwiYXV0b1wiKXJldHVybjtpZihpLmxlbmd0aD4yKXRocm93IG5ldyBFcnJvcihcInByaW50ZXIuZW1iZWQgaGFzIHRvbyBtYW55IHBhcmFtZXRlcnMuIFRoZSBBUEkgY2hhbmdlZCBpbiBQcmV0dGllciB2My4gUGxlYXNlIHVwZGF0ZSB5b3VyIHBsdWdpbi4gU2VlIGh0dHBzOi8vcHJldHRpZXIuaW8vZG9jcy9lbi9wbHVnaW5zLmh0bWwjb3B0aW9uYWwtZW1iZWRcIik7bGV0IGE9SChpLmdldFZpc2l0b3JLZXlzPz9EKSxjPVtdO3AoKTtsZXQgZD1lLnN0YWNrO2ZvcihsZXR7cHJpbnQ6bCxub2RlOkYscGF0aFN0YWNrOm19b2YgYyl0cnl7ZS5zdGFjaz1tO2xldCBFPWF3YWl0IGwoZix0LGUscik7RSYmby5zZXQoRixFKX1jYXRjaChFKXtpZihnbG9iYWxUaGlzLlBSRVRUSUVSX0RFQlVHKXRocm93IEV9ZS5zdGFjaz1kO2Z1bmN0aW9uIGYobCxGKXtyZXR1cm4gX28obCxGLHIsbil9ZnVuY3Rpb24gcCgpe2xldHtub2RlOmx9PWU7aWYobD09PW51bGx8fHR5cGVvZiBsIT1cIm9iamVjdFwifHxzKGUpKXJldHVybjtmb3IobGV0IG0gb2YgYShsKSlBcnJheS5pc0FycmF5KGxbbV0pP2UuZWFjaChwLG0pOmUuY2FsbChwLG0pO2xldCBGPWkoZSxyKTtpZihGKXtpZih0eXBlb2YgRj09XCJmdW5jdGlvblwiKXtjLnB1c2goe3ByaW50OkYsbm9kZTpsLHBhdGhTdGFjazpbLi4uZS5zdGFja119KTtyZXR1cm59by5zZXQobCxGKX19fWFzeW5jIGZ1bmN0aW9uIF9vKGUsdCxyLG4pe2xldCBvPWF3YWl0IHJlKHsuLi5yLC4uLnQscGFyZW50UGFyc2VyOnIucGFyc2VyLG9yaWdpbmFsVGV4dDplfSx7cGFzc1Rocm91Z2g6ITB9KSx7YXN0OnV9PWF3YWl0IERlKGUsbyksaT1hd2FpdCBuKHUsbyk7cmV0dXJuIFhlKGkpfWZ1bmN0aW9uIHhvKGUpe3JldHVybigpPT57fX12YXIgSW49eG87ZnVuY3Rpb24ga28oZSx0KXtsZXR7b3JpZ2luYWxUZXh0OnIsW1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV06bixsb2NTdGFydDpvLGxvY0VuZDp1LFtTeW1ib2wuZm9yKFwicHJpbnRlZENvbW1lbnRzXCIpXTppfT10LHtub2RlOnN9PWUsRD1vKHMpLGE9dShzKTtmb3IobGV0IGMgb2YgbilvKGMpPj1EJiZ1KGMpPD1hJiZpLmFkZChjKTtyZXR1cm4gci5zbGljZShELGEpfXZhciBSbj1rbzthc3luYyBmdW5jdGlvbiBqZShlLHQpeyh7YXN0OmV9PWF3YWl0IEh0KGUsdCkpO2xldCByPW5ldyBNYXAsbj1uZXcgQm4oZSksbz1Jbih0KSx1PW5ldyBNYXA7YXdhaXQgTG4obixzLHQsamUsdSk7bGV0IGk9YXdhaXQgWW4obix0LHMsdm9pZCAwLHUpO3JldHVybiBQbih0KSxpO2Z1bmN0aW9uIHMoYSxjKXtyZXR1cm4gYT09PXZvaWQgMHx8YT09PW4/RChjKTpBcnJheS5pc0FycmF5KGEpP24uY2FsbCgoKT0+RChjKSwuLi5hKTpuLmNhbGwoKCk9PkQoYyksYSl9ZnVuY3Rpb24gRChhKXtvKG4pO2xldCBjPW4ubm9kZTtpZihjPT1udWxsKXJldHVyblwiXCI7bGV0IGQ9YyYmdHlwZW9mIGM9PVwib2JqZWN0XCImJmE9PT12b2lkIDA7aWYoZCYmci5oYXMoYykpcmV0dXJuIHIuZ2V0KGMpO2xldCBmPVluKG4sdCxzLGEsdSk7cmV0dXJuIGQmJnIuc2V0KGMsZiksZn19ZnVuY3Rpb24gWW4oZSx0LHIsbixvKXt2YXIgRDtsZXR7bm9kZTp1fT1lLHtwcmludGVyOml9PXQscztyZXR1cm4oRD1pLmhhc1ByZXR0aWVySWdub3JlKSE9bnVsbCYmRC5jYWxsKGksZSk/cz1SbihlLHQpOm8uaGFzKHUpP3M9by5nZXQodSk6cz1pLnByaW50KGUsdCxyLG4pLHU9PT10LmN1cnNvck5vZGUmJihzPVplKHMsYT0+W3hlLGEseGVdKSksaS5wcmludENvbW1lbnQmJighaS53aWxsUHJpbnRPd25Db21tZW50c3x8IWkud2lsbFByaW50T3duQ29tbWVudHMoZSx0KSkmJihzPXZuKGUscyx0KSksc31hc3luYyBmdW5jdGlvbiBIdChlLHQpe2xldCByPWUuY29tbWVudHM/P1tdO3RbU3ltYm9sLmZvcihcImNvbW1lbnRzXCIpXT1yLHRbU3ltYm9sLmZvcihcInRva2Vuc1wiKV09ZS50b2tlbnM/P1tdLHRbU3ltYm9sLmZvcihcInByaW50ZWRDb21tZW50c1wiKV09bmV3IFNldCxObihlLHQpO2xldHtwcmludGVyOntwcmVwcm9jZXNzOm59fT10O3JldHVybiBlPW4/YXdhaXQgbihlLHQpOmUse2FzdDplLGNvbW1lbnRzOnJ9fXZhciBibz0oe3BhcnNlcjplfSk9PmU9PT1cImpzb25cInx8ZT09PVwianNvbjVcInx8ZT09PVwianNvbi1zdHJpbmdpZnlcIjtmdW5jdGlvbiB3byhlLHQpe2xldCByPVtlLm5vZGUsLi4uZS5wYXJlbnROb2Rlc10sbj1uZXcgU2V0KFt0Lm5vZGUsLi4udC5wYXJlbnROb2Rlc10pO3JldHVybiByLmZpbmQobz0+JG4uaGFzKG8udHlwZSkmJm4uaGFzKG8pKX1mdW5jdGlvbiBqbihlKXtsZXQgdD1lLmxlbmd0aC0xO2Zvcig7Oyl7bGV0IHI9ZVt0XTtpZigocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiUHJvZ3JhbVwifHwocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiRmlsZVwiKXQtLTtlbHNlIGJyZWFrfXJldHVybiBlLnNsaWNlKDAsdCsxKX1mdW5jdGlvbiBPbyhlLHQse2xvY1N0YXJ0OnIsbG9jRW5kOm59KXtsZXQgbz1lLm5vZGUsdT10Lm5vZGU7aWYobz09PXUpcmV0dXJue3N0YXJ0Tm9kZTpvLGVuZE5vZGU6dX07bGV0IGk9cihlLm5vZGUpO2ZvcihsZXQgRCBvZiBqbih0LnBhcmVudE5vZGVzKSlpZihyKEQpPj1pKXU9RDtlbHNlIGJyZWFrO2xldCBzPW4odC5ub2RlKTtmb3IobGV0IEQgb2Ygam4oZS5wYXJlbnROb2Rlcykpe2lmKG4oRCk8PXMpbz1EO2Vsc2UgYnJlYWs7aWYobz09PXUpYnJlYWt9cmV0dXJue3N0YXJ0Tm9kZTpvLGVuZE5vZGU6dX19ZnVuY3Rpb24gcXQoZSx0LHIsbixvPVtdLHUpe2xldHtsb2NTdGFydDppLGxvY0VuZDpzfT1yLEQ9aShlKSxhPXMoZSk7aWYoISh0PmF8fHQ8RHx8dT09PVwicmFuZ2VFbmRcIiYmdD09PUR8fHU9PT1cInJhbmdlU3RhcnRcIiYmdD09PWEpKXtmb3IobGV0IGMgb2YgRXQoZSxyKSl7bGV0IGQ9cXQoYyx0LHIsbixbZSwuLi5vXSx1KTtpZihkKXJldHVybiBkfWlmKCFufHxuKGUsb1swXSkpcmV0dXJue25vZGU6ZSxwYXJlbnROb2RlczpvfX19ZnVuY3Rpb24gTm8oZSx0KXtyZXR1cm4gdCE9PVwiRGVjbGFyZUV4cG9ydERlY2xhcmF0aW9uXCImJmUhPT1cIlR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvblwiJiYoZT09PVwiRGlyZWN0aXZlXCJ8fGU9PT1cIlR5cGVBbGlhc1wifHxlPT09XCJUU0V4cG9ydEFzc2lnbm1lbnRcInx8ZS5zdGFydHNXaXRoKFwiRGVjbGFyZVwiKXx8ZS5zdGFydHNXaXRoKFwiVFNEZWNsYXJlXCIpfHxlLmVuZHNXaXRoKFwiU3RhdGVtZW50XCIpfHxlLmVuZHNXaXRoKFwiRGVjbGFyYXRpb25cIikpfXZhciAkbj1uZXcgU2V0KFtcIkpzb25Sb290XCIsXCJPYmplY3RFeHByZXNzaW9uXCIsXCJBcnJheUV4cHJlc3Npb25cIixcIlN0cmluZ0xpdGVyYWxcIixcIk51bWVyaWNMaXRlcmFsXCIsXCJCb29sZWFuTGl0ZXJhbFwiLFwiTnVsbExpdGVyYWxcIixcIlVuYXJ5RXhwcmVzc2lvblwiLFwiVGVtcGxhdGVMaXRlcmFsXCJdKSxUbz1uZXcgU2V0KFtcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJUeXBlRXh0ZW5zaW9uRGVmaW5pdGlvblwiLFwiT2JqZWN0VHlwZURlZmluaXRpb25cIixcIkZpZWxkRGVmaW5pdGlvblwiLFwiRGlyZWN0aXZlRGVmaW5pdGlvblwiLFwiRW51bVR5cGVEZWZpbml0aW9uXCIsXCJFbnVtVmFsdWVEZWZpbml0aW9uXCIsXCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiLFwiSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvblwiLFwiU2NoZW1hRGVmaW5pdGlvblwiLFwiT3BlcmF0aW9uVHlwZURlZmluaXRpb25cIixcIkludGVyZmFjZVR5cGVEZWZpbml0aW9uXCIsXCJVbmlvblR5cGVEZWZpbml0aW9uXCIsXCJTY2FsYXJUeXBlRGVmaW5pdGlvblwiXSk7ZnVuY3Rpb24gVm4oZSx0LHIpe2lmKCF0KXJldHVybiExO3N3aXRjaChlLnBhcnNlcil7Y2FzZVwiZmxvd1wiOmNhc2VcImJhYmVsXCI6Y2FzZVwiYmFiZWwtZmxvd1wiOmNhc2VcImJhYmVsLXRzXCI6Y2FzZVwidHlwZXNjcmlwdFwiOmNhc2VcImFjb3JuXCI6Y2FzZVwiZXNwcmVlXCI6Y2FzZVwibWVyaXlhaFwiOmNhc2VcIl9fYmFiZWxfZXN0cmVlXCI6cmV0dXJuIE5vKHQudHlwZSxyPT1udWxsP3ZvaWQgMDpyLnR5cGUpO2Nhc2VcImpzb25cIjpjYXNlXCJqc29uNVwiOmNhc2VcImpzb24tc3RyaW5naWZ5XCI6cmV0dXJuICRuLmhhcyh0LnR5cGUpO2Nhc2VcImdyYXBocWxcIjpyZXR1cm4gVG8uaGFzKHQua2luZCk7Y2FzZVwidnVlXCI6cmV0dXJuIHQudGFnIT09XCJyb290XCJ9cmV0dXJuITF9ZnVuY3Rpb24gTW4oZSx0LHIpe2xldHtyYW5nZVN0YXJ0Om4scmFuZ2VFbmQ6byxsb2NTdGFydDp1LGxvY0VuZDppfT10O1JlLm9rKG8+bik7bGV0IHM9ZS5zbGljZShuLG8pLnNlYXJjaCgvXFxTLyksRD1zPT09LTE7aWYoIUQpZm9yKG4rPXM7bz5uJiYhL1xcUy8udGVzdChlW28tMV0pOy0tbyk7bGV0IGE9cXQocixuLHQsKHAsbCk9PlZuKHQscCxsKSxbXSxcInJhbmdlU3RhcnRcIiksYz1EP2E6cXQocixvLHQscD0+Vm4odCxwKSxbXSxcInJhbmdlRW5kXCIpO2lmKCFhfHwhYylyZXR1cm57cmFuZ2VTdGFydDowLHJhbmdlRW5kOjB9O2xldCBkLGY7aWYoYm8odCkpe2xldCBwPXdvKGEsYyk7ZD1wLGY9cH1lbHNlKHtzdGFydE5vZGU6ZCxlbmROb2RlOmZ9PU9vKGEsYyx0KSk7cmV0dXJue3JhbmdlU3RhcnQ6TWF0aC5taW4odShkKSx1KGYpKSxyYW5nZUVuZDpNYXRoLm1heChpKGQpLGkoZikpfX1mdW5jdGlvbiBTbyhlLHQpe2xldHtjdXJzb3JPZmZzZXQ6cixsb2NTdGFydDpuLGxvY0VuZDpvfT10LHU9SCh0LnByaW50ZXIuZ2V0VmlzaXRvcktleXMpLGk9RD0+bihEKTw9ciYmbyhEKT49cixzPWU7Zm9yKGxldCBEIG9mIGJuKGUse2dldFZpc2l0b3JLZXlzOnUsZmlsdGVyOml9KSlzPUQ7cmV0dXJuIHN9dmFyIFduPVNvO3ZhciBIbj1cIlxcdUZFRkZcIixVbj1TeW1ib2woXCJjdXJzb3JcIik7YXN5bmMgZnVuY3Rpb24gcW4oZSx0LHI9MCl7aWYoIWV8fGUudHJpbSgpLmxlbmd0aD09PTApcmV0dXJue2Zvcm1hdHRlZDpcIlwiLGN1cnNvck9mZnNldDotMSxjb21tZW50czpbXX07bGV0e2FzdDpuLHRleHQ6b309YXdhaXQgRGUoZSx0KTt0LmN1cnNvck9mZnNldD49MCYmKHQuY3Vyc29yTm9kZT1XbihuLHQpKTtsZXQgdT1hd2FpdCBqZShuLHQscik7cj4wJiYodT1xZShbRyx1XSxyLHQudGFiV2lkdGgpKTtsZXQgaT1mZSh1LHQpO2lmKHI+MCl7bGV0IEQ9aS5mb3JtYXR0ZWQudHJpbSgpO2kuY3Vyc29yTm9kZVN0YXJ0IT09dm9pZCAwJiYoaS5jdXJzb3JOb2RlU3RhcnQtPWkuZm9ybWF0dGVkLmluZGV4T2YoRCkpLGkuZm9ybWF0dGVkPUQrYmUodC5lbmRPZkxpbmUpfWxldCBzPXRbU3ltYm9sLmZvcihcImNvbW1lbnRzXCIpXTtpZih0LmN1cnNvck9mZnNldD49MCl7bGV0IEQsYSxjLGQsZjtpZih0LmN1cnNvck5vZGUmJmkuY3Vyc29yTm9kZVRleHQ/KEQ9dC5sb2NTdGFydCh0LmN1cnNvck5vZGUpLGE9by5zbGljZShELHQubG9jRW5kKHQuY3Vyc29yTm9kZSkpLGM9dC5jdXJzb3JPZmZzZXQtRCxkPWkuY3Vyc29yTm9kZVN0YXJ0LGY9aS5jdXJzb3JOb2RlVGV4dCk6KEQ9MCxhPW8sYz10LmN1cnNvck9mZnNldCxkPTAsZj1pLmZvcm1hdHRlZCksYT09PWYpcmV0dXJue2Zvcm1hdHRlZDppLmZvcm1hdHRlZCxjdXJzb3JPZmZzZXQ6ZCtjLGNvbW1lbnRzOnN9O2xldCBwPWEuc3BsaXQoXCJcIik7cC5zcGxpY2UoYywwLFVuKTtsZXQgbD1mLnNwbGl0KFwiXCIpLEY9KDAsS24uZGlmZkFycmF5cykocCxsKSxtPWQ7Zm9yKGxldCBFIG9mIEYpaWYoRS5yZW1vdmVkKXtpZihFLnZhbHVlLmluY2x1ZGVzKFVuKSlicmVha31lbHNlIG0rPUUuY291bnQ7cmV0dXJue2Zvcm1hdHRlZDppLmZvcm1hdHRlZCxjdXJzb3JPZmZzZXQ6bSxjb21tZW50czpzfX1yZXR1cm57Zm9ybWF0dGVkOmkuZm9ybWF0dGVkLGN1cnNvck9mZnNldDotMSxjb21tZW50czpzfX1hc3luYyBmdW5jdGlvbiB2byhlLHQpe2xldHthc3Q6cix0ZXh0Om59PWF3YWl0IERlKGUsdCkse3JhbmdlU3RhcnQ6byxyYW5nZUVuZDp1fT1NbihuLHQsciksaT1uLnNsaWNlKG8sdSkscz1NYXRoLm1pbihvLG4ubGFzdEluZGV4T2YoYFxuYCxvKSsxKSxEPW4uc2xpY2UocyxvKS5tYXRjaCgvXlxccyovKVswXSxhPUZlKEQsdC50YWJXaWR0aCksYz1hd2FpdCBxbihpLHsuLi50LHJhbmdlU3RhcnQ6MCxyYW5nZUVuZDpOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksY3Vyc29yT2Zmc2V0OnQuY3Vyc29yT2Zmc2V0Pm8mJnQuY3Vyc29yT2Zmc2V0PD11P3QuY3Vyc29yT2Zmc2V0LW86LTEsZW5kT2ZMaW5lOlwibGZcIn0sYSksZD1jLmZvcm1hdHRlZC50cmltRW5kKCkse2N1cnNvck9mZnNldDpmfT10O2Y+dT9mKz1kLmxlbmd0aC1pLmxlbmd0aDpjLmN1cnNvck9mZnNldD49MCYmKGY9Yy5jdXJzb3JPZmZzZXQrbyk7bGV0IHA9bi5zbGljZSgwLG8pK2Qrbi5zbGljZSh1KTtpZih0LmVuZE9mTGluZSE9PVwibGZcIil7bGV0IGw9YmUodC5lbmRPZkxpbmUpO2Y+PTAmJmw9PT1gXFxyXG5gJiYoZis9X3QocC5zbGljZSgwLGYpLGBcbmApKSxwPWVlKCExLHAsYFxuYCxsKX1yZXR1cm57Zm9ybWF0dGVkOnAsY3Vyc29yT2Zmc2V0OmYsY29tbWVudHM6Yy5jb21tZW50c319ZnVuY3Rpb24gSnQoZSx0LHIpe3JldHVybiB0eXBlb2YgdCE9XCJudW1iZXJcInx8TnVtYmVyLmlzTmFOKHQpfHx0PDB8fHQ+ZS5sZW5ndGg/cjp0fWZ1bmN0aW9uIHpuKGUsdCl7bGV0e2N1cnNvck9mZnNldDpyLHJhbmdlU3RhcnQ6bixyYW5nZUVuZDpvfT10O3JldHVybiByPUp0KGUsciwtMSksbj1KdChlLG4sMCksbz1KdChlLG8sZS5sZW5ndGgpLHsuLi50LGN1cnNvck9mZnNldDpyLHJhbmdlU3RhcnQ6bixyYW5nZUVuZDpvfX1mdW5jdGlvbiBKbihlLHQpe2xldHtjdXJzb3JPZmZzZXQ6cixyYW5nZVN0YXJ0Om4scmFuZ2VFbmQ6byxlbmRPZkxpbmU6dX09em4oZSx0KSxpPWUuY2hhckF0KDApPT09SG47aWYoaSYmKGU9ZS5zbGljZSgxKSxyLS0sbi0tLG8tLSksdT09PVwiYXV0b1wiJiYodT1ocihlKSksZS5pbmNsdWRlcyhcIlxcclwiKSl7bGV0IHM9RD0+X3QoZS5zbGljZSgwLE1hdGgubWF4KEQsMCkpLGBcXHJcbmApO3ItPXMociksbi09cyhuKSxvLT1zKG8pLGU9Z3IoZSl9cmV0dXJue2hhc0JPTTppLHRleHQ6ZSxvcHRpb25zOnpuKGUsey4uLnQsY3Vyc29yT2Zmc2V0OnIscmFuZ2VTdGFydDpuLHJhbmdlRW5kOm8sZW5kT2ZMaW5lOnV9KX19YXN5bmMgZnVuY3Rpb24gR24oZSx0KXtsZXQgcj1hd2FpdCBmdCh0KTtyZXR1cm4hci5oYXNQcmFnbWF8fHIuaGFzUHJhZ21hKGUpfWFzeW5jIGZ1bmN0aW9uIFh0KGUsdCl7bGV0e2hhc0JPTTpyLHRleHQ6bixvcHRpb25zOm99PUpuKGUsYXdhaXQgcmUodCkpO2lmKG8ucmFuZ2VTdGFydD49by5yYW5nZUVuZCYmbiE9PVwiXCJ8fG8ucmVxdWlyZVByYWdtYSYmIWF3YWl0IEduKG4sbykpcmV0dXJue2Zvcm1hdHRlZDplLGN1cnNvck9mZnNldDp0LmN1cnNvck9mZnNldCxjb21tZW50czpbXX07bGV0IHU7cmV0dXJuIG8ucmFuZ2VTdGFydD4wfHxvLnJhbmdlRW5kPG4ubGVuZ3RoP3U9YXdhaXQgdm8obixvKTooIW8ucmVxdWlyZVByYWdtYSYmby5pbnNlcnRQcmFnbWEmJm8ucHJpbnRlci5pbnNlcnRQcmFnbWEmJiFhd2FpdCBHbihuLG8pJiYobj1vLnByaW50ZXIuaW5zZXJ0UHJhZ21hKG4pKSx1PWF3YWl0IHFuKG4sbykpLHImJih1LmZvcm1hdHRlZD1Ibit1LmZvcm1hdHRlZCx1LmN1cnNvck9mZnNldD49MCYmdS5jdXJzb3JPZmZzZXQrKyksdX1hc3luYyBmdW5jdGlvbiBYbihlLHQscil7bGV0e3RleHQ6bixvcHRpb25zOm99PUpuKGUsYXdhaXQgcmUodCkpLHU9YXdhaXQgRGUobixvKTtyZXR1cm4gciYmKHIucHJlcHJvY2Vzc0ZvclByaW50JiYodS5hc3Q9YXdhaXQgSHQodS5hc3QsbykpLHIubWFzc2FnZSYmKHUuYXN0PWZuKHUuYXN0LG8pKSksdX1hc3luYyBmdW5jdGlvbiBabihlLHQpe3Q9YXdhaXQgcmUodCk7bGV0IHI9YXdhaXQgamUoZSx0KTtyZXR1cm4gZmUocix0KX1hc3luYyBmdW5jdGlvbiBRbihlLHQpe2xldCByPVByKGUpLHtmb3JtYXR0ZWQ6bn09YXdhaXQgWHQocix7Li4udCxwYXJzZXI6XCJfX2pzX2V4cHJlc3Npb25cIn0pO3JldHVybiBufWFzeW5jIGZ1bmN0aW9uIGV1KGUsdCl7dD1hd2FpdCByZSh0KTtsZXR7YXN0OnJ9PWF3YWl0IERlKGUsdCk7cmV0dXJuIGplKHIsdCl9YXN5bmMgZnVuY3Rpb24gdHUoZSx0KXtyZXR1cm4gZmUoZSxhd2FpdCByZSh0KSl9dmFyIFF0PXt9O1dlKFF0LHthZGREYW5nbGluZ0NvbW1lbnQ6KCk9PlgsYWRkTGVhZGluZ0NvbW1lbnQ6KCk9Pm5lLGFkZFRyYWlsaW5nQ29tbWVudDooKT0+dWUsZ2V0QWxpZ25tZW50U2l6ZTooKT0+RmUsZ2V0SW5kZW50U2l6ZTooKT0+bnUsZ2V0TWF4Q29udGludW91c0NvdW50OigpPT5ydSxnZXROZXh0Tm9uU3BhY2VOb25Db21tZW50Q2hhcmFjdGVyOigpPT5pdSxnZXROZXh0Tm9uU3BhY2VOb25Db21tZW50Q2hhcmFjdGVySW5kZXg6KCk9PkdvLGdldFN0cmluZ1dpZHRoOigpPT53ZSxoYXNOZXdsaW5lOigpPT5WLGhhc05ld2xpbmVJblJhbmdlOigpPT51dSxoYXNTcGFjZXM6KCk9Pm91LGlzTmV4dExpbmVFbXB0eTooKT0+Sm8saXNOZXh0TGluZUVtcHR5QWZ0ZXJJbmRleDooKT0+Q3QsaXNQcmV2aW91c0xpbmVFbXB0eTooKT0+SG8sbWFrZVN0cmluZzooKT0+c3Usc2tpcDooKT0+bWUsc2tpcEV2ZXJ5dGhpbmdCdXROZXdMaW5lOigpPT5tdCxza2lwSW5saW5lQ29tbWVudDooKT0+RWUsc2tpcE5ld2xpbmU6KCk9Plksc2tpcFNwYWNlczooKT0+Tixza2lwVG9MaW5lRW5kOigpPT5kdCxza2lwVHJhaWxpbmdDb21tZW50OigpPT5DZSxza2lwV2hpdGVzcGFjZTooKT0+eG59KTtmdW5jdGlvbiBMbyhlLHQpe2lmKHQ9PT0hMSlyZXR1cm4hMTtpZihlLmNoYXJBdCh0KT09PVwiL1wiJiZlLmNoYXJBdCh0KzEpPT09XCIqXCIpe2ZvcihsZXQgcj10KzI7cjxlLmxlbmd0aDsrK3IpaWYoZS5jaGFyQXQocik9PT1cIipcIiYmZS5jaGFyQXQocisxKT09PVwiL1wiKXJldHVybiByKzJ9cmV0dXJuIHR9dmFyIEVlPUxvO2Z1bmN0aW9uIElvKGUsdCl7cmV0dXJuIHQ9PT0hMT8hMTplLmNoYXJBdCh0KT09PVwiL1wiJiZlLmNoYXJBdCh0KzEpPT09XCIvXCI/bXQoZSx0KTp0fXZhciBDZT1JbztmdW5jdGlvbiBSbyhlLHQpe2xldCByPW51bGwsbj10O2Zvcig7biE9PXI7KXI9bixuPU4oZSxuKSxuPUVlKGUsbiksbj1DZShlLG4pLG49WShlLG4pO3JldHVybiBufXZhciBWZT1SbztmdW5jdGlvbiBZbyhlLHQpe2xldCByPW51bGwsbj10O2Zvcig7biE9PXI7KXI9bixuPWR0KGUsbiksbj1FZShlLG4pLG49TihlLG4pO3JldHVybiBuPUNlKGUsbiksbj1ZKGUsbiksbiE9PSExJiZWKGUsbil9dmFyIEN0PVlvO2Z1bmN0aW9uIFp0KGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIHN0cmluZ1wiKTtyZXR1cm4gZS5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC8tL2csXCJcXFxceDJkXCIpfWZ1bmN0aW9uIGpvKGUsdCl7bGV0IHI9ZS5tYXRjaChuZXcgUmVnRXhwKGAoJHtadCh0KX0pK2AsXCJnXCIpKTtyZXR1cm4gcj09PW51bGw/MDpyLnJlZHVjZSgobixvKT0+TWF0aC5tYXgobixvLmxlbmd0aC90Lmxlbmd0aCksMCl9dmFyIHJ1PWpvO2Z1bmN0aW9uIFZvKGUsdCl7bGV0IHI9ZS5sYXN0SW5kZXhPZihgXG5gKTtyZXR1cm4gcj09PS0xPzA6RmUoZS5zbGljZShyKzEpLm1hdGNoKC9eW1xcdCBdKi8pWzBdLHQpfXZhciBudT1WbztmdW5jdGlvbiAkbyhlLHQscil7Zm9yKGxldCBuPXQ7bjxyOysrbilpZihlLmNoYXJBdChuKT09PWBcbmApcmV0dXJuITA7cmV0dXJuITF9dmFyIHV1PSRvO2Z1bmN0aW9uIE1vKGUsdCxyPXt9KXtyZXR1cm4gTihlLHIuYmFja3dhcmRzP3QtMTp0LHIpIT09dH12YXIgb3U9TW87ZnVuY3Rpb24gV28oZSx0KXtsZXQgcj1WZShlLHQpO3JldHVybiByPT09ITE/XCJcIjplLmNoYXJBdChyKX12YXIgaXU9V287ZnVuY3Rpb24gVW8oZSx0LHIpe2xldCBuPXQ9PT0nXCInP1wiJ1wiOidcIicsdT1lZSghMSxlLC9cXFxcKC4pfChbXCInXSkvZ3MsKGkscyxEKT0+cz09PW4/czpEPT09dD9cIlxcXFxcIitEOkR8fChyJiYvXlteXFxuXFxyXCInMC03XFxcXGJmbnJ0LXZ4XFx1MjAyOFxcdTIwMjldJC8udGVzdChzKT9zOlwiXFxcXFwiK3MpKTtyZXR1cm4gdCt1K3R9dmFyIHN1PVVvO2Z1bmN0aW9uIHpvKGUsdCxyKXtyZXR1cm4gVmUoZSxyKHQpKX1mdW5jdGlvbiBHbyhlLHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPT09Mnx8dHlwZW9mIHQ9PVwibnVtYmVyXCI/VmUoZSx0KTp6byguLi5hcmd1bWVudHMpfWZ1bmN0aW9uIEtvKGUsdCxyKXtyZXR1cm4gWWUoZSxyKHQpKX1mdW5jdGlvbiBIbyhlLHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPT09Mnx8dHlwZW9mIHQ9PVwibnVtYmVyXCI/WWUoZSx0KTpLbyguLi5hcmd1bWVudHMpfWZ1bmN0aW9uIHFvKGUsdCxyKXtyZXR1cm4gQ3QoZSxyKHQpKX1mdW5jdGlvbiBKbyhlLHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPT09Mnx8dHlwZW9mIHQ9PVwibnVtYmVyXCI/Q3QoZSx0KTpxbyguLi5hcmd1bWVudHMpfXZhciBlcj17fTtXZShlcix7YnVpbGRlcnM6KCk9PlhvLHByaW50ZXI6KCk9PlpvLHV0aWxzOigpPT5Rb30pO3ZhciBYbz17am9pbjprZSxsaW5lOktlLHNvZnRsaW5lOkVyLGhhcmRsaW5lOkcsbGl0ZXJhbGxpbmU6SGUsZ3JvdXA6QXQsY29uZGl0aW9uYWxHcm91cDpmcixmaWxsOkdlLGxpbmVTdWZmaXg6QmUsbGluZVN1ZmZpeEJvdW5kYXJ5OmRyLGN1cnNvcjp4ZSxicmVha1BhcmVudDpsZSxpZkJyZWFrOkZyLHRyaW06bXIsaW5kZW50OmllLGluZGVudElmQnJlYWs6cHIsYWxpZ246b2UsYWRkQWxpZ25tZW50VG9Eb2M6cWUsbWFya0FzUm9vdDpjcixkZWRlbnRUb1Jvb3Q6YXIsZGVkZW50OmxyLGhhcmRsaW5lV2l0aG91dEJyZWFrUGFyZW50Ol9lLGxpdGVyYWxsaW5lV2l0aG91dEJyZWFrUGFyZW50OkJ0LGxhYmVsOkNyLGNvbmNhdDplPT5lfSxabz17cHJpbnREb2NUb1N0cmluZzpmZX0sUW89e3dpbGxCcmVhazp3cix0cmF2ZXJzZURvYzpBZSxmaW5kSW5Eb2M6SmUsbWFwRG9jOk5lLHJlbW92ZUxpbmVzOk5yLHN0cmlwVHJhaWxpbmdIYXJkbGluZTpYZSxyZXBsYWNlRW5kT2ZMaW5lOlRyLGNhbkJyZWFrOlNyfTt2YXIgRHU9XCIzLjEuMVwiO2Z1bmN0aW9uIGFlKGUsdD0xKXtyZXR1cm4gYXN5bmMoLi4ucik9PntsZXQgbj1yW3RdPz97fSxvPW4ucGx1Z2lucz8/W107cmV0dXJuIHJbdF09ey4uLm4scGx1Z2luczpBcnJheS5pc0FycmF5KG8pP286T2JqZWN0LnZhbHVlcyhvKX0sZSguLi5yKX19dmFyIGF1PWFlKFh0KTthc3luYyBmdW5jdGlvbiBjdShlLHQpe2xldHtmb3JtYXR0ZWQ6cn09YXdhaXQgYXUoZSx7Li4udCxjdXJzb3JPZmZzZXQ6LTF9KTtyZXR1cm4gcn1hc3luYyBmdW5jdGlvbiBlaShlLHQpe3JldHVybiBhd2FpdCBjdShlLHQpPT09ZX12YXIgdGk9YWUoZXQsMCkscmk9e3BhcnNlOmFlKFhuKSxmb3JtYXRBU1Q6YWUoWm4pLGZvcm1hdERvYzphZShRbikscHJpbnRUb0RvYzphZShldSkscHJpbnREb2NUb1N0cmluZzphZSh0dSl9O3ZhciBxYz10cjtleHBvcnR7cmkgYXMgX19kZWJ1ZyxlaSBhcyBjaGVjayxxYyBhcyBkZWZhdWx0LGVyIGFzIGRvYyxjdSBhcyBmb3JtYXQsYXUgYXMgZm9ybWF0V2l0aEN1cnNvcix0aSBhcyBnZXRTdXBwb3J0SW5mbyxRdCBhcyB1dGlsLER1IGFzIHZlcnNpb259O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vaW5wdXQuY3NzXCI7XG5cbmltcG9ydCB7XG4gIENyZWF0ZVRhc2ssXG4gIHNldFRhc2tUaXRsZSxcbiAgc2V0VGFza0Rlc2NyaXB0aW9uLFxuICBzZXRUYXNrRHVlRGF0ZSxcbiAgc2V0VGFza1ByaW9yaXR5LFxuICBzZXRQcm9qZWN0TmFtZSxcbn0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4vdXRpbC9lbGVtZW50Q3JlYXRvclwiO1xuXG5pbXBvcnQgeyBhZGRJdGVtcywgcmVtb3ZlSXRlbXMgfSBmcm9tIFwiLi91dGlsL3NldEZ1bmN0aW9uc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVUYXNrT2JqZWN0LCBjcmVhdGVEZWxldGVUYXNrT2JqZWN0IH0gZnJvbSBcIi4vdXRpbC9jcmVhdGVPYmplY3RzXCI7XG5cbmltcG9ydCB7IGhvbWVwYWdlR2VuZXJhdG9yIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdHNOYXZFbGVtZW50cyB9IGZyb20gXCIuL3RvZG9Qcm9qZWN0XCI7XG5pbXBvcnQgcmVtb3ZlV2FybmluZyBmcm9tIFwiLi91dGlsL3JlbW92ZVdhcm5pbmdcIjtcbmltcG9ydCB7IGNvbnRlbnRHZW5lcmF0b3IsIGNvbnRlbnRQYWdlR2VuZXJhdG9yIH0gZnJvbSBcIi4vZ2VuZXJhdGVDb250ZW50XCI7XG5pbXBvcnQgZ2VuZXJhdGVXYXJuaW5nIGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVXYXJuaW5nXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUZvcm1PcHRpb24gfSBmcm9tIFwiLi91dGlsL2dlbmVyYXRlRm9ybU9wdGlvbnNcIjtcbmltcG9ydCB0b2dnbGVDbGFzc2VzIGZyb20gXCIuL3V0aWwvdG9nZ2xlQ2xhc3Nlc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVMYWJlbCwgZ2VuZXJhdGVQcm9qZWN0IH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZU5hdkVsZW1lbnRzXCI7XG5pbXBvcnQgZGlzcGxheU5hdk9wdGlvbmFscyBmcm9tIFwiLi91dGlsL2Rpc3BsYXlOYXZPcHRpb25hbHNcIjtcbmltcG9ydCB7IGVsZW1lbnRSZXNldCwgbmF2T3B0aW9uUmVzZXQgfSBmcm9tIFwiLi91dGlsL2VsZW1lbnRSZXNldFwiO1xuaW1wb3J0IGdldFRhc2tFbGVtZW50cyBmcm9tIFwiLi91dGlsL2dldFRhc2tFbGVtZXRzXCI7XG5pbXBvcnQgZ2V0VXNlcklucHV0cyBmcm9tIFwiLi91dGlsL3VzZXJJbnB1dHNHZXR0ZXJcIjtcbmltcG9ydCB7XG4gIGNvbGxhcHNlQnRuLFxuICBjcmVhdGVQcm9qZWN0LFxuICBkaXNwbGF5UHJvamVjdFByb21wdCxcbiAgY2xvc2VQcm9qZWN0UHJvbXB0LFxufSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBkaXNwbGF5Rm9ybU9wdGlvbmFscyBmcm9tIFwiLi91dGlsL2Rpc3BsYXlGb3JtT3B0aW9uYWxzXCI7XG5pbXBvcnQgZGlzcGxheUVsZW1lbnRzIGZyb20gXCIuL3V0aWwvZGlzcGxheUVsZW1lbnRzXCI7XG5pbXBvcnQgc2V0RGVmYXVsdFByb2plY3RPcHRpb24gZnJvbSBcIi4vdXRpbC9zZXREZWZhdWx0UHJvamVjdE9wdGlvblwiO1xuaW1wb3J0IFwiLi9pbnB1dC5jc3NcIjtcbmltcG9ydCB7IGRvYyB9IGZyb20gXCJwcmV0dGllclwiO1xuaW1wb3J0IHsgYWRkLCBzZXQsIHN1YiB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHRhc2tHZW5lcmF0b3IgZnJvbSBcIi4vZ2VuZXJhdGVUYXNrXCI7XG5pbXBvcnQgZGlzcGxheU5hdkZvcm0gZnJvbSBcIi4vdXRpbC9kaXNwbGF5TmF2Rm9ybVwiO1xuXG5jb25zdCB0YXNrU2V0ID0gbmV3IFNldCgpO1xuY29uc3QgY29tcGxldGVkdGFza1NldCA9IG5ldyBTZXQoKTtcbmNvbnN0IHRhZ1NldCA9IG5ldyBTZXQoKTtcbmNvbnN0IHByaW9yaXR5U2V0ID0gbmV3IFNldCgpO1xuY29uc3QgcHJvamVjdE5hbWVTZXQgPSBuZXcgU2V0KCk7XG5cbmFkZEl0ZW1zKHByaW9yaXR5U2V0LCBbXG4gIFwiU29tZSBPdGhlciBEYXlcIixcbiAgXCJOb3QgVG9kYXlcIixcbiAgXCJUb2RheVwiLFxuICBcIkluIGFuIEhvdXJcIixcbiAgXCJJbiA1IE1pbnV0ZXNcIixcbiAgXCJSaWdodCBBYm91dCBOb3dcIixcbiAgXCJTaG91bGQndmUgRG9uZSBZZXN0ZXJkYXlcIixcbl0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keVwiKTtcbiAgZGlzcGxheUVsZW1lbnRzKGJvZHksIGhvbWVwYWdlR2VuZXJhdG9yKCkpO1xuXG4gIC8vIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiKTtcbiAgY29uc3QgbmF2QWRkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2U2VjdGlvbkNvbnRhaW5lckFkZEJ0blwiKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3RDb250ZW50Q29udGFpbmVyXCIsXG4gICk7XG4gIGNvbnN0IHByb2plY3RGb3JtVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEZvcm1JbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdExpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0TGlzdENvbnRhaW5lclwiKTtcbiAgY29uc3QgbGFiZWxMaXN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzQ29udGVudENvbnRhaW5lclwiKTtcbiAgY29uc3QgdG9kYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RGb3JtRXhwYW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdG5cIik7XG4gIGNvbnN0IHByb2plY3RDb2xsYXBzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdENvbGxhcHNlQnRuXCIpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3ROYW1lSW5wdXRcIik7XG4gIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RBZGRCdG5cIik7XG4gIGNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RDYW5jZWxCdG5cIik7XG5cbiAgY29uc3QgbGFiZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRMYWJlbEZvcm1cIik7XG4gIGNvbnN0IGxhYmVsRm9ybUV4cGFuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRMYWJlbEJ0blwiKTtcbiAgY29uc3QgbGFiZWxDb2xsYXBzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxDb2xsYXBzZUJ0blwiKTtcbiAgY29uc3QgbGFiZWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxOYW1lSW5wdXRcIik7XG4gIGNvbnN0IGxhYmVsQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYWJlbEFkZEJ0blwiKTtcbiAgY29uc3QgbGFiZWxDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhYmVsQ2FuY2VsQnRuXCIpO1xuXG4gIGNvbnN0IGRlbGV0ZWRUYXNrV2FybmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlZFRhc2tXYXJuaW5nXCIpO1xuICBsZXQgY3VycmVudFRhYiA9IFwiVG9kYXlcIixcbiAgICB3YXJuaW5nLFxuICAgIHRhc2tDb250YWluZXI7XG5cbiAgcHJvamVjdEZvcm1FeHBhbmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0b2dnbGVDbGFzc2VzKFxuICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi5uYXZTZWN0aW9uQ29udGFpbmVyQnRuU3ZnXCIpLFxuICAgICAgXCJyb3RhdGVTdmdCdG5cIixcbiAgICApO1xuICAgIHRvZ2dsZUNsYXNzZXMocHJvamVjdEZvcm0sIFwiZGlzcGxheVByb2plY3RGb3JtXCIpO1xuICAgIFsuLi5wcm9qZWN0Rm9ybS5jaGlsZHJlbl0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHRvZ2dsZUNsYXNzZXMoZWwsIFtcImhpZGVWaXNpYmlsaXR5XCJdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbGFiZWxGb3JtRXhwYW5kZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZUNsYXNzZXMoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm5hdlNlY3Rpb25Db250YWluZXJCdG5TdmdcIiksXG4gICAgICBcInJvdGF0ZVN2Z0J0blwiLFxuICAgICk7XG4gICAgdG9nZ2xlQ2xhc3NlcyhsYWJlbEZvcm0sIFwiZGlzcGxheVByb2plY3RGb3JtXCIpO1xuICAgIFsuLi5sYWJlbEZvcm0uY2hpbGRyZW5dLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICB0b2dnbGVDbGFzc2VzKGVsLCBbXCJoaWRlVmlzaWJpbGl0eVwiXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHByb2plY3RDb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVDbGFzc2VzKHByb2plY3RMaXN0Q29udGVudCwgXCJoaWRlTmF2U2VjdGlvblwiKTtcbiAgICB0b2dnbGVDbGFzc2VzKHByb2plY3RDb2xsYXBzZUJ0biwgXCJjb2xsYXBzZUJ0blJvdGF0ZVwiKTtcbiAgfSk7XG5cbiAgbGFiZWxDb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVDbGFzc2VzKGxhYmVsTGlzdENvbnRlbnQsIFwiaGlkZU5hdlNlY3Rpb25cIik7XG4gICAgdG9nZ2xlQ2xhc3NlcyhsYWJlbENvbGxhcHNlQnRuLCBcImNvbGxhcHNlQnRuUm90YXRlXCIpO1xuICB9KTtcblxuICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm1PcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuXG4gICAgYWRkSXRlbXMocHJvamVjdE5hbWVTZXQsIFtcbiAgICAgIGdldFVzZXJJbnB1dHMoZm9ybURhdGEsIFtcInByb2plY3ROYW1lXCJdKVtcInByb2plY3ROYW1lXCJdLFxuICAgIF0pO1xuXG4gICAgZGlzcGxheU5hdk9wdGlvbmFscyhcbiAgICAgIHByb2plY3ROYW1lU2V0LFxuICAgICAgcHJvamVjdExpc3RDb250ZW50LFxuICAgICAgXCJwcm9qZWN0TGlzdENvbnRhaW5lclwiLFxuICAgICAgZ2VuZXJhdGVQcm9qZWN0LFxuICAgICk7XG4gICAgY29uc3QgZGVmYXVsdEVsZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgdmFsdWU6IFwidG9kYXlcIixcbiAgICB9O1xuICAgIGRpc3BsYXlGb3JtT3B0aW9uYWxzKFxuICAgICAgcHJvamVjdEZvcm1PcHRpb24sXG4gICAgICBcImZvcm0tZGV0YWlscy10YWdzXCIsXG4gICAgICBcIlRvZGF5XCIsXG4gICAgICBkZWZhdWx0RWxlbWVudEF0dHJpYnV0ZXMsXG4gICAgICBwcm9qZWN0TmFtZVNldCxcbiAgICApO1xuICAgIHNldERlZmF1bHRQcm9qZWN0T3B0aW9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFwiKSwgY3VycmVudFRhYik7XG4gIH0pO1xuXG4gIGxhYmVsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFnRm9ybU9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnXCIpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGFiZWxGb3JtLnJlc2V0KCk7XG5cbiAgICBhZGRJdGVtcyh0YWdTZXQsIFtnZXRVc2VySW5wdXRzKGZvcm1EYXRhLCBbYGxhYmVsTmFtZWBdKVtgbGFiZWxOYW1lYF1dKTtcblxuICAgIGRpc3BsYXlOYXZPcHRpb25hbHMoXG4gICAgICB0YWdTZXQsXG4gICAgICBsYWJlbExpc3RDb250ZW50LFxuICAgICAgXCJsYWJlbHNDb250ZW50Q29udGFpbmVyXCIsXG4gICAgICBnZW5lcmF0ZUxhYmVsLFxuICAgICk7XG4gICAgY29uc3QgZGVmYXVsdEVsZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgdmFsdWU6IFwibm8tdmFsdWVcIixcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfTtcbiAgICBkaXNwbGF5Rm9ybU9wdGlvbmFscyhcbiAgICAgIHRhZ0Zvcm1PcHRpb24sXG4gICAgICBcImZvcm0tZGV0YWlscy10YWdzXCIsXG4gICAgICBcIlRhZ3NcIixcbiAgICAgIGRlZmF1bHRFbGVtZW50QXR0cmlidXRlcyxcbiAgICAgIHRhZ1NldCxcbiAgICApO1xuICB9KTtcblxuICBkaXNwbGF5UGFnZShjdXJyZW50VGFiLCBjb250ZW50LCB0YXNrU2V0KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLm5hdkJ0blwiKSkge1xuICAgICAgY3VycmVudFRhYiA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgZGlzcGxheVBhZ2UoY3VycmVudFRhYiwgY29udGVudCwgdGFza1NldCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuY29udGVudC1mb3JtXCIpKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWZvcm1cIik7XG4gICAgICB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBjb25zdCB1c2VySW5wdXRzID0gZ2V0VXNlcklucHV0cyhmb3JtRGF0YSwgW1xuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICBcImRhdGVcIixcbiAgICAgICAgICBcInByaW9yaXR5XCIsXG4gICAgICAgICAgXCJ0YWdcIixcbiAgICAgICAgICBcInByb2plY3RcIixcbiAgICAgICAgXSk7XG4gICAgICAgIGlmICh1c2VySW5wdXRzICE9IC0xKSB7XG4gICAgICAgICAgYWRkSXRlbXModGFza1NldCwgW2NyZWF0ZVRhc2tPYmplY3QodXNlcklucHV0cyldKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdFRhc2sgPSBnZXRUYXNrRWxlbWVudHModGFza1NldCwgY3VycmVudFRhYik7XG4gICAgICAgICAgZWxlbWVudFJlc2V0KHRhc2tDb250YWluZXIsIFtcInRhc2tzXCJdKTtcbiAgICAgICAgICBkaXNwbGF5RWxlbWVudHModGFza0NvbnRhaW5lciwgY3VycmVudFByb2plY3RUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5jb21wbGV0ZU1hcmtlclwiKSkge1xuICAgICAgY29uc3QgY29tcGxldGVNYXJrZXIgPSBlLnRhcmdldDtcbiAgICAgIHRhc2tTZXQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi50YXNrXCIpID09IHRhc2suZWxlbWVudFswXSkge1xuICAgICAgICAgIGNvbXBsZXRlTWFya2VyLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZU1hcmtlckNoZWNrZWRcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZChcImhpZGVUYXNrXCIpO1xuICAgICAgICAgICAgY29tcGxldGVNYXJrZXIuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlTWFya2VyQ2hlY2tlZFwiKTtcbiAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgIHdhcm5pbmcgPSBnZW5lcmF0ZVdhcm5pbmcoKTtcbiAgICAgICAgICBjb25zdCB3YXJuaW5nQnRuID0gd2FybmluZ1swXS5xdWVyeVNlbGVjdG9yKFwiLnVuZG9XYXJuaW5nQnRuXCIpO1xuICAgICAgICAgIGNvbnN0IGNsZWFyVGFza0lEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVJdGVtcyh0YXNrU2V0LCBbdGFza10pO1xuICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgIGFkZEl0ZW1zKGNvbXBsZXRlZHRhc2tTZXQsIFtcbiAgICAgICAgICAgIGNyZWF0ZURlbGV0ZVRhc2tPYmplY3QoW3dhcm5pbmdCdG4sIHRhc2ssIGNsZWFyVGFza0lEXSksXG4gICAgICAgICAgXSk7XG5cbiAgICAgICAgICBkaXNwbGF5RWxlbWVudHMoZGVsZXRlZFRhc2tXYXJuaW5nLCB3YXJuaW5nKTtcbiAgICAgICAgICByZW1vdmVXYXJuaW5nKHdhcm5pbmdbMF0sIDUwMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi51bmRvV2FybmluZ0J0blwiKSkge1xuICAgICAgY29uc3QgdW5kb0RvbUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudW5kb1dhcm5pbmdCdG5cIik7XG4gICAgICBbLi4uY29tcGxldGVkdGFza1NldF0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay51bmRvQnRuID09IHVuZG9Eb21CdG4pIHtcbiAgICAgICAgICB0YXNrLnRhc2tFbC5lbGVtZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlVGFza1wiKTtcbiAgICAgICAgICB0YXNrLnVuZG9CdG4uY2xvc2VzdChcIi53YXJuaW5nXCIpLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVXYXJuaW5nXCIpO1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKGNvbXBsZXRlZHRhc2tTZXQsIFt0YXNrXSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRhc2suY2xlYXJUYXNrSWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi50YXNrRGVsZXRlXCIpKSB7XG4gICAgICBjb25zdCB0YXNrRE9NID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrXCIpO1xuICAgICAgWy4uLnRhc2tTZXRdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZWxlbWVudFswXSA9PSB0YXNrRE9NKSB7XG4gICAgICAgICAgcmVtb3ZlSXRlbXModGFza1NldCwgW3Rhc2tdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlbGVtZW50UmVzZXQodGFza0NvbnRhaW5lciwgW1widGFza3NcIl0pO1xuICAgICAgZGlzcGxheUVsZW1lbnRzKHRhc2tDb250YWluZXIsIGdldFRhc2tFbGVtZW50cyh0YXNrU2V0LCBjdXJyZW50VGFiKSk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIubGFiZWxEZWxldGVCdG5cIikpIHtcbiAgICAgIGNvbnN0IHRhZ0NvbnRlbnQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmxhYmVsXCIpLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdGFnRm9ybU9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFnXCIpO1xuICAgICAgcmVtb3ZlSXRlbXModGFnU2V0LCBbdGFnQ29udGVudF0pO1xuICAgICAgWy4uLnRhc2tTZXRdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2sudGFnID09IHRhZ0NvbnRlbnQpIHtcbiAgICAgICAgICB0YXNrLnRhZyA9IG51bGw7XG4gICAgICAgICAgdGFzay5lbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3IoXCIudGFza1RhZ1wiKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaXNwbGF5TmF2T3B0aW9uYWxzKFxuICAgICAgICB0YWdTZXQsXG4gICAgICAgIGxhYmVsTGlzdENvbnRlbnQsXG4gICAgICAgIFwibGFiZWxzQ29udGVudENvbnRhaW5lclwiLFxuICAgICAgICBnZW5lcmF0ZUxhYmVsLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRFbGVtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgdmFsdWU6IFwibm8tdmFsdWVcIixcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICAgIGRpc3BsYXlGb3JtT3B0aW9uYWxzKFxuICAgICAgICB0YWdGb3JtT3B0aW9uLFxuICAgICAgICBcImZvcm0tZGV0YWlscy10YWdzXCIsXG4gICAgICAgIFwiVGFnc1wiLFxuICAgICAgICBkZWZhdWx0RWxlbWVudEF0dHJpYnV0ZXMsXG4gICAgICAgIHRhZ1NldCxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVUYWIoY3VycmVudFRhYiwgbmF2QnRuKSB7XG4gIG5hdkJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuLnRleHRDb250ZW50ID09IGN1cnJlbnRUYWIpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlVGFiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVRhYlwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZShjdXJyZW50VGFiLCBjb250ZW50LCB0YXNrU2V0KSB7XG4gIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnRuXCIpO1xuICBjaGFuZ2VBY3RpdmVUYWIoY3VycmVudFRhYiwgbmF2QnRuKTtcbiAgZWxlbWVudFJlc2V0KGNvbnRlbnQsIFtcImNvbnRlbnRcIl0pO1xuICBjb25zdCBjb250ZW50UGFnZSA9IGNvbnRlbnRQYWdlR2VuZXJhdG9yKFxuICAgIGN1cnJlbnRUYWIsXG4gICAgcHJvamVjdE5hbWVTZXQsXG4gICAgdGFnU2V0LFxuICAgIHByaW9yaXR5U2V0LFxuICApO1xuICBkaXNwbGF5RWxlbWVudHMoY29udGVudCwgY29udGVudFBhZ2UpO1xuICBzZXREZWZhdWx0UHJvamVjdE9wdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIiksIGN1cnJlbnRUYWIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgZGlzcGxheUVsZW1lbnRzKHRhc2tDb250YWluZXIsIGdldFRhc2tFbGVtZW50cyh0YXNrU2V0LCBjdXJyZW50VGFiKSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWwiLCJjb2xsYXBzZUJ0biIsImJ0biIsIm5vZGVOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjcmVhdGVQcm9qZWN0IiwiZGlzcGxheVByb2plY3RQcm9tcHQiLCJhZGQiLCJjbG9zZVByb2plY3RQcm9tcHQiLCJyZXNldCIsInJlbW92ZSIsImdlbmVyYXRlRm9ybU9wdGlvbiIsImNvbnRlbnRQYWdlR2VuZXJhdG9yIiwiY3VycmVudFRhYiIsInByb2plY3RzIiwibGFiZWxzIiwicHJpb3JpdGllcyIsImNvbnRlbnRIZWFkZXIiLCJjb250ZW50SGVhZGVySGVhZGluZyIsImNvbmNhdCIsInRhc2tzIiwiY29udGVudENvbnRhaW5lciIsImFwcGVuZCIsImZvcm1HZW5lcmF0b3IiLCJjb250ZW50Rm9ybSIsInRvZG9EZXRhaWxzIiwidG9kb0RldGFpbHNOYW1lIiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0b2RvRGV0YWlsc0Rlc2NyaXB0aW9uIiwiZm9ybU9wdGlvbmFsc0RpdiIsInRvZG9EZXRhaWxzRGF0ZSIsInRvZG9EZXRhaWxzUHJpb3JpdHkiLCJ2YWx1ZSIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJ0b2RvRGV0YWlsc1RhZ3MiLCJmb3JtU3VibWl0IiwidG9kb0RldGFpbHNQcm9qZWN0IiwiZm9ybUJ1dHRvbkNvbnRhaW5lciIsInRhc2tHZW5lcmF0b3IiLCJ1c2VySW5wdXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0YXNrIiwiY29tcGxldGVNYXJrZXJDb250YWluZXIiLCJjb21wbGV0ZU1hcmtlciIsInRhc2tDb250ZW50IiwidGFza0hlYWRpbmciLCJkZXNjcmlwdGlvbiIsInRhc2tEZXNjcmlwdGlvbiIsIm90aGVyVGFncyIsImRhdGUiLCJ0YXNrRGF0ZSIsInByaW9yaXR5IiwidGFza1ByaW9yaXR5IiwidGFnIiwidGFza1RhZyIsInRhc2tPcHRpb25zIiwidGFza0RlbGV0ZUJ0biIsImRpdmlkZXIiLCJjcmVhdGVTVkciLCJob21lcGFnZUdlbmVyYXRvciIsIm5hdiIsInVzZXJJY29uIiwidXNlckljb25TdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwiZCIsIm5hdlNlY3Rpb25Db250YWluZXJUb2RvIiwibmF2QnRuVG9kYXkiLCJuYXZTZWN0aW9uQ29udGFpbmVyUHJvamVjdHMiLCJwcm9qZWN0c0NvbnRhaW5lckhlYWRlciIsInByb2plY3RzQ29udGFpbmVySGVhZGVySGVhZGluZyIsInByb2plY3RzQ29udGFpbmVySGVhZGVyQWRkQnRuIiwicHJvamVjdHNDb250YWluZXJIZWFkZXJDb2xsYXBzZUJ0biIsInByb2plY3RzQ29udGVudCIsImNyZWF0ZU5hdklucHV0cyIsIm5hdlNlY3Rpb25Db250YWluZXJsYWJlbHMiLCJwcm9qZWN0TGlzdENvbnRhaW5lciIsImxhYmVsc0NvbnRhaW5lckhlYWRlciIsImxhYmVsc0NvbnRhaW5lckhlYWRlckhlYWRpbmciLCJsYWJlbHNDb250YWluZXJIZWFkZXJBZGRCdG4iLCJsYWJlbHNDb250YWluZXJIZWFkZXJDb2xsYXBzZUJ0biIsImxhYmVsc0NvbnRlbnQiLCJsYWJlbHNDb250YWluZXIiLCJkZWxldGVUYXNrV2FybmluZyIsImNvbnRlbnQiLCJmb3JtQ2xhc3MiLCJpbnB1dENsYXNzIiwiaW5wdXRQbGFjZUhvbGRlciIsImlucHV0TmFtZSIsImJ0bkNsYXNzIiwiYWRkTmF2Rm9ybSIsImFkZE5hdklucHV0IiwicHJvamVjdEZvcm1BZGRCdG4iLCJwcm9qZWN0Rm9ybUNhbmNlbEJ0biIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpdGVyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpc0FycmF5IiwibGVuIiwiaSIsImFycjIiLCJDcmVhdGVUYXNrIiwicHJvcGVyaXRpZXMiLCJtZXRob2RzIiwic3RhdGUiLCJtb2RpZnlBdHRyaWJ1dGVzIiwiYXNzaWduIiwiYXBwbHkiLCJtYXAiLCJtZXRob2QiLCJzZXRUYXNrVGl0bGUiLCJ0aXRsZSIsInNldFRhc2tEZXNjcmlwdGlvbiIsInNldFRhc2tEdWVEYXRlIiwiZHVlRGF0ZSIsInNldFRhc2tQcmlvcml0eSIsInNldFRhc2tMYWJlbCIsImxhYmVsIiwic2V0UHJvamVjdE5hbWUiLCJwcm9qZWN0TmFtZSIsImNyZWF0ZVByb2plY3RzTmF2RWxlbWVudHMiLCJwcm9qZWN0TGlzdCIsInByb2plY3RFbGVtZW50cyIsImZvckVhY2giLCJwcm9qZWN0IiwicHVzaCIsIl90eXBlb2YiLCJvd25LZXlzIiwiciIsInQiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiX3RvUHJvcGVydHlLZXkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsInRvUHJpbWl0aXZlIiwiTnVtYmVyIiwiY3JlYXRlVGFza09iamVjdCIsImVsZW1lbnQiLCJjcmVhdGVEZWxldGVUYXNrT2JqZWN0IiwidmFsdWVzIiwidW5kb0J0biIsInRhc2tFbCIsImNsZWFyVGFza0lkIiwiZGlzcGxheUVsZW1lbnRzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImVsZW1lbnRSZXNldCIsImRpc3BsYXlGb3JtT3B0aW9uYWxzIiwicGFyZW50RWwiLCJwYXJlbnRFbENsYXNzIiwiZmlyc3RPcHRpb24iLCJmaXJzdE9wdGlvbkF0dHJpYnV0ZXMiLCJzZXQiLCJkaXNwbGF5TmF2Rm9ybSIsImV4cGFuZEJ0biIsImZvcm0iLCJnZXRVc2VySW5wdXRzIiwiYWRkSXRlbXMiLCJkaXNwbGF5TmF2T3B0aW9uYWxzIiwiZ2VuZXJhdG9yRm4iLCJpdGVtIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwibCIsInUiLCJhIiwiZiIsIm5leHQiLCJkb25lIiwiX2VsJGNsYXNzTGlzdCIsImNsYXNzZXMiLCJhdHRyaWJ1dGVzIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInNldEF0dHJpYnV0ZSIsIkVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlubmVyVGV4dCIsIm5hdk9wdGlvblJlc2V0Iiwib3B0aW9uc0xpc3QiLCJmaXJzdENoaWxkIiwiZmlyc3RDaGlsZEF0dHJpYnV0ZSIsIm9wdGlvbiIsInRvTG93ZXJDYXNlIiwiZ2VuZXJhdGVQcm9qZWN0IiwiZGl2IiwicHJvamVjdE5hbWVCdG4iLCJnZW5lcmF0ZUxhYmVsIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRWwiLCJsYWJlbERlbGV0ZUJ0blNWRyIsImNyZWF0ZUNpcmNsZVNWRyIsImdlbmVyYXRlV2FybmluZyIsIndhcm5pbmciLCJ0aW1lciIsImN4IiwiY3kiLCJjb25zb2xlIiwibG9nIiwidW5kb1dhcm5pbmdCdG4iLCJzZXRUaW1lb3V0IiwiZ2V0VGFza0VsZW1lbnRzIiwidGFza0FycmF5IiwicmVzdWx0IiwicmVtb3ZlV2FybmluZyIsInRpbWUiLCJzZXREZWZhdWx0UHJvamVjdE9wdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldE5hbWUiLCJTZXQiLCJpdGVtcyIsInJlbW92ZUl0ZW1zIiwiX2ljb25TdmckY2xhc3NMaXN0Iiwic3ZnQXR0cmlidXRlcyIsInBhdGhBdHRyaWJ1dGVzIiwiaWNvblN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImljb25QYXRoIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJfaWNvblN2ZyRjbGFzc0xpc3QyIiwiX2kzIiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiLCJfaTQiLCJfT2JqZWN0JGVudHJpZXM0IiwiX09iamVjdCRlbnRyaWVzNCRfaSIsInRvZ2dsZUNsYXNzZXMiLCJ0b2dnbGVDbGFzcyIsImZvcm1EYXRhIiwiaW5wdXRzIiwicmV0dXJuT2JqIiwiZ2V0IiwiaW5wdXQiLCJjb250ZW50R2VuZXJhdG9yIiwiZG9jIiwic3ViIiwidGFza1NldCIsImNvbXBsZXRlZHRhc2tTZXQiLCJ0YWdTZXQiLCJwcmlvcml0eVNldCIsInByb2plY3ROYW1lU2V0Iiwid2luZG93IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZBZGRCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RDb250ZW50Q29udGFpbmVyIiwicHJvamVjdEZvcm1UZXh0IiwicHJvamVjdExpc3RDb250ZW50IiwibGFiZWxMaXN0Q29udGVudCIsInRvZGF5UGFnZSIsInByb2plY3RGb3JtIiwicHJvamVjdEZvcm1FeHBhbmRlciIsInByb2plY3RDb2xsYXBzZUJ0biIsInByb2plY3RJbnB1dCIsInByb2plY3RBZGRCdG4iLCJwcm9qZWN0Q2FuY2VsQnRuIiwibGFiZWxGb3JtIiwibGFiZWxGb3JtRXhwYW5kZXIiLCJsYWJlbENvbGxhcHNlQnRuIiwibGFiZWxJbnB1dCIsImxhYmVsQWRkQnRuIiwibGFiZWxDYW5jZWxCdG4iLCJkZWxldGVkVGFza1dhcm5pbmciLCJ0YXNrQ29udGFpbmVyIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJvamVjdEZvcm1PcHRpb24iLCJnZXRFbGVtZW50QnlJZCIsIkZvcm1EYXRhIiwiZGVmYXVsdEVsZW1lbnRBdHRyaWJ1dGVzIiwidGFnRm9ybU9wdGlvbiIsImRpc3BsYXlQYWdlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1c2VySW5wdXRzIiwiY3VycmVudFByb2plY3RUYXNrIiwid2FybmluZ0J0biIsImNsZWFyVGFza0lEIiwidW5kb0RvbUJ0biIsImNsZWFyVGltZW91dCIsInRhc2tET00iLCJ0YWdDb250ZW50IiwiY2hhbmdlQWN0aXZlVGFiIiwibmF2QnRuIiwiY29udGVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9