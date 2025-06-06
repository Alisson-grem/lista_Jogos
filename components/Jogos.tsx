import {View, Text, StyleSheet} from 'react-native';

interface propsJogos{
    nome:string,
    preco:string
    plat:string
}

export default function Jogos({nome, preco, plat}:propsJogos){

    return(
            <View style={styles.cartao}>
                <Text style={styles.nome}>
                    Nome: {nome}
                </Text>
                <Text style={styles.preco}>
                    Preço: {preco} 
                </Text>
                <Text style={styles.plat}>
                    Plataforma: {plat}
                </Text>
            </View>
    );



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
      backgroundColor:"#4F4F4F",
      padding:15,
      marginVertical:20,
      borderRadius:20,
      width:'90%',
  },
  nome: {
    color:"#DCDCDC",
    fontSize:17,
    fontWeight:'bold'
  },
  preco: {
    fontSize: 17,
    color: "#DCDCDC",
    fontWeight: 'bold',
  },
  plat: {
    fontSize: 17,
    color: "#DCDCDC",
    fontWeight: 'bold',
  }
});