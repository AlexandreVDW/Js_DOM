/*
let bruxelleDate = Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels' });

// Specify the target time zone
const targetTimeZoneAnch = 'America/Anchorage';
const targetTimeZoneReyk = 'Atlantic/Reykjavik';
const saintPetersburgTimeZone = 'Europe/Moscow';


// Create a new Date object with the current time in the specified time zone
const anchorageDate = new Date().toLocaleString('en-US', { timeZone: targetTimeZoneAnch });
const ReykjavikDate = new Date().toLocaleString('en-US', { timeZone: targetTimeZoneReyk });
const saintPetersburgDate = new Date().toLocaleString('en-US', { timeZone: saintPetersburgTimeZone });

document.getElementById('p1').innerHTML = "In bruxelles is " + bruxelleDate;
document.getElementById('p2').innerHTML = "In Anchorage is " + anchorageDate;
document.getElementById('p3').innerHTML = "In Reykjavik is " + ReykjavikDate;
document.getElementById('p4').innerHTML = "In Saint Petersburg is " + saintPetersburgDate;
*/

// Récupérez la date actuelle pour Bruxelles
const brusselsTimeZone = 'Europe/Brussels';
const brusselsDate = new Date().toLocaleString('en-US', { timeZone: brusselsTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false  });

// Récupérez la date actuelle pour Anchorage
const anchorageTimeZone = 'America/Anchorage';
const anchorageDate = new Date().toLocaleString('en-US', { timeZone: anchorageTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Récupérez la date actuelle pour Reykjavik
const reykjavikTimeZone = 'Atlantic/Reykjavik';
const reykjavikDate = new Date().toLocaleString('en-US', { timeZone: reykjavikTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Récupérez la date actuelle pour Saint-Pétersbourg
const saintPetersburgTimeZone = 'Europe/Moscow';
const saintPetersburgDate = new Date().toLocaleString('en-US', { timeZone: saintPetersburgTimeZone, year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

// Affichez les heures dans le format souhaité
document.getElementById('p1').innerHTML = "In Brussels is " + brusselsDate;
document.getElementById('p2').innerHTML = "In Anchorage is " + anchorageDate;
document.getElementById('p3').innerHTML = "In Reykjavik is " + reykjavikDate;
document.getElementById('p4').innerHTML = "In Saint Petersburg is " + saintPetersburgDate;

