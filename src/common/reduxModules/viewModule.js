const updateView = 'app/view/UPDATE_VIEW';

// action creator
export const update = () => {
    return {
        type: updateView
    }
}

//
export const view = (state = {count:0}, action) => {
    switch(action.type) {
        case updateView:
            return {
                count:state.count + 1,
            }
        default:
            return state;
    }
}

export default view;
