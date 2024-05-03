document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            expandableContent.classList.toggle('expanded');
            var text = this.innerText === 'Show more' ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
});
