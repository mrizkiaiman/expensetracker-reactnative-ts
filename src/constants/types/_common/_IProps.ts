export default interface IProps<T = any> {
  style?: Record<any, any>
  children?: any
  ref?: any
  key?: any
  route?: {
    params?: T
  }
}
