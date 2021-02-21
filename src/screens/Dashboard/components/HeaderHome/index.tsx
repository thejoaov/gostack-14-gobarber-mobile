import React from 'react'
import { Avatar, Section, Text } from 'components'
import { useTheme } from 'styled-components/native'
import { useAuth } from 'core/hooks/AuthContext'

import { Container, Name } from './styles'
import { Props } from './types'

const HeaderHome: React.FC<Props> = ({ name, greeting, onPressAvatar }) => {
  const { user } = useAuth()
  const { colors } = useTheme()

  return (
    <Container>
      <Section margin={24}>
        <Text fontSize={20} color={colors.white} flex={1}>
          {greeting}
        </Text>
        <Name variant="medium">{name}</Name>
      </Section>
      <Section margin={24}>
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
