import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import RadioCustom from '../../components/RadioCustom';

interface Seat {
  id: number;
  seatNumber: string;
  booked: boolean;
}
const ScreenTest = () => {
  const [seats, setSeats] = useState<Seat[]>([
    {id: 1, seatNumber: 'A1', booked: false},
    {id: 2, seatNumber: 'A2', booked: false},
    {id: 3, seatNumber: 'A3', booked: true},
    {id: 4, seatNumber: 'A1', booked: false},
    {id: 5, seatNumber: 'A2', booked: false},
    {id: 6, seatNumber: 'A3', booked: true},
    {id: 7, seatNumber: 'A1', booked: false},
    {id: 8, seatNumber: 'A2', booked: false},
    {id: 9, seatNumber: 'A3', booked: true},
    {id: 10, seatNumber: 'A1', booked: false},
    {id: 11, seatNumber: 'A2', booked: false},
    {id: 12, seatNumber: 'A3', booked: true},
    {id: 13, seatNumber: 'A1', booked: false},
    {id: 14, seatNumber: 'A2', booked: false},
    {id: 15, seatNumber: 'A3', booked: true},
    {id: 16, seatNumber: 'A1', booked: false},
    {id: 17, seatNumber: 'A2', booked: false},
    {id: 18, seatNumber: 'A3', booked: true},
    {id: 19, seatNumber: 'A1', booked: false},
    {id: 20, seatNumber: 'A2', booked: false},
    {id: 21, seatNumber: 'A3', booked: true},
  ]);

  const handleSeatPress = (id: number) => {
    const updatedSeats = seats.map(seat =>
      seat.id === id ? {...seat, booked: !seat.booked} : seat,
    );
    setSeats(updatedSeats);
  };

  const renderSeat = ({item}: {item: Seat}) => (
    <TouchableOpacity
      style={[styles.seat, {backgroundColor: item.booked ? 'red' : 'green'}]}
      onPress={() => handleSeatPress(item.id)}>
      <Text style={styles.seatText}>{item.seatNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={seats}
        renderItem={renderSeat}
        keyExtractor={item => item.id.toString()}
        numColumns={4} // Số cột hiển thị
        columnWrapperStyle={styles.row} // Style cho từng hàng
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  seat: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  seatText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScreenTest;
