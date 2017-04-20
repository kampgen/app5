import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import CenaPrincipal from './app/components/CenaPrincipal'
import CenaClientes from './app/components/CenaClientes'
import CenaContatos from './app/components/CenaContatos'
import CenaEmpresa from './app/components/CenaEmpresa'
import CenaServicos from './app/components/CenaServicos'

export default class app5 extends Component {
  render() {
    return (
		<Navigator
			initialRoute={{ id: 'home' }}
			renderScene={(route, navigator) => {

				switch (route.id) {
					case 'home':
						return <CenaPrincipal navigator={navigator} />
					case 'clientes':
						return <CenaClientes navigator={navigator} />
					case 'contatos':
						return <CenaContatos navigator={navigator} />
					case 'empresa':
						return <CenaEmpresa navigator={navigator} />
					case 'servicos':
						return <CenaServicos navigator={navigator} />

					default:
						return false
				}

				//definindo cena com base na rota
				// if (route.id === 'home') {
				// 	//exibir cenaPrincipal
				// 	return <CenaPrincipal navigator={navigator} />
				// }
				// if (route.id === 'clientes') {
				// 	//exibir cenaClientes
				// 	return <CenaClientes navigator={navigator} />
				// }
				// if (route.id === 'contatos') {
				// 	//exibir cenaContatos
				// 	return <CenaContatos navigator={navigator} />
				// }
				// if (route.id === 'empresa') {
				// 	//exibir cenaEmpresa
				// 	return <CenaEmpresa navigator={navigator} />
				// }
				// if (route.id === 'servicos') {
				// 	//exibir cenaEmpresa
				// 	return <CenaServicos navigator={navigator} />
				// }
			} }
		 />
    )
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('app5', () => app5);
