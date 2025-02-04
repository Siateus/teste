import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  SafeAreaView, 
  StyleSheet, 
  Dimensions,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';

const { height } = Dimensions.get('window');

export default function TelaMensagem() {
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEnviar = () => {
    if (!email || !assunto || !mensagem) {
      Alert.alert('ERRO', 'Preencha todos os campos!');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('ERRO', 'E-mail inválido!');
      return;
    }

    Alert.alert('SUCESSO', 'Mensagem enviada com sucesso!');
    setEmail('');
    setAssunto('');
    setMensagem('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <Text style={styles.titulo}>Enviar Mensagem</Text>
        
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Assunto"
            value={assunto}
            onChangeText={setAssunto}
          />

          <TextInput
            style={[styles.input, styles.mensagemInput]}
            placeholder="Mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity 
          style={styles.botao} 
          onPress={handleEnviar}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: height * 0.04, // 4% da altura da tela
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: height * 0.03,
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: height * 0.02, // 2% da altura da tela
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: height * 0.02,
  },
  mensagemInput: {
    minHeight: height * 0.3, // Altura mínima de 30% da tela
    maxHeight: height * 0.5, // Altura máxima de 50% da tela
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: height * 0.02,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: height * 0.025,
  },
});