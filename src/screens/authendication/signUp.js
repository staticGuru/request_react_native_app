import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from './authLayout';
import AuthInput from './authInput';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const SignUp = () => {
     const navigation=useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [corporateEmail,setCorporateEmail] = useState('');
  const [personalEmail,setPersonalEmail] = useState('');
  const [password,setPassword] = useState('');

  return (<AuthLayout>
      <View style={styles.Container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={{uri:"https://www.pngfind.com/pngs/m/13-131403_flying-bird-clipart-bird-png-flying-birds-png.png"}} alt="logo" resizeMode="stretch"  style={styles.logo} />
        </View>
        <Text style={styles.titleText}>Join us to discover yourself</Text>
        <View style={styles.InputContainer}>
          <AuthInput
            state={firstName}
            setState={setFirstName}
            placeholder="First Name"
          />
          <AuthInput
            state={lastName}
            setState={setLastName}
            placeholder="Last Name"
          />
          <AuthInput
            state={personalEmail}
            setState={setPersonalEmail}
            placeholder="Personal Email"
          />
          <AuthInput
            state={corporateEmail}
            setState={setCorporateEmail}
            placeholder="Corporate Email"
          />
          <AuthInput
            state={password}
            setState={setPassword}
            placeholder="Password"
            secureTextEntry={true} 
          />
      
        </View>
        <View>
          <Text style={styles.description}>
            By signing up, you are agree to our{' '}
            <Text style={styles.hightlightedText}>Privacy Policy</Text> and{' '}
            <Text style={styles.hightlightedText}>Terms and Conditions.</Text>
          </Text>
        </View>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
          <View style={styles.signupContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() =>navigation.navigate('Verification')}>
            <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View  style={styles.footerView}>
            <Text style={[styles.description,{fontSize: hp('2%')}]}>
              Already have an account? <Text style={styles.actionTrigger} onPress={()=>navigation.navigate("SignIn")}>Sign In</Text>
            </Text>
          </View>
          <View style={styles.footerView}>
          <Text style={[styles.description,{fontSize:hp('2%')}]}>
            If you are an employer, <Text style={styles.actionTrigger}>Click Here</Text>
          </Text>
        </View>
        </View>
    </AuthLayout>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 0.7,
    flexDirection: 'column',
    padding: wp('1.5%'),
  },
  logoContainer: {
    padding: hp('1%'),
    alignSelf: 'center',
    flex:0.6,
    display: 'flex',
    paddingTop:hp('1%'),
    resizeMode:'cover',
  },
  logo: {
    width: wp('40%'), height: hp('10%'),
    alignSelf: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color:Colors.primary
  },
  InputContainer: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  description: {
    textAlign: 'left',
    fontSize: hp('1.8%'),
    color: '#426287',
  },
  hightlightedText: {
    color: '#154172',
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  footerContainer:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    // marginTop:40,
    flex:0.3
  
  },
  actionTrigger:{
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color:Colors.primary,
  },
  footerView:{
paddingVertical:hp('1%')
  },
  signupContainer:{
    marginBottom: hp('1%'),
  },
  signUpText:{
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color:Colors.yellow,
    paddingVertical:hp('1%')
  },
  buttonContainer:{
    margin:'auto',
    paddingHorizontal:wp('8%'),
    backgroundColor:'#002B5B',borderRadius:wp('30%')
  }
});
