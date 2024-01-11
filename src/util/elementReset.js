export default function elementReset(element, classes = []) {
  element.innerText = "";
  element.setAttribute("class", ...classes);
  return element;
}
