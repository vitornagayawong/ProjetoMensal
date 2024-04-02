const header = document.getElementById('header')
const nav = document.getElementById('nav')
//const btn_home = document.getElementById('btn_home')
const btn_criarEvento = document.getElementById('btn_criarEvento')
const btn_visualizarEvento = document.getElementById('btn_visualizarEvento')
const main = document.getElementById('main')

/*
btn_home.addEventListener("click", (evt) => {
    //console.log(evt.target)
    abrirPagina(evt.target, "./home.html")
})
*/

btn_criarEvento.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./criarEvento.html")
})

btn_pesquisar.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./pesquisar.html")
})

btn_visualizarEvento.addEventListener("click", (evt) => {
    abrirPagina(evt.target, "./visualizarEvento.html")
})

const abrirPagina = (el, url) => {
    const abas = [...document.querySelectorAll(".aba")]
    //console.log(abas)
    abas.forEach(e => {
        e.classList.remove("abaSelecionada")

    })
    el.classList.add("abaSelecionada")
    window.open(url, "if_principal")
}

