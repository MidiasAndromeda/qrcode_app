import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{width: 200, height:200, marginBottom:50}} source={require("./src/assets/images/logo_transparent.png")} />
        <Text style={
          {
            fontSize: 30,
            paddingBottom: 20
          }
        }>
          Bienvenue sur GoStyle </Text>
        <Button
          title="Scannez votre QrCode"
          onPress={() => {
            WebBrowser.openBrowserAsync('https://www.twitter.com');
          }}
        />
        <Text style={
          {
            fontSize: 12,
            paddingTop: 20,
            textAlign: 'center'
          }
        } >
          En scannant le QrCode, vous pourrez bénéficier du code promo corresponsant au magasin!
            </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
