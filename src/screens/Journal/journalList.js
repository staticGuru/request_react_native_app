/* eslint-disable react/prop-types */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import Colors from '../../util/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeableList from './swipableList';
const JournalList = ({navigation}) => {
  return (
    <ProtactedLayout title={'Journal'}>
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Icon
            name="chevron-circle-left"
            size={hp('3%')}
            color={Colors.primary}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Oct 20, 2022</Text>
          <Icon
            name="plus-circle"
            size={hp('3%')}
            color={Colors.primary}
            style={styles.icon}
            onPress={()=>navigation.navigate('CreateJournal')}
          />
        </View>
        <View style={styles.listContainer}>
          <SwipeableList navigation={navigation} />
        </View>
      </View>
    </ProtactedLayout>
  );
};

export default JournalList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: hp('2%'),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: hp('1%'),
  },
  headerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'center',
  },
  icon: {alignSelf: 'center'},
  listContainer: {
    paddingVertical: hp('2%'),
  },
});
