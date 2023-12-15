import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ScreenProfile = () => {
  return (
    <ScrollView>
    <View style={[{backgroundColor:"#FF6260"}, styles.container]}>
      <Text style={[{fontSize:40, textAlign:'center', color:"#fff"}]}>ProFile</Text>
      <View style={[{backgroundColor:"#FFF", padding:10, borderTopLeftRadius:16, borderTopRightRadius:16}]}>
        <View  style={[{padding:8, borderBottomWidth:0.5}]}>
            <Image source={require('../../assets/media/img/icon_person.png')} style={[{}, styles.img]}/>
        </View>
   
        <View style={[{}, styles.itemProfile]}>
          <Text style={[{}, styles.txt]} >phoneNumber</Text>
          <Text >1234567890</Text>
        </View>     
        <View style={[{}, styles.itemProfile]}>
          <Text >FullName</Text>
          <Text >1234567890</Text>
        </View>     
        <View style={[{}, styles.itemProfile]}>
          <Text >Email</Text>
          <Text style={[{textDecorationLine: 'underline', textDecorationStyle: 'double'}]}>1234567890</Text>
        </View>     
        <View style={[{}, styles.itemProfile]}>
          <Text >Age</Text>
          <Text >1234567890</Text>
        </View>     
        <View style={[{}, styles.itemProfile]}>
          <Text >Sex</Text>
          <Text >1234567890</Text>
        </View>  
        
        <View style={[{flexDirection:'row', justifyContent:'space-between', margin:10}]}>
          <Text style={[{fontWeight:'300', color:"#000000"}]}>Mật khẩu thanh toán dùng để xác thực mỗi khi thực hiện chuyển và rút tiền </Text>
        </View>
        <View>
        <TouchableOpacity style={[{backgroundColor:"red"}, styles.btn]}>
                <Text style={[{color:"#fff"},styles.txtBtn]}>Update ProFile</Text>
            </TouchableOpacity>            
        <TouchableOpacity style={[{borderWidth:1}, styles.btn]}>
                <Text style={[{},styles.txtBtn]}>LogOut</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default ScreenProfile;

const styles = StyleSheet.create({
    container:{
        // flex:1,

    },
    itemProfile:{
        flexDirection:'row', justifyContent:'space-between', margin:10, paddingVertical:15, borderBottomWidth:0.5
    },
    img:{
        height: 100, width: 100, alignSelf: 'center', borderBottomWidth:0.5
    },
    btn:{
        // backgroundColor:"red",
        height:50,
        borderRadius:22,
        justifyContent:"center",
        alignItems:'center',
        marginVertical:10
        
    },
    txtBtn:{
        textAlign:'center',
        fontSize:20
    },
    txt:{
        fontWeight:'500'
    }
});
