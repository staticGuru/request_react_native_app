import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';

const RenderDailyDose = ({item}) => {
  return (
    <View key={item.id} style={styles.itemContainer}>
      <Text style={styles.titleText}>{item?.message}</Text>
      <View style={styles.container}>
        <Image source={item?.image} style={styles.image} resizeMode="contain" />
        <Text style={styles?.text}>{item?.quote}</Text>
      </View>
    </View>
  );
};

export default RenderDailyDose;

const styles = StyleSheet.create({
  titleText: {
    marginVertical: hp('1%'),
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'left',
  },
  image: {
    width: wp('86%'),
    height: hp('40%'),
    opacity: 0.9,
    overflow: 'hidden',
  },
  itemContainer: {
    display: 'flex',
    height: '100%',
    paddingTop: hp('1.0%'),
    borderRadius: hp('2.0%'),
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: 0.5,
    display: 'flex',
    paddingTop: hp('0.5%'),
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 0.5,
  },
  text: {
    marginVertical: hp('1%'),
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: Colors.primary,
    textAlign: 'left',
    lineHeight: 24,
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: hp('1%'),
  },
});
