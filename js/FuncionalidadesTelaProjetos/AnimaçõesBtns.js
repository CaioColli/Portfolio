const checkBox = document.querySelector('#checkbox')

const ancoraMaisProjetos = document.querySelector('#ancora-mais-projetos')
const btnProjetos = document.querySelector('#btn-projetos')
const svgBtn = document.querySelector('#svg-btn')

const criacaoTexto = document.createElement('p')
criacaoTexto.textContent = 'Mais projetos'
criacaoTexto.classList.add('texto-btn')

function animacaoBtnProjetos(element ,larguraInicial, larguraFinal) {
    gsap.fromTo(element, {
        width: larguraInicial
    }, {
        width: larguraFinal
    })
}

function animacaoTextoBtn(elementoPai, element, opacidadeInicial, opacidadeFinal) {
    elementoPai.appendChild(element)
    gsap.fromTo(element, {
        opacity: opacidadeInicial
    }, {
        opacity: opacidadeFinal
    })
}

let clicado = false

export function animacoesBtn() {
    btnProjetos.addEventListener('click', () => {
        if (!clicado) {
            svgBtn.style.opacity = '0'
            animacaoBtnProjetos(btnProjetos, 120 , 350)
    
            setTimeout(() => {
                animacaoTextoBtn(btnProjetos, criacaoTexto , 0 , 1)
            }, 300)
    
            ancoraMaisProjetos.removeAttribute('href')
            clicado = true
        } else {
            ancoraMaisProjetos.href = 'https://www.metasrc.com/lol'
            ancoraMaisProjetos.target = '_blank'
    
            animacaoTextoBtn(btnProjetos, criacaoTexto , 1 , 0)
            
            setTimeout(() => {
                animacaoBtnProjetos(btnProjetos, 350 , 120)
            }, 300)
    
            svgBtn.style.opacity = '1'
    
            clicado = false
        }
    })

    checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
            criacaoTexto.style.color = '#404040'
        } else {
            criacaoTexto.style.color = '#FFFFFF'
        }
    })
}

