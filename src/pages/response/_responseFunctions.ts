import * as ResponseTypes from "./_responseTypes";

export function valitadeForm(
  response: ResponseTypes.Response
): ResponseTypes.FormError {
  let hasError = false;
  let errors: ResponseTypes.ErrorMessage = {};

  if (response.firstName === "") {
    hasError = true;

    errors = { ...errors, firstName: "First name is required" };
  }

  if (response.lastName === "") {
    hasError = true;
    errors = { ...errors, lastName: "Last name is required" };
  }

  if (response.email === "") {
    hasError = true;
    errors = { ...errors, email: "Email is required" };
  }

  if (response.attend === null) {
    hasError = true;
    errors = { ...errors, attend: "Please select if you are attending" };
  }

  if (response.phone === "") {
    hasError = true;
    errors = { ...errors, phone: "Phone number is required" };
  }

  return { hasError, errors };
}
