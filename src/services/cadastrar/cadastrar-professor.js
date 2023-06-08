import api from "../api";


export async function cadastrarProfessor(nome, email, senha){
    try{
        const resp = await api.post('professor',{
            nome:nome,
            email:email,
            senha:senha,
        });
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
} 