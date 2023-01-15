import {SafeAreaView,TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppSlider from '../../components/appSlider';
import AuthHeader from '../../components/authHeader';
import { useNavigation } from '@react-navigation/native';
const OnBoarding = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topContainer1}>
          <AuthHeader />
          <View style={styles.appSliderContainer}>
            <AppSlider />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainer1}>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={[styles.authButtonContainer, {marginBottom: 20}]}>
              <Text style={styles.authText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={styles.authButtonContainer}>
              <Text style={styles.authText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 0.7,
    backgroundColor: '#DFF6FF',
  },
  topContainer1: {
    flex: 1,
    backgroundColor: '#002B5B',
    borderBottomRightRadius: wp('15%'),
  },
  bottomContainer: {
    display: 'flex',
    flex: 0.3,
    backgroundColor: '#002B5B',
  },
  bottomContainer1: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#DFF6FF',
    borderTopLeftRadius: wp('15%'),
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  authButtonContainer: {
    paddingHorizontal: wp('20%'),
    backgroundColor: '#002B5B',
    borderRadius: wp('50%'),
    paddingVertical: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  authText: {
    fontSize: hp('2.4%'),
    fontWeight: 'bold',
    color: 'yellow',
  },

  
  textContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  appSliderContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
