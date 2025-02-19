import React, { useState } from 'react';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  SafeAreaView,
  Dimensions 
} from 'react-native';

const { width, height } = Dimensions.get('window');

const funcionariosIniciais = [
  {
    id: '',
    nome: '',
    email: '',
    cargo: '',
    status: '',
    horario: '',
    historico: ['', '']
  },
  {
    id: '',
    nome: '',
    email: '',
    cargo: '',
    status: '',
    horario: '',
    historico: ['', '']
  },
];

export default function TelaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState(funcionariosIniciais);
  const [busca, setBusca] = useState('');
  const [funcionarioSelecionado, setFuncionarioSelecionado] = useState(null);

  const filtrarFuncionarios = () => {
    return funcionarios.filter(funcionario =>
      funcionario.nome.toLowerCase().includes(busca.toLowerCase())
    );
  };

  const handleRemover = (id) => {
    setFuncionarios(funcionarios.filter(f => f.id !== id));
    setFuncionarioSelecionado(null);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>Funcionários</Text>
        
        <View style={styles.buscaContainer}>
          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar funcionário..."
            value={busca}
            onChangeText={setBusca}
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.botaoBusca}>
            <Text style={styles.textoBotaoBusca}> <Icon1 name="magnifier" /> </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filtrarFuncionarios()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemFuncionario}
            onPress={() => setFuncionarioSelecionado(item)}
          >
            <View style={styles.infoFuncionario}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.cargo}>{item.cargo}</Text>
            </View>

            <View style={styles.acoesContainer}>
              <View style={[styles.status, 
                { backgroundColor: item.status === 'ativo' ? '#4CAF50' : '#F44336' }]}
              />
              <TouchableOpacity 
                style={styles.botaoAcao}
                onPress={() => Alert.alert('Editar', `Editar ${item.nome}`)}
              >
                <Text style={styles.textoAcao}><Icon1 name="pencil" /></Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.botaoAcao}
                onPress={() => handleRemover(item.id)}
              >
                <Text style={styles.textoAcao}><Icon2 name= "trash" /> </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhum funcionário encontrado</Text>
        }
      />
      {funcionarioSelecionado && (
        <View style={styles.detalhesContainer}>
          <Text style={styles.detalhesTitulo}>Resumo do Funcionário</Text>
          
          <View style={styles.detalhesItem}>
            <Text style={styles.detalhesLabel}>Nome:</Text>
            <Text style={styles.detalhesValor}>{funcionarioSelecionado.nome}</Text>
          </View>
          
          <View style={styles.detalhesItem}>
            <Text style={styles.detalhesLabel}>Email:</Text>
            <Text style={styles.detalhesValor}>{funcionarioSelecionado.email}</Text>
          </View>
          
          <View style={styles.detalhesItem}>
            <Text style={styles.detalhesLabel}>Status:</Text>
            <Text style={[styles.detalhesValor, 
              { color: funcionarioSelecionado.status === 'ativo' ? '#4CAF50' : '#F44336' }]}
            >
              {funcionarioSelecionado.status.toUpperCase()}
            </Text>
          </View>
          
          <View style={styles.detalhesItem}>
            <Text style={styles.detalhesLabel}>Horário:</Text>
            <Text style={styles.detalhesValor}>{funcionarioSelecionado.horario}</Text>
          </View>

          <TouchableOpacity 
            style={styles.botaoHistorico}
            onPress={() => Alert.alert('Histórico', funcionarioSelecionado.historico.join('\n'))}
          >
            <Text style={styles.textoBotaoHistorico}>Ver Histórico Completo</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity 
        style={styles.botaoCadastro}
        onPress={() => Alert.alert('Cadastrar', 'Abrir tela de cadastro')}
      >
        <Text style={styles.textoBotaoCadastro}>+ Cadastrar Funcionário</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',  
    height: '100vh', 
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: '5%',
    backgroundColor: '#00BFFF(0, 191, 255, 0.75)',
  },
  header: {
    fontSize: height > 600 ? height * 0.04 : 24, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  titulo: {
    fontSize: height * 0.02,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBusca: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 45,
    marginRight: 10,
  },
  botaoBusca: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoBusca: {
    fontSize: 20,
  },
  itemFuncionario: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  infoFuncionario: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    color: '#666',
    fontSize: 14,
  },
  cargo: {
    color: '#00BFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  acoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  status: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  botaoAcao: {
    padding: 8,
  },
  textoAcao: {
    fontSize: 20,
  },
  listaVazia: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  detalhesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 3,
  },
  detalhesTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detalhesItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'baseline',
  },
  detalhesLabel: {
    width: 80,
    color: '#00BFFF',
    fontWeight: 'bold',
  },
  detalhesValor: {
    flex: 1,
    color: '#333',
  },
  botaoHistorico: {
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  textoBotaoHistorico: {
    color: 'white',
    fontWeight: 'bold',
  },
  botaoCadastro: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    margin: 20,
    alignItems: 'center',
    elevation: 3,
  },
  textoBotaoCadastro: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});