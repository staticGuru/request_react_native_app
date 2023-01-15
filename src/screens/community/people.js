import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
import PeopleList from '../../components/community/peopleList';
import {useState} from 'react';
import CustomButton from '../../components/button';
const People = () => {
  const [showConnection, setShowConnection] = useState(false);
  const [members, setMembers] = useState(1);
  const data = [
    {
      id: 1,
      title: 'Discover People',
      description: 'Discover new peole from the community',
    },
    {
      id: 2,
      title: 'All People',
      description: 'View all people in the coummunity',
    },
    {
      id: 3,
      title: 'My Connections',
      description: 'View all people I am connected with',
    },
    {
      id: 4,
      title: 'Sent Invite',
      description: 'View all people I have sent invite to',
    },
    {
      id: 5,
      title: 'Received Invite',
      description: 'View all people who have sent invites to me',
    },
  ];
  const users = [
    {
      id: 1,
      type: 'CONNECTED',
      userName: 'Jonathon',
      userImage:
        'https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
      id: 2,
      type: 'CONNECTED',
      userName: 'Anna',
      userImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      type: 'CONNECTED',
      userName: 'Chirotober',
      userImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 21,
      type: 'INVITED',
      userName: 'Jonathon',
      userImage:
        'https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    },
    {
      id: 23,
      type: 'CONNECTED',
      userName: 'Anna',
      userImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 31,
      type: 'CONNECTED',
      userName: 'Chirotober',
      userImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 43,
      type: 'SENT INVITE',
      userName: 'Kali',
      userImage:
        'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 41,
      type: 'SENT INVITE',
      userName: 'Kali',
      userImage:
        'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.memberTextContent}>
          <Text
            style={[styles.popupText, {textAlign: 'left', fontWeight: '800'}]}>
            {item.title}
          </Text>
          <Text
            style={[
              styles.popupText,
              {textAlign: 'left', fontSize: hp('1.6%'), fontWeight: '200'},
            ]}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setMembers(index)}
          style={styles.outerRadio}>
          {members && members == index ? (
            <View style={styles.innerRadio} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <Modal
        visible={showConnection}
        onRequestClose={() => setShowConnection(!showConnection)}
        animationType="slide"
        transparent={true}>
        <SafeAreaView style={styles.centeredView}>
          <View>
            <View style={styles.headerContainer}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Icon
                  name="times-circle"
                  size={hp('3%')}
                  color={Colors.primary}
                  style={[styles.icon, {margin: 0, marginRight: wp('12%')}]}
                  onPress={() => {
                    setShowConnection(false);
                  }}
                />
              </View>
              <Text style={[styles.popupText, {justifyContent: 'center'}]}>
                Filter People By
              </Text>
            </View>
            <View style={styles.bodyContainer}>
              <Text
                style={[
                  styles.popupText,
                  {fontWeight: '200', fontSize: hp('2%'), textAlign: 'justify'},
                ]}>
                Filter people in the community to discover people, view all
                members in the community, view your connections, view invites
                you have sent and invites you have received from other membts
              </Text>
            </View>
            <View style={styles.chooseContainer}>
              <Text style={[styles.popupText, {marginBottom: hp('2%')}]}>
                Filter People
              </Text>
              <FlatList data={data} renderItem={renderItem} />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{marginVertical: hp('2%')}}>
              <CustomButton
                text={'Done'}
                onPress={() => setShowConnection(!showConnection)}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="search"
              size={hp('3%')}
              color={Colors.primary}
              style={styles.icon}
              onPress={() => {}}
            />
            <TextInput style={styles.input} placeholder="Search" />
          </View>
          <Icon
            name="filter"
            size={hp('3%')}
            color={Colors.primary}
            style={styles.icon}
            onPress={() => {
              setShowConnection(true);
            }}
          />
        </View>
        <View style={styles.peopleContainer}>
          <PeopleList title={data[members]?.title} members={users} />
        </View>
      </View>
    </>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('1%'),
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  searchContainer: {
    paddingHorizontal: hp('2%'),
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: hp('10%'),
    marginHorizontal: hp('1%'),
    alignItems: 'center',
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: hp('2%'),
    fontSize: hp('2.2%'),
    color: Colors.primary,
  },
  centeredView: {
    flex: 1,
    padding: hp('2%'),
    backgroundColor: Colors.secondary,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  popupText: {
    fontSize: hp('2.3%'),
    color: Colors.primary,
    fontWeight: 'bold',
  },
  bodyContainer: {
    paddingVertical: hp('5%'),
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  outerRadio: {
    minWidth: hp('3%'),
    minHeight: hp('3%'),
    borderRadius: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: hp('.4%'),
  },
  innerRadio: {
    minWidth: hp('1.8%'),
    minHeight: hp('1.8%'),
    borderRadius: hp('5%'),
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: hp('.3%'),
  },
  memberTextContent: {
    width: wp('70%'),
  },
});
