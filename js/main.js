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

const acordion = document.querySelectorAll(".accordion")


acordion.forEach((element) => {
    element.addEventListener("click", () => {

        const ul = element.parentNode.querySelector("ul")
        const iconAcordion = element.querySelector("i")
        ul.classList.toggle("expand")


        if(ul.classList.contains("expand")){
            console.log(ul.classList.contains("expand"))
            ul.style.height = ul.scrollHeight + 100 + "px"
            ul.style.padding = "15px 0"
            iconAcordion.classList.remove("ph-book-open")
            iconAcordion.classList.add("ph-book-open-text")

        }else{
            ul.style.height = 0
            ul.style.padding = "0"
            iconAcordion.classList.add("ph-book-open")
            iconAcordion.classList.remove("ph-book-open-text")

        }
    })
})

