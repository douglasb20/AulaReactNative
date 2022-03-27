import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
TouchableOpacity,
Image
} from 'react-native';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			numero: 0,
			botao: 'VAI',
			ultimo: null
		}

		// Variavel do timer relogio
    this.timer   = null;
    this.vai     = this.vai.bind(this);
    this.limpar  = this.limpar.bind(this);
    this.formata = this.formata.bind(this);

	}

	vai(){
		this.formata(1);
		if(this.timer != null){
			// Aqui vai parar o timer
			clearInterval(this.timer);
			this.timer = null;
			this.setState({ botao: 'VAI'})
		}else{
			
			this.timer = setInterval( () =>{
				this.setState({ numero: this.state.numero + 0.1 })
			},100 );
			this.setState({ botao: 'PAUSAR'})
		}
	}

	limpar(){
		if(this.timer != null){
			clearInterval(this.timer)
			this.timer = null;
		}
		this.setState({
			ultimo: this.state.numero,
			numero: 0,
			botao: 'VAI'
		})
	}

	formata(num){
		let min = ('00'+ Math.floor(num / 60).toFixed(0)).slice(-2);
		let seg = ('00'+ Math.floor(num % 60).toFixed(0)).slice(-2);
		return `${min}:${seg}`;
	}

	render(){

    return (
      <View style={styles.container}>
				<Image 
					source={require('./src/cronometro.png')}
					style={styles.img}
				/>

				<Text style={styles.timer}>{this.formata(this.state.numero)}</Text>

				<View style={styles.btns}>
					<TouchableOpacity style={styles.btn} onPress={this.vai}>
						<Text style={styles.btnTexto}>{this.state.botao}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btn} onPress={this.limpar}>
						<Text style={styles.btnTexto}>Parar</Text>
					</TouchableOpacity>
				</View>

				<View syle={styles.areaUltimo}>
					<Text style={styles.textoCorrida}>
						{this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.formata(this.state.ultimo) + 's' : ''}
					</Text>
				</View>

		  </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#00aeef"
	},
	img:{
		
	},
	timer:{
		marginTop: -150,
		fontSize:50,
		color: '#fff',
		fontWeight: 'bold'
	},
	btns:{
		flexDirection: 'row',
		marginTop: 100,

	},
	btn:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		height: 40,
		margin: 17,
		borderRadius: 9,

	},
	btnTexto:{
		fontSize: 20,
		fontWeight: 'bold',
		color: '#00aeef'
	},
	areaUltimo:{

	},
	textoCorrida:{
		fontSize: 25,
		fontStyle: 'italic',
		color: "#fff"
	}
	

})

export default App;