import { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const TelaInicial = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF8F0',
  },

});

export default TelaInicial;
