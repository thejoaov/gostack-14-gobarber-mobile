import React from 'react'

import { Avatar } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { Container, NameContainer, Greeting, Name } from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ name, greeting }) => {
  const { user } = useAuth()

  return (
    <Container>
      <NameContainer>
        <Greeting>{greeting}</Greeting>
        <Name>{name}</Name>
      </NameContainer>
      <Avatar src={user?.avatar_url || ''} />
    </Container>
  )
}

Header.defaultProps = {}

export default Header
