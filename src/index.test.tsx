import React from 'react'
import { ReactTestRenderer, act, create } from 'react-test-renderer'

import App from '.'

let wrapper: ReactTestRenderer

const AppMock: React.FC = () => <App />

describe('App test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<AppMock />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
