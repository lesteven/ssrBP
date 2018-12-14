import data from './data';

const prefix = 'slide';

const UPDATE_SLIDE = `${prefix}/UPDATE`;

export const updateCurrent = data => ({
  type: UPDATE_SLIDE,
  data,
})

const initialState = {
  ...data,
  current: 'nvidia',
}

export const slide = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SLIDE:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  
  
  }
}

