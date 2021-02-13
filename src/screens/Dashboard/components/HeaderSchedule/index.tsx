import React from 'react'
import { useTheme } from 'styled-components/native'
import { Avatar, Icon, Section } from 'components'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useAuth } from 'core/hooks/AuthContext'

import { Container, BackButton, NameContainer, Name } from './styles'
import { Props } from './types'

const HeaderSchedule: React.FC<Props> = ({ title }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <Container>
      <StatusBar backgroundColor={colors.black.medium} />
      <BackButton onPress={(): void => navigation.goBack()}>
        <Icon name="arrow-left" color={colors.gray.gray} size={25} />
      </BackButton>
      <Section center>
        <Name fontSize={20}>{title}</Name>
      </Section>
      <Section mr={24} marginY={24}>
        <Avatar src={{ uri: user?.avatar_url as string }} />
      </Section>
    </Container>
  )
}

HeaderSchedule.defaultProps = {}

export default HeaderSchedule
