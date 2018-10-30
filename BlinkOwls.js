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
    let pics = {
      uri: this.props.pic
    }
    let display= this.state.isShowing;

   if (display) {
     return(

       <View>
       <Text>{ this.props.text }</Text>
       <Image source={ pics } style={{width: 193, height: 110}}/>
       </View>
     );
   } else {
      return null;
   }

  }
}



export default class BlinkOwls extends Component {
  render(){
    return(
      <View>
        <Blink text='Hello'
                pic='https://media-cdn.tripadvisor.com/media/photo-s/11/ff/07/4b/sweet-potato-spotted.jpg'/>
      </View>
    )
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkOwls);
