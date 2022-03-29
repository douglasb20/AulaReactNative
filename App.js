import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,

} from 'react-native';

import {Picker} from '@react-native-picker/picker';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			pizza: 4,
			pizzas:[
				{key: 1, nome: 'Calabresa', valor: 35.90},
				{key: 2, nome: 'Mussarela', valor: 31.90},
				{key: 3, nome: 'Portuguesa', valor: 33.50},
				{key: 4, nome: '4 Queijos', valor: 39.70},
				{key: 5, nome: 'Brigadeiro', valor: 42.15},
			]
		}
	}


	render(){
		let pizzasItem = this.state.pizzas.map( (v,k) => {
			return <Picker.Item key={k} value={k} label={v.nome} />
		});
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Menu Pizza</Text>

				<Picker
					selectedValue={this.state.pizza}
					onValueChange={ (itemValue, itemKey) => this.setState({pizza: itemValue}) }
					prompt="Selecione uma pizza"
				>
					{pizzasItem}
				</Picker>

				<Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
				<Text style={styles.pizzas}>RS {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop: 20,

	},
	logo:{
		textAlign: 'center',
		fontSize: 28,
		fontWeight: 'bold'
	},
	pizzas:{
		marginTop: 15,
		fontSize: 23,
		textAlign: 'center',
	}
})

export default App;