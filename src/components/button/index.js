/* eslint-disable react/prop-types */
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const CustomButton = (props) => {
  return (
     <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.text}>{props.text??"click"}</Text>
          </TouchableOpacity>
        </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
     container: {
          marginBottom: hp('1%'),
        },
        buttonContainer: {
          margin: 'auto',
          paddingHorizontal: wp('6%'),
          backgroundColor: Colors.primary,
          borderRadius: wp('5%'),
        },
        text: {
          fontSize: hp('2%'),
          fontWeight: 'bold',
          color: Colors.yellow,
          paddingVertical: hp('1%'),
        },
})