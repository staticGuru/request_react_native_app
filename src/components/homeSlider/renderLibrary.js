/* eslint-disable react/prop-types */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const WIDTH = Dimensions.get('screen').width - hp('4%');
const ParentCircle = () => {
  return (
    <View style={styles.parentCircle}>
      <View style={styles.childCircle} />
    </View>
  );
};
const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.innerItem}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="stretch"
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
};
const RenderLibrary = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.heading}>{item.message}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.seeAll}>See All</Text>
          <Icon
            name="chevron-right"
            size={hp('2%')}
            color={Colors.primary}
            style={{marginLeft: wp('2%'), alignSelf: 'center'}}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={item.data}
          style={styles.list}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default RenderLibrary;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
  },

  item: {
    //     backgroundColor: 'blue',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    width: WIDTH / 2,
  },
  innerItem: {
    //     backgroundColor: 'red',
    borderRadius: hp('10%'),
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    display: 'flex',
    width: wp('100%'),
    height: WIDTH / 2 - hp('3%'),
    opacity: 0.7,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
  },
  heading: {
    fontSize: hp('2.4%'),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  seeAll: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: Colors.primary,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    zIndex: 10,
    position: 'absolute',
    top: hp('3%'),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    color: Colors.primary,
  },
});
