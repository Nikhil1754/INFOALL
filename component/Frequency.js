import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Frequency = () => {

  return (
    <View style={{width:'100%',height:40,}}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{marginLeft:20}}>
      <Text style={{color:'white',fontSize:17}}>Frequency</Text>
      </View>
      <View style={{marginRight:50}}>
      <Text style={{color:'green',fontSize:17}}>10</Text>
      </View>
     </View>
    </View>
  )
}

export default Frequency

const styles = StyleSheet.create({})