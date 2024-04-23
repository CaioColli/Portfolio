import { animacoesTelaInicial } from './AnimaçõesTelaInicial.js'
import { animacoesLinhaCodigo } from './AnimaçõesComputador.js'
import { animacoesLateral } from './AnimaçõesComputador.js'
import { animacoesStroke } from './AnimaçõesStroke.js'
import { animacoesHover } from './AnimaçõesHover.js'
import { animacaoLustre } from './AnimaçãoLuz.js'
import { tamanhoTela } from '../Main.js'

if (tamanhoTela() >= 1366) {
    animacoesTelaInicial()
    animacoesLinhaCodigo()
    animacoesLateral()
    animacoesStroke()
    animacoesHover()
    animacaoLustre() 
} 
