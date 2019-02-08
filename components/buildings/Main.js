import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

export default class Main extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: 'white'}}>
          <Text>Main!</Text>
        </View>
      );
    }
  }