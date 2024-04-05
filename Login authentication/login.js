function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === username && user.password === password
  );
  if (user) {
    alert("Login successful. Redirecting to dashboard.");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
    document.getElementById("password").value = "";
  }
  localStorage.setItem("currentUser", username);
}

document
  .querySelector(".loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    loginUser(username, password);
  });
