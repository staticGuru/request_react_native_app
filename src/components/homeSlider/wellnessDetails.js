import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';

const WellnessDetails = id => {
  return (
    <View>
    {/* <View>
        <Text>arrow</Text>
        <Text>Mind</Text>
    </View>
      <View style={styles.item} onClick={()=>console.log(index)}>
      <View
        style={[
          styles.innerItem,
          {flexDirection: (index + 1) % 2 != 0 ? 'row' : 'row-reverse'},
          
        ]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />

        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
      <View>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text>
        “You are no richer than what you carry in your mind, no stronger than
        what you hold in your heart, and no purer than what you harbor in your
        soul.”
      </Text>
      <Text>― Matshona Dhliwayo</Text>
      </View>*/}
  <View>Tricks</View>
    </View>
  );
};

export default WellnessDetails;

const styles = StyleSheet.create({});

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

