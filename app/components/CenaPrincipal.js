import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'
import Header from './Header'

const logo = require('../assets/logo.png')
const menuCliente = require('../assets/menu_cliente.png')
const menuContato = require('../assets/menu_contato.png')
const menuEmpresa = require('../assets/menu_empresa.png')
const menuServico = require('../assets/menu_servico.png')

export default class CenaPrincipal extends Component {
  render() {
    return (
		<View>
			<StatusBar backgroundColor = '#CCC' />
			  <Header />
			  	<View style={styles.logo}>
						<Image source={logo} />
				</View>

				<View style={styles.menu}>
					<View style={styles.menu1}>
						<TouchableHighlight
							underlayColor={'#B9C941'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'clientes' })
							}}>
						<Image style={styles.image} source={menuCliente} />
					</TouchableHighlight>
						<TouchableHighlight
							underlayColor={'#61BD8C'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'contatos' })
							}}>
						<Image style={styles.image} source={menuContato} />
					</TouchableHighlight>
					</View>
					<View style={styles.menu1}>
						<TouchableHighlight
							underlayColor={'#EC7148'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'empresa' })
							}}>
						<Image style={styles.image} source={menuEmpresa} />
					</TouchableHighlight>
						<TouchableHighlight
							underlayColor={'#19D1C8'}
							activeOpacity={0.3}
							onPress={() => {
								this.props.navigator.push({ id: 'servicos' })
							}}>
						<Image style={styles.image} source={menuServico} />
					</TouchableHighlight>
					</View>
		  		</View>
		</View>
    )
  }
}

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
		marginTop: 20
	},
	menu: {
		marginTop: 20,
		alignItems: 'center'
	},
	menu1: {
		flexDirection: 'row',
	},
	image: {
		margin: 15
	}
})
