const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("input-user").value;
  const password = document.getElementById("input-password").value;

  if (user == "admin" && password == "1234") {
    console.log("Login autorizado");
    window.location.href = "https://www.google.com/";
  } else {
    console.log("Login não autorizado");
  }
});
