
let navigationHistory = [];
let currentScreenRef = null;

let selectedBook = null;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".home, .home-btn, .home-link").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (typeof showScreen === "function" && typeof homeScreen !== "undefined") {
                showScreen(homeScreen);
            }
        });
    });
});

const homeScreen =
document.getElementById("homeScreen");

const loginScreen =
document.getElementById("loginScreen");

const registerScreen =
document.getElementById("registerScreen");

const menuScreen =
document.getElementById("menuScreen");

const btnStart =
document.getElementById("btnStart");

const btnLogin =
document.getElementById("btnLogin");

const btnRegister =
document.getElementById("btnRegister");

const openRegister =
document.getElementById("openRegister");

const greeting =
document.getElementById("userGreeting");

const bookRegisterScreen =
document.getElementById("bookRegisterScreen");

const openBookRegister =
document.getElementById("openBookRegister");

const btnSaveBook =
document.getElementById("btnSaveBook");
const rentBookScreen =
document.getElementById("rentBookScreen");

const openRentBook =
document.getElementById("openRentBook");

const booksList =
document.getElementById("booksList");

const bookSearch =
document.getElementById("bookSearch");

const btnRentBook =
document.getElementById("btnRentBook");

const loansScreen =
document.getElementById("loansScreen");

const openLoansScreen =
document.getElementById("openLoansScreen");

const loansTableBody =
document.getElementById("loansTableBody");

const loanSearch =
document.getElementById("loanSearch");


function showScreen(screen){

    if(currentScreenRef && currentScreenRef !== screen){
        navigationHistory.push(currentScreenRef);
    }


    document
    .querySelectorAll(".screen")
    .forEach(item => {

        item.classList.remove("active");

    });

    screen.classList.add("active");
currentScreenRef = screen;

const backButton = document.getElementById("backButton");

if(backButton){
    backButton.style.display =
        screen === homeScreen ? "none" : "flex";
}
}


btnStart.addEventListener("click", () => {

    showScreen(loginScreen);

});



openRegister.addEventListener("click", () => {

    showScreen(registerScreen);

});

document
.querySelectorAll(".home-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        showScreen(homeScreen);

    });

});


btnRegister.addEventListener("click", () => {

    const usuario = {

        nome:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        matricula:
        document.getElementById("matricula").value,

        telefone:
        document.getElementById("telefone").value,

        endereco:
        document.getElementById("endereco").value,

        bairro:
        document.getElementById("bairro").value,

        numero:
        document.getElementById("numero").value,

        turma:
        document.getElementById("turma").value,

        senha:
        document.getElementById("password").value

    };

    localStorage.setItem(
        "usuarioSGB",
        JSON.stringify(usuario)
    );

    alert("Cadastro realizado com sucesso!");

    showScreen(loginScreen);

});


