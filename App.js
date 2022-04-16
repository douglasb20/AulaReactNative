import React, {Component} from 'react';
import {
View,
Text,
TextInput,
StyleSheet,
Button,
Modal,
TouchableOpacity,
Image,
Keyboard,
FlatList

} from 'react-native';


export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			modalVisible: false
		};
        this.entrar = this.entrar.bind(this);
        this.fechar = this.fechar.bind(this);
	}

	entrar(){
		this.setState({
			modalVisible: true
		})
	}

	fechar(){
		this.setState({
			modalVisible: false
		})
	}

	render(){

		return(
			<View style={styles.container}>
				<Button title='Entrar' onPress={this.entrar} />
				<Modal animationType='fade' visible={this.state.modalVisible}>
					<View style={{backgroundColor:'#292929', flex:1}}>
						<Text style={{color:'#FFF', fontSize:18}}>
							Seja Bem-vindo!
						</Text>
						<Button title="Fechar" onPress={this.fechar}/>
					</View>
				</Modal>
			</View>    
		);

	}

}

const styles = StyleSheet.create({
	container:{
        flex       : 1,
		alignItems:'center',
		justifyContent: 'center',
		backgroundColor: '#DDD'
	},
	
});