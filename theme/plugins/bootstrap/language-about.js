const aboutLanguage = document.getElementById('pick-lang-about');

aboutLanguage.addEventListener('change', function () {
    if (aboutLanguage.value === 'en') {
        window.location.href = "./about-english.html";
    } else if (aboutLanguage.value === 'pt') {
        window.location.href = "./about.html";
    }
});