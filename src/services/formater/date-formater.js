export function formatarData(data) {
    const dataObj = new Date(data);
    const hora = dataObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dia = dataObj.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
    return {
      hora,
      dia,
    };
}