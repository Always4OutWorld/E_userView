import React, {Component} from "react";
import Text from "../component/Text";
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});

class ErrorBoundary extends Component {
    constructor(props: any) {
      super(props);
      this.state = {
          error: null,
          errorInfo: null
        };
    }
    
    componentDidCatch(error: any, errorInfo: any) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
        const {errorInfo}: any = this.state;
        if (errorInfo) {
            return (
                <View style={styles.container}>
                    <Text>Something went wrong.</Text>
                </View>
            );
        }
        return this.props.children;
    }  
}

export default ErrorBoundary;