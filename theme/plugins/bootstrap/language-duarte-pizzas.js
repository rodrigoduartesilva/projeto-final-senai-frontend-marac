const duartePizzasLanguage = document.getElementById('pick-lang-pizza');

duartePizzasLanguage.addEventListener('change', function () {
    if (duartePizzasLanguage.value === 'en') {
        window.location.href = "./duarte-pizzas-english.html";
    } else if (duartePizzasLanguage.value === 'pt') {
        window.location.href = "./duarte-pizzas.html";
    }
});