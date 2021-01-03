import React from 'react'
import { Text } from 'components'
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon'

import { Container, StyledIcon } from './styles'
import { LinkButtonProps } from './types'

const LinkButton: React.FC<LinkButtonProps> = ({
  color,
  title,
  icon,
  fontSize,
  ...props
}) => (
  <Container {...props}>
    {!!icon && (
      <StyledIcon name={icon} color={color as IconProps['color']} size={18} />
    )}

    <Text fontSize={fontSize} color={color} variant="regular">
      {title}
    </Text>
  </Container>
)

LinkButton.defaultProps = {
  width: '100%',
}

export default LinkButton
