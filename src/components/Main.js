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

    const renderPuttsMade = (distance) => (
        <View style={[styles.container, styles.scoreContainer]}>
                <Button 
                    style={styles.btn}
                    title="-"
                />
                <TextInput 
                    style={[styles.textInput, styles.largeText]} 
                    value={getPuttsMade(distance)}
                />  
                <Button
                    title="+"
                />
            </View>
    );

    const renderFirstAndLastMade = (distance) => (
        <View style={styles.container}>
            <Text>First in +2</Text>
            <Text>Last in +2</Text>
        </View>
    );

    const renderAllMade = (distance) => (
        <View style={[styles.containerm, styles.allMade]}>
            <Text>All made +5</Text>

            <CheckBox 
                checked={false} 
                containerStyle={{
                    backgroundColor: 'transparent', 
                    borderColor: 'transparent',
                    height: 10,
                }}
                onPress={() => setAllMade(round, distance)}
                checked={isAllIn(distance)}
            />
        </View>
    );

    const renderScore = (distance) => (
        <View style={styles.container}>
        <Text style={styles.largeText}>{getValue(distance)}</Text>
    </View>
    );
    
    return (
        <View style={{
            flex: 1, 
            flexDirection: 'column', 
            flexWrap: 'wrap',
            marginTop: 50,
            borderWidth: 4,
            borderColor: 'black',
            width: '100%',
        }}>
            {[10, 15, 20, 25, 30].map ((distance) => {
                return (
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',  
                      alignItems: 'flex-start',
                    }}>
                        {renderPuttsMade(distance)}

                        {renderFirstAndLastMade(distance)}

                        {renderAllMade(distance)}

                        {renderScore(distance)}
                    </View>
                    )
            })}
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