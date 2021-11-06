import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {AuthStackParamList, BottomTabParamList, AppStackParamList} from '@app/screens/_navigation/types/_params'

export type SignInProps = NativeStackScreenProps<AuthStackParamList, 'SIGN_IN'>
export type SignUpProps = NativeStackScreenProps<AuthStackParamList, 'SIGN_UP'>
