import React, {useState} from 'react'
import {View, SafeAreaView} from 'react-native'

import {SignInProps} from '@nav-types/index'
import {ISignInForm} from '@type/sign-in'

import {useKeyboardListener} from '@hooks/index'
import {styles} from './styles'
import {COLORS} from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import {FormikForm, FormikInput} from '@components/Formik'
import {Text, Button} from '@app/components'

const SignIn: React.FunctionComponent<SignInProps> = ({navigation}) => {
  const keyboardVisibility = useKeyboardListener()
  const [initialValues, setInitialValues] = useState<ISignInForm>({
    email: '',
    password: '',
  })

  const submit_signIn = async () => {}

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        {keyboardVisibility ? (
          <SignInImage style={{alignSelf: 'flex-start', marginTop: 64}} height={120} width={120} />
        ) : (
          <SignInImage style={styles.illustrationImg} height={210} width={210} />
        )}
        <Text style={styles.title}>Sign in</Text>
        <FormikForm
          initialValues={initialValues}
          onSubmit={async ({resetForm, setSubmitting}: any) => {
            setSubmitting(true)
            resetForm()
          }}>
          <FormikInput label={'Email'} placeholder="mrizkiaiman@tester.com" name={'email'} />
          <FormikInput label={'Password'} placeholder={'**********'} name={'password'} />
        </FormikForm>

        <Button title="Sign-in" onPress={submit_signIn} />
        <Text style={styles.navigateToSignUpText}>
          Don't have an account?{' '}
          <Text onPress={() => navigation.navigate('SIGN_UP')} style={{color: COLORS.primary}}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
