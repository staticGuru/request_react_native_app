import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthLayout from './authLayout';
import OTPTextView from 'react-native-otp-textinput';
import AuthImage from '../../components/authHeader/authImage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const Verification = () => {
  return (
     <AuthLayout>
    <View style={styles.Container}>
     <AuthImage/>
      <View style={styles.content}>
        <Text style={styles.emailText}>Verify your personal email id</Text>
        <Text style={styles.description}>
          Enter the 4 digit code that we have sent to your personal email id
          name@domain.com for user verification
        </Text>
        <View style={styles.otpContainer}>
        <OTPTextView
        handleTextChange={(e) => {console.log(e)}}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
        inputCount={4}
        inputCellLength={1}
      />
        </View>
        <View style={styles.resendView}><Text style={styles.resendText}>Resend Code</Text></View>
      </View>
    </View>
    </AuthLayout>
  );
};

export default Verification;

const styles = StyleSheet.create({
     Container: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: wp('1.5%'),
        },
        textInputContainer: {
          marginBottom: hp('2%'),
        },
        roundedTextInput: {
          borderRadius: wp('3%'),
          borderWidth: wp('0.8%'),
          borderColor:'red'
        },
        resendText:{
          textAlign: 'left',
          fontWeight: 'bold',
          fontSize:hp('2%'),
          color:Colors.primary
        },
        resendView:{alignSelf:'flex-start',paddingHorizontal:wp('2%')},
      
        content:{
          display: 'flex',
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        otpContainer:{
         marginVertical:hp('2%')
        },
        emailText:{
          fontSize:hp('2.4%'),
          fontWeight: 'bold',
          color:'#002B5B',
          paddingVertical:hp('2.4%')
        },
        description:{
          fontSize:hp('2%'),
          color:'#154172',
          textAlign: 'center'
        }
});
