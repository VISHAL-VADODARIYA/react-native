import PushNotification from "react-native-push-notification";
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const screen2 = () => {
    const data =[
        India, America, China, Canada,
    ]

    const handleNotification = (item) => {
        PushNotification.localNotification({
            channelId: 'test-channel',
            title: 'you click on' + item,
            message:item + 'country'
        })
    }
    return (
        <View>
            {
                data.map((e) => {
                    <TouchableOpacity onPress={() => { handleNotification(e) }} >
                        <View >
                            <Text >
                                {e}
                            </Text>
                        </View>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

export default screen2