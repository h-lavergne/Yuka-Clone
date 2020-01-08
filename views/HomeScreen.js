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
            
          <Text style={{ marginTop: 20, fontSize: 24 }}>Les Pizzas !</Text>
          <FlatList style={styles.flatView}
          data={this.state.dataSource}
          renderItem={({item}) =><View style={styles.item}>
              
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title} >{item.product_name} </Text>
                <Image 
          style={styles.images} 
          source={{uri:item.image_front_thumb_url}}/>
            </View>

            <Button title= "Detail du produit"
           onPress = {() => {this.props.navigation.navigate("Detail")}}/>
          
          </View>  }
           
          keyExtractor={({id}, index) => id}
        />
        
          
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#E5E5E5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    images: {
        marginVertical: 8,
        height: 180,
        width: 180
    },
    flatView: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
      fontSize: 22,
    },
  });

