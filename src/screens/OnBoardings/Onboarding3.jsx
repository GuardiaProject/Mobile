import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import OnBackGround from '../../components/OnBoardings/OnBackGround' 


const Onboarding3 = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col gap-8 px-6 ">
        <StatusBar style={styles.status}/>
        {/* Image component */}
        <OnBackGround/>
        {/* Content  */}
        <View>
          <Text style={styles.safeContainer} className=" text-white font-semibold text-xl">Get Easy <Text className=" font-semibold text-xl text-[#4D2F76]">Information and news</Text></Text>
          <View className=" flex flex-row items-center gap-2">
            <Text className=" text-white font-semibold text-xl">About gender family equality by</Text>
            <Text className=" font-semibold text-xl text-[#4D2F76]">Guardia</Text>
          </View>
        </View>

        <View>
          <Text className=" text-white text-normal text-sm">Ready to know different news and information of how
            your family members can all be equal through using us</Text>
        </View>

        <View>
          <TouchableOpacity className=" rounded-xl" onPress={() => {navigation.navigate("CreateAccount")}}>
            <Text className=" text-white bg-[#371960] py-4 font-semibold text-lg text-center">Get Started</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding3

const styles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? 20 : null,
    },
    status: {
        width: "auto"
    }
})