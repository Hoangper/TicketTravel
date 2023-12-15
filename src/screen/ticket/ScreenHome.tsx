import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import TextCustom from '../../components/TextCustom';
import Input from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';
import { RootMainParamList } from '../navigation/RootNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
type Props = NativeStackScreenProps<RootMainParamList>;
const ScreenHome = (props: Props) => {
  const { navigation } = props;
  return (
   
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.header}>
        <TextCustom textStyle={styles.txt} content="Where youu want go?" />
        <Image
          style={[{ alignSelf: 'center' }]}
          source={require('../../assets/media/img/logo-Home.png')}
        />
        <View style={[{}, styles.searchWhere]}>
          <Input placeHolder="Boarding From" style={[styles.txtInput]} />
          {/* <Input placeHolder='Boarding From' style={styles.txtInput} /> */}

          <Input placeHolder="Where are you going?" style={[styles.txtInput]} />
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>

            <ButtonCustom buttonstyle={[{}, styles.options]} content="Today" textstyle={[styles.txtOptions]} />
            <ButtonCustom buttonstyle={[{}, styles.options]} content="Tomorrow" textstyle={[styles.txtOptions]} />
            <ButtonCustom buttonstyle={[{}, styles.options]} content="Other" textstyle={[styles.txtOptions]} />

          </View>
          <ButtonCustom content="Find Buses" textstyle={{ color: '#fff' }} buttonstyle={[styles.searchBuses]} onPress={() => navigation.navigate('ScreenFinding')}
          />
        </View>
        <View>
          <Text style={[{ fontSize: 18, margin: 20, color: "#000000", fontWeight: '500' }]}>Upcoming Journey</Text>
          <FlatList
              data={DATA}
              renderItem={({ item }) => <ItemTicket data={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
        </View>
      </View>
      
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FF6260',
    width: 390,
    height: 300,
  },
  txt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 97,
  },
  searchWhere: {
    borderRadius: 15,
    width: 300,
    height: 280,
    backgroundColor: '#F5A522',
    alignSelf: 'center',
  },
  txtInput: {
    backgroundColor: '#fff',
    width: 250,
    alignSelf: 'center',
    marginVertical: 10,
  },
  changeLocation: {
    width: 50,
    height: 50,
    backgroundColor: '#F5A522',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', top: 45, right: 30, zIndex: 2
  },
  searchBuses: {
    alignSelf: 'center',
    marginHorizontal: 20,
    height: 50,
    width: 250,
    backgroundColor: '#FF6260',
    marginVertical: 30

  },
  options: {
    width: 80,
    height: 30,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtOptions: {
    textAlign: 'center',
    color: '#fff',
  },
  btnSearch: {
  },
});
