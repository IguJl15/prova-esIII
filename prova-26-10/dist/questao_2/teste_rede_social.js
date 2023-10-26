"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redesocial_1 = require("./redesocial");
const messageValida = "Minha mensagem";
const messageInvalida = "  ";
const service = new redesocial_1.RedeSocial();
service.validAndPostMessage(messageValida);
service.validAndPostMessage(messageInvalida);
