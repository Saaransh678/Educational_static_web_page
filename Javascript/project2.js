burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navilist=document.querySelector('.navilist');
rightnav=document.querySelector('.rightnav');
function func()
{
    rightnav.classList.toggle('v-nav-res');
    navilist.classList.toggle('v-nav-res');
    navbar.classList.toggle('h-nav-res');
}
burger.addEventListener('click',func);