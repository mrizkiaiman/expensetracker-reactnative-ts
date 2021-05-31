import React, {useState, useEffect} from 'react'
import {StyleSheet, View, SafeAreaView, Keyboard} from 'react-native'
import SignInImage from '@assets/illustrations/sign-in.svg'
//Components
import TextInput from '@components/TextInput'
import Text from '@components/Text'
import Button from '@components/Button'
import colors from '@styles/colors'
import size from '@styles/size'

interface ISLogin {}

const Login: React.FC<ISLogin> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true)
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false)
    })

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const login = () => {
    console.log('Test')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        {isKeyboardVisible ? (
          <SignInImage style={{alignSelf: 'flex-start'}} height={120} width={120} />
        ) : (
          <SignInImage style={styles.illustrationImg} height={210} width={210} />
        )}
        <Text style={styles.title}>Sign in</Text>
        <TextInput
          label="Email"
          placeholder="mrizkiaiman@tester.com"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          isPassword
        />
        <Button title="Sign-in" onPress={login} />
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: size.HORIZONTAL,
    paddingTop: 64,
  },
  illustrationImg: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Prompt_700Bold',
    marginVertical: 28,
  },
})
