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
                                <h4 id="tittle" class="tittle">Repository Name: ${item.name}</h4>
                                <span class="date-create">Creation date: ${Intl.DateTimeFormat('en').format(new Date(item.created_at))}</span>
                            </div>
                        </div>
                    </a>
                `
                repositories.appendChild(project);
            })
        });
}

getApiGitHub();