document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.github.com/users/lkysztyl';

    const showData = (result) => {
        for (const campo in result) {
            const elemento = document.querySelector("#" + campo);
            if (elemento && result[campo]) {
                console.log(elemento);
                switch (campo) {
                    case 'login':
                        elemento.textContent = result[campo];
                        break;
                    case 'name':
                        elemento.textContent = result[campo];
                        break;
                    case 'public_repos':
                        elemento.textContent = result[campo];
                        break;
                    case 'followers':
                        elemento.textContent = result[campo];
                        break;
                    case 'following':
                        elemento.textContent = result[campo];
                        break;
                    case 'avatar_url':
                        elemento.src = result[campo];
                        break;
                    case 'html_url':
                        elemento.href = result[campo];
                        break;
                    default:
                        alert('Unknown error');
                        break;
                };
                console.log(campo)
            };
        };
    }; 
    
    fetch(apiUrl, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            showData(data);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
});