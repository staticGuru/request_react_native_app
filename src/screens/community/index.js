import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import Colors from '../../util/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feeds from './feeds';
import People from './people';
import Contributions from './contributions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Tab = createMaterialTopTabNavigator();

const Community = () => {
  return (
    <ProtactedLayout title={'Community'}>
      <StatusBar backgroundColor={Colors.primary} />
      <Tab.Navigator
      tabBarOptions={{
          labelStyle: {
            fontSize: hp('1.6%'),
            fontWeight: 'bold',
          },
          style: {
            borderTopWidth:0,
            elevation:0,
            borderBottomWidth:.2,
            borderBottomColor:Colors.primary,
            backgroundColor: Colors.secondary,//color you want to change
          },
          tabBarStyle: {
            borderBottomColor:Colors.primary
      },
          indicatorStyle: {
            backgroundColor: Colors.primary,
            paddingVertical:hp('.2%'),
        },
          activeTintColor: Colors.primary,
          inactiveTintColor:  Colors.primary,
        }}>
        <Tab.Screen name="feeds" component={Feeds} />
        <Tab.Screen name="people" component={People} />
        <Tab.Screen name="contributions" component={Contributions} />
      </Tab.Navigator>
    </ProtactedLayout>
  );
};

export default Community;
