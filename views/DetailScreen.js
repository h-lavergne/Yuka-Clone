import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';


class DetailScreen extends React.Component {

    render() {
      const { getParam } = this.props.navigation
      let product = getParam('product')

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{ product.product.product_name }</Text>
          <Button title= "Go back to home"
           onPress = {() => {this.props.navigation.navigate("Home")}}/>
        </View>
      );
    }
  }
  
  export default DetailScreen;