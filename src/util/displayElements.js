"use strict";



export default function displayElements(parent, children = []) {
  children.forEach((child) => {
    parent.append(child);
  });

  return parent;
}
