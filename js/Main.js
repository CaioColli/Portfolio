// Dessa forma é possivel importar todos elementos ao invés de importar um por um
import * as telaPricipal from './FuncionalidadeTelaInicial/SeçãoInicial.js'
import * as telaProjetos from './FuncionalidadesTelaProjetos/SeçãoProjetos.js'
import * as telaHabilidades from './FuncionalidadesTelaHabilidades/SeçãoHabilidades.js'
import * as telaRodape from './FuncionalidadesTelaRodapé/SeçãoRodape.js'
import * as ModosDeTela from './FuncionalidadeModoEscuro/ModoEscuro.js'
import * as Menuburguer from './FuncionalidadeMenuBurguer/MenuBurguer.js'
import * as navegacaoPaginas from './OutrasFuncionalidades/NavegaçãoPaginas.js'

window.onload = function() {
    setTimeout(() => { 
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    },1)
}

export function tamanhoTela() {
    return window.innerWidth
}