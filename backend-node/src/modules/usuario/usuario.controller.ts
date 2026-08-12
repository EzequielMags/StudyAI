import { FastifyReply, FastifyRequest } from "fastify";
import UsuarioService from "./usuario.service";
import { Usuario } from "./usuario.repository";
import { ConflictError } from "../../errors/errors";

class UsuarioController {
    static async criarUsuario(request: FastifyRequest , reply: FastifyReply) {
        try {
            const usuario = request.body as Usuario
            const dados = await UsuarioService.CriarUsuario(usuario)
            
            reply.status(201).send({message: "Usuario criado com Sucesso", usuario: dados})
        } catch (error) {
            if (error instanceof ConflictError) {
                reply.status(409).send({ message: error.message })
            } else {
                reply.status(500).send({ message: "Erro interno do servidor" })
            }
        }
    }
}