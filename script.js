document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('book-list');

    // Exemplo de dados de livros
    const books = [
        { title: 'Agile - Desenvolvimento de Software com Entregas Frequentes e Foco no Valor de Negócio', author: 'Casa do Código', cover: 'agiledev.jpg', epub: 'Agile - Desenvolvimento de Software.epub' },
        { title: 'Arquitetura Limpa - O Guia do Artesão para Estrutura e Design de Software', author: 'Robert C. Martin', cover: 'codlimp.jpg', epub: 'Arquitetura Limpa - O Guia do Artesão para Estrutura e Design de Software.epub' },
        { title: 'Construindo API REST com Node JS', author: 'Casa do Código', cover: 'nodejs.jpg', epub: 'Construindo API REST com Node JS.epub' },
        { title: 'Controlando Versões com Git e GitHub', author: 'Casa do Código', cover: 'git.jpg', epub: 'Controlando Versões com Git e GitHub.epub' },
        { title: 'Entendendo Algoritmos - Um Guia Ilustrado para Programadores e Curiosos', author: 'Aditya Bhargava', cover: 'entenalg.jpg', epub: 'Entendendo-Algoritmos-Um-Guia-Ilustrado-Para-Programadores-e-Outros-Curiosos.epub' },
        { title: 'Jenkins - Automatize Tudo sem Complicações', author: 'Casa do Código', cover: 'Jenkins.jpg', epub: 'Jenkins - Automatize Tudo sem Complicações.epub' },
        { title: 'TDD - Desenvolvimento Guiado por Testes', author: 'Ken Beck', cover: 'tddken.jpg', epub: 'TDD - Desenvolvimento Guiado por Testes.epub' },
        { title: 'Test-Driven Development - Teste e Design no Mundo Real', author: 'Casa do Código', cover: 'Test-Driven.jpg', epub: 'Test-Driven Development - Teste e Design no Mundo Real.epub' },
        { title: 'Testes Automatizados de Software - Um Guia Prático', author: 'Casa do Código', cover: 'testeaut.jpg', epub: 'Testes Automatizados de Software - Um Guia Prático.epub' },

    ];

    // Carrega os livros na página
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookImage = document.createElement('img');
        bookImage.src = `images/${book.cover}`;
        bookImage.alt = `${book.title} - ${book.author}`;

        const bookInfo = document.createElement('p');
        bookInfo.textContent = `${book.title} - ${book.author}`;

    // Adiciona um evento de clique à imagem que redireciona para o arquivo EPUB
    bookImage.addEventListener('click', function() {
        window.open(`epubs/${book.epub}`, '_blank');
    });

    bookImage.addEventListener('click', function() {
        window.open(`epubs2/${book.epub}`, '_blank');
    });

    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookInfo);

    bookList.appendChild(bookDiv);
    });
});
