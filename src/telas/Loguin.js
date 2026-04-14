import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Estoque from './Estoque';

export default function Loguin() {

    const [text, onChangeText] = React.useState('Useless Text'); //define o que aparecera na hora de escrever no imput
    const [number, onChangeNumber] = React.useState('');

    const navigation = Loguin(); 

    return(
        <View style={styles.container}>
            <Text style={styles.texto}> LOGUIN! </Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite seu Email" //o que vai estar escrito ate o usario digitar algo
                value={text} //o tipo que esse texto vai ser
                onChangeText={onChangeText}  
            />
            <TextInput 
                style={styles.input}
                placeholder="Digite sua Senha"  //o que vai estar escrito ate o usario digitar algo
                value={number} //o tipo que esse texto vai ser
                onChangeText={onChangeNumber}
            />

            <Button
            onPress={() => navigation.navigate(Estoque)} //navega ate o estoque quando o botao for precionado
            title="ENTRAR:"
            color="#cb6714ff"
            />
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
  texto: {
    fontSize: 30,
    fontFamily: 'arial',

  },
  input: {
    height: 40,
    margin: 12,
  }
});