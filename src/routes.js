import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OnBoarding from './screens/onboarding';
import {
  ForgotPassword,
  SignIn,
  SignUp,
  Verification,
} from './screens/authendication';
import Home from './screens/Home';

import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from './util/Colors';
import Community from './screens/community';
import Journal from './screens/Journal';
import JournalList from './screens/Journal/journalList';
import CreateJournal from './screens/Journal/CreateJournal';
import JournalDetails from './screens/Journal/journalDetails';
import PostDetails from './screens/community/postDetail';
import GuestProfile from './screens/community/guestProfile';
import NewPost from './screens/community/newPost';
import SideMenu from './components/sideMenu';
import Trending from './screens/Trending';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const AuthContext = React.createContext();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
const TrendingScreenNavigator=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Trending" component={Trending} />
  </Stack.Navigator>
  )
}
const CommunityScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
      <Stack.Screen name="GuestProfile" component={GuestProfile} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
};
const JournalScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Journal" component={Journal} />
      <Stack.Screen name="JournalList" component={JournalList} />
      <Stack.Screen name="CreateJournal" component={CreateJournal} />
      <Stack.Screen name="JournalDetails" component={JournalDetails} />
    </Stack.Navigator>
  );
};
const AuthScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => {
          return (
            <View
              style={{
                height: hp('10%'),
                backgroundColor: Colors.primary,
                borderTopLeftRadius: hp('2%'),
                borderTopRightRadius: hp('2%'),
                paddingTop:hp('20%'),
                width: wp('100%'),
                borderWidth: 0,
              }}
            />
          );
        },
        tabBarStyle: {
          height: hp('6%'),
          border: 'none',
          backgroundColor: Colors.secondary,
          borderTopWidth: 0,
          elevation: 0,
        },
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: ({tintColor, focused, size}) => (
            <Icon
              name="home"
              size={hp('3%')}
              color={focused ? Colors.yellow : Colors.secondary}
            />
          ),
        }}
        component={FirstScreenNavigator} // Replaced Screen 1
      />
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({tintColor, focused, size}) => (
            <Icon
              name="flash"
              size={hp('3%')}
              color={focused ? Colors.yellow : Colors.secondary}
            />
          ),
        }}
        component={TrendingScreenNavigator} // Replaced Screen 1
      />
      <Tab.Screen
        name="Post"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus-circle"
              size={hp('4%')}
              color={focused ? Colors.yellow : Colors.primary}
            />
          ),
          tabBarIconStyle: {
            borderColor: Colors.secondary,
            // borderWidth: 20,
            // padding:10,
            width: hp('6%'),
            borderBottomLeftRadius:hp('7%'),
            borderBottomRightRadius:hp('7%'),
            height: hp('6%'),
            position: 'absolute',
            bottom: hp('1.5%'),
            backgroundColor: Colors.secondary,
            zIndex:100
          },
        }}
        component={FirstScreenNavigator} // Replaced Screen 1
      />
      <Tab.Screen
        name="JournalTab"
        options={{
          tabBarIcon: ({tintColor, focused, size}) => (
            <Icon
              name="book"
              size={hp('3%')}
              color={focused ? Colors.yellow : Colors.secondary}
            />
          ),
        }}
        component={JournalScreenNavigator} // Replaced Screen 1
      />
      <Tab.Screen
        name="CommunityTab"
        options={{
          tabBarIcon: ({tintColor, focused, size}) => (
            <Icon
              name="users"
              size={hp('3%')}
              color={focused ? Colors.yellow : Colors.secondary}
            />
          ),
        }}
        component={CommunityScreenNavigator} // Replaced Screen 2
      />
    </Tab.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      drawerStyle={{
        width: wp('80%'),
      }}
      drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={JournalScreenNavigator} />
    </Drawer.Navigator>
  );
};
const Routes = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      {state.userToken != null ? <AuthScreens /> : <DrawerNavigator />}
    </AuthContext.Provider>
  );
};
export {FirstScreenNavigator, AuthScreens};
export default Routes;
