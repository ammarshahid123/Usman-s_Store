// **Swiper Sliders Initialization**
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("select-container");
    if (!container) {
        console.error("Container with id 'select-container' not found.");
        return;
    } else {
        console.log("Container found:", container);
    }

    
    let items = container.querySelectorAll("ul > li");
    if (items.length === 0) {
        console.error("No list items found in the container.");
        return;
    } else {
        console.log("List items found:", items);
    }

    let selectedItem = items[0];
    console.log("Initial selected item:", selectedItem);

    function onSelect(item) {
        console.log("Item clicked:", item);
        selectedItem.innerHTML = item.innerHTML;
        selectedItem.setAttribute("lang-selection", item.getAttribute("lang-selection"));
        selectedItem.setAttribute("tooltip", item.getAttribute("tooltip"));
        console.log("Updated selected item:", selectedItem);
        hideSelected();
        item.style.display = "block";
        item.style.opacity = "1";
    }

    function hideSelected() {
        let selectedLangCode = selectedItem.getAttribute("lang-selection");
        console.log("Hiding items with lang-selection:", selectedLangCode);
        items.forEach((item) => {
            if (item.getAttribute("lang-selection") === selectedLangCode && item !== selectedItem) {
                console.log("Hiding item:", item);
                item.style.opacity = "0";
                setTimeout(() => (item.style.display = "none"), 200);
            } else {
                item.style.opacity = "1";
                item.style.display = "";
            }
        });
    }

    items.forEach((item, index) => {
        if (index !== 0) {
            console.log("Attaching click event to item:", item);
            item.addEventListener("click", function () {
                onSelect(item);
            });
        }
    });

    console.log("Initial setup: hiding selected item.");
    hideSelected();
});

// **Swiper Slider Initialization for Sale Slider**
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".sale-slider", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// **Swiper Slider Initialization for Vertical Banner**
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.banner-vertical-slider', {
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

// **Preloader**
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 4000); // 4 seconds delay
});

// **Dropdown Toggle for Profile**
function toggleDropdown() {
    var dropdown = document.querySelector('.drop-profile .drop-profile-content');
    dropdown.classList.toggle('showed');
}

window.onclick = function (event) {
    if (!event.target.matches('.drop-profile img') && !event.target.matches('.drop-profile i')) {
        var dropdowns = document.getElementsByClassName("drop-profile-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showed')) {
                openDropdown.classList.remove('showed');
            }
        }
    }
};

// **Modal Functionality**
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("page-modal");
    const closeModalButton = document.getElementById("close-modal-button");

    // Function to show the modal (can be called anywhere, e.g., on page load or on some event)
    function showModal() {
        modal.style.display = "block";
    }

    // Show the modal on page load (uncomment if needed)
    showModal();  // You can remove this if modal show is based on a specific event like button click

    // Close the modal when clicking the close button
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });
});

// **Notification Dropdown**
function toggleDropdownnoti() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

function openTabnoti(evt, tabName) {
    var tabContent = document.getElementsByClassName("tab-content-noti");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"; // Hide all tab contents
    }

    var tabLinks = document.getElementsByClassName("tab-link-noti");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active"); // Remove active state
    }

    document.getElementById(tabName).style.display = "block"; // Show clicked tab content
    evt.currentTarget.classList.add("active"); // Set active state for clicked tab
}

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
