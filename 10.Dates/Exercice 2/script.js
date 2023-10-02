let Birthday = new Date('1994-03-03')
let Today = new Date('2023-10-02')

// Calculer les minutes et les jours passés
let minutesPassed = (Today.getTime() - Birthday.getTime()) / (1000 * 60);
let daysPassed = (Today.getTime() - Birthday.getTime()) / (1000 * 60 * 60 * 24);

// Obtenir une référence aux éléments span
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

// Mettre à jour le contenu des span avec les résultats
p1.innerHTML = minutesPassed + ' minutes sont passés depuis que je suis arrivé sur terre';
p2.innerHTML = daysPassed + ' jours sont passés depuis que je suis arrivé sur terre';


/* Calculateur */

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputDate = document.getElementById('inputDate').value;
    const selectedDate = new Date(inputDate);

    if (!isNaN(selectedDate.getTime())) {
        const currentDate = new Date();
        const daysPassed = Math.floor((currentDate - selectedDate) / (1000 * 60 * 60 * 24));
        document.getElementById('result').textContent = `Nombre de jours depuis le ${inputDate}: ${daysPassed} jours`;
    } else {
        document.getElementById('result').textContent = 'Mauvais format de date. Veuillez respecter YYYY-MM-DD.';
    }
});