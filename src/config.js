const BASE_URL = "http://localhost:8080/api"


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

const send_alert = () => {

  const operations = get_operations();
  
  for (var op in operations) {

    let operation_object = operations[op];
    
    if (operation_object['status']) {
      setTimeout(() => create_operations(), 1000);
      return operation_object['text'];
    }
  }
}

const create_operations = () => {
  let operations = {
    "login": {"text": "User Login Successfully", "status": false},
    "signup": {"text": "You registered successfully", "status": false},
    "reservation": {"text": "New reservation made successfully", "status": false}
  }
  localStorage.setItem("operations", JSON.stringify(operations));
}

const sendRequest = (URL, HEADERS) => {
  fetch(URL, {headers: HEADERS})
    .then(response => {
      if (!response.ok) {
        return response;
      }
      if (response.status === 401) {
        console.log("You are not authorised yet")
      }
      if (response.status === 400) {
        console.log("Bad request sent");
      }

      // return response.json();
    })
    .then(res => {
      if (!res) {
        return res
      }
      return res.data;
    })
}

export { BASE_URL, get_auth_user, get_access_token, get_operation, get_operations, set_operation, send_alert, create_operations, sendRequest };