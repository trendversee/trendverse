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
// Search Box Elements
const searchInput = document.querySelector('.search-box');
const exploreBtn = document.querySelector('.hero button');
const articles = document.querySelectorAll('.article');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        const description = article.querySelector('p').innerText.toLowerCase();
        
        // Agar title ya description mein search term match hota hai, toh dikhao, nahi toh chhupa do
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}

// Button click par search chalega
exploreBtn.addEventListener('click', performSearch);

// Keyboard par Enter hit karne par bhi search chalega
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
});
