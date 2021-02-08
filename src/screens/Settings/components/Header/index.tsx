import React from 'react'
import { useTheme } from 'styled-components/native'
import { Icon } from 'components'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  BackButton,
  NameContainer,
  Name,
  LogoutButton,
} from './styles'
import { Props } from './types'

const Header: React.FC<Props> = ({ title }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={(): void => navigation.goBack()}>
        <Icon name="arrow-left" color={colors.gray.gray} size={25} />
      </BackButton>
      <NameContainer>
        <Name fontSize={20}>{title}</Name>
      </NameContainer>
      <LogoutButton onPress={(): void => navigation.navigate('Logout')}>
        <Icon name="log-out" color={colors.gray.gray} size={25} />
      </LogoutButton>
    </Container>
  )
}

Header.defaultProps = {}

export default Header
