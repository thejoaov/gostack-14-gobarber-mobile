import { ApiConfig } from 'config/ApiConfig'
import { Api } from '../index'

const fakeResponse = { data: {}, status: 200 }

describe('Api service test suite', () => {
  beforeEach(() => {
    jest.spyOn(ApiConfig, 'get').mockResolvedValue(fakeResponse)
    jest.spyOn(ApiConfig, 'post').mockResolvedValue(fakeResponse)
    jest.spyOn(ApiConfig, 'delete').mockResolvedValue(fakeResponse)
    jest.spyOn(ApiConfig, 'put').mockResolvedValue(fakeResponse)
    jest.spyOn(ApiConfig, 'patch').mockResolvedValue(fakeResponse)
  })

  it('should define all functions', () => {
    expect(Api.login).toBeDefined()
    expect(Api.signUp).toBeDefined()
  })

  describe('login', () => {
    it('should request sign in user', async () => {
      const email = 'hermann.kaulke@lebsack.com'
      const password = '123456'

      await expect(Api.login({ email, password })).resolves.toEqual(
        fakeResponse,
      )
    })
  })

  describe('signup', () => {
    it('should request sign up user', async () => {
      const name = 'naruto uzumaki'
      const email = 'hermann.kaulke@lebsack.com'
      const password = '123456'

      await expect(Api.signUp({ name, email, password })).resolves.toEqual(
        fakeResponse,
      )
    })
  })
})
