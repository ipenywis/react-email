import { DEFAULT_DOCTYPE, withDoctype } from './with-doctype';

describe('withDoctype()', () => {
  it('adds the XHTML 1.0 Transitional doctype by default', () => {
    expect(withDoctype('<html></html>')).toBe(
      `${DEFAULT_DOCTYPE}<html></html>`,
    );
  });

  it('uses a custom doctype', () => {
    expect(withDoctype('<html></html>', '<!DOCTYPE html>')).toBe(
      '<!DOCTYPE html><html></html>',
    );
  });

  it('leaves the doctype out when it is false', () => {
    expect(withDoctype('<html></html>', false)).toBe('<html></html>');
  });

  it('replaces a doctype that React already rendered', () => {
    expect(withDoctype('<!doctype html><html></html>', '<!DOCTYPE html>')).toBe(
      '<!DOCTYPE html><html></html>',
    );
  });
});
