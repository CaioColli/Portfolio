const checkBox = document.querySelector('#checkbox')
const luzLustreDesktopInicial = document.querySelector('#luz')

function animacao(element) {
    gsap.fromTo(element, {
        opacity: 0
    }, {
        opacity: 1,
        repeat: 3,
        yoyo: true,
        duration: 0.1,
        onComplete: () => {
            element.style.opacity = '1'
        }
    })
}

export function animacaoLustre() {
    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            animacao(luzLustreDesktopInicial)
        } else {
            luzLustreDesktopInicial.style.opacity = '0'
        }
    })
}