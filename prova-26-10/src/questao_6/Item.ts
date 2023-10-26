
export abstract class Item {
    constructor(public id: number, public descricao: string, public valor: number){}
}

export interface Totalizavel {
    totalizar(): number;
}


export class Produto extends Item implements Totalizavel {
    constructor(id: number, descricao: string, valor: number, public taxa: number) {
        super(id, descricao, valor)
    }

    totalizar(): number {
        return this.valor * (1 + this.taxa)
    }
}

export class Servico extends Item implements Totalizavel {
    constructor(id: number, descricao: string, valor: number, public horas: number) {
        super(id, descricao, valor)
    }

    totalizar(): number {
        return this.valor * this.horas
    }

}

export class Doacao extends Item implements Totalizavel {
    constructor(id: number, descricao: string, valor: number, public bonus: number) {
        super(id, descricao, valor)
    }

    totalizar(): number {
        return this.valor + this.bonus;
    }
}

export class Totalizacoes {
    totalizar(totalizaveis: Totalizavel[]){
        let total = 0;

        for (let index = 0; index < totalizaveis.length; index++) {
            total += totalizaveis[index].totalizar()
        }

        return total;
    }
}