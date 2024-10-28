import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OnBackGround = () => {
  return (
    <View className=" flex flex-col items-center justify-center pt-5">
      <Image source={require("../../../assets/OnBoardings/Onboardings.png")}/>
    </View>
  )
}

export default OnBackGround

const styles = StyleSheet.create({})