import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const Connectivity = () => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <View style={{ width: '100%', height: 40, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Connectivity</Text>
                </View>
                <View style={{ marginRight: 50 }}>
                    <Text style={{ color: 'green', fontSize: 17 }}>{isConnected ? 'ON' : 'OFF'}</Text>
                </View>
            </View>
        </View>
    )
}

export default Connectivity

const styles = StyleSheet.create({})