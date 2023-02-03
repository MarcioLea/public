function abrir(evt, aba) {

    let i, conteudo, tablinks;
  
   
    conteudo = document.getElementsByClassName("conteudo");
    for (i = 0; i < conteudo.length; i++) {
      conteudo[i].style.display = "none";
    }
  
   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
  
    document.getElementById(aba).style.display = "block";
    evt.currentTarget.className += " active";
  }