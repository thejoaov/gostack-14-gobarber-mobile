import FormatDate from '../index'

jest.mock('date-fns', () => ({
  format: jest.fn().mockImplementation((date: Date) => date.toDateString()),
}))

describe('FormatDate', () => {
  it('should define all functions', () => {
    expect(FormatDate.formatString).toBeDefined()
  })

  describe('formatString', () => {
    it('should format date to string', () => {
      const date = new Date()

      expect(FormatDate.formatString(date, 'dd/MM/yyyy')).toEqual(
        date.toDateString(),
      )
    })
  })
})
