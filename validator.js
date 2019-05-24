
export const field = ({ value = '', name, isRequired = true, minLength = 0, pattern = '' }) => {
  const settings = {
    value,
    name,
    errors: [],
    validations: {}
  }

  if (isRequired) {
    settings.validations.isRequired = true;
  }
  if (minLength > 0) {
    settings.validations.minLength = minLength;
  }
  if (pattern) {
    settings.validations.pattern = pattern;
  }

  return settings;
}

export default (value, name, validations) => {

  let valid = true,
    errors = [];

  if (validations.isRequired && !value.trim()) {
    valid = false;
    errors.push(`${name} is required`);
  }

  if (validations.minLength && value.length < validations.minLength) {
    valid = false;
    errors.push(`${name} should be no less than ${validations.minLength} characters`);
  }

  if (validations.pattern && !validations.pattern.test(value)) {
    valid = false;
    errors.push(`Invalid ${name}`);
  }

  return { valid, errors };
}
export const CheckExistsUsernameAndPassword = (users, userName, password) => {
  let LoginPasswordError = [],LoginUserNameError = [], ValidPassword = false, ValidUserName = false;
  for (let i = 0; i < users.length; i++) {
    /*if (users[i].userName == userName && users[i].password == password) {
      ValidPassword = true, ValidUserName = true;

    } if (users[i].userName == userName && users[i].password != password) {
      ValidPassword = false;
      LoginErrors.push(`Invalid Password`);

    } if (users[i].userName != userName && users[i].password == password) {
      ValidUserName = false;
      LoginErrors.push(`Invalid userName`);
    }*/
      if (users[i].userName == userName) {
            ValidUserName = true;
      if (users[i].password == password) {
            ValidPassword = true;
      }
      if(!ValidPassword)LoginPasswordError.push(`Wrong Email or password!`);
      break;
    }
  }
  if(userName!=""&&!ValidUserName){
            LoginUserNameError.push(`Wrong Email or password !`);
  }
  return { ValidPassword, ValidUserName,LoginUserNameError,LoginPasswordError};
}
export const checkUniqueUserName = (users, userName) => {
  let UniqueUserNameError = [], userNameExists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == userName) {
      userNameExists = true;
      break;
    }
  }
  if (userName != "" && userNameExists) {
    UniqueUserNameError.push(`userName Exists`);
  }
  return { userNameExists, UniqueUserNameError };
}