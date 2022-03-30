import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,

} from 'react-native';

import Slider from '@react-native-community/slider';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			valor: 0
		}
	}


	render(){
		return (
			<View style={styles.container}>
				<Slider 
					minimumValue={0}
					maximumValue={100}
					onValueChange={(value) => this.setState({valor: value})}
					value={this.state.valor}
					minimumTrackTintColor="#2544aa"
					maximumTrackTintColor='#f00'
				/>
				<Text style={{fontSize:30, color:'black', textAlign:'center'}}>{this.state.valor.toFixed(2)}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop: 10
	},
})

export default App;