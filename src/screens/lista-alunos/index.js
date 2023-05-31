import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ItemListaAlunos from "../../components/itemLista";
import { AntDesign } from '@expo/vector-icons';


const lisata = {
    content: [
        {
            id: 2,
            RA: 2518,
            nome: '2518',
            senha: 'senhaDo2518',
            email: '2518@gmail.com',
            professor: 1
        },
        {
            id: 3,
            RA: 2564,
            nome: 'jonny',
            senha: 'senhaDojonny',
            email: 'jonny@gmail.com',
            professor: 1
        }
    ],
    pageable: {
        sort: {
            empty: true,
            sorted: false,
            unsorted: true
        },
        offset: 0,
        pageSize: 20,
        pageNumber: 0,
        unpaged: false,
        paged: true
    },
    last: true,
    totalElements: 2,
    totalPages: 1,
    size: 20,
    number: 0,
    sort: {
        empty: true,
        sorted: false,
        unsorted: true
    },
    first: true,
    numberOfElements: 2,
    empty: false
}

export default function ListaMeusAlunos(){
    const retorno = lisata.content;
    const styles = styleModelo();

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

    return (
        <View>
            <FlatList 
                data={retorno}
                keyExtractor={(item)=> item.id}
                renderItem={(item)=> <ItemListaAlunos item={item}/>}
                ListFooterComponent={<Footer />}
            />
        </View>
    );
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