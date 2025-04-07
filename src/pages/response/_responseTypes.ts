export type Response = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  attend: boolean | null;
  food: string;
  song: string;
};

export type FormError = {
  hasError: boolean;
  errors: ErrorMessage;
};

export type ErrorMessage = {
  [key: string]: string;
};
