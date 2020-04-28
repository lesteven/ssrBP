import {
  showFlex,
  showBlock,
  toggleFlex,
} from './utils/helperFunctions';


const updateView = 'view/UPDATE_SCREEN_SIZE';
const toggleNav = 'view/TOGGLE_NAV';
const toggleDashSide = 'view/TOGGLE_DASH_NAV';

// action creator
export const updateScreenSize = (size) => ({
  type: updateView,
  screenSize: size,
});

export const toggleLinks = () => ({
  type: toggleNav,
});

export const toggleDashSideNav = () => ({
  type: toggleDashSide,
});


// initial state
export const initialState = {
  screenSize: typeof window === 'object' ? window.innerWidth : null,
};


// reducer
export const view = (state = initialState, action) => {
  const { screenSize, showDashSideNav, showNav } = state;
  switch (action.type) {
    case updateView:
      return {
        ...state,
        screenSize: action.screenSize,
        showBlock: showBlock(action.screenSize),
        showNav: showFlex(action.screenSize),
        showDashSideNav: showFlex(action.screenSize),
      };
    case toggleNav:
      return {
        ...state,
        showNav: toggleFlex(screenSize, showNav),
      };
    case toggleDashSide:
      return {
        ...state,
        showDashSideNav: toggleFlex(screenSize, showDashSideNav),
      };
    default:
      return state;
  }
};


export default view;
