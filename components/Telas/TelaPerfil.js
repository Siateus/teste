import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StyleSheet, 
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function TelaPerfil() {
  const [isActive, setIsActive] = useState(true);
  const [userData] = useState({
    nome: '',
    email: '',
    nascimento: '',
    cargo: '',
    foto: ''
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: userData.foto }}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Text style={styles.profileName}>{userData.nome}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <DetailItem label="E-mail" value={userData.email} />
          <DetailItem label="Data de Nascimento" value={userData.nascimento} />
          <DetailItem label="Cargo" value={userData.cargo} />
          
          <View style={styles.statusContainer}>
            <Text style={styles.detailLabel}>Status:</Text>
            <View style={styles.statusContent}>
              <View style={[styles.statusIndicator, { backgroundColor: isActive ? '#4CAF50' : '#F44336' }]} />
              <Text style={styles.statusText}>
                {isActive ? 'Ativo' : 'Inativo'}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => Alert.alert('Editar Perfil', 'Funcionalidade em desenvolvimento')}
        >
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const DetailItem = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

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
  profileHeader: {
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  profileImage: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: width * 0.175,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginBottom: 15,
  },
  profileName: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: width * 0.05,
  },
  detailItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  },
  detailLabel: {
    fontSize: height * 0.018,
    color: '#757575',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: height * 0.022,
    color: '#212121',
    fontWeight: '500',
  },
  statusContainer: {
    marginTop: 10,
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  statusText: {
    fontSize: height * 0.022,
    fontWeight: '500',
    color: '#212121',
  },
  editButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: width * 0.1,
    marginBottom: 20,
    elevation: 3,
  },
  editButtonText: {
    color: '#00BFFF',
    fontSize: height * 0.022,
    fontWeight: 'bold',
  },
});