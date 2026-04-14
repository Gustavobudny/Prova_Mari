import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Data from '../../drivers/Data';

const [count, setCount] = useState(0);
const Aumentar = () => setCount(prevCount => prevCount + 1); //contador onde sempre aumenta 1
const Diminuir = () => setCount(prevCount => prevCount - 1); //contador onde sempre diminui 1

export default function Estoque() {
    return (
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>

            <TouchableOpacity style={styles.button} onPress={Aumentar}> {/*comando para apertar o botao e chamar a funcao */}
                <Text>Precione para adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={Diminuir}> {/*comando para apertar e diminuir e chamar a funcao */}
                <Text>Precione para diminuir</Text>
            </TouchableOpacity>

            <FlatList
            data={Data}
            renderItem={({id}) => <Item title={id.id} />} //busca pelo ida que possui para mostrar na tela
            keyExtractor={id => id.id} //a forma como puxa
            />
            <FlatList
            data={Data}
            renderItem={({imagem}) => <Item title={id.imagem} />} //busca pelo ida que possui para mostrar na tela
            keyExtractor={id => id.imagem} //a forma como puxa
            /> 
            <FlatList
            data={Data}
            renderItem={({nome}) => <Item title={id.nome} />} //busca pelo ida que possui para mostrar na tela
            keyExtractor={id => id.nome} //a forma como puxa
            />

            <FlatList
            data={Data}
            renderItem={({preco}) => <Item title={id.preco} />} //busca pelo ida que possui para mostrar na tela
            keyExtractor={id => id.preco} //a forma como puxa
            />
        </View>
        
    )
}