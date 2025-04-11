function showForm(type) {
    document.getElementById("formTitle").textContent = type === "login" ? "Login" : "Register";
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.remove("active");
    document.getElementById(type + "Form").classList.add("active");
  }
  
  // LOGIN
  document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
      })
    });
  
    const result = await res.json();
  
    if (res.ok) {
      alert("Login successful!");
      localStorage.setItem("vrishtiUser", JSON.stringify(result.user));
      if (result.user.role === "farmer") {
        window.location.href = "dashboard-farmer.html";
      } else {
        window.location.href = "dashboard-company.html";
      }
    } else {
      alert(result.error);
    }
  });
  
  // REGISTER
  document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: document.getElementById("role").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    });
  
    const result = await res.json();
  
    if (res.ok) {
      alert("Registered successfully! You can now log in.");
      showForm("login"); // Switch to login tab
    } else {
      alert(result.error || "Registration failed");
    }
  });
  function togglePassword(id, el) {
    const input = document.getElementById(id);
    if (input.type === "password") {
      input.type = "text";
      el.textContent = "🙈";
    } else {
      input.type = "password";
      el.textContent = "👁️";
    }
  }
  
  