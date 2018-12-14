import {
  initialState,
  view,
  updateScreenSize,
  toggleLinks,
  toggleDashSideNav,
} from './viewModule';
/**
 * @jest-environment jsdom
*/

const windowSize = window.innerWidth;
const emptyObject = { screenSize: windowSize };

const smScreen = 500;
const lgScreen = 1000;
const none = 'none';
const flex = 'flex';
const block = 'block';

const smScreenObject = {
  screenSize: smScreen,
  showBlock : none,
  showDashSideNav: none,
  showNav: none,
};

const lgScreenObject = {
  screenSize: lgScreen,
  showBlock : block,
  showDashSideNav: flex,
  showNav: flex,
};

describe('view reducer', () => {
  it('should return initial state', () => {
    expect(view(undefined,{})).toEqual(emptyObject);
  })
  it('should update display for small screen size', () => {
    const smallScreen = updateScreenSize(smScreen);
    expect(view(undefined, smallScreen)).toEqual(smScreenObject); 
  })
  it('should update display for large screen size', () => {
    const largeScreen = updateScreenSize(lgScreen);
    expect(view(undefined, largeScreen)).toEqual(lgScreenObject); 
  })
  it('should toggle nav if small screen size', () => {
    const toggledNav = {
      ...smScreenObject,
      showNav: flex,
    }
    expect(view(smScreenObject, toggleLinks())).toEqual(toggledNav); 
  })
  it('should toggle dash side nav if small screen size', () => {
    const toggledDash = {
      ...smScreenObject,
      showDashSideNav: flex,
    }
    expect(view(smScreenObject, toggleDashSideNav()))
      .toEqual(toggledDash); 
  })
  it('should not toggle nav if large screen size', () => {
    expect(view(lgScreenObject, toggleLinks()))
      .toEqual(lgScreenObject); 
  })
  it('should not toggle side nav if large screen size', () => {
    expect(view(lgScreenObject, toggleDashSideNav()))
      .toEqual(lgScreenObject); 
  })
})


