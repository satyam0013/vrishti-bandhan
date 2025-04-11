// Example: submit form with fetch
document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const res = await fetch('https://vrishti-backend.onrender.com/api/wastes', {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  alert(data.message || data.error);
});
