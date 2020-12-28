import { TextProps } from 'react-native'
import { SpaceProps, ColorProps, FlexboxProps } from 'styled-system'

export interface StyledeTextProps {
  children: React.ReactNode
  isBold?: boolean
}

export type Props = StyledeTextProps & SpaceProps & ColorProps & FlexboxProps & TextProps