btnLogin.addEventListener("click", () => {

    const login =
    document.getElementById("loginUser").value;

    const senha =
    document.getElementById("loginPassword").value;

  

    const usuarioPadrao = {
        nome: "Juliana",
        email: "Juliana",
        matricula: "Juliana",
        senha: "1234"
    };



    const usuarioSalvo =
    JSON.parse(
        localStorage.getItem("usuarioSGB")
    );



    if (
        login &&
        login.trim().toLowerCase() === "juliana" &&
        senha === "1234"
    ){

        greeting.innerHTML =
        "Olá Juliana!";

        showScreen(menuScreen);

        return;
    }



    if(usuarioSalvo){

        const usuarioValido =

            login === usuarioSalvo.email ||

            login === usuarioSalvo.matricula;

        const senhaValida =

            senha === usuarioSalvo.senha;

        if(
            usuarioValido &&
            senhaValida
        ){

            greeting.innerHTML =
            `Olá ${usuarioSalvo.nome}!`;

            showScreen(menuScreen);

            return;
        }
    }

    alert("Usuário ou senha incorretos.");

});
openBookRegister.addEventListener("click", () => {

    showScreen(bookRegisterScreen);

});
btnSaveBook.addEventListener("click", () => {

    const titulo =
    document.getElementById("bookTitle").value;

    const autor =
    document.getElementById("bookAuthor").value;

    const editora =
    document.getElementById("bookPublisher").value;

    const genero =
    document.getElementById("bookGenre").value;

    const ano =
    document.getElementById("bookYear").value;

    if(
        !titulo ||
        !autor ||
        !editora ||
        !genero ||
        !ano
    ){
        alert("Preencha todos os campos.");
        return;
    }

    const livro = {
        titulo,
        autor,
        editora,
        genero,
        ano
    };

    const livros =
    JSON.parse(
        localStorage.getItem("livrosSGB")
    ) || [];

    livros.push(livro);

    localStorage.setItem(
        "livrosSGB",
        JSON.stringify(livros)
    );

    alert("Livro cadastrado com sucesso!");

    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPublisher").value = "";
    document.getElementById("bookGenre").value = "";
    document.getElementById("bookYear").value = "";

});


const publisherRegisterScreen =
document.getElementById(
"publisherRegisterScreen"
);

const publishersScreen =
document.getElementById(
"publishersScreen"
);

const openPublisherRegister =
document.getElementById(
"openPublisherRegister"
);

const btnSavePublisher =
document.getElementById(
"btnSavePublisher"
);

openPublisherRegister
.addEventListener("click", () => {

    showScreen(
        publisherRegisterScreen
    );

});



btnSavePublisher
.addEventListener("click", () => {

    const nome =
    document.getElementById(
    "publisherName"
    ).value;

    const email =
    document.getElementById(
    "publisherEmail"
    ).value;

    const telefone =
    document.getElementById(
    "publisherPhone"
    ).value;

    const responsavel =
    document.getElementById(
    "publisherManager"
    ).value;

    if(
        !nome ||
        !email ||
        !telefone ||
        !responsavel
    ){
        alert(
        "Preencha todos os campos."
        );
        return;
    }

    const editora = {

        nome,
        email,
        telefone,
        responsavel

    };

    const editoras =
    JSON.parse(
    localStorage.getItem(
    "editorasSGB"
    )) || [];

    editoras.push(editora);

    localStorage.setItem(
        "editorasSGB",
        JSON.stringify(editoras)
    );

    alert(
    "Editora cadastrada!"
    );

    document.getElementById(
    "publisherName"
    ).value = "";

    document.getElementById(
    "publisherEmail"
    ).value = "";

    document.getElementById(
    "publisherPhone"
    ).value = "";

    document.getElementById(
    "publisherManager"
    ).value = "";

});



function carregarEditoras(){

    const lista =
    document.getElementById(
    "publishersList"
    );

    if(!lista) return;

    lista.innerHTML = "";

    const editoras =
    JSON.parse(
    localStorage.getItem(
    "editorasSGB"
    )) || [];

    editoras.forEach(
    (editora,index)=>{

        lista.innerHTML += `

        <div class="publisher-card">

            <span>
                ${editora.nome}
            </span>

            <div class="publisher-actions">

                <button
                onclick="
                editarEditora(${index})
                ">
                Editar
                </button>

                <button
                onclick="
                excluirEditora(${index})
                ">
                Excluir
                </button>

            </div>

        </div>

        `;
    });

}


function excluirEditora(index){

    if(
        !confirm(
        "Excluir editora?"
        )
    ) return;

    const editoras =
    JSON.parse(
    localStorage.getItem(
    "editorasSGB"
    )) || [];

    editoras.splice(index,1);

    localStorage.setItem(
        "editorasSGB",
        JSON.stringify(editoras)
    );

    carregarEditoras();
}



