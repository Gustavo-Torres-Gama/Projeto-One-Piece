// objetivo 1 quando clicar no botao de personagem mostrar o selecionado.

// passo 1 pegar os botões no JS para verificar quando clicar em um deles.

//passo 2 adicionar a classe selecionado no botão que o usuario clicou.

//passo 3 verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.



//objetivo 2 quando clicar no botão do personagem mostrar as informações do personagem.

//passo 1 do objetivo 2 pegar os personagens no JS pra poder mostrar ou esconder ele.

//passo 2 do objetivo 2 adicionar a classe selecionado no personagem que o usuario selecionou.

//passo 3 do objetivo 2 verificar se já existe um personagem selecionado se sim devemos remover a seleção dele.




const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


        desselecionarBotao()
        desselecionarPerssonagem()


        botao.classList.add("selecionado")        
        personagens[indice].classList.add("selecionado")
    })
})

function desselecionarPerssonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}
