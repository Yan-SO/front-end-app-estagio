import api from "../api";

export async function todasAtividadesAluno(idAluno){
    try{
        const resp = await api.get(`relacionamento/atividades-alunos=${idAluno}`);
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
}