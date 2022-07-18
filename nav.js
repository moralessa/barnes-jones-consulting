const hambugerMenu = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const navContainer = document.querySelector('.nav-container');
const logoContainer = document.querySelector('.logo-container');
const leftSideNavContainer = document.querySelector('.left-side');
const rightSideNavContainer = document.querySelector('.right-side');
const heroContainer = document.querySelector('.hero-container');
const heroContainerOptions = {
    rootMargin: "-300px 0px 0px 0px"
}
const heroContainerObserver = new IntersectionObserver((entries, heroContainerObserver)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navContainer.classList.add('slim');
            leftSideNavContainer.classList.add('slim');
            rightSideNavContainer.classList.add('slim');
            logoContainer.classList.add('slim');
        }else{
            navContainer.classList.remove('slim');
            leftSideNavContainer.classList.remove('slim');
            rightSideNavContainer.classList.remove('slim');
            logoContainer.classList.remove('slim');
        }
    })
}, heroContainerOptions)

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

heroContainerObserver.observe(heroContainer);