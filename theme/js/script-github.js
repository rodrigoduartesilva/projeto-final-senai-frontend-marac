const repositories = document.querySelector('#lista-repositorios');

function getApiGitHub() {
    fetch('https://api.github.com/users/rodrigoduartesilva/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map(item => {
                let project = document.createElement('li');
                project.classList.add('lista-item');

                project.innerHTML = `
                    <a id="container-github" href="${item.html_url}" target="_blank">
                        <div class="project">
                            <div class="align">
                                <h4 id="tittle" class="tittle">Nome do Repositório: ${item.name}</h4>
                                <span class="date-create">Criado em: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
                            </div>
                        </div>
                    </a>
                `
                repositories.appendChild(project);
            })
        });
}

getApiGitHub();