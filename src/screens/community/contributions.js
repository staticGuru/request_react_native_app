import {StyleSheet,Image, Text, FlatList, View} from 'react-native';
import React from 'react';
import {
     widthPercentageToDP as wp,
     heightPercentageToDP as hp,
   } from 'react-native-responsive-screen';
import PostCard from '../../components/community/postCard';
import Colors from '../../util/Colors';
const feedData=[
     {
          id:1,
          userImage:"https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          userName:"Kendell Jenner",
          active:"10 mins ago",
          postImage:"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          postContent:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
     },
     {
          id:2,
          userImage:"https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          userName:"Kendell Jenner",
          active:"online",
          postImage:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          postContent:null
     },
     {
          id:3,
          userImage:"https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
          userName:"Kendell Jenner",
          active:"1 hour ago",
          postImage:null,
          postContent:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
     }
]
const Contributions = () => {
    
  return (
    <View style={styles.container}>
      <FlatList
        data={feedData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><PostCard post={item}/>}
        ItemSeparatorComponent={<View style={styles.separator}/>}
      />
    </View>
  );
};

export default Contributions;

const styles = StyleSheet.create({
     postContainer:{
          flexDirection: 'row',
          paddingHorizontal:hp('1.2%'),
          borderWidth:hp('.4%'),
          borderRadius:hp('2%'),
          borderColor:'white',
          paddingVertical:hp('1%'),
          alignItems: 'center'
     },
     container:{
          paddingVertical:hp('1%'),
          paddingHorizontal:hp('1.5%'),
          flex:1,
          backgroundColor:Colors.secondary,
     },
     logo:{
          width:hp('9%'),
          height:hp('9%'),
          borderRadius:hp('5%'),
          marginRight:hp('2%')
     },
     text:{
          fontSize:hp('2.5%'),
          marginBottom:hp('2%'),
          fontWeight:'400',
          fontStyle:'italic',
          color:'grey'
     },
     separator:{
          height: hp('1%'),
       }
});
