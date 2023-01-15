/* eslint-disable react/prop-types */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import backIcon from '../../assets/images/go-back-arrow.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ProtactedLayout} from '../../components/Layout';
import Colors from '../../util/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './about';
import Contributions from './contributions';
const Tab = createMaterialTopTabNavigator();

const GuestProfile = ({navigation}) => {
  return (
    <ProtactedLayout title={'Community'}>
 <View style={styles.container}>
        <View style={styles.headContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={backIcon}
              alt="logo"
              style={styles.icon}
              resizeMode="cover"
            />
          </Pressable>
          <View style={styles.userContainer}>
            <View style={styles.userText}>
              <Text style={styles.text}>Kendell Jenner</Text>
              <View style={styles.buttonContainer}>
               <Text style={styles.buttonText}>CONNECTED</Text>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                }}
                alt="logo2"
                style={styles.logo}
                resizeMode="cover"
              />
            </View>
          </View>
               </View>
               </View>
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
            
     //        tabBarStyle: {
     //          borderBottomColor:Colors.primary
     //    },
            indicatorStyle: {
              backgroundColor: Colors.primary,
              paddingVertical:hp('.2%'),
          },
            activeTintColor: Colors.primary,
            inactiveTintColor:  Colors.primary,
          }}>
          <Tab.Screen name="about" component={About} />
          <Tab.Screen name="Contribution" component={Contributions} />
        </Tab.Navigator>
       {/* </View>*/}
    
     </ProtactedLayout>
  );
};

export default GuestProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headContainer: {
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {width: wp('10%'), height: wp('10%')},
  userContainer:{
     flexDirection: 'row',
     alignItems: 'center',
  },
  userText:{
     justifyContent:'flex-start',
     alignItems: 'flex-start',
     marginRight:hp('1%')
  },
  text:{
     color:Colors.primary,
     fontSize:hp('2.3%'),
     fontWeight:'800', textAlign: 'left',
  },
  buttonContainer:{
     backgroundColor:Colors.primary,
     paddingVertical: hp('1%'),
     paddingHorizontal: hp('2%'),
     borderRadius: hp('2%'),
    alignSelf:'flex-end',
    marginTop: hp('1.1%')
  },
  buttonText:{
     fontSize:hp('1.4%'),
     color:'white'
  },
  logo:{
     width: hp('8%'),
     height: hp('8%'),
     borderRadius: hp('5%'),
  },
  bodyContainer:{
     backgroundColor:'red'
  }
});
