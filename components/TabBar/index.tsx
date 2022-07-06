import { View } from 'react-native'
import { Home } from '../icons'
import TabBarLink from './TabBarLink'

export default function TabBar() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <TabBarLink label={'Home'} focused={true} />
      <TabBarLink label={'Tasks'} focused={false} />
      <TabBarLink label={'Search'} focused={false} />
    </View>
  )
}
