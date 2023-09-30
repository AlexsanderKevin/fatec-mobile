import { useState } from 'react';
import { StyleSheet, Text, View,
TouchableOpacity, 
Image} from 'react-native';
import { TextInput } from 'react-native-web';

export default function Login() {
  const [ login, setLogin ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ sucesso, setSucesso ] = useState('')

  const handleSubmit = () => {
    setSucesso(login === 'admin' && senha === '1234')   
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={{height: 70, width: 150, marginBottom: 32}}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Login</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setLogin}
          value={login}
          placeholder={'fulano@email.com'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
          placeholder={'******'}
        />
      </View>

      { sucesso && (
        <Text
          style={{
            color: 'green',
          }}
        >Login efetuado com sucesso!!</Text>
      )}

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={handleSubmit}
        title='login'
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: '30px',
  },
  textInput: {
    border: '1px solid white',
    color: '#fff',
    padding: 16,
    borderRadius: 7,
  },
  inputLabel: {
    color: '#fff',
    marginBottom: 8,
  },
  buttonPrimary: {
    backgroundColor: '#353535',
    border: 'solid 1px #F0865B',
    borderRadius: 7,
    paddingVertical: 10, 
    paddingHorizontal: 20, 
  },
  buttonText: {
    color: '#F0865B',
  }
});
