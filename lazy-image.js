function loadImage(img){
    const url = img.getAttribute('lazy-src')
    if(url){
        img.setAttribute('src', url)
        img.removeAttribute('lazy-src')
    }
}

function lazyImage(){
    if('IntersectionObserver' in window){
        //use IntersectionObserver
        let lazyImages = document.querySelectorAll('[lazy-src]')
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    loadImage(entry.target)
                }
            })
        })

        lazyImages.forEach(img => {
            observer.observe(img)
        })
    } else {
        //use getBoundingClientRect
        let lazyImages = document.querySelectorAll('[lazy-src]')
        lazyImages.forEach(img => {
            loadImage(img)
        })
    }
}

document.addEventListener("DOMContentLoaded", lazyImage)