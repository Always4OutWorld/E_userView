import {View, Image, StyleSheet} from 'react-native';
import Text from '../Text';
import React from 'react';


const styles = StyleSheet.create({
  header: {
    height: 20,
    width: 20,
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
});

export const LogoTitle = () => {
    return (
      <View style={styles.container}>
        <Text
          size="largeB">
            User View
        </Text>
        <Image style={styles.header} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/84/84380.png'}}  />
      </View>
    );
  }