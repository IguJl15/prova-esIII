import { Doacao, Produto, Servico, Totalizacoes } from "./Item";

const produto = new Produto(1, "produto", 10, 0.1)
const doacao = new Doacao(1, "doacao", 10, 2)
const servico = new Servico(1, "servico", 10, 2)

const totalizacoes = new Totalizacoes()

console.log(totalizacoes.totalizar([produto,doacao,servico]))