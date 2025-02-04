import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, View, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const notifications = [
  {
    id: '1',
    email: 'cliente1@empresa.com',
    mensagem: 'Preciso de suporte técnico urgente!',
    data: '2024-03-20 14:30',
    lida: false
  },
  {
    id: '2',
    email: 'cliente2@empresa.com',
    mensagem: 'Solicito alteração no contrato...',
    data: '2024-03-20 09:15',
    lida: true
  },
];

export default function TelaNotificacao({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.notificacaoItem,
        !item.lida && styles.naoLida
      ]}
      onPress={() => navigation.navigate('NotificacaoDetalhes', { notificacao: item })}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </View>
      <Text 
        style={styles.mensagemPreview}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.mensagem}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>
      
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma notificação</Text>
        }
        contentContainerStyle={styles.listaContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  notificacaoItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  naoLida: {
    backgroundColor: '#d3d3d3',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  email: {
    fontWeight: 'bold',
  },
  data: {
    fontSize: 12,
    color: '#888',
  },
  mensagemPreview: {
    fontSize: 14,
    color: '#333',
  },
  listaVazia: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});
