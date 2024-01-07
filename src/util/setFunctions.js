"use strict";

export function addItems(setName = new Set(), items = []) {
  items.forEach((item) => {
    setName.add(item);
  });
  return setName;
}

export function removeItems(setName = new Set(), items = []) {
  items.forEach((item) => {
    setName.remove(item.trim());
  });
  return setName;
}
