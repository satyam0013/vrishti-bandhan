// Example: submit form with fetch
document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const res = await fetch("http://localhost:3000/api/waste", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  alert(data.message || data.error);
});
