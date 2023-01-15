/* eslint-disable react/prop-types */
import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import DummyLogo from '../../assets/images/dummyLogo.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const AuthHeader = (props) => {
  return (
    <View style={styles.appBar}>
      <View style={styles.logoContainer}>
        <Image source={DummyLogo} alt="logo" style={[styles.logo,{ width:props.sideDrawer?hp('6%'): wp('15%'),height:props.sideDrawer?hp('6%'):hp('10%')}]} resizeMode='cover' />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.appBarText,{fontSize:props.sideDrawer?hp('2%'): hp('2.5%')}]}>Employee</Text>
        <Text style={[styles.appBarText,{fontSize:props.sideDrawer?hp('2%'): hp('2.5%')}]}>Equanity & Evolution</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    display: 'flex',
    paddingTop: hp('1%'),
  },
  logoContainer: {
    flex: 0.2,
  },
  logo: {
    flex:1,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarText: {
    
    letterSpacing: hp('.12%'),
    fontWeight: '800',
    color: Colors.yellow,
    fontStyle: 'italic',
    fontFamily: 'Helvetica',
  },
  appSliderContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
