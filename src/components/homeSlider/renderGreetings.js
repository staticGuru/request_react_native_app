/* eslint-disable react/prop-types */
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RenderGreetings = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.greetText}>{item.message}</Text>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />

  <View style={{height:hp('1%')}}/>
      </View>
    </View>
  );
};

export {RenderGreetings};

const styles = StyleSheet.create({
  itemContainer: {display: 'flex', flex: 1, flexDirection: 'column'},
  greetText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('2.6%'),
    letterSpacing: wp('0.2%'),
    color: Colors.primary,
    flex: 0.1,
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: wp('90%'),
    flex: 1,
    borderRadius: wp('5%'),
  //  height: hp('80%')
  },
  description: {
    paddingHorizontal: wp('1%'),
    marginVertical: hp('2%'),
    fontSize: hp('2.4%'),
    color: Colors.primary,
    fontStyle: 'italic',
    letterSpacing: hp('0.1%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
    alignItems: 'flex-start',
    paddingVertical: hp('2%'),
  },
  button: {
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    borderRadius: hp('2%'),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.secondary,
    fontSize: hp('1.6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
