/**
 * Top-level app container.
 *
 * @return <DemoApp />
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Container } from './components/Container';
import reducers from './reducers';

export default class DemoApp extends Component {
	render() {
		return (
			/**
			*
			* The empty object passed to `createStore` is the default state for Redux.
			*
			* If initializing the store with a default state, it must have the
			* same keys as the `reducers` object returned from `combineReducers`
			* in the src/reducers/index.js file.
			*
			* More info: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
			*
			*/
			<Provider store={ createStore( reducers, {}, applyMiddleware( ReduxThunk ) ) }>
				<Container />
			</Provider>
		);
	}
};
