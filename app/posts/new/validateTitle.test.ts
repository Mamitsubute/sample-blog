import { validateTitle } from './validateTitle';

describe('validateTitle', () => {
  it('returns an error if title is 30 characters or more', () => {
    expect(validateTitle('a'.repeat(30))).toBe('Title must be less than 30 characters.');
    expect(validateTitle('This title is exactly thirty chars!')).toBe('Title must be less than 30 characters.');
  });

  it('returns empty string if title is less than 30 characters', () => {
    expect(validateTitle('Short title')).toBe('');
    expect(validateTitle('a'.repeat(29))).toBe('');
  });
});
