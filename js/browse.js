window.onload = async () => {
  const res = await fetch("http://localhost:3000/api/waste");
  const data = await res.json();
  const listings = document.getElementById("listings");
  data.reverse().forEach(w => {
    const card = document.createElement("div");
    card.className = "listing";
    card.innerHTML = `
      <strong>${w.type}</strong> - ${w.quantity}kg @ ${w.location}<br/>
      Contact: ${w.contact}<br/>
      <img src="${w.image}" />
    `;
    listings.appendChild(card);
  });
};
