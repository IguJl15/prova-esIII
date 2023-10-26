"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const produto = new Item_1.Produto(1, "produto", 10, 0.1);
const doacao = new Item_1.Doacao(1, "doacao", 10, 2);
const servico = new Item_1.Servico(1, "servico", 10, 2);
const totalizacoes = new Item_1.Totalizacoes();
console.log(totalizacoes.totalizar([produto, doacao, servico]));
