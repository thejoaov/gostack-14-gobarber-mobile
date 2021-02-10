import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon'
import Text from '../../general/Text'

import { Container, StyledIcon } from './styles'
import { Props } from './types'

const LinkButton: React.FC<Props> = ({
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
