import * as Yup from 'yup'

const SignIn = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
})

const SignUp = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).max(30).label('Password'),
  name: Yup.string().required().min(3).max(30).label('Name'),
})

export default {SignIn, SignUp}
