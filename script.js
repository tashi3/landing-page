 let navbar = document.querySelector('.header .navbar');
 let menu = document.querySelector('#menu');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 };
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}










$(document).ready(function(){
    $(' .buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).atter('data-filter')
        if (filter == 'all'){
            $('.diet .box').show(400);
        }
        else{
            $('.diet .box').not('.'+ filter).hide(200);
            $('.diet .box').not('.'+ filter).show(400);
        }
    });
});