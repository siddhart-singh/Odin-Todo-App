"use strict";

export default function getUserInputs(formData, inputs = []) {
  const returnObj = {};
  inputs.forEach((input) => {
    returnObj[`${input}`] = formData.get(`${input}`);
  });

  return returnObj;
}
