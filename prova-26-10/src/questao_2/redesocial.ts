class EmptyMessageError extends Error {
    message: string = "A mensagem não pode ser vazia..."
}



export class RedeSocial {
    validAndPostMessage(message: string) {
        if(message.trim().length == 0) {
            throw new EmptyMessageError()
        }

        console.log("Mensagem válida!")

        console.log("Mensagem postada: " + message)
    }
}

