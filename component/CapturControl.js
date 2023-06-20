import { View, Text } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

const CapturControl = () => {
  return (
    <View style={{ width: '100%', height: 40, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Capture Count</Text>
                </View>
                <View style={{ marginRight: 50 }}>
                    <Text style={{ color: 'green', fontSize: 17 }}>10</Text>
                </View>
            </View>
        </View>
  )
}

export default CapturControl