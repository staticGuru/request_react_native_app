/* eslint-disable react/prop-types */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthHeader from '../authHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AuthContext } from '../../routes';
const Separator = () => {
  return <View style={styles.itemSeparator} />;
};

const SideMenu = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);

  const sideMenuList = [
    {
      id: 1,
      title: 'Explore',
      icon: 'compass',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 2,
      title: 'Trending',
      icon: 'fire',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 3,
      title: 'Library',
      icon: 'graduation-cap',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },

    {
      id: 5,
      title: 'Tips and Tricks',
      icon: 'ticket',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 6,
      title: 'Favourites',
      icon: 'heart',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 7,
      title: 'My Journal',
      icon: 'joomla',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },

    {
      id: 8,
      title: 'Transformation Hightlights',
      icon: 'star',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 9,
      title: 'My Journal',
      icon: 'joomla',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 4,
      title: 'Live Events',
      icon: 'life-ring',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 10,
      title: 'Programs',
      icon: 'tasks',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 11,
      title: 'The Journey of Life',
      icon: 'tree',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 12,
      title: 'Transformation Journey',
      icon: 'modx',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
   
    {
      id: 14,
      title: 'About the App',
      icon: 'ban',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
    {
      id: 13,
      title: 'Logout',
      icon: 'sign-out',
      onPress: () => {
        navigation.closeDrawer();
        signOut();
       
      },
    },
    {
      id: 15,
      title: 'About the App',
      icon: 'ban',
      onPress: () => {
        navigation.navigate('HomeDrawer');
        navigation.closeDrawer();
      },
    },
  ];
  return (
    <View style={styles.sideMenu}>
      <AuthHeader sideDrawer={true} />
      <Separator />
      <FlatList
        data={sideMenuList}
        ItemSeparatorComponent={<Separator />}
        renderItem={({item, index}) => {
          return item.id == 15 ? (
            <View style={[styles.drawerItem,styles.footer]}>
              <Text style={styles.text}>Rick Novak</Text>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
                }}
                alt="logo"
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          ) : (
            <TouchableOpacity
              key={index}
              style={styles.drawerItem}
              onPress={item.onPress}>
              <Icon
                name={item.icon}
                size={hp('3%')}
                color={Colors.secondary}
                style={styles.icon}
              />
              <Text style={styles.drawerText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  sideMenu: {
    backgroundColor: Colors.primary,
    borderRightWidth: hp('.1%'),
    borderRightColor: Colors.secondary,
    height: hp('100%'),
  },
  itemSeparator: {
    height: hp('.1%'),
    backgroundColor: Colors.secondary,
    marginVertical: hp('1%'),
  },
  drawerItem: {
    flexDirection: 'row',
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('.5%'),
    alignItems: 'center',
  },
  drawerText: {
    color: Colors.secondary,
    fontSize: hp('2%'),
    paddingLeft: hp('2%'),
    fontWeight: '700',
  },
  icon: {marginLeft: wp('2%'), alignSelf: 'center'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: hp('2.4%'),
    fontWeight: '800',
    color: Colors.secondary,
    marginRight: hp('2%'),
  },
  logo: {
    width: hp('7%'),
    height: hp('7%'),
    borderRadius: hp('5%'),
    marginRight: hp('2%'),
  },
});
