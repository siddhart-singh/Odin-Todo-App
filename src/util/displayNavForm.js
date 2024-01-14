"use strict";

export default function displayNavForm(expandBtn, form) {
  expandBtn.addEventListener("click", (e) => {
    form.classList.toggle("displayProjectForm");
  });
}
