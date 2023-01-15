/* eslint-disable react/prop-types */
import {StyleSheet, Image, View, Pressable} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PostCard from '../../components/community/postCard';
import backIcon from '../../assets/images/go-back-arrow.png';
const PostDetails = ({navigation, route}) => {
  return (
    <ProtactedLayout title={'Community'}>
      <View style={styles.container}>
      <Pressable onPress={()=>{navigation.goBack();}}>
        <Image source={backIcon} alt="logo" style={styles.icon} />
        </Pressable>

        <PostCard readMore post={route?.params?.post} />
      </View>
    </ProtactedLayout>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: hp('2%'),
  },
  icon: {margin: hp('1%'), width: wp('10%'), height: wp('10%')},
});
