import React from 'react';
import store from './src/redux';
import { Provider } from "react-redux";
import Navigation from './src/navigation';



const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
