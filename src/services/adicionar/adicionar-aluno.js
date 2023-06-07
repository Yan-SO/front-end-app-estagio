import api from "../api";


export async function adicionarAluno(ra, emailProfessor){
    try{
        const resp = await api.post('relacionamento/add-aluno',{
            alunoRA:ra,
            emailProfessor:emailProfessor
        });
        return resp.data;
    }catch(err){
        console.log(err)
        return {};
    }
} 