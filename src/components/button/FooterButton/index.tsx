import React from 'react'

import theme from 'core/styles/theme'
import { Container } from './styles'
import { FooterButtonProps } from './types'
import LinkButton from '../LinkButton'

const FooterButton: React.FC<FooterButtonProps> = ({
  color,
  title,
  icon,
  ...props
}) => (
  <Container {...props}>
    <LinkButton title={title} color={color} icon={icon} />
  </Container>
)

FooterButton.defaultProps = {
  width: '100%',
  color: theme.colors.primary,
}

export default FooterButton
