"use strict";

export function addItems(setName = new Set(), items = []) {
  items.forEach((item) => {
    if (item.length != 0) {
      setName.add(item);
    }
  });
  return setName;
}

export function removeItems(setName = new Set(), items = []) {
  items.forEach((item) => {
    setName.delete(item);
  });
  return setName;
}
