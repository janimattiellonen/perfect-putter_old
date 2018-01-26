import { Map } from 'immutable';

const SET_TEXT = 'GAME/SET_TEXT';

const initialState = new Map({
    text: 'Luslus',
    round: 1,
    scores: {
        1: {
            10: 19,
            15: 25,
            20: null,
            25: null,
            30: null,
        },
        2: {
            10: null,
            15: null,
            20: null,
            25: null,
            30: null,
        },
    }
});

export function setText(text) {
    return { type: SET_TEXT, payload: text };
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TEXT:
            return state.
                set('text', action.payload);

        default:
        console.log("fooo: " + state.get('round'));
            return state;
    }
}