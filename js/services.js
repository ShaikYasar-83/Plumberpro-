// Highlight service card on click
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
      alert(`You selected: ${card.querySelector("h5").textContent}`);
    });
  });
  