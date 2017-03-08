// Combine all reducers into a single object for easy inclusion in any component.

import { combineReducers } from 'redux';

import Container from './Container';
// import Tabs from './Tabs';

export default combineReducers( {
	container: Container,
	// tabs: Tabs
} );
