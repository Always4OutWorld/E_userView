import React from 'react';
import store from './src/redux';
import { Provider } from "react-redux";
import Navigation from './src/navigation';
import ErrorBoundary from './src/utils/ErrorBoundary';



const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
