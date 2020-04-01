function buscar() {
    let usuario = document.querySelector('input#user').value

    if (usuario.length != 0) {
        axios.get('https://api.github.com/users/' + usuario)
            .then(function (response) {
                renderResponse(response)
                userRepos()
            })
            .catch(function (error) {
                console.error('Erro na requesição. Usuário não encontrado')
                alert('Erro na requesição. Usuário não encontrado')
            })
    } else {
        alert('[ERROR] Campo usuário vazio, preencha-o')
        console.error('Input user Vazio')
    }
}

function renderResponse(response) {
    let tr = document.getElementById('response')
    tr.innerHTML = ''

    let id = document.createElement('td')
    let user = document.createElement('td')
    let avatar = document.createElement('td')
    let perfil = document.createElement('td')
    let name = document.createElement('td')
    let company = document.createElement('td')
    let blog = document.createElement('td')
    let localization = document.createElement('td')
    let email = document.createElement('td')
    let bio = document.createElement('td')
    let repositories = document.createElement('td')
    let followers = document.createElement('td')

    id.innerText = response.data.id
    user.innerText = response.data.login
    avatar.innerText = response.data.avatar_url
    perfil.innerText = response.data.html_url
    name.innerText = response.data.name
    company.innerText = response.data.company
    blog.innerText = response.data.blog
    localization.innerText = response.data.localization
    email.innerText = response.data.email
    bio.innerText = response.data.bio
    repositories.innerText = response.data.public_repos
    followers.innerText = response.data.followers

    tr.appendChild(id)
    tr.appendChild(user)
    tr.appendChild(avatar)
    tr.appendChild(perfil)
    tr.appendChild(name)
    tr.appendChild(company)
    tr.appendChild(blog)
    tr.appendChild(localization)
    tr.appendChild(email)
    tr.appendChild(bio)
    tr.appendChild(repositories)
    tr.appendChild(followers)
}

function userRepos() {
    let usuario = document.querySelector('input#user').value
    if (usuario.length != 0) {
        axios.get('https://api.github.com/users/' + usuario + '/repos')
            .then(function (response) {
                //Função para renderizar dados no html
                renderlistRepos(response.data)
            })
            .catch(function (error) {
                console.error('Erro na requesição. Reposiótio/os não encontrado/os' + error)
                alert('Erro na requesição. Reposiótio/os não encontrado/os')
            })
    } else {
        alert('[ERROR] Campo usuário vazio, preencha-o')
        console.error('Input user Vazio')
    }
}

function renderlistRepos(response) {
    let reposList = document.getElementById('reposlist')
    reposList.innerHTML = ''

    for (repos of response) {
        let li = document.createElement('li')
        li.innerText = repos.name
        reposList.appendChild(li)
    }
}