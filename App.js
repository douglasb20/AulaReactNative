import React, {Component} from 'react';
import {
View,
Text,
TextInput,
StyleSheet,
Button,
ActivityIndicator,
TouchableOpacity,
Image,
Keyboard,
FlatList

} from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

export default class App extends Component{

	async componentDidMount(){
		const response = await api.get('r-api/?api=filmes');
		this.setState({
			filmes: response.data,
			loading: false
		})
	}

	constructor(props){
		super(props);
		this.state = {
			filmes: [],
			loading: true
		};
	}

	render(){

		if(this.state.loading){
			return(
				<View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
					<ActivityIndicator color="#09A6FF" size={40} />
				</View>
			)
		}else{

			return(
				<View style={styles.container}>
					<FlatList 
						data={this.state.filmes}
						keyExtractor={item => item.id.toString()}
						renderItem = { ({item}) => <Filmes data={item} />}
					/>
				</View>    
			);
		}


	}

}

const styles = StyleSheet.create({
	container:{
        flex       : 1,
		backgroundColor: '#DDD'
	},
	
});