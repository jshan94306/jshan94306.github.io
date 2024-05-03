document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var defaultContent = expandableContent.querySelector('.default-content');
            var fullContent = expandableContent.querySelector('.full-content');
            
            var isExpanded = expandableContent.classList.toggle('expanded');
            fullContent.style.display = isExpanded ? 'block' : 'none';
            defaultContent.style.display = isExpanded ? 'none' : 'block';
            
            var text = isExpanded ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
});

/*  document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var defaultContent = expandableContent.querySelector('.default-content');
            var fullContent = expandableContent.querySelector('.full-content');
            var isExpanded = expandableContent.classList.toggle('expanded');
            
            fullContent.style.display = isExpanded ? 'block' : 'none';
            defaultContent.style.display = isExpanded ? 'none' : 'block';
            
            var text = isExpanded ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
});   */




