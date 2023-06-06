import api from "../api";

export async function meusAlunos(idProfessor){
    try{
        const resp = await api.get(`relacionamento/meus-alunos/professor=${idProfessor}`);
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
}