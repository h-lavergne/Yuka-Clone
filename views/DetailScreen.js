import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, Image, Dimensions } from 'react-native';
const width = Dimensions.get("window").width;

class DetailScreen extends React.Component {

    render() {
      const { getParam } = this.props.navigation
      let product = getParam('product')
      

      return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
              
            <View style={{ flex: 1}}>
                <View style= {{ marginTop: 25}}>
                    <Text style={styles.title}>{product.product.product_name}</Text>
                    <Image 
                        style={styles.images} 
                        source={{uri: product.product.image_front_thumb_url}}/>
                </View>
            </View>
    
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.itemFullW}>
                  <Text style={styles.title}>Catégories: </Text>
                  <Text>{product.product.categories ?? "Aucune description pour ce produit"}</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.itemFullW}>
                  <Text style={styles.title}>Packaging: </Text>
                  <Text>{product.product.packaging ?? "Aucune description pour ce produit"}</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.itemFullW}>
                  <Text style={styles.title}>Ingredients: </Text>
                  <Text>{product.product.ingedrients_text ?? "Aucun ingrédients pour ce produit"}</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.itemFullW}>
                  <Text style={styles.title}>Nutriments: </Text>
                  <Text>Score: {product.product.nutriscore_data.score ?? "inconnu"}/100</Text>
                  <Text>Sucre/100g: {product.product.nutriments.sugars_100g ?? "0g"}g</Text>
                  <Text>Valeur énergétique: {product.product.nutriscore_data.energy ?? "0"}{product.product.nutriments.energy_unit}</Text>
                  <Text>Alcool: {product.product.nutriments.alcohol ?? "0"}%</Text>
                  <Text>Proteines: {product.product.nutriments.proteins ?? "0"}g</Text>
                  <Text>Sel: {product.product.nutriments.sodium ?? "0"}g</Text>

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
  itemFullW: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: width - 40
  },
  images: {
      marginVertical: 8,
      height: 180,
      width: 180
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    
  },
});
  
  export default DetailScreen;