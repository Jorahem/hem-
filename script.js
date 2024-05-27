document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const toggleRegister = document.getElementById("toggleRegister");
  const toggleLogin = document.getElementById("toggleLogin");

  toggleRegister.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  toggleLogin.addEventListener("click", function (event) {
    event.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const fullname = registerForm.fullname.value;
    const email = registerForm.email.value;
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Registration successful!");
  });
});
