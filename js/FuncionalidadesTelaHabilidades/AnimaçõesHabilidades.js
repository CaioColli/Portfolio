const secHabilidades = document.querySelector('#sec-habilidades')
const elementoPaiHabilidades = document.querySelector('#habilidades')
const habilidades = elementoPaiHabilidades.querySelectorAll('div')

function scrollTriggerAnimacaoHabilidades(element) {
    return {
        trigger: element,
        start: 'top center', 
        end: 'center center',
        scrub: true
    }
}

export function animacaoHabilidades() {
    gsap.fromTo(habilidades, {
        opacity: 0,
        y: -20,
        scrollTrigger: scrollTriggerAnimacaoHabilidades(secHabilidades),
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: scrollTriggerAnimacaoHabilidades(secHabilidades),
        duration: 3,
        stagger: 1
    })
}