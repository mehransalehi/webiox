//watch the scroll to change the class of navbar
let lastScrollPos = 0;
let ticking = false;

document.addEventListener("scroll",()=>{
    lastScrollPos = window.scrollY;

    if(!ticking){
        window.requestAnimationFrame(()=>{
            console.log(lastScrollPos);
            ticking = false;
        });

        ticking = true;
    }
})