"use strict";

export default function getUserInputs(formData, inputs = []) {
  const returnObj = {};
  if (formData.get("name") == "") {
  
    return -1;
  }
  inputs.forEach((input) => {
    returnObj[`${input}`] = formData.get(`${input}`);
  });

  return returnObj;
}
