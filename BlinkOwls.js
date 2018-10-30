import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
      super(props);
      this.state = {isShowing: true};

//toggle the state every second
        setInterval(() => {
          this.setState(previousState => {
            return { isShowing: !previousState.isShowing }
          });
        }, 1000);
  }

  render() {
    let pic = {
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ff/07/4b/sweet-potato-spotted.jpg'
    }

    let display= this.state.isShowing ? this.props.text : '';



    return(
      <View>
      <Text>{ display }</Text>
      <Image source={ pic } style={{width: 193, height: 110}}/>
      </View>
    );
  }
}



export default class BlinkOwls extends Component {
  render(){
    return(
      <View>
        <Blink text='Hello' />
      </View>
    )
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkOwls);
