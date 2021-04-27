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
            noData: true,
            title: i18n.t('picker:image.title'),
            cancelButtonTitle: i18n.t('picker:image.cancel_button'),
            chooseFromLibraryButtonTitle: i18n.t(
              'picker:image.choose_from_library',
            ),
            chooseWhichLibraryTitle: i18n.t(
              'picker:image.choose_which_library',
            ),
            takePhotoButtonTitle: i18n.t('picker:image.take_photo'),
          },
          image => {
            // if (image.didCancel) reject(new Error('user cancelled'))
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
