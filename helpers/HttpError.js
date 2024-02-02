const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  console.log(status, message)
  return error;
};

module.exports = {HttpError};
