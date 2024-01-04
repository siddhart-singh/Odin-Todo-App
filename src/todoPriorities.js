"use strict";

export function addPriority(priorityList = new Set(), priorityTag) {
  return priorityList.add(priorityTag);
}

export function removePriority(priorityList = new Set(), priorityTag) {
  return priorityList.delete(priorityTag);
}
