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
        <Image source={{uri: item.image}} style={styles.image} />

      {/*  <Text style={styles.description}>{`"${item.quote}"`}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, {paddingHorizontal: wp('3%')}]}>
            <Text style={styles.buttonText}>{item.button1}</Text>
            <Icon
              name="chevron-circle-right"
              size={hp('2.5%')}
              color={Colors.secondary}
              style={{marginLeft: wp('6%')}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{item.button2}</Text>
            <Icon
              name="share-alt"
              size={hp('2.5%')}
              color={Colors.secondary}
              style={{marginLeft: wp('3%')}}
            />
          </TouchableOpacity>
  </View>*/}
  <View style={{height:hp('5%')}}/>
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
   height: hp('80%')
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
