import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../util/Colors';
const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bioContainer}>
        <Text style={styles.text}>Bio</Text>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</Text>
        </View>
      </View>
      <View style={styles.interestContainer}>
        <Text style={styles.text}>My Interests</Text>
        <View style={styles.interest}>
          {["keyboard 1","Management","developments"].map((e,index)=><Text key={index} style={styles.chip}>{e}</Text>)}
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:hp('3%'),
    paddingVertical:hp('2%'),
    backgroundColor:Colors.secondary,
    flex:1
  },
  description:{
    padding:hp('.9%'),
    borderWidth:hp('.5%'),
    borderColor:'white',
    borderRadius:hp('2%'),
    paddingVertical: hp('1.5%')
  },
  descriptionText:{
    fontSize:hp('1.9%'),
    color:Colors.primary,
    textAlign:'justify',
    letterSpacing:.5

  },
  text:{
    fontSize:hp('2.3%'),
    fontWeight:'900',
    color:Colors.primary,
    marginBottom:hp('2%')
  },
  interestContainer:{
    paddingTop:hp('1%'),

  },
  interest:{
    padding:hp('.9%'),
    borderWidth:hp('.5%'),
    borderColor:'white',
    borderRadius:hp('2%'),
    paddingVertical: hp('1.5%'),
    minHeight:hp('15%'),
    flexDirection: 'row',flexWrap:'wrap'
  },
  chip:{
    backgroundColor:Colors.primary,
    paddingHorizontal:hp('3%'),
    paddingVertical:hp('1%'),
    borderRadius: hp('2%'),
    color:'white',
    margin:hp('1%'),
    fontSize:hp('1.9%')
  }
});
