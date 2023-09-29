const homeLanguage = document.getElementById('pick-lang-home');

homeLanguage.addEventListener('change', function () {
    if (homeLanguage.value === 'en') {
        window.location.href = "./home-english.html";
    } else if (homeLanguage.value === 'pt') {
        window.location.href = "./index.html";
    }
});