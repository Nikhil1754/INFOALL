import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DataRefresh = () => {
  return (
    <View style={{justifyContent:'center',alignSelf:'center',marginTop:20,width:'70%',height:50}}>
     <TouchableOpacity style={{width:'100%',backgroundColor:'blue',borderRadius:10,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white',fontSize:20}}>Make Data Refresh</Text></TouchableOpacity>
    </View>
  )
}

export default DataRefresh