import { PermissionsAndroid, PermissionStatus } from 'react-native'
import i18n from 'i18next'
import Device from '../Device'

const Permissions = {
  /** Request camera permission
   * @platform Android
   */
  requestCamera: (): Promise<PermissionStatus> | null => {
    if (Device.isAndroid()) {
      return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: i18n.t('permissions.android.camera.title'),
        message: i18n.t('permissions.android.camera.message'),
        buttonNeutral: i18n.t('permissions.android.camera.buttonNeutral'),
        buttonNegative: i18n.t('permissions.android.camera.buttonNegative'),
        buttonPositive: i18n.t('permissions.android.camera.buttonPositive'),
      })
    }

    return null
  },
}

export default Permissions
