import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { Keyboard } from 'react-native'
import { findByTestID } from 'core/utils'
import { StylesProvider } from 'components'

import FooterButton from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {
  title: 'test',
  hideOnKeyboard: true,
  testID: 'footer-button',
}

describe('FooterButton test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <FooterButton {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('should hide on keyboard open', async () => {
    act(() => {
      Keyboard.emit('keyboardDidShow', {})
    })

    setTimeout(() => {
      const container = findByTestID(wrapper, 'footer-button')

      expect(container).not.toBeTruthy()
    }, 1000)
  })

  it('should show on keyboard closed', async () => {
    act(() => {
      Keyboard.emit('keyboardDidShow', {})
    })

    setTimeout(() => {
      const container = findByTestID(wrapper, 'footer-button')

      expect(container).not.toBeTruthy()
    }, 1000)

    act(() => {
      Keyboard.emit('keyboardDidHide', {})
    })

    setTimeout(() => {
      const container = findByTestID(wrapper, 'footer-button')

      expect(container).toBeTruthy()
    }, 1000)
  })
})
