import { Pagamento } from "./Transacao";
import { TransacaoRepository } from "./transacaoRepository";

const repo = new TransacaoRepository("./transacao.txt")

const transacao =new  Pagamento(10, new Date())


console.log(`taxa: ${transacao.calcularTaxa()}`)

repo.salvarTransacao(transacao)

const transacaoSalva = repo.lerTransacao()

console.log(transacaoSalva)
