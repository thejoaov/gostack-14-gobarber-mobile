/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {
  render,
  fireEvent,
  act,
  RenderAPI,
} from '@testing-library/react-native'
import React from 'react'
import { StylesProvider } from 'components'
import { createTestProps } from 'core/utils'

import SignIn from '../index'

type SignInParams = { email?: string; password?: string }
let params: SignInParams = {}
let signInProps: any = createTestProps({ params })
let instance: RenderAPI

describe('SignIn test suite', () => {
  beforeEach(async () => {
    instance = render(
      <StylesProvider>
        <SignIn {...signInProps} />
      </StylesProvider>,
    )
  })

  it('should render', async () => {
    expect(instance).toBeTruthy()
  })

  it('Should navigate to ForgotPassword', async () => {
    const footerButton = instance.getAllByTestId('footer-button')

    act(() => {
      fireEvent.press(footerButton[0])

      expect(signInProps.navigation.navigate).toBeCalledWith('SignUp')
    })
  })

  it('Should start with password and email when params are present and enable submit button', async () => {
    instance = render(
      <StylesProvider>
        <SignIn
          {...(createTestProps({
            params: { email: 'test@test.com', password: 'password' },
          }) as any)}
        />
      </StylesProvider>,
    )

    const emailInput = instance.getAllByTestId('email-input')[0]
    const passwordInput = instance.getAllByTestId('password-input')[0]
    const submitButton = instance.getAllByTestId('submit-button')[0]

    act(() => {
      expect(emailInput.props.defaultValue).toEqual('test@test.com')
      expect(passwordInput.props.defaultValue).toEqual('password')
      expect(submitButton.props.enabled).toBeTruthy()
    })
  })
})
