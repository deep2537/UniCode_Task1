import React from "react";
import {View,StyleSheet,Text}from "react-native";
import Input from './Input';
const Sign=()=>{
return(
    <View style={styles.body}>
      <Text style={styles.heading}>Sign In </Text>
      <Input
       placeholder="Enter Your email"
       label="Email" />
        <Input
       placeholder="Enter Your password"
       label="Password"
       password />
       <View style={styles.button}>
         <Text style={{padding:10,color:'white',fontWeight:'bold',
        fontSize:20}}> log In</Text>
         </View>
    </View>
);
}
const styles= StyleSheet.create({
body:
{
    flex:1,
    backgroundColor:'#000000',
    padding:30,
},
heading:
{
    color:'#ffffff',
    fontSize: 40,
    fontWeight: 'bold'
},
button:
{
  height:50,
  backgroundColor:'red',
  alignItems: 'center',
},
}
);
export default Sign;