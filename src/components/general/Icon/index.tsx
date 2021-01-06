import theme from 'core/styles/theme'
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { IconContainer } from './styles'
import { IconProps } from './types'

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  semantic,
  ...props
}) => {
  const getColor = () => {
    if (!!semantic) {
      return String(theme.colors.semantic[semantic])
    }
    return String(color)
  }

  return (
    <IconContainer {...props}>
      <FeatherIcon name={name} size={size} color={getColor()} />
    </IconContainer>
  )
}

Icon.defaultProps = {
  color: theme.colors.white,
  size: 18,
}

export default Icon
