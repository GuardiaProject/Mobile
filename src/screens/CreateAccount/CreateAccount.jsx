import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView className=" bg-[#101010] flex flex-1 flex-col gap-8 px-6 ">
        <StatusBar style={styles.status}/>
        {/* <OnBackGround/> */}

        {/* Content  */}
        <View>
            <Text className=" text-[#4D2F76] font-semibold text-2xl">Guardia</Text>
            <Text className=" text-white">Create New Account</Text>
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