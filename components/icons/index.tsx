import { Path } from 'react-native-svg'
import { createSVGResource } from './svgFactory'

export const Done = createSVGResource(
  <Path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
)

export const Search = createSVGResource(
  <Path d="M0 0h24v24H0z" fill="none" />,
  <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
)

export const Home = createSVGResource(
  <Path d="M0 0h24v24H0z" fill="none" />,
  <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
)

export const Tasks = createSVGResource(
  <Path d="M0,0h24v24H0V0z" fill="none" />,
  <Path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M10.94,18L7.4,14.46l1.41-1.41 l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z" />
)

export const Add = createSVGResource(
  <Path d="M0 0h24v24H0V0z" fill="none" />,
  <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
)
