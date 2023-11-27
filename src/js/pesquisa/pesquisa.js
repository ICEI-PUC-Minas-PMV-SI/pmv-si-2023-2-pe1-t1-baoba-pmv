document.querySelector('formPesquisa').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.querySelector('[name=q]').value;
    realizarPesquisa(query);
});

function realizarPesquisa(query) {
    // Implemente a chamada à API ou a lógica de filtragem aqui
    // Por exemplo, usar fetch para chamar uma API
    fetch(`http://localhost:3000/search?q=${query}`)
        .then(response => response.json())
        .then(data => exibirResultados(data))
        .catch(error => console.error('Erro na pesquisa:', error));
}

function exibirResultados(resultados) {
    const container = document.getElementById('resultados');
    container.innerHTML = '';

    resultados.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${item.titulo}</h2><p>${item.descricao}</p>`;
        container.appendChild(div);
    });
}