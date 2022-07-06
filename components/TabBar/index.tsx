import { View } from 'react-native'
import { BACKGROUND_COLOR } from '../../App'
import { Home } from '../icons'
import TabBarLink from './TabBarLink'

export default function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: BACKGROUND_COLOR,
      }}
    >
      {state.routes.map((route, index: number) => {
        const label = route.name

        const focused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: false,
          })

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <TabBarLink
            label={label}
            focused={focused}
            key={index}
            onPress={onPress}
          />
        )
      })}
    </View>
  )
}