function editarEditora(index){

    const editoras =
    JSON.parse(
    localStorage.getItem(
    "editorasSGB"
    )) || [];

    const novoNome =
    prompt(
        "Novo nome:",
        editoras[index].nome
    );

    if(!novoNome) return;

    editoras[index].nome =
    novoNome;

    localStorage.setItem(
        "editorasSGB",
        JSON.stringify(editoras)
    );

    carregarEditoras();
}



document.addEventListener(
"input",
(e)=>{

    if(
    e.target.id !==
    "searchPublisher"
    ) return;

    const termo =
    e.target.value
    .toLowerCase();

    document
    .querySelectorAll(
    ".publisher-card"
    )
    .forEach(card=>{

        card.style.display =

        card.innerText
        .toLowerCase()
        .includes(termo)

        ? "flex"
        : "none";

    });

});


const CONFIG_SGB = {

    homePage: "index.html",

    paginaAlugueis: "ver-alugueis.html",

    fundo: "fundo2.png"

};



let livros = [];

let livrosFiltrados = [];

let livroSelecionado = null;

let categoriaSelecionada = null;



function voltarHome(){

    window.location.href =
    CONFIG_SGB.homePage;

}



function carregarLivros(){

    livros =
    JSON.parse(
        localStorage.getItem("livrosSGB")
    ) || [];

    livrosFiltrados = [...livros];

    renderizarLivros();

}



function renderizarLivros(){

    const lista =
    document.querySelector(".lista-livros");

    lista.innerHTML = "";

    livrosFiltrados.forEach(livro=>{

        const item =
        document.createElement("div");

        item.className = "livro";

        item.dataset.id = livro.id;

        item.innerHTML = `

            <span>${livro.titulo}</span>

            <div class="check"></div>

        `;

        item.addEventListener(
            "click",
            ()=>selecionarLivro(
                livro,
                item
            )
        );

        lista.appendChild(item);

    });

}



function selecionarLivro(livro, elemento){

    document
    .querySelectorAll(".livro")
    .forEach(card=>{

        card.classList.remove(
            "selecionado"
        );

        const check =
        card.querySelector(".check");

        check.classList.remove(
            "ativo"
        );

        check.innerHTML = "";

    });

    livroSelecionado = livro;

    elemento.classList.add(
        "selecionado"
    );

    const check =
    elemento.querySelector(".check");

    check.classList.add(
        "ativo"
    );

    check.innerHTML = "✔";

}



function pesquisarLivro(){

    const texto =

    document
    .querySelector(
        ".topo input"
    )
    .value
    .toLowerCase();

    livrosFiltrados =

    livros.filter(livro=>{

        const titulo =
        livro.titulo.toLowerCase();

        const categoria =
        (livro.categoria || "")
        .toLowerCase();

        return (
            titulo.includes(texto)
            ||
            categoria.includes(texto)
        );

    });

    renderizarLivros();

}



function aplicarFiltroCategoria(nome){

    categoriaSelecionada = nome;

    livrosFiltrados =

    livros.filter(livro=>{

        return (
            livro.categoria === nome
        );

    });

    renderizarLivros();

}

