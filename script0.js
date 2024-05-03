/* document.addEventListener('DOMContentLoaded', function() {
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
}); */

/* document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var fullContent = expandableContent.querySelector('.full-content');
            expandableContent.classList.toggle('expanded');
            fullContent.style.display = expandableContent.classList.contains('expanded') ? 'block' : 'none';
            var text = this.innerText === 'Show more' ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
}); */


/* document.addEventListener('DOMContentLoaded', function() {
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
}); */


/* document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            var expandableContent = this.closest('.expandable-content');
            var defaultContent = expandableContent.querySelector('.default-content');
            var fullContent = expandableContent.querySelector('.full-content');
            
            expandableContent.classList.toggle('expanded');
            fullContent.style.display = expandableContent.classList.contains('expanded') ? 'block' : 'none';
            defaultContent.style.display = expandableContent.classList.contains('expanded') ? 'none' : 'block';
            var text = this.innerText === 'Show more' ? 'Show less' : 'Show more';
            this.innerText = text;
        });
    });
}); */

/* document.addEventListener('DOMContentLoaded', function() {
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
}); */


/* It seems like there might be a logical issue in the code that's preventing the "Show more" button from 
working after clicking "Show less". 
Let's adjust the JavaScript code to ensure that both buttons work correctly. Here's the updated code: */

/* document.addEventListener('DOMContentLoaded', function() {
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
}); */


/* It sounds like there might be a small issue with the logic for showing and hiding the "Show less" button. 
Let's adjust the JavaScript code to ensure that the "Show less" button is 
displayed when the content is expanded and hidden when the content is collapsed. Here's the updated code: */

/* document.addEventListener('DOMContentLoaded', function() {
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
});  */

/* document.addEventListener('DOMContentLoaded', function() {
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
            
            var showLessButton = expandableContent.querySelector('.show-less-button');
            if (showLessButton) {
                showLessButton.style.display = isExpanded ? 'block' : 'none';
            }
        });
    });
});  */

/* document.addEventListener('DOMContentLoaded', function() {
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
            
            var showLessButton = expandableContent.querySelector('.show-less-button');
            if (showLessButton) {
                showLessButton.style.display = isExpanded ? 'block' : 'none';
            }
        });
    });
}); */

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
            
            var showLessButton = expandableContent.querySelector('.show-less-button');
            if (showLessButton) {
                showLessButton.style.display = isExpanded ? 'block' : 'none';
            }
        });
    });
});




