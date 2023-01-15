/* eslint-disable react/prop-types */
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const PostCard = ({post, readMore}) => {
  const navigation = useNavigation();
  const [wished, setWished] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const sheetRef = React.useRef();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            source={{
              uri: post.userImage,
            }}
            alt="logo"
            style={styles.logo}
            resizeMode="cover"
          />
          <View style={styles.nameContainer}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              {post.userName}
            </Text>
            <Text style={[styles.text, {fontSize: hp('2%')}]}>
              {post.active}
            </Text>
          </View>
          <View
            style={{position: 'absolute', top: hp('1.5%'), right: hp('2%')}}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Icon
                name="ellipsis-v"
                size={hp('3%')}
                color={Colors.primary}
                style={[styles.icon, {marginRight: hp('1%')}]}
                onPress={() => sheetRef.current?.open()}
              />
            </View>
          </View>
        </View>
        <View style={styles.postContainer}>
          {post.postImage && (
            <Image
              source={{
                uri: post.postImage,
              }}
              alt="logo2"
              style={styles.postImage}
              resizeMode="cover"
            />
          )}
          <View style={readMore ? styles.content : null}>
            {post.postContent && (
              <View>
                <Text style={styles.contentText}>{post.postContent}</Text>
                {readMore ? null : (
                  <View style={{alignItems: 'flex-end', padding: hp('1%')}}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        navigation.navigate('PostDetails', {post});
                      }}>
                      <Text style={styles.buttonText}>READ MORE</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            )}
            <View style={styles.footer}>
              <Icon
                name="heart"
                size={hp('3%')}
                color={wished ? Colors.yellow : Colors.primary}
                style={styles.icon}
                onPress={() => {
                  setWished(!wished);
                }}
              />
              <Icon
                name="comments"
                size={hp('3%')}
                color={showComments ? Colors.yellow : Colors.primary}
                style={styles.icon}
                onPress={() => {
                  setShowComments(!showComments);
                }}
              />
            </View>
          </View>
        </View>
        {showComments && (
          <View style={styles.commentsContainer}>
            <View style={styles.addComments}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
                }}
                alt="logo2"
                style={[styles.logo, {width: hp('5%'), height: hp('5%')}]}
                resizeMode="cover"
              />
              <View style={styles.Comments}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: hp('1.5%'),
                    fontWeight: '500',
                  }}>
                  Add a comment...
                </Text>
              </View>
            </View>
            {new Array(2).fill('e').map((e, index) => (
              <View key={index} style={styles.othersContainer}>
                <Image
                  source={{
                    uri: post.userImage,
                  }}
                  alt="logo2"
                  style={[styles.logo, {width: hp('5%'), height: hp('5%')}]}
                  resizeMode="cover"
                />
                <View style={styles.textContainer}>
                  <Text numberOfLines={2} style={styles.textContent}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took{' '}
                  </Text>
                  <View style={styles.rightContainer}>
                    <Text style={styles.time}>2 mins ago</Text>
                    <View style={styles.responseContent}>
                      <Text style={[styles.time, {paddingRight: hp('4%')}]}>
                        Like
                      </Text>
                      <Text style={[styles.time, {paddingRight: hp('1%')}]}>
                        Reply
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
      <RBSheet
        ref={sheetRef}
        height={hp('14%')}
        openDuration={100}
        customStyles={{
          container: {
            alignItems: 'center',
            borderTopLeftRadius: hp('4%'),
            borderTopRightRadius: hp('4%'),
            backgroundColor: Colors.primary,
          },
        }}>
        <View style={{justifyContent: 'center'}}>
          <View style={styles.sheetContainer}>
            <Icon
              name="pencil"
              size={hp('3%')}
              color={Colors.secondary}
              style={styles.icon}
            />
            <Text style={styles.editText} onPress={()=>sheetRef.current?.close()}>Edit</Text>
          </View>
          <View style={styles.sheetContainer}>
            <Icon
              name="trash"
              size={hp('3%')}
              color={Colors.secondary}
              style={styles.icon}
            />
            <Text style={styles.editText} onPress={()=>sheetRef.current?.close()}>Delete</Text>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    paddingHorizontal: hp('1.2%'),

    paddingVertical: hp('1%'),
    alignItems: 'center',
  },

  container: {
    paddingVertical: hp('1%'),
    marginHorizontal: hp('1.2%'),
    flexDirection: 'column',
    borderWidth: hp('.4%'),
    borderRadius: hp('2%'),
    borderColor: 'white',
  },
  logo: {
    width: hp('7%'),
    height: hp('7%'),
    borderRadius: hp('5%'),
    marginRight: hp('2%'),
  },
  text: {
    fontSize: hp('2.3%'),
    fontWeight: '400',
    color: Colors.primary,
  },
  postImage: {
    width: 'auto',
    height: hp('25%'),
  },
  button: {
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
    borderRadius: hp('5%'),
    backgroundColor: Colors.primary,
  },
  buttonText: {fontSize: hp('1.8%'), fontWeight: '500', color: 'white'},
  contentText: {
    padding: hp('1%'),
    fontSize: hp('2.1%'),
    color: Colors.primary,
    textAlign: 'justify',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: 'white',
    borderTopWidth: hp('.4%'),
    paddingTop: hp('.5%'),
  },
  content: {
    justifyContent: 'space-between',
    // height:hp('32%')
  },
  textContainer: {
    paddingHorizontal: hp('0.5%'),
    width: wp('70%'),
  },
  commentsContainer: {
    paddingTop: hp('2%'),
    paddingHorizontal: hp('1%'),
  },
  textContent: {
    textAlign: 'justify',
    fontSize: hp('1.7%'),
    color: Colors.primary,
  },
  addComments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Comments: {
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('1%'),
    borderWidth: hp('.5%'),
    borderColor: 'white',
    borderRadius: hp('4%'),
    width: '80%',
  },
  time: {fontSize: hp('1.9%'), fontWeight: '700', color: Colors.primary},
  othersContainer: {
    flexDirection: 'row',
    paddingVertical: hp('2%'),
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    paddingVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  responseContent: {
    flexDirection: 'row',
  },
  editText: {
    fontSize: hp('2.3%'),
    color: Colors.secondary,
    fontWeight: '800',
    paddingLeft: hp('2%'),
  },
  sheetContainer: {
    flexDirection: 'row',
    paddingVertical: hp('1%'),
  },
});
