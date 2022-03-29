import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Pessoa extends Component{
	render(){
		return(
			<View style={styles.areaPessoa}>
				<Text style={styles.textoPessoa}> {this.props.data.nome}</Text>
				<Text style={styles.textoPessoa}> {this.props.data.idade}</Text>
				<Text style={styles.textoPessoa}> {this.props.data.email}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    areaPessoa:{
		backgroundColor: '#222',
		height: 150,
		marginBottom: 20,
	},
	textoPessoa:{
		color:'white',
		fontSize:20
	}
})


export default Pessoa;