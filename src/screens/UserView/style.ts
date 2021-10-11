import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: 'grey',
    },
    containerProfile: {
      padding: 1,
      flex: 0.7,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      justifyContent: 'flex-start',
    },
    navigate: {
      flex: 0.3,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    text: {
      marginLeft: 12,
      fontSize: 16,
    },
    photo: {
      height: 40,
      width: 40,
      padding: 4,
      borderRadius: 2,
    },
    textContainer: {
      marginLeft: 10,
    },
    photo2: {
      height: 20,
      width: 20,
      borderRadius: 4,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'black',
    },
    centreLoad: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default styles;