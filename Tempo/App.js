import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
  <ImageBackground 
   style={styles.backgroundImage} 
   source={require("./image/ceu.jpg")} />
 </View>

      <Text style={styles.principalText}>
        <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        Parcialmente nublado
      </Text>
      <Text style={styles.minMax}>Máxima 21ºC     Mínima 11ºC</Text>
      <Text style={styles.principal}>17ºC</Text>

      <View style={styles.boxOur}>
        <View style={styles.days}>
          <Text style={styles.textBox}>00:00</Text>
          <Text style={styles.textBox}>31ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>01:00</Text>
          <Text style={styles.textBox}>11ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>02:00</Text>
          <Text style={styles.textBox}>20ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>03:00</Text>
          <Text style={styles.textBox}>12ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>04:00</Text>
          <Text style={styles.textBox}>21ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>05:00</Text>
          <Text style={styles.textBox}>18ºC</Text>
        </View>
        <View style={styles.days}>
          <Text style={styles.textBox}>06:00</Text>
          <Text style={styles.textBox}>15ºC</Text>
        </View>
      </View>

      <View style={styles.boxDay}>
        <View style={styles.days}>
          <Text style={styles.textBox}>SEG</Text>
          <Text style={styles.textBox}>11ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>TER</Text>
          <Text style={styles.textBox}>21ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>QUA</Text>
          <Text style={styles.textBox}>1ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>QUI</Text>
          <Text style={styles.textBox}>41ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>SEX</Text>
          <Text style={styles.textBox}>11ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>SAB</Text>
          <Text style={styles.textBox}>10ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

        <View style={styles.days}>
          <Text style={styles.textBox}>DOM</Text>
          <Text style={styles.textBox}>20ºC</Text>
          <Image 
        style={styles.image} 
        source={require("./image/chuva.png")} />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  days: {
    backgroundColor: "#FAEBD7",
    width: 52,
    height: 160,
  },
  textBox: {
    marginTop: 10,
    textAlign: "center",
  },
  principal: {
    marginTop: 50,
    fontSize: 70,
  },
  boxDay: {
    flexDirection: "row",
  },
  image: {
    marginTop: 10,
    width: 40,
    height: 40,
    marginLeft: 6
  },
  principalText:{
    marginTop: 40,
    fontSize: 20,
  },
  minMax:{
    marginTop: 50,
    fontSize: 14,
  },
  boxOur:{
    flexDirection: "row",
    height: 100,
    marginTop: 100,
  },
  backgroundImage:{
    width: 370,
    height: 400,
    flex: 1,
  }
});


