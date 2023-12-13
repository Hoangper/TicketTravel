import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
];

const Item = () => {
  return (
    <View>
      <Text style={[{fontSize:25, fontWeight:'500', color:"#A0A0A0"}]}>PNR/Ticket No: </Text>
      <View style={[{flexDirection: 'row', }]}>
        <View style={[{flexDirection: 'column', flexGrow: 2}]}>
          <View style={[{flexDirection: 'row'}]}>
            <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/diemdon.png')} />
            <View>
              <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>Boarding Point:</Text>
              <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>ko bt chỗ đón</Text>
            </View>
          </View>
          <View style={[{flexDirection: 'row'}]}>
            <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/diemxuong.png')} />
            <View>
              <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>Drop Point:</Text>
              <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}> ko bt chỗ xuống</Text>
            </View>
          </View>
        </View>
        <View style={[{flexDirection: 'column', flexGrow: 1}]}>
          <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>giờ đi</Text>
          <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>8:05PM, sun 13 jan</Text>
          <Text>TO</Text>
          <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>giờ đến</Text>
          <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>16:05PM, mon 14 jan</Text>
        </View>
      </View>
      <View style={[{flexDirection: 'row'}]}>
        <View style={[{flexDirection: 'row', flexGrow:2}]}>
          <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/bus.png')} />
          <View>
            <Text style={[{fontSize:25, fontWeight:'500', color:"#000000"}]}>Sangitam Travels:</Text>
            <Text>2X1 (30) A/C SLEEPER</Text>
          </View>
        </View>
        <View style={[{flexDirection: 'column', flexGrow: 1}]}>
          <Text style={[{fontSize:20, fontWeight:'500', color:"#000000"}]}>2 Seats</Text>
        </View>
      </View>
    </View>
  );
};

const ScreenTicket = () => {
  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={() => <Item />} />
    </SafeAreaView>
  );
};

export default ScreenTicket;

const styles = StyleSheet.create({});
