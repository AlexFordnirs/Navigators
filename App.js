import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableHighlight} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen() {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [result, setResult] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Средний расход топлива</Text>
            <Text style={styles.minusTitle}>Я заливаю топлива</Text>
            <TextInput style={styles.border} onChangeText={setText} value={text}></TextInput>
            <Text style={styles.minusTitle}>и проезжаю</Text>
            <TextInput style={styles.border} onChangeText={setText2} value={text2}></TextInput>
            <Button title="Расчитать расход" color="#cb0f2c" onPress={() => setResult(parseFloat(text)/parseFloat(text2))}></Button>
            <Text>{result}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

function SettingsScreen() {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [result, setResult] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Насколько хватит топлива</Text>
            <Text style={styles.minusTitle}>Расход топлива автомобиля</Text>
            <TextInput style={styles.border} onChangeText={setText} value={text}></TextInput>
            <Text style={styles.minusTitle}>я залил</Text>
            <TextInput style={styles.border} onChangeText={setText2} value={text2}></TextInput>
            <Button title="Расчитать растояние" color="#cb0f2c" onPress={() => setResult(parseFloat(text2)/parseFloat(text)*100)}></Button>
            <Text>{result}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

function TreeScreen() {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [result, setResult] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Стоимость поездки</Text>
            <Text style={styles.minusTitle}>Расстояние</Text>
            <TextInput style={styles.border} onChangeText={setText} value={text}></TextInput>
            <Text style={styles.minusTitle}>Средний расход топлива</Text>
            <TextInput style={styles.border} onChangeText={setText2} value={text2}></TextInput>
            <Text style={styles.minusTitle}>Стоимость 1 л. топлива</Text>
            <TextInput style={styles.border} onChangeText={setText3} value={text3}></TextInput>
            <Button title="Расчитать" color="#cb0f2c" onPress={() => setResult(parseFloat(text)/100*parseFloat(text2)*text3)}></Button>
            <Text>{result}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'car-outline' : 'car-outline';
                        }
                        else if (route.name === 'Tree') {
                            iconName = focused ? 'cash-outline' : 'cash-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Tree" component={TreeScreen} ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:30,
    },
    minusTitle:{
        fontSize:20,
    },
    border:{
        width: 200,
        borderColor:'black',
        borderWidth: 1,
        marginBottom:5
    },
});
