import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextCustom from '../../components/TextCustom';
import Input from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';

const ScreenFinding = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={styles.header}>
        <TextCustom textStyle={styles.txt} content="Select your bus!" />
        <TextCustom textStyle={styles.txt3} content="From" />
        <TouchableOpacity
            style={[styles.changeLocation, ]}>
            <Image
              style={[{alignSelf: 'center'}]}
              source={require('../../assets/media/img/arrowswapvertical.png')}
            />
          </TouchableOpacity>
        <TextCustom textStyle={styles.txt4} content="To" />
        <TextCustom textStyle={styles.txt2} content="12th - Jan - 2023 | Monday" />
        <Image
          style={[{alignSelf: 'center'}]}
          source={require('../../assets/media/img/bus-1.png')}
        />
         
        </View> 
        <View>
          <Text style={[{fontSize:18, margin:20, color:"#000000", fontWeight:'500'}]}>Upcoming Journey</Text>
        </View>

    </View>
  )
}

export default ScreenFinding

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#FF6260',
        width: 390,
        height: 300,
    },
    txt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 50,
      },
    txt2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
    },
    txt3: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    txt4: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    changeLocation: {
        marginHorizontal: 170,
        height: 50,
        backgroundColor: '#F5A522',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
})