import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Image
} from 'react-native';

export default function TelaCuidados() {
  const navegar = useRef(null);

  const alimentacaoRef = useRef(null);
  const medicosRef = useRef(null);
  const prevencaoRef = useRef(null);
  const cuidadosRef = useRef(null);
  const doresRef = useRef(null);
  const informacoesRef = useRef(null);

  const handleScrollToSection = (ref) => {
    ref.current.measureLayout(
      navegar.current,
      (x, y) => {
        navegar.current.scrollTo({ y: y, animated: true });
      },
      (error) => console.log(error)
    );
  };

  return (
     <View style={styles.container}>
  <ScrollView style={styles.barrinha} ref={navegar}>
          <View style={styles.alinhar}>
          <Image
            source={require('../assets/Cuidados1.png')}
            style={styles.exImagem}
          />
          <Text style={styles.titulo}>Cuidados básicos com bêbes</Text>
        </View>
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(alimentacaoRef)}
      >
        <Text style={styles.botaoTexto}>Alimentação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(medicosRef)}
      >
        <Text style={styles.botaoTexto}>Cuidados médicos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(prevencaoRef)}
      >
        <Text style={styles.botaoTexto}>Prevenção</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(cuidadosRef)}
      >
        <Text style={styles.botaoTexto}>Cuidados básicos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(doresRef)}
      >
        <Text style={styles.botaoTexto}>Incômodos comuns</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botoes}
        onPress={() => handleScrollToSection(informacoesRef)}
      >
        <Text style={styles.botaoTexto}>Informações gerais</Text>
      </TouchableOpacity>
    </View>


        <View ref={alimentacaoRef}>
          <Text style={styles.topicos}>Alimentação</Text>

          <Text style={styles.causa1}>Lactante 0 a 1 mês</Text>
          <Text style={styles.textinho}>
            Leite materno exclusivo, durante o dia não deixar mais de 4 horas
            sem oferecer o leite, ou seja, livre demanda, sem horários marcados,
            oferecendo quando o bebê necessitar (ele mama toda hora, e isso não
            significa que o “leite é fraco”, é uma característica normal para a
            idade). Não é necessário oferecer água, chá e sucos. Fórmulas de
            leite devem ser oferecidas somente por orientação do pediatra. Não
            permita que outra mulher amamente o bebê, ainda que seja da família
            e com saúde aparente. Evite o uso de bicos e chupeta.
          </Text>
        </View>

        <View ref={medicosRef}>
          <Text style={styles.topicos}>Cuidados médicos</Text>

          <Text style={styles.causa1}>Vacinação</Text>
          <Text style={styles.textinho}>
            Verificar o calendário e orientação do pediatra que acompanha a
            criança. Hepatite B e BCG (contra tuberculose) são aplicadas após o
            nascimento e com 1 mês a segunda dose de hepatite B, que pode ser
            adiada para os dois meses de idade. Verificar vacinação dos pais e
            cuidadores que devem também tomar a vacina contra gripe (influenza).
          </Text>

          <Text style={styles.causa}>Medicação</Text>
          <Text style={styles.textinho}>
            Vitamina D pode ser dada na dose de 200UI a 400UI diariamente até
            1ano de idade. Soro Fisiológico várias gotas ou puffs nas narinas
            quando necessário. Paracetamol 1 gota para cada kg de peso, ou na
            marca do peso quando for do tipo xarope com intervalo de seis horas
            em caso de febre e/ou dor. Toda medicação só pode ser administrada a
            criança após prescrição médica.
          </Text>

          <Text style={styles.causa}>Exames realizados após o nascimento</Text>
          <Text style={styles.textinho}>
            Teste do reflexo vermelho(olhos), pezinho, orelhinha, coração,
            língua e outros conforme avaliação do pediatra.
          </Text>

          <Text style={styles.causa}>Sinais de alerta</Text>
          <Text style={styles.textinho}>
            febre (maior de 37,5º) ou hipotermia, cianose (lábios e extremidades
            roxas), pele marmóreas, palidez intensa, icterícia (pele amarelada);
            desconforto respiratório, hipoatividade, irritabilidade intensa,
            regurgitação/vômitos frequentes, distensão abdominal, diminuição ou
            recusa alimentar, ganho ponderal insuficiente ou perda de peso. A
            presença desses sinais indicam a necessidade de avaliação do
            pediatra.
          </Text>
        </View>

        <View ref={cuidadosRef}>
          <Text style={styles.topicos}>Cuidados básicos</Text>

          <Text style={styles.causa1}>Banho de sol</Text>

          <Text style={styles.textinho}>
            Antes das 9 horas da manhã ou após as 17 horas, durante 20 minutos
            (face e mãos expostas – começar com 1 minuto e aumentar 1 minuto por
            dia até 20 minutos) ou cinco minutos só de fralda, necessário devido
            a vitamina D, que é importante para o crescimento dos ossos e
            dentes. Os olhos devem estar protegidos, para evitar que o sol
            incida diretamente sobre eles. Não pode tomar sol através de vidraça
            porque não causa o efeito benéfico desejado.
          </Text>

          <Text style={styles.causa}>Coto umbilical</Text>
          <Text style={styles.textinho}>
            Álcool 70% a cada troca de fraldas, se estiver úmido intensificar o
            uso do álcool 70%. Não é necessário cobrir. Se ocorrer sangramento,
            secreção ou vermelhidão ao redor do coto, procurar o pediatra.
          </Text>

          <Text style={styles.causa}>Sono</Text>
          <Text style={styles.textinho}>
            Dorme em média 15 a 16 horas por dia, mais de dia do que à noite, e
            o sono é racionado (acorda com frequência). No final do primeiro mês
            de vida, os períodos de sono noturno passam a ser mais longos. Deve
            dormir de barriga para cima, no berço, e se possível com a cabeça
            mais elevada do que os pés, quando a criança regurgita com
            frequência esta elevação deve ser de 30 graus. Não devendo ser
            levada para a cama dos pais, pelo risco de morte por sufocação.
          </Text>

          <Text style={styles.causa}>Asseio</Text>
          <Text style={styles.textinho}>
            Dar um banho por dia e se necessário mais, sabonete neutro
            glicerinado sem perfume, observe a temperatura da água do banho
            (teste com as costas da sua mão) e segure bem o bebê para evitar
            afogamento na banheira, proteja os ouvidos quando lavar a cabeça.
          </Text>
        </View>

        <View ref={prevencaoRef}>
          <Text style={styles.topicos}>Prevenção</Text>

          <Text style={styles.causa1}>Prevenção de doenças</Text>
          <Text style={styles.textinho}>
            Evite levar a criança para locais com muitas pessoas (Shopping,
            supermercado, bares, restaurantes, eventos em locais fechados,
            feiras, etc.); lave as mãos toda vez que for pegar o bebê e após
            trocas de fraldas; não usar perfumes, lavandas e talcos; evite o uso
            de amaciante na lavagem das roupas. Deve-se evitar contato com
            animais, insetos, pessoas doentes e limitar ao máximo as visitas.
          </Text>

          <Text style={styles.causa}>Prevenção de cáries</Text>
          <Text style={styles.textinho}>
            faça a higiene da boca do bebê após as mamadas, com gaze ou fralda
            limpa molhada em água filtrada e fervida; manter a boa saúde bucal
            dos cuidadores (pais, avós, babás).
          </Text>

          <Text style={styles.causa}>Prevenção de assaduras</Text>
          <Text style={styles.textinho}>
            não deixe a pele do bebê úmida; faça a higiene com água e sabão
            neutro durante a troca de fraldas. Evite o uso frequente de lenços
            umedecidos e perfumados.
          </Text>
        </View>

        <View ref={doresRef}>
          <Text style={styles.topicos}>Incômodos comuns</Text>

          <Text style={styles.causa1}>Cólicas</Text>
          <Text style={styles.textinho}>
            É normal até 3 meses de idade. Medidas úteis: compressa quente,
            massagem, movimentar as pernas como pedalar e se a cólica for muito
            forte procure orientação médica. Quando apresentar muitos gases pode
            ser dado Dimeticona 3 gotas 3 vezes ao dia.
          </Text>

          <Text style={styles.causa}>Vômitos e regurgitações</Text>
          <Text style={styles.textinho}>
            É normal até 3 meses de idade. Medidas úteis: compressa quente,
            massagem, movimentar as pernas como pedalar e se a cólica for muito
            forte procure orientação médica. Quando apresentar muitos gases pode
            ser dado Dimeticona 3 gotas 3 vezes ao dia.
          </Text>

          <View ref={informacoesRef}>
            <Text style={styles.topicos}>Informações gerais</Text>

            <Text style={styles.causa1}>Soluço</Text>
            <Text style={styles.textinho}>
              É normal. Deixe mamar mais um pouco que geralmente melhora.
            </Text>

            <Text style={styles.causa}>Espirro</Text>
            <Text style={styles.textinho}>
              É normal. Aplicar SORO FISIOLÓGICO várias gotas ou puffs nas
              narinas quando necessário.
            </Text>

            <Text style={styles.causa}>Febre</Text>
            <Text style={styles.textinho}>
              Temperaturas até 37,5 não são consideradas febre. A febre é um
              sinal de alerta (doença) e um mecanismo de defesa, portanto a
              medicação deve ser dada para amenizar o sofrimento. Não é
              necessário dar remédio se a criança está com febre e não apresenta
              sintomas de mal estar.
            </Text>

            <Text style={styles.causa}>Ritmo intestinal</Text>
            <Text style={styles.textinho}>
              quando toma só leite materno, a criança pode defecar enquanto
              mama, apresentar fezes líquidas e amarelas (semelhante a gema de
              ovo) várias vezes ao dia, ou pode ficar vários dias sem defecar,
              sem que isso signifique doença ou problema, desde que ela esteja
              bem, sem sinais de dor e desconforto. As fezes de cor totalmente
              branca, preta ou vermelha indicam doença.
            </Text>

            <Text style={styles.causa}>Choro</Text>
            <Text style={styles.textinho}>
              É a maneira que o bebe se comunica, podendo não ser sofrimento,
              verifique a fralda, roupa apertada, frio, calor, ambiente estranho
              ou barulhento, cólicas, etc. Faça carinho e converse de maneira
              tranquila. Evite pega-lo no colo toda vez que chorar
            </Text>
          </View>
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
    textinho: {
    color: '#0C090D',
    fontWeight: 500,
    fontSize: 15,
    paddingBottom:5
  },
  causa: {
    fontSize: 20,
    paddingTop: 15,
    color: '#51B5A3',
    fontWeight: 600
  },
  causa1: {
    fontSize: 20,
    paddingTop: 10,
    color: '#51B5A3',
    fontWeight: 600
  },
  topicos: {
    fontSize: 25,
    fontWeight: 800,
    paddingTop: 25,
    color: '#F8A06E',
    textAlign: 'center'
  },
    titulo: {
    fontSize: 25,
    fontWeight: 800,
    paddingBottom: 10,
    color: '#F8A06E',
    textAlign: 'center'
  },
  botoes:{
    backgroundColor: '#51B5A3',
    padding: 15,
    margin: 10,
    borderRadius:10
  },
  botaoTexto: {
    color: '#FFF8F0',
    fontSize: 15,
    fontWeight: 500
  },
  exImagem: {
    width: 150,
    height: 150,
  },
    alinhar: {
    alignItems: 'center',
  },
});
