import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ItemMonProps } from '../screen/ticket/ScreenWallet';

interface Props{
data: ItemMonProps;
}

const ItemMoney = (props:Props) => {
    const {data} = props;
  return (
    <View style={[{margin:8, backgroundColor:"#FFF", padding:8, elevation:3}]}>
    <Text style={[{fontSize: 25, fontWeight: '500', color: '#A0A0A0'}]}> 
    </Text>
    <View style={[{flexDirection: 'row',width:350, height:100 }]}>
      <View style={[{flexDirection: 'column', flexGrow: 2}]}>
        <View style={[{flexDirection: 'row', alignItems:'center'}]}>
          <View>
            <Text
              style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
              {/* ko bt chỗ đón */}
              {data.title}
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
              {data.time}
            </Text>
          </View>
        </View>
      </View>
      <View style={[{flexDirection: 'column', flexGrow: 1, alignItems:'center'}]}>
        <Text style={[{fontSize: 15, fontWeight: '500', color: '#000000'}]}>
          {data.price}
        </Text>
      </View>
    </View>
  </View>
  )
}

export default ItemMoney

const styles = StyleSheet.create({})