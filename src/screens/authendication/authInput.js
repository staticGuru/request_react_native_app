import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const AuthInput = (props) => {
     const styles = StyleSheet.create({
          input:{
               width:wp('90%'),
               minWidth:wp('90%'),
               borderRadius:wp('1%'),
               marginVertical:hp('.6%'),
               fontSize:hp('1.8%'),
               backgroundColor:'white',paddingLeft:wp('1%'),color:Colors.primary,
          }
     })
  return <TextInput
  style={[styles.input,{...props.inputStyle}]}
  onChangeText={(e)=>props.setState(e)}
  value={props.state}
  {...props}
/>
}

export default AuthInput

