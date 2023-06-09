import { createContext, useState } from "react";


export const AlunoContext = createContext({});

export function AlunoProvider({children}){
    const [idAluno, setIdAluno] = useState(0);
    const [nomeAluno, setNomeAluno] = useState('');
    const [raAluno, setRaAluno] = useState('');
    const [emailAluno, setEmailAluno ] =useState('');
    const [senhaAluno, setSenhaAluno] = useState('');
    
    return (
        <AlunoContext.Provider 
        value={{
            idAluno, setIdAluno,
            nomeAluno, setNomeAluno, 
            raAluno, setRaAluno,
            emailAluno, setEmailAluno,
            senhaAluno,setSenhaAluno
        }}>
            {children}
        </AlunoContext.Provider>
    );
}