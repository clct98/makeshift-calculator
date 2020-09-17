import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CalculatorButtons from '../components/CalculatorButtons';

const CalculatorScreen = () => {


  const [firstInput, first] = useState('');
  const [secInput, second] = useState('');
  const [operand, operandDecl] = useState('');
  const [result, finalAns] = useState(0)


  validate = (firstInput, secInput, operand) => {
    let value
    let regex = /^([+-]?[1-9]\d*\.?\d*|0)$/
    console.log(firstInput);
    console.log(secInput);
    console.log(result);
    if (regex.test(firstInput) === true) {
      if (regex.test(secInput) === true) {
        if (operand === "+") {
          let value = parseFloat(firstInput) + parseFloat(secInput)
          return value
        } else if (operand === "-") {
          let value = parseFloat(firstInput) - parseFloat(secInput)
          return value
        } else if (operand === "*") {
          let value = parseFloat(firstInput) * parseFloat(secInput)
          return value
        } else if (operand === "/") {
          let value = parseFloat(firstInput) / parseFloat(secInput)
          return value
        }
      } else {
        Alert.alert("Error Input", "Please Enter a valid Integer");
      }
    } else {
      Alert.alert("Error Input", "Please Enter a valid Integer");
    }
  }

  return (

    <View style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={{width: 330, height: 150, backgroundColor: 'white', marginTop: 20,  justifyContent: 'center'}}>
          <Text style={{alignSelf: 'flex-end', marginRight: 7, fontSize: 60}}>
            {result}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text></Text>
          <Text></Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}} >
          <TextInput
            value={firstInput}
            style={{ height: 70, width: 125, borderColor: 'white',backgroundColor: 'white', borderWidth: 3, color: 'black', paddingLeft: 10, fontSize: 40 }}
            onChangeText={value => first(value)}
            keyboardType="numeric"
          />
          <Text style={styles.textOperand}>{"    "}{operand}{"    "}</Text>
          <TextInput
            value={secInput}
            style={{ height: 70, width: 125, borderColor: 'white',backgroundColor: 'white', borderWidth: 3, color: 'black', paddingLeft: 10, fontSize: 40 }}
            onChangeText={value => second(value)}
            keyboardType="numeric"
          /> 
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between", textAlign: 'center',}}>
          <CalculatorButtons name="plus" onPress={() => { operandDecl('+'); }}></CalculatorButtons>
          <CalculatorButtons name="minus" onPress={() => { operandDecl('-'); }}></CalculatorButtons>
          <CalculatorButtons name="times" onPress={() => { operandDecl('*'); }}></CalculatorButtons>
          <CalculatorButtons name="divide" onPress={() => { operandDecl('/'); }}></CalculatorButtons>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>

          <TouchableOpacity
            onPress={() => {
              operandDecl('')
              first('')
              second('')
              finalAns('')
            }}
            style={styles.buttonC}
          ><Text style={styles.textC}>C</Text>
          </TouchableOpacity>
          <Text>{"        "}</Text>
          <TouchableOpacity
            onPress={() => {
                finalAns(validate(firstInput, secInput, operand));
            }}
            style={styles.buttonE}
          ><Text style={styles.textE}>=</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    color: 'white'
  },

  textC: {
    color: 'white',
    fontSize: 40,
    textAlign:'center',
    fontWeight: 'bold',
    paddingRight: 6.5,
  },

  textE: {
    color: 'white',
    fontSize: 40,
    textAlign:'center',
    fontWeight: 'bold',
    paddingRight: 5.5,
  },

  textOperand: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textAlign:'center',
    paddingTop: 10,
  },

  buttonC: {
    marginBottom: 50,
    marginTop: 50,
    borderColor: 'red',
    backgroundColor: 'red',
    height: 70,
    borderWidth: 2,
    borderStyle: 'solid',
    width: 150,
    alignContent:'center',
    borderRadius: 10,
  },
  buttonE: {
    marginBottom: 50,
    marginTop: 50,
    borderColor: '#E27300',
    backgroundColor: '#E27300',
    height: 70,
    borderWidth: 2,
    borderStyle: 'solid',
    width: 150,
    alignContent:'center',
    borderRadius: 10,
  },
});

export default CalculatorScreen;

