import api from "../api";


export async function adicionarAtividade(titulo, pergunta,resposta,alternativa1,alternativa2, alternativa3, professor){
    try{
        const resp = await api.post('atividades',{
            titulo:titulo,
            pergunta:pergunta,
            resposta:resposta,
            alternativa1:alternativa1,
            alternativa2:alternativa2,
            alternativa3:alternativa3,
            professor:professor
        });
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
} 