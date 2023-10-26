"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessarPedidoService {
    processarPedido(pedido) {
        pedido.cliente.listaPedidos.push(pedido);
        console.log("Calculando desconto");
        console.log("Salvando em DB");
    }
}
