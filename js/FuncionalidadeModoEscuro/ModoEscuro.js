import { chamadasDom } from './ChamadasDom.js'
import { chamadasScroll } from './ChamadasMudançasScroll.js'

const [corpoSite, strings, logoPagina, svgBurguer, cabecalhoMenuBurguer, menuBurguer, backgroundInicial, rostoCactoDesktopInicial, apresentacaoInicial, linhaFrontEndInicial, iconeSvgInicial, paragrafoDevInicial, backgroundProjetos, btnMaisProjetos, iconeBtnMaisProjetos, cardsProjetos, cacebalhoCardProjetos, mensagemCabecalhoDataProjetos, divEmAndamentoProjetos, mensagemEmAndamentoProjetos, rodapeCardProjetos, cactoProjetos, backgroundHabilidades, fraseHabilidades, iconesSvgHabilidades, backgroundRodape, cardRodape, fundoIlustracaoRodape, iconesSvgRodape, barraNavegacaoPaginas, indicadorBarraNavegacao] = chamadasDom()

const [style, fundoScrollClaro, fundoScrollDark] = chamadasScroll()

const checkBox = document.querySelector('#checkbox')
const lustreDesktop = document.querySelector('#lustre')

function background(element, valor) {
    element.style.backgroundColor = valor
}

function coloracao(element, valor) {
    element.style.color = valor
}

function preenchimento(element, valor) {
    element.style.fill = valor
}

function webKitContorno(element, valor) {
    element.style.webkitTextStrokeColor = valor
}

function contorno(element, valor) {
    element.style.stroke = valor
}

function exibicao(element, valor) {
    element.style.display = valor
}

function corBorda(element, valor) {
    element.style.borderColor = valor
}

function preenchimentoIcones(element, valor) {
    element.setAttribute('fill', valor)
}

const larguraTela = window.innerWidth

function modoDark() {
    
    // Uso Global
    background(corpoSite, '#373737')
    style.appendChild(document.createTextNode(fundoScrollDark))
    document.head.appendChild(style)
    strings.forEach((strings) => {
        coloracao(strings, '#FFFFFF')
    })

    // Tela Cabeçalho
    if(larguraTela > 1366) {
        contorno(logoPagina, '#6361A9')
    } else {
        contorno(logoPagina, '#FFFFFF')
    }

    svgBurguer.forEach((svg) => {
        contorno(svg, '#FFFFFF')
    })

    if(menuBurguer.style.display === 'block'){
        background(cabecalhoMenuBurguer, '#373737')
    }

    // Tela Incial
    background(backgroundInicial, '#774069')
    exibicao(rostoCactoDesktopInicial, 'none')

    preenchimento(apresentacaoInicial, '#FFFFFF')
    corBorda(linhaFrontEndInicial, '#FFFFFF')
    iconeSvgInicial.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#FFFFFF')
    })
    coloracao(paragrafoDevInicial, 'transparent')
    webKitContorno(paragrafoDevInicial, '#FFFFFF')

    // Tela Projetos 
    background(backgroundProjetos, '#4C3A69')
    background(btnMaisProjetos, '#FFFFFF')
    contorno(iconeBtnMaisProjetos, '#404040')
    cardsProjetos.forEach((cards) => {
        background(cards, '#A8A8A8')
    })
    cacebalhoCardProjetos.forEach((bg) => {
        background(bg, 'rgb(55, 55, 55, 50%)')
    })
    mensagemCabecalhoDataProjetos.forEach((msg) => {
        coloracao(msg, '#404040')
    })
    divEmAndamentoProjetos.forEach((bg) => {
        background(bg, 'rgb(55, 55, 55, 50%)')
    })
    mensagemEmAndamentoProjetos.forEach((msg) => {
        coloracao(msg, '#404040')
    })
    rodapeCardProjetos.forEach((bg) => {
        background(bg, '#373737')
    })

    exibicao(cactoProjetos, 'none')

    background(backgroundHabilidades, '#373737')

    coloracao(fraseHabilidades, 'rgb(255, 255, 255, 50%)')

    iconesSvgHabilidades.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#FFFFFF')
    })

    background(backgroundRodape, '#774069')
    
    background(cardRodape, '#373737')

    preenchimento(fundoIlustracaoRodape, '#774069')

    iconesSvgRodape.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#FFFFFF')
    })

    background(barraNavegacaoPaginas, 'rgb(255, 255, 255, 50%)')

    background(indicadorBarraNavegacao, '#FFFFFF')
}

function modoClaro() {
    // Uso global
    background(corpoSite, '#F6F4F6')
    style.appendChild(document.createTextNode(fundoScrollClaro))
    document.head.appendChild(style)
    strings.forEach((strings) => {
        coloracao(strings, '#404040')
    })

    // Tela Cabeçalho
    if(larguraTela > 1366) {
        contorno(logoPagina, '#6FDCBF')
    } else {
        contorno(logoPagina, '#FFFFFF')
    }
    
    svgBurguer.forEach((svg) => {
        contorno(svg, '#404040')
    })

    if(menuBurguer.style.display === 'block') {
        background(cabecalhoMenuBurguer, '#FEF8B4')
    }

    // Tela Inicial
    background(backgroundInicial, '#6FDCBF')
    exibicao(rostoCactoDesktopInicial, 'block')
    preenchimento(apresentacaoInicial, '#404040')
    corBorda(linhaFrontEndInicial, '#404040')
    iconeSvgInicial.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#404040')
    })
    coloracao(paragrafoDevInicial, 'transparent')
    webKitContorno(paragrafoDevInicial, '#404040')

    // Tela Projetos 
    background(backgroundProjetos, '#AE8FDB')
    background(btnMaisProjetos, '#404040')
    contorno(iconeBtnMaisProjetos, '#FFFFFF')
    cardsProjetos.forEach((cards) => {
        background(cards, '#FFFFFF')
    })
    cacebalhoCardProjetos.forEach((bg) => {
        background(bg, 'rgb(99, 97, 167, 70%)')
    })
    mensagemCabecalhoDataProjetos.forEach((msg) => {
        coloracao(msg, '#FFFFFF')
    })
    divEmAndamentoProjetos.forEach((bg) => {
        background(bg, 'rgb(99, 97, 167, 70%)')
    })
    mensagemEmAndamentoProjetos.forEach((msg) => {
        coloracao(msg, '#FFFFFF')
    })
    rodapeCardProjetos.forEach((bg) => {
        background(bg, '#6FDCBF')
    })

    exibicao(cactoProjetos, 'block')

    background(backgroundHabilidades, '#FEF8B4')

    coloracao(fraseHabilidades, 'rgb(64, 64, 64, 50%)')

    iconesSvgHabilidades.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#404040')
    })

    background(backgroundRodape, '#6FDCBF')
    
    background(cardRodape, '#F6F4F6')

    preenchimento(fundoIlustracaoRodape, '#6FDCBF')

    iconesSvgRodape.forEach(svg => {
        const pathElement = svg.querySelector('path')
        preenchimentoIcones(pathElement, '#373737')
    })

    background(barraNavegacaoPaginas, 'rgb(64, 64, 64, 50%)')

    background(indicadorBarraNavegacao, '#404040')
}

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        modoDark()
    } else {
        modoClaro()
    }
})

lustreDesktop.addEventListener('click', () => {
    checkBox.click()
})

paragrafoDevInicial.addEventListener('mouseenter', () => {
    if (checkBox.checked) {
        paragrafoDevInicial.style.color = '#FFFFFF'
    } else {
        paragrafoDevInicial.style.color = '#404040'
    }
})
