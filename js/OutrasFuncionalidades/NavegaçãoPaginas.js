const btnNavInicial = document.querySelector('#nav-inicial')
const btnNavProjetos = document.querySelector('#nav-projetos')
const btnNavHabilidades = document.querySelector('#nav-habilidades')
const btnNavContato = document.querySelector('#nav-contato')

btnNavInicial.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})

btnNavProjetos.addEventListener('click', () => {
    window.scrollTo({
        top: 967
    })
})

btnNavHabilidades.addEventListener('click', () => {
    window.scrollTo({
        top: 2022
    })
})

btnNavContato.addEventListener('click', () => {
    window.scrollTo({
        top: 3100
    })
})

const barraNavPaginas = document.querySelector('#indicador-barra')

function animacaoBarraNav(posicao) {
    gsap.to(barraNavPaginas, {
        y: posicao,
        duration: 1
    })
}

window.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop

    switch (true) {
        case scroll >= 0 && scroll < 967:
            animacaoBarraNav(0)   
            break
        case scroll >= 967 && scroll < 2022:
            animacaoBarraNav(50)
            break
        case scroll >= 2022 && scroll < 3100:
            animacaoBarraNav(100)
            break
        case scroll > 3097:
            animacaoBarraNav(155)
            break
    }
})