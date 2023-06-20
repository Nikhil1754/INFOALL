import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DateTime = () => {
    const d = new Date();
    return (
        <View style={{ position: 'absolute', top: 70,left:100, width: '100%', height: 30, }}>
          <Text style={{fontSize:15,color:'white'}}>{`${d.getDate()}-${d.getMonth()}-${d.getFullYear()}   ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} `}</Text>

        </View>
    )
}

export default DateTime

const styles = StyleSheet.create({})