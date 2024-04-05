function registerUser(email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("Email already registered. Please use a different email.");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful. You can now log in.");

  localStorage.setItem("currentUser", email);
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    if (password !== repeatPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    registerUser(email, password);
  });
