export function elementReset(element, classes = []) {
  element.innerText = "";
  element.setAttribute("class", ...classes);
  return element;
}

export function navOptionReset(element, classes = [], firstItem) {
  element.innerText = "";
  element.setAttribute("class", ...classes);
  element.append(firstItem);
  return element;
}
