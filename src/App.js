import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <ImageList />
      </div>
    </Provider>
  );
};

export default App;
