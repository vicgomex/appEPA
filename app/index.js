import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

export default function TelaFontes() {
  return (
    <View style={styles.container}>
          <View style={styles.alinhar}>
          
          <Text style={styles.titulo}>Fontes do conteúdo</Text>
      </View>

      <ScrollView style={styles.barrinha}>
      <Text style={styles.subs}>Páginas</Text>
        <Text style={styles.paginas}>
          Tua saúde{'\n'}
          Instituto singular{'\n'}
          Direitos e autismo
          Clínica Puzzle
        </Text>
      <Text style={styles.subs}>Links</Text>
        <Text style={styles.paginas}>
          https://www.neurologica.com.br/blog/sintomas-do-autismo-na-infancia-e-como-identificar-precocemente/
          {'\n'}
          https://www.indaiatuba.sp.gov.br/saude/primeiros-cuidados-com-o-bebe/ {'\n'}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8F0',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 800,
    paddingBottom: 10,
    color: '#F8A06E',
    textAlign: 'center'
  },
  paginas: {
    color: '#0C090D',
    fontWeight: 500,
    fontSize: 15,
    paddingTop: 5
  },

  subs: {
    paddingTop: 15,
    fontSize: 17,
    fontWeight: 700,
    color: '#51B5A3'
  },
  exImagem: {
    width: 150,
    height: 150,
  },
    alinhar: {
    alignItems: 'center',
  },
});
