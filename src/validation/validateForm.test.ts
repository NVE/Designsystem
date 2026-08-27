import { describe, expect, it } from 'vitest';
import { rules } from './validateForm';

describe('rules', () => {
  it('should return false for required rule when value is undefined', () => {
    const result = rules.required(undefined);
    expect(result).toBe(false);
  });

  it('should return true if a value exists', () => {
    const result = rules.required('value');
    expect(result).toBe(true);
  });

  it('should return true if array is not empty', () => {
    const result = rules.required(['value']);
    expect(result).toBe(true);
  });

  it('should return false for required rule when value is null', () => {
    const result = rules.required(null);
    expect(result).toBe(false);
  });

  it('should return false for required rule when value is an empty string', () => {
    const result = rules.required('');
    expect(result).toBe(false);
  });

  it('should return true when the value is true', () => {
    const result = rules.required(true);
    expect(result).toBe(true);
  });

  it('should return false for minLength rule when value is shorter than specified length', () => {
    const result = rules.minLength(5, 'abc');
    expect(result).toBe(false);
  });

  it('should return true for minLength rule when value meets specified length', () => {
    const result = rules.minLength(3, 'abc');
    expect(result).toBe(true);
  });

  it('should return false for minLength rule when array is shorter than specified length', () => {
    const result = rules.minLength(3, ['a']);
    expect(result).toBe(false);
  });

  it('should return false for maxLength rule when value exceeds specified length', () => {
    const result = rules.maxLength(3, 'abcd');
    expect(result).toBe(false);
  });

  it('should return true for maxLength rule when value is within specified length', () => {
    const result = rules.maxLength(5, 'abc');
    expect(result).toBe(true);
  });

  it('should return false for maxLength rule when array exceeds specified length', () => {
    const result = rules.maxLength(2, ['a', 'b', 'c']);
    expect(result).toBe(false);
  });

  it('should return false for min rule when value is less than specified minimum', () => {
    const result = rules.min(5, 3);
    expect(result).toBe(false);
  });

  it('should return true for min rule when value meets specified minimum', () => {
    const result = rules.min(3, 5);
    expect(result).toBe(true);
  });

  it('should return false for max rule when value exceeds specified maximum', () => {
    const result = rules.max(5, 10);
    expect(result).toBe(false);
  });

  it('should return true for max rule when value is within specified maximum', () => {
    const result = rules.max(10, 5);
    expect(result).toBe(true);
  });

  it('should return true when email rule is applied to a valid email address', () => {
    const result = rules.email('test@example.com');
    expect(result).toBe(true);
  });
});
