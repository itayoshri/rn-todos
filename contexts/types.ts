import { Dispatch } from 'react'
import { ITask } from '../interfaces'

export interface IProviderContext {
  tasks: ITask[]
  setTasks: Dispatch<React.SetStateAction<ITask[]>>
}
