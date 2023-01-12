let cartao = document.querySelectorAll('.card');
for (const elementos of cartao) {
    elementos.setAttribute('style', 'background-color:#E16E0E')
}

let titulo = document.querySelectorAll('.titulo-card');
for (const nome of titulo) {
    nome.setAttribute('style', 'margin-top: 20px; color: #41453F')
    nome.innerHTML = 'Meu card'
}

let descricao = document.querySelectorAll('.descricao-card');
for (const descricao1 of descricao) {
    descricao1.setAttribute('style', 'font-size:15px; margin-top:30px; color:white')
    descricao1.innerHTML = 'Descrição modificada <br> pelo JavaScript'
}

let botaoEditar = document.querySelectorAll('.botao-editar');
for (const botaoEditar1 of botaoEditar) {
    botaoEditar1.setAttribute('style', 'width: 60px; height: 35px; border-radius:10px; border: none; margin-top: 30px; color:white; background-color:#008000; cursor: pointer')
    botaoEditar1.setAttribute('onclick', 'editarCard()')
}

let botaoapagar = document.querySelectorAll('.botao-apagar');
for (const botaoApagar1 of botaoapagar) {
    botaoApagar1.setAttribute('style', 'width: 60px; height: 35px; border-radius:10px; border: none; margin-top: 30px; color:white; background-color:#FF0000; cursor:pointer')
    botaoApagar1.setAttribute('onclick', 'apagarCard()')
}

function editarCard() {
    alert("clicou em editar")
}
function apagarCard() {
    let confirmado = confirm("deseja realmente apagar?")
    if (confirmado) {
        alert("Confirmado")
    }else{
        alert("Cancelou")
    }
}