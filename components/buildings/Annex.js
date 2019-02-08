import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const list_annex = [
    {
      name: 'Barra Honda',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
    {
      name: 'Rincon de la Vieja 1',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use\n Emmanuel Hernandez'
    },
    {
      name: 'Rincon de la Vieja 2',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use\n Franklin Stennett'
    },
    {
      name: 'Rincon de la Vieja 3',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
    {
      name: 'Chrirripo',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
    {
      name: 'Palo Verde',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
    {
      name: 'Savegre',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'In Use\n Jose Arias'
    },
    {
      name: 'Barva',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
    {
      name: 'Cacao',
      avatar_url: 'https://via.placeholder.com/128',
      status: 'Available'
    },
  
     // more items
  ]

export default class Annex extends Component {
    render() {
      return (
        <View style={{ flex: 1,backgroundColor: 'white'}}>
          {
            list_annex.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url }, showEditButton: true, editButton: { name: 'checkbox-blank-circle', type: 'material-community', color: (l.status.indexOf('Available')  ? '#FF0000' : '#008000'), underlayColor: '#000', size: 8 } }}
                title={l.name}
                rightSubtitle={l.status}
                rightSubtitleStyle={{ fontSize: 9 ,textAlign: "right" }}
                rightIcon={<Icon name='keyboard-arrow-right' color='grey' />}
              />
            ))
          } 
        </View>
      );
    }
  }