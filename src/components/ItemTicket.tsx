import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ItemProps } from '../screen/ticket/ScreenTicket';

interface Props{
data: ItemProps;
}


const ItemTicket = (props:Props) => {
    const {data} = props;
  return (
    <View style={[{margin:8, backgroundColor:"#FFF", padding:8, elevation:3}]}>
      <Text style={[{fontSize: 25, fontWeight: '500', color: '#A0A0A0'}]}>
        PNR/Ticket No: {data.id}
      </Text>
      <View style={[{flexDirection: 'row',width:350, height:100 }]}>
        <View style={[{flexDirection: 'column', flexGrow: 2}]}>
          <View style={[{flexDirection: 'row', alignItems:'center'}]}>
            <Image
              style={[{height: 24, width: 24}]}
              resizeMode="contain"
              source={require('../assets/media/img/login.png')}
            />
            <View>
              <Text
                style={[{fontSize: 20, fontWeight: '500', color: '#A0A0A0'}]}>
                Boarding Point:
              </Text>
              <Text
                style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
                {/* ko bt chỗ đón */}
                {data.BoardingPoint}
              </Text>
            </View>
          </View>
          <View style={[{flexDirection: 'row',alignItems:'center'}]}>
            <Image
              style={[{height: 24, width: 24}]}
              resizeMode="contain"
              source={require('../assets/media/img/logout.png')}
            />
            <View>
              <Text
                style={[{fontSize: 20, fontWeight: '500', color: '#A0A0A0'}]}>
                Drop Point:
              </Text>
              <Text
                style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
                {/* ko bt chỗ xuống */}
                {data.DropPoint}
              </Text>
            </View>
          </View>
        </View>
        <View style={[{flexDirection: 'column', flexGrow: 1, alignItems:'center'}]}>
          <Text style={[{fontSize: 20, fontWeight: '500', color: '#A0A0A0'}]}>
            giờ đi
          </Text>
          <Text style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
            {/* 8:05PM, sun 13 jan */}
            {data.timeBoarding}
          </Text>
          <Text style={[{color:"#5A5222"}]}>TO</Text>
          <Text style={[{fontSize: 20, fontWeight: '500', color: '#A0A0A0'}]}>
            giờ đến
          </Text>
          <Text style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
            {/* 16:05PM, mon 14 jan */}
            {data.timeDrop}

          </Text>
        </View>
      </View>
      <View style={[{flexDirection: 'row'}]}>
        <View style={[{flexDirection: 'row', flexGrow: 2,alignItems:'center'}]}>
        <Image
            style={[{height:24 , width: 24}]}
            resizeMode="contain"
            source={require('../assets/media/img/bus.jpg')}
          />
          <View style={[{flexDirection: 'row'}]}>
            <View style={[{flexDirection: 'column'}]}>
            <Text style={[{fontSize: 25, fontWeight: '500', color: '#000000'}]}>
              {/* Sangitam Travels: */}
              {data.nameCar}
            </Text>
            <Text>2X1 (30) A/C SLEEPER</Text>
            </View>
          </View>
        </View>
        <View style={[{flexDirection: 'column', flexGrow: 0,alignContent:'center',marginTop:16}]}>
          <Text style={[{fontSize: 20, fontWeight: '500', color: '#000000'}]}>
            {/* 2 Seats */}
            {data.seats} Seats
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemTicket;

const styles = StyleSheet.create({

});
