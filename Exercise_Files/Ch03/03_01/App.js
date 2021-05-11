import React from "react";
import { Text, View, ProgressBarAndroid, Button, Alert, Dimensions, Platform, StyleSheet, Image } from "react-native";

import icon from "./assets/favicon.png"

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} Button Press`);
    Alert.alert(`${new Date().toLocaleTimeString()} Button Press`);
  }

  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      marginTop: 40,
      backgroundColor: "#DDD",
      padding: 50,
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "space-between",
      alignItems: "flex-start"
    },
    group: {
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    text: {
      fontSize: 22,
      color: "red",
      backgroundColor: "yellow",
      margin: 10,
      padding: 5
    },
    selectedText: {
      alignSelf: "flex-end",
      color: "yellow",
      backgroundColor: "red",
    },
    groupText: {
      flex: 1,
      fontSize: 25,
      color: "#0FF",
      backgroundColor: "#AAA",
      margin: 10,
      padding: 5
    },
    selectedGroupText: {
      color: "#AAA",
      backgroundColor: "#0FF",
    },
    image: {
      flex: 1,
      // resizeMode: "center",
      width: Dimensions.get("window").width/2,
    }
  });

  return(
    <View style={styles.page}>
      <Image style={styles.image} source={icon} />
      <Text style={{ fontSize: 30 }}>Hello World</Text>
        <View style={styles.group}>
          <Text style={styles.groupText}>ONE</Text>
          <Text style={[styles.groupText, styles.selectedGroupText]}>TOO</Text>
          <Text style={styles.groupText}>UNO</Text>
        </View>
      <Text style={styles.text}>Window - Height/Width</Text>
      <Text style={styles.text}>{height}</Text>
      <Text style={styles.text}>{width}</Text>
      <Text style={[styles.text, styles.selectedText]}>OS: {Platform.OS}</Text>
        <View style={styles.group}>
          <ProgressBarAndroid styleAttr="Small" color="#FF0000" />
          <ProgressBarAndroid styleAttr="Normal" color="#FFFF00" />
          <ProgressBarAndroid styleAttr="Large" color="#00DD00" />
        </View>
      <ProgressBarAndroid styleAttr="Horizontal" color="#00FFFF" />
      <ProgressBarAndroid indeterminate={false} styleAttr="Horizontal" progress={0.2} color="#0F0F0F" />
      <Button title="Click Me!" onPress={onButtonPress} color="#B00000" />
    </View>
  )
}

