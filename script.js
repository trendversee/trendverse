const search = document.querySelector('input[type="text"]');
const cards = document.querySelectorAll(".news-card");

search.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
