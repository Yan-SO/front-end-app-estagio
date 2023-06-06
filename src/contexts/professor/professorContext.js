import { createContext, useState } from "react";


export const ProfessorContext = createContext({});

export function ProfessorProvider({children}){
    const [idProfessor, setIdProfessor] = useState(0);
    const [nomeProfessor, setNomeProfessor] = useState('');
    const [emailProfessor, setEmailProfessor ] =useState('');
    const [senhaProfessor, setSenhaProfessor] = useState('');
    
    return (
        <ProfessorContext.Provider 
        value={{idProfessor, setIdProfessor,
            nomeProfessor, setNomeProfessor, 
            emailProfessor, setEmailProfessor,
            senhaProfessor,setSenhaProfessor
        }}>
            {children}
        </ProfessorContext.Provider>
    );
}