import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Well1 from '../../assets/images/wellnessCenter/center1.png';
import Detailsmin from '../../assets/images/wellnessCenter/detailsmin.png';
import WellnessDetails1 from '../../assets/images/wellnessCenter/wellnessdetails1.png';
import WellnessDetails2 from '../../assets/images/wellnessCenter/details2.png';
import WellnessDetails3 from '../../assets/images/wellnessCenter/details3.png';
import WellnessDetails4 from '../../assets/images/wellnessCenter/details4.png';

import Colors from '../../util/Colors';
export const WIDTH = Dimensions.get('screen').width - hp('4%');
export const ITEM_WIDTH = WIDTH;
const detailsTricks = [
  {
    id: 1,
    image: WellnessDetails1,
    title: 'Find joy in you',
  },
  {
    id: 2,
    image: WellnessDetails2,
    title: 'Being Aware',
  },
  {
    id: 3,
    image: WellnessDetails3,
    title: 'Meditate',
  },
  {
    id:4,
    image: WellnessDetails4,
    title: 'Practice Gratitude',
  },
];
const WellnessDetails = ({navigation}) => {
  var index = 1;
  var item = {
    image: Well1,
    name: 'Mind',
  };
  return (
    <View style={{padding: hp('1%')}}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon
            name="arrow-left"
            size={hp('2%')}
            color={Colors.primary}
            style={{marginHorizontal: hp('0.5%'), alignSelf: 'center',marginTop:hp('1%')}}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Mind</Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        onClick={() => console.log('called')}>
        <View
          style={[
            styles.innerItem,
            {flexDirection: (index + 1) % 2 != 0 ? 'row' : 'row-reverse'},
          ]}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />

          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={{flexGrow:1,display:"flex"}}>
        <View style={styles.firstContainer}>
        <Image
            source={Detailsmin}
            style={styles.detailsImage}
            resizeMode="cover"
          />
          <Text style={styles.text}>
            “You are no richer than what you carry in your mind, no stronger
            than what you hold in your heart, and no purer than what you harbor
            in your soul.”
          </Text>
          <Text style={[styles.text, {textAlign: 'right'}]}>
            ― Matshona Dhliwayo
        </Text>
          <Text
            style={[
              styles.text,
              {
                paddingTop: hp('1%'),
                textAlign: 'left',
                fontSize: hp('2.2%'),
                fontWeight: 'bold',
              },
            ]}>
            Tricks
          </Text>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: hp('2%'),
              }}>
              {detailsTricks.map((e, i) => (
                <View
                key={i}
                  style={{
                    width: wp('40%'),
                    height: hp('30%'),
                    margin: hp('1%'),
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'white',
                      borderTopLeftRadius: hp('2%'),
                      borderTopRightRadius: hp('2%'),
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={e.image}
                      style={styles.detailGirdImage}
                      resizeMode="stretch"
                    />
                    <Text style={[styles.text, {paddingVertical: hp('1%')}]}>
                      {e.title}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WellnessDetails;

const styles = StyleSheet.create({
  text: {
    marginVertical: hp('1%'),
    fontSize: hp('2%'),
    fontWeight: 'normal',
    color: Colors.primary,
    textAlign: 'left',
    lineHeight: 24,
  },
  item: {
    cursor: 'pointer',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('1%'),
    width: WIDTH,
    justifyContent: 'center',
  },
  innerItem: {
    backgroundColor: Colors.primary,
    display: 'flex',
    width: WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: hp('2%'),
    height: WIDTH / 2 - hp('3%'),
    overflow: 'hidden',
  },
  image: {
    // flex: 0.4,
    display: 'flex',
    width: WIDTH / 2 - hp('10%'),
    height: WIDTH / 2 - hp('10%'),
    opacity: 0.7,
    position: 'absolute',
    top: hp('3%'),
    right: hp('2%'),
  },
  name: {
    position: 'absolute',
    top: hp('9%'),
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    color: 'white',
    left: hp('1.2%'),
  },
  firstContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
  detailsImage: {
    width: hp('40%'),
    height: hp('40%'),
    alignSelf: 'center',
  },
  detailGirdImage: {
    width: '100%',
    height: hp('20%'),
  },
  gridContainer: {
    display: 'flex',
    flex: 1,
  },
});

// import "./styles.css";
// import axios from "axios";
// import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
// import Question from "./Question";

// /*
//  * Subjects covered by coding challenge
//  * ------------------------------
//  * 1. Naming Convention
//  * 2. Debugging
//  * 3. Data Structures and Algorithms
//  * 4. React and TypeScript
//  * 5. Calling API
//  * 6. HTML & CSS styling
//  *
//  */

// const getToken = async (setToken: Dispatch<SetStateAction<string>>) =>
//   await axios
//     .post("https://interview-questions-dbs.herokuapp.com/login")
//     .then((res) => {
//       setToken(res.data.token);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });

// const getData = async (
//   token: string,
//   setMenu: Dispatch<SetStateAction<any | undefined>>
// ) => {
//   // Add REST API call here to get data using token retrieved from first API
//   // (https://interview-questions-dbs.herokuapp.com/welcome (GET))
//   // Header: { headers: { Authorization: 'Bearer <<token>>'} }
//   await axios
//     .get("https://interview-questions-dbs.herokuapp.com/welcome", {
//       headers: {
//         Authorization: 'Bearer ' + token //the token is a variable which holds the token
//       }
//      })
//     .then((res) => {
//       setMenu(res.data);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);

//       setMenu([
//         {
//             "name": "Static Typed Language",
//             "value": "StaticTypedLanguage",
//             "children":
//             {
//                 "data":
//                 [
//                     {
//                         "name": "One",
//                         "value": "ONE",
//                         "children":
//                         {
//                             "data":
//                             [
//                                 {
//                                     "name": "Five",
//                                     "value": "FIVE"
//                                 }
//                             ]
//                         }
//                     },
//                     {
//                         "name": "Two",
//                         "value": "TWO"
//                     }
//                 ]
//             }
//         },
//         {
//             "name": "Dynamic Typed Language",
//             "value": "DynamicTypedLanguage",
//             "children":
//             {
//                 "data":
//                 [
//                     {
//                         "name": "Three",
//                         "value": "Three"
//                     },
//                     {
//                         "name": "Four",
//                         "value": "FOUR"
//                     }
//                 ]
//             }
//         }
//     ]);
//     });
// };
// // best learning today

// // const App = () => {
// //   const [token, setToken] = useState("");
// //   const [menu, setMenu] = React.useState<any>([]);
// //   const [openLevels, setOpenLevels] = useState(["level1"]);
// //   useEffect(() => {

// //     getToken(setToken);
// //     getData(token,setMenu);

// //     // You can make another API call here to set dropdown menu data
// //   }, [token]);
// //   const toggleLevel = (level:any) => {
// //     if (level === null) {
// //       setOpenLevels([]);
// //     } else if (openLevels.includes(level)) {
// //       setOpenLevels(openLevels.filter((item) => item !== level));
// //     } else {
// //       setOpenLevels([...openLevels, level]);
// //     }
// //   };
// //   const handleMenu = (oldMenu: any | undefined, newMenu: any = []) => {
// //     // Handle Menu data here
// //   };

// //   const handleBack = () => {
// //     // Handle Back Button here
// //   };
// //   //id==>value //items==>children
// // const RecursiveComponent = ({
// //   openLevels = [],
// //   toggleLevel,
// //   name,
// //   id,
// //   items
// // }:any) => {
// //   const hasChildren = (children:any) => children && children.length;

// //   const isOpen = openLevels.includes(id);
// //   const isActive = openLevels[openLevels.length - 1] === id;
// //   const isTopLevel = openLevels[0] === id;
// //   return (
// //     <ul
// //     className={`stack-navigation ${isOpen?"is-open":""} ${isActive?"is-active":""}`}

// //     >
// //       <li className="heading">
// //         {!isTopLevel && <button onClick={() => toggleLevel(id)}>Back</button>}
// //         <span>{name}</span>
// //       </li>
// //       {hasChildren(items) &&
// //         items.map((item:any) => (
// //           <li>
// //             {hasChildren(item.items) ? (
// //               <button type="button" onClick={() => toggleLevel(item.id)}>
// //                 {item.name} (
// //                 {`${item.items.length} ${
// //                   item.items.length === 1 ? "child" : "children"
// //                 }`}
// //                 )
// //               </button>
// //             ) : (
// //               <a href={item.path}>{item.name} (link)</a>
// //             )}

// //             {/*
// //             Only render if item has children otherwise
// //             we will end up if with some divs that are never used
// //             */}
// //             {hasChildren(item.children) && (
// //               <RecursiveComponent
// //                 openLevels={openLevels}
// //                 toggleLevel={toggleLevel}
// //                 key={item.value}
// //                 {...item}
// //               />
// //             )}
// //           </li>
// //         ))}
// //     </ul>
// //   );
// // };
// // const data = {
// //   name: "Lorem ipsum",
// //   id: "level1",
// //   items: [
// //     {
// //       name: "Dolor",
// //       id: "level21",
// //       items: [
// //         {
// //           name: "Sit amet",
// //           id: "level31",
// //           path: "#",
// //           items: [
// //             {
// //               name: "Consectetur adipiscing",
// //               id: "level4",
// //               path: "#"
// //             }
// //           ]
// //         },
// //         {
// //           name: "Gravida sin",
// //           id: "level32",
// //           path: "#"
// //         }
// //       ]
// //     },
// //     {
// //       name: "guru",
// //       id: "level22",
// //       path: "#"
// //     }
// //   ]
// // };
// // console.log("menu",menu);
// //   return (
// //     <div className="flex justify-center">
// //        <RecursiveComponent
// //       openLevels={openLevels}
// //       toggleLevel={toggleLevel}
// //       {...data}
// //     />
// //       {/* Start component code here */}
// //       {/* Code above this line or comment the line below when starting */}
// //       <Question />
// //     </div>
// //   );
// // };

// // export default App;
