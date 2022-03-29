import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
ScrollView,
FlatList
} from 'react-native';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			feed: [
				{id:1, nome: 'Douglas', idade: 33, email: 'douglas@douglas.com'},
				{id:2, nome: 'Rayene', idade: 28, email: 'rayene@douglas.com'},
				{id:3, nome: 'Beatriz', idade: 8, email: 'beatriz@douglas.com'},
				{id:4, nome: 'Bianca', idade: 4, email: 'bianca@douglas.com'},
				{id:5, nome: 'Ivano', idade: 60, email: 'Ivano@douglas.com'},
			]
		}

	}


	render(){
		return (
			<View style={styles.container}>
				<FlatList 
					keyExtractor={(item) => item.id}
					data={this.state.feed}
					renderItem={({item}) => <Pessoa data={item} />}
				/>
			</View>
		);
    }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	areaPessoa:{
		backgroundColor: '#222',
		height: 200,
		marginBottom: 15,
	},
	textoPessoa:{
		color:'white',
		fontSize:20
	}

})

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

export default App;