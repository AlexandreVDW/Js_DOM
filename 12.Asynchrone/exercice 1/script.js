document.getElementById("fetchButton").addEventListener("click", () => {
	fetch("your-json-file.json")
		.then((response) => response.json()) // Parsez la réponse JSON
		.then((data) => {
			const body = document.body;

			// Parcourez le tableau d'objets JSON
			data.forEach((hero) => {
				// Créez un élément <ul> pour chaque objet
				const ul = document.createElement("ul");

				// Créez des éléments <li> pour les propriétés "nom", "univers" et "roles"
				const liNom = document.createElement("li");
				liNom.textContent = "Nom: " + hero.nom;

				const liUnivers = document.createElement("li");
				liUnivers.textContent = "Univers: " + hero.univers;

				const liRoles = document.createElement("li");
				liRoles.textContent = "Rôles: " + hero.roles;

				// Ajoutez les éléments <li> à l'élément <ul>
				ul.appendChild(liNom);
				ul.appendChild(liUnivers);
				ul.appendChild(liRoles);

				// Ajoutez l'élément <ul> à la page
				body.appendChild(ul);
			});
		})
		.catch((error) => {
			console.log("Une erreur s'est produite !", error);
		});
});
