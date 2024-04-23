const secHabilidades = document.querySelector('#sec-habilidades')
const primeiroParagrafo = document.querySelector('#paragrafo-1')
const titulo = document.querySelector('#titulo')
const segundoParagrafo = document.querySelector('#paragrafo-2')
const terceiroParagrafo = document.querySelector('#paragrafo-3')
const quartoParagrafo = document.querySelector('#paragrafo-4')

const timeLine = gsap.timeline()

function scrollTriggerPosicaoElementos(element) {
    return {
        trigger: element,
        start: 'top center',
        end: 'center center',
        markers: false,
        scrub: true
    }
}

function animaEixoY(div, element, yPositionStart, yPositionEnd) {
    timeLine.fromTo(element, {
        y: yPositionStart,
        opacity: 0,
        scrollTrigger: scrollTriggerPosicaoElementos(div)
    }, {
        y: yPositionEnd,
        opacity: 1,
        scrollTrigger: scrollTriggerPosicaoElementos(div)
    })
}



export function animacoesTelaHabilidades() {
    animaEixoY(secHabilidades, primeiroParagrafo, 50 , 0)
    animaEixoY(secHabilidades, titulo, 50 , 0)
    animaEixoY(secHabilidades, segundoParagrafo, 50 , 0)
    animaEixoY(secHabilidades, terceiroParagrafo, 50 , 0)
    animaEixoY(secHabilidades, quartoParagrafo, 50 , 0)
}

