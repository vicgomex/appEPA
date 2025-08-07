import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function TelaAuxilio() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.barrinha}>
        <View style={styles.alinhar}>

          <Image
            source={require('../assets/images/Auxilio1.png')}
            style={styles.exImagem}
          />
       <Text style={styles.titulo1}>Auxílio para pais</Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>
            Como preparar um ambiente acolhedor?{' '}
          </Text>
          <Text style={styles.textinho}>
            Não existe uma regra ou padrão para um ambiente acolhdor, tudo vai
            depender de como seu pequeno se comporta e as características que
            ele apresenta. Mas aqui temos algumas dicas para ajudar nesse
            processo: {'\n'}• Luzes suaves: evite claridade intensa.{'\n'}•
            Reduza ruídos: use tapetes, cortinas ou protetores auriculares.
            {'\n'}• Crie um cantinho seguro: um cantnho com almofadas,
            brinquedos sensoriais e objetos que a criança goste.{'\n'}• Mantenha
            a organização: ambientes previsíveis trazem segurança.{'\n'}
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Problemas para dormir </Text>
          <Text style={styles.textinho}>
            Crianças autistas podem enfrentar prolemas para dormir devido a
            sensibilidades sensoriais intensificadas, dificuldades na regulação
            emocional e a necessidade crucial de consistência nas rotinas.{' '}
            {'\n'}
            Entender isso é fundamental para oferecer apoio e criar ambientes
            propícios ao descanso.
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Sentar em "W" faz mal?</Text>
          <Text style={styles.textinho}>
            Essa posição é comum, mas quando repetida com frequência, pode
            afetar o desenvolvimento motor, equilíbrio e articulações.{'\n'}É
            importante incentivar outras formas de sentar, como de pernas
            ccuzadas ou estendidas.{'\n'}
            Caso houver resistência ou desconforto, procure um profissional para
            avaliação.
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Como incentivar a socialização?</Text>
          <Text style={styles.textinho}>
            Interações sociais podem ser desafiadoras, mas com apoio e
            estratégias é possível torná-las mais naturais e agradáveis!{'\n'}
            Algumas dicas são:{'\n'}• Ensine habilidades sociais por meio de
            brincadeiras guiadas.{'\n'}• Respeite o tempo da criança e evite
            forçar interações.{'\n'}• Use atividades estruturadas para
            esstimular a interação{'\n'}• Oriente as outras crianças sobre
            inclusão e empatia.{'\n'}
            Cada criança tem seu próprio ritmo!
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Autistas não têm emoções?</Text>
          <Text style={styles.textinho}>
            Isso é um mito! Pessoas autistas sentes emoções como qualquer outra
            pessoa, porém podem se expressar de maneira diferente.{'\n'}
            Cada indivíduo com espectro autista tem sua forma de demonstrar
            afeto, alegria ou frustração. {'\n'}Compreender e respeitar essas
            diferenças é essencial para uma sociedade mais inclusiva.
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Como motivar crianças autistas?</Text>
          <Text style={styles.textinho}>
            • Descubra os interesses dela.{'\n'}• Use reforçadores positivos.
            {'\n'}• Respeite o tempo dela.{'\n'}• Adapte os desafios.{'\n'}•
            Celebre as conquistas.{'\n'}
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>Como lidar com hiperfoco?</Text>
          <Text style={styles.textinho}>
            • Valorize o interesse da criança e use-o a favor do aprendizado.
            {'\n'}• Estabeleça limites saudáveis para evitar isolamento.{'\n'}•
            Introduza novas atividades de forma gradual.{'\n'}• Incentive pausas
            e momentos de relaxamento.{'\n'}
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>
            Como estabelecer uma rotina estruturada e previsível?
          </Text>
          <Text style={styles.textinho}>
            Uma rotina bem estruturada reduz a ansiedade, facilita o aprendizado
            e melhora a autonomia da criança. Algumas dicas para organizar a
            rotina são: • Estabeleça horários fixos para atividades essenciais.
            {'\n'}• Use quadros visuais ou pictogramas.{'\n'}• Avise sobre
            mudanças com antecedência.{'\n'}• Mantenha um ambiente organizado e
            previsível.{'\n'}
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>
            Como adaptar a comunicação para crianças não verbais?
          </Text>
          <Text style={styles.textinho}>
            • Uso de imagens(PECS).{'\n'}• Gestos e linguagem de sinais.{'\n'}•
            Aplicativos de comunicação.{'\n'}• Respeitar o tempo da criança para
            responder.{'\n'}
          </Text>
        </View>

        <View style={styles.duvidas}>
          <Text style={styles.titulo}>O TEA pode vir do excesso de telas?</Text>
          <Text style={styles.textinho}>
            Não, isso é um mito! O autismo é uma condição neurodesenvolvimental
            com causas ligadas a fatores genéticos e biológicos - e não ao tempo
            de exposição a dispositivos eletrônicos.
          </Text>
        </View>
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
    fontSize: 20,
    fontWeight: 600,
    color: '#FFF8F0',
    paddingBottom: 10,
    fontStyle: 'italic'
  },
    titulo1: {
    fontSize: 25,
    fontWeight: 800,
    paddingBottom: 10,
    color: '#F8A06E',
    textAlign: 'center'
  },
    textinho: {
    fontWeight: 500,
    fontSize: 15,
    color: '#FFF8F0'
  },
  exImagem: {
    width: 150,
    height: 150,
  },
  alinhar: {
    alignItems: 'center',
  },
  duvidas: {
    backgroundColor: '#51B5A3',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
});
