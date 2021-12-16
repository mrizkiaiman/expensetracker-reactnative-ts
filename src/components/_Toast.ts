import Toast from 'react-native-toast-message'

interface IPToast {
  message?: string
  type?: 'info' | 'success' | 'error'
}

export default function showToast(props: IPToast) {
  const {type, message} = props
  Toast.show({
    type,
    position: 'bottom',
    text1: 'Info',
    text2: message,
    visibilityTime: 1000 * 3,
    autoHide: true,
    bottomOffset: 24,
  })
}

export function hideToast() {
  Toast.hide()
}

export function errorToast(message: string) {
  showToast({message, type: 'error'})
}

export function successToast(message: string) {
  showToast({message, type: 'success'})
}

export function infoToast(message: string) {
  showToast({message, type: 'info'})
}
