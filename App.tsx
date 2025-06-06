import {FlatList, StyleSheet, Text, View } from 'react-native';
import Jogos from './components/Jogos';
const jogos = [
  {"id":"1",nome: "The Elder Scrolls IV: Oblivion",preco: "R$ 32,99",plat: "PC"},
  {"id":"2",nome: "The Elder Scrolls III: Morrowind",preco: "R$ 32,99",plat: "PC"},
  {"id":"3",nome: "Deus Ex: Game of The Year Edition",preco: "R$ 28,99",plat: "PC"},
  {"id":"4",nome: "System Shock 2 (Classic)",preco: "R$ 19,99",plat: "PC"},
  {"id":"5",nome: "POSTAL 2",preco: "R$ 32,99",plat: "PC"},
  {"id":"6",nome: "Hatred",preco: "R$ 12,39",plat: "PC"},
  {"id":"7",nome: "F.E.A.R",preco: "R$ 16,99",plat: "PC"},
  {"id":"8",nome: "Half-Life 2",preco: "R$ 32,99",plat: "PC"},
  {"id":"9",nome: "Divinity Original Sin - Enhanced Edition",preco: "R$ 72,99",plat: "PC"},
  {"id":"10",nome: "Killing Floor",preco: "R$ 34,99",plat: "PC"},
  {"id":"11",nome: "Left 4 Dead",preco: "R$ 32,99",plat: "PC"},
  {"id":"12",nome: "XCOM 2",preco: "R$ 99,90",plat: "PC"}
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
