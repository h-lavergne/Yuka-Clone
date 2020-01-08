import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class DetailProductScreen extends React.Component {

    
    render() {
        const { getParam } = this.props.navigation
      let product = getParam('product')

    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
              
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style= {{ marginTop: 25}}>
                    <Text style={styles.title}>{product.product_name}</Text>
                    <Image 
                        style={styles.images} 
                        source={{uri: product.image_front_thumb_url}}/>
                </View>
            </View>
    
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.item}>
                    <Text>{product.ingredients_text_fr}</Text>
                </View>
            </View>

            <View style = {{marginBottom: 25, marginTop: 15}}>
                <Button title= "Go back to home"
                    onPress = {() => {this.props.navigation.navigate("Home")}}/>
            </View> 
           
            
        </View>  
        </ScrollView>

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
 
  title: {
    fontSize: 22,
  },
});

  
  export default DetailProductScreen;