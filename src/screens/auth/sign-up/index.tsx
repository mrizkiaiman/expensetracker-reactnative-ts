import React, {useState, useEffect} from 'react'
import {StyleSheet, View, SafeAreaView, Keyboard} from 'react-native'
import colors from '@styles/colors'
import size from '@styles/size'

import SignInImage from '@assets/illustrations/sign-in.svg'
import TextInput from '@components/TextInput'
import Text from '@components/Text'
import Button from '@components/Button'
import {IProps, CommonTypes} from '@app/types'
import routes from '@navigation/routes'

interface ISSignUp extends IProps {
  navigation: CommonTypes['navigation']
}

const SignUp: React.FC<ISSignUp> = ({navigation}) => {
  const [name, setName] = useState('')
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
          <SignInImage style={{alignSelf: 'flex-start'}} height={110} width={110} />
        ) : (
          <SignInImage style={styles.illustrationImg} height={200} width={200} />
        )}
        <Text style={styles.title}>Sign up</Text>
        <TextInput label="Name" placeholder="M. Rizki Aiman" value={name} onChangeText={value => setName(value)} />
        <TextInput
          label="Email"
          placeholder="mrizkiaiman@tester.com"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          label="Password"
          placeholder="**********"
          value={password}
          onChangeText={value => setPassword(value)}
          isPassword
        />
        <Button title="Sign-up" onPress={login} />
        <Text style={styles.navigateToSignUpText}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate(routes.SIGN_IN)} style={{color: colors.primary}}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

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
  navigateToSignUpText: {
    textAlign: 'center',
    marginTop: 8,
  },
})
