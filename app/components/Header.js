import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableHighlight
} from 'react-native'

const btnVoltar = require('../assets/btn_voltar.png')

export default class Header extends Component {
	render() {
		if (this.props.voltar) {
			return (
				<View style={[styles.headerTitle, { backgroundColor: this.props.corBG }]}>
					<TouchableHighlight
						underlayColor={this.props.corBG}
						activeOpacity={0.3}
						onPress={() => {
							this.props.navigator.pop()
						}}
						>
						<Image source={btnVoltar} />
					</TouchableHighlight>
					<Text style={styles.txtTitle}>ATM Consultoria</Text>
				</View>
			)
		}
		return (
			<View style={styles.headerTitle}>
				<Text style={styles.txtTitle}>ATM Consultoria</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerTitle: {
		backgroundColor: '#CCC',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	txtTitle: {
		flex: 1,
		fontSize: 18,
		color: '#000',
		textAlign: 'center',
	}
})
