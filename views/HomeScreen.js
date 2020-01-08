import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button,Image, FlatList, ActivityIndicator } from 'react-native';
import DetailScreen from "./DetailScreen"



export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('https://fr-en.openfoodfacts.org/category/pizzas.json')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.products,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    

        
      
    
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
          <Text>Home!</Text>
          <FlatList style={styles.flatView}
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={styles.item}>{item.product_name} onPress={() => this.props.navigation.navigate("Detail") }</Text>}
          keyExtractor={({id}, index) => id}
        />
        
          <Button 
                    onPress={() => this.props.navigation.navigate("Detail", {name: "Data pass"})} //BAH ALORS CA MARCHE PAS
                    title= "Go to detail"
                    />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#5DCAE1',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    flatView: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
      fontSize: 32,
    },
  });

