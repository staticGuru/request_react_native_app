/* eslint-disable react/prop-types */
import {
     Dimensions,
     FlatList,
     Image,
     StyleSheet,
     Pressable,
     Text,
     View,
   } from 'react-native';
   import React, {useRef, useState} from 'react';
   import Colors from '../../util/Colors';
   import Icon from 'react-native-vector-icons/FontAwesome';
   import Carousel, {Pagination} from 'react-native-snap-carousel';
   import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
   
   export const WIDTH = Dimensions.get('screen').width - hp('4%');
   export const ITEM_WIDTH = WIDTH;
   
   const renderItem = ({item}) => {
     return (
       <View style={styles.item}>
         <View style={styles.innerItem}>
         <Pressable onPress={()=>console.log("id",item.name)}>
         <Image source={{uri: item.image}} style={styles.image} resizeMode="stretch"/>
         </Pressable>
     <Text style={styles.name}>{item.name}</Text>
         </View>
       </View>
     );
   };
   const RenderCarouselItem = (item) => {
     return (
    <FlatList
           data={item.slides}
           numColumns={1}
           style={[styles.list]}
           renderItem={renderItem}
     />
     );
   };
   const RenderCenter = ({item}) => {
     const [index, setIndex] = useState(0);
   
     const isCarousel = useRef(null);
     const data = item.data[0];
     return (
       <View style={styles.container}>
         <View style={styles.headContainer}>
           <Text style={styles.heading}>{item.message}</Text>
           <View style={{flexDirection: 'row'}}>
             <Text style={styles.seeAll}>See All</Text>
             <Icon
               name="chevron-right"
               size={hp('2%')}
               color={Colors.primary}
               style={{marginLeft: hp('0.5%'), alignSelf: 'center'}}
             />
           </View>
         </View>
         <View style={styles.listContainer}>
           {RenderCarouselItem(data)}
         </View>
       </View>
     );
   };
   
   export default RenderCenter;
   
   const styles = StyleSheet.create({
    
     list: {
       // flex:1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       width: wp('100%'),
     },
     item: {
       //     backgroundColor: 'blue',
       paddingVertical: hp('1%'),
       paddingHorizontal: wp('4%'),
       width: WIDTH,
     },
     innerItem: {
       //     backgroundColor: 'red',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: hp('2%'),
       overflow: 'hidden',
     },
     image: {
       // flex: 0.4,
       display: 'flex',
       width: '100%',
       height: WIDTH / 2 - hp('3%'),
       opacity: 0.7,
     },
     headContainer: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingHorizontal: wp('4%'),
       paddingVertical: hp('2%'),
     },
     heading: {
       fontSize: hp('2.4%'),
       fontWeight: 'bold',
       color: Colors.primary,
     },
     seeAll: {
       fontSize: hp('2%'),
       fontWeight: '600',
       color: Colors.primary,
       alignItems: 'center',
       alignSelf: 'center',
     },
     name: {
       zIndex: 10,
       position: 'absolute',
       top: hp('3%'),
       alignSelf: 'center',
       fontWeight: 'bold',
       fontSize: hp('2.2%'),
       color: Colors.primary,
     },
   });
   