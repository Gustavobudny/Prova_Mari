import { createStackNavigator } from "@react-navigation/stack";

import Estoque from "../telas/Estoque"; /*importacao da tela de estoque */
import Loguin from "../telas/loguin"; /*importacao da tela de loguin */

const Stack = createStackNavigator() /*constante para a navegação no meio do codigo */

export default function NavegacaoStack() {
    return(
            <Stack.Navigator style={styles.container}>
                <Stack.Screen name="Estoque" component={Estoque} /> {/*serve para a navegação do estoque para o loguin */}
                <Stack.Screen name="Loguin" component={Loguin} /> {/*serve para a navegação do loguin para o estoque */}
            </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c51ddbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
);