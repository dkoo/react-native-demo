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
		const store = createStore( reducers, {}, applyMiddleware( ReduxThunk ) );

		return (
			<Provider store={ store }>
				<Container />
			</Provider>
		);
	}
};
