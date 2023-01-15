/* eslint-disable react/prop-types */
import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const SLIDER_WIDTH = Dimensions.get('screen').width - wp('8%');
export const ITEM_WIDTH = SLIDER_WIDTH;

const renderItem = (item,wished,setWished) => {
  return (
    <View key={item.id} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} resizeMode="cover" />
        <Icon
          name="heart"
          size={hp('3%')}
          onPress={()=>setWished(!wished)}
          color={wished?Colors.yellow:Colors.primary}
          style={styles.wishListImage}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.quoteContainer}>
          <Image source={{uri: item.image}} style={styles.quoteImage} resizeMode="stretch" />
          <Text
            style={[
              styles.text,
              {
                fontWeight: '500',
                flex: 0.6,
                textAlign: 'left',
                paddingLeft: hp('2%'),
                fontStyle: 'italic',
                letterSpacing: wp('0.1%'),
                lineHeight: hp('3%'),
              },
            ]}>
            {`"${item.quote}"`}
          </Text>
        </View>
        {item.author && (
          <Text
            style={[
              styles.text,
              {fontWeight: '500', textAlign: 'right', marginRight: wp('1%')},
            ]}>
            {item.author}
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {paddingHorizontal: 30}]}>
          <Text style={styles.buttonText}>{item.button1}</Text>
          <Icon
            name="chevron-circle-right"
            size={hp('2.5%')}
            color={Colors.secondary}
            style={{marginLeft: hp('1.5%')}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{item.button2}</Text>
          <Icon
            name="share-alt"
            size={hp('2.5%')}
            color={Colors.secondary}
            style={{marginLeft: hp('1.5%')}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RenderTips = ({item}) => {
  const [index, setIndex] = useState(0);
  const [wished,setWished]=useState(false)

  const isCarousel = useRef(null);
  const data = item.sliderContent;
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{item.message}</Text>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={({item})=>renderItem(item,wished,setWished)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: wp('8.0%'),
          height: hp('1.5%'),
          borderRadius: hp('1.5%'),
          marginHorizontal: hp('0.1%'),
          backgroundColor: Colors.primary,
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'grey',
          width: wp('4%'),
          height: hp('2%'),
          borderRadius: 10,
          marginHorizontal: 0,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.7}
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
    height: '100%',
    paddingTop: hp('1.0%'),
    borderRadius: hp('2.0%'),
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  quoteContainer: {
    flexDirection: 'row',
    // flex:1,
    // display: 'flex',
  },
  image: {width: wp('100%'), height: hp('26%'),opacity:0.8},
  quoteImage: {
    flex: 0.4,
    display: 'flex',
    width: hp('20%'),
    height: hp('20%'),
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
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  messageText: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'left',
    paddingLeft: wp('2%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3%'),
    alignItems: 'flex-start',
    paddingVertical: hp('2%'),
  },
  button: {
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: hp('20%'),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.secondary,
    fontSize: hp('1.6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishListImage:{
    position: 'absolute',
    zIndex:5,
    top:hp('2%'),
    right:wp('3.5%')
  }
});
export {RenderTips};
