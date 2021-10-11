import {View, Image} from 'react-native';
import Text from '../Text';
import React from 'react';

export const LogoTitle = () => {
    return (
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Text
          size="largeB">
            User View
        </Text>
        <Image style={{
          height: 20,
          width: 20,
          borderRadius: 4,
        }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/84/84380.png'}}  />
      </View>
    );
  }