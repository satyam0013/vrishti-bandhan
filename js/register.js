document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const res = await fetch('https://vrishti-backend.onrender.com/api/wastes', {
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
    alert(result.message || result.error);
  });