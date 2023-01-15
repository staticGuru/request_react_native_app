/* eslint-disable react/prop-types */
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ProtactedLayout} from '../../components/Layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../util/Colors';
import { useState } from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomModal from '../../components/modal';
const CreateJournal = ({navigation}) => {
     const [title,setTitle]= useState('');
     const [modalVisible, setModalVisible] = useState(false);
     const [image, setImage] = useState();
     const launchcameraLibrary = () => {
       setModalVisible(false);
       let options = {
         storageOptions: {
           skipBackup: true,
           path: 'images',
         },
       };
       launchCamera(options, response => {
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
           alert(response.customButton);
         } else {
           setImage(response.assets[0]?.uri);
         }
       });
     };
     const PickImageGallery = () => {
       setModalVisible(false);
       let options = {
         storageOptions: {
           skipBackup: true,
           path: 'images',
         },
       };
       launchImageLibrary(options, response => {
         console.log('Response = ', response);
   
         if (response.didCancel) {
           console.log('User cancelled image picker');
         } else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
           alert(response.customButton);
         } else {
           setImage(response.assets[0]?.uri);
         }
       });
     };
    
  return (
    <ProtactedLayout title={'Journal'}>
    <CustomModal
        visible={modalVisible}
        dismiss={() => setModalVisible(!modalVisible)}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Images</Text>
          <View style={{paddingLeft: hp('5%'), paddingVertical: hp('1%')}}>
            <Text
              style={[
                styles.modalText,
                {fontWeight: '300', paddingVertical: hp('2%')},
              ]}
              onPress={() => launchcameraLibrary()}>
              Camera
            </Text>
            <Text
              style={[styles.modalText, {fontWeight: '300'}]}
              onPress={() => PickImageGallery()}>
              Photo Gallery
            </Text>
          </View>
        </View>
      </CustomModal>

      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.subContainer}>
            <Icon
              name="chevron-circle-left"
              size={hp('3%')}
              color={Colors.primary}
              style={styles.icon}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerText}>Oct 20, 2022</Text>
          </View>
          <View style={styles.subContainer}>
            <Icon
              name="pencil"
              size={hp('4%')}
              color={Colors.primary}
              style={styles.icon}
              onPress={() => navigation.navigate('CreateJournal')}
            />
            {title !='' && <View style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </View>}
          </View>
        </View>
        <View style={styles.titleContainer}>
          <TextInput style={styles.textInput} placeholder="Add a title" value={title} onChange={(e)=>setTitle(e)}/>
          <Icon
            name="picture-o"
            size={hp('4%')}
            color={Colors.primary}
            style={styles.icon}
            onPress={()=>{setModalVisible(true)}}
          />
        </View>
        <View style={styles.journalContainer}>
        <TextInput style={[styles.textInput,{textAlignVertical: 'top'}]} multiline={true} placeholder="Add a new entry to your journal..." numberOfLines={8}/>
        {image && (
          <View style={styles.imageContainer}>
            <Icon
              name="times-circle"
              size={hp('4%')}
              color={Colors.primary}
              style={{position: 'absolute', zIndex: 20, top: 10, right: 10}}
              onPress={() => {
                setImage();
              }}
            />
            <Image
              source={{
                uri: image,
              }}
              style={{width: '100%', height: '100%'}}
              resizeMode="cover"
            />
          </View>
        )}
        </View>
      </View>
    </ProtactedLayout>
  );
};

export default CreateJournal;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: hp('25%'),
    borderRadius:hp('1%'),
    overflow: 'hidden'
  },
  modalView: {
    margin: hp('4%'),
    backgroundColor: 'white',
    borderRadius: hp('2%'),
    padding: hp('2.5%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp('.2%'),
    },
    shadowOpacity: 0.25,
    shadowRadius: hp('.4%'),
    elevation: 5,
  },
  modalText: {
    fontSize: hp('2.1%'),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: hp('2%'),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: Colors.primary,
    marginLeft: hp('1%'),
    justifyContent: 'center',
  },
  textInput:{
     fontSize: hp('2%'),color: Colors.primary,
  },
  titleContainer: {flexDirection: 'row', justifyContent: 'space-between',padding:hp('1%')},
  saveButton: {
    marginLeft: hp('1%'),
    backgroundColor: Colors.primary,
    padding: hp('1%'),
    paddingHorizontal: hp('5%'),
    borderRadius: hp('10%'),
    overflow: 'hidden',
  },
  journalContainer:{width:wp('90%')},
  saveText: {fontSize: hp('2%'), color: 'white'},
});
