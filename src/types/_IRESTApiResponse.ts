export default interface IRESTApiResponse<T = any> {
  status?: string
  severity?: string
  code?: string
  response: T
  message?: string
  errorMessage?: string
}
