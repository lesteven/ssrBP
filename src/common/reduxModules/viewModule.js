const updateView = 'app/view/UPDATE_VIEW';

// action creator
export const update = display => {
    return {
        type: updateView
    }
}

//
export const view = (state = {test:'lala'}, action) => {
    switch(action.type) {
        case updateView:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default view;
