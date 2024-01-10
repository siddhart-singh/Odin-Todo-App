"use strict";

export default function getUserInputs(formData) {
  return {
    name: formData.get("task-name"),
    description: formData.get("task-description"),
    date: formData.get("date"),
    priority: formData.get("priority"),
    tag: formData.get("tag"),
  };
}
