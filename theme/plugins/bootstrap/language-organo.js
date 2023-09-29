const organoLanguage = document.getElementById('pick-lang-organo');

organoLanguage.addEventListener('change', function () {
    if (organoLanguage.value === 'en') {
        window.location.href = "./organo-english.html";
    } else if (organoLanguage.value === 'pt') {
        window.location.href = "./organo.html";
    }
});