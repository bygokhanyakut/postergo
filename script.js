// Geri sayım için 10 saniye süre
const countDownDate = new Date().getTime() + 600000000;

// Sayfa her 1 saniyede bir güncellenir
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Geri sayım tamamlandıysa
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Çok Yakında!";
    } else {
        // Geri sayımı hesaplayıp ekrana yazdırma
        const seconds = Math.floor((distance % (1000 * 2000000)) / 1000);
        document.getElementById("countdown").innerHTML = `Kalan Süre: ${seconds} saniye`;
    }
}, 1000);
