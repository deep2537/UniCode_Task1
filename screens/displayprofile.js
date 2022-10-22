import React from "react";
import { View, StyleSheet, SafeAreaView, Text,Image} from "react-native";
const UserProfile = () => {
  return (
    <View style={styles.body}>
      <View style={{padding:20,alignItems:'center'}}>
      <Image
          style={styles.logo}
          source={{uri: 'https://miro.medium.com/max/1024/0*KZKN16hy1kSFqT9_.png'}}
        />
        <Text style={styles.heading}>User Profile </Text>
        <View style={{padding:10,alignItems:'center'}}>
      <Image
          style={styles.Logo}
          source={{uri: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'}}
        />
        </View>
        <View style={styles.button}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
           Name
          </Text>
        </View>
        <View style={{padding:10}}></View>
        <View style={styles.button}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
           Phone No
          </Text>
      </View>
      <View style={{padding:10}}></View>
        <View style={styles.button}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
          Email
          </Text>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  heading: {
    justifyContent:'center',
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    height: 50,
    width:"100%",
    backgroundColor: "blue",
    alignItems: "center"
  },
  Logo: {
    width: 100,
    height: 80,
  },
  logo: {
    width: 100,
    height: 70,
  }
});
export default UserProfile;