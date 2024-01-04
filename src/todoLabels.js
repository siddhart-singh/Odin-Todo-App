"use strict";

export function addLabel(labelList = new Set(), labelTag) {
  return labelList.add(labelTag);
}

export function removeLabel(labelList = new Set(), labelTag) {
  return labelList.delete(labelTag);
}
