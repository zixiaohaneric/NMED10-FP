let menu_link = document.querySelectorAll('.menu_link')
window.addEventListener('scroll',function () {
    if(window.scrollY > 20){
        document.querySelector('header').style.background = '#000000'
        for(let i = 0; i < menu_link.length; i++){
            menu_link[i].style.color = '#fff'
        }
    }else {
        document.querySelector('header').style.background = '#ffffff'
        for(let i = 0; i < menu_link.length; i++){
            menu_link[i].style.color = '#000'
        }
    }
})
