export default function exandMobileNav(){
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500)
    }else{
        menu.style.display = 'block';
        setTimeout(() => {menu.classList.add('open');}, 50)
    }
}