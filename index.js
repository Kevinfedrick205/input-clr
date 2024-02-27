var _ = require("lodash");

const emptyInputs = (data, requiredData) => {
  const missingData = [];
  if (
    !_.isObject(data) ||
    !_.isArray(requiredData) ||
    _.isEmpty(requiredData) ||
    _.isEmpty(data)
  ) {
    return { message: "error", status: "error", data: null };
  }

  for (let i = 0; i < requiredData.length; i++) {
    // console.log(requiredData[i]);
    // console.log(data[requiredData[i]]);
    if (!data[requiredData[i]]) {
      missingData.push(requiredData[i]);
    }
  }
  if (missingData.length > 0) {
    return {
      message: "you need to add the following required data",
      status: "error",
      data: missingData,
    };
  }

  return { message: "success", status: "ok", data: null };
};

module.exports = emptyInputs;
