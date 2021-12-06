export type AuthStackParamList = {
  SIGN_IN: undefined
  SIGN_UP: undefined
}

export type BottomTabParamList = {
  HOME: undefined
  ACCOUNT_LIST: undefined
  TRANSACTION_FORM_FIRST: undefined
  TRANSACTION_LIST: undefined
  PROFILE: undefined
}

export type AppStackParamList = {
  BOTTOM_TAB: BottomTabParamList
  TRANSACTION_FORM_FIRST: undefined
  TRANSACTION_FORM_SECOND: {
    transactionType?: {
      name: string
    }
  }
  ACCOUNT_LIST: undefined
  ACCOUNT_FORM: undefined
}
