import { StyleProp, View, ViewStyle } from 'react-native'
import Svg from 'react-native-svg'
import { Wrapper } from '../types'

export interface SVGProps {
  style?: StyleProp<ViewStyle>
  viewbox?: string
  width?: number
  height?: number
}

export default function SVG({
  style = {},
  viewbox = '0 0 24 24',
  width,
  height,
  children,
}: SVGProps & Wrapper) {
  return (
    <Svg viewBox={viewbox} style={style} width={width} height={height}>
      {children}
    </Svg>
  )
}
