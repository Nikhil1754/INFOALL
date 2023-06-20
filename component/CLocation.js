import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const CLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === 'granted') {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={{ width: '100%', height: 40, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Location</Text>
                </View>
                <View style={{ marginRight: 50 }}>
                    <Text style={{ color: 'green', fontSize: 17 }}> {location ? `${location.coords.latitude} ${location.coords.longitude}` : 'Loading...'}</Text>
                </View>
            </View>
        </View>
  );
};

export default CLocation;
