export default function removeWarning(element, time) {
  return setTimeout(() => {
    element.classList.add("removeWarning");
    setTimeout(() => {
      element.remove();
    }, 250);
  }, time);
}
