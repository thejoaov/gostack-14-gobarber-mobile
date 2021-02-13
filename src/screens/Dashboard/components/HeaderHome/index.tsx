import React from 'react'

import { Avatar, Section } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { Container, NameContainer, Greeting, Name } from './styles'
import { Props } from './types'

const HeaderHome: React.FC<Props> = ({ name, greeting, onPressAvatar }) => {
  const { user } = useAuth()

  return (
    <Container>
      <NameContainer>
        <Greeting>{greeting}</Greeting>
        <Name variant="medium">{name}</Name>
      </NameContainer>
      <Section margin={24} center>
        <Avatar
          src={{ uri: user?.avatar_url as string | undefined }}
          onPress={onPressAvatar}
        />
      </Section>
    </Container>
  )
}

HeaderHome.defaultProps = {}

export default HeaderHome
