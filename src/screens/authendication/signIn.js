import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthLayout from './authLayout';
import AuthInput from './authInput';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/button';
import {AuthContext} from '../../routes';
import Colors from '../../util/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import {getVerificationPin, signInApi} from '../service';
import axios, {Axios} from 'axios';
import GenerateOTP from '../../util/generateOtp';
// import axios from 'axios';

const SignIn = () => {
  const navigation = useNavigation();
  const [personalEmail, setPersonalEmail] = useState('');
  const [password, setPassword] = useState('');
  const {unVerifiedUser} = React.useContext(AuthContext);
  async function submitSignInForm() {
    let userData = {email: personalEmail, password};
    try {
      await signInApi(userData).then(async res => {
        Toast.show({
          type: 'info',
          text1: 'This is an info message',
        });
        let pin=GenerateOTP()
        unVerifiedUser({...res.result,verificationPin:pin})
        await getVerificationPin({email:personalEmail,pin:pin});
        console.log('signInResponse', res);
        // navigation.navigate('Verification');
      }).catch(err=>console.log(err));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AuthLayout>
      <View style={styles.Container}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: 'https://www.pngfind.com/pngs/m/13-131403_flying-bird-clipart-bird-png-flying-birds-png.png',
              }}
              alt="logo"
              resizeMode="stretch"
              style={styles.logo}
            />
          </View>

          <Text style={styles.titleText}>Welcome back ! Lets sign you in</Text>
          <View style={styles.InputCont}>
            <View style={styles.InputContainer}>
              <AuthInput
                state={personalEmail}
                setState={setPersonalEmail}
                placeholder="Personal Email"
              />

              <AuthInput
                state={password}
                setState={setPassword}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>

            <Text
              style={styles.forgot}
              onPress={() => navigation.navigate('Forgot')}>
              Forgot password?
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <CustomButton onPress={() => submitSignInForm()} text="Sign In" />

        <View style={styles.footerView}>
          <Text style={[styles.description, {fontSize: hp('2%')}]}>
            Dont have an account ?{' '}
            <Text
              style={styles.actionTrigger}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </Text>
        </View>
        <View style={styles.footerView}>
          <Text style={[styles.description, {fontSize: hp('2%')}]}>
            If you are an employer,{' '}
            <Text style={styles.actionTrigger}>Click Here</Text>
          </Text>
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Container: {
    flex: 0.7,
    flexDirection: 'column',
    padding: wp('1.5%'),
  },
  forgot: {
    textAlign: 'right',
    paddingHorizontal: wp('3%'),
    fontSize: hp('2%'),
    color: Colors.primary,
    fontWeight: 'bold',
  },
  logoContainer: {
    padding: hp('1%'),
    alignSelf: 'center',
    flex: 0.6,
    display: 'flex',
    paddingTop: hp('1%'),
    resizeMode: 'cover',
  },
  InputCont: {
    paddingVertical: 90,
  },
  logo: {
    width: wp('40%'),
    height: hp('10%'),
    alignSelf: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  InputContainer: {
    alignSelf: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    // marginTop:40,
    flex: 0.3,
  },
  actionTrigger: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  footerView: {
    paddingVertical: hp('1%'),
  },
  signupContainer: {
    marginBottom: hp('1%'),
  },
  signUpText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: Colors.yellow,
    paddingVertical: hp('1%'),
  },
});
