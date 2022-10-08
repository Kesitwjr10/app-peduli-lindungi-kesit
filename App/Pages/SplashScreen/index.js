import * as React from 'react';
import {SafeAreaView, StatusBar, View, Image, Text, StyleSheet} from 'react-native';
import {IconSplash} from '../../assets';

export default SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#FFFFFF" />

      <View style={styles.content}>
        <Image 
          style={{justifyContent: 'center', width: 283, height: 67, marginTop: 322, marginBottom: 455}}
          source={IconSplash} />
        <Text style={styles.textFoother}>Bekerjasama Dengan :</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});