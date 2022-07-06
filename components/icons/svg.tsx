import { StyleProp, View, ViewStyle } from 'react-native'
import Svg, { Color } from 'react-native-svg'
import { Wrapper } from '../types'

export interface SVGProps {
  style?: StyleProp<ViewStyle>
  viewbox?: string
  width?: number
  height?: number
  fill?: Color
}

export default function SVG({
  style = {},
  viewbox = '0 0 24 24',
  width = 40,
  height,
  children,
  fill,
}: SVGProps & Wrapper) {
  return (
    <Svg
      viewBox={viewbox}
      style={style}
      width={width}
      height={height}
      fill={fill}
    >
      {children}
    </Svg>
  )
}
