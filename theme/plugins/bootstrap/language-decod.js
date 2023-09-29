const decodLanguage = document.getElementById('pick-lang-decod');

decodLanguage.addEventListener('change', function () {
    if (decodLanguage.value === 'en') {
        window.location.href = "./decod-texto-english.html";
    } else if (decodLanguage.value === 'pt') {
        window.location.href = "./decod-texto.html";
    }
});