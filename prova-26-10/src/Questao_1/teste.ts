import { CalcularDescontoUseCase } from "./CalcularDescontoUseCase";
import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";

const cliente = new Cliente("igor", [])

const pedido = new Pedido(10, cliente)

const calculadora = new CalcularDescontoUseCase()

const desconto = calculadora.calcularDesconto(pedido)

console.log(`o desconto para o pedido é ${desconto}`)