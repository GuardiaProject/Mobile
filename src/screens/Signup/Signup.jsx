import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'


const Signup = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col gap-y-16 px-6 ">
        <StatusBar style={styles.status}/>
        {/* <OnBackGround/> */}

        {/* Content  */}
        <View>
            
        </View>

        <View>
            <Text className=" text-white text-2xl">Create Your Account</Text>
        </View>

        <View className=" flex flex-col gap-y-5">
            <TextInput placeholder=' Email or Phone Number' placeholderTextColor={'white'} className=" text-white placeholder:text-lg bg-[#1b1b25] py-4 rounded-xl pl-6"/>
            <TextInput placeholder=' Username' placeholderTextColor={'white'} className=" text-white placeholder:text-lg placeholder:text-white bg-[#1b1b25] py-4 rounded-xl pl-6"/>
            <TextInput placeholder=' Password' placeholderTextColor={'white'} className=" text-white placeholder:text-lg bg-[#1b1b25] py-4 rounded-xl pl-6"/>

        </View>

        <View>
            <TouchableOpacity className=" bg-[#371960] py-4 rounded-xl">
                <Text className=" text-white text-center text-base">Register</Text>
            </TouchableOpacity>
        </View>

        <View className=" flex flex-row items-center justify-center gap-x-3">
            <View className=" h-1 w-32 bg-[#4D2F76]"></View>
            <Text className=" text-white text-base">Or</Text>
            <View className=" h-1 w-32 bg-[#4D2F76]"></View>
        </View>

        <View className=" flex flex-row items-center justify-center">
            <Text className=" text-white text-base">Already have an account <Text className=" text-[#371960] text-lg" onPress={() => {navigation.navigate("Login")}}>  Login</Text></Text>
        </View>
        
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? 20 : null,
    },
    status: {
        width: "auto"
    }
})