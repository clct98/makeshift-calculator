import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CalculatorButtons = (props) => {
  //title and image are defined in ImageScreen.j
  
  return (
    <View>
        <TouchableOpacity
          onPress={props.onPress}
          style={styles.buttonX}
        >
            <Icon name={props.name} size={32}  style={styles.iconSpace} />
        </TouchableOpacity> 
    </View>
  );
};


const styles = StyleSheet.create({

    iconSpace:{
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 17.5,
      color: 'white',
    },
  
    buttonX:{
      marginBottom: 5,
      marginTop: 50,
      borderColor: '#E27300',
      backgroundColor:'#E27300',
      borderStyle: 'solid',
      alignContent:'center',
      width: 70,
      height: 70,
      borderRadius: 35,
      textAlign: 'center',
    }
  });
export default CalculatorButtons;
