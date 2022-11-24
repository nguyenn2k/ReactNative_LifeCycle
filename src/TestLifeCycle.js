import { Text, View } from 'react-native'
import React, { Component } from 'react'

import LifeCycle from './LifeCycle'

//Đối vs Class Component nên sử dụng màn hình chính:

export default class TestLifeCycle extends Component {
  constructor(props){
    super(props)
    //Khai báo biến & state, Giá trị mặc định, Khởi tạo Class:
    console.log("Parent Constructor")
  }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>TestLifeCycle</Text>
        <LifeCycle name ="CyberSoft"/>
      </View>
    )
  }
}