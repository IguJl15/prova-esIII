"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
class EmptyMessageError extends Error {
    constructor() {
        super(...arguments);
        this.message = "A mensagem não pode ser vazia...";
    }
}
class RedeSocial {
    validAndPostMessage(message) {
        if (message.trim().length == 0) {
            throw new EmptyMessageError();
        }
        console.log("Mensagem válida!");
        console.log("Mensagem postada: " + message);
    }
}
exports.RedeSocial = RedeSocial;
