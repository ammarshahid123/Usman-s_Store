function toggleDropdown() {
    var dropdown = document.querySelector('.drop-profile .drop-profile-content');
    dropdown.classList.toggle('showed');
  }
  
  // Optional: Close dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.drop-profile img') && !event.target.matches('.drop-profile i')) {
      var dropdowns = document.getElementsByClassName("drop-profile-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showed')) {
          openDropdown.classList.remove('showed');
        }
      }
    }
  }
  