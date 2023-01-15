import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import Colors from '../../util/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// eslint-disable-next-line react/prop-types
const ProtactedLayout = ({children,title}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.appBarContainer}>
        <View style={styles.AppBarContainer1}>
        <Header  title={title}/>
        </View>
      </View>
      <View style={styles.childrenContainer}>
        <View style={styles.childrenContainer1}>{children}</View>
      </View>
    </View>
  );
};

export default ProtactedLayout;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  appBarContainer: {
    flex: 0.1,
    backgroundColor: Colors.secondary,
  },
  AppBarContainer1: {
    flex: 1,
    borderBottomRightRadius: hp('2%'),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    borderBottomLeftRadius: hp('2%'),

  },
  LogoContainer: {
    flex: 0.2,
  },
  AppBarTextContainer: {
    flex: 0.8,
  },
  childrenContainer: {
    flex: 0.9,
    backgroundColor: Colors.primary,
  },
  childrenContainer1: {
    flex: 1,
    
    backgroundColor: Colors.secondary,
    overflow: 'hidden',
  },
});
