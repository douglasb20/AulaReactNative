import React, {Component} from 'react';
import {
View,
Text,
TextInput,
StyleSheet,
Switch,
TouchableOpacity,

} from 'react-native';

import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
            nome      : '',
            idade     : '',
            sexo      : 0,
            limite    : 0,
            estudante : false,

			selectSexo: ['Masculino', 'Feminino']
		}
		this.abrirConta = this.abrirConta.bind(this);
	}

	abrirConta(){
		if(this.state.nome == "" || this.state.idade == ""){
			alert("Campos de nome e idade não podem ficar em branco");
		}else{
			if(this.state.idade < 18){
				alert("Você não tem idade para abrir conta.\nFaça 18 anos primeiro, privete!!")
			}else{
				alert(
					`Nome Completo: ${this.state.nome}\n` +
					`Idade: ${this.state.idade}\n` +
					`Sexo: ${ this.state.selectSexo[ this.state.sexo ]}\n` +
					`Limite de Conta: R$ ${ this.state.limite.toFixed(2)}\n` +
					`Estudante: ${ this.state.estudante ? 'Sim' : 'Não'}\n\n` +
					`Conta aberta com sucesso!!` 
				);
			}
		}
	}

	render(){
		let sexoLabel = this.state.selectSexo.map( (v,k) => {
			return <Picker.Item key={k} value={k} label={v} />
		})
		return (
			<View style={styles.container}>

				<Text style={styles.caption}>Abra sua conta</Text>

				<Text style={styles.label}>Nome</Text>
				<TextInput 
					autoCapitalize ='characters'
					style={styles.caixaTexto} 
					onChangeText={(text) => this.setState({nome: text.toUpperCase()})}
					value={this.state.nome}
				/>

				<Text style={styles.label}>Idade</Text>
				<TextInput 
					keyboardType='numeric'
					style={styles.caixaTexto}
					onChangeText={(text) => this.setState({idade:text})}
					maxLength={2}
				/>
					

				<Text style={styles.label}>Sexo</Text>
				<Picker 
					selectedValue={this.state.sexo}
					onValueChange={(value) => this.setState({sexo:value})}
				>
					{sexoLabel}
				</Picker>

				<Text style={styles.label}>Limite</Text>
				<Slider 
					minimumValue={0}
					maximumValue={1000}
					value={this.state.limite}
					onValueChange={(limite) => this.setState({limite: limite})}
					step={50}
				/>
				<View style={{alignItems:'flex-end', marginRight: 15}}>
					<Text style={{}}>{this.state.limite.toFixed(2)}</Text>
				</View>

				<Text style={styles.label}>Estudante</Text>
				<Switch 
					value={this.state.estudante}
					onValueChange={(value) => this.setState({estudante:value})}
				/>
				

				<View style={{alignItems:'center'}}>
					<TouchableOpacity style={styles.btn} onPress={this.abrirConta}>
							<Text style={styles.btnText}>Abrir conta</Text>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop: 7,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "lightcyan"
	},
	caption:{
		marginTop: 5,
		marginBottom: 5,
		fontSize: 30,
		color: '#000',
		textAlign: 'center'
	},
	label:{
		fontWeight: 'bold',
		fontSize: 17,
		marginBottom: 10,
		marginTop: 5
	},
	caixaTexto:{
		borderWidth: 0.5,
		height: 40,
		backgroundColor: '#ffffef',
	},
	btn:{
		height:35,
		width:200,
		borderRadius: 15,
		borderColor: "#000",
		justifyContent: 'center',
		backgroundColor: 'lightgreen',
		alignItems: 'center'
	},
	btnText:{
		textAlign:'center',
		fontSize: 18,
		fontWeight: 'bold'
	}
	
})

export default App;