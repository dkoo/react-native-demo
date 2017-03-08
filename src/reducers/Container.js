/**
 * Redux reducers related to Container component.
 *
 * @return state
 */

import { INCREASE_BUTTON_SCALE } from '../actions/Container';

const INITIAL_STATE = {
	scale: 1
};

export default ( state = INITIAL_STATE, action ) => {
	if ( INCREASE_BUTTON_SCALE === action.type ) {
		return { ...state, scale: action.payload };
	}

	return state;
};