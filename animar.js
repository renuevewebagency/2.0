let animado=document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for ( var i=0; i < animado.length; i++){
        let alturaAnimado= animado[i].offsetTop;
        if(alturaAnimado -900< scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add('mostrarArriba')
        }
    }
}
window.addEventListener('scroll' ,mostrarScroll);

let animado2=document.querySelectorAll(".animado2");
function mostrarScroll2(){
    let scrollTop2= document.documentElement.scrollTop;
    for ( var i=0; i < animado2.length; i++){
        let alturaAnimado2= animado2[i].offsetTop;
        if(alturaAnimado2 -500< scrollTop2){
            animado2[i].classList.add('animate__animated', 'animate__fadeInRightBig');
            animado2[i].style.opacity=1;
            animado2[i].classList.add('mostrarArriba2')
        }
    }
}
window.addEventListener('scroll' ,mostrarScroll2);

let animado3=document.querySelectorAll(".animado3");
function mostrarScroll3(){
    let scrollTop3= document.documentElement.scrollTop;
    for ( var i=0; i < animado3.length; i++){
        let alturaAnimado3= animado3[i].offsetTop;
        if(alturaAnimado3 -500< scrollTop3){
            animado3[i].classList.add('animate__animated', 'animate__fadeInLeftBig');
            animado3[i].style.opacity=1;

        }
    }
}
window.addEventListener('scroll' ,mostrarScroll3);