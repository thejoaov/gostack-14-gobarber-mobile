import React from 'react'
import { Container, Text, Icon, Button } from 'components'
import { useTranslation } from 'react-i18next'

import theme from 'core/styles/theme'
import { Props } from './types'

const SignUpStatus: React.FC<Props> = ({ route, navigation }) => {
  const { t } = useTranslation('sign_up_status')
  const { status } = route.params

  const getIcon = (type: typeof status): JSX.Element => {
    const selector = {
      success: <Icon name="check" size={100} semantic="success" />,
      error: <Icon name="x" size={100} semantic="error" />,
    }

    return selector[type]
  }

  return (
    <Container center padding={80}>
      {getIcon(status)}

      <Text mt={40} textAlign="center" fontSize={30}>
        {t(`${status}.title`)}
      </Text>

      <Text
        mt={16}
        textAlign="center"
        color={theme.colors.gray.gray}
        fontSize={14}>
        {t(`${status}.message`)}
      </Text>

      <Button
        mt={40}
        width={status === 'success' ? 100 : 180}
        title={t(`${status}.button`)}
        onPress={() =>
          navigation.navigate(status === 'success' ? 'SignIn' : 'SignUp')
        }
      />
    </Container>
  )
}

export default SignUpStatus
