// Toggle Content Visibility
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});