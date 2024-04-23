import { animacoesTelaHabilidades } from './AnimaçõesTelaHabilidades.js'
import { animacaoHabilidades } from './AnimaçõesHabilidades.js'
import { tamanhoTela } from '../Main.js'

if (tamanhoTela() >= 1366) {
    animacoesTelaHabilidades()
}

animacaoHabilidades()