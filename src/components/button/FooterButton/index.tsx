import React from 'react'

import theme from 'core/styles/theme'
import { Container } from './styles'
import { FooterButtonProps } from './types'
import LinkButton from '../LinkButton'

const FooterButton: React.FC<FooterButtonProps> = ({ color, title, ...props }) => (
  <Container {...props}>
    <LinkButton title="Criar uma conta" color={color} />
  </Container>
)

FooterButton.defaultProps = {
  width: '100%',
  color: theme.colors.primary,
}

export default FooterButton
