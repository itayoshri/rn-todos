import { Fragment } from 'react'
import SVG, { SVGProps } from './svg'

export type Icon = (props: SVGProps) => JSX.Element

export function createSVGResource(...children: JSX.Element[]): Icon {
  return function Resource(props: SVGProps) {
    return (
      <SVG {...props} style={[props.style]}>
        {children.map((child, i) => (
          <Fragment key={i}>{child}</Fragment>
        ))}
      </SVG>
    )
  }
}
