// Import library dependencies
import React, { Component } from 'react';
import { LayoutAnimation, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// Import action functions
import { increaseScale } from '../actions/Container';

// Import other components
import { Header } from './Header';
import { Button } from './Button';
import { Footer } from './Footer';

// Function to map state to this component's props using React Redux's connect method
const mapStateToProps = ( state ) => {
	const { scale } = state.container;

	return { scale };
};

// If using Redux for this component, wrap the component in the React Redux connect method
export const Container = connect( mapStateToProps, { increaseScale } )( class Container extends Component {
	/**
	 * Animate state changes using ease in/out timing function.
	 *
	 * @return void
	 */
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	/**
	 * Tap handler for increasing button scale.
	 */
	increaseScale() {
		const scale = this.props.scale >= 3 ? 1 : this.props.scale + 1;

		this.props.increaseScale( scale );
	}

	/**
	 * Every component must have a render method.
	 */
	render() {
		return (
			<View style={ styles.container }>
				<Header>My header bar</Header>

				<Button scale={ this.props.scale } onPress={ this.increaseScale.bind( this ) }>Tap me!</Button>

				<Footer />
			</View>
		);
	}
} );

const styles = StyleSheet.create( {
	container: {
		alignItems: 'center',
		backgroundColor: 'whitesmoke',
		flex: 1,
		justifyContent: 'space-between'
	}
} );