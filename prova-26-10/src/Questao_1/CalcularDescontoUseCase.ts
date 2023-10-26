import { Pedido } from "./Pedido";

export class CalcularDescontoUseCase {
    public calcularDesconto(pedido: Pedido): number{
        return pedido.valorTotal * 0.1
    }
}