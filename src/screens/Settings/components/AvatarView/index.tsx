import React, { useMemo, useState } from 'react'
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

  const getSizeAndroid = useMemo(() => {
    const size = Device.getWindowSize().width / 3

    if (size > 186) return 186
    return size
  }, [])

  const handleChangePhoto = async () => {
    try {
      const image = await Picker.image({
        allowsEditing: true,
        noData: true,
      })

      const form = new FormData()

      form.append('avatar', {
        uri: image.uri,
        name: `${user?.id}.jpeg`,
        type: 'image/jpeg',
      })

      setLoading(true)
      const { data } = await Api.updateAvatar(form)

      updateLocalProfile(data)

      setAvatarUrl(image.uri)
    } catch (error) {
      setAvatarUrl('')
      updateLocalProfile({ ...user, avatar_url: null } as User)

      Alert.alert(
        t('change_avatar.error.title'),
        t('change_avatar.error.message'),
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <AvatarContainer>
      {Platform.select({
        android: (
          <Avatar
            mt={40}
            size={getSizeAndroid}
            src={{ uri: avatarUrl }}
            disabled
          />
        ),
        ios: <Avatar size={186} src={{ uri: avatarUrl }} disabled />,
      })}
      <AvatarButton onPress={handleChangePhoto}>
        {loading ? (
          <ActivityIndicator size={50} color={colors.background} />
        ) : (
          <Icon name="camera" color={colors.background} />
        )}
      </AvatarButton>
    </AvatarContainer>
  )
}

export default AvatarView
