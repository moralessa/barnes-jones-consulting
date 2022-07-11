export default function exandMobileNav(){
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
    }else{
        menu.classList.add('open');
    }
}