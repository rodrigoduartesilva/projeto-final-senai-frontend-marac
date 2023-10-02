const inputSearch = document.getElementById('input-search');
const containerGitHub = document.querySelector('#content-main ul');

inputSearch.addEventListener('keyup', () => {
    let valorDigitado = inputSearch.value.toLowerCase();
    let repName = containerGitHub.getElementsByTagName('li');

    if (valorDigitado === 1) {
        return;
    }


    for (let posicao in repName) {
        let conteudo = repName[posicao].innerHTML.toLowerCase();

        if (true === isNaN(posicao)) {
            continue;
        }

        if (true === conteudo.includes(valorDigitado)) {
            repName[posicao].style.display = '';
        } else {
            repName[posicao].style.display = 'none';
        }
    }
});