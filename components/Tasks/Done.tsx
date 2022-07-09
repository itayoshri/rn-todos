import { TouchableOpacity } from 'react-native'
import { Done } from '../icons'

export default function DoneTick({ done }: { done: boolean }) {
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
    >
      {done ? <Done width={20} height={20} /> : null}
    </TouchableOpacity>
  )
}
