import { View } from 'react-native'
import { BACKGROUND_COLOR } from '../App'
import TasksView from '../components/Tasks'
import Task from '../components/Tasks/Task'

export default function HomeScreen() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      <TasksView />
    </View>
  )
}
