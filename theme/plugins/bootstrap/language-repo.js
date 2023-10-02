const repoLanguage = document.getElementById('pick-lang-repo');

repoLanguage.addEventListener('change', function () {
    if (repoLanguage.value === 'en') {
        window.location.href = "./my-repo-english.html";
    } else if (repoLanguage.value === 'pt') {
        window.location.href = "./my-repo.html";
    }
});