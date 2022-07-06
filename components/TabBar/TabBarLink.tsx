import { useMemo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Home, Search, Tasks } from '../icons'
import { Icon } from '../icons/svgFactory'

export interface TabBarLinkProps {
  label: string
  focused: boolean
  onPress: () => void
}

export default function TabBarLink({
  label,
  focused,
  onPress,
}: TabBarLinkProps) {
  const color = useMemo(() => {
    switch (focused) {
      case false:
        return '#52525B'
      case true:
        return 'white'
    }
  }, [focused])

  const icon = useMemo(() => {
    switch (label) {
      case 'Home':
        return <Home fill={color} />
      case 'Search':
        return <Search fill={color} />
      case 'Tasks':
        return <Tasks fill={color} height={38} />

      default:
        break
    }
  }, [label, focused])

  return (
    <TouchableOpacity
      style={{
        height: 105,
        width: '33%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
      }}
      onPress={onPress}
    >
      {icon}
      <Text
        style={{
          fontWeight: '600',
          color: color,
          paddingTop: 2,
          position: 'absolute',
          bottom: 35,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
