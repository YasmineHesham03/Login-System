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

  userContainer.push(userData);
  localStorage.setItem("Users", JSON.stringify(userContainer));
}

signUpBtn.addEventListener("click", function () {
  signUp();
});

