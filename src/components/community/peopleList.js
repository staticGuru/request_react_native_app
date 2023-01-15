/* eslint-disable react/prop-types */
import {
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import Colors from '../../util/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
export const WIDTH = Dimensions.get('screen').width - hp('4%');

const PeopleList = ({title, members}) => {
  const navigation = useNavigation();
  const PeopleCard = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('GuestProfile')}>
        <Image
          source={{
            uri: item.userImage,
          }}
          alt="logo2"
          style={styles.logo}
          resizeMode="cover"
        />
        <Text style={styles.userText}>{item.userName}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{item.type}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.peopleText}>{title}</Text>

      <FlatList
        data={members}
        numColumns={2}
        style={[styles.list]}
        renderItem={PeopleCard}
      />
    </View>
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  peopleText: {
    fontSize: hp('2.3%'),
    color: Colors.primary,
    fontWeight: 'bold',
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('1.3%'),
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  logo: {
    width: hp('9%'),
    height: hp('9%'),
    borderRadius: hp('5%'),
  },
  cardContainer: {
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
    width: WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: hp('0.4%'),
    marginBottom: hp('2%'),
    flexDirection: 'column',
    marginRight: hp('1.5%'),
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
    flexGrow: 1,
    marginBottom: hp('2%'),
  },
  userText: {
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    color: Colors.primary,
    paddingVertical: hp('1.2%'),
  },
  button: {
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
    backgroundColor: Colors.primary,
    borderRadius: hp('5%'),
    marginTop: hp('1.4%'),
  },
  text: {
    color: 'white',
    fontSize: hp('1.8%'),
  },
});
