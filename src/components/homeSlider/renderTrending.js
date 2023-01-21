/* eslint-disable react/prop-types */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
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

export const WIDTH = Dimensions.get('screen').width - hp('4%');
export const ITEM_WIDTH = WIDTH;

const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.innerItem}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text}>Find job in you</Text>
    </View>
  );
};
const renderCarouselItem = ({item}) => {
  return (
    <FlatList
      data={item.data}
      numColumns={1}
      style={[styles.list]}
      renderItem={renderItem}
    />
  );
};
const RenderTrending = ({item}) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const data = item.slides;
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
            style={{marginLeft: hp('.5%'), alignSelf: 'center'}}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
      {renderCarouselItem({item:data[0]})}
      </View>
    </View>
  );
};

export default RenderTrending;

const styles = StyleSheet.create({
  titleText: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'left',
    paddingLeft: hp('2%'),
    paddingVertical: hp('.1%'),
  },
text:{
  fontWeight: 'bold',
  fontSize: hp('2%'),
  color:Colors.primary,
  margin:hp('1.5%')
},
  list: {
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
  },
  item: {
    backgroundColor:"white",
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    width: WIDTH,
    display: 'flex',
    flexDirection: 'column',
    marginBottom:hp('1%'),
    borderRadius:hp('1.3%')
  },
  innerItem: {
    //     backgroundColor: 'red',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: hp('.2%'),
  },
  image: {
    // flex: 0.4,
    display: 'flex',
    width: wp('100%'),
    height: WIDTH / 2 + hp('4%'),
    opacity: 0.9,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
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
