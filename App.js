import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

const[peso, setPeso] = useState('');
const[exercicio, setExercicio] = useState('');

function calcularAgua(){

  alert((peso * 35) + (exercicio * 600));
}
  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={(p) => setPeso(p)}
      placeholder='Digite o seu peso'
      />

      <TextInput
      style={styles.input}
      onChangeText={(e) => setExercicio(e)}
      placeholder='Digite a quantidade de tempo que você faz exercicios (Em horas)'
      multiline={true}
      numberOfLines={2}

      />
      <TouchableOpacity
      onPress={calcularAgua}
      ><Text>Calcular</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  input:{
    margin: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
