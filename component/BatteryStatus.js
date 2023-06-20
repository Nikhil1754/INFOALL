import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Battery from 'expo-battery';

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    const getBatteryStatus = async () => {
      const batteryInfo = await Battery.getBatteryLevelAsync();
      setBatteryLevel(batteryInfo * 100);

      const chargingInfo = await Battery.getChargingAsync();
      setIsCharging(chargingInfo);
    };

    getBatteryStatus();
  }, []);

  return (
    
    <View>
          <View style={{ width: '100%', height: 40, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Battery Charging</Text>
                </View>
                <View style={{ marginRight: 50 }}>
                    <Text style={{ color: 'green', fontSize: 17 }}>{isCharging == true ? 'OFF' : 'ON'}</Text>
                </View>
            </View>
        </View>
        <View style={{ width: '100%', height: 40, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Battery Charge</Text>
                </View>
                <View style={{ marginRight: 50 }}>
                    <Text style={{ color: 'green', fontSize: 17 }}>{`${Math.floor(batteryLevel)}`}</Text>
                </View>
            </View>
        </View>
    </View>

  );
};

export default BatteryStatus;
