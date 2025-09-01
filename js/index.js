<script>
  const quoteBtn = document.getElementById('quoteBtn');
  const quotePopup = document.getElementById('quotePopup');
  const closePopup = document.getElementById('closePopup');

  // Prevent default link behavior and show popup
  quoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quotePopup.classList.remove('hidden');
  });

  // Close popup
  closePopup.addEventListener('click', () => {
    quotePopup.classList.add('hidden');
  });
</script>
