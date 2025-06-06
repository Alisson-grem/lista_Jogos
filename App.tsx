import {FlatList, StyleSheet, Text, View } from 'react-native';
import Jogos from './components/Jogos';
const jogos = [
  {"id":"1",nome: "Elden Ring: NigthReing",preco: "???",plat: "PS5,PC,XBOX'XS/XR"}
]


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lista de Jogos</Text>
      <View style={styles.lista}>
      <FlatList
        data={jogos}
        keyExtractor={item=>item.id}
        renderItem={({item}) => <Jogos  preco={item.preco} plat={item.plat} nome={item.nome} />}
      />
      </View>



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
  texto: {
    color:'#FFFFFF',
    fontSize: 20,
    fontWeight:'bold'
  },
  lista: {
    height: 550,
    width: '85%',
    marginLeft: '10%',
  },
});
