/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SwipeableFlatList from 'react-native-swipeable-list';
import Colors from '../../util/Colors';

// import {dummyData} from './data/dummyData';
const dummyData = [
  {
    id: 1,
    name: 'Entry 1_Oct 13, 2022',
    image:
      'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
  },
  {
     id: 2,
     name: 'Entry 1_Oct 13, 2022',
     image:
       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
   },
   {
     id: 3,
     name: 'Entry 1_Oct 13, 2022',
     image:
       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
   },
   {
     id: 4,
     name: 'Entry 1_Oct 13, 2022',
     image:
       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
   },
   {
     id: 5,
     name: 'Entry 1_Oct 13, 2022',
     image:
       'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
   },
  
];



const extractItemKey = item => {
  return item.id.toString();
};

const Item = ({item,navigation, backgroundColor, textColor, deleteItem}) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.messageContainer}>
          <Text style={styles.name} numberOfLines={1} onPress={()=>navigation.navigate('JournalDetails')}>
            {item.name}
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80',
            }}
            alt="logo"
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </>
  );
};

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

const SwipeableList = ({navigation}) => {
  const [data, setData] = useState(dummyData);

  const deleteItem = itemId => {
    const newState = [...data];
    const filteredState = newState.filter(item => item.id !== itemId);
    return setData(filteredState);
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button]}>
          <Pressable
            style={styles.deleteButton}
            onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText]}>Delete</Text>
            <Icon
              name="trash"
              size={hp('3%')}
              color={Colors.yellow}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({item}) => (
            <Item item={item} deleteItem={() => deleteItem} navigation={navigation} />
          )}
          maxSwipeDistance={wp('30%')}
          renderQuickActions={({index, item}) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    height: hp('8%'),
    flexDirection: 'row',
    borderRadius: hp('1%'),
    display: 'flex',
    justifyContent: 'space-between',
  },
  messageContainer: {
    maxWidth: wp('50%'),

    justifyContent: 'center',
  },
  name: {
    fontSize: hp('1.9%'),
    padding: hp('1%'),
    color: Colors.primary,
    fontWeight: '600',
  },
  logoContainer: {
    padding: wp('1%'),
    alignSelf: 'center',
  },
  image: {
    width: wp('15%'),
    height: hp('100%'),
    borderRadius: wp('1%'),
    flex: 1,
    alignSelf: 'center',
  },
  itemSeparator: {
    height: hp('1%'),
    backgroundColor: Colors.secondary
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {alignSelf: 'center'},
  button: {
    paddingRight: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('1%'),
    paddingHorizontal: hp('2%'),
    borderRadius: hp('10%'),
    overflow: 'hidden',
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.yellow,
    fontSize: hp('2%'),
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default SwipeableList;
