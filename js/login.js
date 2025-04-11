document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const res = await fetch('https://vrishti-backend.onrender.com/api/wastes', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    });
  
    const result = await res.json();
    if (res.ok) {
      alert("Login successful!");
  
      // Save user info in localStorage
      localStorage.setItem("vrishtiUser", JSON.stringify(result.user));
  
      // Redirect based on role
      if (result.user.role === "farmer") {
        window.location.href = "dashboard-farmer.html";
      } else if (result.user.role === "company") {
        window.location.href = "dashboard-company.html";
      } else {
        window.location.href = "index.html";
      }
    } else {
      alert(result.error);
    }
  });
  