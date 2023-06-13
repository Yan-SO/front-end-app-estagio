import api from "../api";

export async function atividadesAFazer(idAluno){
    try{
        const resp = await api.get(`relacionamento/atividades-alunos/a-fazer=${idAluno}`);
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
} 