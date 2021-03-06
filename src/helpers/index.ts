import { RETURN_TYPE } from "../constants/returnType";
import { client } from "../client";

export const getServiceData = (queryStr: string): Promise<RETURN_TYPE> => {
  return client.fetch(queryStr);
};

export const validateForm = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  let error = "";

  if (name === "name" && !value) {
    error = "Please enter your name !";
  }

  if (name === "email" && !value) {
    error = "Please enter your email !";
  }

  if (name === "message" && !value) {
    error = "Please enter message !";
  }

  return error;
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
