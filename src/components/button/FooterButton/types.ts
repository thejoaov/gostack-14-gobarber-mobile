import { ViewProps } from 'react-native'
import { ColorProps, SpaceProps, WidthProps } from 'styled-system'

type Props = {
  title: string
}

export type FooterButtonProps = Props &
  ViewProps &
  WidthProps &
  SpaceProps &
  ColorProps
