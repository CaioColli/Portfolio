const secRodape = document.querySelector('#rodape')

const ilustracao = document.querySelector('#ilustracao-personagem')

const timeLine = gsap.timeline()

function scrollTriggerPosicaoElementos(element) {
    return {
        trigger: element,
        start: 'top top',
        markers: false,
        scrub: true,
        pin: true
    }
}

export function animacaoTelaRodape() {
    timeLine.fromTo(secRodape, {
        'clip-path': 'circle(2% at 50% 50%)'
    }, {
        'clip-path': 'circle(100% at 50% 50%)',
        scrollTrigger: scrollTriggerPosicaoElementos(secRodape),
    }), timeLine.fromTo(ilustracao, {
        opacity: 0,
        y: 200
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: secRodape,
            start: 'top top',
            markers: false,
            scrub: true,
        }
    })
}