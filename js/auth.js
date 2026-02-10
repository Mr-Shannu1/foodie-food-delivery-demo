function signup() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({
    name: name.value,
    email: email.value,
    password: password.value
  });
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "login.html";
}

function login() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    u => u.email === email.value && u.password === password.value
  );
  if (!user) return alert("Invalid credentials");
  localStorage.setItem("sessionUser", JSON.stringify(user));
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("sessionUser");
  window.location.href = "login.html";
}
