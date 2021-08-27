import React, {useState} from 'react'
import {View, SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useKeyboardListener} from '@utils/hooks'

import {IProps} from '@app/types'
import routes from '@navigation/routes'
import {styles} from './styles'
import {RAW_COLORS} from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import {KeyboardAwareWrapper} from '@components/wrapper'
import {Input, Text, Button} from '@app/components'

interface IPSignUp extends IProps {}

const SignUp: React.FunctionComponent<IPSignUp> = props => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const keyboardVisibility = useKeyboardListener()

  const login = () => {
    console.log('Test')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareWrapper>
        <View style={styles.contentContainer}>
          {keyboardVisibility ? (
            <SignInImage style={{alignSelf: 'flex-start', marginTop: 32}} height={110} width={110} />
          ) : (
            <SignInImage style={styles.illustrationImg} height={200} width={200} />
          )}
          <Text style={styles.title}>Sign up</Text>
          <Input label="Name" placeholder="M. Rizki Aiman" value={name} onChangeText={value => setName(value)} />
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
          <Button title="Sign-up" onPress={login} />
          <Text style={styles.navigateToSignUpText}>
            Already have an account?{' '}
            <Text onPress={() => navigation.navigate(routes.SIGN_IN)} style={{color: RAW_COLORS.primary}}>
              Sign in
            </Text>
          </Text>
        </View>
      </KeyboardAwareWrapper>
    </SafeAreaView>
  )
}

export default SignUp
