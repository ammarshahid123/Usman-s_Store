
// **Load More Functionality**
const productCards = document.querySelectorAll('.Product-card');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loader = document.querySelector('.loader');

let visibleCards = 25; // Initially visible cards

function loadMoreCards() {
    loader.style.display = 'block'; // Show loader
    setTimeout(() => {
        loader.style.display = 'none'; // Hide loader after 2 seconds
        for (let i = visibleCards; i < visibleCards + 25 && i < productCards.length; i++) {
            productCards[i].style.display = 'inline-block'; // Show next 25 cards
        }
        visibleCards += 25;
        if (visibleCards >= productCards.length) {
            loadMoreBtn.style.display = 'none'; // Hide button if all cards are visible
        }
    }, 2000); // Simulate loading time
}

// Show the initial 25 cards
for (let i = 0; i < visibleCards; i++) {
    productCards[i].style.display = 'inline-block';
}
// Attach event listener to Load More button
loadMoreBtn.addEventListener('click', loadMoreCards);