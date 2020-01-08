import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import HomeScreen from './views/HomeScreen'
import CameraScreen from './views/CameraScreen'
import DetailScreen from './views/DetailScreen'

const HomeStack = createStackNavigator(
    {
      Home: { screen: HomeScreen,
      navigationOptions: ({navigation}) =>({
        title: "HomeScreen",
        headerTitleStyle: {color: "black"},
        headerStyle: {backgroundColor: "blue"}
      }) },
      Detail: { screen: DetailScreen,
        navigationOptions: ({navigation}) =>({
          title: "DetailScreen",
          headerTitleStyle: {color: "black"},
          headerStyle: {backgroundColor: "blue"}
        }) }
  
    }
);

const TabNavigator = createBottomTabNavigator(
{
    Home: {
        screen: HomeStack,
        navigationOptions: () => ({
            tabBarIcon: ({focused, tintColor }) => (
                <Icon // ATTEND 2 SECONDES
                  focused={focused}
                  tintColor={{ tintColor }}
                  name='home'
                  color= {tintColor}
                  size={24}
                  style={{color:tintColor}}
                />
          )
        }) //VOILA 

    },

    Camera: {
        screen: CameraScreen,
        navigationOptions: () => ({
            tabBarIcon: ({focused, tintColor }) => (
                <Icon
                    focused={focused}
                    tintColor={{ tintColor }}
                    type="MaterialCommunityIcons"
                    name="barcode-scan"
                    size={24}
                    style={{color:tintColor}}
                />
            ),
        })
    },
},
    {
        tabBarOptions: { 
            showIcon:true,
            showLabel:false,
            activeTintColor: 'blue',
            inactiveTintColor: 'grey', 
        }
    }
);

const AppContainer =  createAppContainer(TabNavigator, HomeStack);

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
}
