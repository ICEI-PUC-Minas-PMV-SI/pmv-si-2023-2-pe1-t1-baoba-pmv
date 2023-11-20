// Função para realizar a pesquisa
function realizarPesquisa(query) {
    fetch('/search?q=' + encodeURIComponent(query))
        .then(response => response.json())
        .then(resultados => {
            exibirResultados(resultados);
        })
        .catch(error => console.error('Erro na pesquisa:', error));
}

// Função para exibir os resultados da pesquisa
function exibirResultados(resultados) {
    const containerResultados = document.getElementById('searchResults');
    containerResultados.innerHTML = ''; // Limpar resultados antigos

    resultados.forEach(resultado => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${resultado.titulo}</h3><p>${resultado.descricao}</p>`;
        containerResultados.appendChild(div);
    });
}

// Event listener para o botão de pesquisa
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBox').value;
    realizarPesquisa(query);
});
