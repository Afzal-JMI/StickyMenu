console.log(document.querySelectorAll('img')[1]);

document.querySelectorAll('img')[1].style.height = '200px';
document.querySelectorAll('img')[0].style.height = '100px';
document.querySelectorAll('img')[1].style.width = '100%'
console.log(window.pageYOffset);
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 120){
        document.getElementById('menu-bar').classList.add('sticky');
    }
    else{
        document.getElementById('menu-bar').classList.remove('sticky');
    }
})

