import api from "../api";

export async function atividadesFeitas(idAluno){
    try{
        const resp = await api.get(`relacionamento/atividades-alunos/feitas=${idAluno}`);
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
} 