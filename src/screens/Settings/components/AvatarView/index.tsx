import React from 'react'
import { useTheme } from 'styled-components/native'
import { Avatar, Icon } from 'components'

import { Platform } from 'react-native'
import Device from 'core/helpers/Device'

import { AvatarButton, AvatarContainer } from './styles'
import { Props } from './types'

const AvatarView: React.FC<Props> = ({ src }) => {
  const { colors } = useTheme()
  const getSizeAndroid = () => {
    const size = Device.getWindowSize().width / 3

    if (size > 186) return 186
    return size
  }

  return (
    <AvatarContainer>
      {Platform.select({
        android: (
          <Avatar
            mt={40}
            size={getSizeAndroid()}
            src={{ uri: src as string }}
            disabled
          />
        ),
        ios: <Avatar size={186} src={{ uri: src as string }} disabled />,
      })}
      <AvatarButton>
        <Icon name="camera" color={colors.background} />
      </AvatarButton>
    </AvatarContainer>
  )
}

export default AvatarView
