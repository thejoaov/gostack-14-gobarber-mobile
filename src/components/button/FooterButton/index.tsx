import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import theme from 'core/styles/theme'

import LinkButton from '../LinkButton'
import { Container } from './styles'
import { Props } from './types'

const FooterButton: React.FC<Props> = ({
  color,
  title,
  icon,
  fontSize,
  hideOnKeyboard,
  onPress,
  ...props
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return hideOnKeyboard && isKeyboardVisible ? (
    <></>
  ) : (
    <Container {...props}>
      <LinkButton
        title={title}
        color={color}
        icon={icon}
        fontSize={fontSize}
        onPress={onPress}
      />
    </Container>
  )
}

FooterButton.defaultProps = {
  width: '100%',
  color: theme.colors.primary,
  fontSize: 18,
  hideOnKeyboard: false,
}

export default FooterButton
