/* eslint-disable react/prop-types */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const WIDTH = Dimensions.get('screen').width - wp('8%');
export const ITEM_WIDTH = WIDTH;

const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.innerItem}>
        <Image source={{uri: item.image}} style={styles.image} resizeMode="cover" />
        <Text style={styles.titleText}>{item.title}</Text>
        <View style={styles.viewContent}>
          <View style={styles.members}>
            <Icon
              name="users"
              size={hp('2%')}
              color={Colors.primary}
            />
            <Text style={styles.memberText}>{item.author}</Text>
          </View>
          <View style={styles.members}>
            <Icon
              name="users"
              size={hp('2%')}
              color={Colors.primary}
              // style={{marginLeft: 5, alignSelf: 'center'}}
            />
            <Text style={styles.memberText}>{item.menu}</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: hp('.5%'),
            marginHorizontal: hp('1%'),
          }}>
         <Text numberOfLines={3} style={{textAlign:'left',fontSize:hp('1.8%')}}>{item.description}</Text>
        </View>
      </View>
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
const RenderHighlights = ({item}) => {
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
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderCarouselItem}
          sliderWidth={WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: hp('4%'),
            height: hp('1.5%'),
            borderRadius: hp('1.5%'),
            marginHorizontal: hp('.1%'),
            backgroundColor: Colors.primary,
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'grey',
            width: hp('2%'),
            height: hp('2%'),
            borderRadius: hp('1%'),
            marginHorizontal: 0,
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.7}
          inactiveDotScale={0.7}
        />
      </View>
    </View>
  );
};

export default RenderHighlights;

const styles = StyleSheet.create({
  titleText: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'left',
    paddingLeft: hp('2%'),
    paddingVertical: hp('.1%'),
  },
  viewContent:{
     display: 'flex',
     flexDirection: 'row',
     justifyContent:'space-between'
  },
  members: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hp('2%'),
    paddingVertical: hp('.5%'),
  },
  memberText: {
    fontSize: hp('1.8%'),
    fontWeight: '600',
    paddingLeft: hp('1%'),
    color: Colors.primary,
  },
  button: {
    fontSize: hp('2%'),
    textAlign: 'right',
    color: Colors.secondary,
    backgroundColor: Colors.primary,
    paddingHorizontal: hp('3%'),
    borderRadius: hp('2%'),
    paddingVertical: hp('1%'),
  },
  list: {
    // flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('100%'),
  },
  item: {
    //     backgroundColor: 'blue',
    paddingVertical: hp('.5%'),
    paddingHorizontal: hp('2%'),
    width: WIDTH,
  },
  innerItem: {
    //     backgroundColor: 'red',
    borderRadius: hp('2%'),
    overflow: 'hidden',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: hp('.2%'),
  },
  image: {
    // flex: 0.4,
    display: 'flex',
    width: '100%',
    height: WIDTH / 2 - hp('5%'),
    opacity: 0.7,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp('2%'),
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
