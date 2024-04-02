
function abrirConfiguracao() {
    // Exibir a tela de configuração
    document.getElementById("acessandoAsConfiguracoes").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  
  function fecharConfiguracao() {
    // Fechar a tela de configuração
    document.getElementById("acessandoAsConfiguracoes").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  /*
  function criandoEvento() {    
    document.getElementById("overlay").style.display = "block";  
    document.getElementById("cadastroEvento").style.display = "block";  
    //document.getElementById("acessandoAsConfiguracoes").style.display = "none";
  }  
  */

  function criandoEvento() {
    // Exibe a tela cadastroEvento
    document.getElementById("cadastroEvento").style.display = "block";
    
    // Oculta a tela acessandoAsConfiguracoes
    document.getElementById("acessandoAsConfiguracoes").style.display = "none";
    
    // Exibe o overlay (se necessário)
    document.getElementById("overlay").style.display = "block";
}

function fecharCadastroEvento() {
  document.getElementById("cadastroEvento").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