openRentBook.addEventListener("click", () => {

    loadBooks();

    showScreen(rentBookScreen);

});
function loadBooks(filter = ""){

    const livros =

    JSON.parse(
        localStorage.getItem("livrosSGB")
    ) || [];

    booksList.innerHTML = "";

    const filtrados = livros.filter(livro =>

        livro.titulo
        .toLowerCase()
        .includes(filter.toLowerCase())

        ||

        livro.autor
        .toLowerCase()
        .includes(filter.toLowerCase())

        ||

        livro.genero
        .toLowerCase()
        .includes(filter.toLowerCase())
    );

    filtrados.forEach(livro => {

        const item =
        document.createElement("div");

        item.className = "book-item";

        item.innerHTML = `
            <span>
                ${livro.titulo}
            </span>
            <span>
                ${livro.autor}
            </span>
        `;

        item.addEventListener("click", () => {

            document
            .querySelectorAll(".book-item")
            .forEach(i => {

                i.classList.remove("selected");

            });

            item.classList.add("selected");

            selectedBook = livro;

        });

        booksList.appendChild(item);

    });

}
bookSearch.addEventListener("input", () => {

    loadBooks(bookSearch.value);

});
btnRentBook.addEventListener("click", () => {

    if(!selectedBook){

        alert(
            "Selecione um livro."
        );

        return;
    }

    const emprestimos =

    JSON.parse(
        localStorage.getItem(
            "emprestimosSGB"
        )
    ) || [];

    emprestimos.push({

        titulo:
        selectedBook.titulo,

        autor:
        selectedBook.autor,

        dataEmprestimo:
        new Date()
        .toISOString()
        .split("T")[0],

        status:
        "Alugado"

    });

    localStorage.setItem(

        "emprestimosSGB",

        JSON.stringify(
            emprestimos
        )

    );

    alert(
        "Livro alugado com sucesso!"
    );

    selectedBook = null;

    loadBooks();

});
openLoansScreen.addEventListener("click", () => {

    renderLoans();

    showScreen(loansScreen);

});
function renderLoans(filter = ""){

    const emprestimos =

    JSON.parse(
        localStorage.getItem("emprestimosSGB")
    ) || [];

    loansTableBody.innerHTML = "";

    const filtrados = emprestimos.filter(item =>

        item.usuario
        .toLowerCase()
        .includes(filter.toLowerCase())

        ||

        item.titulo
        .toLowerCase()
        .includes(filter.toLowerCase())

        ||

        item.status
        .toLowerCase()
        .includes(filter.toLowerCase())
    );

    filtrados.forEach((item,index)=>{

        const row =
        document.createElement("tr");

        row.innerHTML = `

            <td>${item.usuario}</td>

            <td>${item.dataEmprestimo}</td>

            <td>${item.dataDevolucao || "-"}</td>

            <td>${item.titulo}</td>

            <td class="${getStatusClass(item.status)}">
                ${item.status}
            </td>

            <td>

                <button
                    class="action-btn"
                    onclick="markReturned(${index})"
                >
                    Devolver
                </button>

                <button
                    class="action-btn"
                    onclick="removeLoan(${index})"
                >
                    Remover
                </button>

            </td>

        `;

        loansTableBody.appendChild(row);

    });

}
loanSearch.addEventListener("input",()=>{

    renderLoans(
        loanSearch.value
    );

});
function getStatusClass(status){

    if(status === "Devolvido")
        return "success";

    if(status === "Atrasado")
        return "danger";

    return "warning";
}
function markReturned(index){

    const emprestimos =

    JSON.parse(
        localStorage.getItem(
            "emprestimosSGB"
        )
    ) || [];

    emprestimos[index].status =
    "Devolvido";

    emprestimos[index].dataDevolucao =
    new Date()
    .toISOString()
    .split("T")[0];

    localStorage.setItem(

        "emprestimosSGB",

        JSON.stringify(
            emprestimos
        )

    );

    renderLoans();
}
function removeLoan(index){

    const emprestimos =

    JSON.parse(
        localStorage.getItem(
            "emprestimosSGB"
        )
    ) || [];

    emprestimos.splice(index,1);

    localStorage.setItem(

        "emprestimosSGB",

        JSON.stringify(
            emprestimos
        )

    );

    renderLoans();
}


