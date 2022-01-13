import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { SignInProps } from '@nav-types/index'

import { ISignInForm } from '@type/sign-in'
import { useLogin } from '@app/services/auth/hooks/useLogin'
import { useKeyboardListener } from '@hooks/index'
import { signInValidationSchema } from '@utils/validators/index'
import { styles } from './styles'
import { COLORS } from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import { FormikForm, FormikInput, FormikButton } from '@components/Formik'
import { Text, Button, Loader } from '@app/components'

const SignIn: React.FunctionComponent<SignInProps> = ({ navigation }) => {
  const keyboardVisibility = useKeyboardListener()
  const { data, isLoading, mutate } = useLogin()
  const initialValues: ISignInForm = {
    email: '',
    password: '',
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader loading={isLoading} />
      <View style={styles.contentContainer}>
        {keyboardVisibility ? (
          <SignInImage style={{ alignSelf: 'flex-start', marginTop: 64 }} height={120} width={120} />
        ) : (
          <SignInImage style={styles.illustrationImg} height={210} width={210} />
        )}
        <Text style={styles.title}>Sign in</Text>
        <FormikForm
          validationSchema={signInValidationSchema}
          initialValues={initialValues}
          onSubmit={(values: ISignInForm) => {
            mutate(values)
          }}>
          <FormikInput label={'Email'} placeholder="mrizkiaiman@tester.com" name={'email'} />
          <FormikInput label={'Password'} placeholder={'**********'} name={'password'} />
          <FormikButton title="Sign-in" style={styles.submitButton} />
        </FormikForm>
        <Text style={styles.navigateToSignUpText}>
          Don't have an account?{' '}
          <Text onPress={() => navigation.navigate('SIGN_UP')} style={{ color: COLORS.primary }}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
