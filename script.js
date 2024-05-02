


document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var defaultContent = expandableContent.querySelector('.default-content');
            var fullContent = expandableContent.querySelector('.full-content');
            
            if (expandableContent.classList.contains('expanded')) {
                defaultContent.style.display = 'none';
            } else {
                defaultContent.style.display = 'block';
            }

            expandableContent.classList.toggle('expanded');
            fullContent.style.display = expandableContent.classList.contains('expanded') ? 'block' : 'none';
            var text = this.innerText === 'Show more' ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
});
