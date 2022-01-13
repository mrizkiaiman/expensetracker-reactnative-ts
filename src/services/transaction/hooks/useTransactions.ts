import React from 'react'
import { useQuery } from 'react-query'

import { getTransactions } from '@app/services/transaction/api'
import { TRANSACTION_LIST } from '@app/services/queryKeys'

export const useTransactions = () => {
  return useQuery(TRANSACTION_LIST, getTransactions)
}
