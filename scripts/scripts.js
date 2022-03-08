var open = document.getElementById('hamburger');

open.addEventListener("click", function(){

 
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle');
    nav.classList.toggle("menu-open");

    icon.classList.toggle("open-menu");

});



