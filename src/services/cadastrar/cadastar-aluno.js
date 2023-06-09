import api from "../api";


export async function cadastrarAluno(ra, nome, email, senha){
    try{
        const resp = await api.post('aluno',{
            RA:ra,
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