document.addEventListener("DOMContentLoaded", () => {

    const backButton = document.getElementById("backButton");

    function atualizarBotaoVoltar() {
        if (!backButton) return;

        if (currentScreenRef === homeScreen) {
            backButton.style.display = "none";
        } else {
            backButton.style.display = "flex";
        }
    }

    if(backButton){
        backButton.addEventListener("click", () => {

            if(navigationHistory.length > 0){

                const previousScreen = navigationHistory.pop();

                document.querySelectorAll(".screen").forEach(item => {
                    item.classList.remove("active");
                });

                previousScreen.classList.add("active");
                currentScreenRef = previousScreen;

            } else {

                document.querySelectorAll(".screen").forEach(item => {
                    item.classList.remove("active");
                });

                homeScreen.classList.add("active");
                currentScreenRef = homeScreen;
            }

            atualizarBotaoVoltar();
        });
    }

    const initial = document.querySelector(".screen.active");
    if(initial){
        currentScreenRef = initial;
    }
document.getElementById("backButton").style.display = "none";
    atualizarBotaoVoltar();
});



const globalSearch=document.getElementById("globalSearch");
const searchResults=document.getElementById("searchResults");

function executarPesquisaGlobal(termo){
if(!searchResults) return;
searchResults.innerHTML="";
if(!termo.trim()) return;

const livros=JSON.parse(localStorage.getItem("livrosSGB"))||[];
const editoras=JSON.parse(localStorage.getItem("editorasSGB"))||[];
const usuario=JSON.parse(localStorage.getItem("usuarioSGB"));

const resultados=[];

livros.forEach(l=>{
 if((l.titulo||"").toLowerCase().includes(termo.toLowerCase())){
   resultados.push({tipo:"Livro",nome:l.titulo});
 }
});

editoras.forEach(e=>{
 if((e.nome||"").toLowerCase().includes(termo.toLowerCase())){
   resultados.push({tipo:"Editora",nome:e.nome});
 }
});

if(usuario){
 const campos=[usuario.nome,usuario.email,usuario.matricula];
 if(campos.some(c=>(c||"").toLowerCase().includes(termo.toLowerCase()))){
   resultados.push({tipo:"Usuário",nome:usuario.nome});
 }
}

resultados.forEach(r=>{
 const card=document.createElement("div");
 card.className="search-card";
 card.innerHTML=`<div class="search-type">${r.tipo}</div><div>${r.nome}</div>`;
 searchResults.appendChild(card);
});

if(resultados.length===0){
 searchResults.innerHTML='<div class="search-card">Nenhum resultado encontrado.</div>';
}
}

if(globalSearch){
globalSearch.addEventListener("input",(e)=>executarPesquisaGlobal(e.target.value));
}

document.addEventListener('DOMContentLoaded',()=>{
 const search=document.getElementById('globalSearch');
 const results=document.getElementById('searchResults');
 const map={
  'usuários':document.getElementById('usuariosScreen'),
  'editoras':document.getElementById('editorasScreen'),
  'livros':document.getElementById('livrosScreen')
 };
 if(search && results){
   search.addEventListener('input',()=>{
      const v=search.value.toLowerCase();
      results.innerHTML='';
      ['Usuários','Editoras','Livros'].filter(x=>x.toLowerCase().includes(v) && v)
      .forEach(x=>{
        const d=document.createElement('div');
        d.textContent=x;
        results.appendChild(d);
       d.onclick = () => {

    if(x.toLowerCase() === "editoras"){

        carregarEditorasPagina();

    }

    showScreen(map[x.toLowerCase()]);

    results.innerHTML = "";

};
     });
   });
}
});

