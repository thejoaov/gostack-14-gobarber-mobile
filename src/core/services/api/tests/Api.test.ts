import { ApiConfig as API } from 'config/ApiConfig'
import { Api } from '../index'

const fakeResponse = { data: {}, status: 200 }

describe('Api service test suite', () => {
  beforeEach(() => {
    jest.spyOn(API, 'get').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'post').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'delete').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'put').mockResolvedValue(fakeResponse)
    jest.spyOn(API, 'patch').mockResolvedValue(fakeResponse)
  })

  it('should define all functions', () => {
    expect(Api.login).toBeDefined()
    expect(Api.signUp).toBeDefined()
    expect(Api.forgotPassword).toBeDefined()
    expect(Api.resetPassword).toBeDefined()
    expect(Api.listProviderAppointments).toBeDefined()
    expect(Api.getProviderMonthAvailability).toBeDefined()
    expect(Api.updateProfile).toBeDefined()
    expect(Api.updateAvatar).toBeDefined()
  })

  describe('login', () => {
    it('should request sign in user', async () => {
      const email = 'naruto.uzumaki@fakemail.com'
      const password = '123456'

      await expect(Api.login(email, password)).resolves.toEqual(fakeResponse)
    })
  })

  describe('signup', () => {
    it('should request sign up user', async () => {
      const name = 'naruto uzumaki'
      const email = 'naruto.uzumaki@fakemail.com'
      const password = '123456'

      await expect(Api.signUp({ name, email, password })).resolves.toEqual(
        fakeResponse,
      )
    })
  })

  describe('forgotPassword', () => {
    it('should request sign in user', async () => {
      const email = 'naruto.uzumaki@fakemail.com'

      await expect(Api.forgotPassword(email)).resolves.toEqual(fakeResponse)
    })
  })

  describe('resetPassword', () => {
    it('should request sign in user', async () => {
      const password = '123456'
      const passwordConfirmation = '123456'
      const token = 'token'

      await expect(
        Api.resetPassword({
          token,
          password,
          passwordConfirmation,
        }),
      ).resolves.toEqual(fakeResponse)
    })
  })

  describe('listProviderAppointments', () => {
    it('should list provider appointments', async () => {
      const year = 2021
      const month = 6
      const day = 9

      await expect(
        Api.listProviderAppointments(year, month, day),
      ).resolves.toEqual(fakeResponse)
    })
  })

  describe('getProviderMonthAvailability', () => {
    it('should get provider availability by month', async () => {
      const user_id = '1'
      const month = 6
      const day = 9

      await expect(
        Api.getProviderMonthAvailability(user_id, month, day),
      ).resolves.toEqual(fakeResponse)
    })
  })

  describe('updateProfile', () => {
    it('should update user profile', async () => {
      const name = 'Joh Doe'
      const email = 'johndoe@fake.com'
      const password = 'password123'

      await expect(
        Api.updateProfile({
          name,
          email,
          password,
        }),
      ).resolves.toEqual(fakeResponse)
    })
  })

  describe('updateAvatar', () => {
    it('should update user avatar', async () => {
      const formData = new FormData()

      await expect(Api.updateAvatar(formData)).resolves.toEqual(fakeResponse)
    })
  })
})
