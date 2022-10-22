import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Input from "./input2";
const Register = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.heading}>Register </Text>
        <Input placeholder="Enter Your name" label="Name" />
        <Input placeholder="Enter Your Mobile No" label="Phone No" />
        <Input placeholder="Enter Your Email ID" label="Email-ID" />
        <Input placeholder="Enter Your password" label="Password" password />
        <View style={styles.button}>
          <Text
            style={{
              padding: 10,
              color: "white",
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            Sign In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 30
  },
  heading: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold"
  },
  button: {
    height: 50,
    backgroundColor: "red",
    alignItems: "center"
  }
});
export default Register;
