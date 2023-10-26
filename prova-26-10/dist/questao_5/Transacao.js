"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = exports.Retirada = exports.Transferencia = exports.Deposito = exports.Transacao = void 0;
class Transacao {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
}
exports.Transacao = Transacao;
class Deposito extends Transacao {
    constructor(valor, data) {
        super(valor, data);
        this.discriminator = "Deposito";
    }
    calcularTaxa() {
        return 0.01 * this.valor;
    }
}
exports.Deposito = Deposito;
class Transferencia extends Transacao {
    constructor(valor, data) {
        super(valor, data);
        this.discriminator = "Transferencia";
    }
    calcularTaxa() {
        return 0.015 * this.valor;
    }
}
exports.Transferencia = Transferencia;
class Retirada extends Transacao {
    constructor(valor, data) {
        super(valor, data);
        this.discriminator = "Retirada";
    }
    calcularTaxa() {
        return 0.02 * this.valor;
    }
}
exports.Retirada = Retirada;
class Pagamento extends Transacao {
    constructor(valor, data) {
        super(valor, data);
        this.discriminator = "Pagamento";
    }
    calcularTaxa() {
        return 0;
    }
}
exports.Pagamento = Pagamento;
