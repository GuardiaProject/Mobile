import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import OnBackGround from '../../components/OnBoardings/OnBackGround' 


const Onboarding2 = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col gap-8 px-6 ">
        <StatusBar style={styles.status}/>
        {/* Image component */}
        <OnBackGround/>
        {/* Content  */}
        <View>
          <Text style={styles.safeContainer} className=" text-white font-semibold text-xl">Do you <Text className=" font-semibold text-xl text-[#4D2F76]">have any question</Text></Text>
          <View className=" flex flex-row items-center gap-2">
            <Text className=" text-white font-semibold text-xl">About gender just ask</Text>
            <Text className=" font-semibold text-xl text-[#4D2F76]">Guardia</Text>
          </View>
        </View>

        <View>
          <Text className=" text-white text-normal text-sm">Feel Free to ask our guardia bot any question related to
            gender, nutrition, child protection and other domains</Text>
        </View>

        <View>
          <TouchableOpacity className=" rounded-xl" onPress={() => {navigation.navigate("Onboarding3")}}>
            <Text className=" text-white bg-[#371960] py-4 font-semibold text-lg text-center">Get Started</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? 20 : null,
    },
    status: {
        width: "auto"
    }
})