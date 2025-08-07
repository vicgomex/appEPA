import React, { useRef } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';



export default function TelaConteudo() {

const navegar = useRef(null);

  const paginasRef = useRef(null);
  const noticiasRef = useRef(null);
  const pesquisasRef = useRef(null);
  

  const handleScrollToSection = (ref) => {
    ref.current.measureLayout(
      navegar.current,
      (x, y) => {
        navegar.current.scrollTo({ y: y, animated: true });
      },
      (error) => console.log(error)
    );
  };


  function Pg1() {
    Linking.openURL('https://www.instagram.com/clinicapuzzle/');
  }
  function Pg2() {
    Linking.openURL('https://www.neurologica.com.br/?s=autismo&post_type=post');
  }
  function Pg3() {
    Linking.openURL('https://www.direitoseautismo.com.br/autismo/');
  }

  function Nt1() {
    Linking.openURL(
      'https://www.cnnbrasil.com.br/economia/macroeconomia/comissao-do-senado-aprova-isencao-de-imposto-de-renda-para-autistas/'
    );
  }
  function Nt2() {
    Linking.openURL(
      'https://www.cnnbrasil.com.br/saude/autismo-e-nutricao-o-impacto-dos-disturbios-alimentares-no-desenvolvimento/'
    );
  }
  function Nt3() {
    Linking.openURL(
      'https://www.cnnbrasil.com.br/entretenimento/spcine-promove-circuito-de-filmes-gratuitos-para-criancas-autistas/'
    );
  }
  function Nt4() {
    Linking.openURL(
      'https://www.cnnbrasil.com.br/saude/autismo-pode-estar-ligado-a-desequilibrio-de-proteinas-no-cerebro-diz-estu/'
    );
  }
    function Pq1() {
    Linking.openURL(
      'https://www.direitoseautismo.com.br/conheca-as-ultimas-descobertas-sobre-o-autismo/'
    );
  }
    function Pq2() {
    Linking.openURL(
      'https://www.bbc.com/portuguese/articles/ce82e211gy6o'
    );
  }
    

  return (
    <View style={styles.container}>
      <ScrollView style={styles.barrinha} ref={navegar}>

        <View style={styles.alinhar}>
          <Image
            source={('../assets/images/Conteudos1.png')}
            style={styles.exImagem}
          />
          <Text style={styles.titulo1}>Conteúdos e estudos</Text>
        </View>

  <View style={styles.navbar}>
          <TouchableOpacity
            title="Páginas"
            onPress={() => handleScrollToSection(paginasRef)}
            style={styles.botoes}
          >
           <Text style={styles.botaoTexto}> Páginas</Text>
      </TouchableOpacity>
    
          <TouchableOpacity
            title="Notícias"
            onPress={() => handleScrollToSection(noticiasRef)}
            style={styles.botoes}
          >
          <Text style={styles.botaoTexto}> Notícias</Text>
      </TouchableOpacity>

          <TouchableOpacity
            title="Pesquisas"
            onPress={() => handleScrollToSection(pesquisasRef)}
            style={styles.botoes}
          >
          <Text style={styles.botaoTexto}> Pesquisas</Text>
      </TouchableOpacity>
        </View>

        <View ref={paginasRef}>
          <Text style={styles.titulo}>Páginas</Text>
          <Text style={styles.textinho}>
            Uma das coisas que podem facilitar e ajudar os pais nessa nova
            jornada é acompanhar págidas relacionadas ao TEA. Ao buscar mais
            informações aprendemos novaas formas de lidar com cada diversidade e
            sintoma do autismo. {'\n'}
            Aqui temos algumas páginas e perfis que podem te ajudar bastante!
            {'\n'}{' '}
          </Text>
        </View>

        <View style={styles.agrupar}>
          <View style={styles.alinhar}>
            
          </View>

          <TouchableOpacity onPress={Pg1} style={styles.button}>
            <Text style={styles.textinho1}>Clínica Puzzle</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.agrupar}>
          <View style={styles.alinhar}>
            
          </View>

          <TouchableOpacity onPress={Pg2} style={styles.button}>
            <Text style={styles.textinho1}>Neurológica</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.agrupar}>
          <View style={styles.alinhar}>
           
          </View>

          <TouchableOpacity onPress={Pg3} style={styles.button}>
            <Text style={styles.textinho1}>Direitos e autismo</Text>
          </TouchableOpacity>
        </View>


        <View>
          <Text style={styles.titulo}>Notícias</Text>
          <Text></Text>
        </View>

        <View ref={noticiasRef}>
          <View style={styles.agrupar}>
            <TouchableOpacity onPress={Nt1} style={styles.button}>
              <Text style={styles.textinho}>
                Isenção de taxa de imposto de renda para autistas
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.agrupar}>
            <TouchableOpacity onPress={Nt2} style={styles.button}>
              <Text style={styles.textinho}>
                Autismo e nutrição: o impacto dos distúrbios alimentares no
                desenvolvimento
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.agrupar}>
            <TouchableOpacity onPress={Nt3} style={styles.button}>
              <Text style={styles.textinho}>
                Spcine promove circuito de filmes gratuitos para crianças
                autistas
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.agrupar}>
            <TouchableOpacity onPress={Nt4} style={styles.button}>
              <Text style={styles.textinho}>
                Novo estudo relaciona o autismo ao desequilíbrio de proteínas no
                cérebro
              </Text>
            </TouchableOpacity>
          </View>
        </View>

 <View ref={pesquisasRef}>
          <Text style={styles.titulo}>Pesquisas</Text>
        </View>

       <View style={styles.agrupar}>
            <TouchableOpacity onPress={Pq1} style={styles.button}>
              <Text style={styles.textinho}>
                Últimas descobertas sobre o autismo
              </Text>
            </TouchableOpacity>
          </View>
       <View style={styles.agrupar}>
            <TouchableOpacity onPress={Pq2} style={styles.button}>
              <Text style={styles.textinho}>
                Por que é tão difícil decifrar o mistério genético do autismo
              </Text>
            </TouchableOpacity>
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
    fontWeight: 800,
    paddingTop: 25,
    paddingBottom: 5,
    color: '#F8A06E',
    textAlign: 'center'
  },
    titulo1: {
    fontSize: 25,
    fontWeight: 800,
    paddingBottom: 10,
    color: '#F8A06E',
    textAlign: 'center'
  },
  textinho: {
    color: '#0C090D',
    fontWeight: 600,
    fontSize: 15,
    textAlign: 'center'
  },
    textinho1: {
    color: '#51B5A3',
    fontWeight: 600,
    fontSize: 15,
    textAlign: 'center'
  },
  agrupar: {
    borderWidth: 3,
    borderColor: '#51B5A3',
    borderRadius: 15,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
  },
  exImagem: {
    width: 150,
    height: 150,
  },
  botoes:{
    backgroundColor: '#51B5A3',
    padding: 15,
    margin: 5,
    borderRadius:10
  },
  botaoTexto: {
    color: '#FFF8F0',
    fontSize: 15,
    fontWeight: 500
  },
  alinhar: {
    alignItems: 'center',
  },
});
