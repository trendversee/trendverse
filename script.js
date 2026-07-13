// TrendVerse V4

console.log("TrendVerse Loaded Successfully");

// Search UI
const searchBox = document.querySelector(".search-box");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
      if (card.innerText.toLowerCase().includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Explore Button
const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    document.querySelector(".categories").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Newsletter
const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const email = document.querySelector(".newsletter input").value;

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    alert("Thanks for subscribing to TrendVerse!");
  });
}
