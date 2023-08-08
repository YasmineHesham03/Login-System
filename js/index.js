let logInEmailInput = document.querySelector("#signInEmail");
let logInPasswordInput = document.querySelector("#signInPassword");
let logInBtn = document.querySelector("#logInBtn");
let alertMsg = document.querySelector("#alertMsg");
let userContainer = [];

if (localStorage.getItem("Users") != null) {
  userContainer = JSON.parse(localStorage.getItem("Users"));
}

function logIn() {
  if (checksIfInputIsEmpty() == true) {
    getAlertMsg("All Inputs Are Required", "red");
  } else {
    if (checksEmailAndPassword() == true) {
      window.location.href = "home.html";
    } else {
      getAlertMsg("Email or Password Doesn't Exist", "red");
    }
  }
}

function checksEmailAndPassword() {
  for (let i = 0; i < userContainer.length; i++) {
    if (
      userContainer[i].email == logInEmailInput.value &&
      userContainer[i].password == logInPasswordInput.value
    )
      localStorage.setItem("userName", userContainer[i].userName);

    {
      return true;
    }
  }
}

function getAlertMsg(text, color) {
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.innerHTML = text;
  alertMsg.style.color = color;
}

function checksIfInputIsEmpty() {
  if (logInEmailInput.value == "" || logInPasswordInput.value == "")
    return true;
  else return false;
}

logInBtn.addEventListener("click", logIn);
