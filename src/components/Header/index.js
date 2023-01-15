/* eslint-disable react/prop-types */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../util/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Header = ({title}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.menu}>
          <Icon name="bars" size={hp('3%')} color={Colors.secondary} onPress={()=>navigation?.openDrawer()}/>
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.notification}>
          <Icon name="bell" size={hp('3%')} color={Colors.secondary}/>
        </View>
        <View style={styles.search}>
        <Icon name="search" size={hp('3%')} color={Colors.secondary}/>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal:wp('4%'),
     alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
    marginRight:wp('1%')
  },
  menu:{
     marginHorizontal: wp('2%'),
  },
  text: {
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    color: Colors.yellow,
    marginLeft:wp('2%'),
  },
  notification:{
     marginHorizontal: wp('2%'),
  },
  search:{
     marginLeft: wp('2%'),
  }
});
