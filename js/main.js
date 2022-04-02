fetch('https://swapi.dev/api/people/10', { method: 'GET' }).then(res => {
    res.json().then(res => {
        document.getElementById('avartar-name').innerHTML = res.name
        document.getElementById('c-avatar-info-text-height').innerHTML = res.height / 100
        document.getElementById('c-avatar-info-text-mass').innerHTML = res.mass + 'kg'
        document.getElementById('c-avatar-info-text-haircolor').innerHTML = res.hair_color === 'n/a' ? 'não aplicável' : res.hair_color
        document.getElementById('c-avatar-info-text-gender').innerHTML = generateGender(res.gender)
        
        if (res.films.length) {
            for (const item of res.films) 
                generateList(item, 'filme', ['title'])            
        }

        if (res.vehicles.length) {
            for (const item of res.vehicles) 
                generateList(item, 'vehicles', ['name'])            
        }
    })
})

function generateGender (key) {
    let gender = ''
    switch (key) {
        case 'male':
            gender = 'masculino'
            break
        case 'female':
            gender = 'feminino'
            break
        case 'n/a':
            gender = 'não aplicável'
            break
    }
    return gender
}

function generateList (url, id, params) {
    const elementRoot = document.getElementById(id)
    fetch(url, { method: 'GET' }).then(res => {
        res.json().then(res => {
            const elementli = document.createElement('li')
            elementli.innerHTML = res[params[0]]
            elementli.setAttribute('class', 'c-avatar-list-item')
            elementRoot.appendChild(elementli)
        })
    })
}

generateList()