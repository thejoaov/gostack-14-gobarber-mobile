import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps, fakeApiReturn, findByTestID } from 'core/utils'
import { Api } from 'core/services/api'

import SignUp from '../index'

let wrapper: ReactTestRenderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = createTestProps({})
let ApiSpy: jest.SpyInstance

describe('SignUp test suite', () => {
  beforeEach(async () => {
    ApiSpy = jest.spyOn(Api, 'signUp')

    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <SignUp {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('should navigate to SignIn when click on footerButton', async () => {
    const container = wrapper.root.props.children

    await act(async () => {
      const footerButton = findByTestID(wrapper, 'footer-button')

      await footerButton.props.onPress()

      expect(container.props.navigation.navigate).toBeCalledWith('SignIn')
    })
  })

  it('should change text in inputs', async () => {
    const name = 'John Doe'
    const email = 'johndoe@email.com'
    const password = 'fakepassword'

    await act(async () => {
      const nameInput = findByTestID(wrapper, 'name-input')
      const emailInput = findByTestID(wrapper, 'email-input')
      const passwordInput = findByTestID(wrapper, 'password-input')

      await nameInput.props.onChangeText(name)

      await emailInput.props.onChangeText(email)

      await passwordInput.props.onChangeText(password)

      expect(nameInput.props.defaultValue).toEqual(name)
      expect(emailInput.props.defaultValue).toEqual(email)
      expect(passwordInput.props.defaultValue).toEqual(password)
    })
  })

  it('should start loading when all values are valid and click on submit', async () => {
    ApiSpy.mockReturnValue(fakeApiReturn({ status: 200, data: {} }))
    const name = 'John Doe'
    const email = 'johndoe@email.com'
    const password = 'fakepassword'

    await act(async () => {
      const container = wrapper.root.props.children
      const nameInput = findByTestID(wrapper, 'name-input')
      const emailInput = findByTestID(wrapper, 'email-input')
      const passwordInput = findByTestID(wrapper, 'password-input')
      const submitButton = findByTestID(wrapper, 'submit-button')

      await nameInput.props.onChangeText(name)
      await nameInput.props.onSubmitEditing()

      await emailInput.props.onChangeText(email)
      await emailInput.props.onSubmitEditing()

      await passwordInput.props.onChangeText(password)
      await passwordInput.props.onSubmitEditing()

      expect(nameInput.props.defaultValue).toEqual(name)
      expect(emailInput.props.defaultValue).toEqual(email)
      expect(passwordInput.props.defaultValue).toEqual(password)

      await submitButton.props.onPress()

      setTimeout(() => {
        expect(container.props.navigation.navigate).toBeCalled()
      }, 1000)
    })
  })

  it('should stop loading if api returns an error', async () => {
    ApiSpy.mockRejectedValue(new Error('error'))
    const container = wrapper.root.props.children
    const name = 'John Doe'
    const email = 'johndoe@email.com'
    const password = 'fakepassword'

    await act(async () => {
      const nameInput = findByTestID(wrapper, 'name-input')
      const emailInput = findByTestID(wrapper, 'email-input')
      const passwordInput = findByTestID(wrapper, 'password-input')
      const submitButton = findByTestID(wrapper, 'submit-button')

      await nameInput.props.onChangeText(name)

      await emailInput.props.onChangeText(email)

      await passwordInput.props.onChangeText(password)

      expect(nameInput.props.defaultValue).toEqual(name)
      expect(emailInput.props.defaultValue).toEqual(email)
      expect(passwordInput.props.defaultValue).toEqual(password)

      await submitButton.props.onPress()
    })

    setTimeout(() => {
      const submitButton = findByTestID(wrapper, 'submit-button')

      expect(container.props.navigation.navigate).toBeCalled()
      expect(submitButton.props.isLoading).toBeFalsy()
    }, 1000)
  })
})
