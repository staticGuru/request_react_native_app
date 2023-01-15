import {Image, StyleSheet,TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import backIcon from '../../assets/images/go-back-arrow.png';
import { useNavigation } from '@react-navigation/native';
const AuthImage = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.headContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image source={backIcon} alt="logo" style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
      <Image source={{uri:"https://www.pngfind.com/pngs/m/13-131403_flying-bird-clipart-bird-png-flying-birds-png.png"}} alt="logo" resizeMode="stretch"  style={styles.logo} />
      </View>
    </View>
  );
};

export default AuthImage;

const styles = StyleSheet.create({
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  backIcon:{
    width:wp('10%'),
    height:wp('10%')
  },
  logo: {
    width: wp('50%'),
    height: hp('20%'),
    borderRadius: wp('3%'),
    alignSelf: 'center',
  },
  logoContainer:{
    alignItems:'center',
    display: 'flex',
    flex:1
  }
});
