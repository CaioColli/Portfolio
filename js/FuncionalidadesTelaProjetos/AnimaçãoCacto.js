const secProjetos = document.querySelector('#sec-projetos')

const cacto = document.querySelector('#svg-cacto-projetos')
const balao = document.querySelector('#svg-balao-cacto')

const cactoEsquerdoBalao = document.querySelector('#cacto-esquerdo')
const fraseBalao = document.querySelector('#escrita-balao')
const cactoDireitoBalao = document.querySelector('#cacto-direito')

function scrollTriggerAnimacoes(element) {
    return {
        trigger: element,
        start: 'top center',
        end: 'center center',
        markers: false,
        onEnter: () => timeLine.restart()
        //Caso querer que a animação repita quando for de baixo para cima
        //onEnterBack: () => timeLine.restart()
    }
}

const timeLine = gsap.timeline()

function animacaoCacto(div, element, xPositionStart, yPositionStart, xPositionEnd, yPositionEnd) {
    timeLine.fromTo(element, {
        x: -xPositionStart,
        y: yPositionStart,
        opacity: 0
    }, {
        x: xPositionEnd,
        y: yPositionEnd,
        opacity: 1,
        duration: 1,
        scrollTrigger: scrollTriggerAnimacoes(div)
    })
}

function animaCactosBalao() {
    timeLine.fromTo(cactoEsquerdoBalao, {
        strokeDashoffset: 200
    }, {
        strokeDashoffset: 0,
        duration: 1.5
    }).fromTo(fraseBalao, {
        strokeDashoffset: 200
    }, {
        strokeDashoffset: 0,
        fill: '#404040',
        duration: 1.5
    }).fromTo(cactoDireitoBalao, {
        strokeDashoffset: 200
    }, {
        strokeDashoffset: 0,
        duration: 1.5
    }, "-= 0.50")
}

export function animacoesCacto() {
    animacaoCacto(secProjetos, cacto, 40 , 40 , -5 , 0)
    animacaoCacto(secProjetos, balao, 40 , 40 , -5 , 0)
    animaCactosBalao()
}