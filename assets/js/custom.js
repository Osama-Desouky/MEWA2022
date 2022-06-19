

document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener("scroll",function() {
       console.log(window.scrollY,window.scrollX)
       if(window.scrollY > 50) {
        document.querySelector('.menuBg').classList.add('fixedTop')
                // add padding top to show content behind navbar
                // navbar_height = document.querySelector('.navbar').offsetHeight;
                // document.body.style.paddingTop = navbar_height + 'px';
       }else {
        document.querySelector('.menuBg').classList.remove('fixedTop')
            // remove padding top from body
            // document.body.style.paddingTop = '0';
       }
    })



})


