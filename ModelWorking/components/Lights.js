import React from 'react';
import {
    AmbientLight,
    PointLight,
    View,
} from 'react-360';
import Entity from 'Entity';
export default class Lights extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={0.8}
                    style={{
                    color:'gray',
                    transform: [
                        {translate: [0,0,0]},
                    ]
                    }}
                />
                <PointLight intensity={1} 
                    style={{
                    color:'#f5f5dc',
                    transform:[
                        {translate: [15,-5,0]},
                    ]
                    }}
                    distance = {100}
                />
            </View>
        );
    }
};