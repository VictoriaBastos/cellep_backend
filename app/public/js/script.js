// Scripts por CeL.lep Tech
// é um método que mostra o caminho para o local da janela abetra
let url_atual = window.location.pathname

if(url_atual =='/'){
    // adicionar classe para
    document.querySelector('#menuHome').className = 'nav-link text-white active'
}else if(url_atual == '/noticias'){
    document.querySelector('#menuNoticias').className = 'nav-link text-white active'
}else if(url_atual == '/admin'){
    document.querySelector('#menuAdmin').className = 'nav-link text-white active'
}

// class active deixa os botões mais visíveis quando estamos nas respectivas páginas.