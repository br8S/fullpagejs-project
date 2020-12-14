const navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.desktop-nav');
    var links = document.querySelectorAll('.desktop-nav li');


// ()=> means you are invkoing/calling a function
/* would be the same to do 

    burger.addEventlistener('click', slide);
    function slide(){
        nav.classList.toggle('nav-active');
    }

*/
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = 'navLinkFade 1.5s ease';
            }
        });
    });
}

navSlide();