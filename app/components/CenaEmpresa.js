import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import Header from './Header'

const detalheEmpresa = require('../assets/detalhe_empresa.png')

//#B9C941
export default class CenaEmpresa extends Component {
  render() {
    return (
		<View style={{ backgroundColor: '#FFF', flex: 1 }}>
			<StatusBar backgroundColor = '#EC7148' />
			  <Header voltar navigator={this.props.navigator} corBG='#EC7148' />
				<View style={styles.cabecalho}>
					<Image source={detalheEmpresa} />
					<Text style={styles.txtTitulo}>A Empresa</Text>
		  		</View>
				<View style={styles.empresa}>
					  <Text style={styles.txtEmpresa}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
				</View>
		</View>
    )
  }
}

const styles = StyleSheet.create({
	cabecalho: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
	},
	txtTitulo: {
		fontSize: 30,
		color: '#EC7148',
		marginLeft: 30,
	},
	contatos: {
		marginTop: 20,
		padding: 20
	},
	txtEmpresa: {
		fontSize: 18,
		padding: 15
	}
})
