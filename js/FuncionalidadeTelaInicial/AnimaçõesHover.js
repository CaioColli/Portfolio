const paragrafoDev = document.querySelector('#dev')

const emoji1 = document.querySelector('#emoji-dev-1')
const emoji2 = document.querySelector('#emoji-dev-2')
const emoji3 = document.querySelector('#emoji-dev-3')
const emoji4 = document.querySelector('#emoji-dev-4')
const emoji5 = document.querySelector('#emoji-dev-5')
const emoji6 = document.querySelector('#emoji-dev-6')
const emoji7 = document.querySelector('#emoji-dev-7')
const emoji8 = document.querySelector('#emoji-dev-8')
const emoji9 = document.querySelector('#emoji-dev-9')
const emoji10 = document.querySelector('#emoji-dev-10')



function animaEmoji(element, goPositionY , goYPositionX , positionEnd , delayTime) {
    const timeLine = gsap.timeline()

    timeLine.fromTo(element, {
        y: '0',
        x: '20px',
        opacity: 0,
        scale: 0.3
    }, {
        duration: 1,
        ease: 'power3.inOut',
        y: goPositionY,
        x: goYPositionX,
        opacity: 1,
        delay: delayTime
    }).to(element, {
        duration: 2,
        ease: 'power3.inOut',
        y: positionEnd,
        opacity: 0
    })
}

export function animacoesHover() {
    paragrafoDev.addEventListener('mouseenter', () => {
        animaEmoji(emoji1 , -80 , -90 , 1000 , 0)
        animaEmoji(emoji2 , -90 , -40 , 1000 , 0.5)
        animaEmoji(emoji3 , -60 , -50 , 1000 , 0.10)
        animaEmoji(emoji4 , -110 , -80 , 1000 , 0.15)
        animaEmoji(emoji5 , -80 , -10 , 1000 , 0.20)
        animaEmoji(emoji6 , -120 , 0 , 1000 , 0.25)
        animaEmoji(emoji7 , -60 , 20 , 1000 , 0.30)
        animaEmoji(emoji8 , -80 , 50 , 1000 , 0.35)
        animaEmoji(emoji9 , -30 , 40 , 1000 , 0.40)
        animaEmoji(emoji10 , -120 , 50 , 1000 , 0.45)

        //paragrafoDev.style.color = '#404040'
        paragrafoDev.style.webkitTextStrokeWidth = '0px'
    })
    
    paragrafoDev.addEventListener('mouseleave', () => {
        paragrafoDev.style.color = 'transparent'
        paragrafoDev.style.webkitTextStrokeWidth = '1.5px'
    })
}