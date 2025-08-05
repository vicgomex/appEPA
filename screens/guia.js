import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function TelaGuia() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.barrinha}>
        <View style={styles.alinhar}>
          <Image
            source={require('../assets/Guia1.png')}
            style={styles.exImagem}
          />
        </View>
        <View>
          <Text style={styles.titulo}>O que é o TEA</Text>
          <Text style={styles.textinhos}>
            O autismo, conhecido cientificamente como Transtorno do Espectro
            Autista (TEA), é uma alteração no desenvolvimento neurológico, que
            se inicia na infância, e é caracterizado por dificuldades de
            comunicação e padrões de comportamentos, interesses e atividades que
            tendem a ser restritos e repetitivos.{'\n'}O diagnóstico em meninas
            é mais desafiador. Meninas autistas podem camuflar dificuldades
            sociais, seus intereses e habilidades sociais, o que dificulta o
            diagnóstico
          </Text>
        </View>

        <Text style={styles.titulo}>Sintomas</Text>
        <Text style={styles.textinhos}>
          Os sintomas do espectro autista são variados, não seguem um mesmo
          padrão. Então, papais, não se assustem caso seu pequenino apresente
          sintomas diferentes ao longo do tempo, ou até mesmo diferentes dos
          sintomas de outras crianças! Isso é completamente normal, mas vamos
          descobrir um pouco mais sobre isso?
        </Text>

        <Text style={styles.subtitulos}>Primeiros meses</Text>
        <Text style={styles.textinho}>
          • Desatenção à voz humana.{'\n'}• Preferência por objetos, perante à
          face humana.{'\n'}• Não há preferência entre um rosto sorridente,
          triste ou bravo.{'\n'}• O olhar não acompanha o afastamento da mãe.
          {'\n'}• Ausência de sons vocais.{'\n'}• O bebê não olha nos olhos da
          mãe durante a amamentação.{'\n'}• O bebê não imita ações humanas como
          sorrir, bocejar ou mostrar a língua.{'\n'}• O bebê não estende os
          braços para pedir colo.
        </Text>

        <Text style={styles.subtitulos}>1º aninho</Text>
        <Text style={styles.textinho}>
          • Não procura pelos pais enquanto os chama verbalmente.{'\n'}• Não dá
          “tchauzinho”.{'\n'}• Ainda não pronunciou nenhuma palavra
          compreensível.{'\n'}• Movimenta-se sem uma direção determinada.{'\n'}•
          Não indica nenhum desejo.{'\n'}• Não apresenta curiosidade pelas
          pessoas.
        </Text>

        <Text style={styles.subtitulos}>2º aninho</Text>
        <Text style={styles.textinho}>
          • A criança costuma não indicar desejos e quando o faz, usa a mão de
          terceiros para apontar.{'\n'}• Tem dificuldade em prestar atenção
          quando lhe apontam um objeto.{'\n'}• Não atende quando lhe chamam.
          {'\n'}• Não consegue demonstrar as emoções através de gestos e
          expressões faciais.{'\n'}• A criança é vista como “independente”.
          {'\n'}• A criança busca isolar-se dos demais.{'\n'}• Apresenta
          dificuldade durante festas e em ambientes com ruídos.
        </Text>

        <Text style={styles.subtitulos}>3-5 anos</Text>
        <Text style={styles.textinho}>
          • Comumente a criança já apresentou atraso na fala e ao frequentar a
          escola, surgem reclamações sobre seu comportamento.{'\n'}• Em alguns
          casos, estava indo tudo bem e a criança subitamente tem a fala
          suspendida.{'\n'}• 50% dos autistas não desenvolvem a linguagem até
          essa fase.{'\n'}• Ausência de contato visual, ou não o fazem de
          maneira eficaz.{'\n'}• Expressões faciais escassas.{'\n'}• A criança
          não aponta.{'\n'}• Age como se não ouvisse.{'\n'}• Apenas uma minoria
          compreende ordens complexas.{'\n'}• Costuma brincar com partes de
          brinquedos.{'\n'}• Fascinação por objetos que giram.{'\n'}• Enfileira
          brinquedos.{'\n'}• Algumas crianças brincam de forma adequada, porém
          têm dificuldade em brincar com outra criança da mesma idade.{'\n'}
          Estabelece uma rotina para si e para os outros.{'\n'}• Desgosto em
          mudar trajetos e a mobília da casa.{'\n'}• Sensibilidade a alguns
          tipos de sons.{'\n'}• Recusa alimentos com texturas diferentes.{'\n'}•
          Dificuldade em fazer a transição de alimentos pastosos para sólidos.
          {'\n'}• Dificuldades com texturas e etiquetas de roupas.
        </Text>

        <Text style={styles.subtitulos}>Quando suspeitar?</Text>
        <Text style={styles.textinho}>
          Esses são os sintomas mais comuns. Se notar que seu filho(a) apresenta
          dificuldades na interação, comunicação, gestos corporais ou
          desenvolvimento, você deve procurar um médico especializado para
          auxiliar e avaliar a criança para um possível diagnóstico.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF8F0'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center',
    paddingTop: 15,
    color: '#F8A06E'
  },
  textinhos: {
    color: '#0C090D',
    fontWeight: 500,
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 5
  },
    textinho: {
    color: '#0C090D',
    fontWeight: 500,
    fontSize: 15,
  },
  subtitulos: {
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
