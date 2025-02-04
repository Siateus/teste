import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TelaCadFun = () => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [date, setDate] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmpassword] = React.useState('');

  const handleRegister = () => {
    if (
      email &&
      password &&
      nome &&
      sobrenome &&
      cpf &&
      cargo &&
      date &&
      confirmpassword
    ) {
      alert('Cadastro realizado!');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSobrenome}
          value={sobrenome}
          placeholder="Sobrenome"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          placeholder="CPF"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCargo}
          value={cargo}
          placeholder="Cargo"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Data"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          onChangeText={setConfirmpassword}
          value={confirmpassword}
          placeholder="Confirmar Senha"
          secureTextEntry
        />
       
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleRegister}
            title="Registrar"
            color="#0000FF"
            accessibilityLabel="Clique para registrar"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 32,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});


export default TelaCadFun;
