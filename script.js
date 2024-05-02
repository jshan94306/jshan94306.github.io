


document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var fullContent = expandableContent.querySelector('.full-content');
            expandableContent.classList.toggle('expanded');
            fullContent.style.display = expandableContent.classList.contains('expanded') ? 'block' : 'none';
            var text = this.innerText === 'Show More' ? 'Show Less' : 'Show More';
            this.innerText = text;
        });
    });
});
