import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image,StyleSheet} from 'react-native'

class Login extends Component {
  render() {
    return (<View style={styleLogin.container}>
      <View>
        <Image style={styleLogin.logo} source={{
            uri: 'https://facebook.github.io/react/logo-og.png'
          }}/>
      </View>

      <View>
        <TextInput value="" placeholder="login" placeholderTextColor='rgba(0,0,0,0.4)'/>

        <TextInput value="" placeholder='Password' placeholderTextColor='rgba(0,0,0,0.4)' secureTextEntry={true}/>
      </View>
      <TouchableOpacity onPress={this._onPressButton}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>)
  }
}

const styleLogin = StyleSheet.create({
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
  }
})
export default Login;
