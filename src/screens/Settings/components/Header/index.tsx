import React from 'react'
import { useTheme } from 'styled-components/native'
import { Icon, Section, Text } from 'components'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import { Container, BackButton, LogoutButton } from './styles'
import { Props } from './types'

const Header: React.FC<Props> = ({ title }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <StatusBar backgroundColor={colors.background} />
      <BackButton onPress={(): void => navigation.goBack()}>
        <Icon name="arrow-left" color={colors.gray.gray} size={25} />
      </BackButton>
      <Section margin={24}>
        <Text fontSize={20}>{title}</Text>
      </Section>
      <LogoutButton onPress={(): void => navigation.navigate('Logout')}>
        <Icon name="log-out" color={colors.gray.gray} size={25} />
      </LogoutButton>
    </Container>
  )
}

Header.defaultProps = {}

export default Header
