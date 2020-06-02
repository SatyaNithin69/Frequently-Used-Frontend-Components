class ValidationError extends Error {
  constructor(message) {
    super();
    console.log("inside constructor--", message);
    this.message = message;
  }
}

function validateName() {
  throw new ValidationError("sample error");
}

function isValid() {
  try {
    validateName();
  } catch (err) {
    console.log("inside catch");
    console.log(err instanceof ValidationError);
    console.log(err.message);
  }
}

isValid();
