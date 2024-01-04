"use strict";

export function addLabel(labelList = new Set(), labelName) {
  return labelList.add(labelName);
}

export function removeLabel(labelList = new Set(), labelName) {
  return labelList.delete(labelName);
}
