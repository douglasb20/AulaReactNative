import React, {useState, useRef } from 'react';
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

import api from './src/services/api';


export default function App(){
    const [cep, setCep]         = useState('');
    const [cepUser, setCepUser] = useState(null);
    const inputRef              = useRef(null);

	async function buscaCep(){
		
		setCepUser(null);

		if(cep == ''){
			alert('Digite um cep válido.');
			setCep('');
			return;
		}

		if(cep.length < 8){
			alert('Cep tem que ter 8 caracteres.');
			return;
		}

		await api.get(`/${cep}/json`)
		.then(resp => {
			Keyboard.dismiss();
			setCepUser(resp.data);
		})
		.catch(err => {
			alert("Erro ao processar. Motivo: " + err);
		});

	} 

	function limparTudo(){
		setCep('');
		setCepUser(null);
		inputRef.current?.focus();
	}

	return(
		<View style={styles.container}>
			<TextInput 
				ref={inputRef}
				placeholder="Digite um CEP" 
				style={styles.input} 
				value={cep}
				onChangeText={ text => setCep(text)}
				keyboardType='numeric'
			/>
			<View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:"100%"}}>
				<TouchableOpacity style={styles.btn} onPress={buscaCep}>
					<Text style={styles.btnText}>
						Buscar
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.btn, {backgroundColor:'#F25'}]} onPress={limparTudo}>
					<Text style={styles.btnText}>
						Limpar
					</Text>
				</TouchableOpacity>
			</View>
			{cepUser && 
				<View style={styles.resultado}>
					<Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
					<Text style={styles.itemText}>Rua: {cepUser.logradouro}</Text>
					<Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
					<Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
					<Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
				</View>
			}
		</View>    
	);


}

const styles = StyleSheet.create({
	container:{
        flex            : 1,
        justifyContent  : 'flex-start',
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
		borderRadius: 10,
		
		alignItems:'center',
		justifyContent:'center'
	},
	btnText:{
		color: 'white',
		fontSize:18,
	},
	input:{
		borderWidth: StyleSheet.hairlineWidth,
		width: '80%',
		marginBottom:15,
		paddingStart:15,
		marginTop:15

	},
	resultado:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}, 
	itemText:{
		fontSize:18
	}
});

