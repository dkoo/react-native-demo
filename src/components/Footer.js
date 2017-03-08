import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer = ( props ) => {
	return (
		<View style={ styles.footer }>
			<Text style={ styles.footerLabel }>A footer item</Text>
			<Text style={ styles.footerLabel }>Another footer item</Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	footer: {
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: 'lightgray',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 20,
		paddingTop: 20,
	},
	footerLabel: {
		fontStyle: 'italic'
	}
} );
