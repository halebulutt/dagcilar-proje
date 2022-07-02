$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

let formDom = document.querySelector("#teklif-modal")
formDom.addEventListener('submit', formSubmit)

function formSubmit() {
    console.log("işlem gerçekleşti")
}
