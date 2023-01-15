import {FlatList,TouchableOpacity, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const renderItem = (item,navigation) => {

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('JournalList')} style={styles.list}>
    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
      <Text style={styles.timeStamp}>{item.timeStamp}</Text>
      <Icon
        name={item.emoji}
        size={hp('2.5%')}
        color={Colors.primary}
        style={styles.emoji}
      />
      </View>
      <Icon
        name="chevron-right"
        size={hp('2%')}
        color={Colors.primary}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};
const Journal = ({navigation}) => {
  const data = [
    {id: 1, timeStamp: 'Oct 24, 2022', emoji: 'user-circle-o'},
    {id: 2, timeStamp: 'Oct 24, 2022', emoji: 'frown-o'},
    {id: 3, timeStamp: 'Nov 14, 2022', emoji: 'user-circle-o'},
    {id: 4, timeStamp: 'Oct 24, 2022', emoji: 'user-circle-o'},
    {id: 5, timeStamp: 'Oct 24, 2022', emoji: 'frown-o'},
    {id: 6, timeStamp: 'Nov 14, 2022', emoji: 'user-circle-o'},
    {id: 7, timeStamp: 'Oct 24, 2022', emoji: 'user-circle-o'},
    {id: 8, timeStamp: 'Oct 24, 2022', emoji: 'frown-o'},
    {id: 9, timeStamp: 'Nov 14, 2022', emoji: 'user-circle-o'},

  ];
 
  return (
    <ProtactedLayout title={'Journal'}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>October</Text>
            <Icon
              name="chevron-down"
              size={hp('2.1%')}
              color={Colors.primary}
              style={styles.icon}
            />
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>2022</Text>
            <Icon
              name="chevron-down"
              size={hp('2.1%')}
              color={Colors.primary}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList data={data} renderItem={({item})=>renderItem(item,navigation)} showsVerticalScrollIndicator={false}/>
        </View>
      </View>
    </ProtactedLayout>
  );
};

export default Journal;
const styles = StyleSheet.create({
  container:{
    flex:1, flexDirection: 'column',
    padding:hp('1.2%')
  },
  pickerContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:hp('1%')
  },
  timeContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('12%'),
    borderWidth: hp('.3%'),
    paddingVertical:hp('0.8%'),
    borderRadius: hp('50%'),
    borderColor:'white'

  },
  text:{
    fontSize:hp('2.5%'),
    textAlign:'center',
    fontWeight:'bold',
    color:Colors.primary
  },
  icon:{ alignSelf: 'center',marginLeft:wp('2%')},
  listContainer:{
    flex:1,
    flexDirection: 'column',
    paddingHorizontal:hp('1%'),
    paddingVertical:hp('2%'),
  },
  list:{
    flexDirection: 'row',
    paddingHorizontal:hp('2%'),
    borderColor:'white',
    borderWidth:5,
    borderRadius:hp('20%'),
    paddingVertical:hp('1.2%'),
    marginBottom:hp('1%'),
    justifyContent:'space-between',
  },
  timeStamp:{
    textAlign:'left',
    fontWeight: 'bold',
    fontSize:hp('2.5%'),
    color:Colors.primary
  },
  emoji:{
    color:Colors.yellow,
    marginLeft:wp('2%'),
    alignSelf:'center'
  }
});
