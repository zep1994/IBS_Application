import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Counter from './counter/Counter'

class HomeScreen extends Component {

    constructor () {
        super();
            this.state = {
                counter: 0
            };
        }

        componentDidMount() {
            console.log("running")
            fetch('http://localhost:8000/counts')
                .then(res => res.json())
                .then(data => this.setState({ counter: data}))
                .catch(err => console.log(err))
        }

        incrementCount () {
            this.setState({
                counter: this.state.counter + 1
            });

            let data = {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'same-origin',
                body: JSON.stringify({
                    global_ibs_count: this.state.counter
                }),
                headers: {
                    'Accept':       'application/json',
                    'Content-Type': 'application/json',
                }
            }
                return fetch('http://localhost:8000/counts', data)
                        .then(response => response.json())  // promise
                        .then(json => {
                            console.log(response.json())
                            return json.counter
                        })
                        .catch((err) => console.log(err))
        }
    
    render(navigation) {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#99ccff' }}>
                <Counter 
                    count={this.state.counter} 
                    style={styles.CounterBox}
                />
                <TouchableOpacity 
                    onPress={this.incrementCount.bind(this)} 
                    title="+"
                    style={styles.ButtonBox}
                >
                    <Text style={{  fontSize: 40, textAlign: 'center', fontWeight: 'bold' }}>POOP TIME</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    ButtonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
        marginLeft: '32%',
        height: 150,
        width: 150,
        borderRadius: 150/2,
        backgroundColor: 'pink',
        fontWeight: 'bold'
    }
})

export default HomeScreen