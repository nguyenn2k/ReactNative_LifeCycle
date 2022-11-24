import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Test from './TestLifeCycle'

export class LifeCycle extends Component {
    state = {
        count: 0
    }
    // constructor(props){
    //     super(props)
    //     //Khai báo biến & state, Giá trị mặc định, Khởi tạo Class:
    //     console.log("Constructor")
    // }
    
    //Ham nay chi hoat dong khi no la component con cua componengt kha:
    // static getDerivedStateFromProps(prevProps, state){
    //     //PreProps: Sử dụng toàn bộ thuộc tính của Component cha truyền qua;
    //     //Xử dụng khi mong muốn xử lý Logic Code của Props mà Component Cha truyền qua
    //     //và gán giá trị lại cho State hoặc Logic code;
    //     console.log("DerivedState From Props")
    //     console.log(prevProps.name)
    //     console.log(state)
    //     if(prevProps.name == "Cybersoft"){
    //         return {count: 1}
    //     }

    //     return null
    //     // console.log(state)
    //     // //Return luôn là state;
    //     // return {
    //     //     count:1
    //     // }
    // }
    shouldComponentUpdate(){
        console.log("Should Update Component")
        return true
    }
    render() {
        return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> this.setState({count: this.state.count +1})}>
                <Text>LifeCycle</Text>
            </TouchableOpacity>
            <Text>{this.state.count}</Text>
        </View>
        )
    }
    //Lấy dữ liệu API:
    componentDidMount(){
        //Chạy sau khi giao diện đã được hiển thị:
        console.log("Component Did Mount")
        //Sử dụng khi Call API hiển thị lên giao diện:
    }
    componentDidUpdate(nextProps, nextState){
        console.log("Component Did update")
        console.log(nextProps)
        console.log(nextState)
        //Không update giao diện:
        return false
        //Update giao diện:
        //return true
    }
    //End Mounting
}

export default LifeCycle