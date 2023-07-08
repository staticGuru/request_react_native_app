import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('screen').width;
export const ITEM_WIDTH = SLIDER_WIDTH;

const renderItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
    <Text style={styles.text}>{item.name}</Text>

      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
     {/* <View style={styles.textContainer}>
        <Text style={[styles.text, {fontWeight: '400'}]}>
          {item.description}
        </Text>
        {item.author && (
          <Text
            style={[
              styles.text,
              {fontWeight: '500', textAlign: 'right', marginRight: wp('1.5%')},
            ]}>
            {item.author}
          </Text>
        )}
          </View>*/}
    </View>
  );
};

const ConceptIntroSlider = ({data,activeSlide,setActiveSlide}) => {
  const [index, setIndex] = useState(activeSlide);
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index =>{ setIndex(index);setActiveSlide(index)}}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: wp('2%'),
          height: hp('1%'),
          borderRadius: hp('5%'),
          // marginHorizontal: wp('0.2%'),
          backgroundColor: 'white',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'grey',
          width: wp('2%'),
          height: hp('1%'),
          borderRadius: hp('1%'),
          // marginHorizontal: 0,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={1}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  itemContainer: {
    display: 'flex',
    height: hp('100%'),
    padding: hp('1%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  image: {width: wp('50%'), height: hp('40%')},
  imageContainer: {
    flex: 0.7,
    display: 'flex',
    paddingTop: hp('1%'),
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 0.3,
  },
  logoContainer: {
    width: wp('50%'),
    height: hp('20%'),
    backgroundColor: 'red',
  },
  text: {
    marginVertical: hp('1%'),
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
export default ConceptIntroSlider;
