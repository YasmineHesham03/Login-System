let signUpNameInput = document.querySelector("#signUpName");
let signUpEmailInput = document.querySelector("#signUpEmail");
let signUpPasswordInput = document.querySelector("#signUpPassword");
let signUpBtn = document.querySelector("#signUpBtn");
let userContainer = [];

if (localStorage.getItem("Users")) {
  userContainer = JSON.parse(localStorage.getItem("Users"));
}

function signUp() {
  let userData = {
    userName: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPasswordInput.value,
  };

  if (checksIfInputIsEmpty() == true) {
    getAlertMsg("All Inputs Are Required", "red");
  } else {
    if (checksIfEmailExists() == true) {
      getAlertMsg("Email Already Exists", "red");
    } else {
      userContainer.push(userData);
      localStorage.setItem("Users", JSON.stringify(userContainer));
      getAlertMsg("Success", "green");
      clearForm();
    }
  }
}

function getAlertMsg(text, color) {
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.innerHTML = text;
  alertMsg.style.color = color;
}

function clearForm() {
  signUpNameInput.value = "";
  signUpEmailInput.value = "";
  signUpPasswordInput.value = "";
}

function checksIfInputIsEmpty() {
  if (
    signUpNameInput.value == "" ||
    signUpEmailInput.value == "" ||
    signUpPasswordInput.value == ""
  )
    return true;
  else return false;
}

function checksIfEmailExists() {
  for (let i = 0; i < userContainer.length; i++)
    if (userContainer[i].email == signUpEmailInput.value) {
      return true;
    }
}

signUpBtn.addEventListener("click", signUp);
