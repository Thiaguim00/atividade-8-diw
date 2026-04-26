
// CATÁLOGO (JSON)

const catalogo = [
    {
        id: 1,
        titulo: "Batman: O Cavaleiro das Trevas",
        tipo: "filme",
        ano: 2008,
        generos: ["ação", "drama"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        tipo: "filme",
        ano: 2001,
        generos: ["aventura", "fantasia"],
        nota: 9,
        assistido: true
    },
    {
        id: 3,
        titulo: "Star Wars: Episódio V - O Império Contra-Ataca",
        tipo: "filme",
        ano: 1980,
        generos: ["ficção", "aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 4,
        titulo: "De Volta para o Futuro",
        tipo: "filme",
        ano: 1985,
        generos: ["ficção", "comédia"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 5,
        titulo: "WALL·E",
        tipo: "filme",
        ano: 2008,
        generos: ["animação", "ficção"],
        nota: 7,
        assistido: false
    },
    {
        id: 6,
        titulo: "Duna: Parte 2",
        tipo: "filme",
        ano: 2024,
        generos: ["ficção", "aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 7,
        titulo: "Vingadores: Guerra Infinita",
        tipo: "filme",
        ano: 2018,
        generos: ["ação", "aventura"],
        nota: 9,
        assistido: true
    },
    {
        id: 8,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura"],
        nota: 10,
        assistido: true
    },
    {
        id: 9,
        titulo: "Homem-Aranha: No Aranhaverso",
        tipo: "filme",
        ano: 2018,
        generos: ["animação", "ação"],
        nota: 9,
        assistido: false
    },
    {
        id: 10,
        titulo: "Viva: A Vida é uma Festa",
        tipo: "filme",
        ano: 2017,
        generos: ["animação", "drama"],
        nota: 9,
        assistido: false
    },
    {
        id: 11,
        titulo: "Your Name",
        tipo: "filme",
        ano: 2016,
        generos: ["romance", "animação"],
        nota: 9,
        assistido: false
    },
    {
        id: 12,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 10,
        assistido: true
    },
    {
        id: 13,
        titulo: "Peaky Blinders",
        tipo: "serie",
        ano: 2013,
        generos: ["drama", "crime"],
        nota: 9,
        assistido: true
    },
    {
        id: 14,
        titulo: "Game of Thrones",
        tipo: "serie",
        ano: 2011,
        generos: ["fantasia", "drama"],
        nota: 9,
        assistido: false
    },
    {
        id: 15,
        titulo: "Black Mirror",
        tipo: "serie",
        ano: 2011,
        generos: ["ficção", "drama"],
        nota: 9,
        assistido: true
    },
    {
        id: 16,
        titulo: "Dr. House",
        tipo: "serie",
        ano: 2004,
        generos: ["drama", "medicina"],
        nota: 9,
        assistido: false
    }
];

// TESTE INICIAL
console.log(catalogo);

// ACESSOS

console.log("Primeiro título:", catalogo[0].titulo);
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero do terceiro:", catalogo[2].generos[1]);
} else {
    console.log("Não possui segundo gênero");
}


// ITERATORS


// A) forEach
catalogo.forEach(item => {
    console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Não assistidos:", naoAssistidos.length);

// D) find
const melhorItem = catalogo.find(item => item.nota >= 9);

if (melhorItem) {
    console.log("Primeiro com nota alta:", melhorItem.titulo, melhorItem.nota);
} else {
    console.log("Nenhum com nota >= 9");
}

// E) reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

// F) some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Tem filme antigo:", temAntigo);
console.log("Todos têm gênero:", todosTemGenero);

// =========================
// SAÍDA NA TELA
// =========================
const output = document.getElementById("output");

const filmes = catalogo.length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

output.innerHTML = `
<p>Total de itens: ${catalogo.length}</p>
<p>Filmes: ${filmes}</p>
<p>Não assistidos: ${naoAssistidos.length}</p>
<p>Média geral: ${mediaGeral.toFixed(2)}</p>

<h3>Top 3:</h3>
<ul>
    ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
</ul>
`;