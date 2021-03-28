import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Alert, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'

import Device from 'core/helpers/Device'
import Picker from 'core/helpers/Picker'
import { Api } from 'core/services/api'
import { useAuth } from 'core/hooks/AuthContext'
import { User } from 'core/hooks/AuthContext/types'
import { Avatar, Icon } from 'components'

import { AvatarButton, AvatarContainer } from './styles'
import { Props } from './types'

const AvatarView: React.FC<Props> = ({ src = '' }) => {
  const [loading, setLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(src)

  const { colors } = useTheme()
  const { t } = useTranslation('profile')
  const { user, updateLocalProfile } = useAuth()

  const getSizeAndroid = () => {
    const size = Device.getWindowSize().width / 3

    if (size > 186) return 186
    return size
  }

  const handleChangePhoto = useCallback(async () => {
    setLoading(true)
    try {
      const image = await Picker.image({
        allowsEditing: true,
        noData: true,
      })

      if (image.didCancel) {
        setLoading(false)
        return
      }

      const form = new FormData()

      form.append('avatar', {
        uri: image.uri,
        name: `${user?.id}.jpeg`,
        type: 'image/jpeg',
      })

      const { data } = await Api.updateAvatar(form)

      updateLocalProfile(data)

      setAvatarUrl(image.uri)
    } catch (error) {
      updateLocalProfile({ ...user, avatar_url: avatarUrl } as User)

      Alert.alert(
        t('change_avatar.error.title'),
        t('change_avatar.error.message'),
      )
    } finally {
      setLoading(false)
    }
  }, [avatarUrl, t, updateLocalProfile, user])

  return (
    <AvatarContainer>
      {Platform.select({
        android: (
          <Avatar
            testID="avatar-android"
            mt={40}
            size={getSizeAndroid()}
            src={{ uri: avatarUrl }}
            disabled
          />
        ),
        ios: (
          <Avatar
            testID="avatar-ios"
            size={186}
            src={{ uri: avatarUrl }}
            disabled
          />
        ),
      })}
      <AvatarButton testID="avatar-button" onPress={handleChangePhoto}>
        {loading ? (
          <ActivityIndicator
            testID="avatar-loading"
            size={15}
            color={colors.background}
          />
        ) : (
          <Icon name="camera" color={colors.background} />
        )}
      </AvatarButton>
    </AvatarContainer>
  )
}

export default AvatarView
