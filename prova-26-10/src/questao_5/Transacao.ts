
export abstract class Transacao {
    abstract discriminator: string;
    constructor(public valor: number, public data: Date){}

    abstract calcularTaxa(): number;
}


export class Deposito extends Transacao {
    discriminator: string = "Deposito"
    constructor(valor: number, data: Date) {
        super(valor, data)
    }


    calcularTaxa(): number {
        return 0.01 * this.valor
    }

}

export class Transferencia extends Transacao {
    discriminator: string = "Transferencia"
    constructor(valor: number, data: Date) {
        super(valor, data)
    }


    calcularTaxa(): number {
        return 0.015 * this.valor
    }

}

export class Retirada extends Transacao {
    discriminator: string = "Retirada"
    constructor(valor: number, data: Date) {
        super(valor, data)
    }


    calcularTaxa(): number {
        return 0.02 * this.valor
    }

}

export class Pagamento extends Transacao {
    discriminator: string = "Pagamento"
    constructor(valor: number, data: Date) {
        super(valor, data)
    }


    calcularTaxa(): number {
        return 0;
    }

}