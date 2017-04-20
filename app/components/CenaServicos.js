import React, { Component } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import Header from './Header'

const detalheServicos = require('../assets/detalhe_servico.png')

//#B9C941
export default class CenaServicos extends Component {
  render() {
    return (
		<View style={{ backgroundColor: '#FFF', flex: 1 }}>
			<StatusBar backgroundColor = '#19D1C8' />
			  <Header voltar navigator={this.props.navigator} corBG='#19D1C8' />
				<View style={styles.cabecalho}>
					<Image source={detalheServicos} />
					<Text style={styles.txtTitulo}>Nossos Serviços</Text>
		  		</View>
				<View style={styles.servicos}>
					  <Text style={styles.txtServicos}>- Consultoria</Text>
					  <Text style={styles.txtServicos}>- Processos</Text>
					  <Text style={styles.txtServicos}>- Acompanhamento de Projetos</Text>
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
		color: '#19D1C8',
		marginLeft: 30,
	},
	servicos: {
		marginTop: 20,
		padding: 20
	},
	txtServicos: {
		fontSize: 18
	}
})
