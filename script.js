const produtos = []; // <-- Move para fora do listener

document.getElementById('produtoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const categoria = event.target.categoria.value.trim(); // trim para evitar espaços extras
    const resultadoDiv = document.getElementById('resultado');
    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value); // Captura o preço real
    const listaProdutos = document.getElementById('listaProdutos');
    const mensagemErro = document.getElementById('mensagemErro');

    if (preco <= 0) {
        console.log("ERRO")
        mensagemErro.innerHTML = "Preço precisa ser maior que 0!"
        return;
    }

    resultadoDiv.innerHTML = '';

    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    let descricao, categoriaproduto;

    switch (categoria) {
        case 'tecnologia':
            descricao = 'Criatividade, inovação e liberdade.';
            categoriaproduto = "Tecnologia";
            break;
        case 'alimentos':
            descricao = 'Experiências, sabores e sensações.';
            categoriaproduto = "Alimentos";
            break;
        case 'brinquedos':
            descricao = 'Diversão, alegria e felicidade.';
            categoriaproduto = "Brinquedos";
            break;
        default:
            descricao = 'Por favor, selecione uma categoria válida.';
            categoriaproduto = "indefinido";
    }

    const produto = {
        nome,
        preco,
        categoria: categoriaproduto
    };

    profileCard.innerHTML = `<h2>${nome}</h2><p>${descricao}</p><p>R$ ${preco.toFixed(2)}</p>`;

    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Destacar';

    toggleButton.addEventListener('click', function () {
        profileCard.classList.toggle('highlight');
    });

    profileCard.append(toggleButton);
    resultadoDiv.append(profileCard);

    produtos.push(produto); // Adiciona ao array correto
    atualizarLista();
    document.getElementById('produtoForm').reset();

    function atualizarLista() {
        listaProdutos.innerHTML = '';
        produtos.forEach((produto) => {
            const li = document.createElement('li')
            if (produto.categoria === 'Alimentos') {
                li.classList.toggle('highlight');
            }
            if (produto.categoria === 'Tecnologia') {
                li.classList.toggle('boldtext');
            }
            li.textContent = `${produto.nome} — R$ ${produto.preco.toFixed(2)} — Categoria: ${produto.categoria}`;
            listaProdutos.appendChild(li);

        });
    }
});
