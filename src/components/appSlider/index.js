import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('screen').width;
export const ITEM_WIDTH = SLIDER_WIDTH;

const data = [
  {
    id: 1,
    name: 'Hellow !, I\'m Earna',
    author:'- Jonathan',
    description: 'I am delighted to have you here ! I am here to guide you become a better, happier person and find meaning in wat you are doing.',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
  },
  {
    id: 2,
    name: 'Hellow !, I\'m Doe',
    author:'- Jems',
    description: 'I am delighted to have you here ! I am here to guide you become a better, happier person and find meaning in wat you are doing.',
    url: 'https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
  },
  {
    id: 3,
    name: 'Hellow !, I\'m Node',
    author:'- Doe',
    description: 'I am delighted to have you here ! I am here to guide you become a better, happier person and find meaning in wat you are doing.',
    url: 'https://images.unsplash.com/photo-1520427112454-3b837428a76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 4,
    name: 'Hellow !, I\'m Node',
    author:'- Nikil',
    description: 'I am delighted to have you here ! I am here to guide you become a better, happier person and find meaning in wat you are doing.',
    url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
  },
  {
    id: 5,
    name: 'Hellow !, I\'m Node',
    description: 'I am delighted to have you here ! I am here to guide you become a better, happier person and find meaning in wat you are doing.',
    url: 'https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={styles.itemContainer}><View style={styles.imageContainer}>
      <Image source={{uri: item.url}} style={styles.image} resizeMode="stretch" /></View>
  <View style={styles.textContainer}>
      <Text style={styles.text}>
        {item.name}
      </Text>
      <Text style={[styles.text,{fontWeight:'500'}]}>
        {item.description}
      </Text>
      {item.author && <Text style={[styles.text,{fontWeight:'500',textAlign:'right',marginRight:wp('1.5%')}]}>
        {item.author}
      </Text>}
      </View>
    </View>
  );
};

const AppSlider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
      dotsLength={data.length}
      activeDotIndex={index}
      carouselRef={isCarousel}
      
      dotStyle={{
        width: wp('8%'),
        height: hp('1%'),
        borderRadius: hp('5%'),
        marginHorizontal: wp('0.8%'),
        backgroundColor: 'white',
      }}
      tappableDots={true}
    
      inactiveDotStyle={{
        backgroundColor: 'grey',
        width:  wp('4%'),
        height: hp('2%'),
        borderRadius: hp('1%'),
        marginHorizontal: 0,
        // Define styles for inactive dots here
      }}
      inactiveDotOpacity={0.7}
      inactiveDotScale={0.6}
    />
    </View>
  );
};
const styles= StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'column'
  },
  itemContainer:{
    display: 'flex',
    height: hp('100%'),
    padding:hp('1%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    flex:1,
    justifyContent:'space-between',
    backgroundColor: 'transparent',
  },
  image:{width: wp('50%'), height: hp('20%')},
  imageContainer:{
    flex:0.6,
    display: 'flex',
    paddingTop:hp('1%'),
    resizeMode:'cover',
    
  },
  textContainer:{
    flex:0.4
  },
  logoContainer:{
    width: wp('50%'), height: hp('20%'),backgroundColor:'red'
  },
  text:{marginVertical: hp('1%'), fontSize: hp('2.2%'), fontWeight: 'bold',color:'white',textAlign:'center'}
})
export default AppSlider;