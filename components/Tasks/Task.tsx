import { Text, View } from 'react-native'
import DoneTick from './Done'

export interface TaskProps {
  task: string
  done: boolean
}

export default function Task({ task, done }: TaskProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 25,
      }}
    >
      <DoneTick done={done} />
      <View style={{ height: '100%', width: 12 }} />
      <Text style={{ color: 'white', fontWeight: '500' }}>{task}</Text>
    </View>
  )
}
