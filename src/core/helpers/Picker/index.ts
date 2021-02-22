import ImagePicker, {
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker'
import i18n from 'i18n'

const Picker = {
  /** Request pick image */
  image: (options: ImagePickerOptions): Promise<ImagePickerResponse> =>
    new Promise((resolve, reject) => {
      try {
        ImagePicker.showImagePicker(
          {
            ...options,

            title: i18n.t('image.title', { ns: 'picker' }),
            cancelButtonTitle: i18n.t('image.cancel_button', { ns: 'picker' }),
            chooseFromLibraryButtonTitle: i18n.t('image.choose_from_library', {
              ns: 'picker',
            }),
            chooseWhichLibraryTitle: i18n.t('image.choose_which_library', {
              ns: 'picker',
            }),
            takePhotoButtonTitle: i18n.t('image.take_photo', { ns: 'picker' }),
          },
          image => {
            if (image.didCancel) reject(new Error('user cancelled'))
            if (image.error) reject(new Error('error'))
            resolve(image)
          },
        )
      } catch (error) {
        reject(error)
      }
    }),
}

export default Picker
