import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from 'react-native';

class Register extends Component {
    constructor() {
        super() 
            this.state = {
                name: "",
                email: "",
                password: "",
            }
    }

    handleSignUp = () => {
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        return fetch('http://localhost:8000/user-signup',data)
            .then((response) => response.json())
            .then((res) => {
                if (res.success === true){
                    console.log(res.message)
                }else{
                    console.log(this.state.name)
                    console.log(this.state.email)
                    console.log(this.state.password)
                    console.log(res.message)
                }
                console.log('test')
            })
            .catch(err => console.log(err))
    }

    handleRedirect = (navigate) => {
        this.props.navigation.navigate('Profile')
    }

    handleCombined = () => {
        this.handleSignUp()
        this.handleRedirect()
    }

    render() {
        return (
            <View>
                <TextInput
                        placeholder='Name'
                        placeholderTextColor= 'grey'
                        name="name"
                        onChangeText={(text) => this.setState({name:text})}
                        onSubmitEditing={()=> this.password.focus()}
                    />

                <TextInput
                        placeholder='Email'
                        placeholderTextColor= 'grey'
                        name="email"
                        onChangeText={(text) => this.setState({email:text})}
                        onSubmitEditing={()=> this.password.focus()}
                    />

                <TextInput 
                        placeholder='Password'
                        placeholderTextColor= 'grey'
                        name="password"
                        secureTextEntry= {true}
                        ref={(input) => this.password = input}
                        onChangeText={(text) => this.setState({password:text})}
                    />
                    
                    <TouchableOpacity onPress={this.handleCombined}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <View>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Register