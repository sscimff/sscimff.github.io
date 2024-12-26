// Get modal element and close button
var modal = document.getElementById("projectModal");
var span = document.getElementsByClassName("close")[0];

// Get all portfolio links
var portfolioLinks = document.querySelectorAll('.isotope-overlay a');

// Add event listener to all portfolio links
portfolioLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var projectName = link.getAttribute("data-project");

        // Set modal content based on the clicked link
        document.getElementById("modalTitle").textContent = projectName;
        document.getElementById("modalDescription").textContent = "Description of " + projectName + " goes here.";

        // Show modal
        modal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
