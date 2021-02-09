import React from 'react'
import { Avatar, Container, Icon, Text } from 'components'
import { useTheme } from 'styled-components/native'

import { ProviderCardContainer } from './styles'
import { Props } from './types'

const ProviderCard: React.FC<Props> = ({ provider, ...otherProps }) => {
  const { colors } = useTheme()

  return (
    <ProviderCardContainer {...otherProps}>
      <Avatar
        src={{ uri: provider.avatar_url as string }}
        disabled
        backgroundColor={colors.background}
      />

      <Container flex={1} ml={22}>
        <Text fontSize={18} variant="medium" numberOfLines={2}>
          {provider.name}
        </Text>

        <Container flexDirection="row" mt={12} alignItems="center">
          <Icon name="calendar" size={15} color={colors.primary} />
          <Text ml={10} fontSize={14} color={colors.gray.gray}>
            {provider.availability_days}
          </Text>
        </Container>
        <Container flexDirection="row" mt="6px" alignItems="center">
          <Icon name="clock" size={15} color={colors.primary} />
          <Text ml={10} fontSize={14} color={colors.gray.gray}>
            {provider.availability_hours}
          </Text>
        </Container>
      </Container>
    </ProviderCardContainer>
  )
}

export default ProviderCard
