import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { meusAlunos } from "../../../services/listar/meus_alunos";
import React, { useContext, useEffect, useState } from "react";
import { ProfessorContext } from "../../../contexts/professor/professorContext";
import { minhasAtividades } from "../../../services/listar/minhas_atividades_professor";
import ItemListaAtividades from "../../../components/intemListaAtividades";
import ItemListaAlunos from "../../../components/itemListaAluno";
import { useFocusEffect } from "@react-navigation/native";



export default function ListaMeus({route}){
    let ehDe= route.params.tipo;
    const styles = styleModelo();
    const { idProfessor } = useContext(ProfessorContext);
    const [lista, setLista]= useState([]);
    const [contador, setContador]= useState(0);

    const Footer =()=>{
        return <View style={styles.footerConteiner}>
            <TouchableOpacity style={styles.button}>
                <AntDesign name="caretleft" size={24} color="white" />
                <Text style={styles.text}> Voltar </Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}> Proximo </Text>
                <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity>
        </View>
    };

    useFocusEffect(React.useCallback(()=>{setContador((prevContador) => prevContador + 1)},[]));
    

    if(ehDe == "Minhas Atividades" || ehDe == "Apagar as Minhas Atividades"){
        useEffect(() => {
            async function buscarInfo(idProfessor) {
                const resp = await minhasAtividades(idProfessor);
                setLista(resp.content);
            }
            
            buscarInfo(idProfessor);
          }, [contador]);

          if(ehDe == "Apagar as Minhas Atividades"){
            return (
                <View>
                    <FlatList 
                        data={lista}
                        keyExtractor={(item)=> item.id}
                        renderItem={(item)=> <ItemListaAtividades deletar={true} item={item}/>}
                        ListFooterComponent={<Footer />}
                    />
                </View>
            );
          }
        return (
            <View>
                <FlatList 
                    data={lista}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=> <ItemListaAtividades item={item}/>}
                    ListFooterComponent={<Footer />}
                />
            </View>
        );
    }else{
        useEffect(() => {
            async function buscarInfo(idProfessor) {
                const resp = await meusAlunos(idProfessor);
                setLista(resp.content);
            }
          
            buscarInfo(idProfessor);
          }, [contador]);
          if(ehDe =="Apagar meus alunos"){
              return (
                  <View>
                      <FlatList 
                          data={lista}
                          keyExtractor={(item)=> item.id}
                          renderItem={(item)=> <ItemListaAlunos deletar={true} item={item}/>}
                          ListFooterComponent={<Footer />}
                      />
                  </View>
              );
        }
        return (
            <View>
                <FlatList 
                    data={lista}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item)=> <ItemListaAlunos item={item}/>}
                    ListFooterComponent={<Footer />}
                />
            </View>
        );
    }
}

const styleModelo =()=> (StyleSheet.create({
    footerConteiner:{
        marginVertical:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    button:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:20,
        width:150,
        backgroundColor:'#000',
        borderColor:'#919191',
        borderWidth:2,
        borderRadius:30
    },
    text:{
        color:'#fff',
        fontSize:16,
    },
}));