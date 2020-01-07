import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}




class OpenedCamera extends React.Component
{
    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back,
      }
    
      
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
      }

      handleCameraType=()=>{
        const { cameraType } = this.state
    
        this.setState({cameraType:
          cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
        })
      }

      takePicture = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
        }
      }

      render(){
        const { hasPermission } = this.state
        if (hasPermission === null) {
          return <View />;
        } else if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
              <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={this.state.cameraType}>
                
                <View style={{flex:1, flexDirection:"row",justifyContent:"space-evenly",margin:20}}>
                    
                    <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                    }}
                    onPress={()=>this.handleCameraType()}
                    >
                    <MaterialCommunityIcons
                        name="camera-switch"
                        style={{ color: "#fff", fontSize: 40}}
                    />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        }}>
                        <FontAwesome
                            name="camera"
                            style={{ color: "#fff", fontSize: 40}}
                        />
                    </TouchableOpacity>
                    </View>
                </Camera>
            </View>
          );
        }
      }
    }






const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Camera: OpenedCamera
});

export default createAppContainer(TabNavigator);