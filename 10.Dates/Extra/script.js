const joursSemaine = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const moisNoms = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

function updateClock() {
    const now = new Date();
    
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const jourSemaine = joursSemaine[now.getDay()].toUpperCase();
    const jourMois = now.getDate();
    const mois = moisNoms[now.getMonth()].toUpperCase();
    const annee = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const dayElement = document.querySelector('.day');
    const monthElement = document.querySelector('.month');
    const nbreElement = document.querySelector('.nbre');
    const yearElement = document.querySelector('.years');
    const clockElement = document.querySelector('.clock'); // Sélectionnez l'élément pour l'horloge

    dayElement.textContent = jourSemaine;
    nbreElement.textContent = jourMois;
    monthElement.textContent = mois;
    yearElement.textContent = annee;
    
    // Mettez à jour l'élément HTML pour afficher l'heure, les minutes et les secondes au format "hh:mm:ss"
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Mettez à jour l'horloge initiale
updateClock();

// Actualisez l'horloge chaque seconde
setInterval(updateClock, 1000);
