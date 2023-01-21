/* eslint-disable react/prop-types */
import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import RenderFeaturedProgram from './renderFeaturedProgram';
import {RenderGreetings} from './renderGreetings';
import RenderHighlights from './renderHighlights';
import RenderLibrary from './renderLibrary';
import RenderProgram from './renderProgram';
import {RenderTips} from './renderTips';
import RenderTrending from './renderTrending';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {data} from './data';
import RenderCenter from './renderCenter';
import RenderDailyDose from './RenderDailyDose';
export const SLIDER_HEIGHT = Dimensions.get('screen').height * 0.8;
export const ITEM_HEIGHT = SLIDER_HEIGHT;

const renderItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      {item.type == 'greetings' && <RenderGreetings item={item.content} />}
      {item.type == 'dose' && <RenderDailyDose item={item.content} />}
      {item.type == 'tips' && <RenderTips item={item.content} />}
      {item.type == 'library' && <RenderLibrary item={item.content} />}
      {item.type == 'trending' && <RenderTrending item={item.content} />}
      {item.type == 'program' && <RenderProgram item={item.content} />}
      {item.type == 'featured' && <RenderFeaturedProgram item={item.content} />}
      {item.type == 'highlights' && <RenderHighlights item={item.content} />}
      {item.type == 'wellness' && <RenderCenter item={item.content} />}
    </View>
  );
};

const HomeSlider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        vertical={true}
        renderItem={renderItem}
        sliderHeight={SLIDER_HEIGHT}
        itemHeight={ITEM_HEIGHT}
        onSnapToItem={index => setIndex(index)}
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
    // height: hp('100%'),
    padding: wp('4%'),
    borderRadius: hp('2%'),
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
});
export default HomeSlider;
