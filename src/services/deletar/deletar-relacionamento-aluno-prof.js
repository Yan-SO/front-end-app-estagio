import api from "../api";


export default async function deletarRelacionamentoAlunoProf(Ra,email){
    try {
        const resp = await api.delete('relacionamento', {
          data: {
            email: email,
            Ra: Ra,
          },
        });
        return resp;
      } catch (err) {
        console.log(err);
        return err;
      }
}