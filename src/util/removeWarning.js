export default function removeWarning(element, time) {
  setTimeout(() => {
    element.classList.add("removeWarning");
    setTimeout(() => {
      element.remove();
    }, 250);
  }, time);
}
