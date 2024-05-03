/* To eliminate the content of the default part when clicking "Show more" to see the expanded content, 
you can simply hide the default content. Here's how you can modify the JavaScript to achieve this. */

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

/* It looks like the issue might be with how the default content is being displayed after clicking "Show less". Let's adjust the JavaScript to ensure that the default content is shown 
when the expandable content is collapsed. Here's the updated JavaScript code */


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
});  */


/* Let's simplify the logic a bit to ensure that the default content is displayed when the expandable content is collapsed. We can directly set the display of the default 
    content to 'block' when the expandable content is not expanded. Here's the updated JavaScript. */

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


/* It sounds like the issue might be with how the "Show less" button is being handled in the JavaScript code. Let's modify the code to ensure that the "Show less" 
button remains visible after expanding the content. Here's the updated JavaScript code: */

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

/* It seems like there might be a logical issue in the code that's preventing the "Show more" button from working after clicking "Show less". 
Let's adjust the JavaScript code to ensure that both buttons work correctly. Here's the updated code. */

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
    });  */
});



