// Select the container and all language list items
const langContainer = document.getElementById("select-container");
const langItems = langContainer.querySelectorAll("li");

// Assign numbers to each language dynamically
langItems.forEach((item, index) => {
    item.dataset.number = index + 1; // Add a custom attribute 'data-number' for numbering
    console.log(`Language: ${item.getAttribute('tooltip')}, Number: ${index + 1}`);
});

// Add click event listener to each language item
langItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove the clicked item from its current position
        langContainer.querySelector("ul").removeChild(item);

        // Add the clicked item as the first child in the list
        langContainer.querySelector("ul").prepend(item);
    });
});
