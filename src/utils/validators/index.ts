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


