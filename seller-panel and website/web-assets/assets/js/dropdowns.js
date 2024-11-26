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