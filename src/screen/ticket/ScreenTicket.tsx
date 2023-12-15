import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ItemTicket from '../../components/ItemTicket';

export interface ItemProps {
  id: string;
  BoardingPoint: string;
  DropPoint: string;
  timeBoarding: string;
  timeDrop: string;
  nameCar: string;
  seats: number;
}
const DATA: ItemProps[] = [
  {
    id: '1',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
  {
    id: '2',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
  {
    id: '3',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
  {
    id: '4',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
  {
    id: '5',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
  {
    id: '6',
    BoardingPoint: 'lko bt 1',
    DropPoint: 'xuong 1',
    timeBoarding: 'len1',
    timeDrop: 'xuonsg1',
    nameCar: 'xe 1',
    seats: 1,
  },
];
// const Item = () => {
//   return (
//     <View>
//       <Text style={[{fontSize:25, fontWeight:'500', color:"#A0A0A0"}]}>PNR/Ticket No: </Text>
//       <View style={[{flexDirection: 'row', }]}>
//         <View style={[{flexDirection: 'column', flexGrow: 2}]}>
//           <View style={[{flexDirection: 'row'}]}>
//             <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/diemdon.png')} />
//             <View>
//               <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>Boarding Point:</Text>
//               <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>ko bt chỗ đón</Text>
//             </View>
//           </View>
//           <View style={[{flexDirection: 'row'}]}>
//             <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/diemxuong.png')} />
//             <View>
//               <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>Drop Point:</Text>
//               <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}> ko bt chỗ xuống</Text>
//             </View>
//           </View>
//         </View>
//         <View style={[{flexDirection: 'column', flexGrow: 1}]}>
//           <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>giờ đi</Text>
//           <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>8:05PM, sun 13 jan</Text>
//           <Text>TO</Text>
//           <Text style={[{fontSize:20, fontWeight:'500', color:"#A0A0A0"}]}>giờ đến</Text>
//           <Text style={[{fontSize:15, fontWeight:'500', color:"#000000"}]}>16:05PM, mon 14 jan</Text>
//         </View>
//       </View>
//       <View style={[{flexDirection: 'row'}]}>
//         <View style={[{flexDirection: 'row', flexGrow:2}]}>
//           <Image style={[{height:40, width:40}]} resizeMode="contain" source={require('../../assets/media/img/bus.png')} />
//           <View>
//             <Text style={[{fontSize:25, fontWeight:'500', color:"#000000"}]}>Sangitam Travels:</Text>
//             <Text>2X1 (30) A/C SLEEPER</Text>
//           </View>
//         </View>
//         <View style={[{flexDirection: 'column', flexGrow: 1}]}>
//           <Text style={[{fontSize:20, fontWeight:'500', color:"#000000"}]}>2 Seats</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const ScreenTicket = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ItemTicket data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ScreenTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD9DB',
  },
});
