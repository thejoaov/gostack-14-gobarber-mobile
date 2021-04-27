import React from 'react'
import { Avatar, Container, Icon, Text } from 'components'
import { useTheme } from 'styled-components/native'
import { useTranslation } from 'react-i18next'

import { ProviderCardContainer, ProviderCardContainerThin } from './styles'
import { Props } from './types'

const ProviderCard: React.FC<Props> = ({
  provider,
  variant,
  selected,
  ...otherProps
}) => {
  const { colors } = useTheme()
  const { t } = useTranslation('home')

  const variants = {
    regular: (
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
              {t('provider_availability_days')}
            </Text>
          </Container>
          <Container flexDirection="row" mt="6px" alignItems="center">
            <Icon name="clock" size={15} color={colors.primary} />
            <Text ml={10} fontSize={14} color={colors.gray.gray}>
              {t('provider_availability_hours')}
            </Text>
          </Container>
        </Container>
      </ProviderCardContainer>
    ),
    thin: (
      <ProviderCardContainerThin {...otherProps} selected={selected}>
        <Avatar
          src={{ uri: provider.avatar_url as string }}
          disabled
          backgroundColor={colors.background}
          size={32}
        />
        <Text
          marginX={10}
          fontSize={14}
          numberOfLines={1}
          flex={1}
          color={selected ? colors.black.black : colors.white}>
          {provider.name}
        </Text>
      </ProviderCardContainerThin>
    ),
  }

  return variants[variant || 'regular']
}

ProviderCard.defaultProps = {
  selected: true,
}

export default ProviderCard
