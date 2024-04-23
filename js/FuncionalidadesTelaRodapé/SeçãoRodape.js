import { animacaoTelaRodape } from './AnimaçõesTelaRodape.js'
import { tamanhoTela } from '../Main.js'


if (tamanhoTela() >= 1366) {
    animacaoTelaRodape()
}