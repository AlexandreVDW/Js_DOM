//Display the document title in the console
    /*
    let TitreDuDoc = document.title;
    console.log (TitreDuDoc);
    */
//Change the document title to Modifying the DOM
    /*
    document.title = "Modifying the DOM";
    */
//Change the background color of the body to hot pink (#FF69B4).
    /*
    document.body.style.backgroundColor = "#FF69B4";
    */
//If that worked, try with a random color as an extra challenge.(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

    // Générer trois nombres aléatoires entre 0 et 255 pour les composantes RVB*/
        /*
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        */
    // Construire la chaîne de couleur au format rgb()
        /*
        let randomColor = `rgb(${red}, ${green}, ${blue})`;
        */
    // Changer la couleur de fond du corps avec la couleur générée
        /*
        document.body.style.backgroundColor = randomColor;
        */
//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
    // Get the second child element of the <body>
        /*
        let secondChild = document.body.children[1];
        */
    // Loop through and display all children elements of the second child
        /*
        for (let child of secondChild.children) {
            console.log(child);
        }
        */