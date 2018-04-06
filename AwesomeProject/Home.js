/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Welcome',
    header:null,
  };
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text >Hello world</Text>
          <Bananas></Bananas>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          <LotsOfGreentings />
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <BlinkApp />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={styles.btnLogin}>
            <Text style={styles.txtButton}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Bananas extends Component {

  render() {
    var width = Dimensions.get('window').width;
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (<Image source={pic} style={{
        width: width,
        height: 110
      }}/>);
  }
}

class Greeting extends Component {
  render() {
    return (<Text style={styles.red}>Hello {this.props.name}!</Text>);
  }
}

class LotsOfGreentings extends Component {
  render() {
    return (<View style={{
        alignItems: 'center'
      }}>
      <Greeting name="Test"></Greeting>
      <Greeting name="Test1"></Greeting>
    </View>)
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };

    setInterval(() => {
      this.setState(previousState => {
        return {
          isShowingText: !previousState.isShowingText
        };
      })
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText
      ? this.props.text
      : '';
    return (<Text>{display}</Text>)
  }
}

class BlinkApp extends Component {
  render() {
    return (<View>
      <Blink style={styles.green} text="Text props1"></Blink>
      <Blink style={styles.red} text="Text props2"></Blink>
      <Blink text="Text props3"></Blink>
    </View>)
  }
}
const styles = StyleSheet.create({
  green: {
    color: '#ff00ff'
  },
  red: {
    color: 'red'
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
});
