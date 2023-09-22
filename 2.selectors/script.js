//Add a title attribute to every element that has the important class, stating This is an important item. 
    // Select all elements with the "important" class
        /*
        let importantElements = document.querySelectorAll('.important');
        */
    // Iterate through each element and set the title attribute
        /*
        importantElements.forEach(function(element) {
        element.setAttribute('title', 'This is an important item');
        });
        */

//Select all the img tags and loop through them. If they have no important class, turn their display property to none
    // Select all img tags
        /*
        let imgTags = document.querySelectorAll('img');
        */
    // Loop through each img tag
        /*
        imgTags.forEach(function(img) {
            // Check if the img tag does not have the "important" class
                if (!img.classList.contains('important')) {
                    // Set the display property to "none" for img tags without the "important" class
                    img.style.display = 'none';
                }
            });
        */

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
    // Select all paragraph elements
        /*
        let paragraphs = document.querySelectorAll('p');
        */
    // Loop through each paragraph
        /*
        paragraphs.forEach(function(paragraph) {
            // Get the paragraph's content
                let content = paragraph.textContent;

            // Check if the paragraph has a class
                if (paragraph.classList.length > 0) {
                    let className = paragraph.className;
                    console.log(`Content: ${content}, Class: ${className}`);
                } else {
                    console.log(`Content: ${content}`);
                }
            });
        */

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
    // Select all paragraph elements
        /*
        let paragraphs = document.querySelectorAll('p');
        */
    // Function to generate a random color
        /*
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        */
    // Loop through each paragraph
        /*
        paragraphs.forEach(function(paragraph) {
        */
        // Check if the paragraph has a class
        /*
        if (paragraph.classList.length === 0) {
            // Generate a random text color
            let randomColor = getRandomColor();
            
            // Apply the random color to the paragraph
            paragraph.style.color = randomColor;
            }
        });
        */

