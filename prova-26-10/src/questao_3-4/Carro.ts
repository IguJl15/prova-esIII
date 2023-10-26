export class Carro {
    constructor(
        public quantidadeCombustivel: number,
        public capacidadeCombustivelMaxima: number
    ) {}

    
    public get precisaAbastacer() : boolean {
        return this.quantidadeCombustivel < (this.capacidadeCombustivelMaxima * 0.10)
    }

    public excedeCapacidade(quantidade: number): boolean {
        return (this.quantidadeCombustivel + quantidade) >  this.capacidadeCombustivelMaxima
    }

    public abastecer(quantidadeCombustivel: number): number {
        if(!this.precisaAbastacer) {
            throw new Error("Voce nao precisa abastecer seu carro =)")
        }

        if(this.excedeCapacidade(quantidadeCombustivel)) {
            throw new Error("Voce excedeu a quantidade maxima de gasolina do seu veiculo")
        }

        this.quantidadeCombustivel += quantidadeCombustivel;

        return this.quantidadeCombustivel
    }
    
}