import {Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ScreenDetailTicket = () => {
  return (
    <View style={[{}, styles.container]}>
      <StatusBar barStyle={'dark-content'}
      
      backgroundColor={'transparent'}
      />
      <View style={[{flexDirection:'row', justifyContent:'space-between'}]}>
        <Image style={[{height:24, width:24, alignSelf:'center'}]} source={require("../../assets/media/img/icon_back.png")}/>
      <Text
        style={[
          {
            fontSize: 40,
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#FF6260',
          },
        ]}>
        Detail Ticket
      </Text>
      <Image style={[{height:35, width:35, alignSelf:'center'}]} source={require("../../assets/media/img/options.png")}/>

      </View>
      
      <View
        style={[
          {
            backgroundColor: '#fff',
            flex: 1,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
        ]}>
        <View
          style={[
            {
              backgroundColor: '#FFF',
              padding: 10,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              borderWidth: 0,
              marginBottom: 10,
            },
          ]}>
          <View style={[{}]}>
            <Text style={[{fontSize:20, color:"#000000"}]}>Customer Information</Text>
          </View>

          <View style={[{}, styles.itemProfile]}>
            <Text>FullName</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>
          <View style={[{}, styles.itemProfile]}>
            <Text style={[{}]}>phoneNumber</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>
          <View style={[{}, styles.itemProfile]}>
            <Text>Mail</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>
        </View>

        <View style={[{height:20, backgroundColor:"#f5f5f5"}]}></View>


        <View style={[{borderWidth: 0}]}>
          <Text style={[{ color: '#000000', margin:10, fontSize:20},]}>
            Departure information
          </Text>
          <Image style={[{height:200, width:200, alignSelf:'center'}]} source={require("../../assets/media/img/qrcode.png")}/>
          
          
          
          <View style={[{}, styles.txtBuss]}>
            <Text>State</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Buses</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Time</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Number of seat</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Seats</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Pay</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>          
          <View style={[{}, styles.txtBuss]}>
            <Text>Boarding point</Text>
            <Text style={[{fontWeight: '500', color: '#000000'}]}>
              1234567890
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScreenDetailTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6260'
  },
  itemProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    // paddingVertical: 15,
    // borderBottomWidth: 0.5,
  },
  img: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
  },
  btn: {
    // backgroundColor:"red",
    height: 50,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: 20,
  },
  txt: {
    fontWeight: '500',
  },
  txtBuss:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:8
  }
});
