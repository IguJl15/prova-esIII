import { Pedido } from "./Pedido";

export class Cliente {
    constructor(public nome: string, public listaPedidos: Pedido[]){}
}

