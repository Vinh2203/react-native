import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'

class Login extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header:null,
  };
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styleLogin.container}>
        <Image style={styleLogin.logo} source={{
            uri: 'https://facebook.github.io/react/logo-og.png'
          }}/>
        <KeyboardAvoidingView behavior='padding' style={styleLogin.keyboardAvo}>
          <TextInput placeholder="login" style={styleLogin.input} placeholderTextColor='rgba(0,0,0,0.4)'/>

          <TextInput  placeholder='Password' style={styleLogin.input} placeholderTextColor='rgba(0,0,0,0.4)' secureTextEntry={true}/>
        </KeyboardAvoidingView>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styleLogin.btnLogin}>
            <Text style={styleLogin.txtButton}>submit</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default Login;
const styleLogin = StyleSheet.create({
  keyboardAvo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#339cd0',
    alignItems: 'center'
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50
  },

  input: {
    width: '90%',
    height: 50,
    paddingLeft: 25,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 12,
    fontSize: 14,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },

  btnLogin: {
    width: '60%',
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00ace6',
    borderRadius: 5
  },

  txtButton: {
    color: 'white',
    textAlign: 'center'
  }
})
