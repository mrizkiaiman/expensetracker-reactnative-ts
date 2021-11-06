import React, {useState} from 'react'
import {View, SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {useKeyboardListener} from '@utils/hooks'
import {StackNavigationProp} from '@react-navigation/stack'
import {AuthStackParamList} from '@app/screens/_navigation/types/_params'
import {IProps} from '@app/constants/types/_common'
import {styles} from './styles'
import {COLORS} from '@styles/vars'

import SignInImage from '@assets/illustrations/sign-in.svg'
import {KeyboardAwareWrapper} from '@app/components/Wrapper'
import {FormikForm, FormikInput} from '@components/Formik'
import {Text, Button} from '@app/components'

type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SIGN_IN'>
interface IPSignUp extends IProps {}

const SignUp: React.FunctionComponent<IPSignUp> = props => {
  const navigation = useNavigation<SignUpScreenNavigationProp>()
  const keyboardVisibility = useKeyboardListener()

  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    name: '',
  })

  const submit_signUp = () => {}

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
          <FormikForm
            initialValues={initialValues}
            onSubmit={async ({resetForm, setSubmitting}: any) => {
              setSubmitting(true)
              resetForm()
            }}>
            <FormikInput label={'Name'} placeholder="Rizki Aiman" name={'name'} />
            <FormikInput label={'Email'} placeholder="mrizkiaiman@tester.com" name={'email'} />
            <FormikInput label={'Password'} placeholder={'**********'} name={'password'} />
          </FormikForm>
          <Button title="Sign-up" onPress={submit_signUp} />
          <Text style={styles.navigateToSignUpText}>
            Already have an account?{' '}
            <Text onPress={() => navigation.navigate('SIGN_IN')} style={{color: COLORS.primary}}>
              Sign in
            </Text>
          </Text>
        </View>
      </KeyboardAwareWrapper>
    </SafeAreaView>
  )
}

export default SignUp
