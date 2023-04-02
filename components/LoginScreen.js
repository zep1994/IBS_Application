import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component {
    constructor() {
        super() 
        this.state = {
            email: "",
            password: "",
        }
    }
    render() {
        return (
            <View>
                <TextInput  
                placeholder="Email..." 
                onChangeText={text => this.setState({email:text})}
            />

            <TextInput  
                placeholder="Password..." 
                secureTextEntry
                onChangeText={text => this.setState({email:password})}
            />

            <TouchableOpacity>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            </View>
        )
    }
}