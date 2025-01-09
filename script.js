// Czas na przejście do ekranu aktualizacji
setTimeout(function() {
    document.getElementById('browser-screen').style.display = 'none';
    document.getElementById('updating-screen').style.display = 'flex';
    startUpdate();
}, 3000); // 3 sekundy na "Custom Browser" ekran

// Funkcja symulująca aktualizację
function startUpdate() {
    let progress = 0;
    let updateStatus = document.getElementById('update-status');
    let progressBar = document.getElementById('progress');

    let updateInterval = setInterval(function() {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = progress + '%';
            updateStatus.innerText = `Installing App ${Math.floor(progress / 10) + 1}...`;
        } else {
            progress = 0; // Resetuj postęp, by symulować nieskończoną aktualizację
            updateStatus.innerText = `Installing App ${Math.floor(progress / 10) + 1}...`;
        }
    }, 100);
}

// Funkcja detekcji przytrzymania ekranu
let holdStart = null;

document.body.addEventListener('touchstart', function() {
    holdStart = Date.now();
});

document.body.addEventListener('touchend', function() {
    if (holdStart && Date.now() - holdStart > 3000) { // Przytrzymanie ekranu przez 3 sekundy
        alert('Prank zakończony! Zamknij stronę.');
        window.close(); // Próba zamknięcia strony
    }
});
