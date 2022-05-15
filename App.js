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
			LarAnimada: new Animated.Value(0)
		}

		Animated.timing(
			this.state.LarAnimada,
			{
				toValue: 100,
				duration:3000,
				useNativeDriver: false
			}
		).start()

	}



	render(){
		let porcent = this.state.LarAnimada.interpolate({
			inputRange:[0,100],
			outputRange:['0%','100%']
		})
		return(
			<View style={styles.container}>
				<Animated.View 
					style={{
						backgroundColor:'#4169e1',
						width: porcent,
						height:25
					}}
				>

				</Animated.View>
			</View>    
		);
	}

}

const styles = StyleSheet.create({
	container:{
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'flex-start',
        backgroundColor : '#DDD'
	},
	
});