document.querySelectorAll('.accordion-header').forEach(header => {  
    header.addEventListener('click', function() {  
        const content = this.nextElementSibling;  

        // Toggle the display of the content  
        if (content.style.display === "block") {  
            content.style.display = "none";  
        } else {  
            // Hide other open content  
            document.querySelectorAll('.accordion-content').forEach(item => {  
                item.style.display = "none";  
            });  
            content.style.display = "block";  
        }  
    });  
});