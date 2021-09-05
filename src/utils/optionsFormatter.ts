import {IStdEntity, IOption} from '@app/types/index'

const formatOption = (item: IStdEntity): IOption => ({
  value: item._id,
  label: item.name,
})

export const optionsFormatter = (data: any[]) => {
  return data.map(formatOption)
}

// export const useCountryOptions = (): IOption[] => {
//   const countries = useSelector((state: RootStateType) => state.master?.countries?.data || [])
//   return countries.map(formatOption)
// }
