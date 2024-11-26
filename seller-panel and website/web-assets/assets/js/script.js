// **Swiper Sliders Initialization**
document.addEventListener("DOMContentLoaded", function () {
    // Find all select-container elements across the page
    const selectContainers = document.querySelectorAll("#select-container");
  
    selectContainers.forEach((selectContainer) => {
      const languageItems = selectContainer.querySelectorAll("li");
  
      // Get the default image (first child)
      const defaultImage = selectContainer.querySelector("li[lang-selection='default-globe'] img");
  
      languageItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Remove "active" class from all items
          languageItems.forEach((lang) => lang.classList.remove("active"));
  
          // Add "active" class to the clicked item
          item.classList.add("active");
  
          // Get the image of the selected language
          const selectedImage = item.querySelector("img").src;
  
          // Update the default image to the selected image
          defaultImage.src = selectedImage;
  
          // Log the selected language
          const selectedLanguage = item.getAttribute("lang-selection");
          console.log(`Language selected: ${selectedLanguage}`);
        });
      });
    });
  });
  
  
  

// **Swiper Slider Initialization for Sale Slider**
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-products", {
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
// **Notification Dropdown**

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
