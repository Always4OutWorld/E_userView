import React, {FC} from 'react';
import {StyleSheet, TextStyle, Text as MyText} from 'react-native';

interface Props {
  size: string;
  style?: TextStyle;
}

const Text: FC<Props> = ({children, size, style, ...remainingProps}) => {
  return (
    <MyText numberOfLines={1} style={[styles[size], style]} {...remainingProps}>
      {children}
    </MyText>
  );
};

export default Text;

const styles: any = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
});
