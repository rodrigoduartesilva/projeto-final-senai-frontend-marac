const frutaFrutoLanguage = document.getElementById('pick-lang-fruto');

frutaFrutoLanguage.addEventListener('change', function () {
    if (frutaFrutoLanguage.value === 'en') {
        window.location.href = "./fruta-fruto-english.html";
    } else if (frutaFrutoLanguage.value === 'pt') {
        window.location.href = "./fruta-fruto.html";
    }
});