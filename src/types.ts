export interface IProps {
  style?: Record<any, any>
  children?: any
  ref?: any
  key?: any
}

export type CommonTypes = {
  message: string
  title: string
  id: string
  obj: {}
  onPress: () => void
  onChangeText?: (text: string) => void
  navigation: {
    navigate: (path: string) => void
    goBack: () => void
  }
}
