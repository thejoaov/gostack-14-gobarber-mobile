import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import theme from 'core/styles/theme'
import { mockAuthContext } from 'core/utils'
import * as hooks from 'core/hooks/AuthContext'
import Routes from '../index'

jest.mock('@react-navigation/stack', () => ({
  createNavigatorFactory: jest.fn(),
  createStackNavigator: jest.fn(),
}))

let wrapper: ReactTestRenderer
let AuthSpy: jest.SpyInstance

describe('Routes test suite', () => {
  beforeEach(() => {
    AuthSpy = jest.spyOn(hooks, 'useAuth').mockReturnValue(mockAuthContext())

    act(() => {
      wrapper = create(
        <StylesProvider theme={theme}>
          <Routes />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
