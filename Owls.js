import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Owls extends Component {
  render() {
    let pic = {
      uri: 'https://spectator.imgix.net/content/uploads/2018/02/owl.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Owls);
