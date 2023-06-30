import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import PushNotification from "react-native-push-notification";


const Screen = () => {
    useEffect(() => {
        createChannels();
    }, [])
    const createChannels = () => {
        PushNotification.createChannel({
            channelId: 'test-channel',
            channelName: 'Test Channel'
        })
    }
    return (
        <View>
            <Text>Screen</Text>
        </View>
    )
}

export default Screen