import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
const input=({
    label,
    error,
    password,
    ...props
}) => {
  const [hidePassword,setHidePassword]=React.useState(password);
 return(
     <View style={{paddingVertical:20}}>
     <Text style={styles.label}>{label}</Text>
     <View style={styles.inputbox}>
     <TextInput
     secureTextEntry={hidePassword}
     style={styles.inText} {...props}/>
     </View>
    </View>
 );
}
const styles=StyleSheet.create({
    label: {
        //marginVertical:20,
       // paddingVertical:10,
        fontSize:20,
        color:'#ffffff',
    },
inputbox:
{
  height:40,
  backgroundColor:`#fffafa`,
  // flexDirection:'row',
  //paddingHorizontal: 15,
},
idesign:
{
  fontSize:40,
  color:'#00ffff'
},
inText:
{
  padding:10,
  textAlign:'left',
  color:'blue',
}
});
export default input;