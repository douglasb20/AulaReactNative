import React, {Component} from 'react';
import {
View,
Text,
TextInput,
StyleSheet,
Button,
ActivityIndicator,
TouchableOpacity,
Animated,
Keyboard,
FlatList

} from 'react-native';

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			LarAnimada: new Animated.Value(150),
			AltAnimada: new Animated.Value(35),
			OpAnimada: new Animated.Value(0),
		}

		this.carregarGrafico = this.carregarGrafico.bind(this);
	}

	carregarGrafico(){
		Animated.sequence([
			Animated.timing(
				this.state.OpAnimada,
				{
					toValue: 1,
					duration: 400,
					useNativeDriver: false
				}
			),
			Animated.timing(
				this.state.AltAnimada,
				{
					toValue:300,
					duration: 1000,
					useNativeDriver: false
				}
			)
		]).start()
	}

	render(){

		return(
			<View style={{flex:1}}>
				<View style={{
					height:80,
					alignItems:'center',
					justifyContent:'center',
					flexDirection:'row',
					backgroundColor:'#abc'
				}}>
					<TouchableOpacity onPress={this.carregarGrafico}>
						<Text style={{
							fontSize:25,
							color: 'white'
						}}>
							Gerar Gráfico
						</Text>
					</TouchableOpacity>
				</View>

				<View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
					<Animated.Text style={{opacity:this.state.OpAnimada}}>Vendas</Animated.Text>
					<Animated.View 
						style={{	
                            width           : this.state.LarAnimada,
                            height          : this.state.AltAnimada,
                            backgroundColor : '#FF0000',
                            justifyContent  : 'center',
							opacity: this.state.OpAnimada
						}}
					>
						<Text style={{color:'#fff', fontSize:22, textAlign:'center'}}>R$ 150,00</Text>
					</Animated.View>
				</View>			
			</View>    
		);
	}

}

const styles = StyleSheet.create({
	container:{
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#DDD'
	},
	
});