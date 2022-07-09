import { useEffect } from 'react'
import { View } from 'react-native'
import { useProvider } from '../../contexts'
import AddTask from './Add'
import Task from './Task'

export default function TasksView() {
  const { tasks, setTasks } = useProvider()
  useEffect(() => {
    setTasks((prev) => {
      return [...prev, { task: '234234', done: true }]
    })
  }, [])

  return (
    <View>
      {tasks.map((task, index) => (
        <Task index={index} key={index} />
      ))}
      <AddTask />
    </View>
  )
}
