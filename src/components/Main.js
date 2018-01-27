import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Main = ({ 
    round, 
    scores, 
    setAllMade,
    setText, 
    text,
 }) => {
    const getValue = (distance) => scores.get(String(round)).get(String(distance)).score.toString();
    const getPuttsMade = (distance) => scores.get(String(round)).get(String(distance)).puttsMade.toString();
    const isAllIn = (distance) => scores.get(String(round)).get(String(distance)).allIn;

    return (
        
        <View style={{
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: 50,
            borderWidth: 4,
            borderColor: 'black',
            width: '100%',
        }}>
            <View style={[styles.container, styles.scoreContainer]}>
                <Button 
                    style={styles.btn}
                    title="-"
                />
                <TextInput 
                    style={[styles.textInput, styles.largeText]} 
                    value={getPuttsMade(10)}
                />  
                <Button
                    title="+"
                />
            </View>

            <View style={styles.container}>
                <Text>First in +2</Text>
                <Text>Last in +2</Text>
            </View>

            <View style={[styles.containerm, styles.allMade]}>
                <Text>All made +5</Text>

                <CheckBox 
                    checked={false} 
                    containerStyle={{
                        backgroundColor: 'transparent', 
                        borderColor: 'transparent',
                        height: 10,
                    }}
                    onPress={() => setAllMade(round, 10)}
                    checked={isAllIn(10)}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.largeText}>{getValue(10)}</Text>
            </View>
  
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '25%',
        backgroundColor: 'green',
        height: 50,
    },

    container: {
     backgroundColor: 'white',
     width: '25%',
     height: 50,
     margin: 0,
     justifyContent: 'center',
     alignItems: 'center',
    },

    scoreContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        width: '25%',
        maxWidth: '25%',

    },

    textInput: {
        backgroundColor: 'blue', 
        width: '50%',
        flexBasis: 'auto',
    },

    largeText: {
        fontSize: 30,
    },

    allMade: {
        flexDirection: 'column',
        backgroundColor: 'white',
    }
  });

export default Main;