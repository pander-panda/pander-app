import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

// for animations
import * as Animatable from 'react-native-animatable';

class LoginScreen extends Component{

  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    this.loginHeight = new Animated.Value(150)
  }

  increaseHeightOfLogin = () => {
    Animated.timing(this.loginHeight,{
      toValue:SCREEN_HEIGHT,
      duration:500
    }).start()
  }

  render() {

    // for use the onclick animation
    const headerTextOpacity = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [1,0] // fade to transparent
    }) 
    
    const marginTop = this.loginHeight.interpolate({
      inputRange: [150, SCREEN_HEIGHT],
      outputRange: [25,100] // add a lot of margin
    }) 


    return <View style={{ flex: 1 }}>
        <ImageBackground source={require("../assets/login_bg.jpg")} style={{ flex: 1 }}>
          {/* Pander Logo Box */}
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animatable.View animation="zoomIn" iterationCount={1} style={{ backgroundColor: "white", height: 125, width: 125, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                PANDER
              </Text>
            </Animatable.View>
          </View>

          {/* Bottom Half */}
          <Animatable.View animation="slideInUp" iterationCount={1}>
            {/* 'Get stuff done' section */}
            <Animated.View style={{ height: this.loginHeight, backgroundColor: "white" }}>
              <Animated.View style={{ 
                opacity: headerTextOpacity, // animated
                 alignItems: "flex-start", 
                 paddingHorizontal: 25, 
                 marginTop: marginTop, // animated 
              }}>
                <Text style={{ fontSize: 22 }}>
                  Get stuff done, with Pander
                </Text>
              </Animated.View>

              <TouchableOpacity onPress={() => this.increaseHeightOfLogin()}>
                <View style={{ marginTop: 25, paddingHorizontal: 25, flexDirection: "row" }}>
                  <Image source={require("../assets/nigeria.jpg")} style={{ height: 24, width: 24, resizeMode: "contain" }} />

                  <View pointerEvents="none" style={{ flexDirection: "row", flex: 1 }}>
                    {/* Country Code */}
                    <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                      +234
                    </Text>
                    {/* Phone Number Input */}
                    <TextInput style={{ flex: 1, fontSize: 16 }} placeholder="Enter your mobile number" underlineColorAndroid="transparent" />
                  </View>
                </View>
              </TouchableOpacity>
            </Animated.View>

            {/* 'Connect with social' section */}
            <View style={{ height: 50, backgroundColor: "white", alignItems: "center", justifyContent: "center", borderTopColor: "#e8e8ec", borderTopWidth: 1, paddingHorizontal: 25 }}>
              <Text style={{ color: "#000", fontWeight: "bold" }}>
                Or connect using a social account
              </Text>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>;
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})