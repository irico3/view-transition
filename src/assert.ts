type Assert = (value: unknown) => asserts value;

const ERROR_MESSAGE = "Expected value to be truthy but it is falsy";

export const assert: Assert = (value) => {
  if (!value) {
    throw new Error(ERROR_MESSAGE);
  }
};
