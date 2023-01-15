import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import AuthLayout from './authLayout';
import AuthImage from '../../components/authHeader/authImage';
import AuthInput from './authInput';
import CustomButton from '../../components/button';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation =useNavigation();
  const [personalEmail,setPersonalEmail]=useState('');
  return (
     <AuthLayout>
    <View style={styles.Container}>
     <AuthImage/>
      <View style={styles.content}>
        <Text style={styles.emailText}>Forgot Password ?</Text>
        <Text style={styles.description}>
          Don't worry it happens. Please enter the address associated with your account
        </Text>
        <View style={styles.inputContainer}>
        <AuthInput
        state={personalEmail}
        setState={setPersonalEmail}
        placeholder="Personal Email"
      />
      </View>
      <CustomButton onPress={()=>navigation.navigate('SignIn')} text="Submit"/>

      </View>
    </View>
    </AuthLayout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
     Container: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: 15,
        },
        content:{
          display: 'flex',
          flex:1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        inputContainer:{
          marginVertical:20,
        },
        otpContainer:{
         marginVertical:20
        },
        emailText:{
          fontSize:24,
          fontWeight: 'bold',
          color:'#002B5B',
          paddingVertical:24
        },
        description:{
          fontSize:20,
          color:'#154172',
          textAlign: 'center'
        }
});
