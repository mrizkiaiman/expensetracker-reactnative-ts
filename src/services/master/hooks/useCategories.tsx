import React from 'react'
import { useQuery } from 'react-query'

import { getMasterCategories } from '@app/services/master/api'
import { MASTER_CATEGORIES } from '@app/services/queryKeys'

export const useCategories = () => {
  return useQuery(MASTER_CATEGORIES, getMasterCategories)
}
