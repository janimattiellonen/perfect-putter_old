import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Main = ({ round, scores, setText, text }) => {
    const getValue = (distance) => {
        console.log("text: " + text);
        console.log(JSON.stringify(scores));
        return scores[round][distance].toString();
    }
    console.log("ddd: " + text);
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
                    style={styles.textInput} 
                    value={getValue(10)}
                />  
                <Button
                    title="+"
                />
            </View>

            <View style={styles.container}>
                <Text>First in!</Text>
            </View>

            <View style={styles.container}>
                <Text>All made +5</Text>
            </View>

            <View style={styles.container}>
                <Text>19</Text>
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
    },

    scoreContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        width: '25%',
        maxWidth: '25%',

    },

    textInput: {
        backgroundColor: 'blue', 
        fontSize: 30,
        width: '50%',
        flexBasis: 'auto',
    }
  });

export default Main;