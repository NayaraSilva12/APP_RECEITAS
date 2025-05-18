import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'teste@email.com' && senha === '123456') {
      navigation.replace('Home'); // redireciona e remove o login da pilha
    } else {
      alert('E-mail ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.estadao.com.br/resizer/v2/RD3ZD2DLZBBFPLNWYWACIMVYBE.jpeg?quality=80&auth=e8c3b735c9db1b8295524af652b2addfee589437d52d1eed722eb7b06849edec&width=1075&height=527&focal=3139,2028' }}
        style={styles.imagem}
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
      <Text style={styles.cadastro}>Cadastrar-se</Text>
      </TouchableOpacity>
      
      <Text style={styles.cadastro}>Esqueceu a senha?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', // Centraliza todos os elementos horizontalmente
    padding: 20,
    backgroundColor: '#191970',
  },
 imagem: {
  width: '100%',        // faz a imagem ocupar a largura total do container
  height: 180,          // altura proporcional
  borderRadius: 10,     // bordas levemente arredondadas
  borderWidth: 2,       // espessura da borda
  borderColor: 'white', // cor da borda
  marginBottom: 20,
},
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center', 
    color: 'white',
  },
  input: {
    width: '100%', // Ocupa toda a largura do container com padding
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#C0C0C0',
  },
  cadastro: {
    marginTop: 20,
    fontSize: 16,
    color: '#007AFF', // azul padrão iOS
    textDecorationLine: 'underline',
  },
});
