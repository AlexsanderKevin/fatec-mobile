import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ProgressBarAndroidComponent, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [ login, setLogin ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ sucesso, setSucesso ] = useState('')

  const handleSubmit = () => {
    setSucesso(login === 'admin' && senha === '1234')   
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          padding: 16,
          marginTop: 50,
          border: '1px solid black'
        }}
        onChangeText={setLogin}
        value={login}
        placeholder={'login'}
      />

      <TextInput
        style={{
          padding: 16,
          marginTop: 50,
          border: '1px solid black',
          marginBottom: 20
        }}
        secureTextEntry={true}
        onChangeText={setSenha}
        value={senha}
        placeholder={'senha'}
      />

      { sucesso && (
        <Text
          style={{
            color: 'green',
          }}
        >Login efetuado com sucesso!!</Text>
      )}

      <Button
        onPress={handleSubmit}
        title='login'
        style={{
          marginTop: 20
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
