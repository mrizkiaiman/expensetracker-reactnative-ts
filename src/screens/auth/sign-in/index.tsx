import React, {useState} from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
import SignInImage from '@assets/illustrations/sign-in.svg'
//Components
import TextInput from '@components/TextInput'
import Button from '@components/Button'

interface ISLogin {}

const Login: React.FC<ISLogin> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('Test')
  }
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput label="Email" value={email} onChangeText={value => setEmail(value)} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={v => setPassword(v)}
      />
      <SignInImage />
      <Button title="Login" onPress={login} />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    marginTop: 32,
  },
})
