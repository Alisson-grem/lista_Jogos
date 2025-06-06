import {View, Text, StyleSheet} from 'react-native';

interface propsJogos{
    nome:string,
    preco:string
    plat:string
}

export default function Jogos({nome, preco,plat}:propsJogos){

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao: {
      backgroundColor:"#7B68EE",
      padding:15,
      marginVertical:20,
      borderRadius:20,
      width:'90%',
  },
  nome: {
    color:"#00FF00",
    fontSize:17,
    fontWeight:'bold'
  },
  preco: {
    fontSize: 17,
    color: "#00FF7F",
    fontWeight: 'bold',
  },
  plat: {

  }
});