import React, {Component} from 'react';
import {
View,
Text
} from 'react-native';

class App extends Component {

	render(){

    return (
      <View style={{flex:1,
										flexDirection:'column', 
										alignItems: 'center', 
										justifyContent: 'space-between', 
										backgroundColor: '#aaa'}}
			>

				<View style={{width: 50, height:50, backgroundColor: 'lightblue'}} ></View>
				<View style={{width: 50, height:50, backgroundColor: 'lightgreen'}} ></View>
				<View style={{width: 50, height:50, backgroundColor: 'lightyellow'}} ></View>

		  </View>
    );
  }
}


export default App;