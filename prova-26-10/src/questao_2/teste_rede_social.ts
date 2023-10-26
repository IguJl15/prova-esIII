import { RedeSocial } from "./redesocial"

const messageValida = "Minha mensagem"
const messageInvalida = "  "


const service = new RedeSocial()

service.validAndPostMessage(messageValida)
service.validAndPostMessage(messageInvalida)