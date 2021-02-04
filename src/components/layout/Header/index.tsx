import React from 'react'

import { Avatar } from 'components'
import { Container, NameContainer, Greeting, Name } from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ name, greeting }) => (
  <Container>
    <NameContainer>
      <Greeting>{greeting}</Greeting>
      <Name>{name}</Name>
    </NameContainer>
    <Avatar src="https://odia.ig.com.br/_midias/jpg/2020/10/02/1637z75ryqnj7dfso1bvrz839-19948053.jpg" />
  </Container>
)

Header.defaultProps = {}

export default Header
