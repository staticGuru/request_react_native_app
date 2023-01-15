/* eslint-disable react/prop-types */
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
const JounalDetails = ({navigation}) => {
  return (
    <ProtactedLayout title={'Journal'}>
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.subContainer}>
            <Icon
              name="chevron-circle-left"
              size={hp('3%')}
              color={Colors.primary}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>Oct 20, 2022</Text>
          </View>
          <View style={styles.subContainer}>
            <Icon
              name="pencil"
              size={hp('4%')}
              color={Colors.primary}
              style={styles.icon}
              onPress={() => {}}
            />
            <View style={styles.saveButton}>
              <Icon
                name="trash"
                size={hp('4%')}
                color={Colors.primary}
                style={styles.icon}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.textInput}>Entry 1_Oct 13 2022</Text>
          {/*          <TextInput style={styles.textInput} placeholder="Add a title" value={title} onChange={(e)=>setTitle(e)}/>
           */}
        </View>
        <View style={styles.journalContainer}>
          <Text style={styles.textInput}>This is my first journal</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
            }}
            alt="logo"
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
      </View>
    </ProtactedLayout>
  );
};

export default JounalDetails;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: hp('2%'),
  },
  imageContainer: {
   paddingVertical: hp('5%'),
    alignSelf: 'center',
   
  },
  logo: {
    width: wp('80%'),
    height: hp('45%'),
    alignSelf: 'center',
    borderRadius:hp('2%'),
    overflow: 'hidden',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: hp('1%'),
    justifyContent: 'center',
  },
  textInput: {
    fontSize: hp('2%'),
    color: Colors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('1%'),
  },
  saveButton: {
    marginLeft: hp('1%'),
  },
  journalContainer: {width: wp('90%')},
  saveText: {fontSize: hp('2%'), color: 'white'},
});
