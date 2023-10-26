"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularDescontoUseCase = void 0;
class CalcularDescontoUseCase {
    calcularDesconto(pedido) {
        return pedido.valorTotal * 0.1;
    }
}
exports.CalcularDescontoUseCase = CalcularDescontoUseCase;
