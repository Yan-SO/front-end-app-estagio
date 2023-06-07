import api from "../api";


export default async function deletarAtividade(id){
    try{
        await api.delete(`atividades/id=${id}`);
    }catch(err){
        console.log(err)
    }
}