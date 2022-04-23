import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
Image
} from 'react-native';


class Filmes extends Component{
    render(){
        const dados = this.props.data;
        return(
            <View style={styles.viewList}>
                <Image 
                style={styles.imgList} 
                source={{uri: dados.foto}} 
                resizeMode="stretch"
                resizeMethod="auto"
                />
                <Text style={styles.nomeList}>
                    {dados.nome}
                </Text>
                <Text style={styles.sinopseList}>
                    {'\t\t' + dados.sinopse}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewList:{
        flex:1,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 6},
        shadowOpacity: 0.50,
        shadowRadius: 8.22,
        elevation: 13,

    },
    imgList:{
        height:150,
        width: '100%',
        

    },
    nomeList:{
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    sinopseList:{
        fontSize: 15,
        color: '#000',
        fontFamily: 'arial'
        
    }
})

export default Filmes;