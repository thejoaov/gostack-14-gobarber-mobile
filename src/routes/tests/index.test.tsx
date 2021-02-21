import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Routes from '../index'

jest.mock('@react-navigation/stack', () => ({
  createNavigatorFactory: jest.fn(),
  createStackNavigator: jest.fn(),
}))

let wrapper: ReactTestRenderer

describe('Routes test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Routes />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
