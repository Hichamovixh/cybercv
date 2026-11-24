/* Lien de réservation (page Google Agenda). Vide = les boutons « Réserver » mènent à l'e-mail. */
const BOOKING = 'https://calendar.app.google/GFZdPjMWq6wrtdSu7';
if (BOOKING) document.querySelectorAll('.js-book').forEach(a => { a.href = BOOKING; a.target = '_blank'; a.rel = 'noopener'; });
document.querySelectorAll('.js-y').forEach(e => e.textContent = new Date().getFullYear());
