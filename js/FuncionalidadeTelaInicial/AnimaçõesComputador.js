const secInicial = document.querySelector('#sec-inicial')

const linhaCodigo1 = document.querySelector('#linha1')
const linhaCodigo2 = document.querySelector('#linha2')
const linhaCodigo3 = document.querySelector('#linha3')
const linhaCodigo4 = document.querySelector('#linha4')
const linhaCodigo5 = document.querySelector('#linha5')
const linhaCodigo6 = document.querySelector('#linha6')
const linhaCodigo7 = document.querySelector('#linha7')
const linhaCodigo8 = document.querySelector('#linha8')
const linhaCodigo9 = document.querySelector('#linha9')
const linhaCodigo10 = document.querySelector('#linha10')
const linhaCodigo11 = document.querySelector('#linha11')
const linhaCodigo12 = document.querySelector('#linha12')
const linhaCodigo13 = document.querySelector('#linha13')

function animaLinhaCodigo(div, element, width) {
    const animacao = gsap.to(element, {
        width: width,
        duration: 2,
        scrollTrigger: {
            trigger: div,
            start: 'top center',
            onEnter: () => animacao.play(),
            onEnterBack: () => animacao.restart(),
        }
    })
}

export function animacoesLinhaCodigo() {
    animaLinhaCodigo(secInicial, linhaCodigo1 , 60)
    animaLinhaCodigo(secInicial, linhaCodigo2 , 35)
    animaLinhaCodigo(secInicial, linhaCodigo3 , 75)
    animaLinhaCodigo(secInicial, linhaCodigo4 , 80)
    animaLinhaCodigo(secInicial, linhaCodigo5 , 65)
    animaLinhaCodigo(secInicial, linhaCodigo6 , 70)
    animaLinhaCodigo(secInicial, linhaCodigo7 , 90)
    animaLinhaCodigo(secInicial, linhaCodigo8 , 80)
    animaLinhaCodigo(secInicial, linhaCodigo9 , 85)
    animaLinhaCodigo(secInicial, linhaCodigo10 , 95)
    animaLinhaCodigo(secInicial, linhaCodigo11 , 50)
    animaLinhaCodigo(secInicial, linhaCodigo12 , 40)
    animaLinhaCodigo(secInicial, linhaCodigo13 , 30)
}


const paginaLateralComputador = document.querySelector('#pagina-lateral')
const barraScrollPaginaLateral = document.querySelector('#barra-scroll')

function animaPaginaLateral(div, element, yPositionStart, yPositionEnd) {
    const animacao = gsap.fromTo(element, {
        y: yPositionStart
    }, {
        y: yPositionEnd,
        repeat: -1,
        repeatDelay: 3,
        yoyo: true,
        duration: 4,
        scrollTrigger: {
            trigger: div,
            start: 'top center',
            onEnter: () => animacao.play(),
            onEnterBack: () => animacao.restart(),
        }
    })
}

export function animacoesLateral() {
    animaPaginaLateral(secInicial, paginaLateralComputador, 0 , -65)
    animaPaginaLateral(secInicial, barraScrollPaginaLateral, 0 , 65)
}