import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';

const WellnessDetails = id => {
  return (
    <View>
      <View>
        <Text>arrow</Text>
        <Text>Mind</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.innerItem}>
          <Pressable onPress={() => console.log('id', item.name)}>
            <Image
              source={{uri: item.image}}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
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
      </View>
      <View>Tricks</View>
    </View>
  );
};

export default WellnessDetails;

const styles = StyleSheet.create({});
