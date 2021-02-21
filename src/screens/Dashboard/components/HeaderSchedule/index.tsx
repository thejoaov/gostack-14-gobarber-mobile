import React, { useCallback } from 'react'
import { useTheme } from 'styled-components/native'
import { Avatar, Icon, Section, Text } from 'components'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useAuth } from 'core/hooks/AuthContext'

import { Container, BackButton } from './styles'
import { Props } from './types'

const HeaderSchedule: React.FC<Props> = ({ title }) => {
  const { colors } = useTheme()
  const { user } = useAuth()
  const navigation = useNavigation()

  const handleNavigateProfile = useCallback(() => {
    navigation.navigate({
      name: 'Settings',
      params: {
        screen: 'Profile',
      },
    } as never)
  }, [navigation])

  return (
    <Container>
      <StatusBar backgroundColor={colors.black.medium} />
      <BackButton onPress={(): void => navigation.goBack()}>
        <Icon name="arrow-left" color={colors.gray.gray} size={25} />
      </BackButton>
      <Section center>
        <Text fontSize={20}>{title}</Text>
      </Section>
      <Section mr={24} marginY={24}>
        <Avatar
          src={{ uri: user?.avatar_url as string }}
          onPress={handleNavigateProfile}
        />
      </Section>
    </Container>
  )
}

HeaderSchedule.defaultProps = {}

export default HeaderSchedule
