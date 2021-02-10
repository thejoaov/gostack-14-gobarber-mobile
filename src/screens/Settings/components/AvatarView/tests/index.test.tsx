import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import AvatarView from '../index'
import { AvatarViewProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: AvatarViewProps = { src: 'src' }

describe('AvatarView test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <AvatarView {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
