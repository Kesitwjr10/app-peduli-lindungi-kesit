import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";

import { I_Lonceng, I_User, I_Hand, I_Panah, I_QrCode, I_Vaksin, I_CovidResult, I_Ehac, I_Telemedic, I_Travel, I_Healt, I_Statistic, I_FindHospital } from "../../assets";

const windowHeight = Dimensions.get("window").height;

export default HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.headerImg}>

      </View>

      <View style={styles.container}>
        <Image source={I_User} style={styles.imgSize} />
        <Text style={styles.hi}>Hi, </Text>
        <Text style={styles.kesit}>Kesit Wijanarko</Text>
        <Image source={I_Lonceng} style={styles.imgSize2} />
      </View>

      <View>
        <Image source={I_User} style={styles.imgSize} />
      </View>

      <View style={styles.kotakBiru}>
        <View>
          <Text style={styles.text1}>Entering A Public Space?</Text>
          <Text style={styles.text2}>Stay Alert To Stay Safe</Text>
        </View>
        <View>
          <Image source={I_Hand} style={styles.logo1} />
        </View>
      </View>

      <View style={styles.kotakPutih}>
        <View style={styles.row}>
          <Image source={I_Panah} style={styles.panah} />
          <Text style={styles.fonthitam}>Check-In Prefence</Text>
        </View>
        <View style={styles.kotakcheck}>
          <View style={styles.row}>
            <Image source={I_QrCode} style={styles.scaner} />
            <Text style={styles.fontbiru}>Check-In </Text>
          </View>
        </View>
      </View>

      <View style={{ height: 15, backgroundColor: '#D8D8D8', marginTop: -30 }}></View>

      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ImunizationScreen")}>
            <Image source={I_Vaksin} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Vaccine and Immunization</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CovidTextScreen")}>
            <Image source={I_CovidResult} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Covid-19 Test      Results</Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EhacScreen")}>
            <Image source={I_Ehac} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>EHAC</Text>
        </View>
      </View>

      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Image source={I_Travel} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Travel            Regulations</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Image source={I_Telemedic} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Telemedicine</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Image source={I_Healt} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Healthcare            Facility</Text>
        </View>
      </View>

      <View style={styles.row1}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Image source={I_Statistic} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Covid-19             Statistic</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Peringatan!!!", "Halaman ini Belum Dibuat", [
                {
                  text: "ok",
                  onPress: () => console.log("ok ditekan"),
                },
              ])
            }>
            <Image source={I_FindHospital} style={styles.gambar2} />
          </TouchableOpacity>
          <Text style={styles.tulisan}>Find Hospital             Bed</Text>
        </View>

        <View style={styles.column}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imgContainer: {
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
  },
  row1: {
    flexDirection: "row",
    flex: 1,
    marginTop: -40,
    marginRight: 15,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    marginRight: -25,
  },
  // CSS text
  tulisan: {
    flex: 1,
    marginTop: 5,
    fontSize: 13,
    resizeMode: "contain",
    textAlign: "center",
  },
  // CSS Kotak biru
  kotakBiru: {
    backgroundColor: "#239BD8",
    padding: 30,
    marginHorizontal: 19,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderBottomWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
    paddingEnd: 0,
  },
  // CSS Kotak Putih
  kotakPutih: {
    backgroundColor: "white",
    padding: 30,
    marginHorizontal: 19,
    marginTop: -16,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderTopWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    paddingBottom: 0,
  },
  // CSS Kota Scan
  kotakcheck: {
    backgroundColor: "#EAF5F9",
    borderRadius: 20,
    flexDirection: "row",
    height: 40,
    width: 120,
    marginLeft: 60,
    marginRight: -20,
    marginTop: -15,
  },
  // CSS Tulisan Hi
  hi: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 4,
    left: 15,
    fontWeight: "bold",
  },
  // CSS Tulisan Kesit Wijanarko
  kesit: {
    textAlign: "left",
    fontSize: 15,
    marginTop: 4,
    fontWeight: "bold",
    textDecorationLine: "underline",
    left: 16,
  },
  text1: {
    color: "white",
    fontSize: 15,
    top: -10,
    fontWeight: "bold",
    marginRight: 10,
  },
  text2: {
    fontSize: 12,
    color: "white",
    top: -12,
    opacity: 0.9,
  },
  gambar2: {
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 20,
    height: 80,
    resizeMode: "contain",
    width: 80,
  },
  fonthitam: {
    fontSize: 13,
    marginLeft: -95,
    fontWeight: "bold",
    top: -5,
    color: "#000000",
  },
  fontbiru: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    color: "#259AD5",
  },
  logo1: {
    resizeMode: "contain",
    height: 60,
    marginLeft: -35,
    top: -15,
    flex: 0,
  },
  panah: {
    resizeMode: "contain",
    height: 20,
    marginLeft: -110,
    top: -5,
    marginBottom: 20,
  },
  scaner: {
    resizeMode: "contain",
    width: 23,
    marginTop: -236,
    color: '#259AD5',
    marginLeft: 15,
  },
  imgStyle: {
    marginTop: windowHeight / 8,
    marginBottom: 20,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#E91E63",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  InputPass: {
    borderWidth: 1,
    borderColor: "#0f663f",
    padding: 7,
    marginStart: 20,
    fontSize: 17,
    marginTop: 20,
    marginEnd: 20,
    borderRadius: 10,
    padding: 10,
    fontWeight: "bold",
  },
  imgStyle2: {
    flexDirection: "row",
  },
  imgSize: {
    resizeMode: "contain",
    marginRight: -80,
    marginLeft: -50,
    marginTop: 2,
    alignSelf: "flex-start",
    height: 25,
    flex: 1,
  },
  imgSize2: {
    width: null,
    resizeMode: "contain",
    marginRight: -50,
    marginLeft: 50,
    marginTop: 2,
    height: 25,
    flex: 1,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
  },
  bodyText: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 16,
  },
  footherText: {
    marginTop: 100,
    fontSize: 16,
    marginBottom: 0,
  },
  customeButton: {
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
})