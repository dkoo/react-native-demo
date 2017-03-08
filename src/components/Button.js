/**
 * Button component. Presentational.
 *
 * @return <Button />
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ( { onPress, scale = 1, children } ) => {
	return (
		<TouchableOpacity
			onPress={ onPress }
			activeOpacity={ 0.75 }
			style={ styles.button }
		>
			<Text style={ [ styles.buttonLabel, { fontSize: 18 * scale } ] }>{ children }</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create( {
	button: {
		alignItems: 'center',
		backgroundColor: 'cornflowerblue',
		borderRadius: 4,
		justifyContent: 'center',
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20
	},
	buttonLabel: {
		color: 'white',
		fontWeight: 'bold'
	}
} );