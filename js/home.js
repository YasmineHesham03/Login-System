let welcomeMsg = document.querySelector("#welcomeMsg");
let logOutBtn = document.querySelector("#logOutBtn");

if (localStorage.getItem("userName") != null) {
  welcomeMsg.innerHTML = `Welcome ${localStorage.getItem("userName")}`;
}

function logOut() {
  window.location.href = "index.html";
  localStorage.removeItem("userName");
}

logOutBtn.addEventListener("click", logOut);
