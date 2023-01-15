import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProtactedLayout } from '../../components/Layout'
import Colors from '../../util/Colors'

const Trending = ({navigation}) => {
  return (
     <ProtactedLayout title={"Trending"} navigation={navigation}>
    <StatusBar backgroundColor={Colors.primary}/>
    <View style={styles.container}>
      <Text style={styles.text}>Comming soon</Text>
      </View>
    </ProtactedLayout>
  )
}

export default Trending

const styles = StyleSheet.create({
     container:{
          flex:1,
          justifyContent:'center',
          alignItems: 'center',
     },
     text:{
          textAlign: 'center',
          fontWeight:'bold',
     }
})