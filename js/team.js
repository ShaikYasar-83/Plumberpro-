// Simple interaction: show alert when clicking on team member
document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h5").textContent}`);
    });
  });
  