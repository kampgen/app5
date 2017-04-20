import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import Header from './Header'

const detalheClientes = require('../assets/detalhe_cliente.png')
const cliente1 = require('../assets/cliente1.png')
const cliente2 = require('../assets/cliente2.png')
//#B9C941
export default class CenaClientes extends Component {
  render() {
    return (
		<View style={{ backgroundColor: '#FFF', flex: 1 }}>
			<StatusBar backgroundColor = '#B9C941' />
			  <Header voltar navigator={this.props.navigator} corBG='#B9C941' />
				<View style={styles.cabecalho}>
					<Image source={detalheClientes} />
					<Text style={styles.txtTitulo}>Nossos Clientes</Text>
		  		</View>
				<View style={styles.cliente}>
					  <Image source={cliente1} />
					  <Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
				</View>
				<View style={styles.cliente}>
					  <Image source={cliente2} />
					  <Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
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
		color: '#B9C941',
		marginLeft: 30,
	},
	cliente: {
		paddingLeft: 20,
		marginTop: 40
	},
	txtCliente: {
		fontSize: 18,
		marginLeft: 20
	}
})
