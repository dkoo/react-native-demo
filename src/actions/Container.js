/**
 * Redux actions related to Container screen.
 *
 * @return actions
 */

// Store valid action types as constants so you only have to define them once.
export const INCREASE_BUTTON_SCALE = 'increase_button_scale';

// Define functions to dispatch your actions to Redux.
export const increaseScale = ( scale = 1 ) => {
	// Redux Thunk allows you to return a function to dispatch actions asynchronously.
	// If you don't need async, you can return the object itself instead of the function.
	return ( dispatch ) => {
		dispatch( {
			type: INCREASE_BUTTON_SCALE,
			payload: scale
		} );
	};
};
