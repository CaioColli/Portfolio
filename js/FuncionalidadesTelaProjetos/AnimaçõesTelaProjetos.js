const secProjetos = document.querySelector('#sec-projetos')
const apresentacaoProjetos = document.querySelector('#apresentacao-projetos')
const projetos = document.querySelector('#projetos')

function scrollTriggerPosicaoElementos(element) {
    return {
        trigger: element,
        start: 'top center',
        end: 'center center',
        markers: false,
        scrub: true
    }
}

function animaEixoX(div, element, xPositionStart, xPositionEnd) {
    gsap.fromTo(element, {
        x: xPositionStart,
        opacity: 0,
        scrollTrigger: scrollTriggerPosicaoElementos(div)
    }, {
        x: xPositionEnd,
        opacity: 1,
        scrollTrigger: scrollTriggerPosicaoElementos(div)
    })
}

export function animacoesTelaProjetos() {
    animaEixoX(secProjetos, apresentacaoProjetos, -250 , 0)
    animaEixoX(secProjetos, projetos, 250 , 0)
}
