import { Text, TextInput, View } from 'react-native'
import { useProvider } from '../../contexts'
import { ITask } from '../../interfaces'
import DoneTick from './Done'

export interface TaskProps {
  index: number
}

export default function Task({ index }: TaskProps) {
  const { tasks, setTasks } = useProvider()

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
      <DoneTick index={index} />
      <View style={{ height: '100%', width: 12 }} />
      <TextInput
        style={{ color: 'white', fontWeight: '500', flexGrow: 1 }}
        onChangeText={(newInput) =>
          setTasks((prev) => {
            prev[index].task = newInput
            return [...prev]
          })
        }
      />
    </View>
  )
}
