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
			textoFrase: 'São os nossos amigos que nos ensinam as mais valiosas lições.',
			img: require('./src/biscoito.png'),
		}
		this.quebraBiscoito = this.quebraBiscoito.bind(this);

		this.frases = [
			'A vida trará coisas boas se tiveres paciência.',
			'Não compense na ira o que lhe falta na razão.',
			'Defeitos e virtudes são apenas dois lados da mesma moeda.',
			'A maior de todas as torres começa no solo.',
			'Não há que ser forte. Há que ser flexível.',
			'Gente todo dia arruma os cabelos, por que não o coração?',
			'A juventude não é uma época da vida, é um estado de espírito.',
			'Siga os bons e aprenda com eles.',
			'Não importa o tamanho da montanha, ela não pode tapar o sol.',
			'O bom-senso vai mais longe do que muito conhecimento.',
			'Quem quer colher rosas deve suportar os espinhos.',
			'São os nossos amigos que nos ensinam as mais valiosas lições.',
		];

	}

	quebraBiscoito(){
		let nmrAleat = Math.floor(Math.random() * this.frases.length );

		this.setState({
			textoFrase: this.frases[nmrAleat],
			img: require('./src/biscoitoAberto.png')
		})
	}

	render(){

    return (
      <View style={styles.container}>
				<Image 
					source={this.state.img}
					style={styles.img}
				/>
				<Text style={styles.textoFrase}>"{this.state.textoFrase}"</Text>

				<TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
					<View style={styles.btnArea}>
						<Text style={styles.btnTexto}>
							Quebrar Biscoito
						</Text>
					</View>
				</TouchableOpacity>
		  </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img:{
		width: 250,
		height: 250,
	},
	textoFrase:{
		fontSize: 20,
		color: '#dd7b22',
		textAlign: 'center',
		fontStyle: 'italic'
	},
	btn:{
		marginTop:15,
		width: 230,
		height: 50,
		borderWidth: 2,
		borderColor: '#dd7b22',
		borderRadius: 25
	},
	btnArea:{
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnTexto:{
		color: '#dd7d00',
		fontSize: 18,
		fontWeight: 'bold'
	}

})

export default App;