import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <View style={styles.title}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "red",
    textAlign: "center",
    padding: 25,
    marginBottom: 20,
    borderRadius: 20,
    fontSize: 25,
    color: "white",
  },
});
