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

const get_from_storage = (key) => {
  let storage = JSON.parse(localStorage.getItem(key));
  return storage;
}

const store_to_storage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const create_operations = () => {
  let operations = {
    "login": {"text": "User Login Successfully", "status": false},
    "signup": {"text": "You registered successfully", "status": false},
    "reservation": {"text": "New reservation made successfully", "status": false},
    "cancel_reservation": {"text": "You cancelled an appointment", "status": false},
    "failed_password_verification": {"text": "Password verification failed", "status": true},
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

const add_class = (klass, mobile_klass) => {
  let element = document.querySelector(klass);
  element.classList.add(mobile_klass);
}

const remove_class = (klass, mobile_klass) => {
  let element = document.querySelector(klass);
  element.classList.remove(mobile_klass);
}

const _mobile_classes = [
  'main-header', 'draw-bttn', 'app-title',
  'aside', 'main-container'
];

const enable_element_style_behaviour = () => {
  _mobile_classes.forEach(klass => {
    let _klass = `.${klass}`;
    let mobile_klass = `mobile-${klass}`;
    add_class(_klass, mobile_klass);
  })
}

const disable_element_style_behaviour = () => {
  _mobile_classes.forEach(klass => {
    let _klass = `.${klass}`;
    let mobile_klass = `mobile-${klass}`;
    remove_class(_klass, mobile_klass);
  })
}

const action_confirmation_display = (is_display) => {
  // displays the action confirmation button
  let action_confirmation = document.querySelector(".action");
  is_display ? action_confirmation.style.display = 'flex' : 
  action_confirmation.style.display = 'none';
}



export {
  BASE_URL, get_auth_user, get_access_token, get_operation, get_operations,
  set_operation, send_alert, create_operations, sendRequest, get_from_storage,
  store_to_storage, enable_element_style_behaviour, disable_element_style_behaviour,
  action_confirmation_display
};