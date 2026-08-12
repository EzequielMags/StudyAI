import prisma from "../../prisma";


export interface Usuario {
    email: string
    senha: string 
    nome: string
}

export class UsuarioRepository {

      static async pegarUsuarios() {
        return prisma.usuario.findMany()
    }
    
      static async pegarUsuarioPorId(id : string ) {
        return prisma.usuario.findUnique({
            where:{
                id: id
            }
        })
    }
    
      static async pegarUsuarioPorEmail(email: string) {
        return prisma.usuario.findUnique({
            where: {
                email: email
            }
        })
    }
    
      static async criarUsuario( usuario: Usuario) {
        return await prisma.usuario.create({
            data: {
                email: usuario.email ,
                nome: usuario.nome,
                senha: usuario.senha
            }
        })
    
    }
    
      static async atualizarUsuario(id: string, dadosAtualizados: Partial<Usuario>) {
        return await prisma.usuario.update({
            where: {
                id: id
            },
            data: {
                nome: dadosAtualizados.nome,
                email: dadosAtualizados.email,
                senha: dadosAtualizados.senha
            }
        })
    
        
    }
    
      static async deletarUsuario(id: string) {
        return await prisma.usuario.delete({
            where: {
                id: id
            }
        })
    }
}

