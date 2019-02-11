import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
/**
* MapScreen
*/
class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>MAPSCREEN</Text>
            </View>
        );
    }
}

/*
// any js module
import NavigationService from 'path-to-NavigationService.js';

// ...

NavigationService.navigate('ChatScreen', { userName: 'Lucy' });
const styles = StyleSheet.create({
    container: {

    }
});
*/

function mapStateToProps(state) {
    return {
        
    };
}


function mapDispatchToProps(dispatch) {
    return {
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

