import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

class ProfileScreen extends Component {
    
        render () {
            // const { counter } = this.state;
            // const { navigate } = this.props.navigation;
            return (
                <View>
                <Button
                    title="Register"
                    onPress={() => this.props.navigation.navigate('Register')}
                />
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
                    {/* <Button onClick={() => this.setState({ counter: this.state.counter })} title="fetch" /> */}
                    {/* <Text>Count: {this.state.counter}</Text> */}
                </View>
            );
        }
    }

export default ProfileScreen    