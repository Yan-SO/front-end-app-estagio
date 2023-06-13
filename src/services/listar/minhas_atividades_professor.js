import api from "../api";

export async function minhasAtividades(idProfessor){
    try{
        const resp = await api.get(`/atividades/professor=${idProfessor}`);
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
}