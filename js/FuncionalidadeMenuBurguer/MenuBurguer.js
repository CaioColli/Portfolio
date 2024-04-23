const iconeBurguer = document.querySelector('#checkbox-burguer')
const cabecalhoMenuBurguer = document.querySelector('#cabecalho-mobile')
const menuBurguer = document.querySelector('#conteudo-menu-hamburguer')
const checkBox = document.querySelector('#checkbox')

function funcionalidade(element, yPositionStart, yPositionEnd) {
    gsap.fromTo(element, {
        display: 'none',
        opacity: 0,
        y: yPositionStart
    }, {
        display: 'block',
        opacity: 1,
        y: yPositionEnd
    })
}

iconeBurguer.addEventListener('click', () => {
    if(iconeBurguer.checked) {
        funcionalidade(menuBurguer, -50 , 0)

        gsap.fromTo(cabecalhoMenuBurguer, {
            backgroundColor: 'transparent'
        }, {
            backgroundColor: '#FEF8B4'
        })
    } else {
        gsap.to(menuBurguer, {
            y: -50,
            opacity: 0,
            display: 'none'
        })

        gsap.to(cabecalhoMenuBurguer, {
            backgroundColor: 'transparent'
        })
    }
})
