import React, {FC} from 'react';
import {StyleSheet, TextStyle, Text as MyText} from 'react-native';

interface Props {
  size?: string;
  style?: TextStyle;
}

const Text: FC<Props> = ({children, size = 'label', style, ...remainingProps}) => {
  return (
    <MyText numberOfLines={1} style={[styles[size], style]} {...remainingProps}>
      {children}
    </MyText>
  );
};

export default Text;

const styles: any = StyleSheet.create({
  large: {
    fontSize: 24,
    fontWeight: '400',
    color: 'black',
  },
  medium: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  small: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
  },
  largeB: {
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  mediumB: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  smallB: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
  labelB: {
    fontSize: 16,
    fontWeight: '900',
    color: 'grey',
  },
});
