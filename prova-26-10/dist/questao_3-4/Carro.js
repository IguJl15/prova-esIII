"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(quantidadeCombustivel, capacidadeCombustivelMaxima) {
        this.quantidadeCombustivel = quantidadeCombustivel;
        this.capacidadeCombustivelMaxima = capacidadeCombustivelMaxima;
    }
    get precisaAbastacer() {
        return this.quantidadeCombustivel < (this.capacidadeCombustivelMaxima * 0.10);
    }
    excedeCapacidade(quantidade) {
        return (this.quantidadeCombustivel + quantidade) > this.capacidadeCombustivelMaxima;
    }
    abastecer(quantidadeCombustivel) {
        if (!this.precisaAbastacer) {
            throw new Error("Voce nao precisa abastecer seu carro =)");
        }
        if (this.excedeCapacidade(quantidadeCombustivel)) {
            throw new Error("Voce excedeu a quantidade maxima de gasolina do seu veiculo");
        }
        this.quantidadeCombustivel += quantidadeCombustivel;
        return this.quantidadeCombustivel;
    }
}
exports.Carro = Carro;
