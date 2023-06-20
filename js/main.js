const header = document.querySelector("header")
console.log(window.screen.width)

document.addEventListener("scroll", (e) => {

    if(window.scrollY > 15 ){
        header.style.backgroundColor = "var(--color-05)"
        if(window.screen.width > 615 && window.screen.width < 706 ){
            header.style.transform = "translateY(-63px)"
        } else {
            header.style.transform = "translateY(0px)"
        }
    } else {
        header.style.transform = "translateY(0px)"
        header.style.backgroundColor = "var(--color-04)"
    }

})

