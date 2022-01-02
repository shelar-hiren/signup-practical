export const emailValidate = (inputText) => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    inputText
  );
};
export const passwordValidate = (inputText) => {
  return /^.{6,8}$/.test(inputText);
};
