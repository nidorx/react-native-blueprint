import React from 'react';
import {StatusBar, Text} from 'react-native';
import Blueprint from "../src/lib/Blueprint";


export default class App extends React.PureComponent {
    render() {
        return (
            <Blueprint
                // image={require('./assets/github.png')}
                // image={{
                //     uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                // }}
            >
                <StatusBar backgroundColor={'#FFF'} barStyle="dark-content"/>
                <Text>
                    {'React Native Blueprint'}
                </Text>
            </Blueprint>
        );
    }
}
