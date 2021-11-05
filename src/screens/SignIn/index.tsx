import React, {useState} from 'react'
import {View, SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useKeyboardListener} from '@hooks/index'

import {IProps} from '@app/constants/types/_common'
import routes from '@navigation/routes'
import {styles} from './styles'
import {RAW_COLORS} from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import {Input, Text, Button} from '@app/components'

interface IPSignIn extends IProps {}

const SignIn: React.FunctionComponent<IPSignIn> = props => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const keyboardVisibility = useKeyboardListener()

  const login = async () => {
  
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        {keyboardVisibility ? (
          <SignInImage style={{alignSelf: 'flex-start', marginTop: 64}} height={120} width={120} />
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
