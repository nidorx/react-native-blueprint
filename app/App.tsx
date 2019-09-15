import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Blueprint from "../src/lib/Blueprint";


export default class App extends React.PureComponent {
    render() {
        return (
            <Blueprint
                // image={require('./assets/github.png')}
                images={[
                    require('./assets/wireframe-1.png'),
                    require('./assets/wireframe-2.png'),
                    require('./assets/wireframe-1.png'),
                    require('./assets/wireframe-2.png')
                ]}
            >
                <StatusBar backgroundColor={'transparent'} translucent={true} barStyle="dark-content"/>
                <View style={[StyleSheet.absoluteFill, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Text>
                        {'React Native Blueprint'}
                    </Text>
                </View>
            </Blueprint>
        );
    }
}
