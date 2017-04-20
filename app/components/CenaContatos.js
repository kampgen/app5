import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import Header from './Header'

const detalheContatos = require('../assets/detalhe_contato.png')

//#B9C941
export default class CenaContatos extends Component {
  render() {
    return (
		<View style={{ backgroundColor: '#FFF', flex: 1 }}>
			<StatusBar backgroundColor = '#61BD8C' />
			  <Header voltar navigator={this.props.navigator} corBG='#61BD8C' />
				<View style={styles.cabecalho}>
					<Image source={detalheContatos} />
					<Text style={styles.txtTitulo}>Contatos</Text>
		  		</View>
				<View style={styles.contatos}>
					  <Text style={styles.txtContatos}>TEL: (51) 1234-5678</Text>
					  <Text style={styles.txtContatos}>CEL: (51) 8765-4321</Text>
					  <Text style={styles.txtContatos}>EMAIL: contatos@atmconsultoria.com</Text>
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
		color: '#61BD8C',
		marginLeft: 30,
	},
	contatos: {
		marginTop: 20,
		padding: 20
	},
	txtContatos: {
		fontSize: 18
	}
})
