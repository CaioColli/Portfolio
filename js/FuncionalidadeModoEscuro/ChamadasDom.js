export function chamadasDom() {
    const corpoSite = document.body
    const strings = document.querySelectorAll('li, h1, h2, h3, h4, a, p, span')
    const logoPagina = document.querySelector('#logo-pagina')
    const svgBurguer = document.querySelectorAll('.line')
    const cabecalhoMenuBurguer = document.querySelector('#cabecalho-mobile')
    const menuBurguer = document.querySelector('#conteudo-menu-hamburguer')
    const backgroundInicial = document.querySelector('#conteudo-inicial')
    const rostoCactoDesktopInicial = document.querySelector('.rosto-cacto')
    const apresentacaoInicial = document.querySelector('#escrita-apresentacao')
    const linhaFrontEndInicial = document.querySelector('#linha')
    const iconeSvgInicial = document.querySelectorAll('.icones-svg')
    const paragrafoDevInicial = document.querySelector('#dev')
    const backgroundProjetos = document.querySelector('#sec-projetos')
    const btnMaisProjetos = document.querySelector('#btn-projetos')
    const iconeBtnMaisProjetos = document.querySelector('#icone-mais-projetos')
    const cardsProjetos = document.querySelectorAll('#card')
    const cacebalhoCardProjetos = document.querySelectorAll('#cabecalho-card')
    const mensagemCabecalhoDataProjetos = document.querySelectorAll('#data-cabecalho')
    const divEmAndamentoProjetos = document.querySelectorAll('#msg-em-andamento')
    const mensagemEmAndamentoProjetos = document.querySelectorAll('#msg')
    const rodapeCardProjetos = document.querySelectorAll('#rodape-card')
    const cactoProjetos = document.querySelector('#cacto-projetos')
    const backgroundHabilidades = document.querySelector('#sec-habilidades')
    const fraseHabilidades = document.querySelector('#paragrafo-1')
    const iconesSvgHabilidades = document.querySelectorAll('.svg-habilidades')
    const backgroundRodape = document.querySelector('#rodape')
    const cardRodape = document.querySelector('#card-rodape')
    const fundoIlustracaoRodape = document.querySelector('#fundo-ilustracao')
    const iconesSvgRodape = document.querySelectorAll('#svg-rodape')
    const barraNavegacaoPaginas = document.querySelector('#barra-nav')
    const indicadorBarraNavegacao = document.querySelector('#indicador-barra')


    return [corpoSite, strings, logoPagina, svgBurguer, cabecalhoMenuBurguer, menuBurguer, backgroundInicial, rostoCactoDesktopInicial, apresentacaoInicial, linhaFrontEndInicial, iconeSvgInicial, paragrafoDevInicial, backgroundProjetos, btnMaisProjetos, iconeBtnMaisProjetos, cardsProjetos, cacebalhoCardProjetos, mensagemCabecalhoDataProjetos, divEmAndamentoProjetos, mensagemEmAndamentoProjetos, rodapeCardProjetos, cactoProjetos, backgroundHabilidades, fraseHabilidades, iconesSvgHabilidades, backgroundRodape, cardRodape, fundoIlustracaoRodape, iconesSvgRodape, barraNavegacaoPaginas, indicadorBarraNavegacao]
}