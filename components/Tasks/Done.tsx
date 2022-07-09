import { TouchableOpacity } from 'react-native'
import { useProvider } from '../../contexts'
import { Done } from '../icons'

export default function DoneTick({ index }: { index: number }) {
  const { tasks, setTasks } = useProvider()

  const done = tasks[index].done

  return (
    <TouchableOpacity
      style={{
        height: 30,
        width: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: done ? 'white' : '',
      }}
      onPress={() =>
        setTasks((prev) => {
          prev[index].done = !prev[index].done
          return [...prev]
        })
      }
    >
      {done ? <Done width={20} height={20} /> : null}
    </TouchableOpacity>
  )
}
