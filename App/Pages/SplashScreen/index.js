import * as React from 'react';
import { SafeAreaView, StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import {
  IconSplash,
  L_Kpc,
  L_Kominfo,
  L_Kemenkes,
  L_Bumn
} from '../../assets';

export default SplashScreen = ({ navigation }) => {

  // Start Memberi waktu  
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen')
    }, 2000)
  }, [navigation]);
  // End Memberi waktu

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#FFFFFF" />

      <View style={styles.headerImg}>
        <Image source={IconSplash} style={styles.imgHeader} />
      </View>

      <Text style={styles.textFoother}>Bekerjasama Dengan :</Text>

      <View style={styles.content}>
        <Image source={L_Kpc} style={styles.logo1} />
        <Image source={L_Kominfo} style={styles.logo2} />
        <Image source={L_Kemenkes} style={styles.logo3} />
        <Image source={L_Bumn} style={styles.logo4} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Icon Splash
  imgHeader: {
    backgroundColor: '#FFFFFF',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Icon Splash
  imgHeader: {
    width: 283,
    height: 67,
    left: 38,
    top: 230,
  },
  // Footer Image
  content: {
    marginTop: 535,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // Footer Text
  textFoother: {
    position: "absolute",
    width: 124,
    height: 30,
    left: 38,
    right: 228,
    top: 570,
    bottom: 131,
    fontFamily: 'Lato-Regular',
    fontStyle: 'normal',
    fontSize: 12,
    color: 'black',
  },
  // Logo Kpcpen
  logo1: {
    marginRight: 10,
    height: 35,
    width: 70,
    alignItems: 'center',
    alignContent: 'center'
  },
  // Logo Kominfo
  logo2: {
    marginRight: 10,
    height: 45,
    width: 40,
    alignItems: 'center',
    alignContent: 'center'
  },
  // Logo Kemenkes
  logo3: {
    marginRight: 10,
    height: 35,
    width: 80,
    alignItems: 'center',
    alignContent: 'center'
  },
  // Logo Bumn
  logo4: {
    marginRight: 10,
    height: 30,
    width: 60,
    alignItems: 'center',
    alignContent: 'center'
  },
});