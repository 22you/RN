import React, { Component } from 'react'; 
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input,Select} from 'teaset'

 const DefaultSelect = (props) => {
    return (
      <View style={[{borderBottomWidth: props.border?0:1},props.style]}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{color: '#FF1737'}}>{props.require ? '*' : '  '}</Text>
        <Text>{props.name}</Text>
        </View>
        <Select
          style={{paddingLeft: 0, borderWidth: 0}}
          value={props.value}
          items={props.items}
          icon={<Icon name="angle-right"/>}
          placeholder={props.placeholder}
          pickerTitle={`请选择 ${props.name}`}
          onSelected={props.onSelected ? props.onSelected : () => console.log('没回调')}
        />
      </View>
    )
  }

const DefaultInput = (props) => {
    return (
      <View style={[{borderBottomWidth: props.border?0:1,alignItems:'center'},props.style]}>
        <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{color: '#FF1737'}}>{props.require ? '*' : '  '}</Text><Text>{props.name}</Text></View>
        <Input
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            textAlign: 'right',
            flex: 1,
            paddingLeft: 0
          }}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    )
  }
  export {DefaultInput,DefaultSelect}