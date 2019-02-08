import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './components/buildings/Main';
import Annex from './components/buildings/Annex';
import BarraHonda from './components/buildings/Annex/BarraHonda';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

class BuildingsScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 , backgroundColor: 'white'}}>
        <Card
            title='Main Building'
            image={require('./assets/placeholder_TR.png')}>
          <Text style={{marginBottom: 10}}>
            Status from training rooms @ Main Building.
          </Text>
          <Button
            //icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{backgroundColor: 'black', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='More' 
            onPress={()=>this.props.navigation.navigate('Main')}/>
          </Card>

          <Card
            title='Annex'
            image={require('./assets/placeholder_TR.png')}>
          <Text style={{marginBottom: 10}}>
          Status from training rooms @ Annex Building.
          </Text>
          <Button
            //icon={<Icon name='bookmark' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{backgroundColor: 'black', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='More'
            onPress={()=>this.props.navigation.navigate('Annex')} />
          </Card>



          
      </ScrollView>
    );
  }
}

class ReserveScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: 'white'}}>
        <Text>Reserve!</Text>
      </View>
    );
  }
}

class RemoveScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: 'white'}}>
        <Text>Remove Reservation!</Text>
      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator({
  Buildings:{
    screen: BuildingsScreen,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Sykes Room Reservation'
      }
    }
  },
  
  Main: {
    screen: Main,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Main Building'
      }
    }
  },

  Annex: {
    screen: Annex,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Annex Building',
      }
    }
  },
  BarraHonda: {
    screen: BarraHonda,
    navigationOptions: ({ navigation })=> {
      return {
        headerTitle: 'Barra Honda'

      }
    }
  },  
})


const TabNavigator = createBottomTabNavigator({
  Rooms: {
    screen: MainStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='map-marker' />
      )
    } 
  },
  Reserve:{ 
    screen : ReserveScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='calendar' />
      )
    } 
  },
  Release: {
    screen: RemoveScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type='material-community' name='calendar-remove' />
      )
    } 
  } 
},{
  navigationOptions:({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    return{
      header: null,
      headerTitle: routeName
    }
  }

});

const StackNavigator = createStackNavigator({
  TabNavigator: TabNavigator

});



const AppContainer = createAppContainer(StackNavigator);