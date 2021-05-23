import React, {useState} from 'react'
import {StyleSheet, Text, View, SafeAreaView} from 'react-native'
//Components
import TextInput from '@components/TextInput'
import Button from '@components/Button'

interface ISLogin {}

const Login: React.FC<ISLogin> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput label="Email" value={email} onChangeText={v => setEmail(v)} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={v => setPassword(v)}
      />
      <Button title="Login" onSubmit={() => console.log('asd')} />
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
