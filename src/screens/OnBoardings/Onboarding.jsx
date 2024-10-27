import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import OnBackGround from '../../components/OnBoardings/OnBackGround' 


const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col gap-y-8 px-6 ">
        <StatusBar style={styles.status}/>
        {/* Image component */}
        <OnBackGround/>
        {/* Content  */}
        <View>
          <Text style={styles.safeContainer} className=" text-white font-semibold text-2xl">Meet Guardia</Text>
          <View className=" flex flex-row items-center gap-x-2">
            <Text className=" text-white font-semibold text-2xl">Your</Text>
            <Text className=" font-semibold text-2xl text-[#4D2F76]">Gender Info Chatbot</Text>
          </View>
        </View>

        <View>
          <Text className=" text-white text-base">All in one ask any question about gender using 
          guardia bot</Text>
        </View>

        <View>
          <TouchableOpacity className=" flex flex-col rounded-md" onPress={() => {navigation.navigate("Onboarding2")}}>
            <Text className=" text-white bg-[#371960] py-4 font-semibold text-lg text-center">Get Started</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? 20 : null,
    },
    status: {
        width: "auto"
    }
})