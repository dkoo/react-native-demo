/**
 * Redux actions related to Container screen.
 *
 * @return actions
 */

// Store valid action types as constants so you only have to define them once.
export const CHANGE_BACKGROUND_COLOR = 'change_background_color';

// Define functions to dispatch your actions to Redux.
export const increaseScale = ( scale = 1 ) => {
	return {
		type: CHANGE_BACKGROUND_COLOR,
		payload: scale
	};
};
