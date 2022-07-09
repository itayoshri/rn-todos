import { Text, TouchableOpacity, View } from 'react-native'
import { useProvider } from '../../contexts'
import { Add } from '../icons'

const ADD_TASK = 'Add a task'

export default function AddTask() {
  const { setTasks } = useProvider()
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
      }}
      onPress={() =>
        setTasks((prev) => {
          return [...prev, { task: '', done: false }]
        })
      }
    >
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: 100,
          backgroundColor: '#f97316',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Add fill={'white'} />
      </View>
      <View style={{ height: '100%', width: 8 }} />
      <Text style={{ color: '#f97316', fontSize: 16, fontWeight: '600' }}>
        {ADD_TASK}
      </Text>
    </TouchableOpacity>
  )
}
