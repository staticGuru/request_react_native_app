/* eslint-disable react/prop-types */
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ProtactedLayout } from "../../components/Layout";
import backIcon from "../../assets/images/go-back-arrow.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../util/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CustomModal from "../../components/modal";
import CustomButton from "../../components/button";
const NewPost = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();
  const [members, setMembers] = useState(0);
  const [defaults, setDefaults] = useState(false);
  const [showConnection, setShowConnection] = useState(false);
  const data = [
    {
      id: 1,
      title: "All Members",
      description: "Post will be shared with all the members in the community",
    },
    {
      id: 2,
      title: "All Connections",
      description: "Post will be shared with all your connections",
    },
  ];
  const launchcameraLibrary = () => {
    setModalVisible(false);
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
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
        path: "images",
      },
    };
    launchImageLibrary(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        setImage(response.assets[0]?.uri);
      }
    });
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.memberTextContent}>
          <Text
            style={[styles.popupText, { textAlign: "left", fontWeight: "800" }]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.popupText,
              { textAlign: "left", fontSize: hp("1.6%"), fontWeight: "200" },
            ]}
          >
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setMembers(index)}
          style={styles.outerRadio}
        >
          {members == index && (
            <View style={styles.innerRadio} />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ProtactedLayout title={"Community"}>
      <Modal
        visible={showConnection}
        onRequestClose={() => setShowConnection(!showConnection)}
        animationType="slide"
        transparent={true}
      >
        <SafeAreaView style={styles.centeredView}>
          <View>
            <View style={styles.headerContainer}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  name="times-circle"
                  size={hp("3%")}
                  color={Colors.primary}
                  style={[styles.icon, { margin: 0 }]}
                  onPress={() => {
                    setShowConnection(false);
                  }}
                />
              </View>
              <Text style={[styles.popupText, { justifyContent: "center" }]}>
                Choose your audience
              </Text>
            </View>
            <View style={styles.bodyContainer}>
              <Text style={[styles.popupText, { fontWeight: "300" }]}>
                You can choose the audience for this specific post.
              </Text>
            </View>
            <View style={styles.chooseContainer}>
              <Text style={[styles.popupText, { marginBottom: hp("2%") }]}>
                Choose Audience
              </Text>
              <FlatList data={data} renderItem={renderItem} />
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => setDefaults(!defaults)}
                style={styles.outerRadio}
              >
                {defaults ? <View style={styles.innerRadio} /> : null}
              </TouchableOpacity>
              <Text style={[styles.popupText, { marginLeft: hp("1.5%") }]}>
                Set as Default
              </Text>
            </View>
            <View style={{ marginVertical: hp("2%") }}>
              <CustomButton
                text={"save"}
                onPress={() => setShowConnection(!showConnection)}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <CustomModal
        visible={modalVisible}
        dismiss={() => setModalVisible(!modalVisible)}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Images</Text>
          <View style={{ paddingLeft: hp("5%"), paddingVertical: hp("1%") }}>
            <Text
              style={[
                styles.modalText,
                { fontWeight: "300", paddingVertical: hp("2%") },
              ]}
              onPress={() => launchcameraLibrary()}
            >
              Camera
            </Text>
            <Text
              style={[styles.modalText, { fontWeight: "300" }]}
              onPress={() => PickImageGallery()}
            >
              Photo Gallery
            </Text>
          </View>
        </View>
      </CustomModal>

      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={backIcon}
              alt="logo"
              style={styles.icon}
              resizeMode="cover"
            />
          </Pressable>
          <Text style={styles.headerTitle}>New Post</Text>
        </View>
        <View style={styles.postContainer}>
          <View style={styles.userContainer}>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1520295187453-cd239786490c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                }}
                alt="logo"
                style={styles.logo}
                resizeMode="cover"
              />
              <View style={styles.nameContainer}>
                <Text style={[styles.text, { fontWeight: "bold" }]}>
                  Rick Novak
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="user-plus"
                size={hp("4%")}
                color={Colors.primary}
                style={styles.icon}
                onPress={() => {
                  setShowConnection(true);
                }}
              />
              <Icon
                name="picture-o"
                size={hp("4%")}
                color={Colors.primary}
                style={styles.icon}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
          </View>
          {/* <View style={styles.titleContainer}>
          <TextInput style={styles.textInput} placeholder="Add a title" value={title} onChange={(e)=>setTitle(e)}/>
          <Icon
            name="picture-o"
            size={hp('4%')}
            color={Colors.primary}
            style={styles.icon}
            onPress={() =>{}}
          />
      </View>*/}
          <View style={styles.journalContainer}>
            {true && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.popupText}>Audience: </Text>
                <Text
                  style={[
                    styles.popupText,
                    {
                      textAlign: "left",
                      fontSize: hp("2%"),
                      fontWeight: "300",
                    },
                  ]}
                >
                  {data[members]?.title??""}
                </Text>
              </View>
            )}
            <TextInput
              style={[styles.textInput, { textAlignVertical: "top" }]}
              multiline={true}
              placeholder="Add a new entry to your journal..."
              numberOfLines={8}
            />
            {image && (
              <View style={styles.imageContainer}>
                <Icon
                  name="times-circle"
                  size={hp("4%")}
                  color={Colors.primary}
                  style={{
                    position: "absolute",
                    zIndex: 20,
                    top: 10,
                    right: 10,
                  }}
                  onPress={() => {
                    setImage();
                  }}
                />
                <Image
                  source={{
                    uri: image,
                  }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </ProtactedLayout>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: hp("25%"),
    borderRadius:hp('1%'),
    overflow: 'hidden'
  },
  modalView: {
    margin: hp("4%"),
    backgroundColor: "white",
    borderRadius: hp("2%"),
    padding: hp("2.5%"),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: hp(".2%"),
    },
    shadowOpacity: 0.25,
    shadowRadius: hp(".4%"),
    elevation: 5,
  },
  modalText: {
    fontSize: hp("2.1%"),
    fontWeight: "bold",
    color: Colors.primary,
  },
  headContainer: {
    flexDirection: "row",
  },
  container: {
    marginHorizontal: hp("1.3%"),
    marginVertical: hp("1%"),
  },
  text: {
    fontSize: hp("2.3%"),
    fontWeight: "400",
    color: Colors.primary,
  },
  logo: {
    width: hp("7%"),
    height: hp("7%"),
    borderRadius: hp("5%"),
    marginRight: hp("2%"),
  },
  textInput: {
    fontSize: hp("2%"),
    color: Colors.primary,
  },
  userContainer: {
    flexDirection: "row",
    paddingHorizontal: hp(".2%"),
    justifyContent: "space-between",
    paddingVertical: hp("1%"),
    alignItems: "center",
  },
  journalContainer: { width: wp("90%") },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp("1%"),
  },
  icon: { margin: hp("1%"), width: wp("10%"), height: wp("10%") },
  headerTitle: {
    fontSize: hp("2.2%"),
    marginLeft: hp("13%"),
    color: Colors.primary,
    fontWeight: "900",
    alignSelf: "center",
  },
  postContainer: {
    padding: hp("1%"),
    borderColor: "white",
    borderWidth: hp("0.5%"),
    borderRadius: hp("1.1%"),
    minHeight: hp("65%"),
  },
  centeredView: {
    flex: 1,
    padding: hp("2%"),
    backgroundColor: Colors.secondary,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  popupText: {
    fontSize: hp("2.3%"),
    color: Colors.primary,
    fontWeight: "bold",
  },
  bodyContainer: {
    paddingVertical: hp("5%"),
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1%"),
    justifyContent: "space-between",
  },
  outerRadio: {
    minWidth: hp("3%"),
    minHeight: hp("3%"),
    borderRadius: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.primary,
    borderWidth: hp(".4%"),
  },
  innerRadio: {
    minWidth: hp("1.8%"),
    minHeight: hp("1.8%"),
    borderRadius: hp("5%"),
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: hp(".3%"),
  },
  memberTextContent: {
    width: wp("70%"),
  },
});
