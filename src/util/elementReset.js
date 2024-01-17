export function elementReset(element, classes = []) {
  element.innerText = "";
  if (classes.length != 0) {
    element.setAttribute("class", ...classes);
  }
  return element;
}

export function navOptionReset(element, classes = []) {
  element.innerText = "";
  element.setAttribute("class", ...classes);
  return element;
}
