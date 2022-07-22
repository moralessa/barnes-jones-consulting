const accordion = document.querySelectorAll('.content-box');

accordion.forEach(contentBox =>{
    contentBox.addEventListener('click', ()=>{
        contentBox.classList.toggle('active');
    })
})