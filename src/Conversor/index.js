import React, { Component } from 'react'
import {
Text, 
View,
StyleSheet,
TextInput,
TouchableOpacity,
Keyboard
} from 'react-native'

import api from '../services/api';


class Conversor extends Component {

    async componentDidMount(){
		const response = await api.get('api/v7/convert?q=USD_BRL&compact=ultra&apiKey=fc8ad5ac35a446d3c7f3');
		this.setState({
			moeda: response.data,
			loading: false
		})
		console.log(response.data)
	}

	constructor(props){
		super(props);
		this.state = {
			moedaA: props.moedaA,
			moedaB: props.moedaB,
            moedaB_valor: 0,
            valor_convertido: 0,
			loading: true
		};

        this.converter = this.converter.bind(this)
	}

    async converter(){
        if(this.state.moedaB_valor === 0){
            alert("Preencha um valor par ser convertido.");
        }else{
            let de_para    = `${this.state.moedaA}_${this.state.moedaB}`;
            const response = await api.get(`api/v7/convert?q=${de_para}&compact=ultra&apiKey=fc8ad5ac35a446d3c7f3`);
            let conversao  = parseFloat(this.state.moedaB_valor) * response.data[de_para];
            this.setState({valor_convertido: conversao});
            Keyboard.dismiss()
        }
    }

    render() {
        const {moedaA, moedaB} = this.props;
        return (
        <View style={styles.container}>
            <Text style={styles.titulo}> {moedaA} para {moedaB}</Text>

            <TextInput 
                keyboardType='numeric'
                style={styles.moedas} 
                placeholder="Valor a ser convertido"
                onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
            />

            <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                <Text style={styles.botaoTexto}>Converter</Text>
            </TouchableOpacity>

            <Text style={styles.valorConvertido}>{this.state.valor_convertido.toFixed(2)}</Text>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    moedas:{
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    botaoArea:{
        width: 145,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        
    },
    botaoTexto:{
        fontSize: 17,
        color: '#FFF',
        fontWeight: 'bold'
    },
    valorConvertido:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
})

export default Conversor;