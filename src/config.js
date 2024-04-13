const BASE_URL = "http://localhost:8000/api/"


const get_auth_user = () => {
  const login_user = JSON.parse(localStorage.getItem("login"));
  return login_user;
}

const get_access_token = () => {
  const login_user = get_auth_user();

  let access_token = "";
  if (login_user) {
    access_token = login_user.token.access;
    return access_token;
  }
  access_token = "";
  return access_token;
}

const get_operation = (user_operation) => {
  let operation_object;
  const storage = JSON.parse(localStorage.getItem("operations"));
  operation_object = storage[user_operation];
  return operation_object;
}

const get_operations = () => {
    let storage = JSON.parse(localStorage.getItem("operations"));
    return storage;
}

const set_operation = (operation, status) => {
  let storage = JSON.parse(localStorage.getItem("operations"));
  storage[operation]["status"] = status;
  localStorage.setItem("operations", JSON.stringify(storage));
}

export { get_auth_user, get_access_token, get_operation, get_operations, set_operation, BASE_URL };