import { animacoesTelaProjetos } from './AnimaçõesTelaProjetos.js'
import { animacoesBtn } from './AnimaçõesBtns.js'
import { animacoesCacto } from './AnimaçãoCacto.js'
import { tamanhoTela } from '../Main.js'

animacoesBtn()

if (tamanhoTela() >= 1366) {
    animacoesTelaProjetos()
    animacoesCacto()
}
