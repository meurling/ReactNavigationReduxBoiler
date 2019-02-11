import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavigationService from './src/NavigationService';
import {AppNavigator} from './src/AppNavigator';

import AppReducer from './src/AppReducer';
/**
* App
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View >
                <Text>App</Text>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        
    };
}


function mapDispatchToProps(dispatch) {
    return {
        
    };
}

const store = createStore(AppReducer);
const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);
const NavigationContainer = createAppContainer(AppNavigator);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithRedux >
                    <NavigationContainer
                        ref={(navigatorRef) => {
                            NavigationService.setTopLevelNavigator(navigatorRef);
                        }}
                    />
                </AppWithRedux>
            </Provider>
        );
    }
}

