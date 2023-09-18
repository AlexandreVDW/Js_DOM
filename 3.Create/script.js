/*Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
    // Array of learner names
        let learners = ["Elodie","Mathias","Lucas","Rosalie","Lidwine","Stephane","Tim","Virginie","Justine_L","Carole","Thomas","Antoine","Kimi","Valentin","Elisabeth","Pierre","Justin","Robin","Layla","Alexandre_Vens","Alexandre_VDW","Bastien"];

    // Function to generate a random background color
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

    // Get the <article> element
        let article = document.querySelector('article');

    // Loop through the array of learner names
        learners.forEach(function(learner) {
            // Create a new <section> element
                let section = document.createElement('section');
            
            // Generate a random background color
                let randomColor = getRandomColor();
            
            // Set the background color of the <section> element
                section.style.backgroundColor = randomColor;
            
            // Create a <p> element for the learner's name
                let paragraph = document.createElement('p');
            
            // Set the text content of the <p> element to the learner's name
                paragraph.textContent = learner;
            
            // Append the <p> element to the <section> element
                section.appendChild(paragraph);
            
            // Append the <section> element to the <article> element
                article.appendChild(section);
            });
*/

/*If the background is dark the text should be white, if the background is light the text should be black
    // Array of learner names
         let learners = ["Elodie","Mathias","Lucas","Rosalie","Lidwine","Stephane","Tim","Virginie","Justine_L","Carole","Thomas","Antoine","Kimi","Valentin","Elisabeth","Pierre","Justin","Robin","Layla","Alexandre_Vens","Alexandre_VDW","Bastien"];

    // Function to generate a random RGB color
        function getRandomColor() {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            return `rgb(${red},${green},${blue})`;
        }

    // Function to determine text color based on background brightness
        function getTextColor(backgroundColor) {
            let rgb = backgroundColor.match(/\d+/g);
            let r = parseInt(rgb[0]);
            let g = parseInt(rgb[1]);
            let b = parseInt(rgb[2]);
        
        // Calculate the relative luminance (brightness) of the background color
            let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // Use white text on dark backgrounds, and black text on light backgrounds
            return luminance > 0.5 ? 'black' : 'white';
        }

    // Get the <article> element
        let article = document.querySelector('article');

    // Loop through the array of learner names
        learners.forEach(function(learner) {
            // Create a new <section> element
                let section = document.createElement('section');
            
            // Generate a random background color in RGB format
                let randomColor = getRandomColor();
            
            // Set the background color of the <section> element
                section.style.backgroundColor = randomColor;
            
            // Determine the text color based on the background color
                let textColor = getTextColor(randomColor);
            
            // Create a <p> element for the learner's name
                let paragraph = document.createElement('p');
            
            // Set the text content of the <p> element to the learner's name
                paragraph.textContent = learner;
            
            // Set the text color of the <p> element
                paragraph.style.color = textColor;
            
            // Append the <p> element to the <section> element
             section.appendChild(paragraph);
            
            // Append the <section> element to the <article> element
                article.appendChild(section);
            });
*/
//Find a way so that everytime you load the page the order of the elements changes! 
// Array of learner names
    let learners = ["Elodie","Mathias","Lucas","Rosalie","Lidwine","Stephane","Tim","Virginie","Justine_L","Carole","Thomas","Antoine","Kimi","Valentin","Elisabeth","Pierre","Justin","Robin","Layla","Alexandre_Vens","Alexandre_VDW","Bastien"];

// Function to generate a random RGB color
    function getRandomColor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }

// Function to determine text color based on background brightness
function getTextColor(backgroundColor) {
    let rgb = backgroundColor.match(/\d+/g);
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);
    
    // Calculate the relative luminance (brightness) of the background color
        let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Use white text on dark backgrounds, and black text on light backgrounds
        return luminance > 0.5 ? 'black' : 'white';
    }

// Shuffle the order of learners randomly
    learners.sort(() => Math.random() - 0.5);

// Get the <article> element
    let article = document.querySelector('article');

// Loop through the array of learner names
    learners.forEach(function(learner) {
        // Create a new <section> element
        let section = document.createElement('section');
        
        // Generate a random background color in RGB format
        let randomColor = getRandomColor();
        
        // Set the background color of the <section> element
        section.style.backgroundColor = randomColor;
        
        // Determine the text color based on the background color
        let textColor = getTextColor(randomColor);
        
        // Create a <p> element for the learner's name
        let paragraph = document.createElement('p');
        
        // Set the text content of the <p> element to the learner's name
        paragraph.textContent = learner;
        
        // Set the text color of the <p> element
        paragraph.style.color = textColor;
        
        // Append the <p> element to the <section> element
        section.appendChild(paragraph);
        
        // Append the <section> element to the <article> element
        article.appendChild(section);
    });


/* wrong way, attention c'est de la merde :D
// Sélectionnez le corps de la page
const body = document.body;

// Fonction pour réorganiser tous les éléments dans le corps
function shuffleElements() {
  // Créez un tableau avec un ordre aléatoire des enfants
  const children = Array.from(body.children);
  const shuffledChildren = [...children].sort(() => Math.random() - 0.5);

  // Supprimez tous les enfants du corps
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  // Ajoutez les enfants réorganisés au corps
  shuffledChildren.forEach(child => {
    body.appendChild(child);
  });
}

// Appelez la fonction pour réorganiser les éléments au chargement de la page
shuffleElements();
*/
