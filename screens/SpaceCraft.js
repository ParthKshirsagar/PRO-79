import React from "react";
import { View, Text } from 'react-native';

export default class SpaceCraft extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>SpaceCraft!</Text>
            </View>
        )
    }
}
