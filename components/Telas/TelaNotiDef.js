import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TelaNotiDef({ route, navigation }) {
  const { notificacao } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.botaoVoltar}
        >
          <Text style={styles.textoBotaoVoltar}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Detalhes da Mensagem</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>De:</Text>
          <Text style={styles.valor}>{notificacao.email}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.valor}>{notificacao.data}</Text>
        </View>

        <View style={styles.mensagemContainer}>
          <Text style={styles.label}>Mensagem:</Text>
          <Text style={styles.mensagemTexto}>{notificacao.mensagem}</Text>
        </View>

        <TouchableOpacity 
          style={styles.botaoExcluir}
          onPress={() => {}}
        >
          <Text style={styles.textoBotaoExcluir}>Excluir Notificação</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  botaoVoltar: {
    marginRight: 15,
  },
  textoBotaoVoltar: {
    color: 'white',
    fontSize: 35,
    lineHeight: 35,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    elevation: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'baseline',
  },
  label: {
    color: '#00BFFF',
    fontWeight: 'bold',
    width: 80,
    fontSize: 16,
  },
  valor: {
    color: '#333',
    fontSize: 16,
    flex: 1,
  },
  mensagemContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
  },
  mensagemTexto: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  botaoExcluir: {
    backgroundColor: '#FF4444',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  textoBotaoExcluir: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
