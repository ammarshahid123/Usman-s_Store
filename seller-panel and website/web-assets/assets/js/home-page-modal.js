
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

