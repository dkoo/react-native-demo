/**
 * Header component. Presentational.
 *
 * @return <Header />
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ( props ) => {
	return (
		<View style={ styles.header }>
			<Text style={ styles.headerLabel }>{ props.children.toUpperCase() }</Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	header: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: 'white',
		justifyContent: 'center',
		paddingBottom: 20,
		paddingTop: 35,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4
	},
	headerLabel: {
		letterSpacing: 1,
		fontSize: 14
	}
} );