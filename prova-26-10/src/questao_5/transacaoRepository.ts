import * as fs from "fs"
import { Transacao } from "./Transacao";

export class TransacaoRepository {
    constructor(public caminho: string) {}

    salvarTransacao(transacao: Transacao): void {
        fs.writeFileSync(this.caminho, JSON.stringify(transacao))
    }

    lerTransacao(): Transacao {
        const content = fs.readFileSync(this.caminho, {encoding: 'utf8'})
        const transacao = JSON.parse(content)

        return transacao
    }
}