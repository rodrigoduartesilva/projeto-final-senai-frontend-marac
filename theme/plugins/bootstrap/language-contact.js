const contactLanguage = document.getElementById('pick-lang-contact');

contactLanguage.addEventListener('change', function () {
    if (contactLanguage.value === 'en') {
        window.location.href = "./contact-english.html";
    } else if (contactLanguage.value === 'pt') {
        window.location.href = "./contact.html";
    }
});