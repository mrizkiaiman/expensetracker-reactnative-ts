import React, {useState, useEffect} from 'react'
import {StyleSheet, View, SafeAreaView, Keyboard} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import useAuth from '@app/auth/useAuth'

import myStyles from '@styles/index'
import {RAW_COLORS} from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import Input from '@app/components/Input'
import Text from '@components/Text'
import Button from '@components/Button'
import {IProps} from '@app/types'
import routes from '@navigation/routes'

interface IPSignIn extends IProps {}

const SignIn: React.FunctionComponent<IPSignIn> = props => {
  const navigation = useNavigation()
  const auth = useAuth()

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

  const login = async () => {
    await auth.logIn('testtoken')
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
        <Input
          label="Email"
          placeholder="mrizkiaiman@tester.com"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          label="Password"
          placeholder="**********"
          value={password}
          onChangeText={value => setPassword(value)}
          isPassword
        />
        <Button title="Sign-in" onPress={login} />
        <Text style={styles.navigateToSignUpText}>
          Don't have an account?{' '}
          <Text onPress={() => navigation.navigate(routes.SIGN_UP)} style={{color: RAW_COLORS.primary}}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: RAW_COLORS.background,
    flex: 1,
  },
  contentContainer: {
    ...myStyles.phOne,
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
