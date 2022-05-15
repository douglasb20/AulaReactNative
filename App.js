import React, {useState} from 'react';
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


export default function App(){
	const [nome, setNome] = useState("");

	return(
		<View style={styles.container}>

			<TextInput style={styles.input} placeholder='Seu nome' value={nome} onChangeText={ text => setNome(text)} />

			<Text style={styles.text}>
				{nome.toUpperCase()}
			</Text>

		</View>    
	);


}

const styles = StyleSheet.create({
	container:{
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#DDD'
	},
	text:{
		fontSize:25,
		color: 'black'
	},
	btn:{
		padding:15,
		backgroundColor: '#05f',
		borderRadius: 10
	},
	btnText:{
		color: 'white',
		fontSize:18
	},
	input:{
		borderWidth: StyleSheet.hairlineWidth,
		width: '80%',
		marginBottom:15,
		paddingStart:15

	}
});

