import { PermissionsAndroid, PermissionStatus } from 'react-native'
import i18n from 'i18next'

const Permissions = {
  requestCamera: (): Promise<PermissionStatus> =>
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: i18n.t('permissions.android.camera.title'),
      message: i18n.t('permissions.android.camera.message'),
      buttonNeutral: i18n.t('permissions.android.camera.buttonNeutral'),
      buttonNegative: i18n.t('permissions.android.camera.buttonNegative'),
      buttonPositive: i18n.t('permissions.android.camera.buttonPositive'),
    }),
}

export default Permissions
