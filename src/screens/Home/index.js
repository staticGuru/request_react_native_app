/* eslint-disable react/prop-types */
import {StatusBar} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import HomeSlider from '../../components/homeSlider';
import Colors from '../../util/Colors';

const Home = ({navigation}) => {

  return (
    <ProtactedLayout title={"Home"} navigation={navigation}>
    <StatusBar backgroundColor={Colors.primary}/>
      <HomeSlider/>
    </ProtactedLayout>
  );
};

export default Home;
