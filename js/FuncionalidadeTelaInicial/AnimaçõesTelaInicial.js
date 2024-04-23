const secInicial = document.querySelector('#sec-inicial')
const estanteLivros = document.querySelector('#estante-livros')
const estanteComputador = document.querySelector('#estante-computador')
const lustreDesktop = document.querySelector('#lustre')
const apresentacao = document.querySelector('#apresentacao-sobre')
const linhaFrontEnd = document.querySelector('#linha-um')
const linhaDev = document.querySelector('#linha-dois')


function animaEixoY(div, element, yPositionStart, yPositionEnd) {
    const animacao = gsap.fromTo(element, {
        y: yPositionStart,
        opacity: 0
    }, {
        y: yPositionEnd,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: div,
            onEnter: () => animacao.play(),
            onEnterBack: () => animacao.restart() 
        }
    })
}

function animaEixoX(div, element, xPositionStart, xPositionEnd) {
    const animacao = gsap.fromTo(element, {
        x: xPositionStart,
        opacity: 0
    }, {
        x: xPositionEnd,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: div,
            onEnter: () => animacao.play(),
            onEnterBack: () => animacao.restart() 
        }
    })
}

export function animacoesTelaInicial() {
    animaEixoY(secInicial, estanteComputador, 150, 0)
    animaEixoY(secInicial, lustreDesktop, -50, 0)
    animaEixoX(secInicial, estanteLivros, -150, 0)
    animaEixoX(secInicial, apresentacao, 100, 0)
    animaEixoX(secInicial, linhaFrontEnd, 170, 0)
    animaEixoX(secInicial, linhaDev, 100, 0)
}