function carregarEditorasPagina(){

    const lista =
    document.getElementById("listaEditoras");

    if(!lista) return;

    
    const editoras =
    JSON.parse(
        localStorage.getItem("editorasSGB")
    ) || [];

    editoras.forEach(editora => {

        lista.innerHTML += `
            <div class="editora-item">
              
                <div class="nome-editora">
                    ${editora.nome}
                </div>
                <button class="btn-opcoes">
                    ⋮
                </button>
            </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    const editorasScreen =
    document.getElementById("editorasScreen");

    const pesquisaEditora =
    document.getElementById("pesquisaEditora");

    if(pesquisaEditora){

        pesquisaEditora.addEventListener("input", () => {

            const termo =
            pesquisaEditora.value.toLowerCase();

            document
            .querySelectorAll(".editora-item")
            .forEach(item => {

                item.style.display =
                item.textContent
                .toLowerCase()
                .includes(termo)

                ? "flex"
                : "none";

            });

        });

    }

});
function carregarUsuariosPagina(){

    const lista =
    document.getElementById("listaUsuarios");

    if(!lista) return;

    lista.innerHTML = "";

    const usuarios =
    JSON.parse(
        localStorage.getItem("usuariosSGB")
    ) || [];

    usuarios.forEach(usuario => {

        lista.innerHTML += `
            <div class="usuario-item">
                <span>👤</span>
                <div class="nome-usuario">
                    ${usuario.nome}
                </div>
                <button class="btn-opcoes">
                    ⋮
                </button>
            </div>
        `;

    });

}



document.addEventListener("DOMContentLoaded", () => {

    const usuariosScreen =
    document.getElementById("usuariosScreen");

    const pesquisaUsuario =
    document.getElementById("pesquisaUsuario");

    if(pesquisaUsuario){

        pesquisaUsuario.addEventListener("input", () => {

            const termo =
            pesquisaUsuario.value.toLowerCase();

            document
            .querySelectorAll(".usuario-item")
            .forEach(item => {

                item.style.display =
                item.textContent
                .toLowerCase()
                .includes(termo)

                ? "flex"
                : "none";

            });

        });

    }

});
function carregarLivrosPagina(){

    const lista =
    document.getElementById("listaLivros");

    if(!lista) return;

    lista.innerHTML = "";

    const livros =
    JSON.parse(
        localStorage.getItem("livrosSGB")
    ) || [];

    livros.forEach(livro => {

        lista.innerHTML += `
            <div class="livro-item">
                <span>📚</span>
                <div class="nome-livro">
                    ${livro.nome}
                </div>
                <button class="btn-opcoes">
                    ⋮
                </button>
            </div>
        `;

    });

}



document.addEventListener("DOMContentLoaded", () => {

    const livrosScreen =
    document.getElementById("livrosScreen");

    const pesquisaLivro =
    document.getElementById("pesquisaLivro");

    if(pesquisaLivro){

        pesquisaLivro.addEventListener("input", () => {

            const termo =
            pesquisaLivro.value.toLowerCase();

            document
            .querySelectorAll(".livro-item")
            .forEach(item => {

                item.style.display =
                item.textContent
                .toLowerCase()
                .includes(termo)

                ? "flex"
                : "none";

            });

        });

    }

});
document.addEventListener("click", (e) => {

    document
    .querySelectorAll(".menu-opcoes")
    .forEach(menu => {
        if(menu !== e.target.closest(".menu-opcoes")){
            menu.remove();
        }
    });

    if(!e.target.classList.contains("btn-opcoes"))
        return;

    const item = e.target.parentElement;

    const menuExistente =
    item.querySelector(".menu-opcoes");

    if(menuExistente){
        menuExistente.remove();
        return;
    }

    const menu =
    document.createElement("div");

    menu.className = "menu-opcoes";

    menu.innerHTML = `
        <button class="editar-item">
             Editar
        </button>

        <button class="excluir-item">
             Excluir
        </button>
    `;

    item.classList.add("item-container");

    item.appendChild(menu);

    menu.querySelector(".editar-item")
    .addEventListener("click", () => {

        const nome = item.querySelector(
            ".nome-editora, .nome-usuario, .nome-livro"
        );

        const novoNome =
        prompt("Editar:", nome.textContent);

        if(novoNome){
            nome.textContent = novoNome;
        }

        menu.remove();
    });

    menu.querySelector(".excluir-item")
    .addEventListener("click", () => {

        if(confirm("Deseja excluir?")){
            item.remove();
        }

        menu.remove();
    });

});