import { validateUser } from '../auth'

describe('validateUser', () => {
  it('returns true for user with valid email', () => {
    expect(validateUser({ email: 'test@example.com' })).toBe(true)
  })

  it('returns false for user without email', () => {
    // user object without email property
    // we call validateUser with {}. Should be false
    expect(validateUser({} as any)).toBe(false)
  })

  it('returns false for user with empty email', () => {
    expect(validateUser({ email: '' })).toBe(false)
  })
})
