import React from 'react'

import { Avatar } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { Container, NameContainer, Greeting, Name } from './styles'
import { HeaderProps } from './types'

const Header: React.FC<HeaderProps> = ({ name, greeting, onPressAvatar }) => {
  const { user } = useAuth()

  return (
    <Container>
      <NameContainer>
        <Greeting>{greeting}</Greeting>
        <Name variant="medium">{name}</Name>
      </NameContainer>

      <Avatar
        margin={24}
        src={{ uri: user?.avatar_url as string | undefined }}
        onPress={onPressAvatar}
      />
    </Container>
  )
}

Header.defaultProps = {}

export default Header
