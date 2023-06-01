import api from "../api";


export async function verificaPraLoginAluno(RA, senha){
    try{
        const resultado = await api.put('aluno/login',{
            RA:RA,
            senha: senha
        });
        return resultado.data;
    }catch(err){
        console.log(err)
        return {};
    }
}
export async function verificaPraLoginProfessor(email, senha){
    try{
        const resultado = await api.put('professor/login',{
            email:email,
            senha: senha
        });
        return resultado.data;
    }catch(err){
        console.log(err)
        return {};
    }
}