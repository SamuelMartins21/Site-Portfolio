function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon-mobile').src = "assets/Imagens/abrir-icon-mobile.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon-mobile').src = "assets/Imagens/fechar-icon-mobile.png";

    }
}