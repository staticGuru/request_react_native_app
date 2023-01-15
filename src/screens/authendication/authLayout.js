import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthHeader from '../../components/authHeader';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({children}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.appBarContainer}>
        <View style={styles.AppBarContainer1}>
        <AuthHeader/>
        </View>
      </View>
      <View style={styles.childrenContainer}>
        <View style={styles.childrenContainer1}>{children}</View>
      </View>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  appBarContainer: {
    flex: 0.15,
    backgroundColor: '#DFF6FF',
  },
  AppBarContainer1: {
    flex: 1,
    borderBottomRightRadius: hp('6%'),
    backgroundColor: Colors.primary,
  },
  LogoContainer: {
    flex: 0.2,
  },
  AppBarTextContainer: {
    flex: 0.8,
  },
  childrenContainer: {
    flex: 0.85,
    backgroundColor: Colors.primary,
  },
  childrenContainer1: {
    flex: 1,
    borderTopLeftRadius: hp('6%'),
    backgroundColor: Colors.secondary,
  },
});
