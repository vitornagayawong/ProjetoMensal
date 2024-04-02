const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const data = document.getElementById('data')
const hrInicio = document.getElementById('hrInicio')
const hrFim = document.getElementById('hrFim')
const btn_geral_gravar = document.getElementById('btn_geral_gravar')



const resetar = () => {
    titulo.value = ""
    descricao.value = ""
    data.value = ""
    hrInicio.value = ""
    hrFim.value = "" 
    titulo.focus
}



btn_geral_gravar.addEventListener("click", () => {
    //console.log(titulo.value)
    const dados = {
        "titulo": titulo.value,
        "descricao": descricao.value,
        "data": data.value,
        "hrInicio": hrInicio.value,
        "hrFim": hrFim.value
    }

    
    
    window.location.href = 'visualizarEvento.html';

})


//recebidoTentativa2.setarAbaAzul

