/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { View } from 'react-native'

import DatePicker from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {
  androidOptions: {
    ButtonComponent: () => <></>,
  },
  title: 'test',
  value: new Date(),
}

describe('DatePicker test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <DatePicker {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
