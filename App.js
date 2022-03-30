import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
Switch

} from 'react-native';

import Slider from '@react-native-community/slider';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			valor: false
		}
	}


	render(){
		return (
			<View style={styles.container}>
				<Switch 
					value={this.state.valor}
					onValueChange={ (value) => {this.setState({ valor: value})}}
					thumbColor="#f00"
				/>

				<Text style={styles.text}>
					{this.state.valor ? 'Ligado' :'Desligado'}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop: 10
	},
	text:{
		marginTop: 25,
		fontSize: 30,
		color: '#000',
		textAlign: 'center'
	}
})

export default App;