import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col items-center justify-center gap-y-8 px-6 ">
        <StatusBar style={styles.status}/>
        {/* <OnBackGround/> */}

        {/* Content  */}
        <View className=" flex flex-col items-center gap-y-6">
            <Text className=" text-[#4D2F76] font-semibold text-2xl">Guardia</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Signup")}}>
                <Text className=" text-white">Create New Account</Text>
            </TouchableOpacity>
        </View>

        <View className=" flex flex-col gap-y-5">
            <TouchableOpacity className=" border-[#4D2F76] border-2 flex flex-col justify-center py-3 rounded-2xl">
                <Text className=" text-[#4D2F76] text-lg text-center">Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" border-[#4D2F76] border-2 flex flex-col justify-center py-3 rounded-2xl">
                <Text className=" text-[#4D2F76] text-lg text-center">Continue with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" border-[#4D2F76] border-2 flex flex-col justify-center py-3 rounded-2xl px-6">
                <Text className=" text-[#4D2F76] text-lg text-center">Continue with Phone number</Text>
            </TouchableOpacity>
        </View>

        <View className=" flex flex-row items-center gap-x-3">
            <View className=" h-1 w-32 bg-[#4D2F76]"></View>
            <Text className=" text-white text-base">Or</Text>
            <View className=" h-1 w-32 bg-[#4D2F76]"></View>
        </View>

        <View className=" w-full flex flex-col justify-center px-12">
            <TouchableOpacity className=' bg-[#4D2F76] flex flex-col justify-center py-3 rounded-2xl px-6' onPress={() => {navigation.navigate("Login")}}>
                <Text className=" text-white text-lg font-medium text-center">Login</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === 'android' ? 20 : null,
    },
    status: {
        width: "auto"
    }
})