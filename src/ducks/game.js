import { Map } from 'immutable';

const DECREASE_SCORE = 'GAME/DECREASE_SCORE';
const INCREASE_SCORE = 'GAME/INCREASE_SCORE';
const SET_TEXT = 'GAME/SET_TEXT';
const SET_ALL_MADE = 'GAME/SET_ALL_MADE';

const initialState = new Map({
    text: 'Luslus',
    round: 1,
    scores: new Map({
        1: new Map({
            10: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            15: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            20: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            25: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            30: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        }),
        2: new Map({
            10: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            15: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            20: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            25: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
            30: {puttsMade: 0, score: 0, firstIn: false, lastIn: false, allIn: false},
        }),
    })
});

function getMaxScoreFor(distance) {
    switch (distance) {
        case 10:
            return 19;

        case 15:
            return 25;

        case 20:
            return 32;

        case 25:
            return 41;

        case 30:
            return 63;

        default:
            return null;
    }
}

export function setText(text) {
    return { type: SET_TEXT, payload: text };
}

export function setAllMade (round, distance) {
    return { 
        type: SET_ALL_MADE, 
        payload: {
            round,
            distance,
        },
    };
}

export function decreaseScore(round, distance) {
    return {
        type: DECREASE_SCORE,
        payload: {
            round,
            distance,
        }
    }
}

export function increaseScore(round, distance) {
    return {
        type: INCREASE_SCORE,
        payload: {
            round,
            distance,
        }
    }
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case DECREASE_SCORE:
            
        case SET_TEXT:
            return state.
                set('text', action.payload);

        case SET_ALL_MADE:
            const round  = action.payload.round;
            const distance = action.payload.distance;
            const scores = state.get('scores');
            const roundScores = scores.get(String(round));
            const score = roundScores.get(distance);

            return state
                .set(
                    'scores', 
                    scores.set(
                        String(round), 
                        roundScores.set(
                            String(distance), 
                            {...score, puttsMade: 10, allIn: true, score: getMaxScoreFor(distance)}
                        )
                    )
                );

        default:
            return state;
    }
}