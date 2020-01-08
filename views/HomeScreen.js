import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';


class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }

  export default HomeScreen;