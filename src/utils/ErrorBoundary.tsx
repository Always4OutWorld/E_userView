import React, {Component} from "react";
import Text from "../component/Text";
import {View} from 'react-native';

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
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Text>Something went wrong.</Text>
                </View>
            );
        }
        return this.props.children;
    }  
}

export default ErrorBoundary;