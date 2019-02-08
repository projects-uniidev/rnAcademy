import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const list_annex = [
    {
      name: 'Barra Honda',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason:  '',
      screen: 'BarraHonda'
    },
    {
      name: 'Rincon de la Vieja 1',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use',
      user: 'Emmanuel Hernandez',
      reason: 'NMS New Hires Training',
      screen: 'RV1'
    },
    {
      name: 'Rincon de la Vieja 2',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use',
      user: 'Franklin Stennett',
      reason: 'Python for TAC',
      screen: 'RV2'
    },
    {
      name: 'Rincon de la Vieja 3',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason: '',
      screen: 'RV3'
    },
    {
      name: 'Chrirripo',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason: '',
      screen: 'Chirripo'
    },
    {
      name: 'Palo Verde',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason: '',
      screen: 'PaloVerde'
    },
    {
      name: 'Savegre',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use',
      user: 'Jose Arias',
      reason: 'CCNP Route',
      screen: 'Savegre'
    },
    {
      name: 'Barva',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason: '',
      screen: 'Barva'
    },
    {
      name: 'Cacao',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available',
      user: '',
      reason: '',
      screen: 'Cacao'
    },
  
     // more items
  ]

 export default class Annex extends Component {
    render() {
      return (
        <View style={{ flex: 1,backgroundColor: 'white'}}>
          {
            
            list_annex.map((l, i) => (
              //console.warn(l.status + ' - ' + l.user + ': ' + l.reason),
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url }, showEditButton: true, editButton: { name: 'checkbox-blank-circle', type: 'material-community', color: (l.status.indexOf('Available')  ? '#FF0000' : '#008000'), underlayColor: '#000', size: 8 } }}
                title={l.name}
                subtitle={l.status.indexOf('In Use') ? l.status : l.status + ' - ' + l.user + ': ' + l.reason}

                /* TODO: for some reason this doesn't work
                subtitle={(l.status.indexOf('In Use')) ? (l.status + ' - ' + l.user + ': ' + l.reason) : (l.status) }*/

                subtitleStyle={{ fontSize: 10}}

                /* rightSubtitle={l.user}
                rightSubtitleStyle={{ fontSize: 9 ,textAlign: "right" }} */

                rightIcon={<Icon name='keyboard-arrow-right' color='grey' />}
                onPress={()=>this.props.navigation.navigate('BarraHonda')}
              />
            ))
          } 
        </View>
      );
    }
  }

  /*const StackNavigator = createStackNavigator({
    Annex: {
      screen: Annex
    },
    BarraHonda: {
      screen: BarraHonda,
      navigationOptions: ({ navigation })=> {
        return {
          headerTitle: 'Barra Honda'
        }
      }
    }
  },{
    navigationOptions:({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return{
        header: null,
        headerTitle: routeName
      }
    }})
  
  const AppContainer = createAppContainer(StackNavigator)

  export default AppContainer;*/