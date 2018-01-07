
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import flatListData from './flatListData';


class FlatListItem extends Component{
    render(){
        return(
            <View style={{flex:1,
                        backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato' }}>
                <Text>this.props.item.name</Text>
                <Text>this.props.item.FoodDescription</Text>
            </View>
        ) 

    }

}

export default class BasicFlatList extends Component{

    render(){
        return(
            <View style={{flex:1, marginTop:22}}>
                
               <FlatList
                    data={flatListData}
                  
                    renderItem = {({item, index}) => {
                        //console.log('Item' + JSON.stringify( item ) + 'Index ' + index)
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>)
                    }}
               >
               </FlatList>

            </View>

        )
    }
}

//export default BasicFlatList;