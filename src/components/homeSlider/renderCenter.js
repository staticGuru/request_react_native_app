/* eslint-disable react/prop-types */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export const WIDTH = Dimensions.get('screen').width - hp('4%');
export const ITEM_WIDTH = WIDTH;

const RenderCenter = ({item}) => {
  const [index, setIndex] = useState(0);
  const navigation=useNavigation()
  const isCarousel = useRef(null);
  const data = item.data[0];
  
const renderItem = ({item, index}) => {
  // const navigation=useNavigation()
  // navigation.navigate("WellnessDetails",{item,index})
  return (
    <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("WellnessDetails")}>
      <View
        style={[
          styles.innerItem,
          {flexDirection: (index + 1) % 2 != 0 ? 'row' : 'row-reverse'},
          
        ]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />

        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

  const RenderCarouselItem = item => {
    return (
      <FlatList
        data={item.slides}
        numColumns={1}
        style={[styles.list]}
        renderItem={renderItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.heading}>{item.message}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.seeAll} onPress={()=>console.log("called")}>See All</Text>
          <Icon
            name="chevron-right"
            size={hp('2%')}
            color={Colors.primary}
            style={{marginLeft: hp('0.5%'), alignSelf: 'center'}}
          />
        </View>
      </View>
      <View style={styles.listContainer}>{RenderCarouselItem(data,navigation)}</View>
    </View>
  );
};

export default RenderCenter;

const styles = StyleSheet.create({
  list: {
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
  },
  item: {
    cursor:"pointer",
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    width: WIDTH,
    justifyContent: 'center',
  },
  innerItem: {
    backgroundColor: Colors.primary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: hp('2%'),
    height: (WIDTH/2)-hp('3%'),
    overflow: 'hidden',
  },
  image: {
    // flex: 0.4,
    display: 'flex',
    width: (WIDTH/2)-hp('10%'),
    height:(WIDTH/2)-hp('10%'),
    opacity: 0.7,
    position: 'absolute',
    top: hp('3%'),
    right:hp('2%')
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
    position: 'absolute',
    top: hp('9%'),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    color: 'white',
    left:hp('1.2%')
  },
});
