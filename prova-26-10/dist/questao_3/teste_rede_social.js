"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const messageValida = "Minha mensagem";
const messageInvalida = "  ";
const service = new carro_1.RedeSocial();
service.validAndPostMessage(messageValida);
service.validAndPostMessage(messageInvalida);
