import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BatteryStatus from './component/BatteryStatus';
import DateTime from './component/DateTime';
import Frequency from './component/Frequency';
import Connectivity from './component/Connectivity';
import CLocation from './component/CLocation';
import DataRefresh from './component/DataRefresh';
import Capture from './component/Capture';
import CapturControl from './component/CapturControl';



export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
      <DateTime />
      <Capture/>
      <View style={{ position: 'absolute', top: '50%', width: '100%' }}>
        <CapturControl/>
        <Frequency />
        <Connectivity />
        <BatteryStatus />
        <CLocation />
        <DataRefresh />
      </View>

    </View>

  );
}

