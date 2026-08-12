import bcrypt from "bcryptjs"
import { Usuario, UsuarioRepository } from "./usuario.repository"

export default class UsuarioService {
    static async CriarUsuario(usuario: Usuario ) {

            const verificarEmailDuplicado = await UsuarioRepository.pegarUsuarioPorEmail(usuario.email)
            
            if (verificarEmailDuplicado){
                throw new Error("Esse Email ja existe. Tente novamente")
            }

            const senha = await bcrypt.hash(usuario.senha, 10)
            
            const usuarioObject: Usuario = {
                nome: usuario.nome,
                email: usuario.email,
                senha: senha
            }

            const novoUsuario = await UsuarioRepository.criarUsuario(usuarioObject)
            return novoUsuario
   
    }

    static async pegarUsuarios() {
        return UsuarioRepository.pegarUsuarios()
    }

    static async pegarUsuarioPorId(id: string) {
        return UsuarioRepository.pegarUsuarioPorId(id)

    }


    static async atualizarUsuario(id: string, usuarioAtualizado: Usuario) {
        
        let senhaProcessada = usuarioAtualizado.senha

        if (usuarioAtualizado.senha) {
            senhaProcessada = await bcrypt.hash(usuarioAtualizado.senha, 10)
            }

        const usuarioObject: Usuario = {
            ...usuarioAtualizado,
            senha: senhaProcessada
        }

        return await UsuarioRepository.atualizarUsuario(id, usuarioObject)

    }

    static async deletarUsuario(id: string) {
        
        return UsuarioRepository.deletarUsuario(id)
    }
}