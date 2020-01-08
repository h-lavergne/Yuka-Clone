import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './views/HomeScreen'
import CameraScreen from './views/CameraScreen'
import DetailScreen from './views/DetailScreen'

const HomeStack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Detail: { screen: DetailScreen }
    }
);

const TabNavigator = createBottomTabNavigator(
{
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({focused,tintColor}) => (
                <Icon
                    focused={focused}
                    tintColor={{ tintColor }}
                    name="home"
                    color={tintColor}
                    active={focused}
                    size={24}
                />
            ),
        })
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
                    color={tintColor}
                    size={24}
                />
            ),
        })
    },
    },
    {
    tabBarOptions: { 
        showLabel: false,
        activeTintColor: '#f0f',
        inactiveTintColor: '#fff', 
    }
}
);

export default createAppContainer(TabNavigator);