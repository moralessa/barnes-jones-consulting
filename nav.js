const hambugerMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');

function expandMobileNav(){ // Mobile nav functionality
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

$(function(){ // Active link functionality using jQuery
    $('.nav-link').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});

window.addEventListener('resize', ()=>{
    if(window.matchMedia("min-width: 992px")){
        menu.style.display = 'block';
    }
})

hambugerMenu.addEventListener('click', expandMobileNav);
