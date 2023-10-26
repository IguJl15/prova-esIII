import { Cliente } from "./Cliente";

export class Pedido {
    constructor(public valorTotal: number, public cliente: Cliente){}
}