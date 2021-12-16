import * as Yup from 'yup'

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
})

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
  name: Yup.string().required().min(3).max(30).label('Name'),
})

export const addTransactionValidationSchema = Yup.object().shape({
  account: Yup.string().required('Account is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  amount: Yup.number().min(1).label('Amount')
})

export const addAccountValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  accountType: Yup.string().required('Account type is required')
})


