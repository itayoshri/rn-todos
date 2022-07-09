// the context responsible for handling storage

import { createContext, useState } from 'react'
import { Wrapper } from '../components/types'
import { ITask } from '../interfaces'
import { IProviderContext } from './types'
import { createUseContextHook } from './utils'

export const ProviderContext = createContext<IProviderContext>(
  {} as IProviderContext
)

export const useProvider = createUseContextHook(ProviderContext)

export default function DataProvider({ children }: Wrapper) {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <ProviderContext.Provider value={{ tasks, setTasks }}>
      {children}
    </ProviderContext.Provider>
  )
}
