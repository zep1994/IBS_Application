import React, {Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const InfoScreen = ({ count }) => {
    return (
        <View style={styles.CounterBox}>
            <Text style={{ fontSize: 100 }}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    CounterBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 200
    }
})

export default InfoScreen