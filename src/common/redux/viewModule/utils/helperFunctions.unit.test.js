import {
  showFlex,
  showBlock,
  toggleFlex,
} from './helperFunctions';

const smallSize = 500;
const bigSize = 1000;
const none = 'none';
const flex = 'flex';
const block = 'block';


describe('showFlex', () => {
  test('w/ smallSize => none', () => {
    expect(showFlex(smallSize)).toBe(none);
  })

  test('w/ bigSize => flex', () => {
    expect(showFlex(bigSize)).toBe(flex);
  })
})

describe('showBlock', () => {
  test('w/ smallSize => none', () => {
    expect(showBlock(smallSize)).toBe(none);
  })

  test('w/ bigSize => block', () => {
    expect(showBlock(bigSize)).toBe(block);
  })
})

describe('toggleFlex', () => {
  test('w/ smallSize && display:none => flex', () => {
    expect(toggleFlex(smallSize, none)).toBe(flex);
  })

  test('w/ smallSize && display:flex => none', () => {
    expect(toggleFlex(smallSize, flex)).toBe(none);
  })

  test('w/ bigSize && display:flex => flex', () => {
    expect(toggleFlex(bigSize, flex)).toBe(flex);
  })

  test('w/ bigSize && display:none => flex', () => {
    expect(toggleFlex(bigSize, none)).toBe(flex);
  })
})


