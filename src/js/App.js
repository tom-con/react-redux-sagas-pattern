import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import createStore from './config/ReduxStore';
import ToDoContainer from './components/todo/todo.container';
import ProgressContainer from './components/progress/progress.container';
import WeatherContainer from './components/weather/weather.container';

const { persistor, store } = createStore();

const appStyle = {
  fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textAlign: 'center',
  color: '#2c3e50',
}

class App extends Component {
  render() {
    return (
      <div 
        style={appStyle}
      >
        <Provider store={store}>
            <PersistGate
              loading={<div>Loading...</div>}
              persistor={persistor}
            >
              <Router>
                <div>
                  <Route
                    path="/todo"
                    component={ToDoContainer}
                  />
                  <Route
                    path="/progress"
                    component={ProgressContainer}
                  />
                  <Route
                    path="/weather"
                    component={WeatherContainer}
                  />
                </div>
              </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
