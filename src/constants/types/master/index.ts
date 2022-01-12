export interface IExperienceResponse {
  _id: string
  rating: string
}

export interface IMeasurementResponse {
  _id: string
  name: string
}

export interface ITransactionTypeResponse {
  _id: string
  name: string
  img?: string
}

export interface IAccountTypeResponse {
  _id: string
  name: string
  img?: string
}

export interface ICategoryResponse {
  _id: string
  name: string
  img?: string
  forAccount?: boolean
}
