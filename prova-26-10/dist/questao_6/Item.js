"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Totalizacoes = exports.Doacao = exports.Servico = exports.Produto = exports.Item = void 0;
class Item {
    constructor(id, descricao, valor) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
}
exports.Item = Item;
class Produto extends Item {
    constructor(id, descricao, valor, taxa) {
        super(id, descricao, valor);
        this.taxa = taxa;
    }
    totalizar() {
        return this.valor * (1 + this.taxa);
    }
}
exports.Produto = Produto;
class Servico extends Item {
    constructor(id, descricao, valor, horas) {
        super(id, descricao, valor);
        this.horas = horas;
    }
    totalizar() {
        return this.valor * this.horas;
    }
}
exports.Servico = Servico;
class Doacao extends Item {
    constructor(id, descricao, valor, bonus) {
        super(id, descricao, valor);
        this.bonus = bonus;
    }
    totalizar() {
        return this.valor + this.bonus;
    }
}
exports.Doacao = Doacao;
class Totalizacoes {
    totalizar(totalizaveis) {
        let total = 0;
        for (let index = 0; index < totalizaveis.length; index++) {
            total += totalizaveis[index].totalizar();
        }
        return total;
    }
}
exports.Totalizacoes = Totalizacoes;
