import { Pedido } from "./Pedido";

class ProcessarPedidoService{
    public processarPedido(pedido: Pedido): void{
        pedido.cliente.listaPedidos.push(pedido)
        console.log("Calculando desconto")
        console.log("Salvando em DB")
    }
}