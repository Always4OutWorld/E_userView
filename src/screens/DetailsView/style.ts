import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 2,
      flexDirection: 'column',
      justifyContent: 'space-around',
      gap: 10,
      alignItems: 'center',
      borderBottomColor: 'grey',
    },
    photo: {
        height: 240,
        width: 240,
        borderRadius: 10,
        position: 'relative',
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
    },
    userAgeBox: {
        width: 40,
        height: 40,
        backgroundColor: '#ff007f',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderColor: 'yellow',
        borderWidth: 5
    },
    ageText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900',
        transform: [{rotate: '-45deg'}],
    },
    fullWidth: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center'
    },
    textLeft: {
        textAlign: 'left',
        width: '80%'
    },
    boxAlign: {
        width: '80%'
    }
});

export default styles;