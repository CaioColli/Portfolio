const cabecalho = document.querySelector('#cabecalho')
const logoPagina = document.querySelector('#logo-pagina')


const timeLine = gsap.timeline({defaults: {duration: 3}})

function scrollTriggerStroke(element) {
    return {
        trigger: element,
        start: 'top center',
        markers: false,
        onEnter: () => timeLine.play(),
        onEnterBack: () => timeLine.restart()
    }
}

function animaStroke(div, element) {
    if (element === logoPagina) {
        timeLine.fromTo(element, {
            strokeDashoffset: 200,
            scrollTrigger: scrollTriggerStroke(div)
        }, {
            strokeDashoffset: 0
        })
    } else {
        timeLine.fromTo(element, {
            strokeDashoffset: 200,
            scrollTrigger: scrollTriggerStroke(div)
        }, {
            strokeDashoffset: 10,
            fill: '#404040'
        }, "-= 0.75")
    }
}

export function animacoesStroke() {
    animaStroke(cabecalho, logoPagina)
}