import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.subtitle1}>Let's login. Apply to jobs!!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Image
            source={require('../assets/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Image
            source={require('../assets/fb.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text style={styles.textRow}>
          Haven't an account? 
          <Text style={styles.registerText}> Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 70,
    color: '#007BFF',
  },
  subtitle: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  subtitle1: {
    marginBottom: 40,
    color: '#0D0D26',

   },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 17,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 17,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    width: 50,
    alignItems: 'center',
    marginBottom:40,
  },
  socialIcon: {
    width: 24,
    height: 24,
  
  },
  socialText: {
    fontSize: 18,
  },
  textRow:{
    textAlign: 'center'
  },
  registerText: {
    color: '#007BFF',
  },
});

export default LoginScreen;
